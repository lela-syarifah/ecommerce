import React from "react";
import "../components.css";
import logo from "../img/binusa.png";

export default function Header() {
  return (
    <div className="">
      {/* Topbar Start  */}
      <div className="topbar ">
        <div className="hdr-1">
          <div className="header-logo">
            <a className="text-light px-2" href="/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-light px-2" href="/">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="text-light px-2" href="/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="text-light px-2" href="/">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="text-light pl-2" href="/">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div className="header-menu pt-3">
            <p>
              <i className="fa-solid fa-clock"></i> &nbsp;mon-fri:10.00-18.00
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> &nbsp;25 west 21th
              street, miami fl, usa
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> &nbsp;contact@example.com
            </p>
          </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a href="/">
              <img
                className="img-fluid"
                src={logo}
                alt="o"
                style={{ height: "75px", paddingLeft: "50px" }}
              />
            </a>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text text-light "
                    style={{ backgroundColor: "rgb(5, 138, 143)" }}
                  >
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-6 text-right">
            {/* <a href="/" className="btn border">
                <i
                  className="fas fa-user "
                  style={{ color: "rgb(5, 138, 143)" }}
                ></i>
                <span className="badge">user</span>
              </a>
              &nbsp; */}
            <a href="/" className="btn border">
              <i
                className="fas fa-heart "
                style={{ color: "rgb(5, 138, 143)" }}
              ></i>
              <span className="badge">0</span>
            </a>
            &nbsp;
            <a href="/" className="btn border">
              <i
                className="fas fa-shopping-cart "
                style={{ color: "rgb(5, 138, 143)" }}
              ></i>
              <span className="badge">0</span>
            </a>
          </div>
        </div>
      </div>
      {/* Topbar End  */}
    </div>
  );
}
