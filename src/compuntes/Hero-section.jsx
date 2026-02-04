import React from 'react'
import image from '../assets/Illustration.svg'
function HeroSection() {
    return (
        <div className='flex justify-center align-center gap-24 items-center pt-24 pb-24 bg-[rgba(245,247,250,1)]'>
            <div className='flex flex-col gap-5'>
            <h1 className='text-6xl'>Lessons and insights</h1>
            <h1 className='text-6xl text-[rgba(76,175,79,1)]'>from 8 years</h1>
            <p className='text-[rgba(113,113,113,1)]'>Where to grow your business as a photographer: site or social media?</p>
            <button className='bg-[rgba(76,175,79,1)] text-[rgba(255,255,255,1)] px-4 py-2 rounded w-24 h-10 
            hover:bg-[rgba(245,247,250,1)] hover:text-[rgba(76,175,79,1)] cursor-pointer'>Register</button>
            </div>
            <div className='w-96 h-96'>
            <img src={image} alt="image" />
            </div>
        </div>
    );
}
export default HeroSection