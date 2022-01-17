import React from "react";
import { url } from "../../utils/data";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
  const [state, setState] = React.useState({
    hasError: false,
    data: [],
  });

  const { data, hasError } = state;

  React.useEffect(() => {
    getIngredients();
  }, []);

  function getIngredients() {
    setState({ ...state, hasError: false });
    fetch(url)
      .then((res) => res.json())
      .then((data) => setState({ ...state, data: data.data }))
      .catch((e) => {
        setState({ ...state, hasError: true });
      });
  }

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </>
  );
}

export default App;
