import React from "react";
import cartIcon from "../assets/shopping-cart.svg";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function BasketButton() {
  const history = useHistory();
  const handleClick = () => history.push("/basket");

  const basket = useSelector((state) => state.basket);

  return (
    <button onClick={handleClick}>
      <img src={cartIcon} alt="cart" />
      {basket.length ? (
        <div className="basket-counter">{basket.length}</div>
      ) : null}
    </button>
  );
}

export default BasketButton;
