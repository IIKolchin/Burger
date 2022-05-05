import React, { FC } from "react";
import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

type TModalOverlay = {
  handleHide: () => void;
};

const ModalOverlay: FC<TModalOverlay> = (props) => {
  return <div className={styles.overlay} onClick={props.handleHide}></div>;
};

ModalOverlay.propTypes = {
  handleHide: PropTypes.func.isRequired,
};

export default ModalOverlay;
