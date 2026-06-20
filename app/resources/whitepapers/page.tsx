import React from 'react';
import Link from 'next/link';

export default function WhitepapersPage() {
    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Resources <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> White Papers</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">White Papers</h1>
                    <p className="text-lg text-slate-300 mb-8">In-depth research and expert insights to help you make informed decisions.</p>
                    <div className="relative max-w-2xl">
                        <i className="fa-solid fa-magnifying-glass absolute left-4 top-3 text-slate-400"></i>
                        <input type="text" placeholder="Search white papers by keyword, topic or technology..." className="w-full pl-10 pr-4 py-3 rounded-md text-sm border-0 focus:ring-2 focus:ring-primary shadow-lg" />
                    </div>
                </div>
            </section>
            
            <div className="h-4 bg-slateBg"></div>

            <section className="py-16 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex justify-between items-end mb-6">
                        <h2 className="text-xl font-bold text-slate-900">Explore by Topic</h2>
                        <Link href="#" className="text-primary text-xs font-bold uppercase">View All Categories &rarr;</Link>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-16">
                        <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col items-center text-center shadow-sm cursor-pointer hover:border-primary transition-colors">
                            <i className="fa-solid fa-cloud text-primary text-xl mb-2"></i>
                            <span className="text-[10px] font-bold text-slate-900">Cloud Computing</span>
                            <span className="text-[9px] text-slate-400">12 Papers</span>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col items-center text-center shadow-sm cursor-pointer hover:border-primary transition-colors">
                            <i className="fa-solid fa-shield-halved text-primary text-xl mb-2"></i>
                            <span className="text-[10px] font-bold text-slate-900">Security</span>
                            <span className="text-[9px] text-slate-400">14 Papers</span>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col items-center text-center shadow-sm cursor-pointer hover:border-primary transition-colors">
                            <i className="fa-solid fa-comments text-primary text-xl mb-2"></i>
                            <span className="text-[10px] font-bold text-slate-900">Unified Comms</span>
                            <span className="text-[9px] text-slate-400">10 Papers</span>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col items-center text-center shadow-sm cursor-pointer hover:border-primary transition-colors">
                            <i className="fa-solid fa-gears text-primary text-xl mb-2"></i>
                            <span className="text-[10px] font-bold text-slate-900">AI & Auto</span>
                            <span className="text-[9px] text-slate-400">9 Papers</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-end mb-6">
                        <h2 className="text-xl font-bold text-slate-900">All White Papers</h2>
                        <div className="flex items-center text-xs text-slate-500">Sort by: 
                            <select className="ml-2 border border-slate-200 rounded p-1">
                                <option>Latest</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="grid lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
                            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-card transition-shadow flex shadow-sm">
                                <div className="w-24 mr-6 bg-slate-900 rounded drop-shadow flex-shrink-0 flex items-center justify-center relative overflow-hidden">
                                    <i className="fa-solid fa-cloud text-3xl text-white opacity-20 absolute"></i>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-[9px] font-bold text-primary uppercase tracking-wider mb-1">Cloud Computing</span>
                                    <h3 className="font-bold text-slate-900 mb-2 text-sm leading-snug">The Business Value of Cloud Migration</h3>
                                    <p className="text-[10px] text-slate-500 mb-4 line-clamp-2">How modern cloud strategies drive agility and ROI.</p>
                                    <p className="text-[10px] text-slate-400 mt-auto">May 2026 &bull; 12 pages &bull; <i className="fa-solid fa-download text-primary"></i></p>
                                </div>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-card transition-shadow flex shadow-sm">
                                <div className="w-24 mr-6 bg-slate-900 rounded drop-shadow flex-shrink-0 flex items-center justify-center relative overflow-hidden">
                                    <i className="fa-solid fa-lock text-3xl text-white opacity-20 absolute"></i>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-[9px] font-bold text-primary uppercase tracking-wider mb-1">Security</span>
                                    <h3 className="font-bold text-slate-900 mb-2 text-sm leading-snug">Zero Trust Security: A Strategic Imperative</h3>
                                    <p className="text-[10px] text-slate-500 mb-4 line-clamp-2">Why Zero Trust is the foundation for secure digital transformation.</p>
                                    <p className="text-[10px] text-slate-400 mt-auto">May 2026 &bull; 18 pages &bull; <i className="fa-solid fa-download text-primary"></i></p>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6 text-center">
                                <h3 className="text-sm font-bold text-slate-900 mb-4">Featured White Paper</h3>
                                <div className="bg-slate-900 text-white p-6 rounded-lg mb-4 text-left">
                                    <h4 className="font-bold text-lg mb-2">Navigating the Path to Digital Transformation</h4>
                                    <i className="fa-solid fa-cloud-arrow-up text-4xl opacity-50 mt-4 block text-center"></i>
                                </div>
                                <p className="text-[11px] text-slate-600 mb-4 text-left">A comprehensive guide to building a future-ready organization.</p>
                                <button className="w-full bg-primary text-white py-2 rounded text-xs font-bold">Download Now &darr;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
