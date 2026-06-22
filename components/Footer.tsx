import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <section className="bg-gradient-blue relative overflow-hidden py-16 mt-auto">
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&h=800&q=80')] bg-cover bg-left opacity-20 mix-blend-screen"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Transform Your Communication and Infrastructure?</h2>
                        <p className="text-sm text-blue-200 max-w-2xl">Let's discuss how CloudCom Networks can help your organization build a secure, scalable, and future-ready digital foundation.</p>
                    </div>
                    <Link href="/contact?interest=General%20Inquiry%20(Footer%20Banner)" className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded text-sm font-bold transition-colors inline-flex items-center shadow-lg whitespace-nowrap">Get in Touch &rarr;</Link>
                </div>
            </section>

            <footer className="bg-darkBg border-t border-slate-800 pt-16 pb-8">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-2 mb-6">
                                <i className="fa-solid fa-cloud text-3xl text-primary"></i>
                                <div className="flex flex-col text-white">
                                    <span className="text-xl font-bold leading-none tracking-tight">CloudCom</span>
                                    <span className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase mt-0.5">Networks</span>
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 mb-6 leading-relaxed pr-4">Building secure communications and digital infrastructure for a connected and sovereign tomorrow.</p>
                            <div className="flex space-x-3">
                                <Link href="https://linkedin.com" target="_blank" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors"><i className="fa-brands fa-linkedin-in text-sm"></i></Link>
                                <Link href="https://twitter.com" target="_blank" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors"><i className="fa-brands fa-twitter text-sm"></i></Link>
                                <Link href="https://youtube.com" target="_blank" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors"><i className="fa-brands fa-youtube text-sm"></i></Link>
                                <Link href="mailto:info@cloudcomnet.com" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-colors"><i className="fa-regular fa-envelope text-sm"></i></Link>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-bold text-sm mb-6 tracking-wide">Quick Links</h4>
                            <ul className="space-y-3 text-xs font-medium text-slate-400">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                                <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
                                <li><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold text-sm mb-6 tracking-wide">Our Services</h4>
                            <ul className="space-y-3 text-xs font-medium text-slate-400">
                                <li><Link href="/services/cloud-infrastructure" className="hover:text-white transition-colors">Cloud Infrastructure</Link></li>
                                <li><Link href="/services/cloud-security" className="hover:text-white transition-colors">Cloud Security</Link></li>
                                <li><Link href="/services/managed-services" className="hover:text-white transition-colors">Managed Services</Link></li>
                                <li><Link href="/services/ucaas" className="hover:text-white transition-colors">Unified Communications</Link></li>
                                <li><Link href="/services/ai-automation" className="hover:text-white transition-colors">AI & Automation</Link></li>
                                <li><Link href="/services/network-services" className="hover:text-white transition-colors">Network Services</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold text-sm mb-6 tracking-wide">Resources</h4>
                            <ul className="space-y-3 text-xs font-medium text-slate-400">
                                <li><Link href="/resources/blog" className="hover:text-white transition-colors">Blog</Link></li>
                                <li><Link href="/resources/whitepapers" className="hover:text-white transition-colors">White Papers</Link></li>
                                <li><Link href="/resources/casestudies" className="hover:text-white transition-colors">Case Studies</Link></li>
                                <li><Link href="/resources/guides" className="hover:text-white transition-colors">Guides</Link></li>
                                <li><Link href="/resources/webinars" className="hover:text-white transition-colors">Webinars</Link></li>
                                <li><Link href="/resources/news" className="hover:text-white transition-colors">News & Updates</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold text-sm mb-6 tracking-wide">Support</h4>
                            <ul className="space-y-3 text-xs font-medium text-slate-400 mb-6">
                                <li><Link href="/support/help-center" className="hover:text-white transition-colors">Help Center</Link></li>
                                <li><Link href="/support" className="hover:text-white transition-colors">Support Portal</Link></li>
                                <li><Link href="/support/service-status" className="hover:text-white transition-colors">Service Status</Link></li>
                                <li><Link href="/support/knowledge-base" className="hover:text-white transition-colors">Knowledge Base</Link></li>
                                <li><Link href="/support/sla-policies" className="hover:text-white transition-colors">SLA & Policies</Link></li>
                            </ul>
                            <Link href="/contact?interest=Support%20Inquiry%20(Footer)" className="w-full bg-primary/10 border border-primary/30 hover:bg-primary text-white py-2 rounded text-xs font-bold transition-colors flex items-center justify-center">Get in Touch &rarr;</Link>
                        </div>
                    </div>

                    <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500">
                        <p>&copy; 2026 CloudCom Networks Private Limited. All Rights Reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0 font-medium">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
