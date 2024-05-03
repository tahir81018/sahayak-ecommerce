import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

const initialState = [];
export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      let cartItem = action.data;

      const index = state.findIndex(
        (obj) => obj.product.id == cartItem.product.id
      );
      if (index !== -1) {
        const updatedState = state.map((item, i) => {
          if (item.product.id == cartItem.product.id) {
            const newItem = { ...item, quantity: item.quantity + 1 };
            return newItem;
          }
          return item;
        });
        return updatedState;
      }
      return [...state, cartItem];

    case REMOVE_FROM_CART:
      const newState = state.filter((cartItem) => cartItem.id !== action.data);
      return newState;

    default:
      return state;
  }
}
