import React from 'react';
import Link from 'next/link';

export default function ManagedServicesPage() {
    return (
        <div className="animate-fade-in">
             <section className="bg-gradient-hero pt-20 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Services <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Managed Services</div>
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Managed Services</h1>
                            <h2 className="text-3xl font-bold text-blue-400 mb-6">We Manage IT. You Drive Business.</h2>
                            <p className="text-slate-300 mb-8 text-sm leading-relaxed">CloudCom Networks delivers end-to-end managed services designed to keep your IT infrastructure secure, available, and performing at its best.</p>
                            <Link href="/contact" className="bg-primary hover:bg-primaryHover text-white px-6 py-2.5 rounded text-sm font-semibold transition-colors inline-block">Request Consultation &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-slateBg">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Managed Services</h2>
                        <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-server text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Infrastructure Management</h3>
                            <p className="text-[11px] text-slate-500">End-to-end management of servers and storage.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-shield text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Security Management</h3>
                            <p className="text-[11px] text-slate-500">Threat monitoring and endpoint protection.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-clock-rotate-left text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Backup & Disaster Recovery</h3>
                            <p className="text-[11px] text-slate-500">Reliable backup solutions for continuity.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-desktop text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Application Management</h3>
                            <p className="text-[11px] text-slate-500">Manage and optimize business applications.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-headset text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Help Desk Support</h3>
                            <p className="text-[11px] text-slate-500">Multi-channel support for users.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-cloud text-3xl text-primary mb-4"></i>
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Cloud Management</h3>
                            <p className="text-[11px] text-slate-500">Ensure cloud scalability and cost control.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
