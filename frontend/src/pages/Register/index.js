import React, { useState, useEffect } from "react";
import register from "../../assets/images/register.jpg";
import { Button, Gap, Input } from "../../components/addOns";
import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
    user_salt: "",
    user_birthdate: "",
    user_gender: "",
    // user_avatar: "",
    user_type: "",
  });

  const registrasiUser = async () => {
    try {
      let registrasiUser = await axios({
        method: "POST",
        url: "http://localhost:3000/user/register",
        data: input,
      });
      Swal.fire({
        icon: "success",
        title: "Register Success!",
        text: `You've successfully register an account!`,
      });
      navigate("/");

      console.log(registrasiUser.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const registrasiHandler = () => {
    registrasiUser();
    // navigate("/login");
  };
  return (
    <div className="main-page">
      <div className="left">
        <img src={register} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title"> Register</p>

        <Input
          type="text"
          onChange={(e) => setInput({ ...input, user_name: e.target.value })}
          placeholder="Nama pengguna"
          name=""
          className="form-control"
        />
        <Input
          type="email"
          onChange={(e) => setInput({ ...input, user_email: e.target.value })}
          placeholder="Email"
          name="user_email"
          className="form-control"
        />
        <Input
          type="password"
          onChange={(e) =>
            setInput({ ...input, user_password: e.target.value })
          }
          placeholder="Password"
          name="user_password"
          className="form-control"
        />

        <Input
          type="text"
          onChange={(e) => setInput({ ...input, user_salt: e.target.value })}
          placeholder="Salt"
          name="user_salt"
          className="form-control"
        />

        <Input
          type="date"
          onChange={(e) =>
            setInput({ ...input, user_birthdate: e.target.value })
          }
          placeholder="Tanggal/Bulan/Tahun"
          name="user_birthdate"
          className="form-control"
        />

        <Input
          type="text"
          onChange={(e) => setInput({ ...input, user_gender: e.target.value })}
          placeholder="Gender"
          name="user_gender"
          className="form-control"
        />

        <Input
          type="text"
          onChange={(e) => setInput({ ...input, user_type: e.target.value })}
          placeholder="Role/Type"
          name="user_type"
          className="form-control"
        />

        <Button title="Register" onClick={() => registrasiHandler()} />
        <Gap height={100} />
        <div className="w-100 text-center mt-4 text">
          <p className="mb-0">Do have an account?</p>
          <Link
            style={{
              color: "red",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            to="/"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
