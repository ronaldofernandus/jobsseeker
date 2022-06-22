import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder, addOrder } from "../../Axios/orderAxios";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddOrder = () => {
  const [order_subtotal, setOrder_subtotal] = useState("");
  const [order_discount, setOrder_discount] = useState("");
  const [order_tax, setOrder_tax] = useState("");
  const [order_total_due, setOrder_total_due] = useState("");
  const [order_total_qty, setOrder_total_qty] = useState("");
  const [order_city, setOrder_city] = useState("");
  const [order_addres, setOrder_addres] = useState("");
  const [order_status, setOrder_status] = useState("");

  const { addOrderResult } = useSelector((state) => state.orderReducers);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addHandler = (event) => {
    console.log("1. Mulai");
    dispatch(
      addOrder({
        order_subtotal: order_subtotal,
        order_discount: order_discount,
        order_tax: order_tax,
        order_total_due: order_total_due,
        order_total_qty: order_total_qty,
        order_city: order_city,
        order_addres: order_addres,
        order_status: order_status,
      })
    );
    Swal.fire({
      icon: "success",
      title: "Add Order Success!",
      text: `You've successfully created an post!`,
    });
    navigate("/order");
  };

  useEffect(() => {
    if (addOrderResult) {
      // console.log("5. Masukk Component did update");
      dispatch(getOrder());
    }
  }, [addOrderResult, dispatch]);

  return (
    <>
      <div className="row ">
        <div className="col-12 text-center">
          <h5>Tambah Data Order</h5>
        </div>
        <div className="col-12 my-2">
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Total Sub Total
            </label>
            <input
              value={order_subtotal}
              onChange={(event) => setOrder_subtotal(event.target.value)}
              type="number"
              className="form-control"
              id="customFile"
              name="order_subtotal"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Diskon Barang
            </label>
            <input
              value={order_discount}
              onChange={(event) => setOrder_discount(event.target.value)}
              type="number"
              className="form-control"
              id="customFile"
              name="order_discount"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Pajak
            </label>
            <input
              value={order_tax}
              onChange={(event) => setOrder_tax(event.target.value)}
              type="number"
              className="form-control"
              id="customFile"
              name="order_tax"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Total Due
            </label>
            <input
              value={order_total_due}
              onChange={(event) => setOrder_total_due(event.target.value)}
              type="number"
              className="form-control"
              id="customFile"
              name="order_total_due"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Quantity
            </label>
            <input
              value={order_total_qty}
              onChange={(event) => setOrder_total_qty(event.target.value)}
              type="number"
              className="form-control"
              id="customFile"
              name="order_expire"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Asal Kota
            </label>
            <input
              value={order_city}
              onChange={(event) => setOrder_city(event.target.value)}
              type="text"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Alamat
            </label>
            <input
              value={order_addres}
              onChange={(event) => setOrder_addres(event.target.value)}
              type="text"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Status Order
            </label>
            <input
              value={order_status}
              onChange={(event) => setOrder_status(event.target.value)}
              type="text"
              className="form-control"
              id="customFile"
              name="hariTayang"
            />
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
