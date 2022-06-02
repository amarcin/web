import React from "react"

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Augustin James Marcin</h1>
      <p className="hero-links">
        <a className="social-link" href="http://linkedin.com/in/augustinmarcin">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a className="social-link" href="https://github.com/amarcin">
          <i className="fa-brands fa-github-alt"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
          className="social-link"
          href="https://www.instagram.com/augustinmarcin/"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
          className="social-link"
          href="https://youtube.com/channel/UCd14Jj1HKAUFUZckWwSjZ3A"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a className="social-link" href="https://twitter.com/AugustinMarcin">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </p>
    </div>
  )
}

export default HeroSection
