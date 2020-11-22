import { createStore } from "redux";
import reducer from "./reducer";

const persistedState = {
  basket: JSON.parse(localStorage.getItem("basket")) || []
};

export const store = createStore(reducer, persistedState);

store.subscribe(() => {
  const state = store.getState();

  if(state.hasOwnProperty('basket')) {
    localStorage.setItem("basket", JSON.stringify(state.basket));
  }
});
