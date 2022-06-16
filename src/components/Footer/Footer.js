import axios from "axios";
import React, { useState, useEffect } from "react";
import "../components.css";
import logo from "../img/binusa.png";

export default function Footer() {
  const [kontak, setKontak] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/contact")
      .then((res) => {
        console.log("dapet dari: ", res.data);
        setKontak(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [desk, setDesk] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/profil")
      .then((res) => {
        console.log("getting from :", res.data);
        setDesk(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="all">
      {/* Footer Start  */}
      <div className="container-fluid crsl text-light mt-5 pt-5">
        <div className="row px-xl-5 pt-4">
          {kontak.map((kontak, index) => (
            <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
              <a href="/" className="text-decoration-none">
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: "160px", paddingBottom: "20px" }}
                />
              </a>
              {desk.map((desk, index) => (
                <p>{desk.deskripsi}</p>
              ))}
              <br />
              <p className="mb-2 alamat">
                <i className="fa fa-map-marker-alt icon mr-3"></i>
                {kontak.alamat}
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope icon mr-3"></i>
                {kontak.email}
              </p>
              <p className="mb-0">
                <i className="fa fa-phone-alt icon mr-3"></i>
                {kontak.telp}
              </p>
            </div>
          ))}
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-light mb-4">
                  Quick Links
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-light mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Home
                  </a>
                  <a className="text-light mb-2" href="/blog">
                    <i className="fa fa-angle-right mr-2"></i>Blog
                  </a>
                  <a className="text-light mb-2" href="/about">
                    <i className="fa fa-angle-right mr-2"></i>About US
                  </a>
                  <a className="text-light mb-2" href="/product">
                    <i className="fa fa-angle-right mr-2"></i>Product
                  </a>
                  <a className="text-light" href="/contact">
                    <i className="fa fa-angle-right mr-2"></i>Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-light mb-4">
                  Quick Links
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-light mb-2" href="/">
                    <i className="fa fa-angle-right mr-2"></i>Home
                  </a>
                  <a className="text-light mb-2" href="/blog">
                    <i className="fa fa-angle-right mr-2"></i>Blog
                  </a>
                  <a className="text-light mb-2" href="/about">
                    <i className="fa fa-angle-right mr-2"></i>About Us
                  </a>
                  <a className="text-light mb-2" href="/product">
                    <i className="fa fa-angle-right mr-2"></i>Product
                  </a>
                  <a className="text-light mb-2" href="/contact">
                    <i className="fa fa-angle-right mr-2"></i>Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-light mb-4">Newsletter</h5>
                <form action="">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 py-4"
                      placeholder="Your Name"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control border-0 py-4"
                      placeholder="Your Email"
                      required="required"
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-block text-dark sbnw border-0 py-3"
                      type="submit"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row border-top border-light mx-xl-5 py-4">
          <div className="col-md-6 px-xl-0">
            <p className="mb-md-0 text-center text-md-left text-light">
              &copy;
              <a className="text-light font-weight-bold" href="/">
                &nbsp;Your Site Name
              </a>
              . All Rights Reserved. Designed by
              <a
                className="text-light font-weight-bold"
                href="https://htmlcodex.com"
              >
                &nbsp;HTML Codex
              </a>
              <br />
              Distributed By
              <a
                href="https://themewagon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                &nbsp;ThemeWagon
              </a>
            </p>
          </div>
          <div className="col-md-6 px-xl-0 text-md-right">
            <a
              className="btn btn-outline-light btn-floating m-1"
              role="button"
              href="https://www.facebook.com/smkbinusasmg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              role="button"
              href="https://twitter.com/smkbinusasmg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              role="button"
              href="https://binusasmg.sch.id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              role="button"
              href="https://www.instagram.com/smkbinanusantara_smg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Footer End  */}

      {/* Back to Top  */}
      <a href="/" className="btn text-dark back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
      {/* Back to Top End */}
    </div>
  );
}

// import React, { Component } from "react";
// import "../components.css";
// import logo from "../img/binusa.png";

// export default class Footer extends Component {
//   render() {
//     return (
// <div className="all">
//   {/* Footer Start  */}
//   <div className="container-fluid crsl text-light mt-5 pt-5">
//     <div className="row px-xl-5 pt-4">
//       <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
//         <a href="/" className="text-decoration-none">
//           <img
//             src={logo}
//             alt="logo"
//             style={{ height: "160px", paddingBottom: "20px" }}
//           />
//         </a>
//         <p>
//           Dolore erat dolor sit lorem vero amet. Sed sit lorem magna,
//           ipsum no sit erat lorem et magna ipsum dolore amet erat.
//         </p>
//         <p className="mb-2">
//           <i className="fa fa-map-marker-alt icon mr-3"></i>28F2+QH
//           Wonosari, Kota Semarang, Jawa Tengah
//         </p>
//         <p className="mb-2">
//           <i className="fa fa-envelope icon mr-3"></i>
//           smkbinusasmg@yahoo.com
//         </p>
//         <p className="mb-0">
//           <i className="fa fa-phone-alt icon mr-3"></i>(024) 8662971
//         </p>
//       </div>
//       <div className="col-lg-8 col-md-12">
//         <div className="row">
//           <div className="col-md-4 mb-5">
//             <h5 className="font-weight-bold text-light mb-4">
//               Quick Links
//             </h5>
//             <div className="d-flex flex-column justify-content-start">
//               <a className="text-light mb-2" href="/">
//                 <i className="fa fa-angle-right mr-2"></i>Home
//               </a>
//               <a className="text-light mb-2" href="/blog">
//                 <i className="fa fa-angle-right mr-2"></i>Blog
//               </a>
//               <a className="text-light mb-2" href="/about">
//                 <i className="fa fa-angle-right mr-2"></i>About US
//               </a>
//               <a className="text-light mb-2" href="/product">
//                 <i className="fa fa-angle-right mr-2"></i>Product
//               </a>
//               <a className="text-light" href="/contact">
//                 <i className="fa fa-angle-right mr-2"></i>Contact Us
//               </a>
//             </div>
//           </div>
//           <div className="col-md-4 mb-5">
//             <h5 className="font-weight-bold text-light mb-4">
//               Quick Links
//             </h5>
//             <div className="d-flex flex-column justify-content-start">
//               <a className="text-light mb-2" href="/">
//                 <i className="fa fa-angle-right mr-2"></i>Home
//               </a>
//               <a className="text-light mb-2" href="/blog">
//                 <i className="fa fa-angle-right mr-2"></i>Blog
//               </a>
//               <a className="text-light mb-2" href="/about">
//                 <i className="fa fa-angle-right mr-2"></i>About Us
//               </a>
//               <a className="text-light mb-2" href="/product">
//                 <i className="fa fa-angle-right mr-2"></i>Product
//               </a>
//               <a className="text-light mb-2" href="/contact">
//                 <i className="fa fa-angle-right mr-2"></i>Contact Us
//               </a>
//             </div>
//           </div>
//           <div className="col-md-4 mb-5">
//             <h5 className="font-weight-bold text-light mb-4">
//               Newsletter
//             </h5>
//             <form action="">
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control border-0 py-4"
//                   placeholder="Your Name"
//                   required="required"
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   className="form-control border-0 py-4"
//                   placeholder="Your Email"
//                   required="required"
//                 />
//               </div>
//               <div>
//                 <button
//                   className="btn btn-block text-dark sbnw border-0 py-3"
//                   type="submit"
//                 >
//                   Subscribe Now
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="row border-top border-light mx-xl-5 py-4">
//       <div className="col-md-6 px-xl-0">
//         <p className="mb-md-0 text-center text-md-left text-light">
//           &copy;
//           <a className="text-light font-weight-bold" href="/">
//             &nbsp;Your Site Name
//           </a>
//           . All Rights Reserved. Designed by
//           <a
//             className="text-light font-weight-bold"
//             href="https://htmlcodex.com"
//           >
//             &nbsp;HTML Codex
//           </a>
//           <br />
//           Distributed By
//           <a
//             href="https://themewagon.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="link"
//           >
//             &nbsp;ThemeWagon
//           </a>
//         </p>
//       </div>
//       <div className="col-md-6 px-xl-0 text-md-right">
//         <a
//           className="btn btn-outline-light btn-floating m-1"
//           role="button"
//           href="https://www.facebook.com/smkbinusasmg"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <i className="fab fa-facebook-f"></i>
//         </a>

//         <a
//           className="btn btn-outline-light btn-floating m-1"
//           role="button"
//           href="https://twitter.com/smkbinusasmg"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <i className="fab fa-twitter"></i>
//         </a>

//         <a
//           className="btn btn-outline-light btn-floating m-1"
//           role="button"
//           href="https://binusasmg.sch.id/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <i className="fab fa-google"></i>
//         </a>

//         <a
//           className="btn btn-outline-light btn-floating m-1"
//           role="button"
//           href="https://www.instagram.com/smkbinanusantara_smg/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <i className="fab fa-instagram"></i>
//         </a>
//       </div>
//     </div>
//   </div>
//   {/* Footer End  */}

//   {/* Back to Top  */}
//   <a href="/" className="btn text-dark back-to-top">
//     <i className="fa fa-angle-double-up"></i>
//   </a>
//   {/* Back to Top End */}
// </div>
//     );
//   }
// }
