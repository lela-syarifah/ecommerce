import React from "react";
// import "../components.css";

export default function HeaderAdmin() {
  return (
    <div className="hdr-adm  ">
      <div className=" py-2 px-xl-3 justify-content-between d-flex">
        <div className="hdr-left ">
          <a href="/dashboardAdmin" className="list">
            <i class="fa-solid fa-bars"></i>
          </a>
        </div>
        <div className="hdr-right pl-xl-5    ml-xl-5">
          <a href="/dashboardAdmin" className="user ">
            <i class="fa-solid fa-circle-user"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
