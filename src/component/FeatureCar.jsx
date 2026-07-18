"use client"
import Image from 'next/image'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"

export default function FeatureCar() {
  const typeCar = [
    {
        id: 1,
       name: "Ford Cars in Nigeria",
       logo: "/image2/car24.jpg",
      },

      {
        id: 2,
         name: "Honda Cars in Nigeria",
       logo: "/image2/car25.jpg",
      },

      {
        id: 3,
        name: "Audic Cars in Nigeria",
       logo: "/image2/car26.jpg",
      },

      {
        id: 4,
        name: "Toyota Cars in Nigeria",
       logo: "/image2/car2.jpg",
      },

      {
        id: 5,
         name: "Nissan Cars in Nigeria",
       logo: "/image2/car28.jpg",
      },

      {
        id: 6,
        name: "Benz Cars in Nigeria",
       logo: "/image2/car29.jpg",
      },

       {
        id: 7,
        name: "BMW Cars in Nigeria",
       logo: "/image2/car29.jpg",
      },
]
   const carLogos = [
  {
    id: 1,
    name: "Ford",
    logo: "/image2/carlogo.jpg",
    dealer: "Ford Cars in Nigeria"
  },

  {
    id: 2,
    name: "Honda",
    logo: "/image2/carlogo2.jpg",
    dealer: "Honda Cars in Nigeria"
  },

  {
    id: 3,
    name: "Audic",
    logo: "/image2/carlogo4.jpg",
    dealer: "Audic Cars in Nigeria"
  },

  {
    id: 4,
    name: "Toyota",
    logo: "/image2/carlogo1.jpg",
    dealer: "Toyota Cars in Nigeria"
  },

  {
    id: 5,
    name: "Nissan",
    logo: "/image2/carlogo8.jpg",
    dealer: "Nissan Cars in Nigeria"
  },

  {
    id: 6,
    name: "Benz",
    logo: "/image2/carlogo6.jpg",
    dealer: "Benz Cars in Nigeria"
  },

  {
    id: 7,
    name: "BMW",
    logo: "/image2/carlogo9.jpg",
    dealer: "BMW Cars in Nigeria"
  },
]
  return (
    <>
      {/* Browse Car by Brand */}

      <div className='w-full h-auto py-2 lgw-full lg:h-auto'>

        {/* browse car by Type */}
        <div className="w-full h-auto flex flex-col justify-center items-center lg:w-full lg:flex lg:flex-row lg:justify-between lg:items-center lg:px-16 lg:py-4">
          <div className="w-full h-auto flex flex-row gap-4 justify-center items-center lg:w-full lg:flex lg:flex-row lg:justify-between lg:items-center lg:py-4">
            <p className="text-xl font-bold">Browse Cars by Brands</p>
            <div className="flex flex-row items-center">
              <p className="cursor-pointer">View all</p>
              <span><IoIosArrowRoundForward /></span>
            </div>
          </div>
        </div>

        {/* types */}

        {/* acarosel codes */}
        <div >
          <Swiper
            // modules={[ ]}
            modules={[Navigation, Pagination, Autoplay]}
            // modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={6}
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
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            // loop={false}
            // loop={true}
            className="overflow-hidden"
          >

            {/* addCars  */}

            <div className="w-full h-auto flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-center gap-2   ">
              {carLogos.map((logo) => (
                < SwiperSlide key={logo.id} >
                  <div className="w-full h-auto space-y-2  lg:w-70 lg:h-auto border border-black/10  lg:space-y-2 flex flex-col justify-center items-center lg:gap-2 lg:py-4 lg:px-2">
                    <Image src={logo.logo} width={300} height={300} alt="Lagos used cars" className="w-[90%] h-40 mx-auto lg:w-30 lg:h-30 object-cover" />
                    <p>{logo.name}</p>
                    <p className='text-black/30'>{logo.dealer}</p>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>


      {/* Browse Car by Type in Nigeria */}
      <div className="w-full lg:w-full py-2 h-auto lg:py-4 ">
        {/* browse car by Type */}
        <div className="w-full flex flex-row justify-between items-center px-8 lg:px-16 lg:py-4">
          <div className="w-full flex flex-row justify-between gap-4 items-center lg:py-4">
            <p className="text-xl font-bold">Browse Car Types in Nigeria</p>
            <div className="flex flex-row items-center ">
              <p className="cursor-pointer">View all</p>
              <span><IoIosArrowRoundForward /></span>
            </div>
          </div>
        </div>



        {/* Browse Car Types in Nigeria */}

        {/* acarosel codes */}
        <div >
          <Swiper
            // modules={[ ]}
            // modules={[Navigation, Pagination, Autoplay]}
            // modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={6}
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
              {typeCar.map((type) => (
                < SwiperSlide key={type.id} >
                  <div className="w-full  lg:w-80 lg:h-40 border border-black/10 flex flex-col justify-center items-center lg:gap-2 lg:py-4 lg:px-2">
                    <Image src={type.logo} width={300} height={300} alt="Lagos used cars" className="w-[90%] h-30 mx-auto lg:w-50 lg:h-30 lg:py-2 object-cover" />
                    <p className='text-center text-black/30'>{type.name}</p>
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
