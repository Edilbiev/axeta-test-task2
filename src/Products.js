import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

function Products() {
  const products = useSelector((state) => state.products);

  return products.map((item) => <Product item={item} key={item.id} />);
}

export default Products;
