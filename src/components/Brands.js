import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import brand1 from '../img/brand1.png'
// import brand2 from '../img/brand2.png'
import brand3 from '../img/brand3.png'
import brand4 from '../img/brand4.png'
// import brand5 from '../img/brand5.png'

const Brands = () => {
    const options = {
        center: true,
        dots: false,
        loop:true,
        autoplay: true,
        nav: true,
        responsive: {
            0: {
                items: 3,
            },
            400: {
                items: 3,
            },
            600: {
                items: 3,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,
    
            }
        },
    };
  return (
    <>
     <div className='Container-fluid'>
      <div className='lorem pt-5'>
        <OwlCarousel
          className='owl-theme lor'
          loop
          margin={10}
          nav
          // items={5}
          {...options}
        >
          <div className='cent'>
            <div className='brandBox'>
              <img className='item123' src={brand1} />
            </div>
          </div>
          <div className='cent'>
            <div className='brandBox'>
              <img className='item123' src={brand4} />
            </div>
          </div>

          <div className='cent'>
            <div className='brandBox'>
              <img className='item123' src={brand3} />
            </div>
          </div>

          <div className='cent'>
            <div className='brandBox'>
              <img className='item123' src={brand4} />
            </div>
          </div>

          <div className='cent'>
            <div className='brandBox'>
              <img className='item123' src={brand3} />
            </div>
          </div>

          <div className='cent'>
            <div className='brandBox'>
              <img className='item123' src={brand4} />
            </div>
          </div>
        </OwlCarousel>
        ;
      </div>
      <div className='text-center pb-5'>
        <button className='btn btn-outline-light w-25'>ALL BRANDS</button>
      </div>
    </div>
    </>
  )
}

export default Brands
