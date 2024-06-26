import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserInfoCard = ({userId} : {userId : string}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
         {/* Top */}
         <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500'>User Information</span>
            <Link href="/" className='text-blue-500 text-xs'>See all</Link>
        </div>
        {/* Bottom */}
        <div className='flex flex-col gap-4 text-gray-500'>
          <div className='flex items-center gap-2'>
            <span className='text-xl text-black'>Dev Bhardwaj</span>
            <span className='text-sm'>@spartan117</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illum iste itaque omnis libero minus totam dolores in</p>
          <div className='flex items-center gap-2'>
            <Image src="/map.png" alt='' width={16} height={16}/>
            <span>Living in <b>Delhi</b></span>
          </div>
          <div className='flex items-center gap-2'>
            <Image src="/school.png" alt='' width={16} height={16}/>
            <span>Studied at <b>Chandigarh University</b></span>
          </div>
          <div className='flex items-center gap-2'>
            <Image src="/work.png" alt='' width={16} height={16}/>
            <span>Works at <b>343 Industries</b></span>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-1 items-center'>
              <Image src="/link.png" alt='' width={16} height={16}/>
              <Link href='https://github.com/Dev8013?tab=repositories' className='text-blue-500 font-medium'>Dev</Link>
            </div>
            <div className='flex gap-1 items-center'>
            <Image src="/date.png" alt='' width={16} height={16}/>
            <span>Joined July 2024</span>
            </div>

          </div>
          <button className='bg-blue-500 text-white rounded-lg p-2'>Follow</button>
          <span className='text-red-500 flex justify-end'>Block User</span>
        </div>
      
    </div>
  )
}

export default UserInfoCard
