import React from 'react'

//images
import img1 from "../assets/image 4.png";
import img2 from "../assets/image 6.png";
import img3 from "../assets/image 3.png";
import img4 from "../assets/image 5.png";

const HeroMain = () => {
  return (
    <>
    <div className="md:grid mt-24 container px-2 items-center grid-cols-12 md:gap-16 gap-4">
        <div className="lg:col-span-8 md:col-span-9 ">
          <h1 className=" mb-10 text-4xl lg:text-6xl leading-snug">
            Rent a <span className="text-primary font-semibold">Place</span>{" "}
            away from <span className="text-primary font-semibold">Home</span>{" "}
            in the <span className="text-primary font-semibold">Metaverse</span>
          </h1>
          <p className="lg:text-2xl text-md md:text-xl mb-10">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            confort zone
          </p>

          <div className="rounded-xl  w-3/4 border overflow-hidden border-5 border-gray-300">
            <input
              className="w-2/3 px-4"
              type="text"
              placeholder="Search for location"
            />
            <button className="bg-primary  text-white w-1/3 py-2">
              Search{" "}
            </button>
          </div>
        </div>
        <div className="flex overflow-x-auto gap-2 relative col-span-3 lg:col-span-4">
          <div className="flex gap-2 md:block md:mt-16 mt-4">
            <img className="md:mb-2 block" src={img1} alt="" />
            <img className='block' src={img2} alt="" />
          </div>
          <div className='hidden  md:block  mt-2 md:m-0'>
            <img className="mb-2 " src={img3} alt="" />
            <img className="mb-2 " src={img4} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroMain