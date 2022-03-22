import React from "react";
import styles from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";

function AppHeader() {
  
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.constructor}>
            <BurgerIcon
              type={window.location.pathname === "/" ? "primary" : "secondary"}
            />
            <NavLink
              to="/"
              className={
                styles.link + " text text_type_main-default ml-2 mr-10 mr-2"
              }
              activeClassName={styles.activeLink}
              exact
            >
              Конструктор
            </NavLink>

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
            <ProfileIcon
              type={
                window.location.pathname === "/profile" ||
                window.location.pathname === "/profile/orders"
                  ? "primary"
                  : "secondary"
              }
            />
            <NavLink
              to={{ pathname: "/profile" }}
              className={styles.link + " text text_type_main-default ml-2"}
              activeClassName={styles.activeLink}
            >
              Личный кабинет
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
