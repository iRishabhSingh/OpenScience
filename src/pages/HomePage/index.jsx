import React from 'react'
import HeroSection from './HeroSection'
import Categories from './Categories'
import TopProjects from './TopProjects'

const index = () => {
  return (
    <>
    <div className="flex flex-col">
        <HeroSection/>
        <Categories/>
        <TopProjects/>
    </div>
    </>
  )
}

export default index