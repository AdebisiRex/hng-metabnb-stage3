import React from 'react'
import Card from '../components/Card'
import image1 from "../assets/Frame 151-3.png"
import image2 from "../assets/Frame 151-4.png"
import image3 from "../assets/Frame 151-5.png"
import image4 from "../assets/Frame 151-6.png"
import image5 from "../assets/Frame 151-7.png"
import image6 from "../assets/Frame 151-8.png"
import image7 from "../assets/Frame 151-9.png"
import image8 from "../assets/Frame 151-10.png"
import image9 from "../assets/Frame 151-11.png"
import image10 from "../assets/Frame 151-12.png"
import image11 from "../assets/Frame 151-13.png"
import image12 from "../assets/Frame 151-14.png"
import Navbar from '../components/Navbar'
import FilterNav from '../components/FilterNav'
 


const PlaceToStay = () => {
    let cardImages = [image1, image2, image3, image4, image5, image6, image7, image8,image9, image10, image11,image12]
  return (
    <div className='container w-full  p-2 box-border py-4 lg:py-12'>
        <Navbar/>
        <FilterNav/>


        <div className="card-container">
            {cardImages.map((item, id)=><Card key={id} img={item}/>)}
        </div>
    </div>
  )
}

export default PlaceToStay