import React, { useMemo, useCallback } from "react";
import update from "immutability-helper";
import { URL, checkResponse } from "../../utils/data";
import { v4 as uuidv4 } from "uuid";
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
  GENERATE_ID,
  UPDATE_POSITION_ITEM,
  RESET_CONSTRUCTOR,
} from "../../services/actions/constructor";
import { useHistory } from 'react-router-dom';

function BurgerConstructor() {
  
  const data = useSelector((store) => store.items.data);
  const constructor = useSelector((store) => store.element.constructor);
  const bun = useSelector((store) => store.element.bun);
  const generateId = useSelector((store) => store.element.generateId);
  const showOrder = useSelector((store) => store.orderDetails.showOrder);
  const order = useSelector((store) => store.orderDetails.order);
  const ingredients = ["sauce", "main"];
  const items = [bun, bun, ...constructor];
  const id = items.map((item) => item._id);
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.authorization.isAuth)
  const history = useHistory();
// const newOrder = {...order}
const accessToken = useSelector((store) => store.authorization.accessToken);


  const [{ ingredientHover }, dropTarget] = useDrop({
    accept: ingredients,
    drop(item) {
      dispatch({
        type: GENERATE_ID,
        payload: uuidv4(),
      });
      dispatch({
        type: ADD_ITEM,
        ...item,
        payload: data.find((el) => el._id === item.id),
      });
    },
    collect: (monitor) => ({
      ingredientHover: monitor.isOver(),
    }),
  });

  const [{ bunHover }, drop] = useDrop({
    accept: "bun",
    drop(item) {
      dispatch({
        type: ADD_BUN,
        ...item,
        payload: data.find((el) => el._id === item.id),
      });
    },
    collect: (monitor) => ({
      bunHover: monitor.isOver(),
    }),
  });

  const borderColor = bunHover || ingredientHover ? "#4C4CFF" : "transparent";

  const updateItem = useCallback(
    (dragIndex, hoverIndex) => {
      dispatch({
        type: UPDATE_POSITION_ITEM,
        payload: update([...constructor], {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, constructor[dragIndex]],
          ],
        }),
      });
    },
    [constructor, dispatch]
  );

  function handleShow() {
  fetch(`${URL}auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: accessToken,
      },
    })
    .then(checkResponse)
    .then((res) => {
        
      if (res && res.success) {
        dispatch(getOrder(id));
        dispatch({ type: SHOW_ORDER });
      } 
    })
    .catch((err) => {
      console.log(err);
      history.replace({ pathname: '/login' });

    })
  }

  function handleHide() {
    dispatch({ type: CLOSE_ORDER });
    dispatch({ type: RESET_CONSTRUCTOR });
  }

  const totalPrice = useMemo(() => {

    // const total = [...items, ...constr]
    let total = 0;
    // let main = 0;
    items.map((item) => (total += item.price || 0));
    // constructor.map((item) => (main += item.price));
    return total ? total : 0;
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
                key={generateId[index]}
                index={index}
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
