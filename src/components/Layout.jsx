import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Linkedin, Mail, Database, Activity, Server } from 'lucide-react';

const Layout = () => {
    const location = useLocation();
    const [isLoaded, setIsLoaded] = useState(false);

    // Scroll to top on route change and update title
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

        // Dynamic Page Titles
        const path = location.pathname;
        const baseTitle = "Belal Haidary";

        if (path === '/') {
            document.title = `${baseTitle} | Healthcare & Radiology IT | Karisma RIS Administration`;
        } else if (path === '/profile') {
            document.title = `${baseTitle} | Profile`;
        } else if (path === '/profile/achievements') {
            document.title = `${baseTitle} | Work Achievements`;
        } else if (path === '/projects') {
            document.title = `${baseTitle} | Projects`;
        } else if (path === '/blog') {
            document.title = `${baseTitle} | Blog`;
        } else if (path === '/contact') {
            document.title = `${baseTitle} | Contact`;
        } else {
            document.title = baseTitle;
        }
    }, [location.pathname]);

    useEffect(() => {
        // Intro Animation Sequence
        const overlay = document.getElementById('intro-overlay');
        const nav = document.getElementById('navbar');
        const sideMenu = document.getElementById('side-menu');
        const main = document.getElementById('main-content');

        // Only run animation if overlay exists and hasn't played
        if (overlay && !sessionStorage.getItem('introPlayed')) {
            // Extended fade out delay to 5.5 seconds
            setTimeout(() => {
                overlay.classList.add('opacity-0', 'pointer-events-none');
                document.body.classList.remove('no-scroll');

                if (nav) nav.classList.remove('opacity-0');
                if (sideMenu) sideMenu.classList.remove('opacity-0');
                if (main) main.classList.remove('opacity-0');

                setIsLoaded(true);

                // Remove overlay from DOM flow after fade
                setTimeout(() => {
                    overlay.style.display = 'none';
                    sessionStorage.setItem('introPlayed', 'true');
                }, 1000);

            }, 5000); // Reduced to 5.0 seconds
        } else {
            // If animation already played, ensure UI is visible
            if (overlay) overlay.style.display = 'none';
            document.body.classList.remove('no-scroll');
            if (nav) nav.classList.remove('opacity-0');
            if (sideMenu) sideMenu.classList.remove('opacity-0');
            if (main) main.classList.remove('opacity-0');
            setIsLoaded(true);
        }
    }, []);

    return (
        <div className="bg-neutral-50 text-neutral-800 min-h-screen selection:bg-blue-100 selection:text-blue-900 transition-colors duration-300">
            {/* Intro Animation Overlay */}
            <div id="intro-overlay" className="fixed inset-0 z-[60] flex items-center justify-center transition-opacity duration-1000 bg-neutral-50">
                <div className="flex flex-col items-center justify-center opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards]">
                    {/* Logo Image - Centered */}
                    <div className="mb-8 h-24 md:h-32 flex items-center justify-center">
                        <img
                            src="/logo.png"
                            alt="bllhdr"
                            className="h-full w-auto object-contain opacity-90"
                        />
                    </div>

                    {/* Headshot - Centered & Colored */}
                    <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden shadow-2xl border-4 ring-1 border-white ring-neutral-100">
                        <img src="/headshot.jpg" alt="Belal 'Bob' Haidary - Radiology IT Engineer" className="w-full h-full object-cover" />
                    </div>

                    {/* Name - Skinnier Text */}
                    <h1 className="text-2xl md:text-3xl font-light text-neutral-900 mb-6 tracking-tight">Belal Haidary</h1>

                    <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-xs md:text-sm text-neutral-500 font-medium uppercase tracking-wider px-6 text-center max-w-2xl">
                        <span>Healthcare & Radiology IT</span>
                        <span className="text-neutral-300">|</span>
                        <span>Radiographer</span>
                        <span className="text-neutral-300">|</span>
                        <span>Tech Enthusiast</span>
                        <span className="text-neutral-300">|</span>
                        <span>Curious Mind</span>
                    </div>
                    <div className="mt-10 w-48 h-0.5 rounded-full overflow-hidden bg-neutral-200">
                        <div className="h-full animate-[loading-progress_6.5s_ease-in-out_forwards] bg-neutral-900"></div>
                    </div>
                </div>
            </div>

            {/* Top Navigation (Logo Only - Centered) */}
            <nav className="fixed top-0 left-0 right-0 z-40 h-24 flex items-center justify-center pointer-events-none transition-opacity duration-1000 opacity-0 bg-neutral-50/80 backdrop-blur-sm" id="navbar">
                <NavLink to="/" className="pointer-events-auto group flex items-center gap-2">
                    <img src="/logo.png" alt="bllhdr - Belal Haidary Logo" className="h-20 transition-transform duration-300 group-hover:scale-105" />
                </NavLink>
            </nav>

            {/* Floating Right Side Menu */}
            <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-6 pointer-events-auto transition-opacity duration-1000 opacity-0" id="side-menu">
                <NavLink to="/" className={({ isActive }) => `nav-item group flex items-center gap-3 ${isActive ? 'active' : ''}`}>
                    <span className="text-xs font-semibold uppercase tracking-wider transition-all duration-300 group-hover:text-blue-600 text-neutral-700">Home</span>
                    <div className="h-[2px] w-3 transition-all duration-300 group-hover:bg-blue-500 bg-neutral-400"></div>
                </NavLink>

                {/* Profile with submenu */}
                <div className="group/profile flex flex-col items-end gap-3">
                    <NavLink to="/profile" className={({ isActive }) => `nav-item flex items-center gap-3 ${isActive || location.pathname.startsWith('/profile') ? 'active' : ''}`}>
                        <span className="text-xs font-semibold uppercase tracking-wider transition-all duration-300 group-hover/profile:text-blue-600 text-neutral-700">Profile</span>
                        <div className="h-[2px] w-3 transition-all duration-300 group-hover/profile:bg-blue-500 bg-neutral-400"></div>
                    </NavLink>

                    {/* Submenu - shows on hover or when on subpage */}
                    <div className={`flex flex-col items-end gap-3 overflow-hidden transition-all duration-500 ease-in-out ${location.pathname.startsWith('/profile') || location.pathname.includes('/achievements') ? 'max-h-20 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0 group-hover/profile:max-h-20 group-hover/profile:opacity-100 group-hover/profile:mt-3'}`}>
                        <NavLink to="/profile/achievements" className={({ isActive }) => `nav-item flex items-center gap-3 ${isActive ? 'active' : ''}`}>
                            <span className="text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 hover:text-blue-600 text-neutral-500">Work Achievements</span>
                            <div className="h-[2px] w-2 transition-all duration-300 hover:bg-blue-500 bg-neutral-300"></div>
                        </NavLink>
                    </div>
                </div>

                <NavLink to="/projects" className={({ isActive }) => `nav-item group flex items-center gap-3 ${isActive ? 'active' : ''}`}>
                    <span className="text-xs font-semibold uppercase tracking-wider transition-all duration-300 group-hover:text-blue-600 text-neutral-700">Projects</span>
                    <div className="h-[2px] w-3 transition-all duration-300 group-hover:bg-blue-500 bg-neutral-400"></div>
                </NavLink>
                <NavLink to="/blog" className={({ isActive }) => `nav-item group flex items-center gap-3 ${isActive ? 'active' : ''}`}>
                    <span className="text-xs font-semibold uppercase tracking-wider transition-all duration-300 group-hover:text-blue-600 text-neutral-700">Blog</span>
                    <div className="h-[2px] w-3 transition-all duration-300 group-hover:bg-blue-500 bg-neutral-400"></div>
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => `nav-item group flex items-center gap-3 ${isActive ? 'active' : ''}`}>
                    <span className="text-xs font-semibold uppercase tracking-wider transition-all duration-300 group-hover:text-blue-600 text-neutral-700">Contact</span>
                    <div className="h-[2px] w-3 transition-all duration-300 group-hover:bg-blue-500 bg-neutral-400"></div>
                </NavLink>
            </aside>

            {/* Main Content Layout */}
            <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 transition-opacity duration-1000 opacity-0" id="main-content">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24">

                    {/* LEFT COLUMN (Profile Info) - Only on Profile page */}
                    {location.pathname === '/profile' && (
                        <div className="lg:col-span-3 space-y-12">

                            {/* Profile Header */}
                            <div className="space-y-5">
                                {/* Headshot */}
                                <div className="w-32 h-32 rounded-2xl overflow-visible relative group">
                                    <img src="/headshot.jpg" alt="Belal 'Bob' Haidary - Radiology IT Engineer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out rounded-2xl group-hover:scale-[2.34] origin-top-left" />
                                </div>

                                <div className="">
                                    <h2 className="text-lg font-bold text-neutral-900">Belal 'Bob' Haidary</h2>
                                    <p className="text-sm text-neutral-500 font-medium mt-1">Radiology IT Engineer & Radiographer</p>
                                </div>

                                {/* Contact/Social Links */}
                                <div className="flex gap-2 pt-1">
                                    <a href="https://au.linkedin.com/in/belal-haidary-031787269" target="_blank" className="p-2 transition-all border rounded-lg text-neutral-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 border-neutral-200 bg-white/50">
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                    <a href="mailto:belal@bllhdr.com.au" className="p-2 transition-all border rounded-lg text-neutral-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 border-neutral-200 bg-white/50">
                                        <Mail className="w-4 h-4" />
                                    </a>
                                    <div className="p-2 border rounded-lg text-neutral-500 cursor-default border-neutral-200 bg-white/50">
                                        <span className="text-xs font-semibold tabular-nums">Melbourne, AU</span>
                                    </div>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="">
                                <h3 className="text-xs font-bold uppercase tracking-wider mb-6 text-neutral-400">Education & Certifications</h3>
                                <div className="space-y-6 border-l ml-1.5 pl-4 border-neutral-200">
                                    <div className="relative group cursor-pointer transition-all duration-300 hover:translate-x-1">
                                        <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full ring-4 bg-neutral-900 ring-neutral-50 transition-all duration-300 group-hover:bg-blue-500 group-hover:ring-blue-100"></div>
                                        <div className="text-sm font-semibold text-neutral-800 transition-colors duration-300 group-hover:text-blue-600">Charles Sturt University</div>
                                        <div className="text-xs text-neutral-500 mb-1 transition-colors duration-300 group-hover:text-neutral-700">Bachelor of Medical Radiation Science</div>
                                        <div className="text-[10px] tabular-nums text-neutral-400 transition-colors duration-300 group-hover:text-neutral-600">2019</div>
                                    </div>
                                    <div className="relative group cursor-pointer transition-all duration-300 hover:translate-x-1">
                                        <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full ring-4 bg-neutral-200 ring-neutral-50 transition-all duration-300 group-hover:bg-blue-500 group-hover:ring-blue-100"></div>
                                        <div className="text-sm font-semibold text-neutral-800 transition-colors duration-300 group-hover:text-blue-600">Oracle Cloud Infrastructure</div>
                                        <div className="text-xs text-neutral-500 mb-1 transition-colors duration-300 group-hover:text-neutral-700">Certified Observability Professional</div>
                                        <div className="text-[10px] tabular-nums text-neutral-400 transition-colors duration-300 group-hover:text-neutral-600">2025</div>
                                    </div>
                                    <div className="relative group cursor-pointer transition-all duration-300 hover:translate-x-1">
                                        <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full ring-4 bg-neutral-200 ring-neutral-50 transition-all duration-300 group-hover:bg-blue-500 group-hover:ring-blue-100"></div>
                                        <div className="text-sm font-semibold text-neutral-800 transition-colors duration-300 group-hover:text-blue-600">Oracle Certified</div>
                                        <div className="text-xs text-neutral-500 mb-1 transition-colors duration-300 group-hover:text-neutral-700">Foundations Associate</div>
                                        <div className="text-[10px] tabular-nums text-neutral-400 transition-colors duration-300 group-hover:text-neutral-600">2025</div>
                                    </div>
                                </div>
                            </div>

                            {/* Expertise */}
                            <div className="">
                                <h3 className="text-xs font-bold uppercase tracking-wider mb-6 text-neutral-400">Technical Skills</h3>
                                <div className="space-y-2.5">
                                    <div className="flex items-center gap-3 p-2.5 rounded-lg border bg-neutral-100/30 border-neutral-100/80 transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 hover:border-blue-200 cursor-pointer group">
                                        <div className="text-neutral-600 transition-colors duration-300 group-hover:text-blue-600"><Activity className="w-4 h-4" /></div>
                                        <div>
                                            <div className="text-xs font-semibold text-neutral-800 transition-colors duration-300 group-hover:text-blue-600">Karisma RIS</div>
                                            <div className="text-[10px] text-neutral-500 transition-colors duration-300 group-hover:text-neutral-700">Administration & Config</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-2.5 rounded-lg border bg-neutral-100/30 border-neutral-100/80 transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 hover:border-blue-200 cursor-pointer group">
                                        <div className="text-neutral-600 transition-colors duration-300 group-hover:text-blue-600"><Database className="w-4 h-4" /></div>
                                        <div>
                                            <div className="text-xs font-semibold text-neutral-800 transition-colors duration-300 group-hover:text-blue-600">SQL Server</div>
                                            <div className="text-[10px] text-neutral-500 transition-colors duration-300 group-hover:text-neutral-700">T-SQL, SSMS, Performance</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-2.5 rounded-lg border bg-neutral-100/30 border-neutral-100/80 transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 hover:border-blue-200 cursor-pointer group">
                                        <div className="text-neutral-600 transition-colors duration-300 group-hover:text-blue-600"><Server className="w-4 h-4" /></div>
                                        <div>
                                            <div className="text-xs font-semibold text-neutral-800 transition-colors duration-300 group-hover:text-blue-600">HL7 & Integration</div>
                                            <div className="text-[10px] text-neutral-500 transition-colors duration-300 group-hover:text-neutral-700">Mirth Connect, API, HL7C</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-2.5 rounded-lg border bg-neutral-100/30 border-neutral-100/80 transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-50 hover:border-blue-200 cursor-pointer group">
                                        <div className="text-neutral-600 transition-colors duration-300 group-hover:text-blue-600"><Server className="w-4 h-4" /></div>
                                        <div>
                                            <div className="text-xs font-semibold text-neutral-800 transition-colors duration-300 group-hover:text-blue-600">DevOps & SRE</div>
                                            <div className="text-[10px] text-neutral-500 transition-colors duration-300 group-hover:text-neutral-700">Observability, Grafana, SLOs</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}

                    {/* RIGHT COLUMN (Dynamic Content) */}
                    <div className={location.pathname === '/profile' ? 'lg:col-span-9' : 'lg:col-span-12'}>
                        <Outlet context={{ isLoaded }} />

                        <footer className="w-full mt-20 py-8 border-t text-center sm:text-left border-neutral-100">
                            <p className="text-xs text-neutral-400">
                                © 2025 Belal Haidary. Melbourne, Australia.
                            </p>
                        </footer>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Layout;
