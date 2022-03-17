import {
    BurgerIcon,
    EmailInput,
    PasswordInput,
    Button,
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import React, { useCallback, useState } from "react";
  import styles from "./login.module.css";
  import { Link } from 'react-router-dom';
  import { URL, checkResponse } from '../utils/data';
  import { useHistory } from 'react-router-dom';
  import { Redirect } from 'react-router-dom';
  import { useSelector, useDispatch } from "react-redux";
  import { SET_REGISTER } from "../services/actions/register"
  
  export function ForgotPasswordPage() {
   


    const form = useSelector((store) => store.register.form)

console.log(form)

    const dispatch = useDispatch();
  
    const onChange = (e) => {
      dispatch({ 
        type: SET_REGISTER,
        payload: {...form, [e.target.name]: e.target.value }
    });
  }
    const history = useHistory();



    const resetPassword = (e) => {
      e.preventDefault();
    return fetch(`${URL}password-reset`, {
        method: "POST",
        body: JSON.stringify({
          "email": form.email
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
            console.log(res)
            history.replace({ pathname: '/reset-password' });
        
      
        }    
      })
    }
  
    return (
      <form onSubmit={resetPassword} className={styles.container}>
        <h2 className={styles.heading}>Восстановление пароля</h2>
        <div className="mb-6">
        <EmailInput onChange={onChange} value={form.email} name={"email"} />
       
        
        </div>
        <Button type="primary" size="medium">
        Восстановить
        </Button>
  
        <p className={styles.p + " mt-20 mb-4"}>Вспомнили пароль? <Link to='/login' className={styles.a}>Войти</Link></p>
        
      </form>
    );
  }
  