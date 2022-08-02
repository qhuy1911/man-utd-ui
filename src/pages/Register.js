/* eslint-disable no-useless-escape */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthService from "../services/AuthService";

function Register() {
  const usernames = ["qhuy1911", "manutd"];
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  const handleRegister = (data) => {
    // console.log(data);
    setMessage("");
    setSuccessful(false);
    const user = {
      username: data.username,
      email: data.email,
      password: data.password,
      fullName: data.fullName,
      phone: data.phone,
      address: data.address,
      role: ["user"],
    };
    AuthService.register(user).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
        setSuccessful(false);
      }
    );
  };

  return (
    <div>
      {!successful ? (
        <div className="login-container">
          <div className="login-heading">
            <h1>Register</h1>
            <p>
              Already have an account? <Link to={"/login"}>Sign in</Link>
            </p>
          </div>
          <form className="login-form" onSubmit={handleSubmit(handleRegister)}>
            <div className="login-input">
              <label htmlFor="fullName">Full name</label>
              <input
                type="text"
                className="form-control"
                {...register("fullName", {
                  required: "Full name is required",
                })}
              />
              {errors.fullName && (
                <span className="validation-message">
                  {errors.fullName.message}
                </span>
              )}
            </div>
            <div className="login-input">
              <label htmlFor="">Username</label>
              <input
                type="text"
                className="form-control"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 6,
                    message: "Min length is 6 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Max length is 20 characters",
                  },
                  validate: (value) =>
                    !usernames.includes(value) || "Username exists",
                })}
              />
              {errors.username && (
                <span className="validation-message">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div className="login-input">
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="form-control"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Min length is 6 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Max length is 20 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="validation-message">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="login-input">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="form-control"
                {...register("email", {
                  required: "Email is required",
                  maxLength: {
                    value: 50,
                    message: "Max length is 20 characters",
                  },
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="validation-message">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="login-input">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                className="form-control"
                {...register("phone")}
              />
            </div>
            <div className="login-input">
              <label htmlFor="">Address</label>
              <input
                type="text"
                className="form-control"
                {...register("address")}
              />
            </div>

            {message && (
              <div className="login-input">
                <div className="error-message" role="alert">
                  {message}
                </div>
              </div>
            )}

            <input className="login-submit" type="submit" value="Submit" />
          </form>
        </div>
      ) : (
        <div>
          Register successful<Link to={"/login"}> Login now! </Link>
        </div>
      )}
    </div>
  );
}

export default Register;
