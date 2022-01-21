import React from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";

const el = document.createElement("div");

function Modal(props) {
  React.useEffect(() => {
    document.body.appendChild(el);

    return () => {
      document.body.removeChild(el);
    };
  });

  const style = {
    width: 720,
  };

  return ReactDOM.createPortal(
    <>
      {props.showHeading ? (style.height = 539) : null}
      <div className={styles.modal} style={style}>
        {props.showHeading && (
          <h3 className={styles.heading + " ml-10"}>Детали ингредиента</h3>
        )}
        <button onClick={props.handleHide} className={styles.close}>
          <CloseIcon />
        </button>

        {props.children}
      </div>
      <ModalOverlay handleHide={props.handleHide} />
    </>,
    el
  );
}

Modal.propTypes = {
  showHeading: PropTypes.bool,
  handleHide: PropTypes.func.isRequired,
};

export default Modal;
