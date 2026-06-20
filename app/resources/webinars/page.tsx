import React from 'react';
import Link from 'next/link';

export default function WebinarsPage() {
    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Resources <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Webinars</div>
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Webinars</h1>
                            <p className="text-lg text-slate-300 mb-6">Expert insights. Real conversations. Smarter decisions.</p>
                            <p className="text-sm text-slate-400 mb-8 max-w-md">Join industry experts and CloudCom Networks leaders as they discuss trends, strategies, and solutions that drive business success.</p>
                            <div className="relative max-w-md">
                                <i className="fa-solid fa-magnifying-glass absolute left-4 top-3 text-slate-400"></i>
                                <input type="text" placeholder="Search webinars..." className="w-full pl-10 pr-4 py-3 rounded-md text-sm border-0 focus:ring-2 focus:ring-primary shadow-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="h-4 bg-slateBg"></div>

            <section className="py-16 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-3">
                            <h2 className="text-xl font-bold text-slate-900 mb-6">Upcoming Webinars</h2>
                            <div className="grid md:grid-cols-3 gap-6 mb-16">
                                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
                                    <div className="h-32 bg-slate-900 relative">
                                        <span className="absolute top-2 left-2 bg-primary text-white text-[8px] font-bold uppercase px-2 py-1 rounded">Live</span>
                                        <i className="fa-solid fa-shield-halved text-4xl text-white opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                                    </div>
                                    <div className="p-5 flex-grow flex flex-col">
                                        <p className="text-[10px] text-slate-500 mb-2 font-medium"><i className="fa-regular fa-calendar mr-1"></i> May 28, 2026 &bull; 11:00 AM IST</p>
                                        <h3 className="text-sm font-bold text-slate-900 mb-2">Zero Trust Security: Building a Secure Future</h3>
                                        <p className="text-[10px] text-slate-600 mb-4 flex-grow">Explore Zero Trust principles and modern security strategies.</p>
                                        <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white py-1.5 rounded text-[11px] font-bold transition-colors">Register Now &rarr;</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6">
                                <h3 className="text-sm font-bold text-slate-900 mb-4">Why Attend?</h3>
                                <ul className="space-y-3 text-[11px] text-slate-600">
                                    <li className="flex items-start"><i className="fa-solid fa-check text-primary mt-0.5 mr-2"></i> Actionable insights</li>
                                    <li className="flex items-start"><i className="fa-solid fa-check text-primary mt-0.5 mr-2"></i> Live Q&A with experts</li>
                                    <li className="flex items-start"><i className="fa-solid fa-check text-primary mt-0.5 mr-2"></i> Access to recordings</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
