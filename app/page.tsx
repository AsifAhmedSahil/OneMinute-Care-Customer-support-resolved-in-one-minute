import Features from '@/components/landing/features'
import Hero from '@/components/landing/hero'
import Navbar from '@/components/landing/nav'
import SocialProof from '@/components/landing/social'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full flex flex-col relative z-10'>
      <Navbar/>
      <Hero/>
      <SocialProof/>
      <Features/>
      
    </div>
  )
}

export default Page
