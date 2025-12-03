import React from 'react';
import { Globe, Code2, Layout } from 'lucide-react';

const Projects = () => {
    return (
        <div className="page-section w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section className="pb-20 pt-4">
                <h1 className="text-3xl sm:text-4xl tracking-tight mb-6 font-medium text-black">Personal Projects</h1>
                <p className="text-lg text-neutral-500 max-w-xl leading-relaxed mb-12">
                    Side projects and personal development work demonstrating web development and technical skills.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Capital Auto Recyclers Website */}
                    <div className="group rounded-2xl border overflow-hidden transition-all hover:shadow-lg border-neutral-100 bg-neutral-50 hover:border-blue-300 hover:shadow-blue-100/50">
                        <div className="h-48 relative overflow-hidden bg-gradient-to-br from-green-50 to-neutral-100">
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
                            <div className="absolute inset-0 flex items-center justify-center group-hover:text-green-600 transition-colors text-green-400">
                                <Globe className="w-12 h-12" />
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-2 text-neutral-900">Capital Auto Recyclers Website</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                                Designed and built WordPress website with custom SEO strategy. Achieved first-page Google ranking for "Canberra used car parts", significantly increasing inbound leads and online visibility.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-green-100 text-green-700">WordPress</span>
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-green-100 text-green-700">SEO</span>
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-green-100 text-green-700">Marketing</span>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Website */}
                    <div className="group rounded-2xl border overflow-hidden transition-all hover:shadow-lg border-neutral-100 bg-neutral-50 hover:border-blue-300 hover:shadow-blue-100/50">
                        <div className="h-48 relative overflow-hidden bg-gradient-to-br from-blue-50 to-neutral-100">
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, #3b82f6 25%, transparent 25%, transparent 75%, #3b82f6 75%, #3b82f6), linear-gradient(45deg, #3b82f6 25%, transparent 25%, transparent 75%, #3b82f6 75%, #3b82f6)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>
                            <div className="absolute inset-0 flex items-center justify-center group-hover:text-blue-600 transition-colors text-blue-400">
                                <Code2 className="w-12 h-12" />
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-2 text-neutral-900">This Portfolio Website</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                                Modern React portfolio built with Vite featuring custom animations, PDF resume viewer, and responsive design. Showcases professional experience and technical capabilities with clean UI/UX.
                            </p>
                            <div className="flex gap-2 flex-wrap mb-4">
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-blue-100 text-blue-700">React</span>
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-blue-100 text-blue-700">Vite</span>
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-blue-100 text-blue-700">Tailwind CSS</span>
                            </div>
                            <a
                                href="https://github.com/bhaidz/bllhdr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                            >
                                <Code2 className="w-4 h-4" />
                                View on GitHub
                            </a>
                        </div>
                    </div>

                    {/* Homelab Infrastructure */}
                    <div className="group rounded-2xl border overflow-hidden transition-all hover:shadow-lg border-neutral-100 bg-neutral-50 hover:border-blue-300 hover:shadow-blue-100/50">
                        <div className="h-48 relative overflow-hidden bg-gradient-to-br from-purple-50 to-neutral-100">
                            <div className="absolute inset-0 opacity-10 bg-gradient-to-br to-transparent from-purple-100"></div>
                            <div className="absolute inset-0 flex items-center justify-center group-hover:text-purple-600 transition-colors text-purple-400">
                                <Layout className="w-12 h-12" />
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-2 text-neutral-900">Homelab Infrastructure</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                                Self-hosted environment running on Proxmox VE with Docker containers for network monitoring, automation scripts, and personal cloud storage. Hands-on learning platform for DevOps technologies.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-purple-100 text-purple-700">Proxmox</span>
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-purple-100 text-purple-700">Docker</span>
                                <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded bg-purple-100 text-purple-700">Linux</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Projects;
