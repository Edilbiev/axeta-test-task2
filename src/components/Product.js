import { useDispatch, useSelector } from "react-redux";
import { addToBasket, deleteFromBasket } from "../redux/actions";
import { useHistory } from "react-router-dom";
import AdditionButton from "./AdditionButton";
import DeletionButton from "./DeletionButton";

function Product({ item }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const basket = useSelector((state) => state.basket);

  const isLocationBasket = history.location.pathname === "/basket";

  const isProductInBasket = basket.find(
    (basketItem) => item.id === basketItem.id
  );

  const handleAdd = () => dispatch(addToBasket(item.id));

  const handleDelete = () => dispatch(deleteFromBasket(item.id));

  return (
    <div className="product">
      <div className="product-image">
        <img src={item.image} alt="product" />
      </div>
      <div className="product-info">
        <div className="product-name">{item.name}</div>
        <div className="product-price">{item.price} ₽</div>
        {!isLocationBasket ? (
          <AdditionButton
            handleClick={handleAdd}
            isProductInBasket={isProductInBasket}
          />
        ) : (
          <DeletionButton handleClick={handleDelete} />
        )}
      </div>
    </div>
  );
}

export default Product;
