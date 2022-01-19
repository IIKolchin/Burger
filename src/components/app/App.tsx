import React from "react";
import { url } from "../../utils/data";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ModalOverlay from "../modal-overlay/modal-overlay";

function App() {
  const [state, setState] = React.useState({
    hasError: false,
    data: [],
    showModal: false
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

  function handleShow() {
    setState({...state, showModal: true});
  }
  
  function handleHide() {
    setState({...state, showModal: false});
  }

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
<button onClick={handleShow} className={styles.button}></button>
      {state.showModal ?(
      <ModalOverlay >
        <div className={styles.modal} onClick={handleHide}>
        
      
       </div>
        
      </ModalOverlay>) : null}
    </>
  );
}

export default App;
