import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
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

    return (
        <>
            <Helmet>
                <title>{post.title} | Belal Haidary</title>
                <meta name="description" content={post.summary} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.summary} />
                <meta property="og:image" content={`https://bllhdr.com.au${post.image}`} />
                <meta property="twitter:card" content="summary_large_image" />
            </Helmet>

            <div className="page-section w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                <section className="pb-20 pt-4">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-neutral-500 hover:text-blue-600 transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

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
                            <div className="flex items-center justify-between">
                                <Link
                                    to="/blog"
                                    className="text-blue-600 font-medium hover:underline"
                                >
                                    &larr; Read more articles
                                </Link>
                                <div className="flex gap-2">
                                    {/* Share buttons could go here */}
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </>
    );
};

export default BlogPost;
