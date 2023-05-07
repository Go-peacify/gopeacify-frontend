import React from 'react'
import { TestimonialData} from "../constants";
export default function TestimonialSwiper({ name, rating, img, testimonial }) {
  return (
    <div>
        <div className='w-[580px] md:w-[651px] md:h-[245px] p-5 border mb-32 md:mb-0 rounded-br-full border-gray-300 '>
            <div className='block sm:flex sm:flex-row'>
              <div>
                <img className="w-[143px] h-[152px] rounded-xl" src={img}/>
              </div>
              <div className=' text-gray-700 ml-5'>
              <h1 className=" text-xl font-bold" >{name}</h1>
                <h1 className=" text-xl font-medium " >{rating}</h1>
                <p className=" text-sm font-medium w-[315px] h-[94px] " >{testimonial}</p>
              </div>
            </div>
          </div>
    </div>
  )
}
