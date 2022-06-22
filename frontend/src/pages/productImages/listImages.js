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

import { deleteImage, detailImage, getImage } from "../../Axios/imageAxios";
const ListProduct = () => {
  const {
    getListImageResult,
    getListImageLoading,
    getListImageError,
    deleteImageReducer,
  } = useSelector((state) => state.imageReducers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getImage());
  }, [dispatch]);

  const deleteHandler = (id) => {
    // console.log("1. Mulai");
    dispatch(deleteImage(id));
    Swal.fire({
      icon: "success",
      title: "Delete Success!",
      text: `You've successfully Delete an post!`,
    });
    navigate("/image");
  };

  useEffect(() => {
    if (deleteImageReducer) {
      // console.log("5. Masukk Component did update");
      dispatch(getImage());
    }
  }, [deleteImageReducer, dispatch]);

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
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {console.log(getListImageResult)}
                {getListImageResult ? (
                  getListImageResult.map((image, index) => {
                    // console.log(image);
                    return (
                      <>
                        <tr key={image.id}>
                          <td scope="row">{index + 1}</td>
                          {/* <td>Nama produk nya</td> */}
                          <td>{image.prod_name}</td>
                          {/* <td>{image.product.prod_brand}</td> */}
                          {/* <td>
                            {image ? image : "https://via.placeholder.com/150"}
                          </td> */}

                          <td>
                            <img
                              src={`http://localhost:4000/images/${image.product_images[0].prim_filename}`}
                              alt=""
                            />
                          </td>

                          <td>
                            <button
                              onClick={() => dispatch(detailImage(image))}
                              type="button"
                              className="btn btn-success"
                            >
                              <AiFillEdit></AiFillEdit>
                              <Link
                                to={`/product/edit/${image.id}`}
                                className="edit"
                              >
                                Edit
                              </Link>
                            </button>
                            <button
                              href="/productImage"
                              onClick={() => deleteHandler(image.id)}
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
                ) : getListImageLoading ? (
                  <p>Loading...</p>
                ) : (
                  <p>{getListImageError ? getListImageError : "Data Kosong"}</p>
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
