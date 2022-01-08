import React from "react";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor(props) {
  return (
    <section className={styles.section + " mt-25 ml-10"}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
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
        <div className={styles.group + " mb-4"}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Соус традиционный галактический"
            price={30}
            thumbnail={"https://code.s3.yandex.net/react/code/sauce-03.png"}
          />
        </div>

        <div className={styles.group + " mb-4"}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Мясо бессмертных моллюсков Protostomia"
            price={200}
            thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
          />
        </div>

        <div className={styles.group + " mb-4"}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Плоды Фалленианского дерева"
            price={80}
            thumbnail={"https://code.s3.yandex.net/react/code/sp_1.png"}
          />
        </div>

        <div className={styles.group + " mb-4"}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Хрустящие минеральные кольца"
            price={80}
            thumbnail={
              "https://code.s3.yandex.net/react/code/mineral_rings.png"
            }
          />
        </div>

        <div className={styles.group + " mb-4"}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Хрустящие минеральные кольца"
            price={80}
            thumbnail={
              "https://code.s3.yandex.net/react/code/mineral_rings.png"
            }
          />
        </div>

        <div className={styles.group + " mb-4"}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Кристаллы марсианских альфа-сахаридов"
            price={80}
            thumbnail={
              "https://code.s3.yandex.net/react/code/core.png"
            }
          />
        </div>

        <div className={styles.group}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Соус с шипами Антарианского плоскоходца"
            price={80}
            thumbnail={
              "https://code.s3.yandex.net/react/code/sauce-01.png"
            }
          />
        </div>


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

      <div className={styles.order + " mt-10 mr-4"} >
<div className={styles.price}>
      <p className="text text_type_digits-medium mr-2">610</p>
      <CurrencyIcon type="primary" />
      </div>  
      <Button type="primary" size="medium">
  Оформить заказ
</Button>

      </div>
    </section>
  );
}

export default BurgerConstructor;
