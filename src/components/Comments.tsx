import Image from 'next/image'
import React from 'react'

const Comments = () => {
    return (
        <div>
            {/* WRITE */}
            <div className='flex items-center gap-4'>
                <Image src="https://images.pexels.com/photos/26052406/pexels-photo-26052406/free-photo-of-what-s-up.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={32} height={32} className='w-8 h-8 rounded-full' />
                <div className='flex justify-between items-center rounded-xl bg-slate-100 w-full px-6 py-2 text-sm flex-1'>
                    <input placeholder='Write a comment..' className='bg-transparent outline-none flex-1' />
                    <Image src="/emoji.png" alt='' width={16} height={16} className='cursor-pointer' />
                </div>
            </div>

            {/* Comments */}
            <div className='flex gap-4 justify-between mt-6'>
                {/* AVATAR */}
                <div className='flex gap-4 justify-between'>
                    <Image src="https://images.pexels.com/photos/26052406/pexels-photo-26052406/free-photo-of-what-s-up.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={40} height={40} className='w-10 h-10 rounded-full' />
                </div>
                {/* DSC */}
                <div className='flex flex-col gap-2 flex-1'>
                    <span className='font-medium'>Dev</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cupiditate assumenda sunt, fugit laboriosam praesentium corporis nulla tenetur blanditiis esse labore. Inventore magnam voluptatum quisquam, dolores placeat nostrum dignissimos voluptatibus!</p>
                    <div className='flex items-center gap-8 text-xs text-gray-500 mt-2'>
                    <div className='flex items-center gap-4'>
                        <Image src="/like.png" alt='' width={12} height={12} className='cursor-pointer w-3 h-3' />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>123 Likes</span>
                    </div>
                    <div>Reply</div>
                </div>
                </div>
                {/* ICON */}
                <div>
                    <Image src="/more.png" alt='' width={16} height={16} className='cursor-pointer w-4 h-4' />
                </div>
                
                
            </div>
        </div>
    )
}

export default Comments
