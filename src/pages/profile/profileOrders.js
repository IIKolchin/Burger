import styles from "./profile.module.css";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  NavLink,
  useLocation,
} from "react-router-dom";
import { logoutRequest } from "../../services/actions/logout";
import { useSelector, useDispatch } from "react-redux";
import React, { useCallback, useEffect } from "react";
import { FeedItem } from "../../components/feed-item/feed-item";


export function ProfileOrders() {

  const dispatch = useDispatch();
  const location = useLocation();
  const isAuth = useSelector((store) => store.authorization.isAuth);
  const login = sessionStorage.getItem("login");
  const data = useSelector((store) => store.ws.orders);


  const signOut = async () => {
    dispatch(logoutRequest());
  };

  const logout = useCallback(() => {
    signOut();
  }, []);

  if (!isAuth) {
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  }

  if (!login) {
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  }

  return (
    <div className={styles.container}>
      <div>
        <nav className={styles.nav}>
          <NavLink
            to={{ pathname: `/profile` }}
            exact
            className={styles.a + " mb-8"}
            activeClassName={styles.activeLink}
          >
            Профиль
          </NavLink>
          <NavLink
            to={{ pathname: `/profile/orders` }}
            exact
            className={styles.a + " mb-8"}
            activeClassName={styles.activeLink}
          >
            История заказов
          </NavLink>
          <button onClick={logout} className={styles.exit}>
            Выход
          </button>
        </nav>
        <p className={styles.p + " mt-20"}>
          В этом разделе вы можете просмотреть свою историю заказов
        </p>
      </div>

      <div className={styles.order}>
        {data &&
          data.orders?.map((data) => {
            return (
              <Link
                key={data._id}
                className={styles.link}
                to={{
                  pathname: `/profile/orders/${data._id}`,
                  state: { background: location },
                }}
              >
                <FeedItem data={data} status={data.status} />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
