import React from 'react'
import Image from 'next/image';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { no_image } from '../assets/images/index';


// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);


function ImagesSlider (props) {
  const lieuImagesUrl = props.lieuImages
 
  return (
    <div className='mt-3'>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={10} // Adjust the spacing between slides
        slidesPerView={1} // Show only one slide at a time
      >
        {lieuImagesUrl.length > 0 ? (
        <Swiper>
          {lieuImagesUrl.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img src={imageUrl} alt="lieu images" className="w-full h-auto m-auto rounded-26px" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Image src={no_image} alt="default image" className="w-full h-auto m-auto rounded-26px" />
      )}
      </Swiper>
    </div>
  )
}

export default ImagesSlider