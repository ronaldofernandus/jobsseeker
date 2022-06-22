import React, { useState, useEffect } from "react";
import "./libraries/bootstrap/css/bootstrap.css";
import "./styles/main.css";
import { detail1 } from "./image";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";





import {
  deleteProduct,
  detailProduct,
  getProduct,
} from "../../Axios/productAxios";
const Home = () => {
  const dispatch = useDispatch();
  const {
    getListProductResult,
    getListProductLoading,
    getListProductError,
    deleteProductReducer,
  } = useSelector((state) => state.productReducers);
  const {
    getListProductByIdResult,
    getListProductByIdLoading,
    getListProductByIdError,
  } = useSelector((state) => state.productReducers);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <section className="section-details-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 pl-lg-0">
            {getListProductResult ? (
              getListProductResult.map((product, index) => {
                return (
                  <>
                    <div className="card card-details">
                      <h1>{product.prod_name}</h1>
                      <p>{product.prod_price}</p>
                      <div className="gallery">
                        <div className="xzoom-container">
                          <img
                            src={`http://localhost:4000/images/${product.product_images[0].prim_filename}`}
                            alt=""
                            className="xzoom"
                            xoriginal={`http://localhost:4000/images/${product.product_images[0].prim_filename}`}
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>

                        <div className="xzoom-thumbs">
                          {product.product_images.map((imgResult) => {
                            return (
                              <>
                                <Link
                                  to={`http://localhost:4000/images/${imgResult.prim_filename}`}
                                >
                                  <img
                                    src={`http://localhost:4000/images/${imgResult.prim_filename}`}
                                    alt=""
                                    className="xzoom-gallery"
                                    style={{ width: "128" }}
                                    xpreview={`http://localhost:4000/images/${imgResult.prim_filename}`}
                                  />
                                </Link>
                              </>
                            );
                          })}
                        </div>
                      </div>
                      <h2>Deskripsi</h2>
                      <p>{product.prod_desc}</p>
                      <div className="features row">
                        <div className="col-md-4 border-left">
                          <div className="description">
                            <h3>Stok Barang</h3>
                            <p>{product.prod_stock}</p>
                          </div>
                        </div>

                        <div className="col-md-4 border-left">
                          <div className="description">
                            <h3>Kategori</h3>
                            <p>{product.prod_category}</p>
                          </div>
                        </div>
                        <div className="col-md-4 border-left">
                          <div className="description">
                            <h3>Kondisi Barang</h3>
                            <p>{product.prod_condition}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : getListProductLoading ? (
              <p>Loading...</p>
            ) : (
              <p>{getListProductError ? getListProductError : "Data Kosong"}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
