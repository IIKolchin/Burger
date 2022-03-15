import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback, useState } from "react";
import styles from "./profile.module.css";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { URL, checkResponse } from "../utils/data";
import { deleteCookie } from "../utils/cookie";
import { logoutRequest } from "../services/actions/logout";
import { useHistory } from "react-router-dom";
import { SET_REGISTER } from "../services/actions/register";
import { GET_AUTHORIZATION_FAILED } from "../services/actions/authorization";
import { updateTokenRequest, UPDATE_TOKEN_SUCCESS } from "../services/actions/updateToken";



export function Profile() {
  const dispatch = useDispatch();

  const accessToken = useSelector((store) => store.authorization.accessToken);
  const newAccessToken = useSelector((store) => store.updateToken.accessToken);
  const form = useSelector((store) => store.register.form);
  const isAuth = useSelector((store) => store.authorization.isAuth);
  const history = useHistory();

  const onChange = (e) => {
    dispatch({
      type: SET_REGISTER,
      payload: { ...form, [e.target.name]: e.target.value },
    });
  };

 

  const signOut = async () => {
    dispatch(logoutRequest());
    dispatch({ type: GET_AUTHORIZATION_FAILED });
    deleteCookie("token");
  };

  const cancel = () => {
    dispatch({ 
      type: SET_REGISTER,
      payload: {...form, name: '', email: '', password: ''}
  });
  };


  const logout = useCallback(() => {
    signOut()
    .then(() => {
      history.replace({ pathname: '/login' });
    });
  }, []);


  console.log(form);
  console.log(accessToken);
  console.log(newAccessToken);

  const updateUser = () =>
    fetch(`${URL}auth/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())

      .catch((err) => {
        console.log(err);
        
      })
      .then(() => {
        fetch(`${URL}auth/user`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: newAccessToken,
          },
          body: JSON.stringify(form),
        })
      }) 
      .catch((err) => {
        console.log(err);
        
      })

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <button /* onClick={getUser} */ className={styles.a + " mb-8"}>
          Профиль
        </button>
        <button className={styles.a + " mb-8"}>История заказов</button>
        <button onClick={logout} className={styles.a}>
          Выход
        </button>
      </nav>
      <p className={styles.p + " mt-20"}>
        В этом разделе вы можете изменить свои персональные данные
      </p>

      <div className={styles.input}>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={onChange}
            value={form.name}
            name={"name"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>

        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Логин"}
            onChange={onChange}
            value={form.email}
            name={"email"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>

        <div>
          <Input
            type={"text"}
            placeholder={"Пароль"}
            onChange={onChange}
            //   icon={'CurrencyIcon'}
            value={form.password}
            name={"password"}
            error={false}
            //   ref={inputRef}
            //   onIconClick={onIconClick}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        <div className={styles.buttons + " mt-6 mr-2"}>
          <div>
            <Button onClick={updateUser} type="primary" size="medium">
              Сохранить
            </Button>
          </div>
          <div>
            <Button onClick={cancel} type="primary" size="medium">
              Отмена
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
