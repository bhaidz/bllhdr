import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, Linkedin, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        if (!post) {
            navigate('/blog');
        }
    }, [post, navigate]);

    if (!post) return null;

    const shareUrl = `https://bllhdr.com.au/blog/${post.slug}`;
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

    return (
        <main>
            <Helmet>
                <title>{post.title} | Belal Haidary</title>
                <meta name="description" content={post.summary} />
                <link rel="canonical" href={shareUrl} />

                {/* Open Graph */}
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.summary} />
                <meta property="og:image" content={`https://bllhdr.com.au${post.image}`} />
                <meta property="og:type" content="article" />
                <meta property="article:published_time" content={post.date} />
                <meta property="article:author" content="Belal Haidary" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={post.title} />
                <meta property="twitter:description" content={post.summary} />
                <meta property="twitter:image" content={`https://bllhdr.com.au${post.image}`} />
            </Helmet>

            <div className="page-section w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                <section className="pb-20 pt-4">
                    <div className="flex justify-between items-center mb-8">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-neutral-500 hover:text-blue-600 transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </Link>

                        <a
                            href={linkedInShareUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white rounded-lg hover:bg-[#006097] transition-colors text-sm font-medium shadow-sm"
                            title="Share on LinkedIn"
                        >
                            <Linkedin className="w-4 h-4" />
                            Share
                        </a>
                    </div>

                    <article className="max-w-4xl mx-auto">
                        {/* Hero Image */}
                        <div className="rounded-2xl overflow-hidden mb-8 shadow-lg border border-neutral-100">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-[300px] sm:h-[400px] object-cover"
                            />
                        </div>

                        {/* Header */}
                        <header className="mb-10">
                            <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {post.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    5 min read
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6">
                                {post.title}
                            </h1>
                            <p className="text-xl text-neutral-600 leading-relaxed border-l-4 border-blue-500 pl-6">
                                {post.summary}
                            </p>
                        </header>

                        {/* Content */}
                        <div className="prose prose-lg prose-neutral max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
                            {post.content}
                        </div>

                        {/* Footer */}
                        <div className="mt-16 pt-8 border-t border-neutral-200">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                <Link
                                    to="/blog"
                                    className="text-blue-600 font-medium hover:underline"
                                >
                                    &larr; Read more articles
                                </Link>

                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium text-neutral-500 flex items-center gap-2">
                                        <Share2 className="w-4 h-4" /> Share this post:
                                    </span>
                                    <a
                                        href={linkedInShareUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-full hover:bg-[#006097] transition-all hover:scale-105 shadow-md font-semibold"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                        Share on LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </main>
    );
};

export default BlogPost;
