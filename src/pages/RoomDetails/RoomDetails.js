import React from 'react'
import AvailableRoomCard from '../../components/AvailableRoomCard/AvailableRoomCard'
import Navbar from '../../components/Navbar/Navbar'
import RoomCard from '../../components/RoomCard/RoomCard'

import house1 from "./../../images/house_1.jpg"
import house2 from "./../../images/house_2.jpg"
import house3 from "./../../images/house_3.jpg"
import house4 from "./../../images/house_4.jpg"
import house5 from "./../../images/house_5.jpg"
import house6 from "./../../images/house_6.jpg"
import house7 from "./../../images/house_7.jpg"
import house8 from "./../../images/house_8.jpg"
import house9 from "./../../images/house_9.jpg"

function RoomDetails() {
  return (
    <div className='m-4 w-full'>
        <Navbar/>
      
    <div className='my-12 mx-48'>
      <h1 className='text-3xl font-bold text-app-text-dark text-center mb-2'>Lorem Ipsum Dolor Sit Amet</h1>
      <h3 className='text-center text-xl text-app-text-gray mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec est accumsan, maximus tellus in, congue ligula</h3>
      <hr/>

      <h3 className='my-4 text-2xl'>Available Rooms</h3>
      <AvailableRoomCard img={house3}/>
      <AvailableRoomCard img={house2}/>
      <AvailableRoomCard img={house6}/>
      <AvailableRoomCard img={house7}/>
      <AvailableRoomCard img={house4}/>
    </div>
    </div>
  )
}

export default RoomDetails
