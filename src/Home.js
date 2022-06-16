import React from 'react'
import Blogs from './components/Blogs'
import Brands from './components/Brands'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Slider from './components/Slider'
import Slider1 from './Slider1'

const Home = () => {
  return (
    <>
     <Blogs/>
     <Slider1/>
     <Section1/>
     <Section2/>
     <Brands/>
     <Slider/>
    </>
  )
}

export default Home