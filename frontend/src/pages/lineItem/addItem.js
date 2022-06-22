import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItem, addItem } from "../../Axios/itemAxios";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../../Axios/productAxios";
import { getCart } from "../../Axios/cartAxios";

import { getOrder } from "../../Axios/orderAxios";

const AddOrder = () => {
  const [line_qty, setLine_qty] = useState("");
  const [line_status, setLine_status] = useState("");
  const [productId, setProductId] = useState("");
  const [shoppingCartId, setShoppingCartId] = useState("");
  const [orderId, setOrderId] = useState("");

  const { addItemResult } = useSelector((state) => state.itemReducers);
  const { getListProductResult, getListProductLoading, getListProductError } =
    useSelector((state) => state.productReducers);

  const { getListCartResult, getListCartLoading, getListCartError } =
    useSelector((state) => state.cartListReducers);

  const { getListOrderResult, getListOrderLoading, getListOrderError } =
    useSelector((state) => state.orderReducers);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addHandler = (event) => {
    console.log("1. Mulai");
    dispatch(
      addItem({
        line_qty: line_qty,
        line_status: line_status,
        productId: productId,
        shoppingCartId: shoppingCartId,
        orderId: orderId,
      })
    );
    Swal.fire({
      icon: "success",
      title: "Add Item Success!",
      text: `You've successfully created an post!`,
    });
    navigate("/lineItem");
  };

  useEffect(() => {
    if (addItemResult) {
      // console.log("5. Masukk Component did update");
      dispatch(getItem());
    }
  }, [addItemResult, dispatch]);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  return (
    <>
      <div className="row ">
        <div className="col-12 text-center">
          <h5>Tambah Data Item</h5>
        </div>
        <div className="col-12 my-2">
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Total Quantity
            </label>
            <input
              value={line_qty}
              onChange={(event) => setLine_qty(event.target.value)}
              type="number"
              className="form-control"
              id="customFile"
              name="order_subtotal"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Line Status
            </label>
            <input
              value={line_status}
              onChange={(event) => setLine_status(event.target.value)}
              type="text"
              className="form-control"
              id="customFile"
              name="order_discount"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Produk yang di pesan
            </label>
            <select
              value={productId}
              onChange={(event) => setProductId(event.target.value)}
              type="number"
              className="form-select"
              id="customFile"
              name="productId"
              aria-label="Default select example"
            >
              <option selected>Product yang di pesan adalah</option>
              {getListProductResult ? (
                getListProductResult.map((product) => {
                  return (
                    <option value={product.id}>{product.prod_name}</option>
                  );
                })
              ) : getListProductLoading ? (
                <p>Loading...</p>
              ) : (
                <p>
                  {getListProductError ? getListProductError : "Data Kosong"}
                </p>
              )}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Shop Cart
            </label>
            <select
              value={shoppingCartId}
              onChange={(event) => setShoppingCartId(event.target.value)}
              type="number"
              className="form-select"
              id="customFile"
              name="shoppingCartId"
              aria-label="Default select example"
            >
              <option selected>Silahkan pilih Cart</option>
              {getListCartResult ? (
                getListCartResult.map((cart) => {
                  return <option value={cart.id}>{cart.shop_status}</option>;
                })
              ) : getListCartLoading ? (
                <p>Loading...</p>
              ) : (
                <p>{getListCartError ? getListCartError : "Data Kosong"}</p>
              )}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Order yang masuk
            </label>
            <select
              value={orderId}
              onChange={(event) => setOrderId(event.target.value)}
              type="number"
              className="form-select"
              id="customFile"
              name="orderId"
              aria-label="Default select example"
            >
              <option selected>Silahkan pilih Order</option>
              {getListOrderResult ? (
                getListOrderResult.map((order) => {
                  return (
                    <option value={order.id}>{order.order_subtotal}</option>
                  );
                })
              ) : getListOrderLoading ? (
                <p>Loadin</p>
              ) : (
                <p>{getListOrderError ? getListOrderError : "Data Kosong"}</p>
              )}
            </select>
          </div>

          <button
            onClick={() => addHandler()}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddOrder;
