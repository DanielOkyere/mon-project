import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {Link} from "react-router-dom"

import house1 from "./../../images/house_1.jpg"
import house2 from "./../../images/house_2.jpg"
import house3 from "./../../images/house_3.jpg"
import house4 from "./../../images/house_4.jpg"
import house5 from "./../../images/house_5.jpg"
import house6 from "./../../images/house_6.jpg"
import house7 from "./../../images/house_7.jpg"
import house8 from "./../../images/house_8.jpg"
import house9 from "./../../images/house_9.jpg"

import {AiFillStar} from "react-icons/ai"

function BuildingDetails() {
  return (
    <div className='w-full mx-4 my-4 mx-16'>
      <Navbar/>
      <div className='grid grid-cols-2 bg-geen-400 my-12 w-full'>
        <div className='col-span-1 my-6 pr-12 py-12 border-r border-app-pink'>
          <h1 className='text-5xl font-bold'>Lorem Ipsum Dolor Sit Amet</h1>
          <h4 className='text-xl text-app-text-gray my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec est accumsan, maximus tellus in, congue ligula</h4>
        
          <div className='flex items-center'>
          <AiFillStar style={{color:"#ef4444"}} size="2.4em"/>
            <h2 className='text-4xl ml-1'>3.6</h2>
          </div>
          
          <div>
            <ul className='list-disc p-4 text-lg mb-8 mt-4'>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Ut nec est accumsan</li>
              <li>Maximus tellus in, congue ligula</li>
              <li>Ut nec est accumsan</li>
            </ul>
          </div>
          <Link to="/room-details">
          <button className='transition ease-in-out duration-500 app-text-pink border-2 py-3 px-20 border-app-pink hover:bg-app-pink hover:text-white'>
            <h1 className='text-md text-lg font-semibold'>Rent</h1>
          </button>
          </Link>
        </div>
        <div className='col-span-1 py-12 pl-12'>
          <div className='flex '>
            <div className='w-full bg-white'
            style={{
              backgroundImage: `url(${house4})`,
              backgroundPosition:"center",
              backgroundSize:"cover",
              backgroudnRepeat:"no-repeat"
              }}></div>

            <div className='ml-4'>
            <div className='w-20 h-20 hover:border-2 hover:border-app-orange mb-2 bg-white'
            style={{
              backgroundImage: `url(${house1})`,
              backgroundPosition:"center",
              backgroundSize:"cover",
              backgroudnRepeat:"no-repeat"
              }}></div>
            <div className='w-20 h-20 hover:border-2 hover:border-app-orange mb-2 bg-white'
            style={{
              backgroundImage: `url(${house4})`,
              backgroundPosition:"center",
              backgroundSize:"cover",
              backgroudnRepeat:"no-repeat"
              }}></div>
            <div className='w-20 h-20 hover:border-2 hover:border-app-orange mb-2 bg-white'
            style={{
              backgroundImage: `url(${house6})`,
              backgroundPosition:"center",
              backgroundSize:"cover",
              backgroudnRepeat:"no-repeat"
              }}></div>
            <div className='w-20 h-20 hover:border-2 hover:border-app-orange bg-white'
            style={{
              backgroundImage: `url(${house7})`,
              backgroundPosition:"center",
              backgroundSize:"cover",
              backgroudnRepeat:"no-repeat"
              }}></div>

            </div>
          </div>
          <h3 className='mt-8 mb-4 text-xl font-bold'>Recently Viewed</h3>
          <div className='flex'>
            <div className='flex-1 h-40 mr-6 bg-white'
            style={{
              backgroundImage: `url(${house5})`,
              backgroundPosition:"center",
              backgroundSize:"cover",
              backgroudnRepeat:"no-repeat"
              }}></div>
            <div className='flex-1 h-40 mr-6 bg-white'
            style={{
              backgroundImage: `url(${house7})`,
              backgroundPosition:"center",
              backgroundSize:"cover",
              backgroudnRepeat:"no-repeat"
              }}></div>
            <div className='flex-1 h-40 bg-white'
            style={{
              backgroundImage: `url(${house2})`,
              backgroundPosition:"center",
              backgroundSize:"cover",
              backgroudnRepeat:"no-repeat"
              }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildingDetails
