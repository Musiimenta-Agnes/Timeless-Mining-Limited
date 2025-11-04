import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Gallery.css";

// ✅ Imported local images (make sure these paths exist)
import gallery1 from "../pictures/pic-10.jpg";
import gallery2 from "../pictures/pic-11.jpg";
import gallery3 from "../pictures/pic-2.jpg";
import gallery4 from "../pictures/pic-3.jpg";
import gallery5 from "../pictures/pic-4.jpg";
import gallery6 from "../pictures/pic-6.jpg";
import gallery7 from "../pictures/pic-7.jpg";
import gallery8 from "../pictures/pic-9.jpg";

export default function Gallery() {
  // ✅ Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ✅ Use imported images instead of public URLs
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
  ];

  return (
    <div className="gallery-page container py-5">
      <h2
        className="text-center fw-bold mb-5"
        style={{ color: "purple" }}
        data-aos="fade-down"
      >
        Timeless Mining Gallery
      </h2>

      <div className="row g-4">
        {images.map((src, index) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            key={index}
            data-aos="zoom-in"
          >
            <div className="gallery-card rounded-4 overflow-hidden shadow-sm">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="img-fluid gallery-img"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
