import Features from '@/components/landing/features'
import Footer from '@/components/landing/footer'
import Hero from '@/components/landing/hero'
import Integration from '@/components/landing/integration'
import Navbar from '@/components/landing/nav'
import Pricing from '@/components/landing/pricing'
import SocialProof from '@/components/landing/social'
import React from 'react'


const Page = () => {
  return (
    <div className='w-full flex flex-col relative z-10'>
      <Navbar/>
      <Hero/>
      <SocialProof/>
      <Features/>
      <Integration/>
      <Pricing/> 
      <Footer/>
      
      
    </div>
  )
}

export default Page
