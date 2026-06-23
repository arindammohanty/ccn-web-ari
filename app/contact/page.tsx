"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function ContactFormContent() {
    const searchParams = useSearchParams();
    const interestParam = searchParams.get('interest');

    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', company: '', subject: '', message: ''
    });

    // Auto-fill subject line based on the incoming route tracking parameter
    useEffect(() => {
        if (interestParam) {
            setFormData(prev => ({ ...prev, subject: `Inquiry: ${interestParam}` }));
        }
    }, [interestParam]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const trackedSection = interestParam ? interestParam : 'General Inquiry (Direct Visit)';
        
        // Construct the detailed popup message
        const popupMessage = `
--- COMMUNICATION DISPATCH RECORD ---
Target Section: ${trackedSection}

User Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not Provided'}
Company: ${formData.company || 'Not Provided'}

Message Contents:
Subject: ${formData.subject}
Message: ${formData.message}

(This payload will be routed to the backend communications handler)
        `.trim();

        alert(popupMessage);
        
        // Reset form
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name *" required className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs outline-none focus:border-primary text-slate-900" />
                </div>
                <div>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address *" required className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs outline-none focus:border-primary text-slate-900" />
                </div>
                <div>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs outline-none focus:border-primary text-slate-900" />
                </div>
                <div>
                    <input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Company / Organization" className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs outline-none focus:border-primary text-slate-900" />
                </div>
            </div>
            <div className="mb-4">
                <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subject *" required className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs outline-none focus:border-primary text-slate-900" />
            </div>
            <div className="mb-4">
                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message *" required rows={5} className="w-full px-4 py-2.5 rounded border border-slate-200 text-xs outline-none focus:border-primary resize-none text-slate-900"></textarea>
            </div>
            <div className="mb-6 flex items-start">
                <input type="checkbox" id="terms" className="mt-0.5 mr-2" required />
                <label htmlFor="terms" className="text-[10px] text-slate-500">I agree to the Privacy Policy and Terms of Service.</label>
            </div>
            <button type="submit" className="bg-primary hover:bg-primaryHover text-white px-6 py-2.5 rounded text-sm font-bold transition-colors shadow-md">Send Message &rarr;</button>
        </form>
    );
}

export default function ContactPage() {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="bg-gradient-hero pt-16 pb-20 relative overflow-hidden">
                 <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&h=1080&q=80')] bg-cover bg-center mix-blend-screen"></div>
                 <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                     <div className="text-primary font-semibold text-xs mb-4">Home <i className="fa-solid fa-chevron-right text-[8px] mx-2 text-slate-500"></i> Contact Us</div>
                     <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h1>
                     <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10">We'd love to hear from you. Whether you have a question about our services, need support, or want to explore a partnership, our team is here to help.</p>
                 </div>
            </section>

            <section className="py-16 bg-slateBg relative z-20 min-h-screen">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-8 mb-16">
                        {/* Contact Info Cards */}
                        <div className="lg:w-1/3">
                            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm h-full">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Get in Touch</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center text-lg mr-4 flex-shrink-0"><i className="fa-solid fa-phone"></i></div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Phone</h4>
                                            <p className="text-slate-600 text-xs font-semibold mt-1">+91 00000 00000</p>
                                            <p className="text-slate-400 text-[10px] mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center text-lg mr-4 flex-shrink-0"><i className="fa-regular fa-envelope"></i></div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Email</h4>
                                            <p className="text-slate-600 text-xs font-semibold mt-1">info@cloudcomnet.com</p>
                                            <p className="text-slate-400 text-[10px] mt-1">We respond within 24 hours</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center text-lg mr-4 flex-shrink-0"><i className="fa-solid fa-location-dot"></i></div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Address</h4>
                                            <p className="text-slate-600 text-xs mt-1">Bhubaneswar, Odisha, India</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center text-lg mr-4 flex-shrink-0"><i className="fa-solid fa-headset"></i></div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Support</h4>
                                            <Link href="/support/portal" className="text-primary hover:underline text-xs font-semibold mt-1 block">support.cloudcomnet.com</Link>
                                            <p className="text-slate-400 text-[10px] mt-1">For existing customers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Wrapper */}
                        <div className="lg:w-2/3 bg-white p-8 md:p-10 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h3>
                            <p className="text-slate-500 text-xs mb-8">Fill out the form below and our team will get back to you shortly.</p>
                            
                            {/* Suspense boundary required by Next.js when using useSearchParams */}
                            <Suspense fallback={<div className="text-slate-500 text-sm py-4">Loading form framework...</div>}>
                                <ContactFormContent />
                            </Suspense>
                        </div>
                    </div>

                    {/* Offices */}
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-slate-900">Our Offices</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-regular fa-building text-3xl text-primary mb-3"></i>
                            <h4 className="font-bold text-slate-900 text-sm mb-1">Registered Office</h4>
                            <p className="text-[11px] text-slate-500">Bhubaneswar, Odisha, India</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-handshake text-3xl text-primary mb-3"></i>
                            <h4 className="font-bold text-slate-900 text-sm mb-1">Sales Enquiries</h4>
                            <p className="text-[11px] text-slate-500">sales@cloudcomnet.com</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                            <i className="fa-solid fa-headset text-3xl text-primary mb-3"></i>
                            <h4 className="font-bold text-slate-900 text-sm mb-1">Support & Services</h4>
                            <p className="text-[11px] text-slate-500">support@cloudcomnet.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
