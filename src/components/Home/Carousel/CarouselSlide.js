import React from 'react'
import Swiper from 'swiper'

const CarouselSlide = (props) => {
  const { slideTitle, slideDescription, slideBg } = props //add id tag if necessary
  if (window.location.pathname === '/projects') {
    return (
      <a className='slideWrap' style={{ backgroundImage: `url(${slideBg})` }} href={'/projects/' + slideTitle.replace(/[^\w\s']/g, "").replace(/\s+/g, "-")}>
        <div className='textWrap'>
          <h2> {slideTitle} </h2>
          <p> {slideDescription} </p>
        </div>
      </a>
    )
  }
  else if (window.location.pathname === '/projects/' + slideTitle.replace(/[^\w\s']/g, "").replace(/\s+/g, "-")) {
    return (
      <div>
        <div className='slide-image'>
          {slideBg}
        </div>
        <div className='text-wrap'>
          <h1>
            {slideTitle}
          </h1>
          <p>
            {slideDescription}
          </p>
        </div>
      </div>
    )
  }
  else {

    return (
      <a className='slideWrap' id={slideTitle} style={{ backgroundImage: `url(${slideBg})` }} href={'/projects/' + slideTitle.replace(/[^\w\s']/g, "").replace(/\s+/g, "-")}>
        <div className='slideWrap' style={{
          backgroundImage: `
          linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, .3),
      rgba(0, 0, 0, .45),
      rgba(0, 0, 0, .45),
      rgba(0, 0, 0, .3),
      rgba(0, 0, 0, 0)
    ),
          url(${slideBg}`
        }}>
          <div className='textWrap'>
            <h2> {slideTitle} </h2>
            <p> {slideDescription} </p>
          </div>
        </div>
      </a>
    )
  }
}

export default CarouselSlide