import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ModalSwitch } from "../modal-switch/modal-switch";
import { getIngredients } from "../../services/actions/ingredients";
import { useDispatch } from "react-redux";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());

  }, [dispatch]);

  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

export default App;
