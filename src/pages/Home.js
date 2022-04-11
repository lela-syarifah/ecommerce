import React, { Component } from "react";
import "./pages.css";
import img1 from "../components/img/C&E1.jpeg";
import img2 from "../components/img/C&E2.jpg";
import img3 from "../components/img/C&E3.png";
import cat1 from "../components/img/FB1.jpg";
import cat2 from "../components/img/FB2.webp";
import cat3 from "../components/img/FB3.jpg";
import of1 from "../components/img/offer-2.png";
import pro1 from "../components/img/BS1.jpg";
import pro2 from "../components/img/BS2.jpg";
import logo from "../components/img/binusa.png";

export default class Home extends Component {
  render() {
    return (
      <div className="all">
        {/* Navbar Start  */}
        <div className="container-fluid mb-5 ">
          <div className="row border-top px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
              <a
                className="btn shadow-none d-flex align-items-center justify-content-between text-white w-100"
                data-toggle="collapse"
                href="#navbar-vertical"
                style={{
                  height: "65px",
                  marginTop: "-1px",
                  padding: "0 30px",
                  backgroundColor: "rgb(5, 138, 143)",
                }}
              >
                <h6 className="m-0">Categories</h6>
                <i className="fa fa-angle-down text-light"></i>
              </a>
              <nav
                className="collapse show navbar navbar-vertical navbar-light  card align-items-start p-0 border border-top-0 border-bottom-0"
                id="navbar-vertical"
              >
                <div
                  className="navbar-nav w-100 overflow-hidden  list-group list-group-flush"
                  style={{ height: "400px" }}
                >
                  <div
                    className="nav-item dropdown list-group-item"
                    style={{ padding: "0px 30px 0px" }}
                  >
                    <a href="/" className="nav-link" data-toggle="dropdown">
                      Dresses{" "}
                      <i className="fa fa-angle-down float-right mt-1"></i>
                    </a>
                    <div
                      className="dropdown-menu position-absolute  border-0 rounded-0 w-100 m-0"
                      style={{
                        backgroundColor: "rgb(5, 138, 143)",
                      }}
                    >
                      <a href="/" className="dropdown-item categories">
                        Men's Dresses
                      </a>
                      <a href="/" className="dropdown-item categories">
                        Women's Dresses
                      </a>
                      <a href="/" className="dropdown-item categories">
                        Baby's Dresses
                      </a>
                    </div>
                  </div>
                  <a
                    href="/"
                    className="nav-item nav-link list-group-item"
                    style={{ padding: "6px 30px 6px" }}
                  >
                    Shirts
                  </a>
                  <a
                    href="/"
                    className="nav-item nav-link list-group-item"
                    style={{ padding: "6px 30px 6px" }}
                  >
                    Jeans
                  </a>
                  <a
                    href="/"
                    className="nav-item nav-link list-group-item"
                    style={{ padding: "6px 30px 6px" }}
                  >
                    Swimwear
                  </a>
                  <a
                    href="/"
                    className="nav-item nav-link list-group-item"
                    style={{ padding: "6px 30px 6px" }}
                  >
                    Sleepwear
                  </a>
                  <a
                    href="/"
                    className="nav-item nav-link list-group-item"
                    style={{ padding: "6px 30px 6px" }}
                  >
                    Sportswear
                  </a>
                  <a
                    href="/"
                    className="nav-item nav-link list-group-item"
                    style={{ padding: "6px 30px 6px" }}
                  >
                    Jumpsuits
                  </a>
                  <a
                    href="/"
                    className="nav-item nav-link list-group-item"
                    style={{ padding: "6px 30px 6px" }}
                  >
                    Blazers
                  </a>
                  <a
                    href="/"
                    className="nav-item nav-link list-group-item"
                    style={{ padding: "6px 30px 6px" }}
                  >
                    Jackets
                  </a>
                  <a
                    href="/"
                    className="nav-item nav-link list-group-item"
                    style={{ padding: "6px 30px 6px" }}
                  >
                    Shoes
                  </a>
                </div>
              </nav>
            </div>
            <div className="col-lg-9">
              <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-0">
                <a href="/" className="text-decoration-none d-block d-lg-none">
                  <img
                    className="img-fluid"
                    src={logo}
                    alt="o"
                    style={{ height: "75px", paddingLeft: "50px" }}
                  />
                </a>
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-between"
                  id="navbarCollapse"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="navbar-nav mr-auto py-2">
                    <a href="/" className="nav-item nav-link active">
                      Home
                    </a>
                    <a href="/product" className="nav-item nav-link">
                      Shop
                    </a>
                    <a href="/blog" className="nav-item nav-link">
                      Blog
                    </a>
                    <a href="/about" className="nav-item nav-link">
                      About Us
                    </a>
                    <a href="/contact" className="nav-item nav-link">
                      Contact Us
                    </a>
                  </div>
                  <div className="navbar-nav ml-auto py-0">
                    <a href="/" className="nav-item nav-link">
                      Login
                    </a>
                    <a href="/" className="nav-item nav-link">
                      Register
                    </a>
                  </div>
                </div>
              </nav>
              <div
                id="header-carousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    style={{ height: "420px" }}
                  >
                    <img className="img-fluid" src={img1} alt="" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: "700px" }}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">
                          10% Off Your First Order
                        </h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                          Fashionable Dress
                        </h3>
                        <a href="/" className="btn btn-light py-2 px-3">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" style={{ height: "420px" }}>
                    <img className="img-fluid" src={img2} alt="" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: "700px" }}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">
                          10% Off Your First Order
                        </h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                          Reasonable Price
                        </h3>
                        <a href="/" className="btn btn-light py-2 px-3">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" style={{ height: "420px" }}>
                    <img className="img-fluid" src={img3} alt="" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: "700px" }}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">
                          10% Off Your First Order
                        </h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                          Reasonable Price
                        </h3>
                        <a href="/" className="btn btn-light py-2 px-3">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#header-carousel"
                  data-slide="prev"
                >
                  <div
                    className="btn btn-dark"
                    style={{ width: "45px", height: "45px" }}
                  >
                    <span className="carousel-control-prev-icon mb-n2"></span>
                  </div>
                </a>
                <a
                  className="carousel-control-next"
                  href="#header-carousel"
                  data-slide="next"
                >
                  <div
                    className="btn btn-dark"
                    style={{ width: "45px", height: "45px" }}
                  >
                    <span className="carousel-control-next-icon mb-n2"></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar End  */}

        {/* Categories Start  */}
        <div className="container-fluid pt-5" style={{ fontSize: "18px" }}>
          <div className="text-center mb-4">
            <h2 className="section-title px-5 ">
              <span className="px-2">Beauty Essentials</span>
            </h2>
          </div>
          <div className="row px-xl-5 pb-3">
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: "30px" }}
              >
                <a
                  href="/"
                  className="cat-img position-relative overflow-hidden mb-3"
                >
                  <img className="img-fluid gmbr" src={cat1} alt="" />
                </a>
                <h5 className="font-weight-semi-bold m-0">Skincare</h5>
                <p>Starts from $18.00</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: "30px" }}
              >
                <a
                  href="/"
                  className="cat-img position-relative overflow-hidden mb-3"
                >
                  <img className="img-fluid gmbr" src={cat2} alt="" />
                </a>
                <h5 className="font-weight-semi-bold m-0">Makeup</h5>
                <p>Starts from $22.00</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: "30px" }}
              >
                <a
                  href="/"
                  className="cat-img position-relative overflow-hidden mb-3"
                >
                  <img className="img-fluid gmbr" src={cat3} alt="" />
                </a>
                <h5 className="font-weight-semi-bold m-0">Clean Eyes</h5>
                <p>Starts from $18.00</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: "30px" }}
              >
                <a
                  href="/"
                  className="cat-img position-relative overflow-hidden mb-3"
                >
                  <img className="img-fluid gmbr" src={cat1} alt="" />
                </a>
                <h5 className="font-weight-semi-bold m-0">Skincare</h5>
                <p>Starts from $18.00</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: "30px" }}
              >
                <a
                  href="/"
                  className="cat-img position-relative overflow-hidden mb-3"
                >
                  <img className="img-fluid gmbr" src={cat2} alt="" />
                </a>
                <h5 className="font-weight-semi-bold m-0">Makeup</h5>
                <p>Starts from $22.00</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: "30px" }}
              >
                <a
                  href="/"
                  className="cat-img position-relative overflow-hidden mb-3"
                >
                  <img className="img-fluid gmbr" src={cat3} alt="" />
                </a>
                <h5 className="font-weight-semi-bold m-0">Clean Eyes</h5>
                <p>Starts from $18.00</p>
              </div>
            </div>
          </div>
        </div>
        {/* Categories End  */}

        {/* Offer Start  */}
        <div className="container-fluid offer pt-5 ">
          <div className="row px-xl-5">
            <div className="col">
              <div
                className="position-relative  text-center text-md-right text-light mb-2 py-5 px-5"
                style={{ backgroundColor: "rgb(5, 138, 143)" }}
              >
                <img
                  src={of1}
                  alt=""
                  style={{
                    position: "absolute",
                    maxWidth: "50%",
                    maxHeight: "90%",
                    bottom: "0",
                    left: "0",
                  }}
                />
                <div className="position-relative" style={{ zIndex: "1" }}>
                  <h5 className="text-uppercase text-light mb-3">
                    20% off the all order
                  </h5>
                  <h1 className="mb-4 font-weight-bold">Spring Collection</h1>
                  <a href="/" className="btn btn-outline-light py-md-2 px-md-3">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Offer End  */}

        {/* Products Start  */}
        <div className="container-fluid pt-5">
          <div className="text-center mb-4">
            <h2 className="section-title px-5 ">
              <span className="px-2">Best Selling</span>
            </h2>
          </div>
          <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src={pro1} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href="/" className="btn btn-sm text-dark p-0">
                    <i
                      className="fas fa-eye  mr-1"
                      style={{ color: "rgb(36, 166, 170)" }}
                    ></i>
                    View Detail
                  </a>
                  <a href="/" className="btn btn-sm text-dark p-0">
                    <i
                      className="fas fa-shopping-cart  mr-1"
                      style={{ color: "rgb(36, 166, 170)" }}
                    ></i>
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src={pro2} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href="/" className="btn btn-sm text-dark p-0">
                    <i
                      className="fas fa-eye  mr-1"
                      style={{ color: "rgb(36, 166, 170)" }}
                    ></i>
                    View Detail
                  </a>
                  <a href="/" className="btn btn-sm text-dark p-0">
                    <i
                      className="fas fa-shopping-cart  mr-1"
                      style={{ color: "rgb(36, 166, 170)" }}
                    ></i>
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src={pro1} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href="/" className="btn btn-sm text-dark p-0">
                    <i
                      className="fas fa-eye  mr-1"
                      style={{ color: "rgb(36, 166, 170)" }}
                    ></i>
                    View Detail
                  </a>
                  <a href="/" className="btn btn-sm text-dark p-0">
                    <i
                      className="fas fa-shopping-cart  mr-1"
                      style={{ color: "rgb(36, 166, 170)" }}
                    ></i>
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src={pro2} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href="/" className="btn btn-sm text-dark p-0">
                    <i
                      className="fas fa-eye  mr-1"
                      style={{ color: "rgb(36, 166, 170)" }}
                    ></i>
                    View Detail
                  </a>
                  <a href="/" className="btn btn-sm text-dark p-0">
                    <i
                      className="fas fa-shopping-cart  mr-1"
                      style={{ color: "rgb(36, 166, 170)" }}
                    ></i>
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Products End  */}

        {/* Products Start  */}
        <div className="container-fluid pt-5">
          <div className="text-center mb-4">
            <h2 className="section-title px-5">
              <span className="px-2">Under $25</span>
            </h2>
          </div>
          <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src={pro2} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href="/" className="btn btn-sm text-dark p-0">
                    <i
                      className="fas fa-eye  mr-1"
                      style={{ color: "rgb(36, 166, 170)" }}
                    ></i>
                    View Detail
                  </a>
                  <a href="/" className="btn btn-sm text-dark p-0">
                    <i
                      className="fas fa-shopping-cart  mr-1"
                      style={{ color: "rgb(36, 166, 170)" }}
                    ></i>
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src={pro1} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href="/" className="btn btn-sm text-dark p-0">
                    <i
                      className="fas fa-eye  mr-1"
                      style={{ color: "rgb(36, 166, 170)" }}
                    ></i>
                    View Detail
                  </a>
                  <a href="/" className="btn btn-sm text-dark p-0">
                    <i
                      className="fas fa-shopping-cart  mr-1"
                      style={{ color: "rgb(36, 166, 170)" }}
                    ></i>
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src={pro2} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href="/" className="btn btn-sm text-dark p-0">
                    <i
                      className="fas fa-eye  mr-1"
                      style={{ color: "rgb(36, 166, 170)" }}
                    ></i>
                    View Detail
                  </a>
                  <a href="/" className="btn btn-sm text-dark p-0">
                    <i
                      className="fas fa-shopping-cart  mr-1"
                      style={{ color: "rgb(36, 166, 170)" }}
                    ></i>
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src={pro1} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href="/" className="btn btn-sm text-dark p-0">
                    <i
                      className="fas fa-eye  mr-1"
                      style={{ color: "rgb(36, 166, 170)" }}
                    ></i>
                    View Detail
                  </a>
                  <a href="/" className="btn btn-sm text-dark p-0">
                    <i
                      className="fas fa-shopping-cart  mr-1"
                      style={{ color: "rgb(36, 166, 170)" }}
                    ></i>
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Products End  */}

        {/* Question  */}
        <div className="container-fluid my-5  ">
          <div className=" Qst ">
            <h2>
              <b>Why Shop with Hara?</b>
            </h2>
            <span style={{ color: "rgb(5, 104, 107)" }}>
              <b>~~~</b>
            </span>
            <br />
            <br />
            <br />
            <div className="row " style={{ textAlign: "left" }}>
              <div className="col-md-4">
                <h4>
                  <b>Guaranteed Pure</b>
                </h4>
                <p>
                  All Grace formulations adhere to strict purity standards and
                  will never contain harsh or toxic ingredients
                </p>
              </div>
              <div className="col-md-4">
                <h4>
                  <b>Completely Cruelty-Free</b>
                </h4>
                <p>
                  All Grace formulations adhere to strict purity standards and
                  will never contain harsh or toxic ingredients
                </p>
              </div>
              <div className="col-md-4">
                <h4>
                  <b>Ingredient Sourcing</b>
                </h4>
                <p>
                  All Grace formulations adhere to strict purity standards and
                  will never contain harsh or toxic ingredients
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Question  */}

        {/* Ad 2 start */}
        <div className="container-fluid pt-5">
          <div className="row px-xl-5">
            <div className="col-md-6 pb-4">
              <div className="ad1">
                <h4>CLEAN BEAUTY</h4>
                <h2>
                  Exfoliate Tone <br />& Hydrate
                </h2>
                <br />
                <a href="/" className="btn btn-outline-danger  py-md-2 px-md-3">
                  Shop now!
                </a>
              </div>
            </div>
            <div className="col-md-6 pb-4">
              <div className="ad2">
                <h4>25% off Everything</h4>
                <p>
                  Makeup with extended range in <br />
                  colors for every human.
                </p>
                <br />
                <a href="/" className="btn btn-outline-dark py-md-2 px-md-3">
                  Shop now!
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*  Ad 2  End*/}
      </div>
    );
  }
}
