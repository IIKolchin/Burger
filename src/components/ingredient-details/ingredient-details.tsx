import React from "react";
import styles from "./ingredient-details.module.css";
import { useSelector } from "../../services/types/index";
import { BrowserRouter as Router, useParams } from "react-router-dom";

function IngredientDetails() {
  const { id } = useParams<{ id: string }>();
  const items = useSelector((store) => store.items.data);
  const data = items.find((el) => el._id === id);

  return (
    <>
      <div className={styles.container + " pb-15"}>
        <img src={data?.image_large} alt={data?.name} />
        <p className={styles.name + " mt-4 mb-8"}>{data?.name}</p>
        <ul className={styles.energy}>
          <li className={styles.li + " mr-5"}>
            <p className={styles.p}>Калории,ккал</p>
            <p className="text text_type_digits-default">{data?.calories}</p>
          </li>
          <li className={styles.li + " mr-5"}>
            <p className={styles.p}>Белки, г</p>
            <p className="text text_type_digits-default">{data?.proteins}</p>
          </li>
          <li className={styles.li + " mr-5"}>
            <p className={styles.p}>Жиры, г</p>
            <p className="text text_type_digits-default">{data?.fat}</p>
          </li>
          <li className={styles.li}>
            <p className={styles.p}>Углеводы, г</p>
            <p className="text text_type_digits-default">
              {data?.carbohydrates}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default IngredientDetails;
