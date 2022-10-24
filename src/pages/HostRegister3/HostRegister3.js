import React from 'react'
import { Link } from 'react-router-dom'

import map from "./../../images/map.jpg"

function HostRegister3() {
  return (
    <div className='HostRegister2 flex items-center justify-center w-full h-100'>
      <div className=''>
        <h1 className='text-2xl font-bold text-center'>Location</h1>
        <h3 className='text-lg text-center text-app-text-gray'>Enter the location of the building you would like to host</h3>
        <div className='flex my-6'>
          <div className='inputs flex flex-col mr-2'>
            <input type="text" className='mb-3 p-3 w-80 rounded-sm' placeholder='Street name'/>
            <input type="text" className='mb-3 p-3 w-80 rounded-sm' placeholder='Apt, Suite, etc'/>
            <input type="text" className='mb-3 p-3 w-80 rounded-sm' placeholder='City'/>
            <input type="text" className='mb-3 p-3 w-80 rounded-sm' placeholder='Region'/>
            <input type="text" className='p-3 w-80 rounded-sm' placeholder='Country'/>
          </div>
          <div className='w-80 ml-2 bg-app-pink'
          style={{
            backgroundImage: `url(${map})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroudnRepeat:"no-repeat"
            }}></div>
        </div>
        <div className='buttons w-full flex justify-between mt-6'>
        <Link to="/register/host/property-type">
        <button className='w-48 border-2 border-app-pink text-app-pink font-bold p-3 rounded text-sm hover:bg-app-orange hover:border-app-orange hover:text-white'>Back</button>
        </Link>
        
        <Link to="/register/host/property-details">
          <button className='w-48 bg-app-pink text-app-white p-3 rounded text-sm hover:bg-app-orange'>
            Next
          </button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default HostRegister3
