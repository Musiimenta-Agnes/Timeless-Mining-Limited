import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { Link } from 'react-router-dom';
import '../styles/About.css';
//import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import about1 from '../pictures/p1.png';
import about2 from '../pictures/uetcl.png';
import about3 from '../pictures/p3.png';
import about4 from '../pictures/partner5.jpg';

import pic4 from '../pictures/p5.jpg'

export default function About() {
  return (
    <div className="about-page container-fluid px-md-5 py-5">

      {/* MISSION + VISION SECTION */}
      <div className="row justify-content-center mb-5">

        {/* --- Mission Card --- */}
        <div className="col-md-5 mb-4">
          <div 
            className="p-4 h-100"
            style={{
              background: "#ffffffff",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              borderLeft: "5px solid #6f42c1"
            }}
          >
            <div className="d-flex align-items-center mb-3">
              <div 
                style={{
                  width: "55px",
                  height: "55px",
                  background: "#6f42c1",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <i className="fas fa-bullseye text-white fs-4"></i>
              </div>
              <h3 className="fw-bold text-purple ms-3 mb-0">Mission</h3>
            </div>

            <p className="text-dark fs-5">
              To deliver high-quality mineral resources through responsible mining
              practices that empower communities, protect the environment, and
              contribute to national development.
            </p>
          </div>
        </div>

        {/* --- Vision Card --- */}
        <div className="col-md-5 mb-4">
          <div 
            className="p-4 h-100"
            style={{
              background: "#ffffff",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              borderLeft: "5px solid #6f42c1"
            }}
          >
            <div className="d-flex align-items-center mb-3">
              <div 
                style={{
                  width: "55px",
                  height: "55px",
                  background: "#6f42c1",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <i className="fas fa-eye text-white fs-4"></i>
              </div>
              <h3 className="fw-bold text-purple ms-3 mb-0">Vision</h3>
            </div>

            <p className="text-dark fs-5">
              To become a leading mining company recognized for innovation,
              integrity, and sustainable resource management across Africa.
            </p>
          </div>
        </div>

      </div>

      {/* CORE VALUES SECTION */}
      <div className="core-values p-4 p-md-5 mt-4 mx-auto">
        <h2 className="text-center fw-bold mb-5">Core Values</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4 mb-md-0 border-end border-purple">
            <h5 className="fw-bold text-purple mb-3">Sustainability</h5>
            <p className="mb-0">
              We are committed to mining practices that protect the environment.
            </p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0 border-end border-purple">
            <h5 className="fw-bold text-purple mb-3">Safety</h5>
            <p className="mb-0">
              We prioritize the health and safety of our employees.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold text-purple mb-3">Innovation</h5>
            <p className="mb-0">
              We embrace modern technologies and continuous improvement.
            </p>
          </div>
        </div>
      </div>

      {/* OVERALL ABOUT SECTION */}
      <div
        className="overall-section my-5 d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${pic4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "550px",
          borderRadius: "12px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dark overlay for readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.35)",
            zIndex: 1,
          }}
        ></div>

        {/* LIGHT CARD ON THE IMAGE */}
        <div
          className="text-center"
          style={{
            position: "relative",
            zIndex: 2,
            background: "rgba(194, 181, 241, 0.85)",
            borderRadius: "15px",
            padding: "30px 25px",
            maxWidth: "750px",
            width: "100%",
            boxShadow: "0 4px 15px rgba(74, 72, 72, 0.2)",
            borderLeft: "5px solid #6f42c1",
            minHeight: "auto",
            opacity: 0.5,
          }}
        >
          <h2 className="fw-bold mb-4 text-dark">Overall about Timeless Mining</h2>

          <p className="fs-5 mb-3 text-black">
            Timeless Mining Company delivers high-quality mineral extraction,
            reliable electricity supply, and trusted licensing support for mining
            operations.
          </p>

          <p className="fs-5 mb-3 text-black">
            We work with innovation, transparency, and efficiency to build lasting
            value.
          </p>

          <p className="fs-5 text-black">
            We also offer career opportunities for individuals who want to grow
            with us, contribute to meaningful projects, and help shape the future
            of mining and energy.
          </p>
        </div>
      </div>

      {/* PARTNERS SECTION */}
      <div className="partners-section text-center py-5">
        <h2 className="fw-bold mb-3">
          Partners with Timeless Mining Company
        </h2>
        <p className="fs-5 mb-5 mx-auto" style={{ maxWidth: "800px" }}>
          Timeless Mining Company believes in working together to grow stronger.
          By partnering, we support better energy access, stronger infrastructure,
          and community development.
        </p>

        <div className="partners-box p-4 p-md-5 mx-auto">
          <h3 className="fw-bold text-purple mb-5">Our partners</h3>
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <img
                src={about3}
                alt="UEDCL"
                className="img-fluid partner-logo"
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <img
                src={about1}
                alt="Tembo Steels"
                className="img-fluid partner-logo"
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <img
                src={about2}
                alt="UETCL"
                className="img-fluid partner-logo"
              />
            </div>
             <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <img
                src={about4}
                alt="Ministry"
                className="img-fluid partner-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}










