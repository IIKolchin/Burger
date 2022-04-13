import styles from "./order-feed.module.css";
import { FeedItem } from "../feed-item/feed-item";
import { Orders } from "../orders/orders";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

export function OrderFeed() {

    const location = useLocation();
    const data = useSelector(store => store.ws.messages);
  const feed1 = (data.map(data => data.orders));
  const feed = feed1[0];



  return (
    <section >
      <h1 className={styles.heading}>Лента заказов</h1>
      <div className={styles.items}>


      { feed && feed.map((data) => {
        //   console.log(data)
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
          })}

      </div>
    </section>
  );
}
