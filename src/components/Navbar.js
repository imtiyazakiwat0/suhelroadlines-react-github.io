import React, { useEffect } from 'react';
import logo from './logo.png';
import SmoothScroll from 'smooth-scroll';

const Navbar = () => {
  useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      speed: 200,
      speedAsDuration: true
    });
  }, []);

  return (
    <nav className="navbar sticky-top navbar-dark bg-dark" id="Home">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/Navbar">
          <img
            src={logo}
            alt="Logo"
            style={{ borderRadius: "50%", width: "50px", height: "50px", marginRight: "20px" }}
          />
          <span style={{ marginRight: "10px" }}></span>
          Suhelroadlines
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="#Home">Home</a>
            <a className="nav-link" href="#AboutUs">AboutUs</a>
            <a className="nav-link" href="#Services">Services</a>
            <a className="nav-link" href="#ContactUs">Contact Us</a>
            <a class="nav-link" href="tel:+919449718874">Call Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;










