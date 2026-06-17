"use client"
import Drivenow from '@/component/Drivenow'
import FeatureCar from '@/component/FeatureCar'
import Recentcar from '@/component/Recentcar'
import Speedometer from '@/component/Speedometer'
import Splashscreen from '@/component/Splashscreen'
import Testimony from '@/component/Testimony'
import React from 'react'

export default function page() {
  return (
    <>
      <Splashscreen />
      <Recentcar />
      <FeatureCar />
      <Drivenow />
      <Recentcar />
      <Testimony />
      <Speedometer />

    </>
  )
}
