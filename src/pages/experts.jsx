import { Link} from "react-router-dom";
import DoctorSwiper from '../components/doctorSwiper'
import DoctorCarousel from '../components/DoctorCarousel'
import DoctorCard from '../components/card/doctorCard'
import { Med, Line, Male, Female, Health, Profit, Quality, DoctorName, DoctorNameBg, Doctor, Rectangle } from '../assets'
const Experts = () => {
    const arr = [
        { image: "https://images.unsplash.com/photo-1644083292462-f825819a4c62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", content: "What do you feel passionate about? Do you have a special talent that you'd like to practice more often or share with others." },
        { image: "https://images.unsplash.com/photo-1600965962102-9d260a71890d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", content: "What do you feel passionate about? Do you have a special talent that you'd like to practice more often or share with others." },
        { image: "https://plus.unsplash.com/premium_photo-1667543228378-ec4478ab2845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80", content: "What do you feel passionate about? Do you have a special talent that you'd like to practice more often or share with others." },
        { image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", content: "What do you feel passionate about? Do you have a special talent that you'd like to practice more often or share with others." }]
    return (
        <div className='w-full'>
            <div className='text-black'>
                <div>
                    <div className='flex w-full justify-between my-20'>
                        <div className='flex flex-col m-auto  gap-12 w-[40%]'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-3'>
                                    <h2 className='text-lightcyan font-medium'>Mental Health Matters</h2>
                                    <img src={Med} className='w-10' />
                                </div>
                                <h4 className='text-black  text-5xl'>Protect your</h4>
                                <h4 className='text-black  text-5xl'><span className='text-lightcyan'>mental health</span> and</h4>
                                <h4 className='text-black  text-5xl'>take care of your</h4>
                                <h4 className='text-black  text-5xl flex items-center'>health <span><img className='w-16' src={Line} /> </span> </h4>
                            </div>
                            <div className='flex gap-6'>
                                <button className='bg-lightcyan text-white p-3'>Make an appointment</button>
                                <button className='bg-white text-black border-gray-400 p-3'>Download the app</button>
                            </div>
                        </div>

                        <div className='flex w-[40%] m-auto items-center'>
                            <div className='w-[50%]'>
                                <img src={Male} />
                            </div>
                            <div className='w-[50%]'>
                                <img src={Female} />
                            </div>
                        </div>
                    </div>

                    <div className='w-[90%] rounded-md flex bg-[#B4F0E9] my-20 justify-between text-black m-auto px-8 py-4'>

                        <div className='flex items-center gap-3 w-[22%]'>
                            <div className='bg-white p-4 rounded-full'>
                                <img src={Health} className='w-16' />
                            </div>
                            <h3>Get the best and assured service. </h3>
                        </div>

                        <div className='flex items-center gap-3 w-[25%]'>
                            <div className='bg-white p-4 rounded-full'>
                                <img src={Profit} className='w-16' />
                            </div>
                            <h3>Have a good mental health at a price of pizza. </h3>
                        </div>

                        <div className='flex items-center gap-3 w-[22%]'>
                            <div className='bg-white p-4 rounded-full'>
                                <img src={Quality} className='w-12' />
                            </div>
                            <h3>24X7 Quality service </h3>
                        </div>
                    </div>

                    <DoctorCarousel />


                    {/* Whye you should take our service */}

                    <div className='w-[80%] m-auto bg-[#B4F0E9] px-12 py-16 rounded-md my-20'>
                        <h2 className='text-center text-2xl font-semibold mb-3'>Why Should you take our services</h2>
                        <h2 className='text-center text-[#5A5A5A]'>Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh quis ullamcorper quis. Quam enim tortor, id sed</h2>
                        <div className='flex justify-around mx-4 my-8'>
                            <div className='w-[40%]'>
                                <img src={Rectangle} className='w-full' />
                            </div>
                            <div className='w-[50%] flex flex-col justify-between'>
                                <div className='border-l-2 border-black pl-4'>
                                    <h2 className='text-[#85CDB2]  font-semibold'>Experience</h2>
                                    <h2 className='text-[#5A5A5A]'>Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh quis ullamcorper quis. Quam enim tortor, id sed</h2>
                                </div>
                                <div className='border-l-2 border-black pl-4'>
                                    <h2 className='text-[#85CDB2] font-semibold'>Commitment</h2>
                                    <h2 className='text-[#5A5A5A]'>Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh quis ullamcorper quis. Quam enim tortor, id sed</h2>
                                </div>
                                <div className='border-l-2 border-black pl-4'>
                                    <h2 className='text-[#85CDB2] font-semibold'>Facility</h2>
                                    <h2 className='text-[#5A5A5A]'>Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh quis ullamcorper quis. Quam enim tortor, id sed</h2>
                                </div>
                                <div className='border-l-2 border-black pl-4'>
                                    <h2 className='text-[#85CDB2] font-semibold'>Relationship</h2>
                                    <h2 className='text-[#5A5A5A]'>Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh quis ullamcorper quis. Quam enim tortor, id sed</h2>
                                </div>
                            </div>
                        </div>
                    </div>




                    {/* OUr speacialist doctor team */}

                    <div className='w-full'>
                        <h1 className='text-center my-8 font-semibold  text-transparent bg-clip-text 
                                   bg-gradient-to-r from-[#45BDBF] to-[#005C7B]'>Our Specialist Doctors Team</h1>
                        <h2 className='text-center text-[#5A5A5A]'>Eu sit proin amet quis malesuada vitae elit. Vel consectetur nibh quis ullamcorper quis. Quam enim tortor, id sed</h2>
                        <div className='w-[80%] m-auto flex justify-around my-8 '>
                            <DoctorCard />
                            <DoctorCard />
                            <DoctorCard />
                        </div>
                    </div>

                    {/* Our special patients say */}
                    <div className='w-[90%] m-auto my-28'>
                        <h1>Our special <span className='text-lightcyan'>patients</span> say</h1>
                        <div className='flex mt-12 items-center'>
                            <div className='flex w-[40%] justify-between h-[20em]'>
                                <div className='w-[50%] overflow-hidden' style={{ borderBottomRightRadius: "5em" }}>
                                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                                </div>
                                <div className='w-[45%] text-[#525252] mt-6 flex flex-col gap-4'>
                                    <h2 className='text-3xl font-semibold'>John Kennedy</h2>
                                    <h2 className='text-xl'>Full stack</h2>
                                    <h2 className='text-xl'>Programmer</h2>
                                </div>
                            </div>
                            <div className='w-[60%] flex justify-center items-center p-16'>
                                <p className='text-3xl leading-snug'>“I've been to a few different places before, nothing compares to this. this is a best place for lifecare hospital”</p>
                            </div>
                        </div>
                    </div>

                    {/* Check our Article */}

                    <div className='w-[90%] m-auto my-28 '>
                        <h1 className='text-[#525252] w-[90%]'>Check our <span className='text-[#24A4CC]'>Articles</span></h1>
                        <div className='flex justify-between mt-8'>
                            {arr.map((db) => (
                                <div className='w-[20%] flex flex-col gap-4'>
                                    <div className='w-full overflow-hidden' style={{ borderBottomRightRadius: "5em" }}>
                                        <img className='w-full h-48' src={db?.image} />
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>11 jan 2022</p>
                                        <p className='text-black'>22x views</p>
                                    </div>
                                    <p className='text-sm'>{db?.content} </p>
                                </div>
                            ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experts
