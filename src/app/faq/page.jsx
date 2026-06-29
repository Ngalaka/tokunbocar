"use client"
import Faq from '@/component/Faq'
import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import React from 'react'
export default function page() {
  return (
    <>
    <div>
       <Navbar/>
    </div>
    <div>
      <Faq/>
    </div>
    <div>
        <Footer />
    </div>
    </>

  )
}
