import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import { sendBasket } from "../api/api";

function Basket() {
  const basket = useSelector((state) => state.basket);

  useEffect(() => sendBasket(basket), [basket]);

  if (basket.length === 0) {
    return <div className="empty-basket">В вашей корзине пока ничего нет</div>;
  }

  return basket.map((item) => <Product item={item} key={item.id} />);
}

export default Basket;
