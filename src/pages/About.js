import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "./pages.css";
import skncr from "../components/img/skincare.jpg";
import ttd from "../components/img/ttd.png";
import tim1 from "../components/img/pp-11.jpg";
import tim2 from "../components/img/pp-8.png";
import tim3 from "../components/img/pp-9.jpg";
import tim4 from "../components/img/pp-4.jpg";
import tim5 from "../components/img/pp-3.jpg";
import tim6 from "../components/img/pp-10.jpg";

export default class About extends Component {
  render() {
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
              <p className="m-0">Shop Detail</p>
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
                  clita lorem magna lorem ut. Erat lorem duo dolor no sea
                  nonumy. Accus labore stet, est lorem sit diam sea et justo,
                  amet at lorem et eirmod ipsum diam et rebum kasd rebum.
                </p>
              </div>
              <div className="d-flex mb-3">
                <p className="mb-4">
                  <b>
                    "iusto minus, reiciendis adipisci. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Sequi quam sit ducimus
                    quo quidem atque quis soluta totam? Assumenda adipisci
                    deserunt voluptatibus esse sint ea culpa nostrum officia,
                    dolores inventore!. Lorem ipsum dolor sit, amet consectetur
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
            <div className="col">
              <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                <a
                  className="nav-item nav-link active"
                  data-toggle="tab"
                  href="#tab-pane-1"
                  style={{ textColor: "rgb(36, 166, 170)" }}
                >
                  Our Mission
                </a>
                <a
                  className="nav-item nav-link"
                  data-toggle="tab"
                  href="#tab-pane-2"
                  style={{ textColor: "rgb(36, 166, 170)" }}
                >
                  Creative
                </a>
                <a
                  className="nav-item nav-link"
                  data-toggle="tab"
                  href="#tab-pane-3"
                  style={{ textColor: "rgb(36, 166, 170)" }}
                >
                  Sustainability
                </a>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <h4 className="mb-3">Mission</h4>
                  <p>
                    Dear friends, Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Impedit animi amet quo, consequatur iste
                    tempore sed itaque! Saepe sed aperiam ullam. Provident
                    tempora, dolores eum accusamus iste fuga debitis laboriosam?
                  </p>
                  <p>
                    Dolore magna est eirmod sanctus dolor, amet diam et eirmod
                    et ipsum. Amet dolore tempor consetetur sed lorem dolor sit
                    lorem tempor. Gubergren amet amet labore sadipscing clita
                    clita diam clita. Sea amet et sed ipsum lorem elitr et, amet
                    et labore voluptua sit rebum. Ea erat sed et diam takimata
                    sed justo. Magna takimata justo et amet magna et.
                  </p>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <h4 className="mb-3">Creative</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    possimus, cupiditate repudiandae repellat, inventore ab
                    exercitationem necessitatibus laudantium porro at, impedit
                    architecto! Consequuntur incidunt impedit animi in veniam
                    expedita doloremque.
                  </p>
                </div>
                <div className="tab-pane fade" id="tab-pane-3">
                  <h4 className="mb-3">Sustainability</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officiis, cumque. Cupiditate perferendis dolor consequatur
                    ad ullam culpa aut ex itaque eligendi error, nam inventore
                    tenetur doloremque atque asperiores minus nisi.
                  </p>
                </div>
              </div>
            </div>
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
            <div className="col-lg-4 col-md-6 ">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: "30px" }}
              >
                <img className="img-fluid gmbr" src={tim1} alt="" />

                <br />
                <h5 className="font-weight-semi-bold m-0">Cody Fisher</h5>
                <p>MCDonal's</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: "30px" }}
              >
                <img className="img-fluid gmbr" src={tim2} alt="" />

                <br />
                <h5 className="font-weight-semi-bold m-0">Floyd Miles</h5>
                <p>MasterCard</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: "30px" }}
              >
                <img className="img-fluid gmbr" src={tim3} alt="" />

                <br />
                <h5 className="font-weight-semi-bold m-0">Clean Eyes</h5>
                <p>Starts from $18.00</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: "30px" }}
              >
                <img className="img-fluid gmbr" src={tim4} alt="" />

                <br />
                <h5 className="font-weight-semi-bold m-0">Skincare</h5>
                <p>Starts from $18.00</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: "30px" }}
              >
                <img className="img-fluid gmbr" src={tim5} alt="" />

                <br />
                <h5 className="font-weight-semi-bold m-0">Makeup</h5>
                <p>Starts from $22.00</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: "30px" }}
              >
                <img className="img-fluid gmbr" src={tim6} alt="" />

                <br />
                <h5 className="font-weight-semi-bold m-0">Clean Eyes</h5>
                <p>Starts from $18.00</p>
              </div>
            </div>
          </div>
        </div>
        {/* Products End  */}
      </div>
    );
  }
}
