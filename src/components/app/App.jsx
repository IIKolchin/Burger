import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ModalSwitch } from "../modal-switch/modal-switch";
import { getIngredients } from "../../services/actions/ingredients";
import { useDispatch } from "react-redux";
import { getUser } from "../../services/actions/getUser";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

export default App;
