import React from 'react'
import "./HostRegister4.css"

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

function HostRegister4() {
  return (
    <div className='HostRegister4 w-full h-full mx-40 mb-32 mt-12'>
      <h1 className='text-center font-bold text-3xl'>Property Details</h1>
      <h1 className='text-center text-xl text-app-text-gray mb-2'>Fill out the following details about your home</h1>
      <hr/>

      <div className='BasicInfo my-6'>
        <h3 className='text-lg mb-2 font-semibold'>Basic information</h3>
        <input type="text" className='mb-3 p-2 w-full rounded-sm' placeholder='Street name'/>
        <textarea className='w-full h-60'/>
      </div>

      <div className='Photos my-6'>
        <h3 className='text-lg mb-2 font-semibold'>Photos</h3>
        <div className='w-full h-60 bg-white'></div>

      <div class="w-full flex-wrap flex my-12 h-96 overflow-y-scroll pb-10 items-start justify-center">
        {images.map((img, index) =>(
          <div class="w-40 h-40 m-2 bg-white"
          style={{
            backgroundImage: `url(${images[index]})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroudnRepeat:"no-repeat"
            }}></div>)
        )}
      </div>
      </div>

      <div className='Rooms my-6'>
        <div className='flex mb-4 items-center justify-between'>
          <div className='flex items-center'>
            <h3 className='text-lg font-semibold'>Rooms</h3>
            <h3 className='ml-6 text-sm font-semibold text-app-text-gray'>Filter by</h3>
          </div>
          <div>
            <Link to="/add-room">
              <h2 className='text-app-pink font-bold text-xl'>Add</h2>
            </Link>
          </div>
        </div>
        <hr/>
      </div>
      <RoomCard img={house2}/>
      <RoomCard img={house4}/>
      <RoomCard img={house5}/>
      <div className='flex justify-end my-12'>
       <Link to="/">
       <button className='bg-app-pink text-white p-3 w-48 rounded'>Submit</button>
       </Link>
      </div>
    </div>
  )
}

export default HostRegister4
