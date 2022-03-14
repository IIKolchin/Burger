import {
  BurgerIcon,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback, useState } from "react";
import styles from "./login.module.css";
import { Link } from 'react-router-dom';
import { SET_AUTHORIZATION } from "../services/actions/authorization";
import { loginRequest } from "../services/actions/authorization"
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom';

export function LoginPage() {

  const form = useSelector((store) => store.authorization.form)
  const isAuth = useSelector((store) => store.authorization.isAuth)
   

  const accessToken = useSelector((store) => store.authorization.accessToken)
console.log(accessToken)
  console.log(form)
  
      const dispatch = useDispatch();
    
      const onChange = (e) => {
        dispatch({ 
          type: SET_AUTHORIZATION,
          payload: {...form, [e.target.name]: e.target.value }
      });
    }

    const onClick = (e) => {
      e.preventDefault();
      dispatch(loginRequest(form));
      
    
    }


    if (isAuth) {
      return (
        <Redirect
          to={{
            pathname: '/'
          }}
        />
      );
    }

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
      <Button onClick={onClick} type="primary" size="medium">
        Войти
      </Button>

      <p className={styles.p + " mt-20 mb-4"}>Вы — новый пользователь? <Link to='/register' className={styles.a}>Зарегистрироваться</Link></p>
      <p className={styles.p}>Забыли пароль? <Link to='/forgot-password' className={styles.a}>Восстановить пароль</Link></p>
    </div>
  );
}
