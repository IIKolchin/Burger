import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import styles from "./home.module.css";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { getIngredients } from "../services/actions/ingredients";
import { useSelector, useDispatch } from "react-redux";
import { getUserRequest } from "../services/actions/getUser";
import { updateTokenRequest } from "../services/actions/updateToken";
import { Redirect } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";

export function HomePage() {
  const dispatch = useDispatch();

  const accessToken = useSelector((store) => store.authorization.accessToken);
  const newAccessToken = useSelector((store) => store.updateToken.accessToken);
  const user = useSelector((store) => store.user.isUser);

  const getUser = async () => {
    await dispatch(getUserRequest(accessToken))
      .then((res) => {
        if (res && res.success) {
          console.log(res.user);
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(updateTokenRequest()).then(() => {
          dispatch(getUserRequest(newAccessToken))
            .then((res) => res.json())
            .then((res) => {})
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(user)


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
