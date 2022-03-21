import React from "react";
import styles from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
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
  const { url } = useRouteMatch();


console.log()



  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.constructor}>
            <BurgerIcon type={window.location.pathname === '/' ? "primary" : "secondary"} />
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
            <ProfileIcon type={window.location.pathname === '/profile' ? "primary" : "secondary"
} />
            <NavLink
              to={{ pathname: "/profile" }}
              className={styles.link + " text text_type_main-default ml-2"}
              activeClassName={styles.activeLink}
              exact
            >
              {/* <Link to={{ pathname: isAuth ? '/profile' : '/' }} className={styles.link}> */}
              Личный кабинет
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
