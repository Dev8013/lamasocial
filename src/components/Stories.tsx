import Image from 'next/image'
import React from 'react'

const Stories = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide'>
      <div className='flex gap-8 w-max'>
        {/* STORY */}
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src="https://images.pexels.com/photos/15301144/pexels-photo-15301144/free-photo-of-foamy-waves-on-the-shore-and-skyscrapers-of-a-coastal-city-in-distance.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
          <span className='font-medium'>Dev</span>
        </div>
        {/* STORY */}
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src="https://images.pexels.com/photos/15301144/pexels-photo-15301144/free-photo-of-foamy-waves-on-the-shore-and-skyscrapers-of-a-coastal-city-in-distance.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
          <span className='font-medium'>Dev</span>
        </div>
        {/* STORY */}
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src="https://images.pexels.com/photos/15301144/pexels-photo-15301144/free-photo-of-foamy-waves-on-the-shore-and-skyscrapers-of-a-coastal-city-in-distance.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
          <span className='font-medium'>Dev</span>
        </div>
        {/* STORY */}
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src="https://images.pexels.com/photos/15301144/pexels-photo-15301144/free-photo-of-foamy-waves-on-the-shore-and-skyscrapers-of-a-coastal-city-in-distance.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
          <span className='font-medium'>Dev</span>
        </div>
        {/* STORY */}
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
          <Image src="https://images.pexels.com/photos/15301144/pexels-photo-15301144/free-photo-of-foamy-waves-on-the-shore-and-skyscrapers-of-a-coastal-city-in-distance.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
          <span className='font-medium'>Dev</span>
        </div>

      </div>
    </div>
  )
}

export default Stories
