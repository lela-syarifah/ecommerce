import React, { Component } from "react";
import "./components.css";
import logo from "./img/binusa.png";

export default class Header extends Component {
  render() {
    return (
      <div className="">
        {/* Topbar Start  */}
        <div className="container-fluid">
          <div
            className="row  py-2 px-xl-5"
            style={{ backgroundColor: "rgb(5, 138, 143)" }}
          >
            <div className="col-lg-6 text-center text-lg-left ">
              <div className="d-inline-flex iqon align-items-center">
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
            </div>
            <div className="col-lg-6 text-center text-lg-right d-none d-lg-block">
              <div className="d-inline-flex align-items-center">
                <a className="text-light" href="/">
                  <i className="fa-solid fa-clock"></i>&nbsp;Mon-Sat:
                  07.00-15.00
                </a>
                <span className="text-light px-2">|</span>
                <a
                  className="text-light"
                  href="https://www.google.com/maps/place/6P5G28F2%2BQH/@-6.9756603,110.299201,17z/data=!4m5!3m4!1s0x0:0x294fc90ab3823149!8m2!3d-6.9755625!4d110.3014375"
                >
                  <i className="fa-solid fa-location-dot"></i>&nbsp;28F2+QH
                  Wonosari, Kota Semarang, Jawa Tengah
                </a>
                <span className="text-light px-2">|</span>
                <a className="text-light" href="/">
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp;smkbinusasmg@yahoo.com
                </a>
              </div>
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
}
