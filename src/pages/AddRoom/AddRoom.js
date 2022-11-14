import React from 'react'
import "./AddRoom.css"

import RoomCard from '../../components/RoomCard/RoomCard'
import { Link } from 'react-router-dom'

import house1 from "./../../images/house_1.jpg"
import house2 from "./../../images/house_2.jpg"
import house3 from "./../../images/house_3.jpg"
import house4 from "./../../images/house_4.jpg"
import house5 from "./../../images/house_5.jpg"
import house6 from "./../../images/house_6.jpg"
import house7 from "./../../images/house_7.jpg"
import house8 from "./../../images/house_8.jpg"
import house9 from "./../../images/house_9.jpg"

const images = [house1, house2, house3, house4, house5, house6, house7, house5, house8, house9, house4, house6]

function AddRoom() {
  return (
    <div className='AddRoom w-full h-full my-12 mx-40 mb-32'>
      <h1 className='text-center font-bold text-3xl'>Room Details</h1>
      <h1 className='text-center text-xl text-app-text-gray mb-2'>Fill out the following details about your room</h1>
      <hr/>

      <div className='BasicInfo my-6'>
        <h3 className='text-lg mb-2 font-semibold'>Name of Room</h3>
        <input type="text" className='mb-3 p-2 w-full rounded-sm' placeholder='Street name'/>
        <textarea className='w-full h-60'/>
        <div className='flex my-4'>
        <input type="text" className='flex-1 mb-3 mr-2 p-2 w-full rounded-sm' placeholder='Number of beds'/>
        <input type="text" className='flex-1 mb-3 ml-2 p-2 w-full rounded-sm' placeholder='Price per bed (GHc)'/>
        </div>
      </div>

      <div className='Photos my-6'>
        <h3 className='text-lg mb-2 font-semibold'>Photos</h3>
        <hr/>
        <div className='w-full my-4 h-60 bg-white'></div>

      <div class="w-full flex-wrap flex my-12 h-96 overflow-y-scroll pb-10 items-start justify-center">
      {images.map((img, index) =>(
          <div class="w-40 h-40 m-2 bg-white"
          style={{
            backgroundImage: `url(${images[index]})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroudnRepeat:"no-repeat"
            }}></div>))}

      </div>
      </div>

    <div className='Rooms my-6'>
      <h3 className='text-xl mb-3'>Room Features</h3>
      <div className='flex'>
        <input type="text" className='flex-1 mr-2 p-2 w-full rounded' placeholder='Feature'/>
        <button className='p-2 text-white bg-app-pink w-28 rounded'>Add</button>
      </div>
      <hr className='border-app-pink mt-8' />

      <div className='border-b border-app-text-light-gray p-4 flex justify-between'>
        <h5 className='text-md text-app-text-dark font-semibold'>Spacious interior</h5>
        <button className='text-app-pink text-2xl'>×</button>
      </div>

      <div className='border-b border-app-text-light-gray p-4 flex justify-between'>
        <h5 className='text-md text-app-text-dark font-semibold'>Dedicated Bathroom</h5>
        <button className='text-app-pink text-2xl'>×</button>
      </div>

      <div className='border-b border-app-text-light-gray p-4 flex justify-between'>
        <h5 className='text-md text-app-text-dark font-semibold'>Air Conditioner</h5>
        <button className='text-app-pink text-2xl'>×</button>
      </div>

      <div className='border-b border-app-text-light-gray p-4 flex justify-between'>
        <h5 className='text-md text-app-text-dark font-semibold'>Kitchen</h5>
        <button className='text-app-pink text-2xl'>×</button>
      </div>
    </div>
    <div className='flex items-center justify-end mt-24'>
    <Link to="/register/host/property-details">
    <button className='p-2 text-white bg-app-pink w-60 rounded'>Submit</button>
    </Link>
    </div>
    
    </div>
  )
}

export default AddRoom
