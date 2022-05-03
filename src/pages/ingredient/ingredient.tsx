import styles from "./ingredient.module.css";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { useSelector } from "../../services/types/index";

export function IngredientPage() {
  const data = useSelector((store) => store.items.data);
  const isItems = useSelector((store) => store.items.dataRequest);
  const isError = useSelector((store) => store.items.dataFailed);

  return (
    <>
      {data.length !== 0 && !isItems && !isError ? (
        <>
          <h3 className={styles.heading}>Детали ингредиента</h3>
          <IngredientDetails />
        </>
      ) : null}
    </>
  );
}
