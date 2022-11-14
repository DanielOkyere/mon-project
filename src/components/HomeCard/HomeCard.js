import React from 'react'

import {Link} from "react-router-dom"
import {AiFillStar} from "react-icons/ai"

function HomeCard(props) {
  return (
    <div className='HomeCard flex flex-col max-w-3xl w-60 mx-6 my-6'>
      <Link to="/building-details">
      <div className='bg-app-pink w-60 h-60 rounded-xl' 
      style={{
        backgroundImage: `url(${props.img})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroudnRepeat:"no-repeat"
        }}>
      </div>
      <div className='flex flex-col mt-2'>
          <h3 className='text-md font-bold'>Lorem Ipsum Dolor</h3>
          <h5 className='text-sm'>Accra, Greater Accra</h5>
          <div className='flex flex-row items-center justify-between'>
          <h5 className='text-sm'>GHc 300 per month</h5>
          <div className='flex items-center'>
            <AiFillStar style={{color:"#ef4444"}}/>
            <h5 className='text-sm ml-1'> 3.52</h5>
          </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default HomeCard
