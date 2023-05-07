import React from 'react'
import { Blog1, Blog2, Blog3, blogmain, blogmain2 } from '../assets'
const Blog = () => {
    return (
        <div className='text-black'>


            <div className='h-[60vh] bg-gradient-to-r from-[#EEFFFD] py-12 to-[#F2FFFD] flex justify-around items-center flex-col  my-12'>
                
                <div className='w-full flex flex-col items-center gap-6'>
                    <h1 className='text-[#54BDAF] text-5xl font-semibold'>OUR BLOGS</h1>
                    <p className='text-[#818181] xl:w-1/3 text-center lg:w-[40%] md:w-[55%] sm:w-[65%] w-[80%]'>Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.</p>
                    <div className='absolute md:flex hidden right-0 top-20'>
                        <img src={blogmain} className='w-full' />
                    </div>
                    <div className='absolute md:flex hidden top-40 left-0'>
                        <img src={blogmain2} className='w-2/3 h-2/3 xl:w-full xl:h-full' />
                    </div>
                </div>
                <div className='xl:w-[30%] lg:w-[33%] md:w-[40%] sm:w-[45%] xs:w-[55%] w-[70%] flex'>
                    <input placeholder='Search blog here' className='py-4 pl-2 w-[100%] text-black outline-none bg-white  border-gray-300 border-[1px] rounded-s-xl' />
                    <div className='bg-[#54BDAF] py-4 px-12 rounded-e-xl'></div>
                </div>
            </div>

            <div className='w-[90%] mx-auto flex justify-between items-center border-b-2 pb-2'>
                <p>All Categories</p>
                <p>Mental Peace</p>
                <p>Social life</p>
                <p>Culture</p>
                <p>Natural</p>
                <p>Travel</p>
                <p>Jobs</p>
                <p>Lifestyle</p>
                <button className='bg-lightcyan py-1 rounded-2xl text-white'>See more</button>
            </div>

            <div className='xs:w-[90%] w-[98%] mx-auto flex sm:flex-row flex-col justify-between items-center my-12'>
                
                <div className='sm:w-[45%] w-full'>
                    <img src={Blog1} className='w-full' />
                    <div className='flex justify-between text-lightcyan py-4 font-semibold px-1'>
                        <p className='text-lg'>Previous</p>
                        <p className='text-lg'>Next</p>
                    </div>
                </div>

                <div className='flex flex-col lg:gap-12 md:gap-10 sm:gap-4 xs:gap-2 sm:w-[50%] w-full'>
                    <div>
                        <button className='bg-gray-300 text-lightcyan'>Lifestyle</button>
                    </div>
                    <h2 className='text-[#262626] lg:text-5xl md:text-4xl sm:text-3xl font-bold'>Maintain a good habit
                        with yourself</h2>
                    <div className='inline'>
                        <p>Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.<span className='text-lightcyan'>Read More</span></p>
                    </div>
                </div>

            </div>
            

            <div className='w-[90%] flex mx-auto'>

                <div className='sm:w-[70%] w-full mx-auto flex flex-wrap justify-between'>

                    <div className='w-[45%] my-12 flex flex-col gap-4'>
                        <img src={Blog2} />
                        <h2 className='text-[#262626] text-3xl font-bold'>Maintain a good habit
                            with yourself</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.</p>
                        <p className='text-lightcyan text-2xl font-semibold'>Read More</p>
                    </div>
                    <div className='w-[45%] my-12 flex flex-col gap-4'>
                        <img src={Blog2} />
                        <h2 className='text-[#262626] text-3xl font-bold'>Maintain a good habit
                            with yourself</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.</p>
                        <p className='text-lightcyan text-2xl font-semibold'>Read More</p>
                    </div>
                    <div className='w-[45%] my-12 flex flex-col gap-4'>
                        <img src={Blog2} />
                        <h2 className='text-[#262626] text-3xl font-bold'>Maintain a good habit
                            with yourself</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.</p>
                        <p className='text-lightcyan text-2xl font-semibold'>Read More</p>
                    </div>
                    <div className='w-[45%] my-12 flex flex-col gap-4'>
                        <img src={Blog2} />
                        <h2 className='text-[#262626] text-3xl font-bold'>Maintain a good habit
                            with yourself</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.</p>
                        <p className='text-lightcyan text-2xl font-semibold'>Read More</p>
                    </div>
                    <div className='w-[45%] my-12 flex flex-col gap-4'>
                        <img src={Blog2} />
                        <h2 className='text-[#262626] text-3xl font-bold'>Maintain a good habit
                            with yourself</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.</p>
                        <p className='text-lightcyan text-2xl font-semibold'>Read More</p>
                    </div>
                    <div className='w-[45%] my-12 flex flex-col gap-4'>
                        <img src={Blog2} />
                        <h2 className='text-[#262626] text-3xl font-bold'>Maintain a good habit
                            with yourself</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.</p>
                        <p className='text-lightcyan text-2xl font-semibold'>Read More</p>
                    </div>
                    
                </div>

                <div className='w-[30%] hidden mx-auto sm:flex flex-col items-center mt-12 '>
                    <div className='w-[90%]'>
                        <h2 className='text-[#262626] text-xl mb-3 font-bold'>Recent Post</h2>
                        
                        <div className='flex mb-4'>
                            <img src={Blog3} />
                            <div className='bg-gray-200 rounded-ee-2xl rounded-e-2xl p-4'>
                                <h2 className='text-[#262626]  font-bold'>Maintain a good habit
                                    with yourself</h2>
                            </div>
                        </div>
                        
                        <div className='flex mb-4'>
                            <img src={Blog3} />
                            <div className='bg-gray-200 rounded-ee-2xl rounded-e-2xl p-4'>
                                <h2 className='text-[#262626]  font-bold'>Maintain a good habit
                                    with yourself</h2>
                            </div>
                        </div>
                        <div className='flex mb-4'>
                            <img src={Blog3} />
                            <div className='bg-gray-200 rounded-ee-2xl rounded-e-2xl p-4'>
                                <h2 className='text-[#262626]  font-bold'>Maintain a good habit
                                    with yourself</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-[90%]'>
                        <h2 className='text-[#262626] text-xl mt-72 mb-3 font-bold'>Recently viewed</h2>
                        <div className='flex mb-4 '>
                            <img className='' src={Blog3} />
                            <div className='bg-gray-200 rounded-ee-2xl rounded-e-2xl p-4'>
                                <h2 className='text-[#262626]  font-bold'>Maintain a good habit
                                    with yourself</h2>
                            </div>
                        </div>
                        <div className='flex mb-4'>
                            <img src={Blog3} />
                            <div className='bg-gray-200 rounded-ee-2xl rounded-e-2xl p-4'>
                                <h2 className='text-[#262626]  font-bold'>Maintain a good habit
                                    with yourself</h2>
                            </div>
                        </div>
                        <div className='flex mb-4'>
                            <img src={Blog3} />
                            <div className='bg-gray-200 rounded-ee-2xl rounded-e-2xl p-4'>
                                <h2 className='text-[#262626]  font-bold'>Maintain a good habit
                                    with yourself</h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-[90%]'>
                        <h2 className='text-[#262626] text-xl mt-72 mb-3 font-bold'>View more stories</h2>
                        <div className='flex mb-4 '>
                            <img className='' src={Blog3} />
                            <div className='bg-gray-200 rounded-ee-2xl rounded-e-2xl p-4'>
                                <h2 className='text-[#262626]  font-bold'>Maintain a good habit
                                    with yourself</h2>
                            </div>
                        </div>
                        <div className='flex mb-4'>
                            <img src={Blog3} />
                            <div className='bg-gray-200 rounded-ee-2xl rounded-e-2xl p-4'>
                                <h2 className='text-[#262626]  font-bold'>Maintain a good habit
                                    with yourself</h2>
                            </div>
                        </div>
                        <div className='flex mb-4'>
                            <img src={Blog3} />
                            <div className='bg-gray-200 rounded-ee-2xl rounded-e-2xl p-4'>
                                <h2 className='text-[#262626]  font-bold'>Maintain a good habit
                                    with yourself</h2>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                

            </div>
        </div>
    )
}

export default Blog
