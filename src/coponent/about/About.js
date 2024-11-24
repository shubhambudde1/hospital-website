import React from 'react'
import Footer from '../footer/Footer'
import Header from '../Header/Header'
import './styles.css'

function About() {
  return (
    <div>
    <Header />
    <div className="container-main">
    <div className="box">
    <div className='linev'></div>
    <h1>About Us</h1>
    <div className='lineh'></div>
</div>


    <div className="container">
      <section className="introduction">
        <h1>Poona Hospital & Research Centre</h1>
        <p>
          Poona Hospital & Research Centre is a multispecialty tertiary care
          hospital in Pune, providing the highest standard of clinical expertise
          and nursing care by offering the latest technology, and state-of-the-art
          hospital facilities. The Hospital focuses on rapid assessment,
          intervention, and treatment for numerous common and complex conditions.
        </p>
        <p>
          Poona Hospital & Research Centre presently has 300 beds and is situated in
          a central location, with easy access to the City.
        </p>
        <p>
          In addition to providing quality health care, the focus is also on
          preventive health programmes, medical education, and clinical research.
        </p>
        <p>
          Devotion to the art and science of healing reinforces every aspect of our
          mission.
        </p>
      </section>

      <section className="quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="#">Accommodation</a></li>
          <li><a href="#">Dietetics</a></li>
          <li><a href="#">Patients Testimonials</a></li>
          <li><a href="#">Hospital Directory</a></li>
          <li><a href="#">Schemes</a></li>
          <li><a href="#">Bio Medical Waste</a></li>
          <li><a href="#">Stent</a></li>
        </ul>
      </section>

      <section className="vision-mission">
        <h2>Vision</h2>
        <p>
          To be among the best hospitals for quality patient care and post-graduate
          medical education.
        </p>

        <h2>Mission</h2>
        <p>
          To provide specialty and super specialty health care services to all
          sections of society at a reasonable cost.
        </p>

        <h2>Quality Policy</h2>
        <p>
          We at Poona Hospital and Research Centre, Pune are committed to providing
          speciality and super specialty health care services to all sections of
          society. We aim to be recognized by the qualitative excellence and safety
          of the services provided.
        </p>

        <h2>Guiding Principles:</h2>
        <ul>
          <li>Sensitivity and responsiveness to the needs of all patients</li>
          <li>Health education of society through camps, workshops, and seminars.</li>
          <li>Focus on continual improvement of the effectiveness of the implemented QMS.</li>
          <li>Commitment to conservation of the environment.</li>
          <li>Endeavour to use the latest state-of-the-art technology.</li>
          <li>Quality in health care pertaining to the safety and welfare of patients and healthcare workers.</li>
          <li>We abide by the laws of the land and ethical codes of practice.</li>
          <li>We derive inspiration from various national and international standards like ISO 9001, NABH, and NABL etc.</li>
        </ul>
      </section>
    </div>

    </div>



    <Footer />
      
    </div>
  )
}

export default About

