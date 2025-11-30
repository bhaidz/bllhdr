import React from 'react';
import { TrendingUp, Activity, Database, Zap, Shield } from 'lucide-react';

const Projects = () => {
    return (
        <div className="page-section w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section className="pb-20 pt-4">
                <h1 className="text-3xl sm:text-4xl tracking-tight mb-6 font-medium text-black">Work Highlights</h1>
                <p className="text-lg text-neutral-500 max-w-xl leading-relaxed mb-12">
                    Highlighting previous healthcare IT accomplishments spanning SRE, integration, and automation
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* SRE & Observability */}
                    <div className="group rounded-2xl border overflow-hidden transition-all hover:shadow-lg border-neutral-100 bg-neutral-50 hover:border-blue-300 hover:shadow-blue-100/50">
                        <div className="h-48 relative overflow-hidden bg-gradient-to-br from-blue-50 to-neutral-100">
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
                            <div className="absolute inset-0 flex items-center justify-center group-hover:text-blue-600 transition-colors text-blue-400">
                                <TrendingUp className="w-12 h-12" />
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-2 text-neutral-900">SRE & Observability Initiative</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                                Created SRE plan defining SLIs/SLOs, upgraded Telegraf/Chronograf stack, explored Grafana integration, and configured alerting to prevent performance and availability incidents across production environments.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-blue-100 text-blue-700">Grafana</span>
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-blue-100 text-blue-700">Telegraf</span>
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-blue-100 text-blue-700">SLOs</span>
                            </div>
                        </div>
                    </div>

                    {/* HL7 Integration */}
                    <div className="group rounded-2xl border overflow-hidden transition-all hover:shadow-lg border-neutral-100 bg-neutral-50 hover:border-blue-300 hover:shadow-blue-100/50">
                        <div className="h-48 relative overflow-hidden bg-gradient-to-br from-green-50 to-neutral-100">
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, #10b981 25%, transparent 25%, transparent 75%, #10b981 75%, #10b981), linear-gradient(45deg, #10b981 25%, transparent 25%, transparent 75%, #10b981 75%, #10b981)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
                            <div className="absolute inset-0 flex items-center justify-center group-hover:text-green-600 transition-colors text-green-400">
                                <Activity className="w-12 h-12" />
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-2 text-neutral-900">HL7 Integration Framework</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                                Built HL7 interface scripts and implemented API/HL7 file integrations using Mirth Connect and HL7C, standardizing data exchange across sites and vendors for improved interoperability.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-green-100 text-green-700">HL7</span>
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-green-100 text-green-700">Mirth Connect</span>
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-green-100 text-green-700">HL7C</span>
                            </div>
                        </div>
                    </div>

                    {/* SQL Server Reliability */}
                    <div className="group rounded-2xl border overflow-hidden transition-all hover:shadow-lg border-neutral-100 bg-neutral-50 hover:border-blue-300 hover:shadow-blue-100/50">
                        <div className="h-48 relative overflow-hidden bg-gradient-to-br from-orange-50 to-neutral-100">
                            <div className="absolute inset-0 opacity-10 bg-gradient-to-br to-transparent from-orange-100"></div>
                            <div className="absolute inset-0 flex items-center justify-center group-hover:text-orange-600 transition-colors text-orange-400">
                                <Database className="w-12 h-12" />
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-2 text-neutral-900">SQL Server Reliability Program</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                                Led SQL Server hygiene improvements including backups, job management, and performance baselining, reducing missed backups and job failures while stabilizing KPI trends.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-orange-100 text-orange-700">SQL Server</span>
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-orange-100 text-orange-700">T-SQL</span>
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-orange-100 text-orange-700">Performance</span>
                            </div>
                        </div>
                    </div>

                    {/* AI Automation */}
                    <div className="group rounded-2xl border overflow-hidden transition-all hover:shadow-lg border-neutral-100 bg-neutral-50 hover:border-blue-300 hover:shadow-blue-100/50">
                        <div className="h-48 relative overflow-hidden bg-gradient-to-br from-purple-50 to-neutral-100">
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #a855f7 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                            <div className="absolute inset-0 flex items-center justify-center group-hover:text-purple-600 transition-colors text-purple-400">
                                <Zap className="w-12 h-12" />
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-2 text-neutral-900">AI Automation Suite</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                                Leveraged AI tools to enhance workflow efficiency, creating specialized agents for HL7 scripting, SQL development, API integration, and SRE tasks to improve productivity and decision-making.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-purple-100 text-purple-700">AI</span>
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-purple-100 text-purple-700">Automation</span>
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-purple-100 text-purple-700">Scripting</span>
                            </div>
                        </div>
                    </div>

                    {/* Data Migration */}
                    <div className="group rounded-2xl border overflow-hidden transition-all hover:shadow-lg border-neutral-100 bg-neutral-50 hover:border-blue-300 hover:shadow-blue-100/50">
                        <div className="h-48 relative overflow-hidden bg-gradient-to-br from-cyan-50 to-neutral-100">
                            <div className="absolute inset-0 opacity-10 bg-gradient-to-br to-transparent from-cyan-100"></div>
                            <div className="absolute inset-0 flex items-center justify-center group-hover:text-cyan-600 transition-colors text-cyan-400">
                                <Database className="w-12 h-12" />
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-2 text-neutral-900">Migration & Configuration Projects</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                                Executed module configuration and data migration tasks with comprehensive validation plans to protect clinical workflows and maintain data quality across system transitions.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-cyan-100 text-cyan-700">Migration</span>
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-cyan-100 text-cyan-700">Validation</span>
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-cyan-100 text-cyan-700">ETL</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Projects;
