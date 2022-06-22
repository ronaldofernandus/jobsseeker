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

import { deleteCart, detailCart, getCart } from "../../Axios/cartAxios";

const CartList = () => {
  const {
    getListCartResult,
    getListCartLoading,
    getListCartError,
    deleteCartReducer,
  } = useSelector((state) => state.cartListReducers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const deleteHandler = (id) => {
    // console.log("1. Mulai");
    dispatch(deleteCart(id));
    Swal.fire({
      icon: "success",
      title: "Delete Success!",
      text: `You've successfully Delete an post!`,
    });
    navigate("/cart");
  };

  useEffect(() => {
    if (deleteCartReducer) {
      // console.log("5. Masukk Component did update");
      dispatch(getCart());
    }
  }, [deleteCartReducer, dispatch]);
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-wrap">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Tanggal Di buat</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {getListCartResult ? (
                getListCartResult.map((cart, index) => {
                  return (
                    <>
                      <tr key={cart.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{cart.shop_created_on}</td>
                        <td>{cart.shop_status}</td>
                        <td>
                          <button
                            onClick={() => dispatch(detailCart(cart))}
                            type="button"
                            className="btn btn-success"
                          >
                            <AiFillEdit></AiFillEdit>
                            <Link to={`/cart/edit/${cart.id}`} className="edit">
                              Edit
                            </Link>
                          </button>
                        </td>
                        <td>
                          <button
                            href="/cart"
                            onClick={() => deleteHandler(cart.id)}
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
              ) : getListCartLoading ? (
                <p>Loading...</p>
              ) : (
                <p>{getListCartError ? getListCartError : "Data Kosong"}</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartList;
