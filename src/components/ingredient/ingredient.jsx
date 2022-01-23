import React, { Children } from "react";
import styles from "./ingredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { dataPropTypes } from "../../utils/data";

function Ingredient({ children, data, handleShow }) {
  return (
    <li id={data._id} className={styles.li} onClick={handleShow}>
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

Ingredient.propTypes = {
  children: PropTypes.element,
  data: dataPropTypes.isRequired,
  handleShow: PropTypes.func.isRequired,
};

export default Ingredient;
