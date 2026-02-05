import React from 'react'
import image6 from '../assets/picture/Logo-6.png'
import image5 from '../assets/picture/Logo-5.png'
import image4 from '../assets/picture/Logo-4.png'
import image3 from '../assets/picture/Logo-3.png'
import image2 from '../assets/picture/Logo-2.png'
import image1 from '../assets/picture/Logo-1.png'
function Clintes() {
    return (
        <div className='flex flex-col gap-10'>
        <div className='text-center'>
            <h1 className='text-semibold text-4xl text-[rgba(77,77,77,1)]'>Our Clients</h1>
            <p className='text-[rgba(113,113,113,1)]'>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className='flex justify-between items-center px-28'>
            <img src={image1} className='w-12 h-12' alt="image" />
            <img src={image2} className='w-12 h-12' alt="image" />
            <img src={image3} className='w-12 h-12' alt="image" />
            <img src={image4} className='w-12 h-12' alt="image" />
            <img src={image5} className='w-12 h-12' alt="image" />
            <img src={image6} className='w-12 h-12' alt="image" />
        </div>
        </div>
    );
}
export default Clintes