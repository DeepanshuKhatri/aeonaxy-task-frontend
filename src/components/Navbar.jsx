import React from 'react'
import dribble_black_img from '../assets/images/dribble_black_image.png'
import cam from '../assets/images/camera_img.svg'
const Navbar = () => {
    return (
        <nav className='border-b-2 px-3 flex justify-between'>
            <div className='flex justify-center items-center gap-8'>
                <img src={dribble_black_img} className=' h-[60px] ' alt="" />
                <ul className='flex gap-6 text-gray-600'>
                    <li>Inspiration</li>
                    <li>Find Work</li>
                    <li>Learn Design</li>
                    <li>Go Pro</li>
                    <li>Hire Designers</li>
                </ul>
            </div>
            <div className='flex justify-center gap-5 items-center'>
                {/* <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="search" class="block w-[130px] p-2 ps-10 text-sm text-gray-900 bg-gray-200  rounded-md " placeholder="Search" required />
                </div>
                    <button className='bg-[#EA4B8A] text-white w-[90px] p-2 text-sm rounded-xl'>Upload</button>
            </div>
        </nav>
    )
}

export default Navbar