import React from 'react'
import QueriesCard from './AdminCard/QueriesCard'

const Queries = () => {
  return (
    <div className=' p-4'>
    <p className='text-3xl font-semibold mb-6'>Admin Page</p>
    <div className='bg-[#E9FBF8] rounded-md'>
        <div className='flex flex-row justify-between p-4'>
            <p>Today</p>
            <p className='cursor-pointer'>View All</p>
        </div>
        <div className='flex flex-col flex-wrap'>
           <QueriesCard/>
           <QueriesCard/>
           <QueriesCard/>
           <QueriesCard/>
           <QueriesCard/>
           <QueriesCard/>
        </div>
    </div>
    </div>
  )
}

export default Queries