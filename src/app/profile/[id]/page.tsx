import Feed from '@/components/Feed'
import LeftMenu from '@/components/LeftMenu'
import RightMenu from '@/components/RightMenu'
import Image from 'next/image'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className='flex gap-6 p-6'>
      <div className="hidden xl:block w-[20%]"><LeftMenu type='profile'/></div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className='flex flex-col items-center justify-center'>
            <div className='w-full h-64 relative'>
              <Image src='https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' fill className='object-cover rounded-md' />
              <Image src='https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' width={120} height={120} className='object-cover rounded-full absolute z-10 ring-4 ring-white h-32 w-32 left-0 right-0 m-auto -bottom-16' />
            </div>
            <h1 className='font-bold mt-20 mb-4 text-2xl'>Dev Bhardwaj</h1>
          </div>
          <div className='flex items-center justify-center gap-12 mb-4'>
            <div className='flex flex-col items-center'>
              <span className='font-medium'>123</span>
              <span className='text-sm'>Posts</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='font-medium'>1.2k</span>
              <span className='text-sm'>Followers</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='font-medium'>1.3k</span>
              <span className='text-sm'>Following</span>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]"><RightMenu userId='test' /></div>
    </div>
  )
}

export default ProfilePage
