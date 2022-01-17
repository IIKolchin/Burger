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
  const buns = props.data.filter((item) => item.type === "bun")
  const sauces = props.data.filter((item) => item.type === "sauce")
  const mains = props.data.filter((item) => item.type === "main")
  const [current, setCurrent] = React.useState("one");
  return (
    <section>
      <h1 className={"mt-10 mb-5 " + styles.title}>Соберите бургер</h1>
      <div className={styles.tab}>
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
          {buns.map((data) => {
              return (
                <li key={data._id} className={styles.li}>
                  {data._id === "60666c42cc7b410027a1a9b1" ? (
                    <Counter count={1} size="default" />
                  ) : null}
                  <img className="ml-4 mr-4" src={data.image} alt={data.name} />
                  <div className={styles.price}>
                    <p className="text text_type_digits-default mr-2">
                      {data.price}
                    </p>
                    <CurrencyIcon />
                  </div>
                  <p className={styles.text + " mb-6"}>{data.name}</p>
                </li>
              );
            })}
        </ul>

        <h2 className={styles.subtitle + " mt-10 mb-6"}>Соусы</h2>
        <ul className={styles.ul + " ml-4"}>
          {sauces.map((data) => {
              return (
                <li key={data._id} className={styles.li}>
                  {data._id === "60666c42cc7b410027a1a9b9" ? (
                    <Counter count={1} size="default" />
                  ) : null}
                  <img className="ml-4 mr-4" src={data.image} alt={data.name} />
                  <div className={styles.price}>
                    <p className="text text_type_digits-default mr-2">
                      {data.price}
                    </p>
                    <CurrencyIcon />
                  </div>
                  <p className={styles.text + " mb-6"}>{data.name}</p>
                </li>
              );
            })}
        </ul>

        <h2 className={styles.subtitle + " mt-10 mb-6"}>Начинки</h2>
        <ul className={styles.ul + " ml-4"}>
          {mains.map((data) => {
              return (
                <li key={data._id} className={styles.li}>
                  <img className="ml-4 mr-4" src={data.image} alt={data.name} />
                  <div className={styles.price}>
                    <p className="text text_type_digits-default mr-2">
                      {data.price}
                    </p>
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
  data: PropTypes.arrayOf(dataPropTypes).isRequired,
};

export default BurgerIngredients;
