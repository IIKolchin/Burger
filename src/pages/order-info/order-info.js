import styles from "./order-info.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { getDateOrder } from "../../utils/data";

export function OrderInfo() {
  const { id } = useParams();
  const items = useSelector((store) => store.ws.messages);
  const allIngredients = useSelector((store) => store.items.data);
  const data = items.orders?.find((el) => el._id === id);

  const status =
    data?.status === "done"
      ? "Выполнен"
      : data?.status === "pending"
      ? "Готовится"
      : data?.status === "created"
      ? "Создан"
      : "";

  const color = {
    color: data.status === "done" ? "#00cccc" : "#F2F2F3",
  };

  const ingredient = data.ingredients.map((i) => {
    const ing = allIngredients.find((item) => {
      return item._id === i;
    });
    return ing;
  });

  const ingredientSort = ingredient.sort((a, b) => {
    if (a.type === "bun") return -1;
    if (b.type === "bun") return 1;
    return a.type.localeCompare(b.type);
  });

  const ingredients =
    ingredientSort.length !== 1 && ingredientSort[1].type === "bun"
      ? ingredientSort.slice(1)
      : ingredientSort
      ? ingredientSort
      : ingredient;

  const totalPrice = useMemo(() => {
    let total = 0;

    ingredientSort.map((item) => {
      if (data) {
        total += item.price || 0;
      }
      if (item.type === "bun") {
        total += item.price;
      }
    });

    return total ? total : 0;
  }, []);

  return (
    <section className={styles.container}>
      <p className={styles.number + " text text_type_digits-default pl-6"}>
        {data ? `#${data.number}` : null}
      </p>
      <h3 className={styles.heading}>{data ? data.name : null}</h3>
      <p className={styles.p} style={color}>
        {data ? status : null}
      </p>
      <p className={styles.h3}>Состав:</p>
      <ul className={styles.ingredients}>
        {data &&
          ingredients.map((data, i) => {
            return (
              <li className={styles.item} key={i}>
                <div className={styles.flex}>
                  <img
                    src={data.image_mobile}
                    alt="Изображение ингредиента."
                  ></img>
                  <p className={styles.name + " ml-4"}>{data.name}</p>
                </div>
                <div className={styles.flex}>
                  <p
                    className={
                      styles.quantity + " text text_type_digits-default"
                    }
                  >
                    {`${data.type === "bun" ? 2 : 1} x ${data.price}`}
                  </p>
                  <CurrencyIcon />
                </div>
              </li>
            );
          })}
      </ul>
      <div className={styles.group + " pt-10"}>
        <span
          className={
            styles.date +
            " text text_type_main-default text_color_inactive pr-6"
          }
        >
          {getDateOrder(data.createdAt)}
        </span>
        <div className={styles.flex}>
          <p className={styles.quantity + " text text_type_digits-default"}>
            {totalPrice}
          </p>
          <CurrencyIcon />
        </div>
      </div>
    </section>
  );
}
