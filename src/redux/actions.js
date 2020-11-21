import { store } from "./index";

export function addToBasket(id) {
  const { products } = store.getState();
  const productToAdd = products.find((product) => product.id === id);

  const storageBasket = JSON.parse(localStorage.getItem("basket")) || [];
  storageBasket.push(productToAdd);

  localStorage.setItem("basket", JSON.stringify(storageBasket));

  return {
    type: "add",
    payload: productToAdd,
  };
}

export function deleteFromBasket(id) {
  const { basket } = store.getState();
  const filteredBasket = basket.filter((product) => product.id !== id);

  localStorage.setItem("basket", JSON.stringify(filteredBasket));

  return {
    type: "delete",
    payload: filteredBasket,
  };
}
