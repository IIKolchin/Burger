import React from "react";
import { useState } from "react";
import OrderDetails from "../order-details/order-details";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { dataPropTypes } from "../../utils/data";

function BurgerConstructor(props) {
  const [state, setState] = useState({
    showModal: false,
  });

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  function handleShow() {
    setState({ ...state, showModal: true });
  }

  function handleHide() {
    setState({ ...state, showModal: false });
  }
  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      handleHide();
    }
  }

  return (
    <section className={styles.section + " mt-25 ml-10"}>
      <div className={styles.component}>
        {props.data
          .filter((item) => item.name.includes("Краторная булка N-200i"))
          .map((data) => {
            return (
              <div key={data._id} className="ml-8">
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={data.name + " (верх)"}
                  price={data.price}
                  thumbnail={data.image}
                />
              </div>
            );
          })}

        <div className={styles.constructor}>
          {props.data
            .filter((item) => item.type.includes("main" || "sauce"))
            .map((data) => {
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

        {props.data
          .filter((item) => item.name.includes("Краторная булка N-200i"))
          .map((data) => {
            return (
              <div key={data._id} className="ml-8">
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={data.name + " (низ)"}
                  price={data.price}
                  thumbnail={data.image}
                />
              </div>
            );
          })}
      </div>

      <div className={styles.order + " mt-10 mr-4"}>
        <p className="text text_type_digits-medium mr-2">610</p>
        <div className={styles.icon}></div>
        <Button onClick={handleShow} type="primary" size="large">
          Оформить заказ
        </Button>
      </div>

      {state.showModal ? <OrderDetails handleHide={handleHide} /> : null}
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes).isRequired,
};

export default BurgerConstructor;
