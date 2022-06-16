import React from "react";
import "../components.css";
import logo from "../img/binusa.png";

export default function Navbar() {
  return (
    <div className="all">
      {/* Navbar Start  */}
      <div className="container-fluid ">
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
              className="collapse position-absolute navbar navbar-vertical navbar-light  card align-items-start p-0 border border-top-0 border-bottom-0"
              id="navbar-vertical"
              style={{ width: "calc(100% - 30px)", zIndex: "1" }}
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
                  style={{ height: "75px", paddingLeft: "40px" }}
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
                style={{ backgroundColor: "white" }}
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-2 ">
                  <a href="/" className="nav-item nav-link">
                    Home
                  </a>
                  <a href="/product" className="nav-item nav-link ">
                    Shop
                  </a>
                  <a href="/blog" className="nav-item nav-link ">
                    Blog
                  </a>
                  <a href="/about" className="nav-item nav-link ">
                    About Us
                  </a>
                  <a href="/contact" className="nav-item nav-link ">
                    Contact Us
                  </a>
                </div>
                <div className="navbar-nav ml-auto py-0">
                  <a href="/login" className="nav-item nav-link">
                    Login
                  </a>
                  <a href="/register" className="nav-item nav-link">
                    Register
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Navbar End  */}
    </div>
  );
}

// import React, { Component } from "react";
// import "../components.css";
// import logo from "../img/binusa.png";

// export default class Navbar extends Component {
//   render() {
//     return (
// <div className="all">
//   {/* Navbar Start  */}
//   <div className="container-fluid ">
//     <div className="row border-top px-xl-5">
//       <div className="col-lg-3 d-none d-lg-block">
//         <a
//           className="btn shadow-none d-flex align-items-center justify-content-between text-white w-100"
//           data-toggle="collapse"
//           href="#navbar-vertical"
//           style={{
//             height: "65px",
//             marginTop: "-1px",
//             padding: "0 30px",
//             backgroundColor: "rgb(5, 138, 143)",
//           }}
//         >
//           <h6 className="m-0">Categories</h6>
//           <i className="fa fa-angle-down text-light"></i>
//         </a>
//         <nav
//           className="collapse position-absolute navbar navbar-vertical navbar-light  card align-items-start p-0 border border-top-0 border-bottom-0"
//           id="navbar-vertical"
//           style={{ width: "calc(100% - 30px)", zIndex: "1" }}
//         >
//           <div
//             className="navbar-nav w-100 overflow-hidden  list-group list-group-flush"
//             style={{ height: "400px" }}
//           >
//             <div
//               className="nav-item dropdown list-group-item"
//               style={{ padding: "0px 30px 0px" }}
//             >
//               <a href="/" className="nav-link" data-toggle="dropdown">
//                 Dresses{" "}
//                 <i className="fa fa-angle-down float-right mt-1"></i>
//               </a>
//               <div
//                 className="dropdown-menu position-absolute  border-0 rounded-0 w-100 m-0"
//                 style={{
//                   backgroundColor: "rgb(5, 138, 143)",
//                 }}
//               >
//                 <a href="/" className="dropdown-item categories">
//                   Men's Dresses
//                 </a>
//                 <a href="/" className="dropdown-item categories">
//                   Women's Dresses
//                 </a>
//                 <a href="/" className="dropdown-item categories">
//                   Baby's Dresses
//                 </a>
//               </div>
//             </div>
//             <a
//               href="/"
//               className="nav-item nav-link list-group-item"
//               style={{ padding: "6px 30px 6px" }}
//             >
//               Shirts
//             </a>
//             <a
//               href="/"
//               className="nav-item nav-link list-group-item"
//               style={{ padding: "6px 30px 6px" }}
//             >
//               Jeans
//             </a>
//             <a
//               href="/"
//               className="nav-item nav-link list-group-item"
//               style={{ padding: "6px 30px 6px" }}
//             >
//               Swimwear
//             </a>
//             <a
//               href="/"
//               className="nav-item nav-link list-group-item"
//               style={{ padding: "6px 30px 6px" }}
//             >
//               Sleepwear
//             </a>
//             <a
//               href="/"
//               className="nav-item nav-link list-group-item"
//               style={{ padding: "6px 30px 6px" }}
//             >
//               Sportswear
//             </a>
//             <a
//               href="/"
//               className="nav-item nav-link list-group-item"
//               style={{ padding: "6px 30px 6px" }}
//             >
//               Jumpsuits
//             </a>
//             <a
//               href="/"
//               className="nav-item nav-link list-group-item"
//               style={{ padding: "6px 30px 6px" }}
//             >
//               Blazers
//             </a>
//             <a
//               href="/"
//               className="nav-item nav-link list-group-item"
//               style={{ padding: "6px 30px 6px" }}
//             >
//               Jackets
//             </a>
//             <a
//               href="/"
//               className="nav-item nav-link list-group-item"
//               style={{ padding: "6px 30px 6px" }}
//             >
//               Shoes
//             </a>
//           </div>
//         </nav>
//       </div>
//       <div className="col-lg-9">
//         <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-0">
//           <a href="/" className="text-decoration-none d-block d-lg-none">
//             <img
//               className="img-fluid"
//               src={logo}
//               alt="o"
//               style={{ height: "75px", paddingLeft: "40px" }}
//             />
//           </a>
//           <button
//             type="button"
//             className="navbar-toggler"
//             data-toggle="collapse"
//             data-target="#navbarCollapse"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse justify-content-between"
//             style={{ backgroundColor: "white" }}
//             id="navbarCollapse"
//           >
//             <div className="navbar-nav mr-auto py-2 ">
//               <a href="/" className="nav-item nav-link">
//                 Home
//               </a>
//               <a href="/product" className="nav-item nav-link ">
//                 Shop
//               </a>
//               <a href="/blog" className="nav-item nav-link ">
//                 Blog
//               </a>
//               <a href="/about" className="nav-item nav-link ">
//                 About Us
//               </a>
//               <a href="/contact" className="nav-item nav-link ">
//                 Contact Us
//               </a>
//             </div>
//             <div className="navbar-nav ml-auto py-0">
//               <a href="/admin" className="nav-item nav-link">
//                 Login
//               </a>
//               <a href="/" className="nav-item nav-link">
//                 Register
//               </a>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   </div>
//   {/* Navbar End  */}
// </div>
//     );
//   }
// }
