// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// // Import other sections
// import AboutUs from "../pages/About";
// import Services from "../pages/Services";
// import ContactUs from "../pages/Contact";

// // Import background images

// import pic2 from "../pictures/pic2.jpg";
// import pic3 from "../pictures/pic-4.jpg";
// import pic1 from "../pictures/pic1.jpg"
// import pic4 from "../pictures/pic4.jpg"

// // Import CSS
// import "../components/HeroSection.css";

// const backgroundImages = [pic1, pic2, pic3, pic4];

// export default function HeroSection() {
//   const [currentImage, setCurrentImage] = useState(0);

//   // ⏱️ Auto switch every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   //  Scroll to top when navigating
//   const handleLinkClick = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div>
//       {/* 🖼️ Hero Section */}
//       <div className="hero-section position-relative overflow-hidden">
//         {/* Background slideshow */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentImage}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.8 }}
//             className="hero-background"
//             style={{
//               backgroundImage: `url(${backgroundImages[currentImage]})`,
//             }}
//           />
//         </AnimatePresence>

//         {/* Foreground content */}
//         <div className="hero-content text-center text-white d-flex flex-column align-items-center justify-content-center h-100">
//           <h1 className="fw-bold display-3 mb-4">
//             TIMELESS <span className="text-purple">MINING</span>
//           </h1>

//           <p className="lead fw-normal mb-5 px-3" style={{ maxWidth: "900px" }}>
//             Timeless Mining Company specializes in responsible mineral
//             extraction, reliable electricity supply, and professional licensing
//             support for mining operations. We are committed to powering
//             industries, communities, and sustainable economic growth.
//           </p>

//           <div className="d-flex gap-3">
//             <Link
//               to="/services"
//               className="btn btn-lg btn-purple fw-bold px-5"
//               onClick={handleLinkClick}
//             >
//               Services
//             </Link>

//             <Link
//               to="/gallery"
//               className="btn btn-lg btn-dark fw-bold px-5"
//               onClick={handleLinkClick}
//             >
//               Explore More
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* 📘 About Section */}
//       <div className="py-5">
//         <h1 className="text-center fw-bold" style={{ fontSize: "50px" }}>
//           About Timeless Mining
//         </h1>
//         <div className="mt-4">
//           <AboutUs />
//         </div>
//       </div>

//       {/* ⚙️ Services Section */}
//       <div className="my-5">
//         <Services />
//       </div>

//       {/* 📞 Contact Section */}
//       <div className="my-5">
//         <ContactUs />
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import other sections
import AboutUs from "../pages/About";
import Services from "../pages/Services";
import ContactUs from "../pages/Contact";

// Import background images
import pic2 from "../pictures/pic2.jpg";
import pic3 from "../pictures/pic-4.jpg";
import pic1 from "../pictures/pic1.jpg";
import pic4 from "../pictures/pic4.jpg";

// Import CSS
import "../components/HeroSection.css";

const backgroundImages = [pic1, pic2, pic3, pic4];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto switch every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section position-relative overflow-hidden">

        {/* Animated Background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-background"
            style={{
              backgroundImage: `url(${backgroundImages[currentImage]})`,
            }}
          />
        </AnimatePresence>

        {/* ✅ Transparent Overlay */}
        <div className="hero-overlay"></div>

        {/* Foreground Content */}
        <div className="hero-content text-center text-white d-flex flex-column align-items-center justify-content-center h-100">
          <h1 className="fw-bold display-3 mb-4 text-purple">
            TIMELESS <span className="text-white">MINING</span>
          </h1>

          <p className="lead fw-normal mb-5 px-3" style={{ maxWidth: "900px" }}>
            Timeless Mining Company specializes in responsible mineral
            extraction, reliable electricity supply, and professional licensing
            support for mining operations. We are committed to powering
            industries, communities, and sustainable economic growth.
          </p>

          <div className="d-flex gap-3">
            <Link
              to="/services"
              className="btn btn-lg btn-purple fw-bold px-5"
              onClick={handleLinkClick}
            >
              Services
            </Link>

            <Link
              to="/gallery"
              className="btn btn-lg btn-dark fw-bold px-5"
              onClick={handleLinkClick}
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-5">
        <h1 className="text-center fw-bold" style={{ fontSize: "50px" }}>
          About Timeless Mining
        </h1>
        <div className="mt-4">
          <AboutUs />
        </div>
      </div>

      {/* Services Section */}
      <div className="my-5">
        <Services />
      </div>

      {/* Contact Section */}
      <div className="my-5">
        <ContactUs />
      </div>
    </div>
  );
}
