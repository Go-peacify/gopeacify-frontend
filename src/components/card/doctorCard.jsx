import React from 'react'

const DoctorCard = () => {
    return (
        <div className='w-56 h-80 my-5 border-[1px] rounded-lg p-2 border-gray-400 rounded-br-[50px] flex flex-col justify-between'>
            <div>
            <div className='rounded-lg overflow-hidden relative'>
                <img className='rounded-br-[50px]' src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" />
                <div className='absolute bottom-0 p-2 font-medium bg-white'>
                    <p>Therapist</p>
                </div>
            </div>
            <h2 className='font-semibold mt-4 ml-2 '>Dr. A. Singh</h2>
            <h5 className=' ml-2 text-[#D9D9D9]'>6+ yrs of experience</h5>
            <p className=' ml-2 text-xs text-[#D9D9D9]'>Expertise : Yoga, Work-life<br></br>Speaks : German, English</p>
            </div>
            <div className='items-end'>
                <button className='text-white bg-lightcyan px-2 text-sm py-1 rounded-2xl '>View Profile</button>
            </div>
        </div>
    )
}

export default DoctorCard
