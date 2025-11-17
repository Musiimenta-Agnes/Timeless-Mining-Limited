import React, { useRef } from 'react';
import { Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';


function OurHeader() {
  const navbarCollapseRef = useRef(null);
  const handleLinkClick = () => {
    const navbarCollapse = navbarCollapseRef.current;
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      new window.bootstrap.Collapse(navbarCollapse).hide();
    }
  };

  return (
    <div>
      <header className="w-100">


        <nav className="navbar navbar-expand-lg" style={{ width: '100%', height:'60px', zIndex: 1000 , color:'white', position:'fixed'}}>
          <div className="container-fluid">

          
            <div className="navbar-brand agie" style={{color:'white'}}>
              <img src={`${process.env.PUBLIC_URL}/images/timeless-logo.jfif`} alt="Timeless" className="logo" /> TIMELESS
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" >
              <span className="navbar-toggler-icon"  style={{backgroundColor:'white'}}></span>
            </button>

            <div style={{  backgroundColor: 'black',marginLeft:'80px', height:'40px', color:'white', marginBottom:'0px'}} className="collapse navbar-collapse" id="navbarMenu" ref={navbarCollapseRef}>
              <ul className="navbar-nav ms-auto nav">
                <li className="custom-item nav-item">
                  <Link to="/" className="custom-link nav-link" onClick={handleLinkClick}>Home</Link>
                </li>
                <li className="custom-item nav-item">
                  <Link to="/about" className="custom-link nav-link" onClick={handleLinkClick}>About Us</Link>
                </li>
                <li className="custom-item nav-item">
                  <Link to="/services" className="custom-link nav-link" onClick={handleLinkClick}>Services</Link>
                </li>
                <li className="custom-item nav-item">
                  <Link to="/gallery" className="custom-link nav-link" onClick={handleLinkClick}>Gallery</Link>
                </li>
                <li className="custom-item nav-item">
                  <Link to="/contact" className="custom-link nav-link" onClick={handleLinkClick}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

 <br/><br/><br/><br/>
      </header>
    </div>
  );
}

export default OurHeader;


