import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "../app-header/app-header";
import { ProtectedRoute } from "../protected-route/protected-route";
import { NotUserRoute } from "../not-user-route/not-user-route"
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  Profile,
  NotFound404
} from "../../pages";

function App() {
  return (
    <>
    <Router>
      <AppHeader />

        <Switch>
          <Route path="/login" exact={true}>
            <LoginPage />
          </Route>
      
          <Route path="/register" exact={true}>
            <RegisterPage />
          </Route>
     
          <Route path="/forgot-password" exact={true}>
            <ForgotPasswordPage />
          </Route>
     
          <Route path="/reset-password" exact={true}>
            <ResetPasswordPage />
          </Route>
  
        <ProtectedRoute path="/profile" exact={true}>
            <Profile />
            </ProtectedRoute>
 
          <Route path="/" exact={true}>
            <HomePage />
          </Route>


         <Route >
          <NotFound404 />
        </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
