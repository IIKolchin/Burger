import styles from "./feed-item.module.css";
import React, { FC, useMemo } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../services/types/index";
import { ImageFeed } from "../image-feed/image-feed";
import { getDateOrder } from "../../utils/data";
import { TIngredients, TOrder } from "../../services/types/data";
// import PropTypes from "prop-types";
// import { dataOrderPropTypes } from "../../utils/data";

type TFeedItemProps = {
  status?: string;
  data: TOrder;
}

export const FeedItem: FC<TFeedItemProps> = ({ status, data }) => {
  const style = { width: status ? 844 : 584 };
  const color = {
    color: data.status === "done" ? "#00CCCC" : "#F2F2F3",
  };
  const items = useSelector((store) => store.items.data);

  const statusOrder =
    status === "done"
      ? "Выполнен"
      : status === "pending"
      ? "Готовится"
      : status === "created"
      ? "Создан"
      : "";

  const ingredients = useMemo(() => {
  return  data.ingredients.length && items.length ? data.ingredients.map((id) => {
    return items.find((item) => item._id === id)
    
  }).filter((data) => data !== undefined).slice(0, 6) : []
  },[data.ingredients, items])

  const otherIngredients =
    data.ingredients.slice(6).length !== 0
      ? `+${data.ingredients.slice(6).length}`
      : null;

  const totalPrice = useMemo(() => {
    let total = 0;
    data.ingredients.map((id) => {
      const it = items.find((data) => data._id === id);
      if (it) {
        total += it.price || 0;
      }
    });
    return total ? total : 0;
  }, [ingredients]);

  return (
    <div className={styles.container} style={style}>
      <div className={styles.group + " pt-6"}>
        <span className={styles.number + " text text_type_digits-default pl-6"}>
          #{data.number}
        </span>
        <span
          className={
            styles.date +
            " text text_type_main-default text_color_inactive pr-6"
          }
        >
          {getDateOrder(data.createdAt)}
        </span>
      </div>
      <h3 className={styles.name + " ml-6 mt-6"}>{data.name}</h3>
      <p className={styles.status} style={color}>
        {statusOrder}
      </p>
      <div className={styles.ingredients + " mt-6 ml-6 mr-6 pb-6"}>
        <div className={styles.items}>
          {data &&
            ingredients.map((data, index) => {
              return <ImageFeed key={index} data={data} />;
            })}
          {otherIngredients && (
            <div className={styles.other}>{otherIngredients}</div>
          )}
        </div>
        <div className={styles.price}>
          <span className={styles.number + " text text_type_digits-default"}>
            {totalPrice}
          </span>

          <div className={styles.icon}>
            <CurrencyIcon type='primary'/>
          </div>
        </div>
      </div>
    </div>
  );
}

// FeedItem.propTypes = {
//   status: PropTypes.string,
//   data: dataOrderPropTypes.isRequired,
// };
