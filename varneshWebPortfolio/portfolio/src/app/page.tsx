import React from 'react'
import Timeline from '@/app/components/Timeline'
import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import Footer from '@/app/components/Footer'
import Projects from '@/app/components/Projects'

function page() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Timeline></Timeline>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  )
}

export default page
