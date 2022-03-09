import React, { useRef } from "react";
import PropTypes from "prop-types";
import { dataPropTypes } from "../../utils/data";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./item.module.css";
import { useDrag, useDrop } from "react-dnd";
import { DELETE_ITEM } from "../../services/actions/ingredients";
import { useDispatch } from "react-redux";

function Item({ data, index, updateItem }) {
  
  const [{ isDragging }, dragRef] = useDrag({
    type: "item",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const dispatch = useDispatch();

  const [, dropRef] = useDrop({
    accept: "item",
    hover(item, monitor) {
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
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      updateItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));

  const opacity = isDragging ? 0.5 : 1;

  const onDelete = () => {
    dispatch({
      type: DELETE_ITEM,
      index,
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

Item.propTypes = {
  data: dataPropTypes.isRequired,
  index: PropTypes.number.isRequired,
  updateItem: PropTypes.func.isRequired,
};

export default Item;
