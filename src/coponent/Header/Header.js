import React from 'react'
import { Link } from 'react-router-dom';

import '../main/App.css'
function Header() {
  return (
    <div>
          <header>
          <div class="mobileHeader">
      <div className="logo"><Link to="/desktop">desktop app</Link> </div>
      <button 
                className="hamburger" 
                onClick={(e) => {
                    const menu = document.getElementById('menu');
                    menu.style.display = menu.style.display === 'none' || !menu.style.display ? 'block' : 'none';
                }}
            >
                Menu
            </button>

          </div>
      <nav>
        <ul id='menu' className="nav-list">
          <li className="nav-item">
          <Link to="/about" style={{textDecoration:'none'}}>About</Link>
            <ul className="dropdown">
              <li>History</li>
              <li>Mission</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </li>
          <li className="nav-item">
          <Link to="/Diagnostics" style={{textDecoration:'none'}}>Diagnostics</Link> 
            <ul className="dropdown">
              <li>Blood Test</li>
              <li>CT Scan</li>
              <li>MRI</li>
              <li>Ultrasound</li>
              <li>X-Ray</li>
            </ul>
          </li>
          <li className="nav-item">
          <Link to="/Specialties" style={{textDecoration:'none'}}>Specialties</Link> 
            <ul className="dropdown">
              <li>Cardiology</li>
              <li>Dermatology</li>
              <li>Neurology</li>
              <li>Oncology</li>
              <li>Pediatrics</li>
            </ul>
          </li>
          <li className="nav-item">
            Super Specialities
            <ul className="dropdown">
              <li>Nephrology</li>
              <li>Urology</li>
              <li>Plastic Surgery</li>
              <li>Vascular Surgery</li>
              <li>Transplant</li>
            </ul>
          </li>
          <li className="nav-item">
            Patient Guide
            <ul className="dropdown">
              <li>Appointment Booking</li>
              <li>Billing</li>
              <li>Insurance</li>
              <li>Visiting Hours</li>
              <li>Patient Rights</li>
            </ul>
          </li>
          <li className="nav-item">
            Academics & Research
            <ul className="dropdown">
              <li>Publications</li>
              <li>Courses</li>
              <li>Research Areas</li>
              <li>Workshops</li>
              <li>Collaborations</li>
            </ul>
          </li>
        </ul>
          
      </nav>
    </header>
    </div>
  )
}

export default Header
