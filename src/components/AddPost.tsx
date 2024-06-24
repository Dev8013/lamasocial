import Image from 'next/image'
import React from 'react'

const AddPost = () => {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm '>
      {/* AVATAR */}
      <Image src="https://images.pexels.com/photos/19345473/pexels-photo-19345473/free-photo-of-statue-in-roof-corner.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' width={48} height={48} className='w-12 h-12 rounded-full' />
      {/* POSTS */}
      <div className='flex-1'>
        {/* TEXT INPUT */}
        <div className='flex gap-4 flex-1'> 
          <textarea placeholder="What's on your mind?" className='bg-slate-100 rounded-lg flex-1 p-2 outline-none'></textarea>
          <Image src="/emoji.png" alt='' width={20} height={20} className='w-5 h-5 cursor-pointer self-end' />
        </div>
        {/* Post Options */}
        <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src="/addimage.png" alt='' width={20} height={20}/>
          Photo
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src="/addVideo.png" alt='' width={20} height={20}/>
          Video
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src="/addevent.png" alt='' width={20} height={20}/>
          Event
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src="/poll.png" alt='' width={20} height={20}/>
          Poll
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AddPost
