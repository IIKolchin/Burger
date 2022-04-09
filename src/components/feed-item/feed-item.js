import styles from "./feed-item.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import i1 from "../../images/1.png";
import i2 from "../../images/2.png";
import i3 from "../../images/3.png";
import i4 from "../../images/4.png";
import i5 from "../../images/5.png";

export function FeedItem() {
  return (
    <div className={styles.container}>
      <div className={styles.group + " pt-6"}>
        <span className={styles.number + " text text_type_digits-default pl-6"}>
          #034535
        </span>
        <span
          className={
            styles.date +
            " text text_type_main-default text_color_inactive pr-6"
          }
        >
          Сегодня, 16:20 i-GMT+3
        </span>
      </div>
      <h3 className={styles.name + " ml-6 mt-6"}>
        Death Star Starship Main бургер
      </h3>
      <div className={styles.ingredients + " mt-6 ml-6 mr-6"}>
        <div className={styles.items}>
          <div className={styles.item}>
            <img src={i1} alt=""></img>
          </div>
          <div className={styles.item}>
            <img src={i2} alt=""></img>
          </div>
          <div className={styles.item}>
            <img src={i3} alt=""></img>
          </div>
          <div className={styles.item}>
            <img src={i4} alt=""></img>
          </div>
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
