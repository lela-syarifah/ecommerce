// import React, { Component, useState } from "react";
// import Sidebar from "../../components/Sidebar/Sidebar";
// import HeaderAdmin from "../../components/Header/HeaderAdmin";
// import FooterAdmin from "../../components/Footer/FooterAdmin";
// import axios from "axios";

// const api = axios.create({
//   baseURL: `http://localhost:8000/products/`,
// });

// class ProductAdmin extends Component {

//   state = {
//     products: [],
//   };

//   constructor() {
//     super();
//     api.get("/").then((res) => {
//       console.log(res.data);
//       this.setState({ products: res.data });
//     });
//   }

//   postProduct = async () => {
//         const [gambar, setGambar] = useState("");
//     const [nama, setNama] = useState("");
//     const [harga, setHarga] = useState("");
//     const [detail, setDetail] = useState("");

//         axios
//           .post("http://localhost:8000/products", {
//             gambar,
//             nama,
//             harga,
//             detail,
//           })
//           .then((res) => console.log(res));

//   }

//   // postProduct = async () => {
//     // const [gambar, setGambar] = useState("");
//     // const [nama, setNama] = useState("");
//     // const [harga, setHarga] = useState("");
//     // const [detail, setDetail] = useState("");

//   //   let res = await api.post("/", { gambar, nama, harga, detail });
//   //   console.log(res);
//   // };

//   render() {
//     return (
//       <div className="box">
//         <Sidebar />
//         <div className="content">
//           <HeaderAdmin />

