import styles from "./ingredient.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useSelector } from "../../services/types/index";
import { FC } from "react";
import { TIngredients } from "../../services/types/data";

type TIngredientProps = {
  data: TIngredients;
};

const Ingredient: FC<TIngredientProps> = ({ data }) => {
  const constructor = useSelector((store) => store.element.constructor);
  const bun = useSelector((store) => store.element.bun);
  const burgerItems = [bun, bun, ...constructor];
  const count = burgerItems.filter((item) => item?._id === data?._id).length;
  const id = data._id;

  const [{ isDrag }, dragRef] = useDrag({
    type: data.type,
    item: { id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return !isDrag ? (
    <li id={data._id} className={styles.li} ref={dragRef}>
      <img className="ml-4 mr-4" src={data.image} alt={data.name} />
      <div className={styles.price}>
        <p className="text text_type_digits-default mr-2">{data.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.text + " mb-6"}>{data.name}</p>
      {count ? <Counter count={count} size="default" /> : null}
    </li>
  ) : null;
};

export default Ingredient;
