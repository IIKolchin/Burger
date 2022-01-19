import React from "react";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";

function Modal(props) {
  return (
    <div className={styles.modal}>
      <button onClick={props.handleHide} className={styles.close}>
        <CloseIcon />
      </button>
      <ModalOverlay>
        <div className={styles.overlay} onClick={props.handleHide}></div>
      </ModalOverlay>
    </div>
  );
}

export default Modal;
