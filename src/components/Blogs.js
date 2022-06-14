import React from 'react'
import img1 from "../img/img1.jpg"
import img3 from "../img/img3.jpg"


const Blogs = () => {
  return (
    <>
      <div className='row'>
        <div className='col-lg-12 col-sm-12 img-fluid'>
          <div>
            <img src={img1} alt="" width={"100%"}/>
          </div>
        </div>
        {/* <div className='col-lg-4 col-sm-12'>
          <div>
            <img src={img2}/>
          </div>
        </div>
        <div className='col-lg-4 col-sm-12'>
          <div>
            <img src={img3}/>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Blogs
