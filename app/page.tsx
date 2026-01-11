import Hero from '@/components/landing/hero'
import Navbar from '@/components/landing/nav'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full flex flex-col relative z-10'>
      <Navbar/>
      <Hero/>
      
    </div>
  )
}

export default Page
