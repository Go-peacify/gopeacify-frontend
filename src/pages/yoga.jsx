import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    LandingGroup,
    Image1,
    Leaf1,
    Image1Ellipse,
    Image2,
    Leaf2,
    Leaf3,
    Image2Ellipse,
    Leaf4,
    Leaf5,
    meditation,
    yoga,
    sadhna,
    gaolplan,
    brainexercise,
} from '../assets'
const Meditation = () => {
    const [card1, setcard1] = useState(false);
    const [card2, setcard2] = useState(false);
    const [card3, setcard3] = useState(false);
    const [card4, setcard4] = useState(false);
    const [card5, setcard5] = useState(false);
    const navigate = useNavigate();
    return (
        <div className='text-black'>


            <div className='relative my-16 h-[650px]'>
                <div className='flex flex-col ml-20  gap-6 leading-snug' >
                <div className='w-[20%] h-full absolute block bg-gradient-to-r from-[#F7EDBA] ...   left-0 z-[-1] rounded-r-full'>
                    </div>
                    <h1 className='text-[#3B6377] font-bold sm:text-[6em] text-[4em]'>Your Mental</h1>
                    <h1 className='text-[#3B6377] font-bold sm:text-[6em] text-[4em]'>Health Matters</h1>
                    <p className='text-2xl md:w-[50%] sm:w-[70%] w-full px-4'>Take back control of your mental health. Train your brain with pleasure, develop memory, attention and thinking with</p>
                    {/* <button className='text-white  rounded-full bg-lightcyan font-bold text-lg py-4 mt-4'>Try Now</button> */}
                </div>
                <div className='absolute md:flex hidden right-0 top-0'>
                    <img src={LandingGroup} className='w-full' /> 
                </div>
            </div>


            <div className=' min-h-[25em] sm:w-[90%] xs:mx-auto xs:w-full m-auto flex sm:flex-row  flex-wrap sm:justify-between justify-center  sm:relative my-20'>
                <div onClick={()=>navigate('/meditation')} className={`sm:w-[28%] w-[80%]   sm:absolute sm:top-0 sm:left-0  ${card1 ? "z-20" : "z-0"} `} onMouseOver={() => setcard1(true)} onMouseOut={() => setcard1(false)} >
                    <h2 className='text-xl font-semibold pl-4 text-[#DECEE5]'>Meditation</h2>
                    <div className='cursor-pointer w-full flex bg-gradient-to-r from-[#D2C9FE] to-[#D9BFFF]   h-72 rounded-3xl'>
                        <img src={meditation} className='mx-auto my-auto ' />
                    </div>
                </div>
                <div onClick={() => navigate('/')}  className={`sm:w-[28%]  w-[80%]   sm:absolute sm:top-0 sm:left-[18%]  ${card2 ? "z-20" : "z-10"}`} onMouseOver={() => setcard2(true)} onMouseOut={() => setcard2(false)}>
                    <h2 className='text-xl font-semibold pl-4 text-[#BDDA9A]'>Yoga</h2>
                    <div className='cursor-pointer w-full flex bg-gradient-to-r from-[#E5FDCA] to-[#A7ECF7]  h-72 rounded-3xl'>
                        <img src={yoga} className='mx-auto my-auto ' />
                    </div>
                </div>
                <div onClick={() => navigate('/sadhna')} className={`sm:w-[28%]  w-[80%]   sm:absolute sm:top-0 sm:left-[36%]  ${card3 ? "z-30" : "z-10"}`} onMouseOver={() => setcard3(true)} onMouseOut={() => setcard3(false)}>
                    <h2 className='text-xl font-semibold pl-4 text-[#B2DDE3]'>Sadhna</h2>
                    <div className='cursor-pointer w-full flex bg-gradient-to-r from-[#F8D2DC] to-[#D1F1F8]  h-72 rounded-3xl'>
                        <img src={sadhna} className='mx-auto my-auto ' />

                    </div>
                </div>
                <div onClick={() => navigate('/goalPlan')} className={`sm:w-[28%]  w-[80%]   sm:absolute sm:top-0 sm:left-[56%]  ${card4 ? "z-50" : "z-10"} `} onMouseOver={() => setcard4(true)} onMouseOut={() => setcard4(false)}>
                    <h2 className='text-xl font-semibold pl-4 text-[#FDCD67]'>Goal Plan</h2>
                    <div className='cursor-pointer w-full flex bg-gradient-to-r from-[#FBDFC6] to-[#FED1D2]  h-72 rounded-3xl'>
                        <img src={gaolplan} className='mx-auto my-auto ' />
                    </div>
                </div>
                <div onClick={() => navigate('/brainExercise')} className={`sm:w-[28%]  w-[80%]   sm:absolute sm:top-0 sm:left-[72%]  ${card5 ? "z-10" : "z-10"}`} onMouseOver={() => setcard5(true)} onMouseOut={() => setcard5(false)}>
                    <h2 className='text-xl font-semibold pl-4 text-[#F3A3FF]'>Brain Exercise</h2>
                    <div className='cursor-pointer w-full flex bg-gradient-to-r from-[#CFF4FC] to-[#F9E6F5]  h-72 rounded-3xl'>
                        <img src={brainexercise} className='mx-auto my-auto ' />
                        
                    </div>
                </div>
            </div>


            <div className='bg-[#b4f0e933]  my-10 py-20'>

                <div className='flex flex-col sm:flex-row  justify-center sm:justify-between'>
                    <div className='w-full sm:w-[50%] flex'>
                        <div className='sm:w-[35%] w-[20%]'>
                            <img src={Leaf1} />
                        </div>
                        <div className='flex sm:w-[65%] w-[80%] pr-6 sm:pr-0 justify-center items-start flex-col gap-4'>
                            <div>
                                <h2 className='font-semibold text-3xl'>Challenge Your Body </h2>
                                <h2 className='font-semibold text-3xl'> & Discover A New You</h2>
                            </div>
                            <p>This practice invites you to observe with loving kindness and bring awareness to your internal world.</p>
                            <div className='justify-center flex  w-full'>
                                <button className='bg-[#52D0C2] px-6 py-1  text-white'>Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full sm:w-[40%] h-72 relative'>
                        <img src={Image1} className='absolute top-0 left-0 w-[100%] h-full' />
                        <img src={Image1Ellipse} className='w-[100%] h-full ' />
                    </div>
                </div>

                <div className='flex  flex-col-reverse sm:flex-row  justify-center sm:justify-between '>
                    <div className='w-full sm:w-[50%] flex'>
                        <img src={Leaf2} />
                        <div className='h-80 w-[80%]  relative'>
                            <img src={Image2} className='absolute top-0 left-0 w-[100%] h-full' />
                            <img src={Image2Ellipse} className='w-[100%] h-full ' />
                        </div>
                    </div>
                    <div className='w-full sm:w-[47%] flex items-center justify-between   gap-4 '>
                        <div className='flex pl-6 sm:pl-0 flex-col gap-4 sm:w-[70%] w-[94%]'>
                            <div className=' flex flex-col  '>
                                <h2 className='font-semibold text-3xl'>Rejuvenate yourself With</h2>
                                <h2 className='font-semibold text-3xl'>Whole Body Relaxation</h2>
                            </div>
                            <p>This practice invites you to observe with loving kindness and bring awareness to your internal world.</p>
                            <div className='justify-center flex'>
                                <button className='bg-[#52D0C2] px-6 py-1  text-white'>Get Started</button>
                            </div>
                        </div>
                        <div className='h-[50%] xs:w-[6%]'>
                        <img src={Leaf3} className='w-full h-full' />
                        </div>
                    </div>
                </div>


            </div>

            {/* Discount */}
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-0 my-8 sm:justify-between relative items-center'>
                <img src={Leaf4} className='hidden sm:flex'/>
                <div>
                    <h2 className='font-semibold text-4xl'>Get 25% Discount on All</h2>
                    <h2 className='font-semibold text-4xl'>Yoga Classes</h2>
                </div>
                <button className='bg-[#52D0C2] px-6 py-2  text-white'>Enroll Now</button>

                <img src={Leaf5} className='hidden sm:flex' />
            </div>


        </div>
    )
}

export default Meditation
