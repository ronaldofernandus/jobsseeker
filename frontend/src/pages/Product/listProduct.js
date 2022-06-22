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

import {
  deleteProduct,
  detailProduct,
  getProduct,
} from "../../Axios/productAxios";

const ListProduct = () => {
  const {
    getListProductResult,
    getListProductLoading,
    getListProductError,
    deleteProductReducer,
  } = useSelector((state) => state.productReducers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const deleteHandler = (id) => {
    // console.log("1. Mulai");
    dispatch(deleteProduct(id));
    Swal.fire({
      icon: "success",
      title: "Delete Success!",
      text: `You've successfully Delete an post!`,
    });
    navigate("/product");
  };

  useEffect(() => {
    if (deleteProductReducer) {
      // console.log("5. Masukk Component did update");
      dispatch(getProduct());
    }
  }, [deleteProductReducer, dispatch]);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="table-wrap">
            <table className="table table-striped table-rensponsive">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Produk</th>
                  <th>Deskripsi</th>
                  <th>Harga</th>
                  <th>Stok Barang</th>
                  <th>Expire</th>
                  <th>Berat Barang</th>
                  <th>Kategori</th>
                  <th>Brand</th>
                  <th>Kondisi</th>
                  <th>Total Terjual</th>
                  <th>Rating</th>
                  <th>View</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {getListProductResult ? (
                  getListProductResult.map((product, index) => {
                    return (
                      <>
                        <tr key={product.id}>
                          <th scope="row">{index + 1}</th>
                          <td>{product.prod_name}</td>
                          <td>{product.prod_desc}</td>
                          <td>{product.prod_price}</td>
                          <td>{product.prod_stock}</td>
                          <td>{product.prod_expire}</td>
                          <td>{product.prod_weight}</td>
                          <td>{product.prod_category}</td>
                          <td>{product.prod_brand}</td>
                          <td>{product.prod_condition}</td>
                          <td>{product.prod_total_sold}</td>
                          <td>{product.prod_rating}</td>
                          <td>{product.prod_views}</td>
                          <td>
                            <button
                              onClick={() => dispatch(detailProduct(product))}
                              type="button"
                              className="btn btn-success"
                            >
                              <AiFillEdit></AiFillEdit>
                              <Link
                                to={`/product/edit/${product.id}`}
                                className="edit"
                              >
                                Edit
                              </Link>
                            </button>
                          </td>
                          <td>
                            <button
                              href="/product"
                              onClick={() => deleteHandler(product.id)}
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
                ) : getListProductLoading ? (
                  <p>Loading...</p>
                ) : (
                  <p>
                    {getListProductError ? getListProductError : "Data Kosong"}
                  </p>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
