import React from "react";
import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

function ModalOverlay(props) {
  return <div className={styles.overlay} onClick={props.handleHide}></div>;
}

ModalOverlay.propTypes = {
  handleHide: PropTypes.func.isRequired,
};

export default ModalOverlay;
