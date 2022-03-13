import {
    EmailInput,
    PasswordInput,
    Button,
    Input
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import React, { useCallback, useState } from "react";
  import styles from "./profile.module.css";
  import { Link } from 'react-router-dom';
  import { useSelector, useDispatch } from "react-redux";
import { URL, checkResponse } from "../utils/data";
import { getCookie } from "../utils/cookie"

  export function Profile() {


    const accessToken = useSelector((store) => store.authorization.accessToken)


  const onClick = async () => 
     await fetch(`${URL}auth/user`, {
      method: 'GET',
      // mode: 'cors',
      // cache: 'no-cache',
      // credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      // redirect: 'follow',
      // referrerPolicy: 'no-referrer'
    })
      .then(res => res.json())
      .then((data) => console.log(data.user));
  

console.log(getCookie('token'))


      return (

          
<div className={styles.container}>
<nav className={styles.nav}>
    <button onClick={onClick} className={styles.a + ' mb-8'}>Профиль</button>
    <button className={styles.a + ' mb-8'}>История заказов</button>
    <button className={styles.a}>Выход</button>
</nav>
<p className={styles.p + ' mt-20'}>В этом разделе вы можете
изменить свои персональные данные</p>

<div className={styles.input}>
    <div className="mb-6">
<Input
      type={'text'}
      placeholder={'Имя'}
    //   onChange={e => setValue(e.target.value)}
    //   icon={'CurrencyIcon'}
    //   value={form.password}
      name={'password'}
      error={false}
    //   ref={inputRef}
    //   onIconClick={onIconClick}
      errorText={'Ошибка'}
      size={'default'}
    />
    </div>

    <div className="mb-6">
    <Input
      type={'text'}
      placeholder={'Логин'}
    //   onChange={e => setValue(e.target.value)}
    //   icon={'CurrencyIcon'}
    //   value={form.password}
      name={'password'}
      error={false}
    //   ref={inputRef}
    //   onIconClick={onIconClick}
      errorText={'Ошибка'}
      size={'default'}
    />
    </div>

    <div>
    <Input
      type={'text'}
      placeholder={'Пароль'}
    //   onChange={e => setValue(e.target.value)}
    //   icon={'CurrencyIcon'}
    //   value={form.password}
      name={'password'}
      error={false}
    //   ref={inputRef}
    //   onIconClick={onIconClick}
      errorText={'Ошибка'}
      size={'default'}
    />
    </div>
    </div>
</div>
      )
  }