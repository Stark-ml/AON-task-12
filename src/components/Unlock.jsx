import React from 'react'
import image from '../assets/Unlock/Frame-35.png'
function Unlock() {
    return (
        <div className='grid grid-cols-2 justify-between items-center p-20'>
            <div>
                <img src={image} alt="image" className='w-[441px] h-[400px] pl-36' />
            </div>
            <div>
                <h1 className='text-[rgba(77,77,77,1)] font-semibold text-3xl'>The unseen of spending three <br />years at Pixelgrade</h1>
                <p className='text-[rgba(113,113,113,1)] text-sm pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                    amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                    Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                    tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
                    Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
                    elementum pulvinar odio.</p>
                <button className='bg-[rgba(76,175,79,1)] text-[rgba(255,255,255,1)] px-4 py-2 rounded w-37 h-13 
            hover:bg-[rgba(245,247,250,1)] hover:text-[rgba(76,175,79,1)] cursor-pointer mt-5'>Learn More</button>
            </div>
        </div>
    );
}
export default Unlock