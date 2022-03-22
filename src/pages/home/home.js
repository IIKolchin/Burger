import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import styles from "./home.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getIngredients } from "../../services/actions/ingredients";
import { useSelector, useDispatch } from "react-redux";
import { getUserRequest } from "../../services/actions/getUser";
import React, { useEffect } from "react";

export function HomePage() {
  
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.authorization.accessToken);

  const getUser = () => {
    dispatch(getUserRequest(accessToken));
  };

  useEffect(() => {
    dispatch(getIngredients());
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
