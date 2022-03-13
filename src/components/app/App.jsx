import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "../app-header/app-header";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  Profile
} from "../../pages";

function App() {
  return (
    <>
    <Router>
      <AppHeader />
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/register" exact={true}>
            <RegisterPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/forgot-password" exact={true}>
            <ForgotPasswordPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/reset-password" exact={true}>
            <ResetPasswordPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/profile" exact={true}>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
