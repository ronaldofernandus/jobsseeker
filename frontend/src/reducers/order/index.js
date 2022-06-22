import {
  getListOrder,
  addOrderReducer,
  deleteOrderReducer,
  getDetailOrder,
  updateOrderReducer,
} from "../../Axios/orderAxios";
const initialState = {
  getListOrderResult: false,
  getListOrderLoading: false,
  getListOrderError: false,

  addOrderResult: false,
  addOrderLoading: false,
  addOrderError: false,

  deleteOrderResult: false,
  deleteOrderLoading: false,
  deleteOrderError: false,

  getDetailOrder: false,

  updateOrderResult: false,
  updateOrderLoading: false,
  updateOrderError: false,
};

const Order = (state = initialState, action) => {
  switch (action.type) {
    case getListOrder:
      return {
        ...state,
        getListOrderResult: action.payload.data,
        getListOrderLoading: action.payload.loading,
        getListOrderError: action.payload.errorMessage,
      };
    case addOrderReducer:
      return {
        ...state,
        addOrderResult: action.payload.data,
        addOrderLoading: action.payload.loading,
        addOrderError: action.payload.errorMessage,
      };
    case deleteOrderReducer:
      return {
        ...state,
        deleteOrderResult: action.payload.data,
        deleteOrderLoading: action.payload.loading,
        deleteOrderError: action.payload.errorMessage,
      };

    case getDetailOrder:
      return {
        ...state,
        getDetailOrder: action.payload.data,
      };

    case updateOrderReducer:
      console.log("4.Action");
      return {
        ...state,
        updateOrderResult: action.payload.data,
        updateOrderLoading: action.payload.loading,
        updateOrderError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default Order;
