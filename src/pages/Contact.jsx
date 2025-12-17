import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
import ChatBot from '../components/ChatBot';

const Contact = () => {
    // Force scroll to top on mobile to prevent auto-scroll to chatbot
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <div className="page-section w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Helmet>
                <title>Contact Belal Haidary | Radiology IT Consultant</title>
                <meta name="description" content="Connect with Belal Haidary for Karisma RIS support, Radiology IT consulting, and Health Tech innovation strategies." />
                <link rel="canonical" href="https://bllhdr.com.au/contact" />
            </Helmet>
            <section className="pb-8 scroll-mt-24">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left Column: Headlines & Copy & Direct Contact */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl sm:text-4xl tracking-tight mb-3 font-medium text-black">Contact</h1>
                            <p className="text-lg text-neutral-500 max-w-xl leading-relaxed mb-6">
                                Let's discuss how we can optimize your healthcare IT and technology workflow needs.
                            </p>
                        </div>

                        <div className="prose prose-neutral">
                            <h2 className="text-xl font-bold text-neutral-900 mb-3">How can I help?</h2>
                            <p className="text-neutral-600 leading-relaxed mb-3 text-sm">
                                Does your department or clinic require specialized <strong>IT consulting</strong>?
                                Are you seeking an expert in <strong>Karisma RIS administration</strong> and integration?
                                Or perhaps you just want to chat <strong>healthcare IT innovation and AI</strong>?
                            </p>
                            <p className="text-neutral-600 leading-relaxed text-sm">
                                Whether you need assistance with a full system install or RIS migration, a custom integration, or ongoing support, I'm here to ensure your technology serves your organisation and patients effectively.
                            </p>
                        </div>

                        <div className="pt-2 flex flex-wrap gap-3">
                            <a
                                href="mailto:belal@bllhdr.com.au"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                            >
                                <Mail className="w-5 h-5" />
                                Email Me Directly
                            </a>
                            <a
                                href="https://au.linkedin.com/in/belal-haidary-031787269"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                            >
                                <MessageSquare className="w-5 h-5" />
                                Message on LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Chat Bot */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-neutral-100 rounded-3xl opacity-50 blur-xl"></div>
                        <div className="relative">
                            <ChatBot />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
