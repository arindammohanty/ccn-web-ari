import React from 'react';

export default function SLAPoliciesPage() {
    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero border-b border-white/10 pt-16 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> SLA & Policies</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">SLA & Policies</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">Service Level Agreements, Terms of Use, and Privacy Policies.</p>
                </div>
            </section>
            <section className="py-20 bg-slateBg text-center">
                <div className="container mx-auto px-6">
                    <i className="fa-solid fa-person-digging text-6xl text-slate-300 mb-4"></i>
                    <h2 className="text-2xl font-bold text-slate-800">Content Coming Soon</h2>
                </div>
            </section>
        </div>
    );
}
