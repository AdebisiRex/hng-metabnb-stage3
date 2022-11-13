import React, { useState } from 'react'

const FilterNav = () => {   
    const [showFilter, setshowFilter] = useState(true)
  return (
    <div className='lg:mt-24 mt-12 mb-4 md:flex justify-between'>
        <ul className={`md:flex ${showFilter?"hidden":""}`}>
            <li className='md:mr-8 my-3'>Restaurant</li>
            <li className='md:mr-8 my-3'>Cottage</li>
            <li className='md:mr-8 my-3'>Castle</li>
            <li className='md:mr-8 my-3'>Fantasy city</li>
            <li className='md:mr-8 my-3'>Fantasy city</li>
            <li className='md:mr-8 my-3'>beach</li>
            <li className='md:mr-8 my-3'>Cabins</li>
            <li className='md:mr-8 my-3'>Off Grid</li>
            <li className='md:mr-8 my-3'>Farm</li>
        </ul>
        <button onClick={()=>setshowFilter(!showFilter)} className='flex items-center rounded-lg p-2 px-4 border border-dark'>

            Location
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-4 ml-4 text-gray-500"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
            
            
        </button>
    </div>
  )
}

export default FilterNav