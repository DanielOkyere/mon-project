import React from 'react'
import { Link } from 'react-router-dom'

import hotel from "./../../images/hotel.jpg"
import hostel from "./../../images/hostel.jpg"

function HostRegister2() {
  return (
    <div className='HostRegister2 flex items-center justify-center w-full'>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold mb-2'>Type of Property</h1>
        <h3 className='text-md text-app-text-gray w-full mb-4 text-center'>Select the type which best describes the property you would like to sell</h3>
      
      <div className='Options flex'>
      <div className='HotelOption m-4'>
        <Link to="/register/host/location-details">
        <div className='w-60 h-60 bg-app-pink rounded'
        style={{
          backgroundImage: `url(${hotel})`,
          backgroundPosition:"center",
          backgroundSize:"cover",
          backgroudnRepeat:"no-repeat"
          }}
          ></div>
        <h2 className='font-bold my-2 text-center text-xl'>Hotel</h2>
        </Link>
      </div>
      <div className='HostelOption m-4'>
        <Link to="/register/host/location-details">
        <div className='w-60 h-60 bg-app-pink rounded'
        style={{
          backgroundImage: `url(${hostel})`,
          backgroundPosition:"center",
          backgroundSize:"cover",
          backgroudnRepeat:"no-repeat"
          }}></div>
        <h2 className='font-bold my-2 text-center text-xl'>Hostel</h2>
        </Link>
      </div>
      </div>
      </div>
    </div>
  )
}

export default HostRegister2
