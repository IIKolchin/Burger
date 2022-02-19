import React, { useMemo } from "react";
import OrderDetails from "../order-details/order-details";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import Item from "../item/item";
import {
  SHOW_ORDER,
  CLOSE_ORDER,
  getOrder,
} from "../../services/actions/order";
import {
  ADD_ITEM,
  ADD_BUN,
  UPDATE_POSITION_ITEM,
} from "../../services/actions/ingredients";

function BurgerConstructor() {
  
  const constructor = useSelector((store) => store.items.constructor);
  const bun = useSelector((store) => store.items.bun);
  const showOrder = useSelector((store) => store.orderDetails.showOrder);
  const order = useSelector((store) => store.orderDetails.order);
  const ingredients = ["sauce", "main"];
  const items = constructor.concat(bun, bun);

  const id = items.map((item) => item._id);

  const dispatch = useDispatch();

  const [{ Hover }, dropTarget] = useDrop({
    accept: ingredients,
    drop(item) {
      dispatch({
        type: ADD_ITEM,
        ...item,
      });
    },
    collect: (monitor) => ({
      Hover: monitor.isOver(),
    }),
  });

  const [{ isHover }, drop] = useDrop({
    accept: "bun",
    drop(item) {
      dispatch({
        type: ADD_BUN,
        ...item,
      });
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const borderColor = isHover || Hover ? "#4C4CFF" : "transparent";

  const updateItem = (dragIndex, hoverIndex) => {
    const dragItem = constructor[dragIndex];
    const hoverItem = constructor[hoverIndex];
    const updatedItems = [...constructor];
    updatedItems[dragIndex] = hoverItem;
    updatedItems[hoverIndex] = dragItem;
    dispatch({
      type: UPDATE_POSITION_ITEM,
      constructor: updatedItems,
    });
  };

  function handleShow() {
    dispatch(getOrder(id));
    dispatch({ type: SHOW_ORDER });
  }

  function handleHide() {
    dispatch({ type: CLOSE_ORDER });
  }

  const totalPrice = useMemo(() => {
    let total = 0;
    let main = 0;
    items.map((item) => (total += item.price));
    constructor.map((item) => (main += item.price));
    return total ? total : main ? main : 0;
  }, [items]);

  return (
    <section className={styles.section + " mt-25 ml-10"}>
      <div className={styles.component} ref={drop} style={{ borderColor }}>
        {bun.type && (
          <div className="ml-8">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bun.name + " (верх)"}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        )}

        <div className={styles.constructor} ref={dropTarget}>
          {constructor.map((data, index) => {
            return (
              <Item
                index={index}
                key={index}
                data={data}
                updateItem={updateItem}
              />
            );
          })}
        </div>

        {bun.type && (
          <div className="ml-8">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={bun.name + " (низ)"}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        )}
      </div>

      <div className={styles.order + " mt-10 mr-4"}>
        <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
        <div className={styles.icon}></div>
        <Button onClick={handleShow} type="primary" size="large">
          Оформить заказ
        </Button>
      </div>

      {showOrder && order && bun.type && (
        <Modal handleHide={handleHide}>
          <OrderDetails order={order} />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
