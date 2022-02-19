import React, { useMemo } from "react";
import styles from "./ingredient.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { dataPropTypes } from "../../utils/data";
import { useDrag } from "react-dnd";
import { SHOW_MODAL } from "../../services/actions/ingredients";
import { useSelector, useDispatch } from "react-redux";

function Ingredient({ children, data }) {
  
  const countBun = useSelector((state) => state.items.countBun);
  const constructor = useSelector((store) => store.items.constructor);
  const count = constructor.map((item) => item._id);
  const dispatch = useDispatch();
  const id = data._id;

  const handleShow = () => {
    dispatch({
      type: SHOW_MODAL,
      id,
    });
  };

  const counter = useMemo(() => {
    const countIngredients = count.reduce(
      (acc, value) => ({
        ...acc,
        [value]: (acc[value] || 0) + 1,
      }),
      {}
    );

    const numberIngredient = countIngredients[`${id}`];

    return numberIngredient;
  }, [constructor]);

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
        {countBun.includes(data._id) ? (
          <Counter count={2} size="default" />
        ) : null}
        {count.includes(data._id) && <Counter count={counter} size="default" />}
      </li>
    )
  );
}

Ingredient.propTypes = {
  children: PropTypes.element,
  data: dataPropTypes.isRequired,
};

export default Ingredient;
