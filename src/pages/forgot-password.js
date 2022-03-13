import {
    BurgerIcon,
    EmailInput,
    PasswordInput,
    Button,
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import React, { useCallback, useState } from "react";
  import styles from "./login.module.css";
  import { Link } from 'react-router-dom';
  import { URL } from '../utils/data'
  
  export function ForgotPasswordPage() {
    const [form, setValue] = useState({ email: "", password: "" });
  
    const onChange = (e) => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };

    const onClick = () => {
      fetch(`${URL}password-reset`, {
        method: "POST",
        body: JSON.stringify({
          "email": ""
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    }
  
    return (
      <div className={styles.container}>
        <h2 className={styles.heading}>Восстановление пароля</h2>
        <div className="mb-6">
        <EmailInput onChange={onChange} value={form.email} name={"email"} />
       
        
        </div>
        <Button onClick={onClick} type="primary" size="medium">
        Восстановить
        </Button>
  
        <p className={styles.p + " mt-20 mb-4"}>Вспомнили пароль? <Link to='/login' className={styles.a}>Войти</Link></p>
        
      </div>
    );
  }
  