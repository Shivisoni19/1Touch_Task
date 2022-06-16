import React from 'react'

const Header = () => {
  return (
    <>
      <div className='border-bottom header d-lg-block d-sm-none'>
        <div className='row head ml-0 mr-0'>
          <div className='col-5'>
             <h6 className='text-uppercase text-light-yellow offset-1 pt-4 pb-4'>OPEN NOW FRIDAY 7H00-13H00</h6>
          </div>
          <div className='col-3'></div>
          <div className='col-2'>
             <input class="form-control mt-3" type="search" placeholder="&#xF002; Search" aria-label="Search" style={{borderRadius:"20px"}}/>
          </div>
          <div className='col-1'></div>
        </div>
      </div>
    </>
  )
}

export default Header
