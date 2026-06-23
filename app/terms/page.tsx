import React from 'react';

export default function TermsOfServicePage() {
    return (
        <div className="animate-fade-in bg-white min-h-screen">
            <section className="bg-slate-50 border-b border-slate-200 pt-16 pb-12">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Terms of Service</h1>
                    <p className="text-sm text-slate-500">Effective Date: June 20, 2026</p>
                </div>
            </section>
            <section className="py-16">
                <div className="container mx-auto px-6 max-w-4xl prose prose-slate prose-sm md:prose-base">
                    <h2>1. Operational Mandates</h2>
                    <p>By engaging CloudCom Networks infrastructure, the client warrants that platform resources will not deploy unauthorized vulnerability scans against external entities, nor distribute malicious payloads. Violations trigger immediate environment suspension.</p>
                    <h2>2. Uptime and Service Level Agreements</h2>
                    <p>We guarantee a 99.9% uptime metric for core routing and compute arrays. Details regarding credit disbursement for operational faults are delineated explicitly within the standalone Service Level Agreement documentation provided during onboarding.</p>
                    <h2>3. Liability Limitations</h2>
                    <p>CloudCom Networks provisions the architectural foundation. Consequently, we disclaim liability for localized data loss resulting from misconfigurations applied independently by the client's internal network administrators.</p>
                </div>
            </section>
        </div>
    );
}