//           <div className="product">
//             <div class="row px-xl-5 py-xl-5 overflow-auto">
//               <div class="col-lg-12  table-responsive bg-light shadow pb-3  mb-5">
//                 <div class="text pt-2 px-2 d-flex">
//                   <h4 class="mt-4">Our Product</h4>
//                   <button
//                     class="btn btn-outline-dark shadow my-2 mt-3  ml-auto"
//                     type="button"
//                     data-toggle="modal"
//                     data-target="#exampleModal"
//                   >
//                     <i class="fa-solid fa-circle-plus"></i>&nbsp; add product
//                   </button>
//                 </div>
//                 {/* Modal Start */}
//                 <div
//                   class="modal fade"
//                   id="contohModal"
//                   tabIndex="-1"
//                   role="dialog"
//                   aria-labelledby="exampleModalLabel"
//                   aria-hidden="true"
//                 >
//                   <div class="modal-dialog" role="document">
//                     <div class="modal-content">
//                       <div class="modal-header">
//                         <h5 class="modal-title" id="exampleModalLabel">
//                           Update Product
//                         </h5>
//                         <button
//                           type="button"
//                           class="close"
//                           data-dismiss="modal"
//                           aria-label="Close"
//                         >
//                           <span aria-hidden="true">&times;</span>
//                         </button>
//                       </div>
//                       <div class="modal-body">
//                         <div class="row">
//                           <div class="col-12 pt-4 ">
//                             <form>
//                               <div class="form-group mb-4">
//                                 <label htmlFor="exampleFormControlInput1">
//                                   Gambar
//                                 </label>
//                                 <input
//                                   type="text"
//                                   class="form-control"
//                                   id="exampleFormControlInput1"
//                                   value={gambar}
//                                   onChange={(e) => setGambar(e.target.value)}
//                                 />
//                               </div>
//                               <div class="form-group mb-4">
//                                 <label htmlFor="exampleFormControlInput1">
//                                   Nama
//                                 </label>
//                                 <input
//                                   type="text"
//                                   class="form-control"
//                                   id="exampleFormControlInput1"
//                                   value={nama}
//                                   onChange={(e) => setNama(e.target.value)}
//                                 />
//                               </div>
//                               <div class="form-group mb-4">
//                                 <label htmlFor="exampleFormControlInput1">
//                                   Harga
//                                 </label>
//                                 <input
//                                   type="text"
//                                   class="form-control"
//                                   id="exampleFormControlInput1"
//                                   value={harga}
//                                   onChange={(e) => setHarga(e.target.value)}
//                                 />
//                               </div>
//                               <div class="form-group mb-4">
//                                 <label htmlFor="exampleFormControlInput1">
//                                   Detail
//                                 </label>
//                                 <input
//                                   type="text"
//                                   class="form-control"
//                                   id="exampleFormControlInput1"
//                                   value={detail}
//                                   onChange={(e) => setDetail(e.target.value)}
//                                 />
//                               </div>
//                             </form>
//                           </div>
//                         </div>
//                       </div>
//                       <div class="modal-footer">
//                         <button
//                           type="button"
//                           class="btn btn-outline-danger"
//                           data-dismiss="modal"
//                         >
//                           <i class="fa-solid fa-circle-xmark"></i>
//                           &nbsp;Close
//                         </button>
//                         <div class="text-center">
//                           <button
//                             class="btn btn-outline-success"
//                             data-dismiss="modal"
//                             onClick={postProduct}
//                           >
//                             <i class="fa-solid fa-circle-check"></i>
//                             &nbsp;Post
//                           </button>
//                         </div>{" "}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Modal End */}
//                 <hr />
//                 <div class="kotak ">
//                   <table class="table table-striped text-center mb-0">
//                     <thead class="sticky-top">
//                       <tr>
//                         <th>No.</th>
//                         <th>Products</th>
//                         <th>Name</th>
//                         <th>Price</th>
//                         <th>Detail</th>
//                         <th>Action</th>
//                       </tr>
//                     </thead>
//                     <tbody class="align-middle">
//                       {this.state.products.map((products, index) => (
//                         <tr key={index}>
//                           <td class="align-middle">{index + 1}</td>
//                           <td class="align-middle">
//                             <img
//                               src={products.gambar}
//                               alt="product"
//                               style={{ width: "70px" }}
//                             />
//                           </td>
//                           <td class="align-middle">{products.nama}</td>
//                           <td class="align-middle">{products.harga}</td>
//                           <td class="align-middle td">{products.detail}</td>
//                           <td class="align-middle">
//                             <button
//                               class="btn  btn-sm btn-outline-danger mb-2"
//                               onClick={(e) => this.delProduct(products.id, e)}
//                             >
//                               <i class="fa-solid fa-xmark"></i>&nbsp;Remove
//                             </button>
//                             &nbsp;
//                             <button
//                               class="btn btn-sm btn-outline-warning mb-2"
//                               type="button"
//                               data-toggle="modal"
//                               data-target="#contohModal"
//                             >
//                               <i class="fa-solid fa-pen-to-square"></i>
//                               &nbsp;Edit
//                             </button>
//                           </td>
//                           {/* Modal Start */}
//                           {/* <div
//                             class="modal fade"
//                             id="contohModal"
//                             tabIndex="-1"
//                             role="dialog"
//                             aria-labelledby="exampleModalLabel"
//                             aria-hidden="true"
//                           >
//                             <div class="modal-dialog" role="document">
//                               <div class="modal-content">
//                                 <div class="modal-header">
//                                   <h5
//                                     class="modal-title"
//                                     id="exampleModalLabel"
//                                   >
//                                     Update Product
//                                   </h5>
//                                   <button
//                                     type="button"
//                                     class="close"
//                                     data-dismiss="modal"
//                                     aria-label="Close"
//                                   >
//                                     <span aria-hidden="true">&times;</span>
//                                   </button>
//                                 </div>
//                                 <div class="modal-body">
//                                   <div class="row">
//                                     <div class="col-12 pt-4 ">
//                                       <form>
//                                         <div class="form-group mb-4">
//                                           <label htmlFor="exampleFormControlInput1">
//                                             Gambar
//                                           </label>
//                                           <input
//                                             type="text"
//                                             class="form-control"
//                                             id="exampleFormControlInput1"
//                                             value={gambar}
//                                             onChange={(e) =>
//                                               setGambar(e.target.value)
//                                             }
//                                           />
//                                         </div>
//                                         <div class="form-group mb-4">
//                                           <label htmlFor="exampleFormControlInput1">
//                                             Nama
//                                           </label>
//                                           <input
//                                             type="text"
//                                             class="form-control"
//                                             id="exampleFormControlInput1"
//                                             value={nama}
//                                             onChange={(e) =>
//                                               setNama(e.target.value)
//                                             }
//                                           />
//                                         </div>
//                                         <div class="form-group mb-4">
//                                           <label htmlFor="exampleFormControlInput1">
//                                             Harga
//                                           </label>
//                                           <input
//                                             type="text"
//                                             class="form-control"
//                                             id="exampleFormControlInput1"
//                                             value={harga}
//                                             onChange={(e) =>
//                                               setHarga(e.target.value)
//                                             }
//                                           />
//                                         </div>
//                                         <div class="form-group mb-4">
//                                           <label htmlFor="exampleFormControlInput1">
//                                             Detail
//                                           </label>
//                                           <input
//                                             type="text"
//                                             class="form-control"
//                                             id="exampleFormControlInput1"
//                                             value={detail}
//                                             onChange={(e) =>
//                                               setDetail(e.target.value)
//                                             }
//                                           />
//                                         </div>
//                                       </form>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div class="modal-footer">
//                                   <button
//                                     type="button"
//                                     class="btn btn-outline-danger"
//                                     data-dismiss="modal"
//                                   >
//                                     <i class="fa-solid fa-circle-xmark"></i>
//                                     &nbsp;Close
//                                   </button>
//                                   <div class="text-center">
//                                     <button
//                                       class="btn btn-outline-success"
//                                       data-dismiss="modal"
//                                       onClick={postProduct}
//                                     >
//                                       <i class="fa-solid fa-circle-check"></i>
//                                       &nbsp;Post
//                                     </button>
//                                   </div>{" "}
//                                 </div>
//                               </div>
//                             </div>
//                           </div> */}
//                           {/* Modal End */}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="futer">
//             <FooterAdmin />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ProductAdmin;

