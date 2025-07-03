import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/HomePage';
import ServicePage1 from './Pages/ServicePage1'; 
import ServicePage2 from './Pages/ServicePage2'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Homepage />} />
        <Route path="/service-now" element={<ServicePage1 />} /> 
         <Route path="/salesforce" element={<ServicePage2 />} /> 
      </Routes>
    </Router>
  );
};

export default App;
