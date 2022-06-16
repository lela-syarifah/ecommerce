import React, { useState, useEffect, useRef } from "react";
import FooterAdmin from "../../components/Footer/FooterAdmin";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./contactAdmin.css";
import axios from "axios";

export default function ContactAdmin() {
  const [kontak, setKontak] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/contact")
      .then((res) => {
        console.log("getting from :", res.data);
        setKontak(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="box">
      <Sidebar />
      <div className="content">
        <HeaderAdmin />
        <div className="contact">
          {kontak.map((kontak, index) => (
            <div class="card shadow mx-xl-5 my-xl-5 ">
              <div class="card-header text-light pt-3">
                <h4>
                  <i class="fa-solid fa-pen-to-square"></i>&nbsp;Edit Contact
                </h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-12 pt-4 ">
                    <form>
                      <div class="form-group mb-4">
                        <label htmlFor="exampleFormControlInput1">Maps</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder={kontak.maps}
                        />
                      </div>
                      <div class="form-group mb-4">
                        <label htmlFor="exampleFormControlInput1">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder={kontak.email}
                        />
                      </div>
                      <div class="form-group mb-4">
                        <label htmlFor="exampleFormControlInput1">
                          No. Telp
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder={kontak.telp}
                        />
                      </div>
                    </form>

                    <div class="text-center">
                      <button class="btn btn-outline-success">
                        <i class="fa-solid fa-clipboard-check"></i>&nbsp;Simpan
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="futer ">
          <FooterAdmin />
        </div>
      </div>
    </div>
  );
}
