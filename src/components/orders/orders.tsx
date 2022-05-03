import styles from "./orders.module.css";
import { useSelector } from "../../services/types/index";

export function Orders() {
  const data = useSelector((store) => store.ws.messages);
  const total = useSelector((store) => store.ws.total);
  const totalToday = useSelector((store) => store.ws.totalToday);

  const done = data ? data?.filter((item) => item.status === "done") : null;
  const pending = data
    ? data?.filter((item) => item.status === "pending")
    : null;

  return (
    <section className={styles.container}>
      <div className={styles.group + " mb-15"}>
        <div className={styles.status + " mr-9"}>
          <h3 className={styles.heading}>Готовы:</h3>
          <ul className={styles.ul + " text text_type_digits-default"}>
            <div className={styles.column}>
              {done &&
                done.slice(0, 10).map((item, i) => {
                  return (
                    <li className={styles.li + " mb-2"} key={i}>
                      {item.number}
                    </li>
                  );
                })}
            </div>

            <div className={styles.column}>
              {done &&
                done &&
                done.slice(10, 20).map((item, i) => {
                  return (
                    <li className={styles.li + " mb-2"} key={i}>
                      {item.number}
                    </li>
                  );
                })}
            </div>
          </ul>
        </div>
        <div className={styles.status}>
          <h3 className={styles.heading}>В работе:</h3>
          <ul className={styles.ul + " text text_type_digits-default"}>
            <div className={styles.column}>
              {pending &&
                pending.slice(0, 10).map((item, i) => {
                  return (
                    <li className="mb-2" key={i}>
                      {item.number}
                    </li>
                  );
                })}
            </div>

            <div className={styles.column}>
              {pending &&
                pending.slice(10, 20).map((item, i) => {
                  return (
                    <li className="mb-2" key={i}>
                      {item.number}
                    </li>
                  );
                })}
            </div>
          </ul>
        </div>
      </div>

      <h3 className={styles.heading}>Выполнено за все время:</h3>

      <p className={styles.number + " text text_type_digits-large"}>
        {total ? total : 0}
      </p>

      <h3 className={styles.heading}>Выполнено за сегодня:</h3>

      <p className={styles.number + " text text_type_digits-large"}>
        {totalToday ? totalToday : 0}
      </p>
    </section>
  );
}
