import styles from "./order-feed.module.css";
import { FeedItem } from "../feed-item/feed-item";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

export function OrderFeed() {

  const location = useLocation();
  const data = useSelector((store) => store.ws.messages);

  return (
    <section>
      <h1 className={styles.heading}>Лента заказов</h1>
      <div className={styles.items}>
        {data
          ? data.orders?.map((data) => {
              return (
                <Link
                  key={data._id}
                  className={styles.link}
                  to={{
                    pathname: `/feed/${data._id}`,
                    state: { background: location },
                  }}
                >
                  <FeedItem data={data} />
                </Link>
              );
            })
          : null}
      </div>
    </section>
  );
}
