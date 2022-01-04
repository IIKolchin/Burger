import React from 'react';
import logo from './logo.svg';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header'

function App() {
  return (
    <div className="App">
      
     <AppHeader />
     <h1 className={styles.title}>Соберите бургер</h1>
      
    </div>
  );
}

export default App;
