"use client"
import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import Signin from '@/component/Signin'
import React from 'react'

export default function page() {
  return (
    <>
    <div>
           <Navbar/>
        </div>
      <div>
        <Signin/>
      </div>
      <div>
            <Footer />
      </div>
    </>
  )
}
