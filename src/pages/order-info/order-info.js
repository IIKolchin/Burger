import styles from "./order-info.module.css";
import i1 from "../../images/1.png";
import i2 from "../../images/2.png";
import i3 from "../../images/3.png";
import i4 from "../../images/4.png";
import i5 from "../../images/5.png";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export function OrderInfo() {
  return (
    <section className={styles.container}>
      <p className={styles.number + " text text_type_digits-default pl-6"}>
        #034533
      </p>
      <h3 className={styles.heading}>
        Black Hole Singularity острый бургер
      </h3>
      <p className={styles.p}>Выполнен</p>
      <p className={styles.h3}>Состав:</p>
      <ul className={styles.ingredients}>


        <li className={styles.item}>
            <div className={styles.flex}>
          <img src={i1} alt="Изображение ингредиента."></img>
          <p className={styles.name + " ml-4"}>Флюоресцентная булка R2-D3</p>
          </div>
          <div className={styles.flex}>
          <p className={styles.quantity + " text text_type_digits-default"}>2 x 20</p>
          <CurrencyIcon />
          </div>
        </li>

        <li className={styles.item}>
            <div className={styles.flex}>
          <img src={i1} alt="Изображение ингредиента."></img>
          <p className={styles.name + " ml-4"}>Флюоресцентная булка R2-D3</p>
          </div>
          <div className={styles.flex}>
          <p className={styles.quantity + " text text_type_digits-default"}>2 x 20</p>
          <CurrencyIcon />
          </div>
        </li>

        <li className={styles.item}>
            <div className={styles.flex}>
          <img src={i5} alt="Изображение ингредиента."></img>
          <p className={styles.name + " ml-4"}>Флюоресцентная булка R2-D3</p>
          </div>
          <div className={styles.flex}>
          <p className={styles.quantity + " text text_type_digits-default"}>2 x 20</p>
          <CurrencyIcon />
          </div>
        </li>

        <li className={styles.item}>
            <div className={styles.flex}>
          <img src={i2} alt="Изображение ингредиента."></img>
          <p className={styles.name + " ml-4"}>Филе Люминесцентного тетраодонтимформа</p>
          </div>
          <div className={styles.flex}>
          <p className={styles.quantity + " text text_type_digits-default"}>1 x 200</p>
          <CurrencyIcon />
          </div>
        </li>


        <li className={styles.item}>
            <div className={styles.flex}>
          <img src={i3} alt="Изображение ингредиента."></img>
          <p className={styles.name + " ml-4"}>Флюоресцентная булка R2-D3</p>
          </div>
          <div className={styles.flex}>
          <p className={styles.quantity + " text text_type_digits-default"}>2 x 20</p>
          <CurrencyIcon />
          </div>
        </li>


        <li className={styles.item}>
            <div className={styles.flex}>
          <img src={i4} alt="Изображение ингредиента."></img>
          <p className={styles.name + " ml-4"}>Флюоресцентная булка R2-D3</p>
          </div>
          <div className={styles.flex}>
          <p className={styles.quantity + " text text_type_digits-default"}>2 x 20</p>
          <CurrencyIcon />
          </div>
        </li>



      </ul>
      <div className={styles.group + " pt-10"}>
      <span
          className={
            styles.date +
            " text text_type_main-default text_color_inactive pr-6"
          }
        >
         Вчера, 13:50 i-GMT+3
        </span>
        <div className={styles.flex}>
          <p className={styles.quantity + " text text_type_digits-default"}>510</p>
          <CurrencyIcon />
          </div>

      </div>
    </section>
  );
}
