import React, { useEffect } from "react";
import { ModalSwitch } from "../modal-switch/modal-switch";
import { getIngredients } from "../../services/actions/ingredients";
import { useDispatch } from "../../services/types/index";
import { getUser } from "../../services/actions/user";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUser());
  }, [dispatch]);

  return <ModalSwitch />;
}

export default App;
