import styles from "./feed.module.css";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { OrderFeed } from "../../components/order-feed/order-feed";
import { Orders } from "../../components/orders/orders";
import {
  WS_CONNECTION_ALL_START,
  WS_CONNECTION_CLOSED,
} from "../../services/actions/wsActions";

export function FeedPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_ALL_START });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <OrderFeed />
      <Orders />
    </div>
  );
}
