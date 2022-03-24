import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import styles from "./home.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector, useDispatch } from "react-redux";
import { getUserRequest } from "../../services/actions/getUser";
import React, { useEffect } from "react";
import { getCookie } from "../../utils/cookie";

export function HomePage() {
  
  const dispatch = useDispatch();


  const getUser = () => {
    dispatch(getUserRequest(getCookie("token")))
  };

  useEffect(() => {
    getUser();
  }, [dispatch]);

  return (
    <main className={styles.main}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </main>
  );
}
