import React from 'react';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Vita from './components/Vita';
import Projects from './components/Projects';
import Footer from './components/Navbar/Footer';
import Press from './components/Press';
import Carousel from './components/Home/Carousel/Carousel';
import Maintenance from './components/Maintenance';

function App() {
  console.log()
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/vita' element={<Vita />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/*' element={<Projects />} />
          <Route path='/press' element={<Press />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;  