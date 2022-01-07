import React from 'react';
import data from '../../utils/data'
import styles from './app.module.css';
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

function App() {
  return (
    <div >
      
     <AppHeader />
     
     <BurgerIngredients data={data}/>
      
    </div>
  );
}

export default App;
