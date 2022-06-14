import React from 'react'
import img2 from "../img/img2.jpg"
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <>
    <div className='container pt-5'>
    <div className='row pb-4'>
        <div className='col-lg-6 col-sm-12 pt-5'>
            <Link to='/' style={{textDecoration:"none"}}>
            <div className='text-white' style={{textDecoration:"none"}}>
            <h2 className=' text-uppercase'>TIME TO MEET, HOW TO FIND THE PERFECT LOOK?</h2>
            <p>These last months of the year are loaded with many traditions, delicious food, but above all many reunions with special people in our lives. </p>
            <p>Surely your calendar is...</p>
            <p className='text-white text-uppercase'>See More</p>
            </div>
            </Link>
        </div>
        <div className='col-lg-6 col-sm-12'>
            <div className='zoom'>
                <img src={img2} alt="" width={"350px"} height={"350px"} className="animated-img"/>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Section1
