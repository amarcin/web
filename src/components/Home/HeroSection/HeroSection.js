import React from "react"
import Loader from "../Loader/Loader"
import SageMaker from "./SageMaker"

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <SageMaker />
        {/* <Loader /> */}
        <h1>Augustin Marcin</h1>
        <h3>Cloud Engineer</h3>
        <h3>Amazon Web Services <i className="fa-brands fa-aws"></i> </h3>
        <p className="hero-links">
          <a className="social-link" href="http://linkedin.com/in/augustinmarcin" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a className="social-link" href="https://github.com/amarcin" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github-alt"></i>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a className="social-link" href="https://www.instagram.com/augustinmarcin/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a className="social-link" href="https://youtube.com/channel/UCd14Jj1HKAUFUZckWwSjZ3A" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-youtube"></i>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a className="social-link" href="https://twitter.com/AugustinMarcin" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </p>
      </div>  
    </div>
  )
}

export default HeroSection
