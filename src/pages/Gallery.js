import React, { useState } from "react";
import "../styles/Gallery.css";

import Image1 from "../pictures/pic1.jpg";
import Image2 from "../pictures/pic2.jpg";
import Image3 from "../pictures/pic3.jpg";
import Image4 from "../pictures/elect1.jpg";
import Image5 from "../pictures/partner1.jpg";
import Image6 from "../pictures/partner2.jpg";
import Image7 from "../pictures/electricity.jpg";
import Image8 from "../pictures/pic4.jpg";
import Image9 from "../pictures/mineral1.jpg";
import Image10 from "../pictures/mineral2.jpg";
import Image11 from "../pictures/mineral3.jpg";
import Image12 from "../pictures/pic5.jpg";

// (Duplicates kept because you imported them, but grouped correctly)
import Image13 from "../pictures/mining.jpg";
import Image14 from "../pictures/mining1.jpg";
import Image15 from "../pictures/mining2.jpg";
import Image16 from "../pictures/petroleum.jpg";
import Image17 from "../pictures/partner3.jpg";
import Image18 from "../pictures/partner4.jpg";
import Image19 from "../pictures/p5.jpg";
import Image20 from "../pictures/mining3.jpg";
import Image21 from "../pictures/mineral4.jpg";
import Image22 from "../pictures/mineral5.jpg";
import Image23 from "../pictures/mineral6.jpg";
import Image24 from "../pictures/mining4.jpg";
import Image25 from "../pictures/mining5.jpg";

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  // CLEAN + ORGANIZED IMAGES
  const images = [
    // ---------------- Electricity ----------------
    { id: 1, src: Image4, category: "Electricity", caption: "Electricity Works" },
    { id: 7, src: Image7, category: "Electricity", caption: "Electricity Supply" },
    { id: 16, src: Image16, category: "Electricity", caption: "Electricity Operations" },
    { id: 19, src: Image19, category: "Electricity", caption: "Electricity Distribution" },

    // ---------------- Mining ----------------
    { id: 2, src: Image2, category: "Mining", caption: "Mining Site" },
    { id: 26, src: Image1,category: "Mining", caption: "Ceo" },
    { id: 3, src: Image3, category: "Mining", caption: "Mining Process" },
    { id: 8, src: Image8, category: "Mining", caption: "Mining Work" },
    { id: 12, src: Image12, category: "Mining", caption: "Mining Operations" },
    { id: 13, src: Image13, category: "Mining", caption: "Mining Activities" },
    { id: 14, src: Image14, category: "Mining", caption: "Mining Zone" },
    { id: 15, src: Image15, category: "Mining", caption: "Mining Activity" },
    { id: 20, src: Image20, category: "Mining", caption: "Deep Mining" },
    { id: 24, src: Image24, category: "Mining", caption: "Mining Area" },
    //{ id: 25, src: Image25, category: "Mining", caption: "Mining Exploration" },

    // ---------------- Minerals ----------------
    { id: 9, src: Image9, category: "Minerals", caption: "Mineral Sample" },
    { id: 10, src: Image10, category: "Minerals", caption: "Mineral Extraction" },
    { id: 11, src: Image11, category: "Minerals", caption: "Raw Minerals" },
    { id: 21, src: Image21, category: "Minerals", caption: "Mineral Resources" },
    { id: 22, src: Image22, category: "Minerals", caption: "Mineral Deposit" },
    { id: 23, src: Image23, category: "Minerals", caption: "Mineral Processing" },

    // ---------------- Partners ----------------
    { id: 5, src: Image5, category: "Partners", caption: "Fuel Partners" },
    { id: 6, src: Image6, category: "Partners", caption: "Station Partners" },
    { id: 17, src: Image17, category: "Partners", caption: "Logistics Partners" },
    { id: 18, src: Image18, category: "Partners", caption: "Energy Partners" },
  ];

  // FILTER IMAGES
  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">OUR JOURNEY IN PICTURES</h2>

      <div className="gallery-filters">
        {["All", "Electricity", "Mining", "Minerals", "Partners"].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map((img) => (
          <div key={img.id} className="gallery-item">
            <img src={img.src} alt={img.caption} />
            <div className="overlay">
              <p>{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// import React, { useState } from "react";
// import "../styles/Gallery.css"; 
// import Image1 from '../pictures/electric.jpg';
// import Image2 from '../pictures/p1.jpg';
// import Image3 from '../pictures/p2.jpg';
// import Image4 from '../pictures/p3.jpg';
// import Image5 from '../pictures/fuel-tanker.jpg';
// import Image6 from '../pictures/fuel-station.jpg';
// import Image7 from '../pictures/home-image.jpg';
// import Image8 from '../pictures/mining.jpg'; 


// const images = [
//   { id: 1, src: Image1, category: "Loans", caption: "Client Loan Issuance" },
//   { id: 2, src: Image2, category: "Land Titles", caption: "Land Title Verification" },
//   { id: 3, src: Image3, category: "Logbooks", caption: "Logbook Processing" },
//   { id: 4, src: Image4, category: "Loans", caption: "Consultation Session" },
//   { id: 5, src: Image5, category: "Lifestyle", caption: "Watching Sports" },
//   { id: 6, src: Image6, category: "Lifestyle", caption: "Movie Time" },
//   { id: 7, src: Image7, category: "Loans", caption: "Financial Guidance" },
//   { id: 8, src: Image8, category: "Lifestyle", caption: "Hanging Out" },
// ];

// export default function Gallery() {
//   const [filter, setFilter] = useState("All");

//   const filteredImages =
//     filter === "All" ? images : images.filter((img) => img.category === filter);

//   return (
//     <div className="gallery-container">
//       <h2 className="gallery-title">My Journey in Pictures</h2>

//       {/* Filter Buttons */}
//       <div className="gallery-filters">
//         {["All", "Loans", "Land Titles", "Logbooks", "Lifestyle"].map((cat) => (
//           <button
//             key={cat}
//             className={`filter-btn ${filter === cat ? "active" : ""}`}
//             onClick={() => setFilter(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Image Grid */}
//       <div className="gallery-grid">
//         {filteredImages.map((img) => (
//           <div key={img.id} className="gallery-item">
//             <img src={img.src} alt={img.caption} />
//             <div className="overlay">
//               <p>{img.caption}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "../styles/Gallery.css";

// // ✅ Imported local images (make sure these paths exist)
// import gallery1 from "../pictures/pic-10.jpg";
// import gallery2 from "../pictures/pic-11.jpg";
// import gallery3 from "../pictures/pic-2.jpg";
// import gallery4 from "../pictures/pic3.jpg";
// import gallery5 from "../pictures/pic-4.jpg";
// import gallery6 from "../pictures/pic-6.jpg";
// import gallery7 from "../pictures/pic-7.jpg";
// import gallery8 from "../pictures/pic-9.jpg";

// export default function Gallery() {
//   // ✅ Initialize AOS for animations
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   // ✅ Use imported images instead of public URLs
//   const images = [
//     gallery1,
//     gallery2,
//     gallery3,
//     gallery4,
//     gallery5,
//     gallery6,
//     gallery7,
//     gallery8,
//   ];

//   return (
//     <div className="gallery-page container py-5">
//       <h2
//         className="text-center fw-bold mb-5"
//         style={{ color: "purple" }}
//         data-aos="fade-down"
//       >
//         Timeless Mining Gallery
//       </h2>

//       <div className="row g-4">
//         {images.map((src, index) => (
//           <div
//             className="col-12 col-sm-6 col-md-4 col-lg-3"
//             key={index}
//             data-aos="zoom-in"
//           >
//             <div className="gallery-card rounded-4 overflow-hidden shadow-sm">
//               <img
//                 src={src}
//                 alt={`Gallery ${index + 1}`}
//                 className="img-fluid gallery-img"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
