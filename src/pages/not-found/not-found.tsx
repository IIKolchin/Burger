import { Link } from "react-router-dom";
import styles from "./not-found.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export function NotFound404() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <h1 className={styles.heading}>404</h1>
        <p className={styles.text}>Страница не найдена!</p>
        <Link to="/" className={styles.link}>
          <div className={styles.button}>
            <Button>Вернуться на главную</Button>
          </div>
        </Link>
      </div>
    </div>
  );
}
