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

          <NavLink
            to="/"
            className={styles.link + " text text_type_main-default mr-10 "}
            activeClassName={styles.activeLink}
            exact
          >
            <li className={styles.constructor}>
              <BurgerIcon
                type={
                  window.location.pathname === "/" ? "primary" : "secondary"
                }
              />
              <div className="ml-2">Конструктор</div>
            </li>

          </NavLink>

          <NavLink
            to="/feed"
            className={
              styles.link + " text text_type_main-default text_color_inactive ml-2"
            }
            activeClassName={styles.activeLink}
            exact
          >
            <li className={styles.constructor}>
              <div className={styles.burger}>
                <ListIcon
                  type={
                    window.location.pathname === "/feed"
                      ? "primary"
                      : "secondary"
                  }
                />
              </div>
              <div className="ml-2">Лента заказов</div>
            </li>
          </NavLink>

          <li className={styles.logo}>
            <Logo />
          </li>

          <NavLink
            to={{ pathname: "/profile" }}
            className={styles.link + " text text_type_main-default"}
            activeClassName={styles.activeLink}
          >
            <li className={styles.profile}>
              <ProfileIcon
                type={
                  window.location.pathname === "/profile" ||
                  window.location.pathname === "/profile/orders"
                    ? "primary"
                    : "secondary"
                }
              />
              <div className="ml-2">Личный кабинет</div>
            </li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
