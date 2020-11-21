import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./Products";
import Basket from "./Basket";

function Main() {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
