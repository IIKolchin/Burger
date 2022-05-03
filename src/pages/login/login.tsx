import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { Link, useLocation } from "react-router-dom";
import { login, SET_AUTHORIZATION } from "../../services/actions/user";
import { useSelector, useDispatch } from "../../services/types/index";
import { Redirect } from "react-router-dom";
import { useCallback } from "react";

export function LoginPage() {
  const form = useSelector((store) => store.authorization.form);
  const isAuth = useSelector((store) => store.authorization.isAuth);
  const isUser = useSelector((store) => store.user.isUser);
  const dispatch = useDispatch();
  const { state } = useLocation<{ from: string }>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: SET_AUTHORIZATION,
      payload: { ...form, [e.target.name]: e.target.value },
    });
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(login(form));
    },
    [form, dispatch]
  );

  if (isAuth || isUser) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <h2 className={styles.heading}>Вход</h2>
      <EmailInput onChange={onChange} value={`${form.email}`} name={"email"} />
      <div className="mt-6 mb-6">
        <PasswordInput
          onChange={onChange}
          value={`${form.password}`}
          name={"password"}
        />
      </div>
      <Button type="primary" size="medium">
        Войти
      </Button>

      <p className={styles.p + " mt-20 mb-4"}>
        Вы — новый пользователь?{" "}
        <Link to="/register" className={styles.a}>
          Зарегистрироваться
        </Link>
      </p>
      <p className={styles.p}>
        Забыли пароль?{" "}
        <Link to="/forgot-password" className={styles.a}>
          Восстановить пароль
        </Link>
      </p>
    </form>
  );
}
