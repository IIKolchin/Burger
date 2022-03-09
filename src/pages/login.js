import {
  BurgerIcon,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback, useState } from "react";
import styles from "./login.module.css";

export function LoginPage() {
  const [form, setValue] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Вход</h2>
      <EmailInput onChange={onChange} value={form.email} name={"email"} />
     <div className="mt-6 mb-6">
      <PasswordInput
        onChange={onChange}
        value={form.password}
        name={"password"}
      />
      </div>
      <Button type="primary" size="medium">
        Войти
      </Button>

      <p className={styles.p + " mt-20 mb-4"}>Вы — новый пользователь? <a className={styles.a}>Зарегистрироваться</a></p>
      <p className={styles.p}>Забыли пароль? <a className={styles.a}>Восстановить пароль</a></p>
    </div>
  );
}
