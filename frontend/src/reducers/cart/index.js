import {
  getListCart,
  addCartReducer,
  deleteCartReducer,
  getDetailCart,
  updateCartReducer,
} from "../../Axios/cartAxios";
const initialState = {
  getListCartResult: false,
  getListCartLoading: false,
  getListCartError: false,

  addCartResult: false,
  addCartLoading: false,
  addCartError: false,

  deleteCartResult: false,
  deleteCartLoading: false,
  deleteCartError: false,

  getDetailCart: false,

  updateCartResult: false,
  updateCartLoading: false,
  updateCartError: false,
};

const Cart = (state = initialState, action) => {
  switch (action.type) {
    case getListCart:
      return {
        ...state,
        getListCartResult: action.payload.data,
        getListCartLoading: action.payload.loading,
        getListCartError: action.payload.errorMessage,
      };
    case addCartReducer:
      console.log("4.Action");
      return {
        ...state,
        addCartResult: action.payload.data,
        addCartLoading: action.payload.loading,
        addCartError: action.payload.errorMessage,
      };
    case deleteCartReducer:
      return {
        ...state,
        deleteCartResult: action.payload.data,
        deleteCartLoading: action.payload.loading,
        deleteCartError: action.payload.errorMessage,
      };

    case getDetailCart:
      return {
        ...state,
        getDetailCart: action.payload.data,
      };

    case updateCartReducer:
      console.log("4.Action");
      return {
        ...state,
        updateCartResult: action.payload.data,
        updateCartLoading: action.payload.loading,
        updateCartError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default Cart;
