import React from 'react'
import image6 from '../assets/picture/Logo-6.png'
import image5 from '../assets/picture/Logo-5.png'
import image4 from '../assets/picture/Logo-4.png'
import image3 from '../assets/picture/Logo-3.png'
import image2 from '../assets/picture/Logo-2.png'
import image1 from '../assets/picture/Logo-1.png'

function Clients() {
    return (
        <div className='flex flex-col gap-10 py-12 md:py-16'>
            <div className='text-center px-6'>
                <h1 className='font-semibold text-2xl md:text-4xl text-[rgba(77,77,77,1)]'>Our Clients</h1>
                <p className='text-[rgba(113,113,113,1)] mt-2'>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 justify-items-center items-center px-6 md:px-16 lg:px-28'>
                <img src={image1} className='w-10 h-10 md:w-12 md:h-12' alt="client logo" />
                <img src={image2} className='w-10 h-10 md:w-12 md:h-12' alt="client logo" />
                <img src={image3} className='w-10 h-10 md:w-12 md:h-12' alt="client logo" />
                <img src={image4} className='w-10 h-10 md:w-12 md:h-12' alt="client logo" />
                <img src={image5} className='w-10 h-10 md:w-12 md:h-12' alt="client logo" />
                <img src={image6} className='w-10 h-10 md:w-12 md:h-12' alt="client logo" />
            </div>
        </div>
    );
}
export default Clients