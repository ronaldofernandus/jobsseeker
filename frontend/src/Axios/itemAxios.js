import axios from "axios";
export const getListItem = "getListItem";
export const addItemReducer = "addItemReducer";
export const deleteItemReducer = "deleteItemReducer";
export const getDetailItem = "getDetailItem";
export const updateItemReducer = "updateItemReducer";

export const getItem = () => {
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "getListItem",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: "http://localhost:4000/line",
      timeout: 120000,

      headers: {
        get_token: get_token,
      },
    })
      .then((response) => {
        dispatch({
          type: "getListItem",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "getListItem",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addItem = (data) => {
  console.log("2 Masuk");
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "addItemReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "POST",
      url: "http://localhost:4000/line/add",
      timeout: 120000,
      data: data,

      headers: {
        get_token: get_token,
      },
    })
      .then((response) => {
        console.log("3.Berhasil", response);
        dispatch({
          type: "addItemReducer",
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
          type: "addItemReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteItem = (id) => {
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "deleteItemReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "DELETE",
      url: "http://localhost:4000/line/" + id,
      timeout: 120000,

      headers: {
        get_token: get_token,
      },
    })
      .then((response) => {
        console.log("3.Berhasi", response);
        dispatch({
          type: "deleteItemReducer",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "deleteItemReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailItem = (data) => {
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "getDetailItem",
      payload: {
        data: data,
        headers: {
          get_token: get_token,
        },
      },
    });
  };
};

export const updateItem = (data) => {
  console.log("2.Masuk");
  const get_token = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "updateItemReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "PUT",
      url: "http://localhost:4000/line/" + data.id,
      timeout: 120000,
      data: data,

      headers: {
        get_token: get_token,
      },
    })
      .then((response) => {
        console.log("3.Berhasil", response);
        dispatch({
          type: "updateItemReducer",
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
          type: "updateItemReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
