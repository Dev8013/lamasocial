import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Birthdays = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
       {/* Top */}
       <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500'>Birthdays</span>
        </div>
      {/* Bottom */}
      <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image src="https://images.pexels.com/photos/24259755/pexels-photo-24259755/free-photo-of-a-woman-holding-a-tray-with-homemade-dishes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={40} height={40} className='w-10 h-10 rounded-full object-cover'/>
                <span className='font-semibold'>Dev</span>
            </div>
            <div className='flex justify-end gap-3'>
            <button className='bg-blue-500 text-white text-xs px-2 py-1 rounded-md'>Celebrate</button>
            </div>
        </div>
        {/* UPCOMMING */}
        <div className='p-4 bg-slate-100 rounded-lg flex items-center gap-4'>
        <Image src="/gift.png" alt='' width={24} height={24}/>
        <Link href="/" className='text-xs flex flex-col gap-1'>
        <span className='text-gray-700 font-semibold'>Upcomming Birthdays</span>
        <span className='text-gray-500'>See other 16 have upcomming birthdays</span>
        </Link>
        </div>
      
    </div>
  )
}

export default Birthdays
