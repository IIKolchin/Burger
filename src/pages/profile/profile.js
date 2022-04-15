import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./profile.module.css";
import { Link, Redirect, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutRequest } from "../../services/actions/logout";
import {
  patchUserRequest,
  SET_PATCH_USER,
} from "../../services/actions/patchUser";
import { WS_CONNECTION_START } from "../../services/actions/wsActions";

export function Profile() {
  const dispatch = useDispatch();
  const [showButton, setShowButton] = useState(false);
  const form = useSelector((store) => store.patchUser.form);
  const userForm = useSelector((store) => store.user.form);
  const isAuth = useSelector((store) => store.authorization.isAuth);
  const login = sessionStorage.getItem("login");
  const [, forceUpdate] = useState(0);
  const inputRefName = React.useRef(null);
  const inputRefEmail = React.useRef(null);
  const inputRefPassword = React.useRef(null);



  const onChange = (e) => {
    dispatch({
      type: SET_PATCH_USER,
      payload: { ...form, [e.target.name]: e.target.value },
    });
    setShowButton(true);
  };

  const onIconClickName = () => {
    setTimeout(() => inputRefName.current.focus(), 0);
  };
  const onIconClickEmail = () => {
    setTimeout(() => inputRefEmail.current.focus(), 0);
  };
  const onIconClickPassword = () => {
    setTimeout(() => inputRefPassword.current.focus(), 0);
  };

  const cancel = useCallback(() => {
    form.name = userForm.name;
    form.email = userForm.email;
    setShowButton(false);
    forceUpdate((n) => !n);
  }, [form]);

  const signOut = async () => {
    dispatch(logoutRequest());
  };

  const logout = useCallback(() => {
    signOut();
  }, [signOut]);

  if (!isAuth) {
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  }

  if (!login) {
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  }

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(patchUserRequest(form));
    setShowButton(false);
  };

  return (
    <div className={styles.container}>
      <div>
        <nav className={styles.nav}>
          <NavLink
            to={{ pathname: `/profile` }}
            exact
            className={styles.a + " mb-8"}
            activeClassName={styles.activeLink}
          >
            Профиль
          </NavLink>
          <NavLink
            to={{ pathname: `/profile/orders` }}
            exact
            className={styles.a + " mb-8"}
          >
            История заказов
          </NavLink>
          <button onClick={logout} className={styles.exit}>
            Выход
          </button>
        </nav>
        <p className={styles.p + " mt-20"}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>

      <form onSubmit={formSubmit} className={styles.input}>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={onChange}
            value={form.name}
            name={"name"}
            size={"default"}
            icon={"EditIcon"}
            onIconClick={onIconClickName}
            ref={inputRefName}
            error={false}
            errorText={"Ошибка"}
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
            icon={"EditIcon"}
            onIconClick={onIconClickEmail}
            ref={inputRefEmail}
            error={false}
            errorText={"Ошибка"}
          />
        </div>

        <div>
          <Input
            type={"password"}
            placeholder={"Пароль"}
            onChange={onChange}
            value={form.password}
            name={"password"}
            size={"default"}
            icon={"EditIcon"}
            onIconClick={onIconClickPassword}
            ref={inputRefPassword}
            error={false}
            errorText={"Ошибка"}
          />
        </div>
        {showButton && (
          <div className={styles.buttons + " mt-6 mr-2"}>
            <Button type="primary" size="medium">
              Сохранить
            </Button>
            <Button onClick={cancel} type="primary" size="medium">
              Отмена
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
