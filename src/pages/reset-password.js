import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback, useState } from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import { URL } from '../utils/data'

export function ResetPasswordPage() {
  const [form, setValue] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const onClick = () => {
    fetch(`${URL}password-reset/reset`, {
      method: "POST",
      body: JSON.stringify({
        password: "",
        token: "",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Восстановление пароля</h2>
      <Input
        type={"text"}
        placeholder={"Введите новый пароль"}
        onChange={(e) => setValue(e.target.value)}
        //   icon={'CurrencyIcon'}
        value={form.password}
        name={"password"}
        error={false}
        //   ref={inputRef}
        //   onIconClick={onIconClick}
        errorText={"Ошибка"}
        size={"default"}
      />
      <div className="mt-6 mb-6">
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={(e) => setValue(e.target.value)}
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
