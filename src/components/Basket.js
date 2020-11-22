import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

function Basket() {
  const basket = useSelector((state) => state.basket);

  if (basket.length === 0) {
    return <div className="empty-basket">В вашей корзине пока ничего нет</div>;
  }

  return basket.map((item) => <Product item={item} key={item.id} />);
}

export default Basket;
