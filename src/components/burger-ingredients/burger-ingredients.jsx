import React, { useState, useContext, useEffect, useRef } from "react";
import styles from "./burger-ingredients.module.css";
import {
  Tab,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import Ingredient from "../ingredient/ingredient";
import { useSelector, useDispatch } from "react-redux";
import { HIDE_MODAL, getIngredients } from "../../services/actions/ingredients";

function BurgerIngredients() {
  const data = useSelector((store) => store.items.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const showModal = useSelector((state) => state.items.showModal);
  const shortModal = useSelector((state) => state.items.shortModal);
  const ingedientModal = useSelector((state) => state.items.ingredient);

  const handleHide = () => {
    dispatch({ type: HIDE_MODAL });
  };

  const buns = data.filter((item) => item.type === "bun");
  const sauces = data.filter((item) => item.type === "sauce");
  const mains = data.filter((item) => item.type === "main");
  const [current, setCurrent] = React.useState("one");

  // const bun = useRef();
  // const sauce = useRef();
  // const main = useRef();

  const set1 = () => {
    setCurrent("one");
    // bun.current.scrollIntoView({ behavior: "smooth" });
  };

  const set2 = () => {
    setCurrent("two");
    // sauce.current.scrollIntoView({ behavior: "smooth" });
  };

  const set3 = () => {
    setCurrent("three");
    // main.current.scrollIntoView({ behavior: "smooth" });
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
        <h2 className={styles.subtitle + " mb-6"} id={"1"} /* ref={bun} */>
          Булки
        </h2>
        <ul className={styles.ul + " ml-4"}>
          {buns.map((data) => {
            return (
              <Ingredient key={data._id} data={data}>
                {data._id === "60d3b41abdacab0026a733c6" ? (
                  <Counter count={1} size="default" />
                ) : null}
              </Ingredient>
            );
          })}
        </ul>

        <h2
          className={styles.subtitle + " mt-10 mb-6"}
          id={"2"} /*  ref={sauce} */
        >
          Соусы
        </h2>
        <ul className={styles.ul + " ml-4"}>
          {sauces.map((data) => {
            return (
              <Ingredient key={data._id} data={data}>
                {data._id === "60d3b41abdacab0026a733ce" ? (
                  <Counter count={1} size="default" />
                ) : null}
              </Ingredient>
            );
          })}
        </ul>

        <h2
          className={styles.subtitle + " mt-10 mb-6"}
          id={"3"} /* ref={main} */
        >
          Начинки
        </h2>
        <ul className={styles.ul + " ml-4"}>
          {mains.map((data) => {
            return <Ingredient key={data._id} data={data} />;
          })}
        </ul>
      </div>

      {showModal && (
        <Modal
          header="Детали ингредиента"
          shortModal={shortModal}
          handleHide={handleHide}
        >
          <IngredientDetails data={ingedientModal} />
        </Modal>
      )}
    </section>
  );
}

export default BurgerIngredients;
