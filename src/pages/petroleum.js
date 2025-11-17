import React from "react";
import "../styles/petroleum.css";
import petroleum1 from "../pictures/petroleum.jpg";
import petroleum2 from "../pictures/petro1.jpg";
import petroleum3 from "../pictures/petrol2.jpg";
import petroleum4 from "../pictures/fuel-station.jpg";

export default function PetroleumPage() {
  return (
    <div className="petroleum-page">
      <section className="petroleum-header text-center">
        <h2 className="fw-bold text-purple mb-3">Petroleum Supply & Distribution</h2>
        <p className="lead text-dark">
          Timeless Mining Company is dedicated to the sourcing, refining, and 
          distribution of high-quality petroleum products across regional and 
          international markets. 
          <br />
          We are committed to ensuring a reliable, efficient, and sustainable 
          fuel supply chain that meets industrial, commercial, and domestic energy needs.
          <br />
          
        </p>
      </section>

      <section className="petroleum-grid container mt-5">
        <div className="row g-4">
          {/* Petroleum Card 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="petroleum-card">
              <img
                src={petroleum1}
                alt="Petroleum Distribution"
                className="petroleum-img"
              />
              <p className="petroleum-desc">
                Our petroleum division manages safe and efficient fuel sourcing, 
                refining, and delivery across multiple regions.
              </p>
            </div>
          </div>

          {/* Petroleum Card 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="petroleum-card">
              <img
                src={petroleum2}
                alt="Fuel Transportation"
                className="petroleum-img"
              />
              <p className="petroleum-desc">
                We operate modern transportation fleets and tankers that ensure 
                the timely movement of fuel products while maintaining safety standards.
              </p>
            </div>
          </div>

          {/* Petroleum Card 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="petroleum-card">
              <img
                src={petroleum3}
                alt="Oil Storage Facilities"
                className="petroleum-img"
              />
              <p className="petroleum-desc">
                Our advanced storage facilities guarantee secure handling and 
                preservation of petroleum products before distribution.
              </p>
            </div>
          </div>

          {/* Petroleum Card 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="petroleum-card">
              <img
                src={petroleum4}
                alt="Fuel Stations"
                className="petroleum-img"
              />
              <p className="petroleum-desc">
                We offer pipe installation and maintenance,leak detection and repair,
                pipeline inspection and testing,pipe fabrication and supply, 
                corrosion protection and coating services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
