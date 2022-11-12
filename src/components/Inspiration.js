import React from 'react'
import Card from './Card'

//images
import image1 from "../assets/Frame 151.png"
import image2 from "../assets/Frame 1511.png"
import image3 from "../assets/Frame 151-1.png"
import image4 from "../assets/Frame 151-7.png"
import image5 from "../assets/Frame 151-3.png"
import image6 from "../assets/Frame 151-4.png"
import image7 from "../assets/Frame 151-5.png"
import image8 from "../assets/Frame 151-6.png"


const Inspiration = () => {
    let imageArray =[image1,image2, image3, image4, image5,image6, image7, image8]
  return (
    <div className='md:py-12 py-2 container  '>
        <h1 className='font-bold text-2xl  md:text-4xl text-center mb-8 '>Inspiration for your next adventure</h1>
        <div className=''>

        </div>
       
       <div className="card-container p-2">
        
        {imageArray.map((item, id)=><Card key={id} img={item}/>)}
        
        
       </div>


    </div>
  )
}

export default Inspiration