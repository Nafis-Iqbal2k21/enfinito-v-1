import Banner from '@/components/Home/Banner'
import WorkProcess from '@/components/WorkProcess'
import Services from '@/components/Services'
import React from 'react'
import MeetingChat from '@/components/MeetingChat'
import Reviews from '@/components/Reviews'
import ChooseUs from '@/components/ChooseUs'
import Statistics from '@/components/Statistics'
import Slider from '@/components/Slider'

function page() {
  return (
    <>
      <Banner />
      <Slider />
      <Services />
      <WorkProcess />
      <Statistics />
      <ChooseUs />
      <Reviews />
      <MeetingChat />
    </>
  )
}

export default page