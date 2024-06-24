import Image from 'next/image'
import React from 'react'
import Comments from './Comments'

const Post = () => {
  return (
    <div className='flex flex-col gap-4'>
        {/* USER */}
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image src="https://images.pexels.com/photos/25539612/pexels-photo-25539612/free-photo-of-the-view-from-the-top-of-a-tall-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={40} height={40} className='w-10 h-10 rounded-full' />
                <span className='font-medium'>Dev</span>
            </div>
            <Image src="/more.png" alt='' width={16} height={16} className='cursor-pointer'/>
        </div>
        {/* DESC */}
        <div className='flex flex-col gap-4'>
            <div className='w-full min-h-96 relative'>
            <Image src="https://images.pexels.com/photos/23355108/pexels-photo-23355108/free-photo-of-a-bakery-with-bread-on-display-in-front-of-a-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='object-cover rounded-md' />

            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus inventore quaerat distinctio laboriosam corporis sequi eos, culpa excepturi ipsum, dolore totam sint iure. Aspernatur eveniet eius ullam dolores, labore eligendi.</p>

        </div>
        {/* Interaction */}
        <div className='flex items-center justify-between text-sm my-4'>
            <div className='flex gap-8'>
                <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                <Image src="/like.png" alt='' width={16} height={16} className='cursor-pointer' />
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>678 <span className='hidden md:inline'>Likes</span></span>
                </div>
            </div>
            <div className='flex gap-8'>
                <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                <Image src="/comment.png" alt='' width={16} height={16} className='cursor-pointer' />
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>678 <span className='hidden md:inline'>Comment</span></span>
                </div>
            </div>
            <div>
            <div className='flex gap-8'>
                <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                <Image src="/share.png" alt='' width={16} height={16} className='cursor-pointer' />
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>678 <span className='hidden md:inline'>Share</span></span>
                </div>
            </div>
            </div>

        </div>
        <Comments />
    </div>
  )
}

export default Post
