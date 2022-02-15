import React, {useRef} from "react";

import {
  ConstructorElement,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './item.module.css';
import { useDrag, useDrop } from "react-dnd";
import {DELETE_ITEM} from "../../services/actions/ingredients";
import { useSelector, useDispatch } from "react-redux";

export default function Item({ data, index, updateItem }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "item",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const dispatch = useDispatch();

  const [spec, dropRef] = useDrop({
    accept: "item",
    hover: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;


      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;

      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      updateItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));

  const opacity = isDragging ? 0 : 1;

  const id = data._id

    const onDelete = () => {
      dispatch({
        type: DELETE_ITEM,
        index
        
      });
    };


  return (
    <div className={styles.group} ref={dragDropRef} style={{ opacity }}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={data.name}
        price={data.price}
        thumbnail={data.image}
        handleClose={(e) => onDelete(e.target)}
      />
    </div>
  );
}
