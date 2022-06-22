import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, addCart } from "../../Axios/cartAxios";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddCart = () => {
  const [shop_created_on, setShop_created_on] = useState("");
  const [shop_status, setShop_status] = useState("");

  const { addCartResult } = useSelector((state) => state.cartListReducers);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addHandler = (event) => {
    console.log("1. Mulai");
    dispatch(
      addCart({
        shop_created_on: shop_created_on,
        shop_status: shop_status,
      })
    );
    Swal.fire({
      icon: "success",
      title: "Add Cart Success!",
      text: `You've successfully created an post!`,
    });
    navigate("/cart");
  };

  useEffect(() => {
    if (addCartResult) {
      // console.log("5. Masukk Component did update");
      dispatch(getCart());
    }
  }, [addCartResult, dispatch]);

  return (
    <>
      <div className="row ">
        <div className="col-12 text-center">
          <h5>Tambah Data Cart</h5>
        </div>
        <div className="col-12 my-2">
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Tanggal
            </label>
            <input
              value={shop_created_on}
              onChange={(event) => setShop_created_on(event.target.value)}
              type="date"
              className="form-control"
              id="customFile"
              name="shop_created_on"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" for="customFile">
              Status
            </label>
            <input
              value={shop_status}
              onChange={(event) => setShop_status(event.target.value)}
              type="text"
              className="form-control"
              id="customFile"
              name="order_discount"
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

export default AddCart;
