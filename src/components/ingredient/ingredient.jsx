import styles from "./ingredient.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { dataPropTypes } from "../../utils/data";
import { useDrag } from "react-dnd";
import { SHOW_MODAL } from "../../services/actions/modalIngredient";
import { useSelector, useDispatch } from "react-redux";

function Ingredient({ children, data }) {

  const dataItems = useSelector((store) => store.items.data);
  const constructor = useSelector((store) => store.element.constructor);
  const bun = useSelector((store) => store.element.bun);
  const burgerItems = [bun, bun, ...constructor];
  const count = burgerItems.filter((item) => item._id === data._id).length;
  const dispatch = useDispatch();
  const id = data._id;

  const handleShow = () => {
    dispatch({
      type: SHOW_MODAL,
      id,
      payload: dataItems.find((el) => el._id === id),
    });
  };

  const [{ isDrag }, dragRef] = useDrag({
    type: data.type,
    item: { id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    !isDrag && (
      <li
        id={data._id}
        className={styles.li}
        onClick={handleShow}
        ref={dragRef}
      >
        {children}
        <img className="ml-4 mr-4" src={data.image} alt={data.name} />
        <div className={styles.price}>
          <p className="text text_type_digits-default mr-2">{data.price}</p>
          <CurrencyIcon />
        </div>
        <p className={styles.text + " mb-6"}>{data.name}</p>
        {count ? <Counter count={count} size="default" /> : null}
      </li>
    )
  );
}

Ingredient.propTypes = {
  children: PropTypes.element,
  data: dataPropTypes.isRequired,
};

export default Ingredient;
