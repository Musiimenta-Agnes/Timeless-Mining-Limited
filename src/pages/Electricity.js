import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Electricity.css"
import min1 from '../pictures/about-image.jpg';
import min2 from '../pictures/mining.jpg';
import min3 from '../pictures/pic-2.jpg';


export default function ElectricityServices() {
  return (
    <div className="electricity-page container py-5">
      <h2 className="text-center text-purple fw-bold mb-5">Mining Services</h2>

      {/* Section 1 */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src={min1}
            alt="electricity"
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <p className="text-dark fs-5">
            Timeless Mining Company carries out safe, efficient, and
            environmentally responsible mineral extraction.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="row align-items-center mb-5 flex-md-row-reverse">
        <div className="col-md-6">
          <img
            src={min2}
            alt="electricity"
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <p className="text-dark fs-5">
            Timeless Mining Company carries out safe, efficient, and
            environmentally responsible mineral extraction.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src={min3}
            alt="electricity"
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <p className="text-dark fs-5">
            Timeless Mining Company carries out safe, efficient, and
            environmentally responsible mineral extraction.
          </p>
        </div>
      </div>
    </div>
  );
}
