import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from '../src/components/Home';
import Varsity from './components/Varsity';
import VarsitySingle from './components/VarsitySingle';
import About from '../src/pages/about';
import Contact from '../src/pages/contact';

function App() {
  return (
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     {/* <Route path="/contact" element={<Contact />} /> */}
     <Route path="/varsity" element={<Varsity />} />
     <Route path="/varsity/:id" element={<VarsitySingle />} />
  </Routes>
  );
}

export default App;
