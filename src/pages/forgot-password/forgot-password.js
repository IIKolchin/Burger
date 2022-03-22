import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../login/login.module.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  forgotPassword,
  SET_FORGOT_PASSWORD,
} from "../../services/actions/forgotPassword";

export function ForgotPasswordPage() {
  
  const login = sessionStorage.getItem("login");
  const form = useSelector((store) => store.forgotPassword.form);
  const forgotPasswordSuccess = useSelector(
    (store) => store.forgotPassword.forgotPasswordSuccess
  );
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch({
      type: SET_FORGOT_PASSWORD,
      payload: { ...form, [e.target.name]: e.target.value },
    });
  };

  if (login) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(form.email));
  };

  if (forgotPasswordSuccess) {
    return (
      <Redirect
        to={{
          pathname: "/reset-password",
        }}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <h2 className={styles.heading}>Восстановление пароля</h2>
      <div className="mb-6">
        <EmailInput onChange={onChange} value={form.email} name={"email"} />
      </div>
      <Button type="primary" size="medium">
        Восстановить
      </Button>

      <p className={styles.p + " mt-20 mb-4"}>
        Вспомнили пароль?{" "}
        <Link to="/login" className={styles.a}>
          Войти
        </Link>
      </p>
    </form>
  );
}
