import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./contact.css";

export default function Contact() {
  const [kontak, setKontak] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/contact")
      .then((res) => {
        console.log("dapat dari :", res.data);
        setKontak(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
            Contact Us
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="/" style={{ color: "rgb(5, 138, 143)" }}>
                Home
              </a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Contact</p>
          </div>
        </div>
      </div>
      {/* Page Header End  */}

      {/* Contact Start  */}
      {kontak.map((kontak, index) => (
        <div className="container-fluid pt-5">
          <div className="text-center mb-4">
            <h2 className="section-title px-5">
              <span className="px-2">Store Location</span>
            </h2>
            <div className="container-fluid pt-4 px-xl-5">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="peta"
                  className="embed-responsive-item"
                  src={kontak.maps}
                ></iframe>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="text-center mb-5">
            <h2 className="section-title px-5 ">
              <span className="px-2">Send Message</span>
            </h2>
            <p>
              for Fill out this form and our specialistis will contact you
              shortly for detailed consultation.
            </p>
          </div>
          <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
              <div className="contact-form">
                <form
                  name="sentMessage"
                  id="contactForm"
                  noValidate="novalidate"
                >
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required="required"
                      data-validation-required-message="Please enter your name"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      required="required"
                      data-validation-required-message="Please enter your email"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control"
                      rows="6"
                      id="message"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter your message"
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div>
                    <button
                      className="btn  py-2 px-4"
                      type="submit"
                      style={{
                        backgroundColor: "rgb(5, 138, 143)",
                        color: "white",
                      }}
                      id="sendMessageButton"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 mb-5">
              <h5 className="font-weight-semi-bold mb-3">
                Keep In Touch With Us
              </h5>
              <p>
                We're talking about clean beauty gift sets, of course - and
                we've got a bouquet of beauties for yourself or someone you
                love.
              </p>
              <div className="d-flex flex-column mb-3 pt-4">
                <h5 className="font-weight-semi-bold mb-3">Store</h5>
                <p className="mb-2 alamat">
                  <i
                    className="fa fa-map-marker-alt  mr-3"
                    style={{ color: "rgb(5, 138, 143)" }}
                  ></i>
                  {kontak.alamat}
                </p>
                <p className="mb-2">
                  <i
                    className="fa fa-envelope  mr-3"
                    style={{ color: "rgb(5, 138, 143)" }}
                  ></i>
                  {kontak.email}
                </p>
                <p className="mb-2">
                  <i
                    className="fa fa-phone-alt  mr-3"
                    style={{ color: "rgb(5, 138, 143)" }}
                  ></i>
                  {kontak.telp}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Contact End  */}
    </div>
  );
}
