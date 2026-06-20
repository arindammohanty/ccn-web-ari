"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path || pathname?.startsWith(`${path}/`);

    return (
        <>
            <div className="bg-slate-900 text-slate-300 text-[11px] py-2 px-6 hidden md:block">
                <div className="container mx-auto max-w-7xl flex justify-between items-center">
                    <div className="flex space-x-6 font-medium">
                        <span className="flex items-center"><i className="fa-solid fa-phone text-slate-500 mr-2"></i> +91 00000 00000</span>
                        <span className="flex items-center"><i className="fa-solid fa-envelope text-slate-500 mr-2"></i> info@cloudcomnet.com</span>
                        <span className="flex items-center"><i className="fa-solid fa-location-dot text-slate-500 mr-2"></i> Bhubaneswar, Odisha, India</span>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-linkedin-in"></i></Link>
                        <Link href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-twitter"></i></Link>
                        <Link href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-youtube"></i></Link>
                    </div>
                </div>
            </div>

            <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="container mx-auto px-6 max-w-7xl h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <i className="fa-solid fa-cloud text-3xl text-primary"></i>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-slate-900 leading-none tracking-tight">CloudCom</span>
                            <span className="text-[9px] font-bold text-slate-500 tracking-[0.2em] uppercase mt-0.5">Networks</span>
                        </div>
                    </Link>

                    <div className="hidden lg:flex h-full items-center space-x-8">
                        <Link href="/" className={`nav-link h-full flex items-center text-sm font-semibold transition-colors ${pathname === '/' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Home</Link>
                        <Link href="/about" className={`nav-link h-full flex items-center text-sm font-semibold transition-colors ${isActive('/about') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>About Us</Link>
                        
                        <div className="relative group h-full flex items-center cursor-pointer">
                            <Link href="/services" className={`nav-link text-sm font-semibold transition-colors flex items-center ${isActive('/services') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Services <i className="fa-solid fa-chevron-down text-[10px] ml-1.5 opacity-50"></i></Link>
                        </div>

                        <Link href="/solutions" className={`nav-link h-full flex items-center text-sm font-semibold transition-colors ${isActive('/solutions') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Solutions</Link>
                        <Link href="/industries" className={`nav-link h-full flex items-center text-sm font-semibold transition-colors ${isActive('/industries') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Industries</Link>
                        <Link href="/resources" className={`nav-link h-full flex items-center text-sm font-semibold transition-colors ${isActive('/resources') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Resources <i className="fa-solid fa-chevron-down text-[10px] ml-1.5 opacity-50"></i></Link>
                        <Link href="/support" className={`nav-link h-full flex items-center text-sm font-semibold transition-colors ${isActive('/support') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Support</Link>
                        <Link href="/contact" className={`nav-link h-full flex items-center text-sm font-semibold transition-colors ${isActive('/contact') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Contact</Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link href="/contact" className="hidden md:inline-flex bg-primary hover:bg-primaryHover text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-colors items-center shadow-sm">Get in Touch <i className="fa-solid fa-arrow-right ml-2 text-xs"></i></Link>
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-slate-600 text-2xl focus:outline-none"><i className="fa-solid fa-bars"></i></button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white border-b border-slate-200 absolute w-full z-40 shadow-xl pb-4">
                        <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col h-[80vh] overflow-y-auto">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link block px-3 py-3 text-base font-medium border-b border-slate-100 ${pathname === '/' ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Home</Link>
                            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link block px-3 py-3 text-base font-medium border-b border-slate-100 ${isActive('/about') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>About Us</Link>
                            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link block px-3 py-3 text-base font-medium border-b border-slate-100 ${isActive('/services') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Services</Link>
                            <Link href="/solutions" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link block px-3 py-3 text-base font-medium border-b border-slate-100 ${isActive('/solutions') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Solutions</Link>
                            <Link href="/industries" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link block px-3 py-3 text-base font-medium border-b border-slate-100 ${isActive('/industries') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Industries</Link>
                            <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link block px-3 py-3 text-base font-medium border-b border-slate-100 ${isActive('/resources') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Resources</Link>
                            <Link href="/support" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link block px-3 py-3 text-base font-medium border-b border-slate-100 ${isActive('/support') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Support</Link>
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link block px-3 py-3 text-base font-medium border-b border-slate-100 ${isActive('/contact') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>Contact</Link>
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block mt-4 text-center bg-primary text-white px-6 py-3 rounded-md font-semibold text-sm transition-colors">Get in Touch</Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
