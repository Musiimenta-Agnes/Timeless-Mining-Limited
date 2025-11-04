import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { Link } from 'react-router-dom';
import '../styles/About.css';
//import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import about1 from '../pictures/about-image.jpg';
import about2 from '../pictures/mining.jpg';
import about3 from '../pictures/pic-2.jpg';
import pic4 from '../pictures/pic4.jpg'

export default function About() {
  return (
    <div className="about-page container-fluid px-md-5 py-5">

      {/* MISSION + VISION SECTION */}
      <div className="row align-items-center mb-5">
        <div className="col-md-7 mb-4 mb-md-0">
          <h3 className="fw-bold text-purple mb-3">Mission</h3>
          <p className="text-dark fs-5">
            To deliver high-quality mineral resources through responsible mining
            practices that empower communities, protect the environment, and
            contribute to national development.
          </p>

          <h3 className="fw-bold text-purple mt-4 mb-3">Vision</h3>
          <p className="text-dark fs-5">
            To become a leading mining company recognized for innovation,
            integrity, and sustainable resource management across Africa.
          </p>
        </div>

        <div className="col-md-5 text-center">
          <img
            src={about1}
            alt="Mining Worker"
            className="img-fluid rounded-4 shadow-sm about-image"
          />
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
        className="overall-section my-5 text-center text-white d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage:  `url(${pic4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "450px",
          borderRadius: "12px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="overlay"></div>
        <div className="content position-relative px-4 px-md-5">
          <h2 className="fw-bold mb-4">Overall about Timeless Mining</h2>
          <p className="fs-5 mb-3">
            Timeless Mining Company delivers high-quality mineral extraction,
            reliable electricity supply, and trusted licensing support for mining
            operations.
          </p>
          <p className="fs-5 mb-3">
            We work with innovation, transparency, and efficiency to build lasting
            value.
          </p>
          <p className="fs-5">
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
          <div className="row justify-content-center align-items-center">
            <div className="col-6 col-md-4 mb-4">
              <img
                src={about2}
                alt="UEDCL"
                className="img-fluid partner-logo"
              />
            </div>
            <div className="col-6 col-md-4 mb-4">
              <img
                src={about3}
                alt="Tembo Steels"
                className="img-fluid partner-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function AboutUs() {
//   return (
//     <div className="about-page container-fluid py-5 px-md-5">
//       {/* Mission and Vision Section */}
//       <div className="row align-items-center mb-5">
//         {/* Left Side: Mission & Vision */}
//         <div className="col-md-7 mb-4 mb-md-0">
//           <h3 className="fw-bold text-purple mb-3">Mission</h3>
//           <p className="text-dark fs-5">
//             To deliver high-quality mineral resources through responsible mining
//             practices that empower communities, protect the environment, and
//             contribute to national development.
//           </p>

//           <h3 className="fw-bold text-purple mt-4 mb-3">Vision</h3>
//           <p className="text-dark fs-5">
//             To become a leading mining company recognized for innovation,
//             integrity, and sustainable resource management across Africa.
//           </p>
//         </div>

//         {/* Right Side: Image */}
//         <div className="col-md-5 text-center">
//           <img
//             src="/images/about-image.jpg" 
//             alt="Mining Worker"
//             className="img-fluid rounded-4 shadow-sm about-image"
//           />
//         </div>
//       </div>

//       {/* Core Values Section */}
//       <div className="core-values p-4 p-md-5 mt-4 mx-auto">
//         <h2 className="text-center fw-bold mb-5">Core Values</h2>
//         <div className="row text-center">
//           {/* Sustainability */}
//           <div className="col-md-4 mb-4 mb-md-0 border-end border-purple">
//             <h5 className="fw-bold text-purple mb-3">Sustainability</h5>
//             <p className="mb-0">
//               We are committed to mining practices that protect the environment.
//             </p>
//           </div>

//           {/* Safety */}
//           <div className="col-md-4 mb-4 mb-md-0 border-end border-purple">
//             <h5 className="fw-bold text-purple mb-3">Safety</h5>
//             <p className="mb-0">
//               We prioritize the health and safety of our employees.
//             </p>
//           </div>

//           {/* Innovation */}
//           <div className="col-md-4">
//             <h5 className="fw-bold text-purple mb-3">Innovation</h5>
//             <p className="mb-0">
//               We embrace modern technologies and continuous improvement.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
