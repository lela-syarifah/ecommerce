import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "./pages.css";
import pro1 from "../components/img/product-1.jpg";
import pro2 from "../components/img/product-2.jpg";
import pro3 from "../components/img/product-3.jpg";
import pro4 from "../components/img/product-4.jpg";
import pro5 from "../components/img/product-5.jpg";

export default class ShopingCart extends Component {
  render() {
    return (
      <div className="all">
        <Navbar />
        {/* Page Header Start  */}
        <div
          className="container-fluid  mb-5"
          style={{ backgroundColor: "rgb(5, 104, 107)" }}
        >
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "300px" }}
          >
            <h1 className="font-weight-semi-bold text-uppercase mb-3">
              Shopping Cart
            </h1>
            <div className="d-inline-flex">
              <p className="m-0">
                <a href="/" style={{ color: "rgb(36, 166, 170)" }}>
                  Home
                </a>
              </p>
              <p className="m-0 px-2">-</p>
              <p className="m-0">Shopping Cart</p>
            </div>
          </div>
        </div>
        {/* Page Header End  */}

        {/* Cart Start  */}
        <div className="container-fluid pt-5">
          <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
              <table className="table table-bordered text-center mb-0">
                <thead
                  className=" text-dark"
                  style={{ backgroundColor: "rgb(5, 104, 107)" }}
                >
                  <tr>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  <tr>
                    <td className="align-middle">
                      <img src={pro1} alt="" style={{ width: "50px" }} />{" "}
                      Colorful Stylish Shirt
                    </td>
                    <td className="align-middle">$150</td>
                    <td className="align-middle">
                      <div
                        className="input-group quantity mx-auto"
                        style={{ width: "100px" }}
                      >
                        <div className="input-group-btn">
                          <button
                            className="btn text-light btn-sm  btn-minus"
                            style={{
                              backgroundColor: "rgb(36, 166, 170)",
                            }}
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm  text-center"
                          style={{
                            backgroundColor: "rgb(5, 104, 107)",
                          }}
                          value="1"
                        />
                        <div className="input-group-btn">
                          <button
                            className="btn text-light btn-sm  btn-plus"
                            style={{
                              backgroundColor: "rgb(36, 166, 170)",
                            }}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">$150</td>
                    <td className="align-middle">
                      <button
                        className="btn text-light btn-sm "
                        style={{ backgroundColor: "rgb(36, 166, 170)" }}
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <img src={pro2} alt="" style={{ width: "50px" }} />{" "}
                      Colorful Stylish Shirt
                    </td>
                    <td className="align-middle">$150</td>
                    <td className="align-middle">
                      <div
                        className="input-group quantity mx-auto"
                        style={{ width: "100px" }}
                      >
                        <div className="input-group-btn">
                          <button
                            className="btn text-light btn-sm  btn-minus"
                            style={{
                              backgroundColor: "rgb(36, 166, 170)",
                            }}
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm  text-center"
                          style={{
                            backgroundColor: "rgb(5, 104, 107)",
                          }}
                          value="1"
                        />
                        <div className="input-group-btn">
                          <button
                            className="btn text-light btn-sm  btn-plus"
                            style={{
                              backgroundColor: "rgb(36, 166, 170)",
                            }}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">$150</td>
                    <td className="align-middle">
                      <button
                        className="btn text-light btn-sm "
                        style={{ backgroundColor: "rgb(36, 166, 170)" }}
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <img src={pro3} alt="" style={{ width: "50px" }} />{" "}
                      Colorful Stylish Shirt
                    </td>
                    <td className="align-middle">$150</td>
                    <td className="align-middle">
                      <div
                        className="input-group quantity mx-auto"
                        style={{ width: "100px" }}
                      >
                        <div className="input-group-btn">
                          <button
                            className="btn text-light btn-sm  btn-minus"
                            style={{
                              backgroundColor: "rgb(36, 166, 170)",
                            }}
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm  text-center"
                          style={{
                            backgroundColor: "rgb(5, 104, 107)",
                          }}
                          value="1"
                        />
                        <div className="input-group-btn">
                          <button
                            className="btn text-light btn-sm  btn-plus"
                            style={{
                              backgroundColor: "rgb(36, 166, 170)",
                            }}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">$150</td>
                    <td className="align-middle">
                      <button
                        className="btn text-light btn-sm "
                        style={{ backgroundColor: "rgb(36, 166, 170)" }}
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <img src={pro4} alt="" style={{ width: "50px" }} />{" "}
                      Colorful Stylish Shirt
                    </td>
                    <td className="align-middle">$150</td>
                    <td className="align-middle">
                      <div
                        className="input-group quantity mx-auto"
                        style={{ width: "100px" }}
                      >
                        <div className="input-group-btn">
                          <button
                            className="btn text-light btn-sm  btn-minus"
                            style={{
                              backgroundColor: "rgb(36, 166, 170)",
                            }}
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm  text-center"
                          style={{
                            backgroundColor: "rgb(5, 104, 107)",
                          }}
                          value="1"
                        />
                        <div className="input-group-btn">
                          <button
                            className="btn text-light btn-sm  btn-plus"
                            style={{
                              backgroundColor: "rgb(36, 166, 170)",
                            }}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">$150</td>
                    <td className="align-middle">
                      <button
                        className="btn text-light btn-sm "
                        style={{ backgroundColor: "rgb(36, 166, 170)" }}
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <img src={pro5} alt="" style={{ width: "50px" }} />{" "}
                      Colorful Stylish Shirt
                    </td>
                    <td className="align-middle">$150</td>
                    <td className="align-middle">
                      <div
                        className="input-group quantity mx-auto"
                        style={{ width: "100px" }}
                      >
                        <div className="input-group-btn">
                          <button
                            className="btn text-light btn-sm  btn-minus"
                            style={{
                              backgroundColor: "rgb(36, 166, 170)",
                            }}
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm  text-center"
                          style={{
                            backgroundColor: "rgb(5, 104, 107)",
                          }}
                          value="1"
                        />
                        <div className="input-group-btn">
                          <button
                            className="btn text-light btn-sm  btn-plus"
                            style={{
                              backgroundColor: "rgb(36, 166, 170)",
                            }}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">$150</td>
                    <td className="align-middle">
                      <button
                        className="btn text-light btn-sm "
                        style={{ backgroundColor: "rgb(36, 166, 170)" }}
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-4">
              <form className="mb-5" action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control p-4"
                    placeholder="Coupon Code"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn text-light "
                      style={{ backgroundColor: "rgb(36, 166, 170)" }}
                    >
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </form>
              <div
                className="card  mb-5"
                style={{ borderColor: "rgb(5, 104, 107)" }}
              >
                <div
                  className="card-header  border-0"
                  style={{ backgroundColor: "rgb(5, 104, 107)" }}
                >
                  <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3 pt-1">
                    <h6 className="font-weight-medium">Subtotal</h6>
                    <h6 className="font-weight-medium">$150</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-medium">Shipping</h6>
                    <h6 className="font-weight-medium">$10</h6>
                  </div>
                </div>
                <div
                  className="card-footer  bg-transparent"
                  style={{ borderColor: "rgb(5, 104, 107)" }}
                >
                  <div className="d-flex justify-content-between mt-2">
                    <h5 className="font-weight-bold">Total</h5>
                    <h5 className="font-weight-bold">$160</h5>
                  </div>
                  <button
                    className="btn text-light btn-block  my-3 py-3"
                    style={{ backgroundColor: "rgb(36, 166, 170)" }}
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cart End  */}
      </div>
    );
  }
}
