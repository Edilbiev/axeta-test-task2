import { store } from "./index";

export function addToBasket(id) {
  const { products } = store.getState();
  const productToAdd = products.find((product) => product.id === id);

  return {
    type: "add",
    payload: productToAdd,
  };
}

export function deleteFromBasket(id) {
  const { basket } = store.getState();
  const filteredBasket = basket.filter((product) => product.id !== id);
  
  return {
    type: "delete",
    payload: filteredBasket,
  };
}
