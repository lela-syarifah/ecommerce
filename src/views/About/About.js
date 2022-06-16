import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "../views.css";
import skncr from "../../components/img/skincare.jpg";
import ttd from "../../components/img/ttd.png";
import axios from "axios";

export default function About() {
  // function About start
  const [about, setAbout] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/about")
      .then((res) => {
        console.log("getting from :", res.data);
        setAbout(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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

  // const putProduct = (id, value, e) => {
  //   e.preventDefault();
  //   axios.put(`http://localhost:8000/products/${id}`, );
  // };

  return (
    <div className="all">
      <Navbar />
      {/* Page Header Start  */}
      <div
        className="container-fluid  mb-5"
        style={{ backgroundColor: "rgb(145, 210, 212)" }}
      >
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "300px" }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            About Us
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="/" style={{ color: "rgb(5, 138, 143)" }}>
                Home
              </a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">About</p>
          </div>
        </div>
      </div>
      {/* Page Header End  */}

      {/* Shop Detail Start  */}
      <div className="container-fluid py-5 ">
        <div className="row px-xl-5 ">
          <div className="col-lg-5 pb-5">
            <img className=" w-100 h-100 " src={skncr} alt="skincare" />
          </div>

          <div className="col-lg-7 pb-5">
            <h3 className="font-weight-semi-bold">Welcome to Hara</h3>
            <br />
            <div className="d-flex mb-3">
              <p className="mb-4">
                Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr
                erat diam stet sit clita ea. Sanc invidunt ipsum et, labore
                clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy.
                Accus labore stet, est lorem sit diam sea et justo, amet at
                lorem et eirmod ipsum diam et rebum kasd rebum.
              </p>
            </div>
            <div className="d-flex mb-3">
              <p className="mb-4">
                <b>
                  "iusto minus, reiciendis adipisci. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Sequi quam sit ducimus quo
                  quidem atque quis soluta totam? Assumenda adipisci deserunt
                  voluptatibus esse sint ea culpa nostrum officia, dolores
                  inventore!. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit."
                </b>
              </p>
            </div>
            <div className="d-flex align-items-center mb-4 pt-2">
              <img
                src={ttd}
                alt="ttd"
                style={{ width: "100px", height: "85px" }}
              />
              &nbsp; &nbsp; &nbsp;
              <p>
                <b>James</b>
                <br />
                James Bank - CEO
              </p>
            </div>
          </div>
        </div>
        <div className="row px-xl-5  ">
          {about.map((about, index) => (
            <div className="col">
              <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                <a
                  className="nav-item nav-link active"
                  data-toggle="tab"
                  href="#tab-pane-1"
                  style={{ textColor: "rgb(36, 166, 170)" }}
                >
                  {about.kategori}
                </a>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  {about.konten}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Shop Detail End  */}

      {/* Products Start  */}
      <div className="container-fluid py-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5 pb-3">
            <span className="px-2 ">Our Team</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3 text-center">
          {our.map((our, index) => (
            <div className="col-lg-4 col-md-6 ">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: "30px" }}
              >
                <img className="img-fluid gmbr" src={our.person} alt="" />

                <br />
                <h5 className="font-weight-semi-bold m-0">{our.name}</h5>
                <p>{our.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Products End  */}
    </div>
  );
}
