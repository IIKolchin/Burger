import styles from "./feed-item.module.css";

export function FeedItem() {

    return (
        <div className={styles.container}>
            <div className={styles.group + " pt-6"}>
                <span className={styles.number + " text text_type_digits-default pl-6"}>#034535</span>
                <span className={styles.date + " text text_type_main-default text_color_inactive pr-6"}>Сегодня, 16:20 i-GMT+3</span>
                </div>

                <h3 className={styles.name + " ml-6 mt-6"}>Death Star Starship Main бургер</h3>
            </div>

    )
}