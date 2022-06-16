import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./authentication";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
}); //for multiple reducers

// const store = configureStore({ reducer: counterSlice.reducer }); //for single reducer


export default store;
