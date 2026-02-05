import React from 'react'
import image from '../assets/Counts.svg'
function Achievements() {
    return (
        <div className='grid grid-cols-2 items-center justify-center px-36 py-16 bg-[rgba(245,247,250,1)]'>
        <div>
<h1 className='text-[rgba(77,77,77,1)] font-semibold text-3xl'>
    Helping a local
</h1>
<h1 className='text-[rgba(76,175,79,1)] font-semibold text-3xl'>
     business reinvent itself
</h1>
<p className='text-gray-900 pt-2'>
    We reached here with our hard work and dedication
</p>
        </div>
        <div>
<img src={image} alt="image" />
        </div>
        </div>
    );
}
export default Achievements