import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";


export function addToCart(product) {
    return {
      type: ADD_TO_CART,
      data: { product: product, quantity: 1 },
    };
  }
  
  export function removeFromCart(id) {
    return {
      type: REMOVE_FROM_CART,
      data: id,
    };
  }