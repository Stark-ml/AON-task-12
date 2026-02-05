import React from 'react'
import image from '../assets/Counts.svg'

function Achievements() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center px-6 md:px-16 lg:px-36 py-12 md:py-16 bg-[rgba(245,247,250,1)]'>
            <div className='text-center md:text-left'>
                <h1 className='text-[rgba(77,77,77,1)] font-semibold text-2xl md:text-3xl'>
                    Helping a local
                </h1>
                <h1 className='text-[rgba(76,175,79,1)] font-semibold text-2xl md:text-3xl'>
                    business reinvent itself
                </h1>
                <p className='text-gray-900 pt-2'>
                    We reached here with our hard work and dedication
                </p>
            </div>
            <div className='flex justify-center'>
                <img src={image} alt="achievements" className='w-full max-w-md' />
            </div>
        </div>
    );
}
export default Achievements