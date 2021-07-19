import * as types from "../types";
const INITIAL_STATE = {
  phones: [],
  cart: JSON.parse(localStorage.getItem("phones")) || [],
  isLoading: true,
  errorMessage: "",
  productDetail: null,
  sort: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.PRODUCT_PENDING:
      return { ...state, isLoading: true, errorMessage: "" };
    case types.PRODUCT_FULFILLED:
      return { ...state, phones: action.payload, isLoading: false };
    case types.PRODUCT_FAIL:
      return { ...state, errorMessage: action.payload, isLoading: false };
    case types.GET_DETAIL:
      return { ...state, productDetail: action.payload, isLoading: false };
    case types.ADD_TO_CART:
      const order = state.phones.find((phone) => phone.id === action.payload);
      return {
        ...state,
        cart: state.cart.find((item) => item.id === action.payload)
          ? state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, count: item.count + 1 }
                : item
            )
          : [...state.cart, { ...order, count: 1 }],
      };
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((phone) => phone.id !== action.payload),
      };
    case types.CHANGE_COUNT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: action.payload.e }
            : item
        ),
      };
    case types.SORTED_LIST:
      return {
        ...state,
        sort: action.payload === 2 ? true : action.payload === 1 ? false : null,
      };
    default:
      return state;
  }
};
