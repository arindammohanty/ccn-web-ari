import React from 'react';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="animate-fade-in">
            <section className="bg-gradient-hero pt-20 pb-28 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-screen"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-[10px] font-bold text-blue-400 tracking-widest uppercase mb-6">Communications. Cloud. Security. Infrastructure.</div>
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-3/5">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                                Building the Digital Infrastructure for a <span className="text-blue-400">Connected Future</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-300 mb-8 font-light leading-relaxed max-w-2xl">
                                <strong className="text-white font-semibold">Secure. Scalable. Sovereign.</strong><br/>
                                CloudCom Networks delivers next-generation communication, cloud infrastructure, cybersecurity and AI-enabled platforms for enterprises, governments and service providers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact?interest=Request%20Consultation%20(Home)" className="bg-primary hover:bg-primaryHover text-white px-8 py-3.5 rounded-md font-semibold text-sm transition-colors text-center shadow-lg shadow-blue-500/20">Request Consultation <i className="fa-solid fa-arrow-right ml-2"></i></Link>
                                <Link href="/contact?interest=Discovery%20Call%20(Home)" className="bg-transparent hover:bg-white/5 text-white border border-white/20 px-8 py-3.5 rounded-md font-semibold text-sm transition-all text-center">Schedule Discovery Call <i className="fa-regular fa-calendar ml-2"></i></Link>
                            </div>
                        </div>
                        <div className="lg:w-2/5 relative">
                             <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" alt="Cloud Network" className="w-full rounded-xl shadow-2xl border border-white/10 opacity-90 mix-blend-screen" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-6 max-w-7xl py-5 flex flex-wrap justify-between items-center text-slate-300 text-xs font-semibold gap-4">
                    <div className="flex items-center"><i className="fa-solid fa-code text-primary text-lg w-8"></i> OPEN STANDARDS <br/>& INTEROPERABILITY</div>
                    <div className="hidden md:block w-px h-8 bg-slate-800"></div>
                    <div className="flex items-center"><i className="fa-solid fa-shield-halved text-primary text-lg w-8"></i> SECURITY-FIRST <br/>BY DESIGN</div>
                    <div className="hidden md:block w-px h-8 bg-slate-800"></div>
                    <div className="flex items-center"><i className="fa-solid fa-globe text-primary text-lg w-8"></i> OPERATIONAL <br/>SOVEREIGNTY</div>
                    <div className="hidden lg:block w-px h-8 bg-slate-800"></div>
                    <div className="flex items-center"><i className="fa-regular fa-circle-check text-primary text-lg w-8"></i> ENTERPRISE-GRADE <br/>RELIABILITY</div>
                </div>
            </div>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
                        <p className="text-slate-500">End-to-end solutions across communication, cloud, security and infrastructure.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                        {[
                            { icon: "fa-phone-volume", title: "Unified Communications", desc: "VoIP, Hosted PBX, SIP Trunking, Video, Messaging.", link: "/services/ucaas" },
                            { icon: "fa-envelope", title: "Enterprise Email & Collab", desc: "Secure email, calendars, contacts, file sharing.", link: "/services/enterprise-email" },
                            { icon: "fa-cloud", title: "Cloud Infrastructure", desc: "IaaS, PaaS, Private Cloud, Hybrid Cloud, DR.", link: "/services/cloud-infrastructure" },
                            { icon: "fa-shield-halved", title: "Cybersecurity Services", desc: "SOC, threat detection, vulnerability management.", link: "/services/cloud-security" },
                            { icon: "fa-server", title: "Managed Infrastructure", desc: "System administration, NOC, monitoring, automation.", link: "/services/managed-services" },
                            { icon: "fa-brain", title: "AI & Intelligent Automation", desc: "AI-enabled communication, workflow automation.", link: "/services/ai-automation" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-card transition-shadow text-center flex flex-col items-center group">
                                <i className={`fa-solid ${item.icon} text-3xl text-primary mb-4 group-hover:scale-110 transition-transform`}></i>
                                <h3 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h3>
                                <p className="text-[11px] text-slate-500 mb-4 flex-grow">{item.desc}</p>
                                <Link href={item.link} className="text-primary text-[11px] font-bold uppercase tracking-wider">Learn More &rarr;</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slateBg border-t border-slate-200">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-1/3 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">About CloudCom Networks</h2>
                            <p className="text-sm text-slate-600 mb-4 leading-relaxed">CloudCom Networks Private Limited is a newly established enterprise communications and digital infrastructure company.</p>
                            <p className="text-sm text-slate-600 mb-4 leading-relaxed">We are founded by professionals with more than three decades of experience in open-source technologies, enterprise communications, cloud infrastructure, cybersecurity, networking and large-scale operational environments.</p>
                            <p className="text-sm text-slate-600 mb-6 leading-relaxed">Our mission is to deliver secure, scalable and future-ready platforms built on open standards, interoperability and a security-first approach.</p>
                            <Link href="/about" className="bg-primary text-white px-5 py-2 rounded text-xs font-bold transition-colors hover:bg-primaryHover">More About Us &rarr;</Link>
                        </div>
                        
                        <div className="lg:w-2/3">
                            <div className="text-center lg:text-left mb-8">
                                <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-2">Our Technology Philosophy</span>
                                <h3 className="text-2xl font-bold text-slate-900">Principles That Guide Everything We Build</h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { icon: "fa-code", title: "Open Standards", desc: "Promote interoperability and long-term flexibility." },
                                    { icon: "fa-puzzle-piece", title: "Interoperability", desc: "Solutions designed to work with existing investments." },
                                    { icon: "fa-shield-halved", title: "Vendor Neutrality", desc: "Avoid vendor lock-in with open architectures." },
                                    { icon: "fa-cloud-arrow-up", title: "Infrastructure Portability", desc: "Maintain control over where systems operate." },
                                    { icon: "fa-flag", title: "Operational Sovereignty", desc: "Retain ownership of your digital infrastructure." },
                                    { icon: "fa-lock", title: "Security-First Design", desc: "Security integrated from day one." },
                                    { icon: "fa-layer-group", title: "Scalable Architecture", desc: "Grow seamlessly to meet changing needs." },
                                    { icon: "fa-medal", title: "Enterprise Reliability", desc: "High availability and operational continuity." }
                                ].map((item, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="w-14 h-14 mx-auto rounded-full border-2 border-primary text-primary flex items-center justify-center text-xl mb-3">
                                            <i className={`fa-solid ${item.icon}`}></i>
                                        </div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                                        <p className="text-[10px] text-slate-500">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-20 text-center">
                        <h3 className="text-xl font-bold text-slate-900 mb-8">Powered by Leading Technologies</h3>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center text-xl font-bold text-slate-700"><i className="fa-brands fa-microsoft text-[#00a4ef] mr-2 text-2xl"></i> Azure</div>
                            <div className="flex items-center text-xl font-bold text-slate-700"><i className="fa-brands fa-aws text-[#ff9900] mr-2 text-2xl"></i> AWS</div>
                            <div className="flex items-center text-xl font-bold text-slate-700"><i className="fa-brands fa-google text-[#4285F4] mr-2 text-2xl"></i> Google Cloud</div>
                            <div className="flex items-center text-xl font-bold text-slate-700"><i className="fa-solid fa-brain text-[#10a37f] mr-2 text-2xl"></i> OpenAI</div>
                            <div className="flex items-center text-xl font-bold text-slate-700"><i className="fa-solid fa-network-wired text-[#FF6F00] mr-2 text-2xl"></i> TensorFlow</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white border-t border-slate-200">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
                        {[
                            { icon: "fa-building-columns", title: "Government & Public Sector" },
                            { icon: "fa-graduation-cap", title: "Education" },
                            { icon: "fa-heart-pulse", title: "Healthcare" },
                            { icon: "fa-chart-line", title: "Financial Services" },
                            { icon: "fa-building", title: "SMB & Enterprise" },
                            { icon: "fa-tower-cell", title: "Service Providers" }
                        ].map((item, idx) => (
                            <Link key={idx} href="/industries" className="flex flex-col items-center text-center w-32 cursor-pointer group">
                                <div className="w-16 h-16 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-2xl text-slate-600 group-hover:text-primary group-hover:border-primary transition-colors mb-3">
                                    <i className={`fa-solid ${item.icon}`}></i>
                                </div>
                                <span className="text-xs font-bold text-slate-900 leading-tight">{item.title}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <h3 className="text-xl font-bold text-slate-900 mb-8">Explore Our Resources</h3>
                        <Link href="/resources" className="bg-primary hover:bg-primaryHover text-white px-8 py-3 rounded-md font-semibold text-sm transition-colors shadow-sm inline-block">Explore All Resources &rarr;</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
