import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { useSelector, useDispatch } from "react-redux";
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
} from "../../pages";

export function ModalSwitch() {

  
  const location = useLocation();
  const dispatch = useDispatch();
  const shortModal = useSelector((state) => state.modal.shortModal);
  const background = location.state && location.state.background;
  const data = useSelector((store) => store.items.data);
  const isItems = useSelector((store) => store.items.dataRequest);
  const isError = useSelector((store) => store.items.dataFailed);
  const history = useHistory();

  const handleHide = () => {
    dispatch({ type: HIDE_MODAL });
    history.goBack();
  };

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

        <ProtectedRoute path="/profile" exact>
          <Profile />
        </ProtectedRoute>

        <ProtectedRoute path="/profile/orders" exact>
          <ProfileOrders />
        </ProtectedRoute>

        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/ingredients/:id" exact>
          <IngredientPage />
        </Route>

        <Route>
          <NotFound404 />
        </Route>
      </Switch>
      {background && data.length !== 0 && !isItems && !isError && (
        <Route
          path="/ingredients/:id"
          children={
            <Modal
              header="Детали ингредиента"
              shortModal={shortModal}
              handleHide={handleHide}
            >
              <IngredientDetails />
            </Modal>
          }
        />
      )}
    </>
  );
}
