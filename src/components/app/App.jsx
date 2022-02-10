import React, { useState } from "react";

import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { DataContext } from "../../services/appContext";

import {getIngredients} from '../../services/actions/ingredients'

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
        {/* <DataContext.Provider value={data}> */}
          <BurgerIngredients />
          {/* <BurgerConstructor /> */}
        {/* </DataContext.Provider> */}
      </main>
    </>
  );
}

export default App;
