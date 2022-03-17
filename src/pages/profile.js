import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./profile.module.css";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { URL, checkResponse } from "../utils/data";
import { deleteCookie } from "../utils/cookie";
import { logoutRequest } from "../services/actions/logout";
import { useHistory } from "react-router-dom";
import {
  SET_REGISTER,
  GET_REGISTER_SUCCESS,
} from "../services/actions/register";
import { GET_AUTHORIZATION_FAILED } from "../services/actions/authorization";
import {
  updateTokenRequest,
  UPDATE_TOKEN_SUCCESS,
} from "../services/actions/updateToken";
import { SET_AUTHORIZATION } from "../services/actions/authorization";

export function Profile() {
  const dispatch = useDispatch();

  const accessToken = useSelector((store) => store.authorization.accessToken);
  const newAccessToken = useSelector((store) => store.updateToken.accessToken);
  const form = useSelector((store) => store.register.form);
  const isAuth = useSelector((store) => store.authorization.isAuth);
  const history = useHistory();


  let user

  const getUserInfo = () => {
    fetch(`${URL}auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: accessToken,
      },
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {

         

          user = res.user 

          form.name = res.user.name;
          form.email = res.user.email;
        }
      });
  };

console.log(user)


  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  const onChange = (e) => {
    dispatch({
      type: SET_REGISTER,
      payload: { ...form, [e.target.name]: e.target.value },
    });
  };


  const cancel = () => {
    fetch(`${URL}auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: accessToken,
      },
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          form.name = res.user.name;
          form.email = res.user.email;
        }
      });
    }




  const signOut = async () => {
    dispatch(logoutRequest());
    dispatch({ type: GET_AUTHORIZATION_FAILED });
    deleteCookie("token");
  };



  const logout = useCallback(() => {
    signOut().then(() => {
      history.replace({ pathname: "/login" });
    });
  }, []);

  console.log(form);
  console.log(accessToken);
  console.log(newAccessToken);

  const formSubmit = (e) => {
    e.preventDefault();

    fetch(`${URL}auth/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify(form),
    });
  };

  // const updateUser = () =>

  //   fetch(`${URL}auth/user`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: accessToken,
  //     },
  //     body: JSON.stringify(form),
  //   })
  //     .then((res) => res.json())

  //     .catch((err) => {
  //       console.log(err);
  //       fetch(`${URL}auth/user`, {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: newAccessToken,
  //         },
  //         body: JSON.stringify(form),
  //       })
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <button onClick={getUserInfo} className={styles.a + " mb-8"}>
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

      <form onSubmit={formSubmit} className={styles.input}>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={onChange}
            value={form.name}
            name={"name"}
            size={"default"}
          />
        </div>

        <div className="mb-6">
          <Input
            type={"email"}
            placeholder={"Логин"}
            onChange={onChange}
            value={form.email}
            name={"email"}
            size={"default"}
          />
        </div>

        <div>
          <Input
            type={"password"}
            placeholder={"Пароль"}
            onChange={onChange}
            value={form.password}
            name={"password"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
          />
        </div>
        {/* <div className={styles.buttons + " mt-6 mr-2"}> */}
          <div className={styles.buttons + " mt-6 mr-2"}>
            <Button type="primary" size="medium">
              Сохранить
            </Button>
          </div>
          </form>
          <div>
            <Button onClick={cancel} type="primary" size="medium">
              Отмена
            </Button>
          </div>
        {/* </div> */}
      
    </div>
  );
}
