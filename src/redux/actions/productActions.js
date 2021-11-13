import { ActionTypes } from "../constants/actionTypes";;
export const setProducts = (products) => {
    console.log('setProducts action success', products.length)
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    };
};
