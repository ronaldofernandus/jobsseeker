import axios from "axios";
export const getListCart = "getListCart";
export const addCartReducer = "addCartReducer";
export const deleteCartReducer = "deleteCartReducer";
export const getDetailCart = "getDetailCart";
export const updateCartReducer = "updateCartReducer";

export const getCart = () => {
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "getListCart",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: "http://localhost:4000/shop",
      timeout: 120000,

      headers: {
        get_token: get_token,
      },
    })
      .then((response) => {
        dispatch({
          type: "getListCart",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "getListCart",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addCart = (data) => {
  console.log("2 Masuk");
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "addCartReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "POST",
      url: "http://localhost:4000/shop/add",
      timeout: 120000,
      data: data,

      headers: {
        get_token: get_token,
      },
    })
      .then((response) => {
        console.log("3.Berhasil", response);
        dispatch({
          type: "addCartReducer",
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
          type: "addCartReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteCart = (id) => {
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "deleteCartReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "DELETE",
      url: "http://localhost:4000/shop/" + id,
      timeout: 120000,

      headers: {
        get_token: get_token,
      },
    })
      .then((response) => {
        console.log("3.Berhasi", response);
        dispatch({
          type: "deleteCartReducer",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "deleteCartReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailCart = (data) => {
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "getDetailCart",
      payload: {
        data: data,
        headers: {
          get_token: get_token,
        },
      },
    });
  };
};

export const updateCart = (data) => {
  console.log("2.Masuk");
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "updateCartReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "PUT",
      url: "http://localhost:4000/shop/" + data.id,
      timeout: 120000,
      data: data,

      headers: {
        get_token: get_token,
      },
    })
      .then((response) => {
        console.log("3.Berhasil", response);
        dispatch({
          type: "updateCartReducer",
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
          type: "updateCartReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
