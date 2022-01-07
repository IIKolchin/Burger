import React from 'react';
import styles from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <header className={styles.header}>
      <ul className={styles.menu}>
        <li className={styles.constructor}>
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default ml-2 mr-10 mr-2">
            Конструктор
          </p>
          <div className={styles.burger}>
            <ListIcon type="secondary" />
          </div>
          <p className="text text_type_main-default text_color_inactive ml-2">
            Лента заказов
          </p>
        </li>
        <li className={styles.logo}>
          <Logo />
        </li>

        <li className={styles.profile}>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive ml-2">
            Личный кабинет
          </p>
        </li>
      </ul>
    </header>
  );
}

export default AppHeader;
