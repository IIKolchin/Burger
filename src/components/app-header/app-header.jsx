import React from "react";
import styles from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";



function AppHeader() {

  const isAuth = useSelector((store) => store.authorization.isAuth)
  console.log(isAuth)




  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.constructor}>
            <Link to='/' className={styles.link}>
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
            <Link to={{ pathname: isAuth ? '/profile' : '/' }} className={styles.link}>
              <p  className="text text_type_main-default text_color_inactive ml-2">
                Личный кабинет
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
