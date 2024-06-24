"use client"
import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  return (
    <div className='flex h-24 items-center justify-between '>
      {/* LEFT */}
      <div className='md:hidden lg:block  w-[20%]'>
        <Link href="/" className='font-bold text-xl text-blue-600'>LAMASOCIAL</Link>
      </div>
      {/* CENTER */}
      <div className='hidden md:flex w-[50%] items-center justify-between'>
        <div className='flex gap-6 text-gray-600'>
        <Link href="/" className='flex gap-2 items-center'>
            <Image src="/home.png" alt='Homepage' width={16} height={16} className='w-4 h-4'/>
            <span>Homepage</span>
        </Link>
        <Link href="/" className='flex gap-2 items-center'>
            <Image src="/friends.png" alt='Friends' width={16} height={16} className='w-4 h-4'/>
            <span>Friends</span>
        </Link>
        <Link href="/" className='flex gap-2 items-center'>
            <Image src="/stories.png" alt='Stories' width={16} height={16} className='w-4 h-4'/>
            <span>Stories</span>
        </Link>
        </div>
        <div className='hidden xl:flex p-2 bg-slate-100 items-center rounded-xl'>
          <input type='text' placeholder='Search' className='bg-transparent outline-none'/>
          <Image src="/search.png" alt='Search' width={14} height={14} />
        </div>
      </div>
      {/* RIGHT */}
      <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
        <ClerkLoading>
        <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-gray-600 rounded-full dark:text-blue-500" role="status" aria-label="loading"/>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className='cursor-pointer'>
              <Image src="/people.png" width={20} height={20} alt='People' />
            </div>
            <div className='cursor-pointer'>
              <Image src="/messages.png" width={20} height={20} alt='Messages' />
            </div>
            <div className='cursor-pointer'>
              <Image src="/notifications.png" width={20} height={20} alt='Notification' />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className='cursor-pointer flex gap-2 items-center'>
              <Image src="/login.png" alt="Login" width={20} height={20} className=''/>
              <Link href="/sign-in">
                Login/Register
              </Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar
