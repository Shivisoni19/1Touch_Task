import React from 'react'
import img3 from "../img/img3.jpg"
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <>
      <div className='container-fluid pt-5 bg-white pb-5'>
        <div className='container'>
           <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <div className='zoom'>
                        <img src={img3} alt="" width={"350px"} height={"350px"} className="animated-img"/>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12 pt-5'>
                    <Link to='/' style={{textDecoration:"none"}}>
                    <div className='text-dark' style={{textDecoration:"none"}}>
                    <h2 className=' text-uppercase'>FALL-WINTER 2020 FASHION TRENDS THAT YOU CAN FIND IN QUICENTRO SHOPPING</h2>
                    <p>Welcome October and welcome the new season. Although there is still enough heat to get the most out of our summer looks, our mind is ready to use all the... </p>
                    <p>Surely your calendar is...</p>
                    <p className='text-dark text-uppercase'>See More</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Section2
