import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../login/login.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  SET_NEW_PASSWORD,
  getNewPassword,
} from "../../services/actions/newPassword";
import { Redirect } from "react-router-dom";

export function ResetPasswordPage() {

  const isNewPasswordSuccess = useSelector(
    (store) => store.newPassword.isNewPasswordSuccess
  );
  const form = useSelector((store) => store.newPassword.form);
  const login = sessionStorage.getItem("login");
  const forgotPassword = localStorage.getItem("forgot-password");
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch({
      type: SET_NEW_PASSWORD,
      payload: { ...form, [e.target.name]: e.target.value },
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getNewPassword(form));
  };

  if (isNewPasswordSuccess) {
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  }

  if (!forgotPassword) {
    return (
      <Redirect
        to={{
          pathname: "/forgot-password",
        }}
      />
    );
  }

  if (login) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <h2 className={styles.heading}>Восстановление пароля</h2>
      <Input
        type={"text"}
        placeholder={"Введите новый пароль"}
        onChange={onChange}
        value={form.password}
        name={"password"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
      />
      <div className="mt-6 mb-6">
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={onChange}
          value={form.token}
          name={"token"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
        />
      </div>
      <Button type="primary" size="medium">
        Сохранить
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
