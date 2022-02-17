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
  const data = useSelector((store) => store.items.data);
  const constructor = useSelector((store) => store.items.constructor);
  const typeConstructor = constructor.find((item) => item.type);

  const bun = useSelector((store) => store.items.bun);
  const dispatch = useDispatch();

  const showOrder = useSelector((store) => store.orderDetails.showOrder);
  const order = useSelector((store) => store.orderDetails.order);
  const ingredients = ["sauce", "main"];

  const [, dropTarget] = useDrop({
    accept: ingredients,
    drop(item) {
      dispatch({
        type: ADD_ITEM,
        ...item,
      });
    },
  });

  const [, drop] = useDrop({
    accept: "bun",
    drop(item) {
      dispatch({
        type: ADD_BUN,
        ...item,
      });
    },
  });

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

  const items = constructor.concat(bun);
  items.push(bun);

  const id = items.map((item) => item._id);

  function handleShow() {
    dispatch(getOrder(id));
    dispatch({ type: SHOW_ORDER });
  }

  function handleHide() {
    dispatch({ type: CLOSE_ORDER });
  }

  const totalPrice = useMemo(() => {
    let total = 0;

    items.map((item) => (total += item.price));

    return total ? total : 0;
  }, [items]);

  return (
    <section className={styles.section + " mt-25 ml-10"}>
      <div className={styles.component} ref={drop}>
        {bun && (
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

        {bun && (
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

      {showOrder && (
        <Modal handleHide={handleHide}>
          <OrderDetails order={order} />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
