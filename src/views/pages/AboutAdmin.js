import axios from "axios";
import React, { useState, useEffect } from "react";
import FooterAdmin from "../../components/Footer/FooterAdmin";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./aboutAdmin.css";

export default function AboutAdmin() {
  // function About start
  const [about, setAbout] = useState([]);

  // const [kategori, setKategori] = useState("");
  // const [konten, setKonten] = (useState = "");

  useEffect(() => {
    axios
      .get("http://localhost:8000/about")
      .then((res) => {
        console.log("diambil dari :", res.data);
        setAbout(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // function putAbout(id, e) {
  //   e.preventDefault();
  //   axios
  //     .put(`http://localhost:8000/about/${id}`, {
  //       kategori: kategori.value,
  //       konten: konten.value,
  //     })
  //     .then((res) => {
  //       console.log("updated data about", res);
  //     })
  //     .catch((err) => console.log(err));
  // }
  // function About end

  // function Our Team start
  const [our, setOur] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/ourTeam")
      .then((res) => {
        console.log("getting from :", res.data);
        setOur(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // function Our Team end

  return (
    <div className="box">
      <Sidebar />
      <div className="content">
        <HeaderAdmin />
        <div className="about">
          <div class="row px-xl-5 py-xl-5 overflow-auto">
            <div class="col-lg-12  table-responsive bg-light shadow pb-3 mb-xl-5">
              <div class="text pt-2 px-2 d-flex">
                <h4 class="mt-4">About</h4>
                <button
                  class="btn btn-outline-dark shadow my-2 mt-3  ml-auto"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <i class="fa-solid fa-circle-plus"></i>&nbsp; add post
                </button>
              </div>
              <hr />
              <table class="table table-striped  mt-xl-4 ">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Content</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {about.map((about) => (
                    <tr>
                      <td class="align-middle">{about.kategori}</td>
                      <td class="align-middle td">{about.konten}</td>
                      <td class="align-middle">
                        <button class="btn btn-sm btn-outline-danger mb-2">
                          <i class="fa-solid fa-xmark"></i>&nbsp;Remove
                        </button>
                        &nbsp;
                        <button class="btn btn-sm btn-outline-warning">
                          <i class="fa-solid fa-pen-to-square"></i>&nbsp;Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div class="col-lg-12  table-responsive bg-light shadow pb-3 mb-4">
              <div class="text mt-3 d-flex">
                <h4 class="mt-3 ">Our Team</h4>
                <button class="btn btn-outline-dark shadow  mt-1  ml-auto">
                  <i class="fa-solid fa-circle-plus"></i>&nbsp; add person
                </button>
              </div>
              <table class="table table-striped  mt-xl-4 ">
                <thead>
                  <tr>
                    <th>The Person</th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {our.map((our) => (
                    <tr>
                      <td class="align-middle">
                        <img
                          src={our.person}
                          alt="pict"
                          style={{ width: "70px" }}
                        />
                      </td>
                      <td class="align-middle">{our.name}</td>
                      <td class="align-middle">
                        <button class="btn btn-sm btn-outline-danger mb-2">
                          <i class="fa-solid fa-xmark"></i>&nbsp;Remove
                        </button>
                        &nbsp;
                        <button
                          class="btn btn-sm btn-outline-warning mb-2"
                          type="button"
                          data-toggle="modal"
                          data-target="#contohModal"
                        >
                          <i class="fa-solid fa-pen-to-square"></i>
                          &nbsp;Edit
                        </button>
                      </td>
                      {/* Modal Start */}
                      {/* <div
                        class="modal fade"
                        id="contohModal"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Add About
                              </h5>
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <div class="row">
                                <div class="col-12 pt-4 ">
                                  <form>
                                    <div class="form-group mb-4">
                                      <label htmlFor="exampleFormControlInput1">
                                        Gambar
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        // value={}
                                        onChange={(e) =>
                                          setKategori(e.target.value)
                                        }
                                      />
                                    </div>
                                    <div class="form-group mb-4">
                                      <label htmlFor="exampleFormControlInput1">
                                        Nama
                                      </label>
                                      <input
                                        type="email"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        // value={nama}
                                        onChange={(e) =>
                                          setKonten(e.target.value)
                                        }
                                      />
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-outline-danger"
                                data-dismiss="modal"
                              >
                                <i class="fa-solid fa-circle-xmark"></i>
                                &nbsp;Close
                              </button>
                              <div class="text-center">
                                <button
                                  class="btn btn-outline-success"
                                  data-dismiss="modal"
                                  onClick={putAbout}
                                >
                                  <i class="fa-solid fa-circle-check"></i>
                                  &nbsp;Post
                                </button>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* Modal End */}
                    </tr>
                  ))}
                </tbody>
              </table>
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
