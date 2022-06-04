import React from "react"

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Augustin James Marcin</h1>
      <p className="hero-links">
        <a className="social-link" href="http://linkedin.com/in/augustinmarcin" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a className="social-link" href="https://github.com/amarcin" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github-alt"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
          className="social-link" href="https://www.instagram.com/augustinmarcin/" target="_blank" rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
          className="social-link" href="https://youtube.com/channel/UCd14Jj1HKAUFUZckWwSjZ3A" target="_blank" rel="noopener noreferrer"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a className="social-link" href="https://twitter.com/AugustinMarcin" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </p>
    </div>
  )
}

export default HeroSection