import React, { useState, useEffect } from "react";
import FooterAdmin from "../../components/Footer/FooterAdmin";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import Sidebar from "../../components/Sidebar/Sidebar";
// import pro1 from "../../components/img/FB1.jpg";
import "./productAdmin.css";
import axios from "axios";

export default function ProductAdmin() {
  const [products, setProducts] = useState([]);

  const [gambar, setGambar] = useState("");
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => {
        console.log("diambil dari :", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const postProduct = () => {
    axios
      .post("http://localhost:8000/products", {
        gambar,
        nama,
        harga,
        detail,
      })
      .then((res) => console.log(res));
  };

  // const putProduct = (id, val) => {
  //   // e.preventDefault();
  //   axios.put(`http://localhost:8000/products/${id}`, {

  //   })
  // };

  const delProduct = (id, e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/products/${id}`)
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

        <div className="product">
          <div class="row px-xl-5 py-xl-5 overflow-auto">
            <div class="col-lg-12  table-responsive bg-light shadow pb-3  mb-5">
              <div class="text pt-2 px-2 d-flex">
                <h4 class="mt-4">Our Product</h4>
                <button
                  class="btn btn-outline-dark shadow my-2 mt-3  ml-auto"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <i class="fa-solid fa-circle-plus"></i>&nbsp; add product
                </button>
              </div>
              {/* Modal Start */}
              <div
                class="modal fade"
                id="exampleModal"
                tabIndex="-1"
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
                                value={gambar}
                                onChange={(e) => setGambar(e.target.value)}
                              />
                            </div>
                            <div class="form-group mb-4">
                              <label htmlFor="exampleFormControlInput1">
                                Nama
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="exampleFormControlInput1"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
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
                                value={harga}
                                onChange={(e) => setHarga(e.target.value)}
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
                                value={detail}
                                onChange={(e) => setDetail(e.target.value)}
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
                          onClick={postProduct}
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
              <div class="kotak ">
                <table class="table table-striped text-center mb-0">
                  <thead class="sticky-top">
                    <tr>
                      <th>No.</th>
                      <th>Products</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Detail</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody class="align-middle">
                    {products.map((products, index) => (
                      <tr key={index}>
                        <td class="align-middle">{index + 1}</td>
                        <td class="align-middle">
                          <img
                            src={products.gambar}
                            alt="product"
                            style={{ width: "70px" }}
                          />
                        </td>
                        <td class="align-middle">{products.nama}</td>
                        <td class="align-middle">{products.harga}</td>
                        <td class="align-middle td">{products.detail}</td>
                        <td class="align-middle">
                          <button
                            class="btn  btn-sm btn-outline-danger mb-2"
                            onClick={(e) => delProduct(products.id, e)}
                          >
                            <i class="fa-solid fa-xmark"></i>&nbsp;Remove
                          </button>
                          &nbsp;
                          <button
                            class="btn btn-sm btn-outline-warning mb-2"
                            type="button"
                            data-toggle="modal"
                            data-target="#contohModal"
                          >
                            <i class="fa-solid fa-pen-to-square"></i>&nbsp;Edit
                          </button>
                        </td>
                        {/* Modal Start */}
                        <div
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
                                  Update Product
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
                                          value={gambar}
                                          onChange={(e) =>
                                            setGambar(e.target.value)
                                          }
                                        />
                                      </div>
                                      <div class="form-group mb-4">
                                        <label htmlFor="exampleFormControlInput1">
                                          Nama
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="exampleFormControlInput1"
                                          value={nama}
                                          onChange={(e) =>
                                            setNama(e.target.value)
                                          }
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
                                          value={harga}
                                          onChange={(e) =>
                                            setHarga(e.target.value)
                                          }
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
                                          value={detail}
                                          onChange={(e) =>
                                            setDetail(e.target.value)
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
                                    onClick={postProduct}
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
