import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "./tabel.css";

import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { deleteOrder, detailOrder, getOrder } from "../../Axios/orderAxios";

const OrderList = () => {
  const {
    getListOrderResult,
    getListOrderLoading,
    getListOrderError,
    deleteOrderReducer,
  } = useSelector((state) => state.orderReducers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  const deleteHandler = (id) => {
    // console.log("1. Mulai");
    dispatch(deleteOrder(id));
    Swal.fire({
      icon: "success",
      title: "Delete Success!",
      text: `You've successfully Delete an post!`,
    });
    navigate("/order");
  };

  useEffect(() => {
    if (deleteOrderReducer) {
      // console.log("5. Masukk Component did update");
      dispatch(getOrder());
    }
  }, [deleteOrderReducer, dispatch]);
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-wrap">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Tanggal Order Masuk</th>
                <th>Sub Total</th>
                <th>Diskon</th>
                <th>Tax</th>
                <th>Total Due</th>
                <th>Total Quantity</th>
                <th>Payment Transaction Number</th>
                <th>Asal Kota</th>
                <th>Alamat</th>
                <th>Status Pesanan</th>
              </tr>
            </thead>
            <tbody>
              {getListOrderResult ? (
                getListOrderResult.map((order, index) => {
                  return (
                    <>
                      <tr key={order.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{order.order_created_on}</td>
                        <td>{order.order_subtotal}</td>
                        <td>{order.order_discount}</td>
                        <td>{order.order_tax}</td>
                        <td>{order.order_total_due}</td>
                        <td>{order.order_total_qty}</td>
                        <td>{order.order_payt_trx_number}</td>
                        <td>{order.order_city}</td>
                        <td>{order.order_addres}</td>
                        <td>{order.order_status}</td>
                        <td>
                          <button
                            onClick={() => dispatch(detailOrder(order))}
                            type="button"
                            className="btn btn-success"
                          >
                            <AiFillEdit></AiFillEdit>
                            <Link
                              to={`/order/edit/${order.id}`}
                              className="edit"
                            >
                              Edit
                            </Link>
                          </button>
                        </td>
                        <td>
                          <button
                            href="/Order"
                            onClick={() => deleteHandler(order.id)}
                            type="button"
                            className="btn btn-success"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })
              ) : getListOrderLoading ? (
                <p>Loading...</p>
              ) : (
                <p>{getListOrderError ? getListOrderError : "Data Kosong"}</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
