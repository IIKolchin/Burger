import React, { useState, useContext, useRef, useMemo, useEffect, useCallback } from "react";
import { URL, checkResponse } from "../../utils/data";
import OrderDetails from "../order-details/order-details";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import { DataContext } from "../../services/appContext";
import { OrderContext } from "../../services/orderContext";
import { useDrag, useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";
import Item from "../item/item";

import { ADD_ITEM, ADD_BUN, UPDATE_POSITION_ITEM, DELETE_ITEM } from "../../services/actions/ingredients";

function BurgerConstructor() {
  // const [state, setState] = useState({
  //   showModal: false,
  // });
  // const [order, setOrder] = useState(null);
  // const data = useContext(DataContext);

  const data = useSelector((store) => store.items.data);
  const constructor = useSelector((store) => store.items.constructor);
  const typeConstructor = constructor.find((item) => item.type)
 
  const bun = useSelector((store) => store.items.bun)
  const dispatch = useDispatch();

  const ingredients = ['sauce', 'main']

  const [, dropTarget] = useDrop({
    accept: ingredients,
    drop(item) {
      dispatch({
        type: ADD_ITEM,
        ...item
      });    
    },
    
  });





  const [, drop] = useDrop({
    accept: 'bun',
    drop(item) {
      dispatch({
        type: ADD_BUN,
        ...item,
        
      });
    
    },
  });

  

  console.log(constructor);



const id = constructor._id


const moveListItem = useCallback(
  () => {

          
        dispatch(updateItem())
          
    

         },[dispatch]
)

const updateItem = (dragIndex, hoverIndex) => {

 
  const dragItem = constructor[dragIndex]
      const hoverItem = constructor[hoverIndex]
  const updatedPets = [...constructor]
          updatedPets[dragIndex] = hoverItem
          updatedPets[hoverIndex] = dragItem;
          dispatch({
            type: UPDATE_POSITION_ITEM,
            constructor: updatedPets
          }) 
}

    // useDrag - the list item is draggable


 



  
 

//  moveItem()

  // useEffect(() => {
  //   dispatch(getIngredients())
  // }, [dispatch])


  //const buns = bun.type === 'bun' ? bun : null
  //bun = bun.find((item) => item.type.includes("bun"));
  // const sauce = constructor.filter((item) => item.type.includes("sauce"));
  // const main = constructor.filter((item) => item.type.includes("main"));
  // const ingredients = main.concat(sauce);
  // ingredients.push(bun, bun);

  // let id;

  // function handleShow() {
  //   if (ingredients.length > 3) {
  //     id = ingredients.map((item) => item._id);
  //   }
  //   fetch(`${URL}orders`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       ingredients: id,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then(checkResponse)
  //     .then((res) => {
  //       setOrder(res.order);
  //       setState({ ...state, showModal: true });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // function handleHide() {
  //   setState({ ...state, showModal: false });
  // }
const items = constructor.concat(bun);
items.push(bun)



  const totalPrice = useMemo(() => {
    let total = 0;
  
      items.map((item) => (total += item.price));

    return total ? total : 0;
  }, [items]);



  return (
    <section className={styles.section + " mt-25 ml-10"}>
      <div className={styles.component} ref={drop} >

     
       {bun && ( <div className="ml-8" >
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bun.name + " (верх)"}
              price={bun.price}
              thumbnail={bun.image}
              
            />
           
          </div>
        )
       }

        <div className={styles.constructor} ref={dropTarget}>
          
          {constructor.map((data, index) => {
            return (

          <Item index={index} key={index} data={data} updateItem={updateItem}/>
         
              // <div key={index} className={styles.group} ref={dragDropRef} style={{ opacity }}>
              //   <DragIcon type="primary" />
              //   <ConstructorElement
              //     text={data.name}
              //     price={data.price}
              //     thumbnail={data.image}
              //   />
              // </div>
            );
          })}

          {/* {sauce.map((data, index) => {
            return (
              <div key={index} className={styles.group}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={data.name}
                  price={data.price}
                  thumbnail={data.image}
                />
              </div>
            );
          })} */}
        </div>

        {/* <div className={styles.bun + " ml-8"} >
       {bun.map((bun, index) => {
         return ( <div className=" ml-8" key={index}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bun.name + " (верх)"}
              price={bun.price}
              thumbnail={bun.image}
              
            />
          </div>
        )
       })}
</div>  */}



        {bun && (
          <div className="ml-8" >
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={bun.name + " (низ)"}
              price={bun.price}
              thumbnail={bun.image}
              
            />
          </div>
        )}
      </div>

      <div className={styles.order + " mt-10 mr-4"}>
        <p className="text text_type_digits-medium mr-2">
          {totalPrice}
        </p>
        <div className={styles.icon}></div>
        <Button /* onClick={handleShow} */ type="primary" size="large">
          Оформить заказ
        </Button>
      </div>

      {/* {state.showModal && (
        <Modal handleHide={handleHide}>
          <OrderContext.Provider value={order}>
            <OrderDetails />
          </OrderContext.Provider>
        </Modal>
      )} */}
    </section>
  );
}

export default BurgerConstructor;
