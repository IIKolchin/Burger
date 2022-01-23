import React from "react";
import styles from "./order-details.module.css";

function OrderDetails() {
  return (
    <div className={styles.container}>
      <p className={styles.number + " text text_type_digits-large mt-20"}>
        034536
      </p>
      <p className={styles.text_one + " mt-8 mb-15"}>идентификатор заказа</p>
      <div className={styles.done}></div>
      <p className={styles.text_two + " mt-15 mb-2"}>
        Ваш заказ начали готовить
      </p>
      <p className={styles.text_three + " mb-30"}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;