import styles from "./order-feed.module.css"
import { FeedItem } from "../feed-item/feed-item";


export function OrderFeed() {
    return (
        <>
        <h1 className={styles.heading}>Лента заказов</h1>
        <FeedItem/>
        </>
    )
}