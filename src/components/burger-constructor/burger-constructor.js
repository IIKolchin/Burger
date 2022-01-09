import React from "react";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function BurgerConstructor(props) {
  return (
    <section className={styles.section + " mt-25 ml-10"}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginLeft: "16px",
        }}
      >
        <div className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={20}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </div>

        <section className={styles.constructor}>
          {props.data.map((data) => {
            if (data.type == "main" || data.type == "sauce")
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
        </section>

        <div className="ml-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={20}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </div>
      </div>

      <div className={styles.order + " mt-10 mr-4"}>
        <p className="text text_type_digits-medium mr-2">610</p>
        <div className={styles.icon}></div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

const dataPropTypes = PropTypes.shape({
  _id: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
});

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired),
};

export default BurgerConstructor;
