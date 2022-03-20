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
          <NotUserRoute path="/login" exact={true}>
            <LoginPage />
          </NotUserRoute>
      
          <NotUserRoute path="/register" exact={true}>
            <RegisterPage />
          </NotUserRoute>
     
          <NotUserRoute path="/forgot-password" exact={true}>
            <ForgotPasswordPage />
          </NotUserRoute>
     
          <NotUserRoute path="/reset-password" exact={true}>
            <ResetPasswordPage />
          </NotUserRoute>
  
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
