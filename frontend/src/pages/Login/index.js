import React, { useState, useEffect } from "react";
import "./css/sb-admin-2.css";
import "./css/sb-admin-2.min.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./img";
// import { loginUser } from "../../Axios/userAxios";
import axios from "axios";

const Login = (props) => {
  const navigate = useNavigate;
  const { loginCbHandler } = props;
  const [form, setForm] = useState({
    user_email: "",
    user_password: "",
  });

  const loginUser = async () => {
    try {
      let login = await axios({
        method: "POST",
        url: "http://localhost:4000/user/login",
        data: form,
      });
      const get_token = login.data.get_token;
      localStorage.setItem("get_token", get_token);
      loginCbHandler(true);
      navigate("/home");
      // console.log(login.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loginButton = () => {
    // console.log(form);
    loginUser();
  };

  return (
    <div className="loginPage">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block">
                  <img src={login} alt="" />
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>

                    <div className="form-group">
                      <input
                        onChange={(e) =>
                          setForm({ ...form, user_email: e.target.value })
                        }
                        type="email"
                        className="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                      />
                    </div>
                    <div className="form-group">
                      <input
                        onChange={(e) =>
                          setForm({ ...form, user_password: e.target.value })
                        }
                        type="password"
                        className="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox small">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck"
                        />
                        <label
                          className="custom-control-label"
                          for="customCheck"
                        >
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <button
                      onClick={() => loginButton()}
                      className="btn btn-primary btn-user btn-block"
                    >
                      Login
                    </button>
                    <hr />
                    <button
                      to="index.html"
                      className="btn btn-google btn-user btn-block"
                    >
                      <i className="fab fa-google fa-fw"></i> Login with Google
                    </button>
                    <Link
                      to="index.html"
                      className="btn btn-facebook btn-user btn-block"
                    >
                      <i className="fab fa-facebook-f fa-fw"></i> Login with
                      Facebook
                    </Link>

                    <hr />
                    <div className="text-center">
                      <Link className="small" to="forgot-password.html">
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to="/register">
                        Create an Account!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
