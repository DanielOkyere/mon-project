import React from 'react'

import {MdBed} from "react-icons/md"

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

function RoomCard(props) {
  return (
    <div className='RoomCard flex my-8'>
        <div className='w-60 bg-app-pink'
        style={{
            backgroundImage: `url(${props.img})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroudnRepeat:"no-repeat"
            }}></div>
        <div className='w-full bg-white p-4'>
            <div className='flex justify-between mb-3'>
                <h4 className='text-app-text-dark text-xl font-semibold'>Deluxe</h4>
                <div className='flex'>
                    <h3 className='text-md text-app-pink pr-2 border-r border-app-pink'>Edit</h3>
                    <h3 className='text-md text-app-pink pl-2'>Delete</h3>
                </div>
            </div>
            <p className='text-app-text-gray mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec est accumsan</p>
            <div className='flex items-center justify-start'>
                <div className='flex items-center'>
                    <MdBed size="2em" style={{color:"#be185d"}}/>
                    <h3 className='text-xl ml-2 mr-16 text-app-pink font-semibold'>2</h3>
                </div>
                <div className='flex items-end'>
                    <h3 className='text-xl font-bold'>GHc</h3>
                    <h3 className='text-xl ml-4'>2300</h3>
                    <h3 className='text-sm text-app-text-gray ml-6'>per night</h3>
                </div>
            </div>
            <div className='flex justify-end items-center my-2'>
                <h4 className='text-md text-app-pink'>Available</h4>
                <PinkSwitch defaultChecked={true} />
            </div>
        </div>
    </div>
  )
}

export default RoomCard
