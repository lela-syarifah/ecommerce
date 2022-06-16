import React from "react";
import FooterAdmin from "../../components/Footer/FooterAdmin";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import foto from "../../components/img/welcome.png";
import "./admin.css";

export default function Admin() {
  return (
    <div className="box">
      <Sidebar />
      <div className="content">
        <HeaderAdmin />
        <div className="welcome  text-center">
          <img src={foto} alt="welcome admin" />
          <marquee scrollamount="10">Selamat Datang Admin</marquee>
        </div>
        <div className="fuad">
          <FooterAdmin />
        </div>
      </div>
    </div>
  );
}

// import React, { Component } from "react";
// import FooterAdmin from "../../components/Footer/FooterAdmin";
// import HeaderAdmin from "../../components/Header/HeaderAdmin";
// import Sidebar from "../../components/Sidebar/Sidebar";
// import "../pages.css";

// export default class Admin extends Component {
//   render() {
//     return (
//       <div className="box">
//         <Sidebar />
//         <div className="content">
//           <HeaderAdmin />
//           <h2>ini isinya</h2>
//           <FooterAdmin />
//         </div>
//       </div>
//     );
//   }
// }
