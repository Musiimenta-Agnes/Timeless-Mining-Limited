import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import miningImg from "../pictures/pic4.jpg";
import electricityImg from "../pictures/p5.jpg";
import certificateImg from "../pictures/certificate.jpg";
import petroleumImg from "../pictures/petroleum.jpg";

const handleLinkClick = () => {
  window.scrollTo(0, 0);
};

export default function Services() {
  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`
        .service-card {
          background: #f9eff6ff;
          border-radius: 15px;
          padding: 20px;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 2px solid #950fd3ff;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0px 8px 20px rgba(0,0,0,0.15);
        }

        .service-img {
          width: 100%;
          height: 250px;             /* fix image size */
          object-fit: cover;         /* crop to fit neatly */
          border-radius: 12px;
        }

        .service-card h4 {
          font-size: 1.1rem;
          font-weight: bold;
          color: #012850;
        }

        .btn-purple {
          background: #950fd3ff;
          color: #fff;
          border-radius: 20px;
          padding: 6px 18px;
          font-size: 0.9rem;
        }

        

        .btn-purple:hover {
          background: black;
          color: white;
        }
      `}</style>

      <div className="services-page">
        <section className="text-center mb-5"
  style={{
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderBottom: "5px solid #6f42c1",
    borderLeft: "5px solid #6f42c1",
  }}>
          <h2 className="fw-bold text-purple">Our Services</h2>
          <p className="lead text-dark mt-3">
            “Timeless Mining Company provides a wide range of professional services dedicated to supporting the mining, energy, and petroleum industries. Our expertise spans resource extraction, power supply, regulatory compliance, and infrastructure development! ensuring that businesses operate safely, efficiently, and in alignment with national and international standards.”
          </p>
        </section>

        <section className="container">
          <div className="row g-4">

            {/* --- Mining Service --- */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card text-center shadow-sm">
                <img src={miningImg} alt="Mining" className="service-img mb-3" />
                <h4>Mining Services</h4>
                <p className="text-dark small">
                  We conduct safe and efficient mineral extraction supported by advanced technologies.
                </p>
                <Link to="/mining" className="btn btn-purple mt-2" onClick={handleLinkClick}>
                  Read More
                </Link>
              </div>
            </div>

            {/* --- Electricity --- */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card text-center shadow-sm">
                <img src={electricityImg} alt="Electricity" className="service-img mb-3" />
                <h4>Electricity Supply</h4>
                <p className="text-dark small">
                  We deliver reliable and sustainable electricity solutions for all operations.
                </p>
                <Link to="/electricity" className="btn btn-purple mt-2" onClick={handleLinkClick}>
                  Read More
                </Link>
              </div>
            </div>

            {/* --- Petroleum --- */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card text-center shadow-sm">
                <img src={petroleumImg} alt="Petroleum" className="service-img mb-3" />
                <h4>Petroleum Supply</h4>
                <p className="text-dark small">
                  We source and distribute petroleum products with strict quality standards.
                </p>
                <Link to="/petroleum" className="btn btn-purple mt-2" onClick={handleLinkClick}>
                  Read More
                </Link>
              </div>
            </div>

            {/* --- License Certification --- */}
            <div className="col-md-6 col-lg-3">
              <div className="service-card text-center shadow-sm">
                <img src={certificateImg} alt="License" className="service-img mb-3" />
                <h4>Licensed Certification</h4>
                <p className="text-dark small">
                  We help companies obtain mining licenses and comply with regulations.
                </p>
                <Link to="/license" className="btn btn-purple mt-2" onClick={handleLinkClick}>
                  Read More
                </Link>
              </div>
            </div>

          </div>
        </section>
        <br  /><br  />
      </div>
    </>
  );
}
