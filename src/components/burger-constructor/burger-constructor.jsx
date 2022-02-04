import React, { useState, useContext, useMemo } from "react";
import { URL, checkResponse } from "../../utils/data";
import OrderDetails from "../order-details/order-details";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import { DataContext } from "../../services/appContext";
import { OrderContext } from "../../services/orderContext";

function BurgerConstructor() {

  const [state, setState] = useState({
    showModal: false,
  });
  const [order, setOrder] = useState(null);
  const data = useContext(DataContext);

  const bun = data.find((item) => item.type.includes("bun"));
  const sauce = data.filter((item) => item.type.includes("sauce"));
  const main = data.filter((item) => item.type.includes("main"));
  const ingredients = main.concat(sauce);
  ingredients.push(bun, bun);

  let id;

  function handleShow() {
    if (ingredients.length > 3) {
      id = ingredients.map((item) => item._id);
    }
    fetch(`${URL}orders`, {
      method: "POST",
      body: JSON.stringify({
        ingredients: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkResponse)
      .then((res) => {
        setOrder(res.order);
        setState({ ...state, showModal: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleHide() {
    setState({ ...state, showModal: false });
  }

  const totalPrice = useMemo(() => {
    let total = 0;
    if (ingredients.length > 3) {
      ingredients.map((item) => (total += item.price));
    }
    return total;
  }, [ingredients]);

  return (
    <section className={styles.section + " mt-25 ml-10"}>
      <div className={styles.component}>
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

        <div className={styles.constructor}>
          {main.map((data) => {
            return (
              <div key={data._id} className={styles.group}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={data.name}
                  price={data.price}
                  thumbnail={data.image}
                />
              </div>
            );
          })}

          {sauce.map((data) => {
            return (
              <div key={data._id} className={styles.group}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={data.name}
                  price={data.price}
                  thumbnail={data.image}
                />
              </div>
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

      {state.showModal && (
        <Modal handleHide={handleHide}>
          <OrderContext.Provider value={order}>
            <OrderDetails />
          </OrderContext.Provider>
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
