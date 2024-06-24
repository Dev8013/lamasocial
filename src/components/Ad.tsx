import Image from 'next/image'
import React from 'react'

const Ad = ({size} : {size : "sm" | "md" | "lg"}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
      {/* TOP */}
      <div className='flex items-center justify-between text-gray-500 font-medium'>
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt='' width={16} height={16} className='cursor-pointer' />
      </div>
      {/* Bottom */}
      <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
        <div className={`relative w-full ${size === "md" ? "h-36" : "h-48"}`}>
        <Image src="https://images.pexels.com/photos/19915666/pexels-photo-19915666/free-photo-of-back-view-of-man-walking-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt='' fill className='object-cover rounded-lg' />
        </div>
        <div className='flex items-center gap-4'>
        <Image src="https://images.pexels.com/photos/19915666/pexels-photo-19915666/free-photo-of-back-view-of-man-walking-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt='' width={24}
        height={24} className='rounded-full w-6 h-6 object-cover' />
        <span className='text-blue-500 font-medium'>BigChef Lounge</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum atque eligendi alias. Doloribus itaque, nostrum minima odio aliquid ab voluptatum? Corrupti, sit excepturi aliquam eos beatae ab iste itaque architecto.</p>
        <button className='bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'>Learn more</button>

      </div>
    </div>
  )
}

export default Ad
