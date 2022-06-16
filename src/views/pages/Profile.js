import React, { useState, useEffect } from "react";
import FooterAdmin from "../../components/Footer/FooterAdmin";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./profileAdmin.css";
import poto from "../../components/img/pp-3.jpg";
import axios from "axios";

export default function Admin() {
  const [profil, setProfil] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/profil")
      .then((res) => {
        console.log("getting from :", res.data);
        setProfil(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="box">
      <Sidebar />
      <div className="content">
        <HeaderAdmin />
        <div className="profile">
          <div class="card shadow mx-xl-5 my-xl-5 ">
            <div class="card-header text-light pt-3">
              <h4>
                <i class="fa-solid fa-pen-to-square"></i>&nbsp;Edit Profile
              </h4>
            </div>
            <div class="card-body">
              {profil.map((profil, index) => (
                <div class="row">
                  <div class="col-4 border-right text-center">
                    <img
                      src={poto}
                      alt="poto"
                      class="w-100 h-75  py-2 px-3 mb-3"
                    />
                    <h6>{profil.nama}</h6>
                    <p>smkbinusasmg@yahoo.com</p>
                  </div>
                  <div class="col-8 px-5 py-3">
                    {/* <div class="row px-4 py-3 pt-4">
                    <div class="col"> */}
                    <form>
                      <div class="form-group mb-3">
                        <label htmlFor="exampleFormControlInput1">
                          Nama Toko
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder={profil.nama}
                        />
                      </div>
                      <div class="form-group mb-3">
                        <label htmlFor="exampleFormControlInput1">Alamat</label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder={profil.alamat}
                        />
                      </div>
                      <div class="form-group mb-3">
                        <label htmlFor="exampleFormControlInput1">
                          Deskripsi
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder={profil.deskripsi}
                        ></textarea>
                      </div>
                    </form>
                    {/* </div> */}

                    <div class="text-center">
                      <button class="btn btn-outline-success mt-3">
                        <i class="fa-solid fa-clipboard-check"></i>&nbsp;Simpan
                        Profile
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="futer">
          <FooterAdmin />
        </div>
      </div>
    </div>
  );
}
