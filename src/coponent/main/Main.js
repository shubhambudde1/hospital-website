

import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from '../footer/Footer'
import Header from '../Header/Header'


const images = [
    '/Homepage-Banner1.jpg',
    '/banner2.jpg',
    '/banner3.jpg',
  ];
  const images1 = [
    { src: '/row/Emergency-and-Trauma_1.png', name: 'Image 1' },
    { src: '/row/Cardiac-Sciences_2.png', name: 'Image 2' },
    { src: '/row/endoscopy_5.png', name: 'Image 3' },
    { src: '/row/Neuro-Sciences_3.png', name: 'Image 4' },
    { src: '/row/Opthamology_6.png', name: 'Image 5' },
    { src: '/row/pathology_7.png', name: 'Image 6' },
    { src: '/row/Pulmonology_4.png', name: 'Image 7' },
  
  ];
  const blocks = [
    { name: 'FIND A DOCTOR', icon: 'whats-new-icon.png' },
    { name: "WHAT'S NEW", icon: 'whats-new-icon.png' },
    { name: 'HEALTH PACKAGES', icon: 'White-Icon2.png' },
    { name: 'Career', icon: 'career-icon.png' }
  ];
  const services = [
    {
      title: 'Cardiology',
      description: 'The Department of Cardiology at Poona Hospital...',
      image: '/row/d1.png',
    },
    {
      title: 'Imaging Sciences',
      description: 'The MRI Department at Poona Hospital...',
      image: '/row/di.png',
    },
    {
      title: 'Neurology',
      description: 'The Neurology Department offers...',
      image: '/row/d2.png',
    },
    {
      title: 'Radiology',
      description: 'The Radiology Department at Poona Hospital...',
      image: '/row/dr.png',
    },
    {
      title: 'Pulmonology',
      description: 'Poona Hospital has state-of-the-art...',
      image: '/row/dp.png',
    },
    {
      title: 'Endoscopy',
      description: 'The Department of Endoscopy has...',
      image: '/row/de.png',
    },
  ];

const Main = () => {




    const [currentIndex, setCurrentIndex] = useState(0);

  // Function to automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (

    <>

    <Header />


    <div className='banner'>
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
    <div className="image-row-wrapper">
      <div className="image-row">
        {images1.map((image, index) => (
          <div key={index} className="image-block">
            <img src={image.src} alt={image.name} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>

    <div className="block-row">
      {blocks.map((block, index) => (
        <div key={index} className="info-block">
          <img src={block.icon} alt={block.name} className="block-icon" />
          <p className="block-name">{block.name}</p>
        </div>
      ))}
    </div>


    <div className="hospital-info">
      <div className="image-container">
        <img
          src="https://via.placeholder.com/435x1123"
          alt="Hospital"
          className="hospital-image"
        />
      </div>
      <div className="content-container">
        <h1 className="hospital-title">Best Multispeciality Hospital in Pune</h1>
        <h2 className="hospital-subtitle">Poona Hospital & Research Centre</h2>
        <p className="hospital-description">
          Poona Hospital & Research Centre is a multispecialty tertiary care hospital in Pune, providing
          the highest standard of clinical expertise and nursing care by offering the latest technology
          and state-of-the-art hospital facilities. The hospital focuses on rapid assessment...
        </p>
        <button className="read-more-button">Read More</button>
      </div>
    </div>


    <h2 className="services-title">Dignonisis</h2>
    <div className="services-container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={service.image} alt={service.title} className="service-image" />
          <div className="service-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#" className="view-more">View More</a>
          </div>
        </div>
      ))}
    </div>


    <div className="nursing-education-card">
      <img src="/hursing.jpeg" alt="Institute of Nursing Education" className="nursing-image" />
      <div className="nursing-content">
        <h2>Institute of Nursing Education</h2>
        <p>The Institute of Nursing Education was started in Poona Hospital & Research Center in 1998</p>
        <button className="read-more-button">Read More</button>
      </div>
    </div>


    
      <Footer />

   


    </>
    
  );
};

export default Main;
