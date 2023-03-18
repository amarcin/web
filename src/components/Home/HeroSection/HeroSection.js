import React from "react"
import Loader from "../Loader/Loader"
import SageMaker from "./SageMaker"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="container">
        <div className="bird-container bird-container--one">
          <div className="bird bird--one"></div>
        </div>
        <div className="bird-container bird-container--two">
          <div className="bird bird--two"></div>
        </div>
        <div className="bird-container bird-container--three">
          <div className="bird bird--three"></div>
        </div>
        <div className="bird-container bird-container--four">
          <div className="bird bird--four"></div>
        </div>
      </div>
      <div className="name-bar">
        <h1>Augustin Marcin</h1>
      </div>
      <SageMaker />
      <div className="hero-bar">
        {/* <Loader /> */}
        <h3>Cloud Engineer</h3>
        <h3 className="ai"><a href="https://medium.com/@augustinmarcin/machine-learning-the-sparknotes-version-3b66c5dfc4b" target="_blank" rel="noreferrer"> Artificial Intelligence Specialist <i className="fa-solid fa-arrow-right"></i></a></h3>
        <h3 className="aws"><a href="https://aws.amazon.com/what-is-aws/" target="_blank" rel="noreferrer">Amazon Web Services <i className="fa-brands fa-aws"></i> <i className="fa-solid fa-arrow-right"></i></a></h3>
        <p className="hero-links">
          {/* LinkedIn */}
          <a className="social-link" href="http://linkedin.com/in/augustinmarcin" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          {/* Instagram */}
          <a className="social-link" href="https://www.instagram.com/augustinmarcin/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          {/* GitHub */}
          <a className="social-link" href="https://github.com/amarcin" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github-alt"></i>
          </a>
          {/* &nbsp;&nbsp;&nbsp;
          <a className="social-link" href="https://www.youtube.com/@augustinmarcin" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-youtube"></i>
          </a> */}
          {/* Phone call */}
          <a className="social-link" href="tel:+19168735465" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-phone-flip"></i>
          </a>
          {/* Text */}
          <a className="social-link" href="sms:+19168735465" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-message" />
          </a>
          {/* Email */}
          <a className="social-link" href="mailto:info@augustin.club" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </p>
      </div>
    </div>
  )
}

export default HeroSection
