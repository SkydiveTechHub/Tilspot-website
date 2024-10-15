import React from 'react'
import Hero from '../../components/home/hero'
import MainLayout from '../../layout/MainLayout'
import Services from '../../components/home/services'
import EmailCard from '../../components/home/emailCard'
import Connect from '../../components/home/connect'
import Blog from '../../components/home/blog'
import Banner from '../../components/home/banner'
import Testimonials from '../../components/home/testimonial'

const Home = () => {
  return (
    <div>
      <MainLayout>
        <Hero/>
        <Services/>
        <Connect/>
        <Banner/>
        <Testimonials/>
        <Blog/>
        <EmailCard/>
      </MainLayout>
      
    </div>
  )
}

export default Home
