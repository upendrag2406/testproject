import { ActionTypes } from "../constants/actionTypes";

const initialState ={
     products : []
    }
const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, 
                products: payload}; 
        case ActionTypes.ADD_PRODUCT:
            return {...state.products, 
                //products: payload,
                products: [...state.products, payload],
            }; 
        default:
            return state;
    }
}
export default productReducer; 