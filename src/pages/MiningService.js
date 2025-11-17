import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Mining.css";
import mine1 from "../pictures/mineral6.jpg";
import mine2 from "../pictures/pic4.jpg";
import mine3 from "../pictures/mining2.jpg";
import mine4 from "../pictures/mine4.jpg";
import mine5 from "../pictures/mine5.jpg";
import mine6 from "../pictures/mine6.jpg";

export default function MiningServices() {
  return (
    <div className="mining-page">
      {/* Header Section */}
      <section className="mining-header text-center">
        <h2 className="fw-bold text-gold mb-3">Mining Services</h2>
        <p className="lead text-light mx-auto">
          At Timeless Mining Company, we deliver professional, safe, and sustainable 
          mineral extraction and processing services. Using advanced technologies 
          and skilled specialists, we ensure efficiency, safety, and long-term 
          environmental protection while fueling industrial growth.
        </p>
      </section>
      <br/>

      {/* Section 1 */}
      <section className="mining-features container text-center my-5">

  <div className="row justify-content-center">

    {/* Feature 1 */}
    <div className="col-md-4 col-sm-6 mb-4">
      <img src={mine1} alt="Mining operation" className="circle-img mb-3" />
      <h4 className="fw-bold text-white mb-2">Efficient Mineral Extraction</h4>
      <p className="text-black small-text">
        We employ cutting-edge exploration techniques and eco-friendly extraction
        processes that reduce waste and enhance productivity while meeting global
        sustainability standards.
      </p>
    </div>

    {/* Feature 2 */}
    <div className="col-md-4 col-sm-6 mb-4">
      <img src={mine2} alt="Mining equipment" className="circle-img mb-3" />
      <h4 className="fw-bold text-white mb-2">Technology & Innovation</h4>
      <p className="text-black small-text">
        We offer site preparation, clearing, grading, pit excavation, 
        over burden removal, material handling, quarrying, drenching and  survey support.
      </p>
    </div>

    {/* Feature 3 */}
    <div className="col-md-4 col-sm-6 mb-4">
      <img src={mine3} alt="Mineral processing" className="circle-img mb-3" />
      <h4 className="fw-bold text-white mb-2">Sustainability & Community</h4>
      <p className="text-black small-text">
        We practice responsible mining that preserves the environment,
        empowers local communities, and creates long-term shared value.
      </p>
    </div>

    {/* Feature 4 */}
    <div className="col-md-4 col-sm-6 mb-4">
      <img src={mine4} alt="Mineral processing" className="circle-img mb-3" />
      <h4 className="fw-bold text-white mb-2">Geological Mapping & Survey</h4>
      <p className="text-black small-text">
        At Timeless we do data collection on mineral formation,mapping by 
        creating detailed maps of Geological features,sampling of minerals 
        for analysis and finally analysing data for mineral identification potential.
      </p>
    </div>
    {/* Feature 5 */}
    <div className="col-md-4 col-sm-6 mb-4">
      <img src={mine5} alt="Mineral processing" className="circle-img mb-3" />
      <h4 className="fw-bold text-white mb-2">Mining Consultancy</h4>
      <p className="text-black small-text">
        Timeless offer environmental impact assesment,exploration licence application, 
        mining list application, community consultation, training and capacity building 
        and preparing technical reports on mineral reserves and resources
      </p>
    </div>
    {/* Feature 6 */}
    <div className="col-md-4 col-sm-6 mb-4">
      <img src={mine6} alt="Mineral processing" className="circle-img mb-3" />
      <h4 className="fw-bold text-white mb-2">Documentation</h4>
      <p className="text-black small-text">
        We Offer exploration licence permit to explore an area,
        environmental permit, compliance with environmental regulations,
        sampling and assay reports for lab results samples,geological reports summarising exploration findings
      </p>
    </div>

  </div>

</section>

    </div>
  );
}
