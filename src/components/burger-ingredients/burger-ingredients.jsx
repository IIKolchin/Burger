import React, { useState, useContext, useEffect } from "react";
import styles from "./burger-ingredients.module.css";
import {
  Tab,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import Ingredient from "../ingredient/ingredient";
import { DataContext } from "../../services/appContext";
import { useSelector, useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";
import { SHOW_MODAL, HIDE_MODAL } from "../../services/actions/ingredients";

function BurgerIngredients() {
  // const [state, setState] = useState({
  //   showModal: false,
  //   shortModal: false,
  // });
  const data = useSelector((store) => store.items.data);
  const dispatch = useDispatch();

 

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  // const data = useContext(DataContext);

  const showModal = useSelector((state) => state.items.showModal);
  const shortModal = useSelector((state) => state.items.shortModal);



  const [id, setId] = useState();

  const handleShow = (e) => {

    setId(e.currentTarget.id);

    dispatch({
      type: SHOW_MODAL,
     
    });
 
  }

  const handleHide = () => {

    dispatch({ type: HIDE_MODAL});
  }

  const ingredient = data.find((item) => item._id.includes(id));

  const buns = data.filter((item) => item.type === "bun");
  const sauces = data.filter((item) => item.type === "sauce");
  const mains = data.filter((item) => item.type === "main");
  const [current, setCurrent] = React.useState("one");

  const ingredientCount = () => {};

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
              <Ingredient key={data._id} data={data} handleShow={handleShow}>
                {data._id === "60d3b41abdacab0026a733c6" ? (
                  <Counter count={1} size="default" />
                ) : null}
              </Ingredient>
            );
          })}
        </ul>

        <h2 className={styles.subtitle + " mt-10 mb-6"}>Соусы</h2>
        <ul className={styles.ul + " ml-4"}>
          {sauces.map((data) => {
            return (
              <Ingredient key={data._id} data={data} handleShow={handleShow}>
                {data._id === "60d3b41abdacab0026a733ce" ? (
                  <Counter count={1} size="default" />
                ) : null}
              </Ingredient>
            );
          })}
        </ul>

        <h2 className={styles.subtitle + " mt-10 mb-6"}>Начинки</h2>
        <ul className={styles.ul + " ml-4"}>
          {mains.map((data) => {
            return (
              <Ingredient key={data._id} data={data} handleShow={handleShow} />
            );
          })}
        </ul>
      </div>

      {showModal && (
        <Modal
          header="Детали ингредиента"
          shortModal={shortModal}
          handleHide={handleHide}
        >
          <IngredientDetails data={ingredient} />
        </Modal>
      )}
    </section>
  );
}

export default BurgerIngredients;
