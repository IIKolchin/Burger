import styles from "./image-feed.module.css";
// import { dataPropTypes } from "../../utils/data";

export function ImageFeed({ data }) {
  return (
    <div className={styles.item}>
      {data && (
        <img
          className={styles.image}
          src={`${data.image}`}
          alt="Изображение ингредиента"
        />
      )}
    </div>
  );
}

// ImageFeed.propTypes = {
//   data: dataPropTypes.isRequired,
// };
