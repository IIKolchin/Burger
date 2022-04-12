import styles from "./feed-item.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { ImageFeed } from "../image-feed/image-feed";

export function FeedItem({status, data}) {

  const style = { width: status ? 844 : 584 }

  

  console.log()

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
          {data.createdAt}
        </span>
      </div>
      <h3 className={styles.name + " ml-6 mt-6"}>
        {data.name}
      </h3>
      <p className={styles.status}>{status}</p>
      <div className={styles.ingredients + " mt-6 ml-6 mr-6 pb-6"}>
        <div className={styles.items}>
          {data && data.ingredients.map((id, index) => {
            return (
            <ImageFeed key={index} id={id} />
            )
          })
        }

        </div>
        <div className={styles.price}>
          <span className={styles.number + " text text_type_digits-default"}>
            480
          </span>

          <div className={styles.icon}>
            <CurrencyIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
