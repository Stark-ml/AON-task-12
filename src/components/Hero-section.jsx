import React from 'react'
import image from '../assets/Illustration.svg'

function HeroSection() {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 px-6 md:px-16 lg:px-28 py-12 md:py-24 bg-[rgba(245,247,250,1)]'>
            <div className='flex flex-col gap-5 text-center md:text-left'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl'>Lessons and insights</h1>
                <h1 className='text-3xl md:text-5xl lg:text-6xl text-[rgba(76,175,79,1)]'>from 8 years</h1>
                <p className='text-[rgba(113,113,113,1)]'>Where to grow your business as a photographer: site or social media?</p>
                <button className='bg-[rgba(76,175,79,1)] text-white px-4 py-2 rounded w-24 h-10 
                hover:bg-[rgba(245,247,250,1)] hover:text-[rgba(76,175,79,1)] cursor-pointer mx-auto md:mx-0 transition'>Register</button>
            </div>
            <div className='w-64 md:w-80 lg:w-96'>
                <img src={image} alt="illustration" className='w-full h-auto' />
            </div>
        </div>
    );
}
export default HeroSection