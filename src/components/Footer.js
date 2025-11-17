import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';
import '../pictures/electricity.jpg'
import pic3 from '../pictures/image.jpeg'

export default function OurFooter() {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row align-items-start">
          {/* Company Info */}
          <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
            <h5 className="fw-bold mb-3 text-white">Timeless Mining Ltd</h5>
            <img
              src={pic3}
              alt="Timeless Mining Logo"
              className="footer-logo mb-3"
            />
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
            <h5 className="fw-bold mb-3 text-white">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
          </div>
          
          

          {/* Contact Info */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fw-bold mb-3 text-white">Contact Us</h5>
            <p className="mb-1"> <b>Email: </b> timeslessmining@gmail.com</p>
            <br/> <br/>
            <p className="mb-1"><b>Contact:  </b> 0393001802</p>
            <br/> <br/>
            <p> <b>Location: </b> Kampala - Uganda (Ntinda)</p>
          </div>
        </div>
      </div>

      <hr className="footer-line" />
      <p className="text-center mb-0 copyright">
        © {new Date().getFullYear()} Timeless Mining Limited. All Rights Reserved
      </p>
    </footer>
  );
}
