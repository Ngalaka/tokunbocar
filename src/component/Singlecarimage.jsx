"use client"
import { carVarities } from '@/lib/carVarities'
import React from 'react'
import { singlecar } from '@/lib/singlecar'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import Image from 'next/image'


export default function Singlecarimage() {
  return (
    <>
    <div>
      <div className='w-full py-2 lg:w-full h-auto lg:py-4 lg:px-4'>
        {singlecar.map((single) => (
          <div key={single.id} >
            <div className="w-full h-auto  flex flex-col justify-start items-start gap-2">
              <Image src={single.image} width={300} height={300} alt="Lagos used cars" className="w-full h-full lg:w-150 lg:h-150 object-cover" />
            </div>
          </div>
        ))}
      </div>


{/* acarosel codes */}
      <div >
        <Swiper
          // modules={[ ]}
          // modules={[Navigation, Pagination, Autoplay]}
          // modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          // navigation
          // pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 3,
            },

            1024: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 3000,
            // disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          // loop={false}
          // loop={true}
          className="overflow-hidden"
        >

          {/* addCars  */}

          <div className="w-full h-auto flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-center gap-2   ">

            {carVarities.map((list) => (
              < SwiperSlide key={list.id} >
               <div className='w-[90%] mx-auto  py-4 lg:w-30 h-auto lg:py-4 '>
              <Image src={list.image} width={300} height={300} alt="Lagos used cars" className="w-full h-auto lg:h-20 object-cover " />
            </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      
</div>

    </>
  )
}
