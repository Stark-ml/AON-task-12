import React from 'react'
import logo from '../assets/Logo.svg'
function Header() {
    return (
        <div className='flex items-center justify-between px-28 py-3'>
            <div className='pt-2'>
            <img src={logo} alt="logo"  className='h-5'/>
            </div>
            <div className='flex gap-4 m-1.5 '>
            <h1 className='text-gray-900 cursor-pointer hover:text-[rgba(76,175,79,1)]'>Home</h1>
            <h1 className='text-gray-900 cursor-pointer hover:text-[rgba(76,175,79,1)]'>Service</h1>
            <h1 className='text-gray-900 cursor-pointer hover:text-[rgba(76,175,79,1)]'>Feature</h1>
            <h1 className='text-gray-900 cursor-pointer hover:text-[rgba(76,175,79,1)]'>Product</h1>
            <h1 className='text-gray-900 cursor-pointer hover:text-[rgba(76,175,79,1)]'>Testimonial</h1>
            <h1 className='text-gray-900 cursor-pointer hover:text-[rgba(76,175,79,1)]'>FAQ</h1>
            </div>
            <div className='flex gap-4'>
            <button className='bg-[rgba(76,175,79,1)] text-[rgba(255,255,255,1)] px-4 py-2 rounded w-24 h-10
             hover:bg-[rgba(245,247,250,1)] hover:text-[rgba(76,175,79,1)] cursor-pointer'>sign in</button>
            <button className='bg-[rgba(245,247,250,1)] text-[rgba(76,175,79,1)] px-4 py-2 rounded w-24 h-10 
            hover:bg-[rgba(76,175,79,1)] hover:text-[rgba(255,255,255,1)] cursor-pointer'>login</button>
            </div>
        </div>
    );
}
export default Header