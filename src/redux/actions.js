import { products } from "../utils/products";

export function loadProducts() {
  return {
    type: "load",
    payload: products,
  };
}

export function addToBasket(id) {
  return {
    type: "add",
    payload: id,
  };
}

export function deleteFromBasket(id) {
  return {
    type: "delete",
    payload: id,
  };
}
