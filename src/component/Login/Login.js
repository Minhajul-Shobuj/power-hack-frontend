import React from "react";
import loginImg from "../../images/38435-register.gif";
import { useForm } from "react-hook-form";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  // use form
  const { register, handleSubmit, reset } = useForm();
  // history
  const navigate = useNavigate();
  // submit
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/api/login", data).then((res) => {
      if (res.data.status === "Login Successfull") {
        Swal.fire({
          icon: "success",
          title: "Congrats!!...",
          text: res.data.status,
        });
        localStorage.setItem("token", res.data.token);
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Sorry..!!",
          text: res.data.status,
        });
      }
    });
    reset();
  };

  return (
    <>
      <div className="login">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="login_img">
                <img src={loginImg} alt="" />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <div className="form_container">
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    {...register("password")}
                    placeholder="Password"
                  />
                  <Button type="submit" value="Login">
                    Login
                  </Button>
                </form>
                <p className="text-center">
                  New User ? <Link to="/register">Please Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
