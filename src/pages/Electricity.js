import React from "react";
import "../styles/Electricity.css";
import elec1 from "../pictures/about-image.jpg";
import elec2 from "../pictures/p4.jpg";
import elec3 from "../pictures/p5.jpg";
import elec4 from "../pictures/p6.jpg";

export default function ElectricityServices() {
  return (
    <div className="electricity-page">
      {/* Header Section */}
      <section className="electricity-header text-center">
        <h2 className="fw-bold text-purple mb-3">Electricity & Power Solutions</h2>
        <p className="lead text-dark">
          Timeless Mining Company provides dependable electricity and energy solutions 
          to support mining operations, industrial plants, and regional communities. 
          <br />
          Our power systems ensure stable, sustainable, and cost-efficient energy supply 
          for smooth production and business continuity. 
          <br />
          </p>
      </section>

      {/* Electricity Services Grid */}
      <section className="electricity-grid container mt-5">
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="electricity-card">
              <img src={elec1} alt="Power Plant" className="electricity-img" />
              <p className="electricity-desc">
              Timeless assures general elctrical safety advice for homes,businesses and industries on 
              adoring to electrical regulations and standards.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="electricity-card">
              <img src={elec2} alt="Power Transmission" className="electricity-img" />
              <p className="electricity-desc">
             Our team supply elctrical requirements and equipments,electronic hardware, electronic manufacturing,
             acccessories and other related services to electrical industries.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="electricity-card">
              <img src={elec3} alt="Solar Energy" className="electricity-img" />
              <p className="electricity-desc">
                We integrate renewable energy sources, including solar and hybrid systems, 
                to promote sustainable mining.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="electricity-card">
              <img src={elec4} alt="Maintenance" className="electricity-img" />
              <p className="electricity-desc">
                Timeless Mining Company 
                offers full electrical installation services,maintenance,repair and 
                inspection for both residential, commercial,industrial and newable energy
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
