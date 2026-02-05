import React from 'react'
import image from '../assets/pana.svg'
function Calender() {
    return (
        <div className='grid grid-cols-2 items-center justify-center px-36 py-16'>
              <div>
<img src={image} alt="image" />
            </div>
            <div>
<h1 className='text-[rgba(77,77,77,1)] font-semibold text-4xl'>How to design your site footer like <br /> we did</h1>
<p className='text-[rgba(113,113,113,1)] text-sm pt-5'>Donec a eros justo. Fusce egestas tristique ultrices. 
    Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque 
    elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse 
    platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue 
    vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus 
    efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. 
    Donec consectetur faucibus ipsum id gravida.</p>
    <button className='bg-[rgba(76,175,79,1)] text-[rgba(255,255,255,1)] px-4 py-2 rounded w-37 h-13 
            hover:bg-[rgba(245,247,250,1)] hover:text-[rgba(76,175,79,1)] cursor-pointer mt-5'>Learn More</button>
            </div>
        </div>
    );
}
export default Calender