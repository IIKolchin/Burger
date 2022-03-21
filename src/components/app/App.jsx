import { BrowserRouter as Router, Switch, Route, useLocation, } from "react-router-dom";
import { ModalSwitch } from "../modal-switch/modal-switch";


function App() {

  return (
    <Router>
      <ModalSwitch />
    </Router>
  );

}

export default App;
