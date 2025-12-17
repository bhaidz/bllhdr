import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
    return (
        <div className="page-section w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Helmet>
                <title>Radiology IT & Health Tech Blog | Belal Haidary</title>
                <meta name="description" content="Insights on Radiology Information Systems (RIS), Cloud RIS, AI in Radiology, and the future of Healthcare IT." />
                <link rel="canonical" href="https://bllhdr.com.au/blog" />
            </Helmet>
            <section className="pb-20 pt-4">
                <h1 className="text-3xl sm:text-4xl tracking-tight mb-6 font-medium text-black">Blog</h1>
                <p className="text-lg text-neutral-500 max-w-xl leading-relaxed mb-12">
                    Thoughts on RIS systems, healthcare IT, emerging technologies—and documenting my personal journey through the evolving world of radiology and technology.
                </p>

                <div className="grid gap-8 mb-16">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.slug}`}
                            className="group block rounded-2xl border border-neutral-100 bg-white overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row h-full">
                                {/* Image Thumbnail (Desktop: Left, Mobile: Top) */}
                                <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 flex flex-col justify-between w-full md:w-2/3">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                                                {post.icon}
                                            </div>
                                            <span className="text-sm text-neutral-500 font-medium">{post.date}</span>
                                        </div>

                                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-800 mb-3 group-hover:text-blue-600 transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="text-neutral-500 leading-relaxed mb-4 line-clamp-2">
                                            {post.summary}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 text-blue-600 font-medium text-sm mt-auto">
                                        Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* AI Disclaimer */}
                <div className="text-center pt-8 border-t border-neutral-100">
                    <p className="text-xs text-neutral-400 italic">
                        Content on this page has been generated with AI assistance.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Blog;
