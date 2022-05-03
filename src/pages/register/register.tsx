import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect } from "react";
import styles from "../login/login.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "../../services/types/index";
import { register, SET_REGISTER } from "../../services/actions/user";
import { Redirect } from "react-router-dom";

export function RegisterPage() {
  const form = useSelector((store) => store.register.form);
  const isUser = useSelector((store) => store.user.isUser);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   form.name = "";
  //   form.email = "";
  //   form.password = "";
  // }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SET_REGISTER,
      payload: { ...form, [e.target.name]: e.target.value },
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register(form));
  };

  if (isUser) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <h2 className={styles.heading}>Регистрация</h2>
      <div className="mb-6">
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={onChange}
          value={`${form.name}`}
          name={"name"}
          size={"default"}
        />
      </div>
      <EmailInput onChange={onChange} value={`${form.email}`} name={"email"} />
      <div className="mt-6 mb-6">
        <PasswordInput
          onChange={onChange}
          value={`${form.password}`}
          name={"password"}
        />
      </div>
      <Button type="primary" size="medium">
        Зарегистрироваться
      </Button>

      <p className={styles.p + " mt-20 mb-4"}>
        Уже зарегистрированы?{" "}
        <Link to="/login" className={styles.a}>
          Войти
        </Link>
      </p>
    </form>
  );
}
