import React, { useState, useReducer, useContext } from "react";
import { URL, checkResponse } from "../../utils/data";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { DataContext, TotalPriceContext } from "../../services/appContext";


const initialPrice = 0;

function reducer(totalPrice, action) {

  console.log()
  switch (action.type) {
    case "set":
      return  action.payload;
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}





function App() {
  const [state, setState] = useState({
    hasError: false,
    data: [],
  });

  const { data, hasError } = state;


  const [totalPrice, priceDispatch] = useReducer(reducer, initialPrice)

 

  React.useEffect(() => {
    getIngredients();
  }, []);

  function getIngredients() {
    setState({ ...state, hasError: false });
    fetch(`${URL}ingredients`)
      .then(checkResponse)
      .then((data) =>
        setState((prevState) => ({ ...prevState, data: data.data }))
      )
      .catch((err) => {
        setState((prevState) => ({ ...prevState, hasError: true }));
        console.log(err);
      });
  }


  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <DataContext.Provider value={data}>
          <BurgerIngredients />
          <TotalPriceContext.Provider value={{totalPrice, priceDispatch}}>
          <BurgerConstructor />
          </TotalPriceContext.Provider>
        </DataContext.Provider>
      </main>
    </>
  );
}

export default App;
