import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { Link } from "react-router-dom";
import { handleLinkClick } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/services.css"
import service1 from '../pictures/about-image.jpg';
import service2 from '../pictures/mining.jpg';
import service3 from '../pictures/pic-2.jpg';



export default function Services() {
  return (
    <div className="services-page container py-5">
      <h2 className="text-center fw-bold text-purple mb-5">
        Our Services
      </h2>

      <div className="row g-5">
        {/* --- Mining Services --- */}
        <div className="col-md-6">
          <div className="service-card d-flex flex-column flex-md-row align-items-center">
            <img
              src={service1}
              alt="Mining Services"
              className="service-image rounded-4 shadow-sm mb-4 mb-md-0 me-md-4"
            />
            <div>
              <h4 className="fw-bold text-purple mb-3">Mining Services</h4>
              <p className="text-dark">
                Timeless Mining Company carries out safe, efficient, and
                environmentally responsible mineral extraction.
              </p>
              <p className="text-dark">
                Our mining processes are guided by advanced technology,
                skilled professionals, and international standards.
              </p>
              <p className="text-dark">
                We focus on delivering high-quality mineral resources that
                support both local development and global industry needs,
                creating sustainable value throughout every stage of production.
              </p>
              {/* <button className="btn btn-purple mt-3">Read more</button> */}
               <Link to="/mining" className="btn btn-purple mt-3" onClick={handleLinkClick}>Read More</Link>
            </div>
          </div>
        </div>

        {/* --- Electricity Supply --- */}
        <div className="col-md-6">
          <div className="service-card d-flex flex-column flex-md-row align-items-center">
            <div className="order-2 order-md-1 me-md-4">
              <h4 className="fw-bold text-purple mb-3">Electricity Supply</h4>
              <p className="text-dark">
                We provide reliable and consistent electricity supply solutions
                designed to power homes, industries, and commercial operations.
              </p>
              <p className="text-dark">
                Our energy services prioritize stability, safety, and long-term
                sustainability to support growing communities and business
                infrastructures.
              </p>
              <p className="text-dark">
                Through effective grid management and dedicated technical
                expertise, we help ensure uninterrupted access to power.
              </p>
               <Link to="/electricity" className="btn btn-purple mt-3" onClick={handleLinkClick}>Read More</Link>
            </div>
            <img
              src={service2}
              alt="Electricity Supply"
              className="service-image rounded-4 shadow-sm mb-4 mb-md-0 order-1 order-md-2"
            />
          </div>
        </div>

        {/* --- Licensed Certification --- */}
        <div className="col-md-6 mx-auto">
          <div className="service-card d-flex flex-column flex-md-row align-items-center">
            <img
              src={service3}
              alt="Licensed Certification"
              className="service-image rounded-4 shadow-sm mb-4 mb-md-0 me-md-4"
            />
            <div>
              <h4 className="fw-bold text-purple mb-3">Licensed Certificated</h4>
              <p className="text-dark">
                Timeless Mining Company offers professional support to mining
                organizations seeking operational licenses and regulatory
                approvals.
              </p>
              <p className="text-dark">
                We guide companies through the complex legal and compliance
                requirements, ensuring full transparency and timely certification.
              </p>
              <p className="text-dark">
                Our team works closely with regulatory authorities to ensure that
                every step meets industry standards without unnecessary delays.
              </p>
             <Link to="/license" className="btn btn-purple mt-3" onClick={handleLinkClick}>Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
