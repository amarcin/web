import React, { useState, useEffect, useCallback } from 'react'
import {client} from '../../../client'
import CarouselSlide from './CarouselSlide'
import { Swiper, SwiperSlide, } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Mousewheel } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/mousewheel'
import Loader from '../Loader/Loader'

SwiperCore.use([Navigation, Mousewheel])

const Carousel = () => {
  const [isCarouselLoading, setIsCarouselLoading] = useState(false)
  const [carouselSlides, setCarouselSlides] = useState([])

  const cleanUpCarouselSlides = useCallback((rawData) => {
    const cleanSlides = rawData.map((slide) => {
      const { sys, fields } = slide
      const { id } = sys
      const slideTitle = fields.title
      const slideDescription = fields.description
      const slideBg = fields.image.fields.file.url
      const updatedSlide = { id, slideTitle, slideDescription, slideBg }
      return updatedSlide
    })
    setCarouselSlides(cleanSlides)
  },[])

  const getCarouselSlides = useCallback(async () => {
    setIsCarouselLoading(true)
    try {
      const response = await client.getEntries({ content_type: 'photoCarousel' })
      const responseData = response.items
      if (responseData) { cleanUpCarouselSlides(responseData) }
      else { setCarouselSlides([]) }
      setIsCarouselLoading(false)
    }
    
    catch (error) {
      console.log(error)
      setIsCarouselLoading(false)
    }
  }, [cleanUpCarouselSlides])

  useEffect(() => {
    getCarouselSlides()
  }, [getCarouselSlides])

  if (isCarouselLoading) {
    return <Loader />
  }

  // if no slides, don't render component
  if (!Array.isArray(carouselSlides) || !carouselSlides.length) {
    return null
  }

  return (
    <div className='carousel'>
      <Swiper
        navigation
        mousewheel={{ forceToAxis: true, thresholdDelta: 90 }}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        loop
        slidesPerView={'auto'}
        spaceBetween={100}
      >
        {carouselSlides.map((item) => {
          const {id, slideBg, slideTitle, slideDescription} = item
          return (
            <SwiperSlide>
              <CarouselSlide key={id} slideTitle={slideTitle} slideDescription={slideDescription} slideBg={slideBg} />
            </SwiperSlide>
          ) 
        })} 
      </Swiper>
    </div>
  )
}

export default Carousel