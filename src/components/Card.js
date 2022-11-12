import React from 'react'

//images
import star from "../assets/star.png"
import badge from "../assets/badge.png"

const Card = ({img}) => {
    
  return (
    <div className='card'>
        <img className=' w-full mb-2' src={img} alt="" />
        {/* <img className='absolute top-2 right-2' src={badge} alt="" /> */}
        <div className='flex justify-between mb-2'>
            <soan className="text-xs" >Desert King</soan>
            <span className='font-bold text-xs'>1MBT per night</span>
        </div>
        <div className='flex justify-between mb-2'>
            <span className='text-xs'>2345km away</span>
            <span className='text-xs'>available for 2weeks stay</span>
        </div>
        <div className='flex '>
            <img src={star} className="mr-2" alt="" />
            <img src={star} className="mr-2" alt="" />
            <img src={star} className="mr-2" alt="" />
            <img src={star} className="mr-2" alt="" />
            <img src={star} className="mr-2" alt="" />
        </div>

    </div>
  )
}

export default Card