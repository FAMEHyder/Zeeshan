import React from 'react'
import HeroSection from '@/components/Home/heroSection'
import Achievements from '@/components/Home/achivements'
import HowWeDeliver from '@/components/Home/howWedeliver'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Achievements />
      <HowWeDeliver />
    </div>
  )
}

export default Home
