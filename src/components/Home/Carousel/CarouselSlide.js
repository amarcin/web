import React from 'react'
import Swiper from 'swiper'

const CarouselSlide = (props) => {
  const {slideTitle, slideDescription, slideBg} = props //add id tag if necessary
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
    //href={'/projects/' + slideTitle.replace(/[^\w\s']/g, "").replace(/\s+/g, "-")}
    return (
      <div className='slideWrap' id={slideTitle} style={{ backgroundImage: `url(${slideBg})` }}>
        <div className='slideWrap' style={{ backgroundImage: `url(${slideBg}` }}>
          <div className='textWrap'>
            <h2> {slideTitle} </h2>
            <p> {slideDescription} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CarouselSlide