import { products } from "../utils/products";

const basket =
  localStorage.getItem("basket") === null
    ? []
    : JSON.parse(localStorage.getItem("basket"));

const initialState = {
  products,
  basket,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case "delete":
      return {
        ...state,
        basket: action.payload,
      };

    default:
      return state;
  }
}
