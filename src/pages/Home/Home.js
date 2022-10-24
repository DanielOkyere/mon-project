import React from 'react'
import HomeCard from '../../components/HomeCard/HomeCard'
import Navbar from '../../components/Navbar/Navbar'

import house1 from "./../../images/house_1.jpg"
import house2 from "./../../images/house_2.jpg"
import house3 from "./../../images/house_3.jpg"
import house4 from "./../../images/house_4.jpg"
import house5 from "./../../images/house_5.jpg"
import house6 from "./../../images/house_6.jpg"
import house7 from "./../../images/house_7.jpg"
import house8 from "./../../images/house_8.jpg"
import house9 from "./../../images/house_9.jpg"

import {Link} from "react-router-dom"

function Home() {
  return (
    <div className='Home p-4 flex flex-col'>
      <Navbar/>

      {/* Room Type nav bar */}
      <div className='Room-type flex flex-wrap items-center justify-center mt-8 mb-4'>
        <ul className='flex'>
          <li className='mx-6'>Hotel</li>
          <li className='mx-6'>Hostel</li>
          <li className='mx-6'>Guest House</li>
          <li className='mx-6'>Apartment</li>
          <li className='mx-6'>Full House</li>
          <li className='mx-6'>Shared House</li>
        </ul>
      </div>

      {/* Search Bar */}
      <div className='Search-bar-outer flex items-center justify-center'>
        <div className='Search-Bar'>
          <input className='border-r border-app-pink px-2 py-2' placeholder='City, province' type="text"/>
          <input className='border-r border-app-pink px-2 py-2' placeholder='from' type="date"/>
          <input className='border-r border-app-pink px-2 py-2' placeholder='to' type="date"/>
          <input className='px-4 py-2' placeholder='rooms' type="number"/>
          <button className='bg-app-pink py-2 rounded-sm px-6 text-white hover:bg-app-orange'>
            <Link className='' to="/search">Search</Link>
          </button>
        </div>
      </div>

      {/* Home Card */}
      <div className='flex flex-wrap items-center justify-center mt-12 mb-24'>
        <HomeCard img={house1}/>
        <HomeCard img={house2}/>
        <HomeCard img={house5}/>
        <HomeCard img={house4}/>
        <HomeCard img={house8}/>
        <HomeCard img={house6}/>
        <HomeCard img={house7}/>
        <HomeCard img={house3}/>
        <HomeCard img={house9}/>
        <HomeCard img={house2}/>
        <HomeCard img={house5}/>
        <HomeCard img={house7}/>
        <HomeCard img={house3}/>
        <HomeCard img={house9}/>
        <HomeCard img={house6}/>
        <HomeCard img={house1}/>
      </div>
    </div>
  )
}

export default Home
