import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "./pages.css";

export default class ProductDisplay extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* Page Header Start  */}
        <div
          className="container-fluid  mb-5"
          style={{ backgroundColor: "rgb(145, 210, 212)" }}
        >
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "300px" }}
          >
            <h1 className="font-weight-semi-bold text-uppercase mb-3">
              Our Shop
            </h1>
            <div className="d-inline-flex">
              <p className="m-0">
                <a href="/" style={{ color: "rgb(5, 138, 143)" }}>
                  Home
                </a>
              </p>
              <p className="m-0 px-2">-</p>
              <p className="m-0">Shop</p>
            </div>
          </div>
        </div>
        {/* Page Header End  */}

        {/* Shop Start  */}
        <div className="container-fluid pt-5">
          <div className="row px-xl-5">
            {/* Shop Sidebar Start  */}
            <div className="col-lg-3 col-md-12">
              {/* Categories Start  */}
              <div className="border-bottom mb-4 pb-4">
                <h5 className="font-weight-semi-bold mb-4">
                  Filter by Categories
                </h5>
                <form>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input "
                      id="price-all"
                    />
                    <label className="custom-control-label" htmlFor="price-all">
                      All category
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="price-1"
                    />
                    <label className="custom-control-label" htmlFor="price-1">
                      Pria
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="price-2"
                    />
                    <label className="custom-control-label" htmlFor="price-2">
                      Wanita
                    </label>
                  </div>
                </form>
              </div>
              <div className="border-bottom mb-4 pb-4">
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-2"
                  />
                  <label className="custom-control-label" htmlFor="price-3">
                    On Sale
                  </label>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-2"
                  />
                  <label className="custom-control-label" htmlFor="price-4">
                    In Stock
                  </label>
                </div>
              </div>
              {/* Categories End  */}

              {/* Price Start  */}
              <div className="border-bottom mb-4 pb-4">
                <h5 className="font-weight-semi-bold mb-4">Filter by Price</h5>
                <form>
                  <div className="price-input">
                    <div className="field">
                      <span>Min</span>
                      <input type="number" className="input-min" value="2500" />
                    </div>
                    <div className="separator">-</div>
                    <div className="field">
                      <span>Max</span>
                      <input type="number" className="input-max" value="7500" />
                    </div>
                  </div>
                  <div className="slider">
                    <div className="progress"></div>
                  </div>
                  <div className="range-input">
                    <input
                      type="range"
                      className="range-min"
                      min="0"
                      max="10000"
                      value="2500"
                    />
                    <input
                      type="range"
                      className="range-man"
                      min="0"
                      max="10000"
                      value="7500"
                    />
                  </div>
                  <br />
                  <button type="button" className="btn btn-success">
                    Filter
                  </button>
                </form>
              </div>
              {/* Price End  */}

              {/* Size Start  */}
              <div className="mb-5">
                <h5 className="font-weight-semi-bold mb-4">Filter by Size</h5>
                <form>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="size-all"
                    />
                    <label className="custom-control-label" htmlFor="size-all">
                      All Size
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="size-1"
                    />
                    <label className="custom-control-label" htmlFor="size-1">
                      XS
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="size-2"
                    />
                    <label className="custom-control-label" htmlFor="size-2">
                      S
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="size-3"
                    />
                    <label className="custom-control-label" htmlFor="size-3">
                      M
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="size-4"
                    />
                    <label className="custom-control-label" htmlFor="size-4">
                      L
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="size-5"
                    />
                    <label className="custom-control-label" htmlFor="size-5">
                      XL
                    </label>
                  </div>
                </form>
              </div>
              {/* Size End  */}
            </div>
            {/* Shop Sidebar End  */}

            {/* Shop Product Start  */}
            <div className="col-lg-9 col-md-12">
              <div className="row pb-3">
                <div className="col-12 pb-1">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <form action="">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search by name"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text bg-transparent ">
                            <i
                              style={{ color: "rgb(5, 138, 143)" }}
                              className="fa fa-search"
                            ></i>
                          </span>
                        </div>
                      </div>
                    </form>
                    <div className="dropdown ml-4">
                      <button
                        className="btn border dropdown-toggle"
                        type="button"
                        id="triggerId"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Sort by
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="triggerId"
                      >
                        <a className="dropdown-item" href="/">
                          Latest
                        </a>
                        <a className="dropdown-item" href="/">
                          Popularity
                        </a>
                        <a className="dropdown-item" href="/">
                          Best Rating
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
                  <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                      <img
                        className="img-fluid w-100"
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3v0vscJ19JQVu2E4Uzu77lIu142oWlrG-B022QGq22F2jTiEDevcd_7FA2v7TrUiA-wM&usqp=CAU"
                        }
                        alt=""
                      />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">
                        Colorful Stylish Shirt
                      </h6>
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
                          style={{ color: "rgb(5, 138, 143)" }}
                        ></i>
                        View Detail
                      </a>
                      <a href="/" className="btn btn-sm text-dark p-0">
                        <i
                          className="fas fa-shopping-cart  mr-1"
                          style={{ color: "rgb(5, 138, 143)" }}
                        ></i>
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
                  <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                      <img
                        className="img-fluid w-100"
                        src={
                          "https://images.tokopedia.net/img/cache/500-square/product-1/2020/2/7/1575169/1575169_61bc4d6b-0dd1-4675-b119-acf8fad9b9f1_1024_1024.jpg"
                        }
                        alt=""
                      />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">
                        Colorful Stylish Shirt
                      </h6>
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
                          style={{ color: "rgb(5, 138, 143)" }}
                        ></i>
                        View Detail
                      </a>
                      <a href="/" className="btn btn-sm text-dark p-0">
                        <i
                          className="fas fa-shopping-cart  mr-1"
                          style={{ color: "rgb(5, 138, 143)" }}
                        ></i>
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
                  <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                      <img
                        className="img-fluid w-100"
                        src={
                          "https://p-id.ipricegroup.com/8bd9d16c8970a0f50eb7cf60a0b9d462ef79c4f3_0.jpg"
                        }
                        alt=""
                      />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">
                        Colorful Stylish Shirt
                      </h6>
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
                          style={{ color: "rgb(5, 138, 143)" }}
                        ></i>
                        View Detail
                      </a>
                      <a href="/" className="btn btn-sm text-dark p-0">
                        <i
                          className="fas fa-shopping-cart  mr-1"
                          style={{ color: "rgb(5, 138, 143)" }}
                        ></i>
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
                  <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                      <img
                        className="img-fluid w-100"
                        src={
                          "https://cf.shopee.co.id/file/489466d17971fe71b92a7977029fe21f"
                        }
                        alt=""
                      />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">
                        Colorful Stylish Shirt
                      </h6>
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
                          style={{ color: "rgb(5, 138, 143)" }}
                        ></i>
                        View Detail
                      </a>
                      <a href="/" className="btn btn-sm text-dark p-0">
                        <i
                          className="fas fa-shopping-cart  mr-1"
                          style={{ color: "rgb(5, 138, 143)" }}
                        ></i>
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
                  <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                      <img
                        className="img-fluid w-100"
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3v0vscJ19JQVu2E4Uzu77lIu142oWlrG-B022QGq22F2jTiEDevcd_7FA2v7TrUiA-wM&usqp=CAU"
                        }
                        alt=""
                      />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">
                        Colorful Stylish Shirt
                      </h6>
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
                          style={{ color: "rgb(5, 138, 143)" }}
                        ></i>
                        View Detail
                      </a>
                      <a href="/" className="btn btn-sm text-dark p-0">
                        <i
                          className="fas fa-shopping-cart  mr-1"
                          style={{ color: "rgb(5, 138, 143)" }}
                        ></i>
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
                  <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                      <img
                        className="img-fluid w-100"
                        src={
                          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQojzOIDZM1-qilGpAoAIyH6UTbmstePHU2zpdz_a5UWM4s-GRf"
                        }
                        alt=""
                      />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">
                        Colorful Stylish Shirt
                      </h6>
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
                          style={{ color: "rgb(5, 138, 143)" }}
                        ></i>
                        View Detail
                      </a>
                      <a href="/" className="btn btn-sm text-dark p-0">
                        <i
                          className="fas fa-shopping-cart  mr-1"
                          style={{ color: "rgb(5, 138, 143)" }}
                        ></i>
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
                  <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                      <img
                        className="img-fluid w-100"
                        src={
                          "https://images.tokopedia.net/img/cache/500-square/product-1/2020/2/7/1575169/1575169_61bc4d6b-0dd1-4675-b119-acf8fad9b9f1_1024_1024.jpg"
                        }
                        alt=""
                      />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">
                        Colorful Stylish Shirt
                      </h6>
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
                          style={{ color: "rgb(5, 138, 143)" }}
                        ></i>
                        View Detail
                      </a>
                      <a href="/" className="btn btn-sm text-dark p-0">
                        <i
                          className="fas fa-shopping-cart  mr-1"
                          style={{ color: "rgb(5, 138, 143)" }}
                        ></i>
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
                  <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                      <img
                        className="img-fluid w-100"
                        src={
                          "https://images.tokopedia.net/img/cache/500-square/product-1/2020/2/7/1575169/1575169_61bc4d6b-0dd1-4675-b119-acf8fad9b9f1_1024_1024.jpg"
                        }
                        alt=""
                      />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">
                        Colorful Stylish Shirt
                      </h6>
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
                          style={{ color: "rgb(5, 138, 143)" }}
                        ></i>
                        View Detail
                      </a>
                      <a href="/" className="btn btn-sm text-dark p-0">
                        <i
                          className="fas fa-shopping-cart  mr-1"
                          style={{ color: "rgb(5, 138, 143)" }}
                        ></i>
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
                  <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                      <img
                        className="img-fluid w-100"
                        src={
                          "https://images.tokopedia.net/img/cache/500-square/product-1/2020/2/7/1575169/1575169_61bc4d6b-0dd1-4675-b119-acf8fad9b9f1_1024_1024.jpg"
                        }
                        alt=""
                      />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">
                        Colorful Stylish Shirt
                      </h6>
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
                          style={{ color: "rgb(5, 138, 143)" }}
                        ></i>
                        View Detail
                      </a>
                      <a href="/" className="btn btn-sm text-dark p-0">
                        <i
                          className="fas fa-shopping-cart  mr-1"
                          style={{ color: "rgb(5, 138, 143)" }}
                        ></i>
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 pb-1">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center mb-3">
                      <li className="page-item disabled">
                        <a
                          className="page-link"
                          href="/shop"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">&laquo;</span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="/shop">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/shop">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/shop">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="/shop" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* Shop Product End  */}
          </div>
        </div>
        {/* Shop End  */}
      </div>
    );
  }
}
