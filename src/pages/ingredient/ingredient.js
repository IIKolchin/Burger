import styles from "./ingredient.module.css";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { BrowserRouter as Router, useParams } from "react-router-dom";

export function IngredientPage() {
    
  const data = JSON.parse(localStorage.getItem("data"));
  const { id } = useParams();
  const ingredient = data.find((el) => el._id === id);

  return (
    <>
      <h3 className={styles.heading}>Детали ингредиента</h3>
      <IngredientDetails data={ingredient} />
    </>
  );
}
