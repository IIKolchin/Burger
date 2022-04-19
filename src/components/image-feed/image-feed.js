import styles from "./image-feed.module.css";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export function ImageFeed({ id }) {
  const items = useSelector((store) => store.items.data);
  const data = items
    .filter((data) => data !== undefined)
    .find((data) => data._id === id);

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

ImageFeed.propTypes = {
  id: PropTypes.string.isRequired,
};
