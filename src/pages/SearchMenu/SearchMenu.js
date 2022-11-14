import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import RoomCard from '../../components/RoomCard/RoomCard'
import SearchCard from '../../components/SearchCard/SearchCard'

import house1 from "./../../images/house_1.jpg"
import house2 from "./../../images/house_2.jpg"
import house3 from "./../../images/house_3.jpg"
import house4 from "./../../images/house_4.jpg"
import house5 from "./../../images/house_5.jpg"
import house6 from "./../../images/house_6.jpg"
import house7 from "./../../images/house_7.jpg"
import house8 from "./../../images/house_8.jpg"
import house9 from "./../../images/house_9.jpg"

function SearchMenu() {
  return (
    <div className='m-4  w-full'>
      <Navbar/>
      <div className='grid grid-cols-4 my-16 mx-24'>
        <div className='col-span-1 border-r border-app-pink py-12 px-4'>
          <h3 className='text-3xl font-semibold text-app-text-dark'>Search</h3>
          <div className='my-8'>
          <input type="text" className='mb-3 p-2 w-full rounded-sm' placeholder='Region'/>
          <input type="text" className='mb-3 p-2 w-full rounded-sm' placeholder='City'/>
          <div className='flex'>
            <input type="date" className='flex-1 mb-3 p-2 w-full rounded-sm mr-1' placeholder='From'/>
            <input type="date" className='flex-1 mb-3 p-2 w-full rounded-sm ml-1' placeholder='To'/>
          </div>
          <input type="number" className='mb-3 p-2 w-full rounded-sm' placeholder='Rooms'/>
          <button className='my-2 bg-app-pink text-white w-full py-2 rounded'>Search</button>
          </div>
        </div>
        <div className='col-span-3 px-6 py-12'>
          <h3 className='text-3xl font-semibold'>6 Properties found</h3>
          <SearchCard img={house1}/>
          <SearchCard img={house2}/>
          <SearchCard img={house3}/>
          <SearchCard img={house4}/>
          <SearchCard img={house5}/>
          <SearchCard img={house6}/>
        </div>
      </div>
    </div>
  )
}

export default SearchMenu
