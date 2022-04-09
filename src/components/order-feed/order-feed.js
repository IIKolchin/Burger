import styles from "./order-feed.module.css";
import { FeedItem } from "../feed-item/feed-item";
import { Orders } from "../orders/orders";

export function OrderFeed() {
  return (
    <section >
      <h1 className={styles.heading}>Лента заказов</h1>
      <div className={styles.items}>
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      </div>
    </section>
  );
}
