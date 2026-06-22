import React from 'react';
import Link from 'next/link';

export default function SitemapPage() {
    return (
        <div className="animate-fade-in bg-white min-h-screen">
            <section className="bg-slate-50 border-b border-slate-200 pt-16 pb-12">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Platform Sitemap</h1>
                    <p className="text-sm text-slate-500">Directory architecture for CloudCom Networks</p>
                </div>
            </section>
            <section className="py-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="grid md:grid-cols-3 gap-10">
                        <div>
                            <h3 className="font-bold text-lg text-slate-900 mb-4 border-b pb-2">Core Directory</h3>
                            <ul className="space-y-3 text-sm text-primary font-medium">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/solutions">Solutions</Link></li>
                                <li><Link href="/industries">Industries</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900 mb-4 border-b pb-2">Services Structure</h3>
                            <ul className="space-y-3 text-sm text-primary font-medium">
                                <li><Link href="/services">Services Hub</Link></li>
                                <li><Link href="/services/cloud-infrastructure">Cloud Infrastructure</Link></li>
                                <li><Link href="/services/cloud-security">Cloud Security</Link></li>
                                <li><Link href="/services/managed-services">Managed Services</Link></li>
                                <li><Link href="/services/ucaas">Unified Communications</Link></li>
                                <li><Link href="/services/ai-automation">AI & Automation</Link></li>
                                <li><Link href="/services/enterprise-email">Enterprise Email</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900 mb-4 border-b pb-2">Operational Resources</h3>
                            <ul className="space-y-3 text-sm text-primary font-medium">
                                <li><Link href="/support">Support Portal</Link></li>
                                <li><Link href="/resources/whitepapers">Whitepapers</Link></li>
                                <li><Link href="/resources/casestudies">Case Studies</Link></li>
                                <li><Link href="/privacy">Privacy Policy</Link></li>
                                <li><Link href="/terms">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
