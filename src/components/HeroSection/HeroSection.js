import React from "react"
// import { Link } from "react-router-dom"
// import "../App.css"
// import { Button } from "./Button"

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Augustin James Marcin</h1>
      <p>
        <a className="social-link" href="http://linkedin.com/in/augustinmarcin">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a className="social-link" href="https://github.com/amarcin">
          <i class="fa-brands fa-github-alt"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
          className="social-link"
          href="https://www.instagram.com/augustinmarcin/"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
          className="social-link"
          href="https://youtube.com/channel/UCd14Jj1HKAUFUZckWwSjZ3A"
        >
          <i class="fa-brands fa-youtube"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a className="social-link" href="https://twitter.com/AugustinMarcin">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </p>

    </div>
  )
}

export default HeroSection
