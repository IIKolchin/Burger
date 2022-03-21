import React from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modals");

function Modal(props) {

  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === 27) {
        props.handleHide();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [props.handleHide]);

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal} >
        <h3 className={styles.heading + " ml-10"}>{props.header}</h3>
        <button onClick={props.handleHide} className={styles.close}>
          <CloseIcon />
        </button>
        {props.children}
      </div>
      <ModalOverlay handleHide={props.handleHide} />
    </>,
    modalRoot
  );
}

Modal.propTypes = {
  shortModal: PropTypes.bool,
  handleHide: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  header: PropTypes.string,
};

export default Modal;
