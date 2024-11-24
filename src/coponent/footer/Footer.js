import React from 'react'
import '../main/App.css'
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer className="footer-container">
      <div className="footer-row">
        {/* Column 1: Logo and Paragraph */}
        <div className="footer-column">
          <img src="poonahospital-logo.png" alt="Poona Hospital Logo" className="footer-logo" />
          <p className="footer-description">
            Poona Hospital & Research Center is a healthcare provider, par excellence, fast establishing itself as a global industry model in the tertiary healthcare system of India.
          </p>
        </div>

        {/* Column 2: Menus */}
        <div className="footer-column">
          <h3>Menus</h3>
          <ul className="footer-menu">
            <li>About Us</li>
            <li>Diagnostics</li>
            <li>Specialties</li>
            <li>Super Specialties</li>
            <li>Patient Guides</li>
            <li>Academics and Research</li>
            <li>Contact Us</li>
            <li>Appeal</li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-menu">
            <li>Accommodation</li>
            <li>Dietetics</li>
            <li>Hospital Directory</li>
            <li>Patients Testimonials</li>
            <li>Schemes</li>
            <li>Bio Medical Waste</li>
            <li>Stent</li>
          </ul>
        </div>

        {/* Column 4: Contact Info & Social Media */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            Poona Hospital & Research Center,<br />
            27 Sadashiv Peth, Nr. Alka Talkies,<br />
            Pune 411030, Maharashtra.<br />
            For Emergency: 020 66096000<br />
            For Appointment: +91 97305 59600<br />
            phrcjr@gmail.com
          </p>
          <div className="footer-social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="mailto:phrcjr@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
