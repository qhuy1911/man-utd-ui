/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import AuthService from "../services/AuthService";
import "./Auth.css";

function Login() {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      navigate("/");
    }
  }, []);

  const handleLogin = (data) => {
    AuthService.login(data.username, data.password).then(
      () => {
        navigate("/admin");
        window.location.reload();
      },
      () => {
        // const resMessage =
        //   (error.response &&
        //     error.response.data &&
        //     error.response.data.message) ||
        //   error.message ||
        //   error.toString();
        setMessage("Invalid username or password");
      }
    );
  };

  return (
    <div className="login-container">
      <div className="login-heading">
        <h1>Login</h1>
        <p>
          Not registered yet? <Link to={"/register"}>Create an account</Link>
        </p>
      </div>
      <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
        <div className="login-input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            {...register("username", {
              required: "Username is required",
              minLength: { value: 6, message: "Min length is 6 characters" },
            })}
          />
          {errors.username && (
            <span className="validation-message">
              {errors.username.message}
            </span>
          )}
        </div>
        <div className="login-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="validation-message">
              {errors.password.message}
            </span>
          )}
        </div>
        {message && (
          <div className="login-input">
            <div className="error-message" role="alert">
              {message}
            </div>
          </div>
        )}
        <input type="submit" className="login-submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
