import React from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import Ingredient from "../ingredient/ingredient";
import { useSelector, useDispatch } from "react-redux";
import { HIDE_MODAL } from "../../services/actions/modalIngredient";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";

function BurgerIngredients() {


  
  const data = useSelector((store) => store.items.data);


  const buns = data.filter((item) => item.type === "bun");
  const sauces = data.filter((item) => item.type === "sauce");
  const mains = data.filter((item) => item.type === "main");
  const [current, setCurrent] = React.useState("one");

  const location = useLocation();


  const set1 = () => {
    setCurrent("one");
  };

  const set2 = () => {
    setCurrent("two");
  };

  const set3 = () => {
    setCurrent("three");
  };

  const handleScroll = (e) => {
    let element = e.target;
    if (element.scrollTop > 0 && element.scrollTop < 290) {
      set1();
    } else if (element.scrollTop > 290 && element.scrollTop < 850) {
      set2();
    } else if (element.scrollTop > 850) {
      set3();
    }
  };

  return (
    <section>
      <h1 className={"mt-10 mb-5 " + styles.title}>Соберите бургер</h1>
      <div className={styles.tab}>
        <a className={styles.a} href="#1">
          <Tab value="one" active={current === "one"} onClick={set1}>
            Булки
          </Tab>
        </a>
        <a className={styles.a} href="#2">
          <Tab value="two" active={current === "two"} onClick={set2}>
            Соусы
          </Tab>
        </a>

        <a className={styles.a} href="#3">
          <Tab value="three" active={current === "three"} onClick={set3}>
            Начинки
          </Tab>
        </a>
      </div>
      <div className={styles.ingredients + " mt-10"} onScroll={handleScroll}>
        <h2 className={styles.subtitle + " mb-6"} id={"1"}>
          Булки
        </h2>
        <ul className={styles.ul + " ml-4"}>
          {buns.map((data) => {
            return (
              <Link
                key={data._id}
                className={styles.link}
                to={{
                  pathname: `/ingredients/${data._id}`,
                  state: { background: location },
                }}
              >
                <Ingredient data={data} />
              </Link>
            );
          })}
        </ul>

        <h2 className={styles.subtitle + " mt-10 mb-6"} id={"2"}>
          Соусы
        </h2>
        <ul className={styles.ul + " ml-4"}>
          {sauces.map((data) => {
            return (
              <Link
                key={data._id}
                className={styles.link}
                to={{
                  pathname: `/ingredients/${data._id}`,
                  state: { background: location },
                }}
              >
                <Ingredient data={data} />
              </Link>
            );
          })}
        </ul>

        <h2 className={styles.subtitle + " mt-10 mb-6"} id={"3"}>
          Начинки
        </h2>
        <ul className={styles.ul + " ml-4"}>
          {mains.map((data) => {
            return (
              <Link
                key={data._id}
                className={styles.link}
                to={{
                  pathname: `/ingredients/${data._id}`,
                  state: { background: location },
                }}
              >
                <Ingredient data={data} />
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default BurgerIngredients;
