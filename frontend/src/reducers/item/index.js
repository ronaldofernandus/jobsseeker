import {
  getListItem,
  addItemReducer,
  deleteItemReducer,
  getDetailItem,
  updateItemReducer,
} from "../../Axios/itemAxios";
const initialState = {
  getListItemResult: false,
  getListItemLoading: false,
  getListItemError: false,

  addItemResult: false,
  addItemLoading: false,
  addItemError: false,

  deleteItemResult: false,
  deleteItemLoading: false,
  deleteItemError: false,

  getDetailItem: false,

  updateItemResult: false,
  updateItemLoading: false,
  updateItemError: false,
};

const Item = (state = initialState, action) => {
  switch (action.type) {
    case getListItem:
      return {
        ...state,
        getListItemResult: action.payload.data,
        getListItemLoading: action.payload.loading,
        getListItemError: action.payload.errorMessage,
      };
    case addItemReducer:
      return {
        ...state,
        addItemResult: action.payload.data,
        addItemLoading: action.payload.loading,
        addItemError: action.payload.errorMessage,
      };
    case deleteItemReducer:
      return {
        ...state,
        deleteItemResult: action.payload.data,
        deleteItemLoading: action.payload.loading,
        deleteItemError: action.payload.errorMessage,
      };

    case getDetailItem:
      return {
        ...state,
        getDetailItem: action.payload.data,
      };

    case updateItemReducer:
      console.log("4.Action");
      return {
        ...state,
        updateItemResult: action.payload.data,
        updateItemLoading: action.payload.loading,
        updateItemError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default Item;
