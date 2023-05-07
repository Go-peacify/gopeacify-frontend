import React from 'react'
import { Flexible, GoalPlan, EllipseSadhna, Rope, Enneagram, Goal1, Img2, Img3, Img4, Img5, Img6, Img7, Img8 } from '../../assets'
const Sadhna = () => {
    const data = [
        { photo: Img2, name: "Transcendental Meditation" },
        { photo: Img3, name: "Guided Meditation" },
        { photo: Img4, name: "Vipassana Meditation" },
        { photo: Img5, name: "Metta Meditation" }
    ];
    return (
        <div className='text-black'>

            <div className='w-full flex'>

                <div className='lg:w-[45%] md:w-[50%] lg:p-16 md:p-6 w-[80%] mx-auto md:mx-0 my-24 md:my-0 gap-8 md:gap-0 flex flex-col justify-around'>
                    <h2 className='text-5xl '><span className='text-lightcyan font-semibold'>Goal Plan</span> is the best way to improve mental health.</h2>
                    <p>Lorem nullam sed lacus, arcu. Dui proin mauris neque vulputate morbi quis et semper. Dui tortor risus amet congue hendrerit integer.</p>
                    <div className='flex gap-6'>
                        <button className='bg-lightcyan text-white p-3'>lorem asdfgh</button>
                        <button className='bg-white text-black border-gray-400 p-3'>Ipsum lkjhgf</button>
                    </div>
                </div>

                <div className='lg:w-[55%] md:w-[50%] relative md:block hidden  '>
                    <div className='h-[80vh]'>
                        <img src={EllipseSadhna} className='w-full h-full object-cover' />
                    </div>
                    <img src={GoalPlan} className='absolute lg:top-0 md:top-[7em] z-20 left-[5em]' />
                </div>

            </div>

            <div className='w-[90%] rounded-md flex bg-[#B4F0E9] my-20 justify-between text-black m-auto px-8 py-4'>
                <div className='flex flex-col items-center gap-3 w-[22%]'>
                    <div className='bg-white p-4 rounded-full'>
                        <img src={Flexible} className='w-16' />
                    </div>
                    <h3 className='font-semibold'>Flexible schedule </h3>
                </div>

                <div className='flex flex-col items-center gap-3 w-[25%]'>
                    <div className='bg-white p-4 rounded-full'>
                        <img src={Enneagram} className='w-16' />
                    </div>
                    <h3 className='font-semibold'>Check enneagram </h3>
                </div>

                <div className='flex flex-col items-center gap-3 w-[22%]'>
                    <div className='bg-white p-4 rounded-full'>
                        <img src={Rope} className='w-16' />
                    </div>
                    <h3 className='font-semibold'>Available instruments </h3>
                </div>
            </div>

            <div className='relative '>
                <img src={Goal1} className='w-full' />
                <div className='absolute w-[40%] h-[70%] top-[5em] left-[7em] bg-gray-400 opacity-50'>
                </div>
            </div>


            <div className='bg-[#B4F0E9] py-16'>
                <div className='w-[80%] mx-auto '>
                    <h3 className='mb-6 text-sm font-semibold'>SERVICES</h3>
                    <h2 className='text-2xl font-semibold'>You cannot always control what goes on outside, but</h2>
                    <h2 className='text-2xl font-semibold'>you can always control what goes on inside.</h2>

                    <h2 className='w-[70%] mt-8 text-[#262626]'>Lorem nullam sed lacus, arcu. Dui proin mauris neque vulputate morbi quis et semper. Dui tortor risus amet congue hendrerit integer.</h2>

                    <div className='flex flex-wrap justify-between mt-6'>
                        {data.map((db) => (
                            <div className='w-[40%] flex flex-col gap-4 my-16'>
                                <div className='rounded-lg overflow-hidden'>
                                    <img src={db?.photo} />
                                </div>
                                <h2 className='font-semibold'>{db?.name} </h2>
                                <h2>Dui proin mauris neque vulputate morbi quis et semper. Dui tortor risus amet congue hendrerit integer.</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            <div>
                <div className='w-[80%] mx-auto relative rounded-[2em] overflow-hidden my-20'>
                    <img src={Img6} className='w-full' />
                    <div className='w-full h-full absolute top-0 z-20 bg-gradient-to-r  from-[#525C5A] to-[#2B2D2D] opacity-50'></div>
                    <div className='w-full  flex justify-center flex-col gap-4 items-center h-full absolute top-0 z-30 '>
                        <img src={Img8} />
                        <h1 className='text-white w-[75%] text-center'>The pose begins when you want to leave it.</h1>
                    </div>
                </div>
            </div>



            <div className='bg-[#B4F0E9] py-20'>
                <div className='w-[80%] mx-auto '>
                    <h3 className='mb-6 text-sm font-semibold'>BLOG</h3>
                    <h2 className='text-2xl font-semibold'>You cannot always control what goes on outside, but</h2>
                    <h2 className='text-2xl font-semibold'>you can always control what goes on inside.</h2>

                </div>
                <div className='w-[80%] mx-auto flex flex-wrap justify-between items-center mt-20 '>
                    <div className='md:w-[22%] w-[40%] my-6 md:my-0 bg-[#B4F0E9]'>
                        <img src={Img7} className=' rounded-2xl' />
                        <h2 className='pl-1 mt-4'>This smart mat will teach you yoga and also help get correct</h2>
                    </div>
                    <div className='md:w-[22%] w-[40%] bg-[#B4F0E9]'>
                        <img src={Img7} className=' rounded-2xl' />
                        <h2 className='pl-1 mt-4'>This smart mat will teach you yoga and also help get correct</h2>
                    </div>
                    <div className='md:w-[22%] w-[40%] bg-[#B4F0E9]'>
                        <img src={Img7} className=' rounded-2xl' />
                        <h2 className='pl-1 mt-4'>This smart mat will teach you yoga and also help get correct</h2>
                    </div>
                    <div className='md:w-[22%] w-[40%] bg-[#B4F0E9]'>
                        <img src={Img7} className=' rounded-2xl' />
                        <h2 className='pl-1 mt-4'>This smart mat will teach you yoga and also help get correct</h2>
                    </div>
                </div>
            </div>


            <div className='mx-auto flex justify-center flex-col gap-4 items-center my-20'>
                <h2 className='text-4xl font-medium '>Hi! How can we <span className='text-lightcyan'>help you?</span> </h2>
                <h2 className='text-[#969595]'>This smart mat will teach you yoga and also help get correct</h2>
                <div className='flex w-full justify-center relative mt-6'>
                    <div className='bg-[#B4F0E9] w-[33%] rounded-3xl z-10 h-12'></div>
                    <div className='bg-[#52D0C2] w-[8%] absolute z-20 right-[33%] rounded-3xl h-12'></div>
                </div>
            </div>

        </div>
    )
}

export default Sadhna