import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { useSelector, useDispatch } from "../../services/types/index";
import { HIDE_MODAL } from "../../services/actions/modalIngredient";
import AppHeader from "../app-header/app-header";
import { ProtectedRoute } from "../protected-route/protected-route";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  Profile,
  NotFound404,
  IngredientPage,
  ProfileOrders,
  FeedPage,
  OrderInfo,
} from "../../pages";

type TLocationState = {
  background: {
    pathname: string;
    state: {};
    search: string;
    hash: string;
    // readonly key: string;
  };
};

export function ModalSwitch() {
  const location = useLocation<TLocationState>();
  const history = useHistory();
  const dispatch = useDispatch();
  const action = history.action === "PUSH" || history.action === "REPLACE";
  const background = action && location.state && location.state.background;
  const data = useSelector((store) => store.items.data);
  const isItems = useSelector((store) => store.items.dataRequest);
  const isError = useSelector((store) => store.items.dataFailed);

  const handleHide = () => {
    dispatch({ type: HIDE_MODAL });
    history.goBack();
  };

  // console.log(location.state.background)

  return (
    <>
      <AppHeader />

      <Switch location={background || location}>
        <Route path="/login" exact>
          <LoginPage />
        </Route>

        <Route path="/register" exact>
          <RegisterPage />
        </Route>

        <Route path="/forgot-password" exact>
          <ForgotPasswordPage />
        </Route>

        <Route path="/reset-password" exact>
          <ResetPasswordPage />
        </Route>

        <Route path="/feed" exact>
          <FeedPage />
        </Route>

        <ProtectedRoute path="/profile" exact>
          <Profile />
        </ProtectedRoute>

        <ProtectedRoute path="/profile/orders" exact>
          <ProfileOrders />
        </ProtectedRoute>

        <ProtectedRoute path="/profile/orders/:id" exact>
          <OrderInfo />
        </ProtectedRoute>

        <Route path="/ingredients/:id" exact>
          <IngredientPage />
        </Route>

        <Route path="/feed/:id" exact>
          <OrderInfo />
        </Route>

        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route>
          <NotFound404 />
        </Route>
      </Switch>
      {background && data.length !== 0 && !isItems && !isError && (
        <Route
          path="/ingredients/:id"
          children={
            <Modal header="Детали ингредиента" handleHide={handleHide}>
              <IngredientDetails />
            </Modal>
          }
        />
      )}

      {background && (
        <>
          <Route
            path="/feed/:id"
            children={
              <Modal handleHide={handleHide}>
                <OrderInfo />
              </Modal>
            }
          />
          <Route
            path="/profile/orders/:id"
            children={
              <Modal handleHide={handleHide}>
                <OrderInfo />
              </Modal>
            }
          />
        </>
      )}
    </>
  );
}
