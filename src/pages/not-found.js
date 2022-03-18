import React, { useEffect } from "react";
import { useHistory, Link, useLocation } from "react-router-dom";
import styles from "./not-found.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export function NotFound404() {
  const history = useHistory();

  return (
  
        <div className={styles.content}>
            <div className={styles.container}>
          <h1 className={styles.heading}>404</h1>
          <p className={styles.text}>Page not found!</p>
    
            <Link to="/" className={styles.link}>
                <div className={styles.button}>
                <Button>Back to home</Button>
                </div>
                </Link>
                </div>
        </div>

  );
}
