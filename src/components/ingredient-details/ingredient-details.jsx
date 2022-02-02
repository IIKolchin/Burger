import React from "react";
import styles from "./ingredient-details.module.css";
import PropTypes from "prop-types";
import { dataPropTypes } from "../../utils/data";

function IngredientDetails({ data }) {
  return (
    <>
      <div className={styles.container}>
        <img src={data.image_large} alt={data.name} />
        <p className={styles.name + " mt-4 mb-8"}>{data.name}</p>

        <ul className={styles.energy}>
          <li className={styles.li + " mr-5"}>
            <p className={styles.p}>Калории,ккал</p>
            <p className="text text_type_digits-default">{data.calories}</p>
          </li>
          <li className={styles.li + " mr-5"}>
            <p className={styles.p}>Белки, г</p>
            <p className="text text_type_digits-default">{data.proteins}</p>
          </li>
          <li className={styles.li + " mr-5"}>
            <p className={styles.p}>Жиры, г</p>
            <p className="text text_type_digits-default">{data.fat}</p>
          </li>
          <li className={styles.li}>
            <p className={styles.p}>Углеводы, г</p>
            <p className="text text_type_digits-default">
              {data.carbohydrates}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

// IngredientDetails.propTypes = {
//   data: dataPropTypes.isRequired,
// };

export default IngredientDetails;
