import React from 'react'
import image from '../assets/pana.svg'

function Calendar() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center px-6 md:px-16 lg:px-36 py-12 md:py-16'>
            <div className='flex justify-center'>
                <img src={image} alt="calendar" className='w-full max-w-md' />
            </div>
            <div className='text-center md:text-left'>
                <h1 className='text-[rgba(77,77,77,1)] font-semibold text-2xl md:text-4xl'>
                    How to design your site footer like <br className='hidden md:block' />we did
                </h1>
                <p className='text-[rgba(113,113,113,1)] text-sm pt-5'>
                    Donec a eros justo. Fusce egestas tristique ultrices.
                    Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
                    elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse
                    platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue
                    vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
                    efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
                    Donec consectetur faucibus ipsum id gravida.
                </p>
                <button className='bg-[rgba(76,175,79,1)] text-white px-6 py-2 rounded
                    hover:bg-[rgba(245,247,250,1)] hover:text-[rgba(76,175,79,1)] cursor-pointer mt-5 transition'>
                    Learn More
                </button>
            </div>
        </div>
    );
}
export default Calendar