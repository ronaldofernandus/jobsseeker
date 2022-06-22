import axios from "axios";
export const getListOrder = "getListOrder";
export const addOrderReducer = "addOrderReducer";
export const deleteOrderReducer = "deleteOrderReducer";
export const getDetailOrder = "getDetailOrder";
export const updateOrderReducer = "updateOrderReducer";

export const getOrder = () => {
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "getListOrder",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: "http://localhost:4000/order",
      timeout: 120000,

      headers: {
        get_token: get_token,
      },
    })
      .then((response) => {
        dispatch({
          type: "getListOrder",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "getListOrder",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addOrder = (data) => {
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "addOrderReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "POST",
      url: "http://localhost:4000/order/add",
      timeout: 120000,
      data: data,

      headers: {
        get_token: get_token,
      },
    })
      .then((response) => {
        dispatch({
          type: "addOrderReducer",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "addOrderReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteOrder = (id) => {
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "deleteProductReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "DELETE",
      url: "http://localhost:4000/order/" + id,
      timeout: 120000,

      headers: {
        get_token: get_token,
      },
    })
      .then((response) => {
        console.log("3.Berhasi", response);
        dispatch({
          type: "deleteProductReducer",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "deleteProductReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailOrder = (data) => {
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "getDetailOrder",
      payload: {
        data: data,
        headers: {
          get_token: get_token,
        },
      },
    });
  };
};

export const updateOrder = (data) => {
  console.log("2.Masuk");
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "updateOrderReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "PUT",
      url: "http://localhost:4000/order/" + data.id,
      timeout: 120000,
      data: data,

      headers: {
        get_token: get_token,
      },
    })
      .then((response) => {
        console.log("3.Berhasil", response);
        dispatch({
          type: "updateOrderReducer",
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
          type: "updateOrderReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
