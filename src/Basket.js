import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { sendBasket } from "./api/api";

function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  setInterval(() => dispatch(sendBasket(basket), 3000));

  if (basket.length === 0) {
    return <div className="empty-basket">В вашей корзине пока ничего нет</div>;
  }

  return basket.map((item) => <Product item={item} key={item.id} />);
}

export default Basket;
