import React from "react";
import styles from "./modal-overlay.module.css";

function ModalOverlay(props) {
  return <div className={styles.overlay} onClick={props.handleHide}></div>;
}

export default ModalOverlay;
