import React from 'react';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Vita from './components/Vita';
import Projects from './components/Projects';
import Footer from './components/Navbar/Footer';
import Press from './components/Press';
import Carousel from './components/Home/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:postTitle' element={<Blog />} />
          <Route path='/vita' element={<Vita />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:slideTitle' element={<Carousel />} />
          <Route path='/press' element={<Press />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;  