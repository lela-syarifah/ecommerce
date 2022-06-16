import React from "react";
import "./login.css";
import pp from "../../components/img/pp-3.jpg";

export default function Login() {
  return (
    <div className="admin">
      <div className="bungkus">
        <div className="logo">
          {" "}
          <img src={pp} alt="" />{" "}
        </div>
        <div className="text-center mt-4 name"> E-Commerce </div>
        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            {" "}
            <span className="far fa-user"></span>{" "}
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Username"
            />{" "}
          </div>
          <div className="form-field d-flex align-items-center">
            {" "}
            <span className="fas fa-key"></span>{" "}
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
            />{" "}
          </div>{" "}
          <a href="/dashboardAdmin" className="btn btn-login pt-2 ">
            Login
          </a>
        </form>
        <div className="text-center fs-6">
          {" "}
          <a href="/dashboardAdmin">Forget password?</a> or{" "}
          <a href="/dashboardAdmin">Sign up</a>{" "}
        </div>
      </div>
    </div>
  );
}
