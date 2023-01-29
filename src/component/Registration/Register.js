import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import loginImg from "../../images/87718-waiting-register.gif";

const Register = () => {
  // use form
  const { register, handleSubmit, reset } = useForm();
  // history
  const navigate = useNavigate();
  // submit form
  const onSubmit = (data) => {
    if (data.password !== data.password1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password didn`t match!",
      });
      return;
    }
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    axios.post("http://localhost:5000/api/register", userData).then((res) => {
      if (res.data.status === "ok") {
        Swal.fire({
          icon: "success",
          title: "Congrats!!...",
          text: "Successfully Registered",
        });
        navigate("/login");
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
                <h2 className="text-center mb-4">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input type="text" {...register("name")} placeholder="Name" />
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
                  <input
                    type="password"
                    {...register("password1")}
                    placeholder="Re-type Password"
                  />
                  <Button variant="success" type="submit" value="Register">
                    Register
                  </Button>
                  <p className="text-center">
                    Already Register ? <Link to="/login">Please Login</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
