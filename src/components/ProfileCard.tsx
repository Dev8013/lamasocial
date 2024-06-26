import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className='flex flex-col shadow-md text-sm bg-white p-4 gap-6'>
      <div className='h-20 relative'>
        <Image src='https://images.pexels.com/photos/20678570/pexels-photo-20678570/free-photo-of-view-of-foamy-waves-on-the-shore-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' fill className='rounded-md object-cover'/>
        <Image src='https://images.pexels.com/photos/19264680/pexels-photo-19264680/free-photo-of-aerial-view-of-a-group-of-lifeguards-standing-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt=''  width={48} height={48} className='rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10'/>
      </div>
      <div className='flex flex-col h-20 gap-2 items-center'>
        <span className='font-semibold'>Dev Bhardwaj</span>
        <div className='flex items-center gap-4'>
            <div className='flex items-center'>
            <Image src='https://images.pexels.com/photos/20678570/pexels-photo-20678570/free-photo-of-view-of-foamy-waves-on-the-shore-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={12} height={12} className='rounded-md object-cover w-3 h-3'/>
            <Image src='https://images.pexels.com/photos/20678570/pexels-photo-20678570/free-photo-of-view-of-foamy-waves-on-the-shore-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={12} height={12} className='rounded-md object-cover w-3 h-3'/>
            <Image src='https://images.pexels.com/photos/20678570/pexels-photo-20678570/free-photo-of-view-of-foamy-waves-on-the-shore-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={12} height={12} className='rounded-md object-cover w-3 h-3'/>
            </div>
            <span className='text-sm text-gray-500'>500 Followers</span>
        </div>
        <button className='text-white text-xs bg-blue-500 rounded-md p-2'>My Profile</button>
      </div>
    </div>
  )
}

export default ProfileCard
