import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import Navbar from '../../components/Navbar/Navbar'

function HostRegister1() {
  return (
    <div className="Home p-4 flex flex-col w-full">
      <Navbar />
    <div className='HostRegister1 flex items-center justify-center w-full mt-32'>
=======

function HostRegister1() {
  return (
    <div className='HostRegister1 flex items-center justify-center w-full'>
>>>>>>> 460fd3f8d7cdb4326a9b4596209b0d7432a65e74
      <div className='SignInDiv flex-flex-wrap'>
        <h3 className='font-bold text-2xl text-app-text-dark text-center mb-4'>Sign Up</h3>
        <div className='flex flex-wrap w-full mb-2'>
        <input type="text" className='mb-3 p-2 flex-1 rounded-sm mr-2' placeholder='First Name'/>
        <input type="text" className='mb-3 p-2 flex-1 rounded-sm' placeholder='Last Name'/>
        </div>
        <input type="text" className='mb-4 p-2 w-full rounded-sm' placeholder='Email'/>
        <div className='flex flex-wrap w-full mb-2'>
        <div className='phoneNum'>
          <h6 className='text-xs text-app-text-gray mb-2'>Phone number:</h6>
          <div className='inputs'>
          <input type="text" className='mb-3 p-2 w-16 rounded-sm mr-2' placeholder='+233'/>
          <input type="text" className='mb-3 p-2 flex-1 rounded-sm mr-2' placeholder=''/>
          </div>
        </div>
        <div className='DoB '>
          <h6 className='text-xs text-app-text-gray mb-2'>Date of Birth:</h6>
          <input type="date" className='mb-3 p-2 w-48 rounded-sm' placeholder=''/>
        </div>
        </div>
        <input type="password" className='mb-4 p-2 w-full rounded-sm' placeholder='Password'/>
        <input type="password" className='mb-4 p-2 w-full rounded-sm' placeholder='Confirm Password'/>
        <Link to="/register/host/property-type">
          <button className='w-full bg-app-pink text-app-white p-3 rounded text-sm'>
          Continue
          </button>
        </Link>
        <div className='prompt m-2 flex items-center justify-center p-2'>
          <h6 className='text-sm'>Already have an account?</h6>
<<<<<<< HEAD
          <Link to='/login'>
          <button className="ml-2 text-app-pink text-sm font-bold">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
=======
          <button className="ml-2 text-app-pink text-sm font-bold">Sign In</button>
        </div>
      </div>
    </div>
>>>>>>> 460fd3f8d7cdb4326a9b4596209b0d7432a65e74
  )
}

export default HostRegister1
