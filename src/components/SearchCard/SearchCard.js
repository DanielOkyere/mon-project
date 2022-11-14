import React from 'react'

import {MdBed} from "react-icons/md"
import {AiFillStar} from "react-icons/ai"

import {Switch} from "@mui/material"
import { alpha, styled } from '@mui/material/styles';

const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: "#be185d",
      '&:hover': {
        backgroundColor: alpha("#be185d", theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: "#be185d",
    },
  }));

function SearchCard(props) {
  return (
    <div className='SearchCard flex my-8'>
        <div className='w-64 bg-app-pink'
        style={{
            backgroundImage: `url(${props.img})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroudnRepeat:"no-repeat"
            }}></div>
        <div className='w-full bg-white p-4'>
            <div className='flex justify-between mb-2'>
                <h4 className='text-app-text-dark text-xl font-semibold'>Lorem Ipsum Dolor </h4>
              <div className='flex'>
                <AiFillStar style={{color:"#ef4444"}}/>
                <h5 className='text-sm ml-1'> 3.52</h5>
              </div>
            </div>
            <p className='text-app-text-gray mb-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec est accumsan</p>
            
            <div className='flex justify-between items-center mt-2'>
              <p className='text-app-text-gray my-4 text-lg'>Accra, Greater Accra</p>
              <button className='text-app-pink text-sm p-1 w-24 rounded border-2 font-semibold border-app-pink hover:text-white hover:bg-app-pink'>View</button>
            </div>
            </div>
            
    </div>
  )
}

export default SearchCard
