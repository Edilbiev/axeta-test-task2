import React from "react";

function DeletionButton({ handleClick }) {
  return (
    <button className="button deletion-button" onClick={handleClick}>
      Удалить из корзины
    </button>
  );
}

export default DeletionButton;
