import styles from "./feed.module.css";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { OrderFeed } from "../../components/order-feed/order-feed";
import { Orders } from "../../components/orders/orders";
import {
  wsConnectionAllStart,
  wsConnectionClosed,
} from "../../services/actions/wsActions";

export function FeedPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionAllStart());
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <OrderFeed />
      <Orders />
    </div>
  );
}
