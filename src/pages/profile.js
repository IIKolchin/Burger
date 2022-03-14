import {
    EmailInput,
    PasswordInput,
    Button,
    Input
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import React, { useCallback, useState } from "react";
  import styles from "./profile.module.css";
  import { Link, Redirect } from 'react-router-dom';
  import { useSelector, useDispatch } from "react-redux";
import { URL, checkResponse } from "../utils/data";
import { deleteCookie } from "../utils/cookie";
import { logoutRequest } from "../services/actions/logout";
import { useHistory } from 'react-router-dom';
import { SET_REGISTER } from "../services/actions/register";
import { GET_AUTHORIZATION_FAILED } from "../services/actions/authorization"

  export function Profile() {
    const dispatch = useDispatch();
    // const history = useHistory();
    const accessToken = useSelector((store) => store.authorization.accessToken)
    const form = useSelector((store) => store.register.form);
    const isAuth = useSelector((store) => store.authorization.isAuth)

    const onChange = (e) => {
      dispatch({ 
        type: SET_REGISTER,
        payload: {...form, [e.target.name]: e.target.value }
    });
  }
        
// const onClick = (e) => {
//   e.preventDefault();
//   dispatch({type: SET_REGISTER})

// }




    const signOut = () => {
       dispatch(logoutRequest());
        dispatch({type: GET_AUTHORIZATION_FAILED})  
          deleteCookie('token')
        };

  const onClick = () => 
      fetch(`${URL}auth/user`, {
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
      .then((data) => {
        form.name = data.user.name
        form.email = data.user.email
      
      });
 
      const logout = useCallback(
        () => {
          signOut()
          

     
        },
        [ ]
      );  
      
      if (!isAuth) {
        return (
          <Redirect
            to={{
              pathname: '/login'
            }}
          />
        );
      }


console.log(form)


const updateUser = () => 
  fetch(`${URL}auth/user`, {
    method: 'PATCH',  
    headers: {
      'Content-Type': 'application/json',
      Authorization: accessToken
    },
    body: JSON.stringify(form),

  })
    .then(res => res.json())
    .then((data) => {
console.log(data)
    
    });



      return (

          
<div className={styles.container}>
<nav className={styles.nav}>
    <button onClick={onClick} className={styles.a + ' mb-8'}>Профиль</button>
    <button className={styles.a + ' mb-8'}>История заказов</button>
    <button onClick={logout}className={styles.a}>Выход</button>
</nav>
<p className={styles.p + ' mt-20'}>В этом разделе вы можете
изменить свои персональные данные</p>

<div className={styles.input}>
    <div className="mb-6">
<Input
      type={'text'}
      placeholder={'Имя'}
      onChange={onChange}
    //   icon={'CurrencyIcon'}
      value={form.name}
      name={'name'}
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
      onChange={onChange}
    //   icon={'CurrencyIcon'}
      value={form.email}
      name={'email'}
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
      onChange={onChange}
    //   icon={'CurrencyIcon'}
      value={form.password}
      name={'password'}
      error={false}
    //   ref={inputRef}
    //   onIconClick={onIconClick}
      errorText={'Ошибка'}
      size={'default'}
    />
    </div>
<div className={styles.buttons + " mt-6 mr-2"}>
  <div>
    <Button onClick={updateUser} type="primary" size="medium">
        Сохранить
        </Button>
        </div> 
<div>
        <Button type="primary" size="medium">
        Отмена
        </Button>
        </div>  
        </div>    
    </div>
</div>
      )
  }