import styles from "./order-info.module.css";
import { getCookie } from "../../utils/cookie";
import { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "../../services/types/index";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";
import { getDateOrder, ingredientsCount } from "../../utils/data";
import {
  wsConnectionAllStart,
  wsConnectionClosed,
  wsConnectionStart,
} from "../../services/actions/wsActions";
import { TIngredients } from "../../services/types/data";



export function OrderInfo() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const items = useSelector((store) => store.ws.messages);
  const userItems = useSelector((store) => store.ws.orders);
  const allIngredients = useSelector((store) => store.items.data);
  const data = items?.find((el) => el._id === id)
    ? items?.find((el) => el._id === id)
    : userItems?.find((el) => el._id === id);
  


  useEffect(() => {
    const token = getCookie("token")?.split("Bearer ")[1]
    if (token) {
      dispatch(wsConnectionStart(token));
      dispatch(wsConnectionAllStart());
      return () => {
        dispatch(wsConnectionClosed());
      };
    }
  }, []);

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
    data?.ingredients.map((i) => allIngredients.find((item) => item._id === i));

  // const ingredient = data && getIngredient(data.ingredients, allIngredients)

  const ingredientUnique = ingredient?.filter(
    (item, pos, arr) => arr.lastIndexOf(item) === pos
  );

  const ingredientSort =
    items &&
    ingredientUnique?.sort((a: any, b: any) => {
      if (a.type === "bun") return -1;
      if (b.type === "bun") return 1;
      return a.type.localeCompare(b.type);
    });

    // const ingredients =  ingredientsCount(ingredient) 

  const ingredients = ingredient?.reduce(
    (prev: any, curr: any) => {
      const id = curr?._id;
      prev.count[id] = (prev.count[id] || 0) + 1;
      return prev;
    },
    { count: {} }
  );

console.log(ingredients)
console.log(ingredient)

  const totalPrice = useMemo(() => {
    let total = 0;
    ingredient?.map((item) => (total += item?.price || 0));
    return total ? total : 0;
  }, [ingredientSort]);

  return (
    <>
      {data && ingredientSort?.length !== 0 && (
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
                      {data && `${ingredients?.count[data._id]} x ${data.price}`}
                    </p>
                    <CurrencyIcon type="primary" />
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
              <p className={styles.quantity + " text text_type_digits-default"}>
                {totalPrice}
              </p>
              <CurrencyIcon type="primary"/>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
