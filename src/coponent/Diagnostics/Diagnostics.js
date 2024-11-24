import React from 'react'
import './styles.css'
import Footer from '../footer/Footer'
import Header from '../Header/Header'

function Diagnostics() {
  return (
    <div>
    <Header />
        <div className="container-main">
    <div className="box">
    <div className='linev'></div>
    <h1>About Us</h1>
    <div className='lineh'></div>
    </div>
    <div className="chest-lab-container">
      <h1>Chest Lab Services</h1>
      <p>
        Poona Hospital & Research Center has state-of-the-art chest labs with the most up-to-date technologies for assessing and diagnosing lung diseases, lung capacity, and cardiovascular pulmonary fitness. This test is usually useful for athletes. The lab is fully equipped with the latest high-end machines like:
      </p>
      <ul className="lab-equipment-list">
        <li><strong>Spirometry:</strong> Spirometry is helpful in assessing breathing patterns that identify conditions such as asthma, pulmonary fibrosis, cystic fibrosis, and COPD.</li>
        <li><strong>Impulse Oscillometer:</strong> To assess lung function in children and elderly patients who find it difficult to go through spirometry. through spirometry.sidjdwoi</li>
        <li><strong>Cardiopulmonary:</strong> To assess the effect/impact of respiratory problems on cardiac state and vice versa used for testing lung and heart functioning before </li>
        <li><strong>Vyntus WALK:</strong> Offering a complete mobile solution to comfortably assess the functional exercise capacity of patients. through spirometry.through spirome</li>
      </ul>

      <h2 >Q and A</h2>
      <dl className="qa-list">
        <dt>1) Can you eat or drink before a PFT?</dt>
        <dd>Please consult the doctor before any food/liquid intake.</dd>
        
        <dt>2) How should I prepare for a pulmonary function test?</dt>
        <dd>Follow your doctor's instructions regarding preparation for the test.</dd>
        
        <dt>3) How do you feel after a pulmonary function test?</dt>
        <dd>Most people feel normal and can resume their activities immediately.</dd>
        
        <dt>4) Is a pulmonary function test painful?</dt>
        <dd>No, the test is not painful, but you may feel some discomfort.</dd>
      </dl>
    </div>

    </div>
    <Footer />

    </div>





  )
}

export default Diagnostics
