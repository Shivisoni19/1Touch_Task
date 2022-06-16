import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import top1 from './img/top1.jpg'
import top2 from './img/top2.jpg'
import top3 from './img/top3.jpg'
import top4 from './img/top4.jpg'

const Slider1 = () => {
  return (
    <>
      <div className='container-fluid bg-white pb-5'>
      <AwesomeSlider>
            <div>
                <img src={top1} width="1200vw" height="1500vw" className='img-fluid'/>
            </div>
            <div>
               <img src={top2} width="1200vw" height="1500vw" className='img-fluid'/>
            </div>
            <div>
               <img src={top3} width="1200vw" height="1500vw" className='img-fluid'/>
            </div>
            <div>
               <img src={top4} width="1200vw" height="1500vw" className='img-fluid'/>
            </div>
        </AwesomeSlider>
     </div>
    </>
  )
}

export default Slider1
