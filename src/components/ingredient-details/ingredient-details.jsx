import React from "react";
import styles from "./ingredient-details.module.css";
import Modal from "../modal/modal";


function IngredientDetails({id, data, handleHide, showHeading }) {

 
  return (
    <>

      <Modal showHeading={showHeading} handleHide={handleHide} >

    
        
        {data.filter((item) => item._id.includes(id)).map((data) => {

          return (
            <div className={styles.container} key={data._id}>
              <img src={data.image_large} alt={data.name} />
              <p className={styles.name + " mt-4 mb-8"}>{data.name}</p>

              <ul className={styles.energy}>
                <li className={styles.li + " mr-5"}>
                  <p>Калории,ккал</p>
                  <p className="text text_type_digits-default">{data.calories}</p>
                </li>
                <li className={styles.li + " mr-5"}>
                  <p>Белки, г</p>
                  <p className="text text_type_digits-default">{data.proteins}</p>
                </li>
                <li className={styles.li + " mr-5"}>
                  <p>Жиры, г</p>
                  <p className="text text_type_digits-default">{data.fat}</p>
                </li>
                <li className={styles.li}>
                  <p>Углеводы, г</p>
                  <p className="text text_type_digits-default">{data.carbohydrates}</p>
                </li>
              </ul>
            </div>
          );
        })}
      
      </Modal>
    </>
  );
}

export default IngredientDetails;
