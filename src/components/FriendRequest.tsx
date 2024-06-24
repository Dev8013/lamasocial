import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FriendRequest = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/* Top */}
        <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500'>Friend Requests</span>
            <Link href="/" className='text-blue-500 text-xs'>See all</Link>
        </div>
        {/* Bottom */}
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image src="https://images.pexels.com/photos/24259755/pexels-photo-24259755/free-photo-of-a-woman-holding-a-tray-with-homemade-dishes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={40} height={40} className='w-10 h-10 rounded-full object-cover'/>
                <span className='font-semibold'>Dev</span>
            </div>
            <div className='flex justify-end gap-3'>
            <Image src="/accept.png" alt='' width={20} height={20} className='cursor-pointer'/>
            <Image src="/reject.png" alt='' width={20} height={20} className='cursor-pointer'/>
            </div>
        </div>
        {/* Bottom */}
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image src="https://images.pexels.com/photos/24259755/pexels-photo-24259755/free-photo-of-a-woman-holding-a-tray-with-homemade-dishes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={40} height={40} className='w-10 h-10 rounded-full object-cover'/>
                <span className='font-semibold'>Dev</span>
            </div>
            <div className='flex justify-end gap-3'>
            <Image src="/accept.png" alt='' width={20} height={20} className='cursor-pointer'/>
            <Image src="/reject.png" alt='' width={20} height={20} className='cursor-pointer'/>
            </div>
        </div>
        {/* Bottom */}
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image src="https://images.pexels.com/photos/24259755/pexels-photo-24259755/free-photo-of-a-woman-holding-a-tray-with-homemade-dishes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={40} height={40} className='w-10 h-10 rounded-full object-cover'/>
                <span className='font-semibold'>Dev</span>
            </div>
            <div className='flex justify-end gap-3'>
            <Image src="/accept.png" alt='' width={20} height={20} className='cursor-pointer'/>
            <Image src="/reject.png" alt='' width={20} height={20} className='cursor-pointer'/>
            </div>
        </div>
        
          
      
    </div>
  )
}

export default FriendRequest
