import React from 'react'
import slide1 from "../img/slide1.png"
import slide2 from "../img/slide2.jpg"
import slide3 from "../img/slide3.png"
import slide4 from "../img/slide4.jpg"
import slide5 from "../img/slide5.jpg"
import slide6 from "../img/slide6.jpg"
import slide7 from "../img/slide7.jpg"

const Slider = () => {
  return (
    <>
     <div className='row border-bottom'>
      <marquee>
        <img src={slide1} alt=""/>
        <img src={slide2} alt=""/>
        <img src={slide3} alt=""/>
        <img src={slide4} alt=""/>
        <img src={slide5} alt=""/>
        <img src={slide6} alt=""/>
        <img src={slide7} alt=""/>
      </marquee>
     </div> 
    </>
  )
}

export default Slider
