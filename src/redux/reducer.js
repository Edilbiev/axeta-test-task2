export default function reducer(state = {}, action) {
  switch (action.type) {
    case "load":
      return {
        ...state,
        products: action.payload
      }

    case "add":
      return {
        ...state,
        basket: [...state.basket, state.products.find((product) => product.id === action.payload)]
      };

    case "delete":
      return {
        ...state,
        basket: state.basket.filter((product) => product.id !== action.payload),
      };

    default:
      return state;
  }
}
