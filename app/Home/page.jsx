import React from 'react'
import HeroSection from '@/components/Home/heroSection'
import Achievements from '@/components/Home/achivements'
import HowWeDeliver from '@/components/Home/howWedeliver'
import Review from '@/components/Home/Review'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Achievements />
      <HowWeDeliver />
      <Review />
    </div>
  )
}

export default Home
