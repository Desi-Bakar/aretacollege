import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Navigation, Autoplay } from "swiper/modules"

// Import CSS Swiper
import "swiper/css"
import "swiper/css/navigation"

const HeroSlider = ({ images = [], }) => {
  if (!images || images.length === 0) {
    return null // jangan render apa2 kalau kosong
  }

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 4000 }}
      loop
      className="hero-swiper"
    >
      {images.map((img, i) => {
        const image = getImage(img)
        return (
          <SwiperSlide key={i}>
            <div className="relative">
              <GatsbyImage
                image={image}
                alt={`slide-${i}`}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
export default HeroSlider