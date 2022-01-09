import React from "react";
import styles from "./burger-ingredients.module.css";
import {
  Tab,
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { dataPropTypes } from "../../utils/data";

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState("one");
  return (
    <section>
      <h1 className={"mt-10 mb-5 " + styles.title}>Соберите </h1>
      <div style={{ display: "flex" }}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={styles.ingredients + " mt-10"}>
        <h2 className={styles.subtitle + " mb-6"}>Булки</h2>
        <ul className={styles.ul + " ml-4"}>
          {props.data.map((data) => {
            if (data.type == "bun")
              return (
                <li key={data._id} className={styles.li + " ml-4"}>
                  {data._id === "60666c42cc7b410027a1a9b1" ? (
                    <Counter count={1} size="small" />
                  ) : null}

                  <img className="ml-4 mr-4" src={data.image} />

                  <div className={styles.price}>
                    <p className="text text_type_digits-default mr-2">20</p>
                    <CurrencyIcon />
                  </div>

                  <p className={styles.text + " mb-6"}>{data.name}</p>
                </li>
              );
          })}
        </ul>

        <h2 className={styles.subtitle + " mt-10 mb-6"}>Соусы</h2>
        <ul className={styles.ul + " ml-4"}>
          {props.data.map((data) => {
            if (data.type == "sauce")
              return (
                <li key={data._id} className={styles.li + " ml-4"}>
                  {data._id === "60666c42cc7b410027a1a9b9" ? (
                    <Counter count={1} size="small" />
                  ) : null}
                  <img className="ml-4 mr-4" src={data.image} />
                  <div className={styles.price}>
                    <p className="text text_type_digits-default mr-2">30</p>
                    <CurrencyIcon />
                  </div>

                  <p className={styles.text + " mb-6"}>{data.name}</p>
                </li>
              );
          })}
        </ul>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired),
};

export default BurgerIngredients;
