import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Code, Briefcase, BookOpen } from 'lucide-react';

const Home = () => {
    const { isLoaded } = useOutletContext();

    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <Helmet>
                <title>Belal Haidary | Radiology IT & Karisma RIS Consultant</title>
                <meta name="description" content="Belal Haidary: Expert Radiology IT Engineer and Health Tech consultant. Specializing in Karisma Radiology Information System (RIS) administration, PACS, and Healthcare IT solutions." />
                <link rel="canonical" href="https://bllhdr.com.au/" />
            </Helmet>
            <div className="max-w-4xl mx-auto text-center space-y-12">
                {/* Hero Section */}
                <div className="space-y-10 pt-10 relative overflow-visible">
                    {/* Background Gradient Blob - Moved behind image */}
                    <div className="gradient-blob -z-20"></div>

                    {/* Hero Background Blob - Grey Shape */}
                    <div className="absolute top-[20%] right-[-13%] md:right-[-18%] -translate-y-1/2 w-[240px] h-[240px] sm:w-[400px] sm:h-[400px] z-0 pointer-events-none select-none opacity-80">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-neutral-200/80">
                            <path d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.3,-41.2C83.5,-26.8,87.7,-11.7,85.6,2.4C83.5,16.5,75.1,29.6,65.3,40.6C55.5,51.6,44.3,60.5,31.8,67.6C19.3,74.7,5.5,80,-7.8,79.1C-21.1,78.2,-33.9,71.1,-45.6,62.8C-57.3,54.5,-67.9,45,-75.3,33.1C-82.7,21.2,-86.9,6.9,-84.8,-6.4C-82.7,-19.7,-74.3,-32,-63.8,-41.6C-53.3,-51.2,-40.7,-58.1,-28.3,-65.5C-15.9,-72.9,-3.7,-80.8,10.1,-82.4C23.9,-84,48.9,-79.3,45.7,-76.3Z" transform="translate(100 100)" />
                        </svg>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter mb-8 leading-[1.05] font-semibold text-neutral-900 max-w-3xl mx-auto text-left relative z-10">
                        {/* Staggered word animation structure */}
                        <div className="overflow-hidden pb-2">
                            <span className={`word-reveal inline-block ${isLoaded ? 'animate-reveal' : ''}`} style={{ animationDelay: '0.1s' }}>Optimising</span>{' '}
                            <span className={`word-reveal inline-block ${isLoaded ? 'animate-reveal' : ''}`} style={{ animationDelay: '0.2s' }}>healthcare</span>
                        </div>
                        <div className="overflow-hidden pb-2">
                            <span className={`word-reveal inline-block ${isLoaded ? 'animate-reveal' : ''}`} style={{ animationDelay: '0.3s' }}>through</span>{' '}
                            <span className={`highlight-text word-reveal inline-block ${isLoaded ? 'animate-reveal' : ''}`} style={{ animationDelay: '0.4s' }}>reliable</span>{' '}
                            <span className={`word-reveal inline-block ${isLoaded ? 'animate-reveal' : ''}`} style={{ animationDelay: '0.5s' }}>and</span>
                        </div>
                        <div className="overflow-hidden pb-2">
                            <span className={`highlight-text word-reveal inline-block ${isLoaded ? 'animate-reveal' : ''}`} style={{ animationDelay: '0.6s' }}>efficient</span>{' '}
                            <span className={`word-reveal inline-block ${isLoaded ? 'animate-reveal' : ''}`} style={{ animationDelay: '0.7s' }}>technology</span>
                        </div>
                        <div className="overflow-hidden pb-2">
                            <span className={`word-reveal inline-block ${isLoaded ? 'animate-reveal' : ''}`} style={{ animationDelay: '0.8s' }}>solutions.</span>
                        </div>
                    </h1>

                    <p className={`text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-manrope opacity-0 ${isLoaded ? 'animate-[fade-in-up_1s_ease-out_1s_forwards]' : ''}`}>
                        Bridging clinical requirements and technical implementation through RIS/PACS expertise, Healthcare Interoperability, DevOps engineering and clinical experience.
                    </p>

                    {/* Stats/Highlights - Reverted to Blue */}
                    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 opacity-0 ${isLoaded ? 'animate-[fade-in-up_1s_ease-out_1.2s_forwards]' : ''}`}>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-blue-600">8+</div>
                            <div className="text-sm uppercase tracking-wider text-neutral-500">Years Healthcare & IT Experience</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-blue-600">Radiology</div>
                            <div className="text-sm uppercase tracking-wider text-neutral-500">HEALTHCARE IT FOCUS</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-blue-600">DevOps</div>
                            <div className="text-sm uppercase tracking-wider text-neutral-500">SRE & Automation</div>
                        </div>
                    </div>

                    {/* CTA Buttons - Reverted to Blue Primary */}
                    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 ${isLoaded ? 'animate-[fade-in-up_1s_ease-out_1.4s_forwards]' : ''}`}>
                        <Link
                            to="/profile"
                            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full transition-all bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            View Profile <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full transition-all border-2 border-neutral-300 text-neutral-700 hover:border-blue-600 hover:text-blue-600 hover:scale-105"
                        >
                            <Code className="w-5 h-5" /> Personal Projects
                        </Link>
                    </div>

                    {/* Feature Cards - Reverted to Blue Icons/Hover */}
                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 opacity-0 ${isLoaded ? 'animate-[fade-in-up_1s_ease-out_1.6s_forwards]' : ''}`}>
                        <Link to="/profile" className="p-6 rounded-2xl border border-neutral-200 hover:border-blue-300 hover:shadow-lg transition-all group bg-white">
                            <Briefcase className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-lg font-bold text-neutral-900 mb-2">Professional Experience</h3>
                            <p className="text-sm text-neutral-600">DevOps Engineer and Technical Support across Karisma RIS, HL7 integration, and SQL Server management.</p>
                        </Link>

                        <Link to="/projects" className="p-6 rounded-2xl border border-neutral-200 hover:border-blue-300 hover:shadow-lg transition-all group bg-white">
                            <Code className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-lg font-bold text-neutral-900 mb-2">Technical Projects</h3>
                            <p className="text-sm text-neutral-600">Web development, automation, and personal homelab projects demonstrating technical capabilities.</p>
                        </Link>

                        <Link to="/blog" className="p-6 rounded-2xl border border-neutral-200 hover:border-blue-300 hover:shadow-lg transition-all group bg-white">
                            <BookOpen className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-lg font-bold text-neutral-900 mb-2">Blog</h3>
                            <p className="text-sm text-neutral-600">Thoughts on RIS cloud migration, AI in radiology, and healthcare IT best practices.</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
