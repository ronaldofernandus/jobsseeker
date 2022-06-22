import {
  getListImage,
  addImageReducer,
  deleteImageReducer,
  getDetailImage,
  updateImageReducer,
} from "../../Axios/imageAxios";
const initialState = {
  getListImageResult: false,
  getListImageLoading: false,
  getListImageError: false,

  addImageResult: false,
  addImageLoading: false,
  addImageError: false,

  deleteImageResult: false,
  deleteImageLoading: false,
  deleteImageError: false,

  getDetailImage: false,

  updateImageResult: false,
  updateImageLoading: false,
  updateImageError: false,
};

const Image = (state = initialState, action) => {
  switch (action.type) {
    case getListImage:
      return {
        ...state,
        getListImageResult: action.payload.data,
        getListImageLoading: action.payload.loading,
        getListImageError: action.payload.errorMessage,
      };
    case addImageReducer:
      console.log("4.Action");
      return {
        ...state,
        addImageResult: action.payload.data,
        addImageLoading: action.payload.loading,
        addImageError: action.payload.errorMessage,
      };
    case deleteImageReducer:
      return {
        ...state,
        deleteImageResult: action.payload.data,
        deleteImageLoading: action.payload.loading,
        deleteImageError: action.payload.errorMessage,
      };

    case getDetailImage:
      return {
        ...state,
        getDetailImage: action.payload.data,
      };

    case updateImageReducer:
      return {
        ...state,
        updateImageResult: action.payload.data,
        updateImageLoading: action.payload.loading,
        updateImageError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default Image;
