import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { DataContext } from "../../services/appContext";



function App() {
  // const [state, setState] = useState({
  //   hasError: false,
  //   data: [],
  // });

  // const { data, hasError } = state;

  // React.useEffect(() => {
  //   getIngredients();
  // }, []);


  //  export function getIngredientsRequest() {
  //   setState({ ...state, hasError: false });
  //   fetch(`${URL}ingredients`)
  //     .then(checkResponse)
  //     .then((data) =>
  //       setState((prevState) => ({ ...prevState, data: data.data }))
  //     )
  //     .catch((err) => {
  //       setState((prevState) => ({ ...prevState, hasError: true }));
  //       console.log(err);
  //     });
  // }



  return (
    <>
      <AppHeader />
      <main className={styles.main}>
     
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
          </DndProvider>

       
      </main>
    </>
  );
}

export default App;
