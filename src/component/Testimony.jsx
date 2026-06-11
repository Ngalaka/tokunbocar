import { testimony } from '@/lib/testimony'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import Image from 'next/image';

export default function Testimony() {
  return (
    <>
      {/* Testimony section */}

      <div className="w-full h-auto">


        <div className="w-full flex flex-row justify-between items-center px-16 py-4">
          <p className="text-xl font-bold">What our Customers Say</p>
          <div className="flex flex-row items-center gap-2">
            <p>Write a Review</p>
            <span><IoIosArrowRoundForward /></span>
          </div>
        </div>


        {/* acarosel codes */}
        <div>
          <Swiper
            // modules={[Pagination, Autoplay]}
            // modules={[Navigation, Pagination, Autoplay]}
            // modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            // // navigation
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
            // autoplay={{
            //   delay: 1000,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true,
            // }}
            // loop={false}
            // // loop={true}
            className="overflow-hidden"
          >


            {/* addCars  */}

            <div className=" w-full flex-col justify-center items-center lg:w-[80%] h-auto flex lg:flex-row lg:justify-between lg:items-center gap-2 border">
              {testimony.map((testi) => (

                < SwiperSlide key={testi.id} >
                  <div className="border  border-black/10 py-3 px-3">
                    <div className="w-[90%]  text-left pl-6 h-20 lg:w-full flex items-center justify-center lg:text-center text-sm text-black/50">
                      <p >{testi.testi}</p>
                    </div>
                    <div className='flex flex-row items-center gap-2 py-2 px-2'>
                      <Image src={testi.image} width={300} height={300} alt="Lagos used cars" className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="font-bold">{testi.name}</p>
                        <p className="text-sm text-black/50">{testi.model}</p>
                      </div>
                    </div>

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
