import React from "react"
import Loader from "../Loader/Loader"
import SageMaker from "./SageMaker"

function HeroSection() {
  return (
    <div className="hero-container">
      <div class="container">
	      <div class="bird-container bird-container--one">
		      <div class="bird bird--one"></div>
	      </div>
        <div class="bird-container bird-container--two">
          <div class="bird bird--two"></div>
        </div>
        <div class="bird-container bird-container--three">
          <div class="bird bird--three"></div>
        </div>
        <div class="bird-container bird-container--four">
          <div class="bird bird--four"></div>
        </div>
	    </div>
      <div className="name-bar">
        <h1>Augustin Marcin</h1>
      </div>
      <SageMaker />
      <div className="hero-bar">
        {/* <Loader /> */}
        <h3>Cloud Engineer</h3>
        <h3 className="ai"><a href="/blog/AI-vs-ML-vs-DL"> Artificial Intelligence Specialist <i class="fa-solid fa-arrow-right"></i></a></h3>
        <h3 className="aws"><a href="https://aws.amazon.com" target="_blank" rel="noreferrer">Amazon Web Services <i className="fa-brands fa-aws"></i> <i class="fa-solid fa-arrow-right"></i></a></h3>
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
          &nbsp;
        </p>
      </div>  
    </div>
  )
}

export default HeroSection
