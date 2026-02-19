"use client";
import React, { useState } from 'react'
import Image from "next/image";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='flex justify-between items-center md:flex-center md:w-full py-4'>
            {/* Logo - preserved original size for desktop */}
            <div className="relative w-11.25 h-7 md:w-20 md:h-20">
                <Image src="/images/logo.svg" alt="logo" fill className="object-contain" />
            </div>

            {/* Desktop Menu - preserved original classes */}
            <div className="hidden md:flex flex-center gap-10 text-grayish-blue">
                <a href="#" className="hover:text-soft-orange transition-colors">Home</a>
                <a href="#" className="hover:text-soft-orange transition-colors">New</a>
                <a href="#" className="hover:text-soft-orange transition-colors">Popular</a>
                <a href="#" className="hover:text-soft-orange transition-colors">Trending</a>
                <a href="#" className="hover:text-soft-orange transition-colors">Categories</a>
            </div>

            {/* Mobile Menu Button - visible only on mobile */}
            <button
                className="md:hidden z-50 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image
                    src={isOpen ? "/images/icon-menu-close.svg" : "/images/icon-menu.svg"}
                    alt="menu"
                    width={isOpen ? 32 : 40}
                    height={isOpen ? 32 : 17}
                />
            </button>

            {/* Mobile Sidebar - visible only when open and on mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="fixed right-0 top-0 h-full w-[70%] bg-off-white p-6 pt-32 flex flex-col gap-6 text-very-dark-blue font-medium text-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <a href="#" className="hover:text-soft-red transition-colors">Home</a>
                        <a href="#" className="hover:text-soft-red transition-colors">New</a>
                        <a href="#" className="hover:text-soft-red transition-colors">Popular</a>
                        <a href="#" className="hover:text-soft-red transition-colors">Trending</a>
                        <a href="#" className="hover:text-soft-red transition-colors">Categories</a>
                    </div>
                </div>
            )}
        </nav>
    )
}
export default NavBar
