import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='NavBar'>
        <div className='Nav-content flex flex-row items-center justify-between'>
            {/* Left of Navbar */}
            <div className='Nav-left flex flex-row items-end'>
                <h1 className='font-bold text-2xl'>Logo</h1>
                <Link to="/" className='ml-8'>
                <h1 className='text-md font-semibold'>Home</h1>
                
                </Link>
                <Link to="/" className='ml-8'>
                <h1 className='text-md font-semibold'>Back</h1>
                
                
            
                </Link>
            </div>

            {/* right of Navbar */}
            <div className='Nav-right flex flex-row items-center'>
                <Link to="/register/host/credentials" className='ml-8 hover:text-white app-text-pink border-2 py-2 px-4 border-app-pink hover:bg-app-pink transition ease-in-out duration-500'>
                <h1 className='text-md'>Become a Host</h1>
                </Link>
                <Link to="/login" className='ml-8'>
                <h1 className='text-md font-semibold'>Login</h1>
                </Link>
                <Link to="/register/user" className='ml-8'>
                <h1 className='text-md font-semibold'>Sign Up</h1>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
