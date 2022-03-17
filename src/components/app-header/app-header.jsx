import React from "react";
import styles from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { URL, checkResponse } from "../../utils/data";
import { updateTokenRequest } from "../../services/actions/updateToken";
import { Redirect } from "react-router-dom";
import { getUserRequest } from "../../services/actions/getUser";

function AppHeader() {


  const dispatch = useDispatch();
  const history = useHistory();
  const accessToken = useSelector((store) => store.authorization.accessToken);
  const isAuth = useSelector((store) => store.authorization.isAuth);
  const newAccessToken = useSelector((store) => store.updateToken.accessToken);
  console.log(isAuth);

  // const getUser = async () => {
  //   await dispatch(getUserRequest(accessToken))
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res && res.success) {
  //         history.replace({ pathname: "/profile" });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       dispatch(updateTokenRequest()).then(() => {
  //         dispatch(getUserRequest(newAccessToken))
  //           .then((res) => res.json())
  //           .then((res) => res.json())
  //           .then((res) => {
  //             console.log(res);
  //             if (res && res.success) {
  //               history.replace({ pathname: "/profile" });
  //             }
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //             history.replace({ pathname: "/login" });
  //           });
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // if (res && res.success) {
  //   history.replace({ pathname: "/profile" });
  // }

  console.log(newAccessToken);

  // const onClick = () => {
  //   dispatch(updateTokenRequest());
  // }

  // console.log(accessToken);
  // console.log(newAccessToken);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.constructor}>
            <Link to="/" className={styles.link}>
              <BurgerIcon type="primary" />
              <p className="text text_type_main-default ml-2 mr-10 mr-2">
                Конструктор
              </p>
            </Link>

            <a href="#" className={styles.link}>
              <div className={styles.burger}>
                <ListIcon type="secondary" />
              </div>
              <p className="text text_type_main-default text_color_inactive ml-2">
                Лента заказов
              </p>
            </a>
          </li>
          <li className={styles.logo}>
            <Logo />
          </li>

          <li className={styles.profile}>
            <ProfileIcon type="secondary" />
                       <Link to={{ pathname:'/profile'}} className={styles.link}>
            {/* <Link to={{ pathname: isAuth ? '/profile' : '/' }} className={styles.link}> */}
            <button className={styles.button}>
              <p className=" text text_type_main-default text_color_inactive ml-2">
                Личный кабинет
              </p>
            </button>
            </Link>
          </li>
        </ul>
      </nav>

      {/* <button onClick={onClick}></button> */}
    </header>
  );
}

export default AppHeader;
