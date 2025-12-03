import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, X } from 'lucide-react';

const Profile = () => {
    const [showResume, setShowResume] = useState(false);

    return (
        <div className="page-section w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Resume Modal */}
            {showResume && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col">
                        <div className="flex justify-between items-center p-6 border-b border-neutral-200">
                            <h2 className="text-xl font-bold text-neutral-900">Resume</h2>
                            <div className="flex gap-2">
                                <a
                                    href="/resume.pdf"
                                    download="Belal_Haidary_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all bg-blue-600 text-white hover:bg-blue-700"
                                >
                                    <Download className="w-4 h-4" /> Download PDF
                                </a>
                                <button
                                    onClick={() => setShowResume(false)}
                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all border border-neutral-200 text-neutral-700 hover:bg-neutral-100"
                                >
                                    <X className="w-4 h-4" /> Close
                                </button>
                            </div>
                        </div>
                        <iframe
                            src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
                            className="flex-1 w-full border-none"
                            title="Resume PDF"
                        />
                    </div>
                </div>
            )}

            {/* Hero */}
            <section className="mb-24 pt-4">
                <h1 className="text-2xl sm:text-3xl tracking-tight mb-8 leading-snug font-medium text-black">
                    Bridging <span className="text-blue-600">Healthcare</span> and <span className="text-blue-600">IT</span> - empowering clinical teams to deliver <span className="italic font-[450]">quality care</span> without <span className="text-neutral-400">technical friction</span>.
                </h1>
                <p className="text-lg max-w-2xl leading-relaxed mb-10 text-neutral-600">
                    Accomplished Healthcare IT Engineer and DevOps/SRE with 4+ years supporting mission-critical radiology systems. Combines a Radiography background with hands-on experience across RIS/PACS, HL7 integrations, SQL Server, and observability tooling to improve reliability, performance, and workflows at scale.
                </p>
                <div className="flex gap-4">
                    <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full transition-all bg-black text-white hover:bg-neutral-800">
                        Contact Me
                    </Link>
                    <button
                        onClick={() => setShowResume(true)}
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full transition-all border border-neutral-200 text-neutral-700 hover:bg-neutral-100"
                    >
                        <Download className="w-4 h-4" /> View Resume
                    </button>
                    <Link
                        to="/profile/achievements"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full transition-all border border-neutral-200 text-neutral-700 hover:bg-blue-100 hover:border-blue-300"
                    >
                        Work Highlights
                    </Link>
                </div>
            </section>

            {/* Experience */}
            <section className="pb-20">
                <h2 className="text-xs font-bold uppercase tracking-wider mb-10 text-neutral-400">Professional Experience</h2>
                <div className="space-y-12">

                    {/* DevOps Engineer */}
                    <div className="group relative pl-8 border-l transition-colors duration-300 border-neutral-200 hover:border-blue-400">
                        <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full border-2 group-hover:border-blue-500 transition-colors bg-neutral-50 border-neutral-300"></div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-neutral-900">DevOps Engineer</h3>
                            <span className="text-xs font-medium tabular-nums px-2 py-1 rounded-md text-neutral-500 bg-neutral-100/50">Jan 2025 — Oct 2025</span>
                        </div>
                        <div className="text-sm font-semibold mb-4 flex items-center gap-2 text-neutral-700">
                            Kestral Computing, Melbourne
                        </div>
                        <ul className="text-base text-neutral-600 leading-relaxed max-w-3xl space-y-2 list-disc list-inside">
                            <li>Led SQL Server hygiene improvements (backups, job management, performance baselining), reducing missed backups and job failures</li>
                            <li>Built HL7 interface scripts and implemented API/HL7 file integrations using Mirth Connect and HL7C</li>
                            <li>Created SRE plan and defined SLIs/SLOs, upgraded Telegraf/Chronograf, configured alerting to prevent performance incidents</li>
                            <li>Authored T-SQL queries and ad-hoc datasets to bridge RIS reporting gaps</li>
                            <li>Supported RIS/PACS projects end-to-end with clear server/network/firewall requirements</li>
                            <li>Leveraged AI tools to enhance workflow efficiency in HL7 scripting, SQL, and API development</li>
                        </ul>
                    </div>

                    {/* Level 2 Technical Support */}
                    <div className="group relative pl-8 border-l transition-colors duration-300 border-neutral-200 hover:border-blue-400">
                        <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full border-2 group-hover:border-blue-500 transition-colors bg-neutral-50 border-neutral-300"></div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-neutral-900">Level 2 Technical Support Engineer</h3>
                            <span className="text-xs font-medium tabular-nums px-2 py-1 rounded-md text-neutral-500 bg-neutral-100/50">July 2023 — Jan 2025</span>
                        </div>
                        <div className="text-sm font-semibold mb-4 flex items-center gap-2 text-neutral-700">
                            Kestral Computing, Melbourne
                        </div>
                        <ul className="text-base text-neutral-600 leading-relaxed max-w-3xl space-y-2 list-disc list-inside">
                            <li>Maintained RIS applications and integrations for key accounts, coordinating upgrades and roadmap items</li>
                            <li>Resolved complex HL7, data integrity, and database issues; led ticket escalations</li>
                            <li>Delivered remote and onsite training for MITs, clerical, and reporting users (Karisma RIS, SpeechMagic VR)</li>
                            <li>Provided on-site coverage for major public projects including NSW Health Sectra PACS/Karisma RIS solution (2021-2024)</li>
                            <li>Monitored system performance/storage and safeguarded data integrity across RIS, PACS, HL7, and patient/referrer portals</li>
                        </ul>
                    </div>

                    {/* Level 1 Support */}
                    <div className="group relative pl-8 border-l transition-colors duration-300 border-neutral-200 hover:border-blue-400">
                        <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full border-2 group-hover:border-blue-500 transition-colors bg-neutral-50 border-neutral-300"></div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-neutral-900">Level 1 Support</h3>
                            <span className="text-xs font-medium tabular-nums px-2 py-1 rounded-md text-neutral-500 bg-neutral-100/50">July 2021 — July 2023</span>
                        </div>
                        <div className="text-sm font-semibold mb-4 flex items-center gap-2 text-neutral-700">
                            Kestral Computing, Melbourne
                        </div>
                        <ul className="text-base text-neutral-600 leading-relaxed max-w-3xl space-y-2 list-disc list-inside">
                            <li>Handled RIS support via phone/email, logged incidents in Zendesk/CRMs, ensured SLA adherence</li>
                            <li>Identified/tested defects, compiled bug analyses, coordinated patching, published build notes</li>
                            <li>Scheduled and executed upgrades of system components after hours with stakeholder communication</li>
                            <li>Participated in on-call rotations supporting ANZ clients 24/7</li>
                        </ul>
                    </div>

                    {/* Operations Manager */}
                    <div className="group relative pl-8 border-l transition-colors duration-300 border-neutral-200 hover:border-blue-400">
                        <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full border-2 group-hover:border-blue-500 transition-colors bg-neutral-50 border-neutral-300"></div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-neutral-900">Operations Manager & SIC</h3>
                            <span className="text-xs font-medium tabular-nums px-2 py-1 rounded-md text-neutral-500 bg-neutral-100/50">2018 — 2021</span>
                        </div>
                        <div className="text-sm font-semibold mb-4 flex items-center gap-2 text-neutral-700">
                            Capital Auto Recyclers, Canberra
                        </div>
                        <ul className="text-base text-neutral-600 leading-relaxed max-w-3xl space-y-2 list-disc list-inside">
                            <li>Managed customer service, fulfillment, inventory, logistics/export, and compliance</li>
                            <li>Built WordPress site and SEO strategy, achieving first-page Google ranking for "Canberra used car parts"</li>
                            <li>Designed facility layout and workflows to improve throughput and safety</li>
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Profile;
