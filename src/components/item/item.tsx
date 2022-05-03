import React, { FC, useRef } from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./item.module.css";
import { DropTargetMonitor, useDrag, useDrop, XYCoord } from "react-dnd";
import { TIngredients } from "../../services/types/data";

type TItemProps = {
  data: TIngredients;
  index: number;
  updateItem: (dragIndex: number, hoverIndex: number) => void;
  deleteItem: () => void;
};

const Item: FC<TItemProps> = ({ data, index, updateItem, deleteItem }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, dragRef] = useDrag({
    type: "item",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "item",
    hover(item: any, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      updateItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  dragRef(dropRef(ref));

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div className={styles.group} ref={ref} style={{ opacity }}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={data.name}
        price={data.price}
        thumbnail={data.image}
        handleClose={deleteItem}
      />
    </div>
  );
};

export default Item;
