import React from 'react'
import Footer from '../footer/Footer'
import Header from '../Header/Header'
import './style.css'
function Specialties() {
  return (
    <div>
    <Header />
    <div className="box">
    <div className='linev'></div>
    <h1>Specialties</h1>
    <div className='lineh'></div>
    </div>

    <div className='content'>
        <div className='box1'>
            <p>Poona Hospital & Research Center has started Ayurvedic Department in 2019 with an objective of providing research and evidence based Ayurvedic treatment. The main aim here is to provide effective and economical healthcare services. The panel of experienced validays are Pioneers in Nadi Parikshan (Pulse reading) and best in their respective fields. We focus on each speciality and have on board Specialist Ayurvedic consultant for Respiratory disordess, Spine disordess, Skin disordess, Inferlitity, Diabetes etc. Department is well equipped with all the upgraded Panchakarma facilities and have in house medicine dispensing unit.</p><br/>

<p>The department organises various health related camps eg. Piles & Fistula with Ayurvedic Speciality of Ksharsutra, Agnikarma for pain management, Suvarna Prashan for children. With main focus on “Prevention, cure and wellness” we organise various public talks for awareness. To upgrade and enhance knowledge of Ayurvedic students and doctors department emphasise on conducting various CME.</p><br/>

<p>The ultimate moto is to provide the best possible service, heal the individual with classical ayurvedic treatment, maintain & retend the health of healthy one and to create awareness of Ayurveda at individual level.</p>
        </div>
        <div className='box2'></div>
    </div>

      <Footer />
    </div>
  )
}

export default Specialties
