import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import styles from "./home.module.css";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { URL, checkResponse } from "../utils/data";
import { getIngredients } from "../services/actions/ingredients";
import { useSelector, useDispatch } from "react-redux";
import { getUserRequest } from "../services/actions/getUser";
import { updateTokenRequest } from "../services/actions/updateToken";
import { GET_AUTHORIZATION_FAILED } from "../services/actions/authorization"
import { Redirect } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import { getCookie } from "../utils/cookie";
import { useHistory } from "react-router-dom";


export function HomePage() {
  const dispatch = useDispatch();

  const accessToken = useSelector((store) => store.authorization.accessToken);
  const newAccessToken = useSelector((store) => store.updateToken.accessToken);
  const user = useSelector((store) => store.user.isUser);
  const history = useHistory();
  const isAuth = useSelector((store) => store.authorization.isAuth)
  const userFailed = useSelector((store) => store.user.userFailed);
  // if(getCookie('token')) {
  //   dispatch(updateTokenRequest())
  // }
  
console.log(isAuth)
// console.log(getCookie('token'))

  const getUser = () => {
    dispatch(getUserRequest(accessToken))


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
