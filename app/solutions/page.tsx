import React from 'react';

export default function SolutionsPage() {
    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Solutions</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Enterprise Solutions</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Tailored technology stacks crafted to solve specific business challenges.</p>
                </div>
            </section>
            <section className="py-20 bg-slateBg text-center">
                <div className="container mx-auto px-6">
                    <i className="fa-solid fa-person-digging text-6xl text-slate-300 mb-4"></i>
                    <h2 className="text-2xl font-bold text-slate-800">Content Coming Soon</h2>
                    <p className="text-slate-500 mt-2">Our bespoke solution packages are being updated.</p>
                </div>
            </section>
        </div>
    );
}
