import React from 'react';

export default function PrivacyPolicyPage() {
    return (
        <div className="animate-fade-in bg-white min-h-screen">
            <section className="bg-slate-50 border-b border-slate-200 pt-16 pb-12">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
                    <p className="text-sm text-slate-500">Last Updated: June 20, 2026</p>
                </div>
            </section>
            <section className="py-16">
                <div className="container mx-auto px-6 max-w-4xl prose prose-slate prose-sm md:prose-base">
                    <h2>1. Data Collection Framework</h2>
                    <p>We process organizational telemetry strictly to provision and maintain infrastructure services. Personally Identifiable Information (PII) is isolated and encrypted at rest utilizing AES-256 standards. We do not synthesize user traffic for secondary marketing metrics.</p>
                    <h2>2. Cloud Storage Governance</h2>
                    <p>Information retained within our managed clusters adheres to strict geographic sovereignty requirements. Data lakes established for clients are exclusively accessible by authorized client personnel unless explicitly permitted via support ticket auditing protocols.</p>
                    <h2>3. Third-Party Integration</h2>
                    <p>To ensure high availability, telemetry may be routed through certified secondary platforms (e.g., AWS, Azure). These entities operate under rigorous Data Processing Agreements (DPAs) preventing unauthorized parsing of your internal payloads.</p>
                </div>
            </section>
        </div>
    );
}
