import { FC } from "react";
import { TIngredients } from "../../services/types/data";
import styles from "./image-feed.module.css";

type TImageFeedProps = {
  data: TIngredients | undefined;
};

export const ImageFeed: FC<TImageFeedProps> = ({ data }) => {
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
};
