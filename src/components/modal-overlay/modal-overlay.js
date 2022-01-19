import React from "react";
import ReactDOM from 'react-dom';
import styles from "./modal-overlay.module.css";


function ModalOverlay(props) {
    const modalRoot = document.getElementById('modal-root');
    const el = document.createElement('div');

React.useEffect(() => {
    document.body.appendChild(el);
})

    return (
        ReactDOM.createPortal(props.children, el)
        )
    
}




export default ModalOverlay