import Header from "./Header";
import Main from "./Main";
import { useEffect } from "react";
import { sendBasket } from "../api/api";
import { useSelector } from "react-redux";
import { SYNC_INTERVAL } from "../utils/configure";

function App() {
  const basket = useSelector((state) => state.basket);

  useEffect(() => {
    const interval = setInterval(() => {
      sendBasket(basket);
    }, SYNC_INTERVAL);

    return () => clearInterval(interval);
  }, [basket]);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
