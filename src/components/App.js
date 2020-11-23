import Header from "./Header";
import Main from "./Main";
import { useEffect } from "react";
import { sendBasket } from "../api/api";
import {useDispatch, useSelector} from "react-redux";
import { SYNC_INTERVAL } from "../utils/configure";
import {loadProducts} from "../redux/actions";

function App() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  useEffect(() => {
    const interval = setInterval(() => {
      sendBasket(basket);
    }, SYNC_INTERVAL);

    return () => clearInterval(interval);
  }, [basket]);

  useEffect(() => dispatch(loadProducts()), [dispatch])

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
