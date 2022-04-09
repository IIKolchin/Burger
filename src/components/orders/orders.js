import styles from "./orders.module.css";

export function Orders() {
  return (
    <section className={styles.container}>
      <div className={styles.group + " mb-15"}>
        <div className={styles.status + " mr-9"}>
          <h3 className={styles.heading}>Готовы:</h3>
          <ul className={styles.ul + " text text_type_digits-default"}>
            <li className={styles.li + " mb-2"}>034533</li>
            <li className={styles.li + " mb-2"}>034532</li>
            <li className={styles.li + " mb-2"}>034530</li>
            <li className={styles.li + " mb-2"}>034527</li>
            <li className={styles.li}>034525</li>
          </ul>
        </div>
        <div className={styles.status}>
          <h3 className={styles.heading}>В работе:</h3>
          <ul className={styles.ul + " text text_type_digits-default"}>
            <li className="mb-2">034538</li>
            <li className="mb-2">034541</li>
            <li>034542</li>
          </ul>
        </div>
      </div>

      <h3 className={styles.heading}>Выполнено за все время:</h3>

      <p className={styles.number + " text text_type_digits-large"}>28 752</p>

      <h3 className={styles.heading}>Выполнено за сегодня:</h3>

      <p className={styles.number + " text text_type_digits-large"}>138</p>
    </section>
  );
}
