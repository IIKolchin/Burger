import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ModalSwitch } from "../modal-switch/modal-switch";
import { getIngredients } from "../../services/actions/ingredients";
import { useDispatch } from "react-redux";
import { getUser } from "../../services/actions/getUser";
import { WS_CONNECTION_ALL_START, WS_CONNECTION_START } from "../../services/actions/wsActions";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUser()); 
    dispatch({ type: WS_CONNECTION_ALL_START });
    dispatch({ type: WS_CONNECTION_START });
  }, [dispatch]);
  

  

  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

export default App;
