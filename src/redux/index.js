import { createStore } from "redux";
import reducer from "./reducer";

export const store = createStore(reducer);

store.subscribe(() => {
  const { basket } = store.getState();
  localStorage.setItem("product", JSON.stringify(basket));
});
