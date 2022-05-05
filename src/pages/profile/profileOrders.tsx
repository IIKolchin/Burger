import styles from "./profile.module.css";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  NavLink,
  useLocation,
} from "react-router-dom";
import { logout } from "../../services/actions/user";
import { useSelector, useDispatch } from "../../services/types/index";
import React, { useCallback } from "react";
import { FeedItem } from "../../components/feed-item/feed-item";

export function ProfileOrders() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isUser = useSelector((store) => store.user.isUser);
  const data = useSelector((store) => store?.ws?.orders);

  const signOut = async () => {
    dispatch(logout());
  };

  const logoutUser = useCallback(() => {
    signOut();
  }, []);

  if (!isUser) {
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  }

  return (
    <>
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
            <button onClick={logoutUser} className={styles.exit}>
              Выход
            </button>
          </nav>
          <p className={styles.p + " mt-20"}>
            В этом разделе вы можете просмотреть свою историю заказов
          </p>
        </div>

        <div className={styles.order}>
          {data.length !== 0 &&
            data?.map((data) => {
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
    </>
  );
}
