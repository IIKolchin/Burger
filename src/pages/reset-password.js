import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback, useState } from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import { URL } from '../utils/data';
import { useSelector, useDispatch } from "react-redux";
import { SET_NEW_PASSWORD, getNewPassword } from "../services/actions/newPassword";
import { Redirect } from 'react-router-dom';


export function ResetPasswordPage() {
  

const isNewPasswordSuccess = useSelector((store) => store.newPassword.isNewPasswordSuccess)
const form = useSelector((store) => store.newPassword.form)

console.log(form)

    const dispatch = useDispatch();
  
    const onChange = (e) => {
      dispatch({ 
        type: SET_NEW_PASSWORD,
        payload: {...form, [e.target.name]: e.target.value }
    });
  }

  const onClick = () => {
dispatch(getNewPassword(form))
  };

  if (isNewPasswordSuccess) {
    return (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
    );
  }


  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Восстановление пароля</h2>
      <Input
        type={"text"}
        placeholder={"Введите новый пароль"}
        onChange={onChange}
        value={form.password}
        name={"password"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
      />
      <div className="mt-6 mb-6">
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={onChange}
          value={form.token}
          name={"token"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
        />
      </div>
      <Button onClick={onClick} type="primary" size="medium">
        Сохранить
      </Button>

      <p className={styles.p + " mt-20 mb-4"}>
        Вспомнили пароль?{" "}
        <Link to="/login" className={styles.a}>
          Войти
        </Link>
      </p>
    </div>
  );
}
