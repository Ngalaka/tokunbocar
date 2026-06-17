import { addCars } from '@/lib/addCars'
import Image from 'next/image'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"

export default function Recentcar() {
  return (
    <>
      {/* Recently car */}
      <div className="w-[90%] mx-auto lg:w-full py-8 flex flex-row justify-between items-center lg:px-16 lg:py-4">
        <p className="text-xl font-bold">Feature Car for Sale</p>
        <div className="flex flex-row items-center gap-2">
          <p className="cursor-pointer">View all</p>
          <span><IoIosArrowRoundForward /></span>
        </div>
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

            {addCars.map((car) => (
              < SwiperSlide key={car.id} >
                <div className="border border-black/10 py-3 px-3">
                  <div className=' flex flex-col justify-center items-center'>
                    <Image src={car.image} width={300} height={300} alt='Lagos used cars' className="w-80 h-70 lg:w-40 lg:h-30 object-cover  text-center" />
                  </div>
                  <div className='px-4 py-4'>
                    <p >{car.useBy}</p>
                    < p className="font-bold text-sm py-2">{car.model}</p>
                    <div className='flex flex-row items-center gap-2 text-black/50 text-sm '>
                      <p >{car.fuel}</p>
                      <p>{car.body}</p>
                      <p>{car.year}</p>
                    </div>
                    <div className="flex justify-between items-center gap-16">
                      <div className="flex flex-row items-center gap-2 text-black/50 pl-4">
                        <span className="text-sm"><CiLocationOn /></span>
                        <p >{car.location}</p>
                      </div>
                      <p className="font-semibold text-sm">{car.price}</p>
                    </div>
                    <div className='w-full h-auto border border-black/20 px-2 py-2 mt-4 flex flex-col justify-end items-end text-black/30'>
                    <p className="font-medium text-sm">{car.time}</p>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  )
}
