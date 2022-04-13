import styles from "./orders.module.css";
import { useSelector, useDispatch } from "react-redux";

export function Orders() {
  const data = useSelector((store) => store.ws.messages)[0];
  console.log(data);

  const done = data.orders.filter((item) => item.status === "done");
  const pending = data.orders.filter((item) => item.status === "pending");

  console.log(done);

  return (
    <section className={styles.container}>
      <div className={styles.group + " mb-15"}>
        <div className={styles.status + " mr-9"}>
          <h3 className={styles.heading}>Готовы:</h3>
          <ul className={styles.ul + " text text_type_digits-default"}>
            <div className={styles.column}>
              {done.slice(0, 10).map((item) => {
                return <li className={styles.li + " mb-2"}>{item.number}</li>;
              })}
            </div>

            <div className={styles.column}>
              {done.slice(10, 20).map((item) => {
                return <li className={styles.li + " mb-2"}>{item.number}</li>;
              })}
            </div>
          </ul>
        </div>
        <div className={styles.status}>
          <h3 className={styles.heading}>В работе:</h3>
          <ul className={styles.ul + " text text_type_digits-default"}>
            <div className={styles.column}>
              {pending.slice(0, 10).map((item) => {
                return <li className="mb-2">{item.number}</li>;
              })}
            </div>

            <div className={styles.column}>
              {pending.slice(10, 20).map((item) => {
                return <li className="mb-2">{item.number}</li>;
              })}
            </div>
          </ul>
        </div>
      </div>

      <h3 className={styles.heading}>Выполнено за все время:</h3>

      <p className={styles.number + " text text_type_digits-large"}>
        {data.total}
      </p>

      <h3 className={styles.heading}>Выполнено за сегодня:</h3>

      <p className={styles.number + " text text_type_digits-large"}>
        {data.totalToday}
      </p>
    </section>
  );
}
