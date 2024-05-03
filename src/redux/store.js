import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cart-reducer";
import { combineReducers } from "redux";

const combinedReducer = combineReducers({ cartReducer });

const store = configureStore({ reducer: combinedReducer });
export default store;
