import React, { useState, useContext } from "react";

import OrderDetails from "../order-details/order-details";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import PropTypes from "prop-types";
import { dataPropTypes } from "../../utils/data";
import { DataContext } from "../../services/dataContext";

function BurgerConstructor() {
  const [state, setState] = useState({
    showModal: false,
  });

  const data = useContext(DataContext);

  function handleShow() {
    setState({ ...state, showModal: true });
  }

  function handleHide() {
    setState({ ...state, showModal: false });
  }

  const bun = data.find((item) => item.type.includes("bun"));


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
          {data
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
        <p className="text text_type_digits-medium mr-2">610</p>
        <div className={styles.icon}></div>
        <Button onClick={handleShow} type="primary" size="large">
          Оформить заказ
        </Button>
      </div>

      {state.showModal && (
        <Modal handleHide={handleHide}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}

// BurgerConstructor.propTypes = {
//   data: PropTypes.arrayOf(dataPropTypes).isRequired,
// };

export default BurgerConstructor;
