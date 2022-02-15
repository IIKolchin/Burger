import React, { Children } from "react";
import styles from "./ingredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { dataPropTypes } from "../../utils/data";
import { useDrag } from "react-dnd";

function Ingredient({ children, data, handleShow }) {

const id = data._id;


  const [{isDrag}, dragRef] = useDrag({
    type: data.type,
    item: {id},
    collect: monitor => ({
      isDrag: monitor.isDragging(),
    
  })
  });

 

console.log()

  return ( !isDrag && 
    <li id={data._id} className={styles.li} onClick={handleShow} ref={dragRef}>
      {children}
      <img className="ml-4 mr-4" src={data.image} alt={data.name} />
      <div className={styles.price}>
        <p className="text text_type_digits-default mr-2">{data.price}</p>
        <CurrencyIcon />
      </div>
      <p className={styles.text + " mb-6"}>{data.name}</p>
    </li>
  );
}

// Ingredient.propTypes = {
//   children: PropTypes.element,
//   data: dataPropTypes.isRequired,
//   handleShow: PropTypes.func.isRequired,
// };

export default Ingredient;
