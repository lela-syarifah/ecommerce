import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav id="sidebar">
        <div className="sidebar-header  ">
          <a href="/dashboardAdmin">
            <h4>User Management</h4>
          </a>
        </div>

        <ul className="list-unstyled components ">
          <li>
            <a href="/dashboardAdmin">
              <i className="fa-solid fa-gauge"></i>&nbsp;&nbsp;Dashboard
            </a>
          </li>

          <li>
            <a href="/productAdmin">
              <i class="fa-solid fa-burger"></i> &nbsp;&nbsp;Product
            </a>
          </li>

          <li>
            <a href="/contactAdmin">
              <i class="fa-solid fa-address-book"></i>&nbsp;&nbsp;Contact
            </a>
          </li>

          <li>
            <a href="/aboutAdmin">
              <i class="fa-solid fa-address-card"></i>&nbsp;&nbsp;About
            </a>
          </li>

          <li>
            <a href="/profileAdmin">
              <i className="fa-solid fa-circle-user"></i>&nbsp;&nbsp;Profile
            </a>
          </li>

          <li>
            <a href="/blogAdmin">
              <i class="fa-brands fa-blogger"></i>&nbsp;&nbsp;Blog
            </a>
          </li>

          <li>
            <a href="/" className="out">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              &nbsp;&nbsp;Keluar
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
