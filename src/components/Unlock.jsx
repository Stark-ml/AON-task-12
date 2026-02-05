import React from 'react'
import image from '../assets/Unlock/Frame-35.png'

function Unlock() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-6 md:px-16 lg:px-36 py-12 md:py-20'>
            <div className='flex justify-center order-2 md:order-1'>
                <img src={image} alt="unlock" className='w-full max-w-md h-auto' />
            </div>
            <div className='text-center md:text-left order-1 md:order-2'>
                <h1 className='text-[rgba(77,77,77,1)] font-semibold text-2xl md:text-3xl'>
                    The unseen of spending three <br className='hidden md:block' />years at Pixelgrade
                </h1>
                <p className='text-[rgba(113,113,113,1)] text-sm pt-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                    amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                    Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                    tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
                    Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
                    elementum pulvinar odio.
                </p>
                <button className='bg-[rgba(76,175,79,1)] text-white px-6 py-2 rounded
                    hover:bg-[rgba(245,247,250,1)] hover:text-[rgba(76,175,79,1)] cursor-pointer mt-5 transition'>
                    Learn More
                </button>
            </div>
        </div>
    );
}
export default Unlock