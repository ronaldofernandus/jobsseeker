import axios from "axios";
export const getListImage = "getListImage";
export const addImageReducer = "addImageReducer";
export const deleteImageReducer = "deleteImageReducer";
export const getDetailImage = "getDetailImage";
export const updateImageReducer = "updateImageReducer";

export const getImage = () => {
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "getListImage",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: "http://localhost:4000/images",
      timeout: 120000,

      headers: {
        get_token: get_token,
      },
    })
      .then((response) => {
        dispatch({
          type: "getListImage",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "getListImage",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addImage = (data) => {
  console.log("2.Masuk");
  // const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "addImageReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "POST",
      url: "http://localhost:4000/images/add",
      timeout: 120000,
      data: data,
      // headers: {
      //   get_token: get_token,
      // },
    })
      .then((response) => {
        console.log("3.Berhasil", response);
        dispatch({
          type: "addImageReducer",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3. Gagal", error);
        dispatch({
          type: "addImageReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteImage = (id) => {
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "deleteImageReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "DELETE",
      url: "http://localhost:4000/images/" + id,
      timeout: 120000,

      headers: {
        get_token: get_token,
      },
    })
      .then((response) => {
        console.log("3.Berhasi", response);
        dispatch({
          type: "deleteImageReducer",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "deleteImageReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailImage = (data) => {
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "getDetailImage",
      payload: {
        data: data,
        headers: {
          get_token: get_token,
        },
      },
    });
  };
};

export const updateImage = (data) => {
  console.log("2.Masuk");
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "updateImageReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "PUT",
      url: "http://localhost:4000/images/" + data.id,
      timeout: 120000,
      data: data,

      headers: {
        get_token: get_token,
      },
    })
      .then((response) => {
        console.log("3.Berhasil", response);
        dispatch({
          type: "updateImageReducer",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3. Gagal", error);
        dispatch({
          type: "updateImageReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
