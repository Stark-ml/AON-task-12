import React, { useState } from 'react'
import logo from '../assets/Logo.svg'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='flex items-center justify-between px-6 md:px-16 lg:px-28 py-3'>
            <div className='pt-2'>
                <img src={logo} alt="logo" className='h-5' />
            </div>

            {/* Mobile menu button */}
            <button
                className='md:hidden text-gray-900 text-2xl'
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? '✕' : '☰'}
            </button>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex gap-4 m-1.5'>
                <a className='text-gray-900 cursor-pointer hover:text-[rgba(76,175,79,1)]'>Home</a>
                <a className='text-gray-900 cursor-pointer hover:text-[rgba(76,175,79,1)]'>Service</a>
                <a className='text-gray-900 cursor-pointer hover:text-[rgba(76,175,79,1)]'>Feature</a>
                <a className='text-gray-900 cursor-pointer hover:text-[rgba(76,175,79,1)]'>Product</a>
                <a className='text-gray-900 cursor-pointer hover:text-[rgba(76,175,79,1)]'>Testimonial</a>
                <a className='text-gray-900 cursor-pointer hover:text-[rgba(76,175,79,1)]'>FAQ</a>
            </nav>

            {/* Desktop Buttons */}
            <div className='hidden md:flex gap-4'>
                <button className='bg-[rgba(76,175,79,1)] text-white px-4 py-2 rounded w-24 h-10
                 hover:bg-[rgba(245,247,250,1)] hover:text-[rgba(76,175,79,1)] cursor-pointer transition'>Sign in</button>
                <button className='bg-[rgba(245,247,250,1)] text-[rgba(76,175,79,1)] px-4 py-2 rounded w-24 h-10 
                hover:bg-[rgba(76,175,79,1)] hover:text-white cursor-pointer transition'>Login</button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='absolute top-14 left-0 right-0 bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden z-50'>
                    <a className='text-gray-900 cursor-pointer hover:text-[rgba(76,175,79,1)]'>Home</a>
                    <a className='text-gray-900 cursor-pointer hover:text-[rgba(76,175,79,1)]'>Service</a>
                    <a className='text-gray-900 cursor-pointer hover:text-[rgba(76,175,79,1)]'>Feature</a>
                    <a className='text-gray-900 cursor-pointer hover:text-[rgba(76,175,79,1)]'>Product</a>
                    <a className='text-gray-900 cursor-pointer hover:text-[rgba(76,175,79,1)]'>Testimonial</a>
                    <a className='text-gray-900 cursor-pointer hover:text-[rgba(76,175,79,1)]'>FAQ</a>
                    <div className='flex flex-col gap-2 mt-4'>
                        <button className='bg-[rgba(76,175,79,1)] text-white px-4 py-2 rounded'>Sign in</button>
                        <button className='bg-[rgba(245,247,250,1)] text-[rgba(76,175,79,1)] px-4 py-2 rounded'>Login</button>
                    </div>
                </div>
            )}
        </header>
    );
}
export default Header