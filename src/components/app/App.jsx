import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "../app-header/app-header";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage
} from "../../pages";

function App() {
  return (
    <>
      <AppHeader />
      <Router>
        <Switch>
          <Route path="/nn" exact={true}>
            <HomePage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/с" exact={true}>
            <LoginPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/v" exact={true}>
            <RegisterPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/x" exact={true}>
            <ForgotPasswordPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/" exact={true}>
            <ResetPasswordPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
