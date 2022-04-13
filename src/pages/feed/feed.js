import styles from "./feed.module.css";
import { Link, Redirect, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useCallback, useEffect, useState } from "react";
import { OrderFeed } from "../../components/order-feed/order-feed";
import { Orders } from "../../components/orders/orders";
import {
  WS_CONNECTION_ALL_START,
  WS_GET_MESSAGE,
} from "../../services/actions/wsActions";

export function FeedPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_ALL_START });
  }, []);

  return (
    <div className={styles.container}>
      <OrderFeed />
      <Orders />
    </div>
  );
}
