import React, { FC } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById("modals") as HTMLDivElement;

type TmodalProps = {
  header?: string;
  handleHide: () => void;
};

const Modal: FC<TmodalProps> = (props) => {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
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
      <div className={styles.modal}>
        <h3 className={styles.heading + " ml-10"}>{props.header}</h3>
        <button onClick={props.handleHide} className={styles.close}>
          <CloseIcon type="primary" />
        </button>
        {props.children}
      </div>
      <ModalOverlay handleHide={props.handleHide} />
    </>,
    modalRoot
  );
};

export default Modal;
