import React, { useCallback, useEffect, useMemo } from "react";
import styles from "./ingredient.module.css";
import { dataPropTypes } from "../utils/data";
import IngredientDetails from "../components/ingredient-details/ingredient-details";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams,
  } from "react-router-dom";
  import { SHOW_MODAL } from "../services/actions/modalIngredient";
  import { useSelector, useDispatch } from "react-redux";
  import { getIngredients } from "../services/actions/ingredients";


export function IngredientPage() {


    const data = JSON.parse(localStorage.getItem('data'))
    
    console.log(data)


    const { id } = useParams();
    const loadIngredient = data.find((el) => el._id === id)

  console.log(data)
const dataItem = data.find((el) => el._id === id)
    

    return (
        <>
         <h3 className={styles.heading}>Детали ингредиента</h3>
        <IngredientDetails data={loadIngredient} />
        </>
    );
  }
  

  
