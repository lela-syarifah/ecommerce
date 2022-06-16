import React, { useState, useEffect } from "react";
import FooterAdmin from "../../components/Footer/FooterAdmin";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./blogAdmin.css";
// import pro1 from "../../components/img/FB1.jpg";
import axios from "axios";

export default function BlogAdmin() {
  const [blog, setBlog] = useState([]);
  const [pict, setPict] = useState([]);
  const [merek, setMerek] = useState([]);
  const [rp, setRp] = useState([]);
  const [desk, setDesk] = useState([]);
  const [tanggal, setTanggal] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/blog")
      .then((res) => {
        console.log("dijupuk saka :", res.data);
        setBlog(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const postBlog = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/blog", {
        pict,
        merek,
        rp,
        desk,
        tanggal,
      })
      .then((res) => console.log("posting data blog", res))
      .catch((err) => console.log(err));
  };

  const delProduct = (id, e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/blog/${id}`)
      .then((res) => console.log("product successfully deleted.", res))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="box">
      <Sidebar />
      <div className="content">
        <HeaderAdmin />
        <div className="blog">
          <div class="row px-xl-5 py-xl-5 overflow-auto">
            <div class="col-lg-12  table-responsive bg-light shadow pb-3  mb-5">
              <div class="text pt-2 px-2 d-flex">
                <h4 class="mt-4">Our Blog</h4>
                <button
                  class="btn btn-outline-dark shadow my-2 mt-3  ml-auto"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <i class="fa-solid fa-circle-plus"></i>&nbsp; add post
                </button>
              </div>

              {/* Modal Start */}
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Add Product
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
                                value={pict}
                                onChange={(e) => setPict(e.target.value)}
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
                                value={merek}
                                onChange={(e) => setMerek(e.target.value)}
                              />
                            </div>
                            <div class="form-group mb-4">
                              <label htmlFor="exampleFormControlInput1">
                                Harga
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="exampleFormControlInput1"
                                value={rp}
                                onChange={(e) => setRp(e.target.value)}
                              />
                            </div>
                            <div class="form-group mb-4">
                              <label htmlFor="exampleFormControlInput1">
                                Detail
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="exampleFormControlInput1"
                                value={desk}
                                onChange={(e) => setDesk(e.target.value)}
                              />
                            </div>
                            <div class="form-group mb-4">
                              <label htmlFor="exampleFormControlInput1">
                                Tanggal
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="exampleFormControlInput1"
                                value={tanggal}
                                onChange={(e) => setTanggal(e.target.value)}
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
                          onClick={postBlog}
                        >
                          <i class="fa-solid fa-circle-check"></i>
                          &nbsp;Post
                        </button>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal End */}

              <hr />
              <div class="kotak">
                <table class="table  table-striped text-center mb-0">
                  <thead class="sticky-top">
                    <tr>
                      <th>No.</th>
                      <th>Products</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Detail</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody class="align-middle">
                    {blog.map((blog, index) => (
                      <tr>
                        <td class="align-middle">{index + 1}</td>
                        <td class="align-middle">
                          <img
                            src={blog.pict}
                            alt="pict"
                            style={{ width: "70px" }}
                          />
                        </td>
                        <td class="align-middle">{blog.merek}</td>
                        <td class="align-middle">{blog.rp}</td>
                        <td class="align-middle td">{blog.desk}</td>
                        <td class="align-middle">{blog.tanggal}</td>
                        <td class="align-middle">
                          <button
                            class="btn btn-sm btn-outline-danger mb-2"
                            onClick={(e) => delProduct(blog.id, e)}
                          >
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
            </div>
          </div>{" "}
        </div>
        <div className="futer">
          <FooterAdmin />
        </div>
      </div>
    </div>
  );
}
