import React from 'react';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Blog from './components/Blog/Blog';


function App() {
  return (
    <div className="App">
      <video src={'https://amplify-web-staging-11952-deployment.s3.us-west-1.amazonaws.com/VideoBgTrim.mp4'} autoPlay loop muted />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;  