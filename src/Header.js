import React from "react";
import BasketButton from "./BasketButton";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const handleClick = () => history.push("/");

  return (
    <header className="header">
      <nav className="nav">
        <button className="home-button" onClick={handleClick}>
          Shop
        </button>
        <BasketButton />
      </nav>
    </header>
  );
}

export default Header;
