import {
    BurgerIcon,
    EmailInput,
    PasswordInput,
    Button,
    Input
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import React, { useCallback, useState } from "react";
  import styles from "./login.module.css";
  import { Link } from 'react-router-dom';
  import { useSelector, useDispatch } from "react-redux";
  import { register } from "../services/actions/register";
  import { SET_REGISTER } from "../services/actions/register"
  
  export function RegisterPage() {


const form = useSelector((store) => store.register.form)

console.log(form)

    const dispatch = useDispatch();
  
    const onChange = (e) => {
      dispatch({ 
        type: SET_REGISTER,
        payload: {...form, [e.target.name]: e.target.value }
    });
  }
        
const onClick = (e) => {
  e.preventDefault();
  dispatch(register(form))

}

  
    return (
      <form className={styles.container}>
        <h2 className={styles.heading}>Регистрация</h2>
        <div className="mb-6">
        <Input
      type={'text'}
      placeholder={'Имя'}
      onChange={onChange}
      
      value={form.name}
      name={'name'}
      error={false}

      errorText={'Ошибка'}
      size={'default'}
    />
    </div>
        <EmailInput onChange={onChange} value={form.email} name={"email"} />
       <div className="mt-6 mb-6">
        <PasswordInput
          onChange={onChange}
          value={form.password}
          name={"password"}
        />
        </div>
        <Button onClick={onClick} type="primary" size="medium">
        Зарегистрироваться
        </Button>
  
        <p className={styles.p + " mt-20 mb-4"}>Уже зарегистрированы? <Link to='/login' className={styles.a}>Войти</Link></p>
        
      </form>
    );
  }
  