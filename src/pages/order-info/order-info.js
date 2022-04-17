import styles from "./order-info.module.css";
import { useMemo } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getDateOrder } from "../../utils/data";

export function OrderInfo() {
  
  const { id } = useParams();
  const items = useSelector((store) => store.ws.messages);
  const userItems = useSelector((store) => store.ws.orders);
  const allIngredients = useSelector((store) => store.items.data);
  const user = localStorage.getItem("user");
  const data = items.orders?.find((el) => el._id === id)
    ? items.orders?.find((el) => el._id === id)
    : userItems.orders?.find((el) => el._id === id);
  const wsConnected = useSelector((store) => store.ws.wsConnected);

  const status =
    data?.status === "done"
      ? "Выполнен"
      : data?.status === "pending"
      ? "Готовится"
      : data?.status === "created"
      ? "Создан"
      : "";

  const color = {
    color: data?.status === "done" ? "#00cccc" : "#F2F2F3",
  };

  const ingredient =
    items &&
    data?.ingredients.map((i) => {
      return allIngredients.find((item) => item._id === i);
    });

  const ingredientUnique = ingredient?.filter(
    (item, pos, arr) => arr.lastIndexOf(item) === pos
  );

  const ingredientSort =
    items &&
    ingredientUnique?.sort((a, b) => {
      if (a.type === "bun") return -1;
      if (b.type === "bun") return 1;
      return a.type.localeCompare(b.type);
    });

  const ingredients = ingredient?.reduce(
    (prev, curr) => {
      const id = curr?._id;
      prev.count[id] = (prev.count[id] || 0) + 1;
      return prev;
    },
    { count: {} }
  );

  const totalPrice = useMemo(() => {
    let total = 0;
    ingredient?.map((item) => (total += item?.price || 0));
    return total ? total : 0;
  }, [ingredientSort]);

  return (
    <>
      {Object.keys(items).length !== 0 &&
        user &&
        ingredientSort?.length !== 0 &&
        wsConnected && (
          <section className={styles.container}>
            <p
              className={styles.number + " text text_type_digits-default pl-6"}
            >
              {data ? `#${data.number}` : null}
            </p>
            <h3 className={styles.heading}>{data ? data.name : null}</h3>
            <p className={styles.p} style={color}>
              {data ? status : null}
            </p>
            <p className={styles.h3}>Состав:</p>
            <ul className={styles.ingredients}>
              {ingredientSort?.map((data, i) => {
                return (
                  <li className={styles.item} key={i}>
                    <div className={styles.flex}>
                      <img
                        src={data?.image_mobile}
                        alt="Изображение ингредиента."
                      ></img>
                      <p className={styles.name + " ml-4"}>{data?.name}</p>
                    </div>
                    <div className={styles.flex}>
                      <p
                        className={
                          styles.quantity + " text text_type_digits-default"
                        }
                      >
                        {`${ingredients?.count[data._id]} x ${data.price}`}
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
                {getDateOrder(data?.createdAt)}
              </span>
              <div className={styles.flex}>
                <p
                  className={styles.quantity + " text text_type_digits-default"}
                >
                  {totalPrice}
                </p>
                <CurrencyIcon />
              </div>
            </div>
          </section>
        )}
    </>
  );
}
