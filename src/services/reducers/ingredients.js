import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  ADD_ITEM,
  DELETE_ITEM,
  ADD_BUN,
  UPDATE_POSITION_ITEM
} from "../actions/ingredients";

const initialState = {
  data: [],
  constructor: [],
  bun: {},
  dataRequest: false,
  dataFailed: false,
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        dataRequest: true,
        dataFailed: false,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        dataFailed: false,
        data: action.data,
        dataRequest: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, dataFailed: true, dataRequest: false };
    }
    case ADD_ITEM: {
      return {
        ...state,
        constructor: [
          ...state.constructor,
          ...state.data.filter((item) => item._id === action.id && item.type !== 'bun'),
        ],
      };
    }
    case DELETE_ITEM: {
        return { ...state, constructor: [...state.constructor].filter((item, index)=> index !== action.index) };
      }
    case ADD_BUN: {
        return {
            ...state,
            bun: state.data.find((item) => item._id === action.id && item.type === 'bun')
            
        }
    }
    case UPDATE_POSITION_ITEM: {
        
return {
    ...state,
    constructor: action.constructor
}
    //    function(dragIndex, hoverIndex) {

    //         const dragItem = constructor[dragIndex]
    //         const hoverItem = constructor[hoverIndex]
    //         // Swap places of dragItem and hoverItem in the pets array
            
    //             const updatedPets = [...constructor]
    //             updatedPets[dragIndex] = hoverItem
    //             updatedPets[hoverIndex] = dragItem

    //             return {
    //                 ...state,
    //                 constructor: updatedPets
    //             }
    //         }

        }
        //   const newArr = [...state.constructor];
        //     newArr.splice(newArr.indexOf(action.substituteId), 1);
        //     // this two states required because we have 2 dimensions move
        //     if(state.constructor.indexOf(action.substituteId) > state.constructor.indexOf(action.replacedId)) {
        //       // if drag element below drop element - replace drop element
        //       newArr.splice(newArr.indexOf(action.replacedId),0, action.substituteId)
        //     } else {
        //       // if drag element before drop element - replace element below drop element
        //       newArr.splice(newArr.indexOf(action.replacedId)+1,0, action.substituteId)
        //     }
        //     // newArr[state.indexOf(action.substituteId)] = action.replacedId;
        //     // newArr[state.indexOf(action.replacedId)] = action.substituteId;
      
        //     return {
        //         ...state,
        //         newArr
        //     }
        
            
    default: {
      return state;
    }
  }
};


