import React from "react";

function AdditionButton({ isProductInBasket, handleClick }) {
  return (
    <button
      className="button addition-button"
      onClick={handleClick}
      disabled={isProductInBasket}
    >
      {isProductInBasket ? "Товар в корзине" : "Добавить в корзину"}
    </button>
  );
}

export default AdditionButton;
