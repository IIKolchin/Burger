import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useCallback, useEffect, useState, useMemo, useRef } from "react";
import styles from "./profile.module.css";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { URL, checkResponse } from "../utils/data";
import { deleteCookie } from "../utils/cookie";
import { logoutRequest } from "../services/actions/logout";
import { useHistory } from "react-router-dom";
import {
  SET_REGISTER,
  GET_REGISTER_SUCCESS,
} from "../services/actions/register";
import { GET_AUTHORIZATION_FAILED } from "../services/actions/authorization";
import { UPDATE_TOKEN_FAILED } from "../services/actions/updateToken";
import { SET_AUTHORIZATION } from "../services/actions/authorization";
import { getUserRequest } from "../services/actions/getUser";
import { GET_USER_FAILED } from "../services/actions/getUser";
import { LOGOUT_SUCCESS } from "../services/actions/logout";
import { patchUserRequest } from "../services/actions/patchUser"


export function Profile() {
  const dispatch = useDispatch();

  const accessToken = useSelector((store) => store.authorization.accessToken);
  const newAccessToken = useSelector((store) => store.updateToken.accessToken);
  const form = useSelector((store) => store.register.form);

  const isAuth = useSelector((store) => store.authorization.isAuth);
  const history = useHistory();
  const userForm = useSelector((store) => store.user.form);
  const user = useSelector((store) => store.user.isUser);
  const login = sessionStorage.getItem('login')
  const [, forceUpdate] = useState(0);

  const inputRefName = React.useRef(null)
  const inputRefEmail = React.useRef(null)
  const inputRefPassword = React.useRef(null)

  // const getUserInfo = () => {
  //   dispatch(getUserRequest(accessToken))
  //     .then((res) => {
  //       if (res && res.success) {
  //         form.name = res.user.name;
  //         form.email = res.user.email;
  //       }
  //     });
  // };


  useEffect(() => {
   form.name = userForm.name;
  form.email = userForm.email;
 
  }, []);

  const onChange = (e) => {
    dispatch({
      type: SET_REGISTER,
      payload: { ...form, [e.target.name]: e.target.value },
    });
  };


  const onIconClickName = () => {
    setTimeout(() => inputRefName.current.focus(), 0)
    
  }
  const onIconClickEmail = () => {
    setTimeout(() => inputRefEmail.current.focus(), 0)
    
  }
  const onIconClickPassword = () => {
    setTimeout(() => inputRefPassword.current.focus(), 0)
    
  }


function viewButton() {
return  userForm.name !== form.name || userForm.email !== form.email ? true : false
}


console.log(viewButton())
console.log(user)

  const cancel = () => {
    form.name = userForm.name;
    form.email = userForm.email
    forceUpdate(n => !n)
    }

// console.log(userForm.name)
// console.log(form.name)


  const signOut = async () => {
    dispatch(logoutRequest());

    
  };



  const logout = useCallback(() => {
    signOut()

  }, []);


  if (!login) {
    return (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
    );
  }

  // console.log(form);
  // console.log(accessToken);
  // console.log(newAccessToken);

  const formSubmit = (e) => {
    e.preventDefault();

    dispatch(patchUserRequest(form))

    // fetch(`${URL}auth/user`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: accessToken,
    //   },
    //   body: JSON.stringify(form),
    // })
    // .then(() => {
    //   dispatch(getUserRequest(accessToken))
    //   forceUpdate(n => !n)
    // })
   
    
  };

  // const updateUser = () =>

  //   fetch(`${URL}auth/user`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: accessToken,
  //     },
  //     body: JSON.stringify(form),
  //   })
  //     .then((res) => res.json())

  //     .catch((err) => {
  //       console.log(err);
  //       fetch(`${URL}auth/user`, {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: newAccessToken,
  //         },
  //         body: JSON.stringify(form),
  //       })
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })


 

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <button /* onClick={getUserInfo} */ className={styles.a + " mb-8"}>
          Профиль
        </button>
        <button className={styles.a + " mb-8"}>История заказов</button>
        <button onClick={logout} className={styles.a}>
          Выход
        </button>
      </nav>
      <p className={styles.p + " mt-20"}>
        В этом разделе вы можете изменить свои персональные данные
      </p>

      <form onSubmit={formSubmit} className={styles.input}>
        <div className="mb-6">
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={onChange}
            value={form.name}
            name={"name"}
            size={"default"}
            icon={"EditIcon"}
            onIconClick={onIconClickName}
            ref={inputRefName}

          />
        </div>

        <div className="mb-6">
          <Input
            type={"email"}
            placeholder={"Логин"}
            onChange={onChange}
            value={form.email}
            name={"email"}
            size={"default"}
            icon={"EditIcon"}
            onIconClick={onIconClickEmail}
            ref={inputRefEmail}
 
          />
        </div>

        <div>
          <Input
            type={"password"}
            placeholder={"Пароль"}
            onChange={onChange}
            value={form.password}
            name={"password"}
            size={"default"}
            icon={"EditIcon"}
            onIconClick={onIconClickPassword}
            ref={inputRefPassword}
          />
        </div>
        {/* <div className={styles.buttons + " mt-6 mr-2"}> */}
       { viewButton() && <div className=" mt-6 mr-2">
            <Button type="primary" size="medium">
              Сохранить
            </Button>
          </div>}
          </form>
      {  viewButton() &&  <div className={styles.button} >
            <Button onClick={cancel} type="primary" size="medium">
              Отмена
            </Button>
          </div>}
        {/* </div> */}
      
    </div>
  );
}
