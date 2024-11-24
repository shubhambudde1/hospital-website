import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

 import Appp from './coponent/another'
 import Form from './coponent/Form/Form.js'
import Main from './coponent/main/Main'
 import About from './coponent/about/About'
 import Diagnostics from './coponent/Diagnostics/Diagnostics.js'
 import Specialties from './coponent/Specialties/Specialties.js'

function App() {
  return (
    <div className="App">
     
     <Router>
        <Routes>
          <Route path="/" element={<Main />} />
           <Route path="/about" element={<About />} /> 
           <Route path="/desktop" element={<Appp/>} /> 
           <Route path="/form" element={<Form/>} /> 
           <Route path="/Diagnostics" element={<Diagnostics/>} /> 
           <Route path="/Specialties" element={<Specialties/>} /> 

          

        </Routes>
      </Router>
      {/* <Form />
      <Appp/> */}

     


      
    </div>
  );
}

export default App;
