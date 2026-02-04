import React from 'react'
import image2 from '../assets/Community/Clubs.png'
import image1 from '../assets/Community/Membership.png'
import image3 from '../assets/Community/National.png'
function Community() {
    return (
        <div className='pt-24'>
            <div className='text-center'>
                <h1 className='text-4xl text-[rgba(77,77,77,1)]'>Manage your entire community <br />in a single system</h1>
                <p className='text-[rgba(113,113,113,1)] pt-4'>Who is Nextcent suitable for?</p>
            </div>
            <div className="grid grid-cols-3 gap-8 px-36 pt-10 text-center">
  <div className="flex flex-col items-center gap-4 w-[299px] h-[260px] p-6 rounded-lg bg-white shadow-sm">
    <img src={image1} alt="Membership" className="w-12 h-12" />
    <h1 className="font-semibold text-lg">
      Membership <br /> Organisations
    </h1>
    <p className="text-sm text-gray-500">
      Our membership management software provides full automation of membership renewals and payments
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center gap-4 w-[299px] h-[260px] p-6 rounded-lg bg-white shadow-sm">
    <img src={image2} alt="National" className="w-12 h-12" />
    <h1 className="font-semibold text-lg">
      National <br /> Associations
    </h1>
    <p className="text-sm text-gray-500">
      Our membership management software provides full automation of membership renewals and payments
    </p>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center gap-4 w-[299px] h-[260px] p-6 rounded-lg bg-white shadow-sm">
    <img src={image3} alt="Clubs" className="w-12 h-12" />
    <h1 className="font-semibold text-lg">
      Clubs And <br /> Groups
    </h1>
    <p className="text-sm text-gray-500">
      Our membership management software provides full automation of membership renewals and payments
    </p>
  </div>

</div>
</div>
    );
}
export default Community