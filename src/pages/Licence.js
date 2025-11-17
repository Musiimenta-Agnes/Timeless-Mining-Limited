import React from "react";
import "../styles/License.css";
import licence1 from '../pictures/certificate.jpg';
import licence2 from '../pictures/certificate1.jpg';
import licence3 from '../pictures/certificate2.jpg';
import licence4 from '../pictures/certificate3.jpg';

export default function LicensePage() {
  return (
    <div className="license-page">
      <section className="license-header text-center">
        <h2 className="fw-bold text-purple mb-3">
          Licenses for Mining Companies
        </h2>
        <p className="lead text-dark">
          Timeless Mining Company offers professional support to mining organizations
          seeking operational licenses and regulatory approval.
          <br />
          We guide companies through the complex legal and regulatory requirements of the
          mining sector, ensuring safety, sustainability, and improved prosperity.
          <br />
          With our guidance, businesses can begin operations confidently and without unnecessary delays.
        </p>
      </section>

      <section className="license-grid container mt-5">
        <div className="row g-4">
          {/* License Card 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="license-card">
              <img
                src={licence1}
                alt="License Certificate"
                className="license-img"
              />
              <p className="license-desc">
                Timeless Mining Company issues licenses to new mining operations
                and ensures security and authorization during operation.
              </p>
            </div>
          </div>

          {/* License Card 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="license-card">
              <img
                src={licence2}
                alt="License Certificate"
                className="license-img"
              />
              <p className="license-desc">
                Timeless Mining Company carries out safe, efficient, and
                environmentally responsible mineral extraction.
              </p>
            </div>
          </div>

          {/* License Card 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="license-card">
              <img
                src={licence3}
                alt="License Certificate"
                className="license-img"
              />
              <p className="license-desc">
                Timeless Mining Company ensures compliance with all
                government regulations and licensing frameworks.
              </p>
            </div>
          </div>

          {/* License Card 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="license-card">
              <img
                src={licence4}
                alt="License Certificate"
                className="license-img"
              />
              <p className="license-desc">
                We assist mining firms to secure the proper mining
                permissions and maintain authorization throughout operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
