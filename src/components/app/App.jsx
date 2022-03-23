import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ModalSwitch } from "../modal-switch/modal-switch";
import { getIngredients } from "../../services/actions/ingredients";
import { useSelector, useDispatch } from "react-redux";
import { getUserRequest } from "../../services/actions/getUser";
import { getCookie } from "../../utils/cookie";

function App() {

  const dispatch = useDispatch();


  const getUser = () => {
    dispatch(getUserRequest(getCookie("token")))
  };

  useEffect(() => {
    dispatch(getIngredients());
    getUser();
  }, [dispatch]);


  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

export default App;
