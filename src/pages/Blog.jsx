import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, BookOpen, Hash, Cloud, Activity } from 'lucide-react';

const Blog = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const blogPosts = [
        {
            id: 1,
            title: "RIS in the Cloud: The SaaS Transformation",
            icon: <Cloud className="w-6 h-6 text-blue-600" />,
            summary: "Exploring the shift from on-premises RIS solutions to cloud-based SaaS platforms. Benefits of scalability, reduced infrastructure burden, and challenges around data sovereignty in Australian healthcare environments.",
            content: (
                <div className="space-y-4 text-neutral-700 leading-relaxed">
                    <p>
                        The Radiology Information System (RIS) landscape is undergoing a seismic shift. For decades, the standard was heavy, on-premises servers sitting in a hospital basement, requiring dedicated cooling, power, and a team of engineers to maintain. Updates were painful, often involving downtime and significant risk.
                    </p>
                    <p>
                        <strong>The SaaS Paradigm Shift</strong><br />
                        Software as a Service (SaaS) models are changing the game. By moving RIS to the cloud (public or private), healthcare providers unlock:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Scalability:</strong> Spin up new instances or add storage instantly as imaging volumes grow.</li>
                        <li><strong>Rapid Updates:</strong> CI/CD pipelines allow vendors to push bug fixes and features weekly, not yearly.</li>
                        <li><strong>Accessibility:</strong> Secure access from anywhere, enabling teleradiology and remote reporting workflows.</li>
                    </ul>
                    <p>
                        <strong>Challenges in Australia</strong><br />
                        However, it's not without hurdles. Data sovereignty is paramount. Patient data (PHI) must often remain within Australian borders to comply with privacy laws. Latency is another critical factor; heavy DICOM images need fat pipes to travel from a modality to a cloud archive and back to a radiologist's workstation instantly. Hybrid models—cloud RIS with local edge caching for PACS—are emerging as the pragmatic solution.
                    </p>
                    <div className="mt-6 pt-4 border-t border-neutral-200">
                        <h4 className="text-sm font-bold text-neutral-900 mb-2">References & Further Reading</h4>
                        <ul className="text-sm text-blue-600 space-y-1">
                            <li><a href="https://www.digitalhealth.gov.au/healthcare-providers/digital-health-technologies/cloud-solutions" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">ADHA Cloud Solutions Guide <ExternalLink className="w-3 h-3" /></a></li>
                            <li><a href="https://aws.amazon.com/healthimaging/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">AWS HealthImaging <ExternalLink className="w-3 h-3" /></a></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: "AI in Radiology: Transforming IT Workflows",
            icon: <Activity className="w-6 h-6 text-blue-600" />,
            summary: "How artificial intelligence integration affects RIS/PACS infrastructure, workflow automation opportunities, and the evolving role of radiology IT engineers in managing AI-enhanced diagnostic systems.",
            content: (
                <div className="space-y-4 text-neutral-700 leading-relaxed">
                    <p>
                        Artificial Intelligence is no longer a buzzword in radiology; it's a daily operational reality. But beyond the diagnostic algorithms detecting fractures or nodules, AI is revolutionizing the <em>IT infrastructure</em> and <em>workflow orchestration</em> layers.
                    </p>
                    <p>
                        <strong>Infrastructure Impact</strong><br />
                        Integrating AI means managing a new flow of data. Images must be routed not just to the PACS archive, but to an AI inference server (or cloud endpoint). The results—often secondary capture images or structured reports—must be merged back into the patient record seamlessly. This requires robust orchestration engines and careful monitoring of "AI traffic" to ensure it doesn't bottleneck clinical reporting.
                    </p>
                    <p>
                        <strong>The Engineer's Role</strong><br />
                        For RIS/PACS engineers, the job description is expanding. We are now responsible for:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Validation:</strong> Ensuring the AI algorithm version matches the clinical validation.</li>
                        <li><strong>Routing Logic:</strong> Configuring rules to send only relevant studies (e.g., Chest CTs) to specific AI models.</li>
                        <li><strong>Failover:</strong> What happens when the AI service goes down? The clinical workflow must continue uninterrupted.</li>
                    </ul>
                    <div className="mt-6 pt-4 border-t border-neutral-200">
                        <h4 className="text-sm font-bold text-neutral-900 mb-2">References & Further Reading</h4>
                        <ul className="text-sm text-blue-600 space-y-1">
                            <li><a href="https://www.rsna.org/artificial-intelligence" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">RSNA AI Resources <ExternalLink className="w-3 h-3" /></a></li>
                            <li><a href="https://siim.org/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">Society for Imaging Informatics in Medicine (SIIM) <ExternalLink className="w-3 h-3" /></a></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            title: "From Pipes to APIs: The FHIR Revolution",
            icon: <Hash className="w-6 h-6 text-blue-600" />,
            summary: "The evolution from HL7 v2 messaging to FHIR (Fast Healthcare Interoperability Resources). How modern web standards are finally enabling a true 'App Economy' in healthcare IT.",
            content: (
                <div className="space-y-4 text-neutral-700 leading-relaxed">
                    <p>
                        For over 30 years, <strong>HL7 v2</strong> has been the workhorse of healthcare interoperability. It's a text-based, pipe-delimited standard that is incredibly reliable for event-driven workflows (e.g., "Patient Admitted" {'->'} Send ADT^A01 message). However, it shows its age in a modern, connected world. It requires point-to-point VPNs, interface engines, and rigid specifications.
                    </p>
                    <p>
                        <strong>Enter FHIR (Fast Healthcare Interoperability Resources)</strong><br />
                        FHIR represents a paradigm shift. Instead of pushing text messages down a pipe, FHIR treats healthcare data as <em>resources</em> (Patient, Observation, Encounter) that can be accessed via standard <strong>RESTful APIs</strong> using <strong>JSON</strong> or XML.
                    </p>
                    <p>
                        <strong>Why it Matters:</strong>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Web Standards:</strong> Developers can use the same tools they use for web apps (HTTP, OAuth 2.0) to build healthcare apps.</li>
                        <li><strong>Granular Access:</strong> Instead of receiving a massive HL7 dump, an app can request just the patient's latest blood pressure.</li>
                        <li><strong>SMART on FHIR:</strong> This platform enables an "App Store" model for Electronic Health Records (EHRs), allowing third-party innovators to plug secure, integrated apps directly into the clinician's workflow.</li>
                    </ul>
                    <p>
                        In the radiology world, this means we can finally move beyond the limitations of DICOM and HL7 v2 for things like patient engagement apps, clinical decision support, and seamless integration with hospital EMRs.
                    </p>
                    <div className="mt-6 pt-4 border-t border-neutral-200">
                        <h4 className="text-sm font-bold text-neutral-900 mb-2">References & Further Reading</h4>
                        <ul className="text-sm text-blue-600 space-y-1">
                            <li><a href="https://hl7.org/fhir/overview.html" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">HL7 FHIR Overview <ExternalLink className="w-3 h-3" /></a></li>
                            <li><a href="https://docs.smarthealthit.org/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">SMART on FHIR Documentation <ExternalLink className="w-3 h-3" /></a></li>
                            <li><a href="https://fire.ly/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">Firely (FHIR Tools) <ExternalLink className="w-3 h-3" /></a></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            title: "Breaking into DevOps: My Linux & Cloud Learning Journey",
            icon: <Hash className="w-6 h-6 text-blue-600" />,
            summary: "Documenting my transition from healthcare IT to modern DevOps practices. From installing Linux on a laptop to conquering OverTheWire Bandit challenges—upskilling for the future of technology infrastructure.",
            content: (
                <div className="space-y-4 text-neutral-700 leading-relaxed">
                    <p>
                        Working in radiology IT has taught me that technology moves fast, and standing still means falling behind. While I've built solid expertise in healthcare systems like RIS and PACS, I recognized a gap: my knowledge of modern DevOps practices, cloud infrastructure, and Linux administration was limited.
                    </p>
                    <p>
                        <strong>The Linux Plunge</strong><br />
                        I started by wiping an old laptop and installing Ubuntu, a parting gift and suggestion from a valued colleague. No safety nets. Just me, a terminal, and the man pages. The first few days were humbling—simple tasks like installing software, navigating directories, and managing permissions felt foreign. But persistence pays off.
                    </p>
                    <p>
                        I worked through:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Basic Shell Commands:</strong> `ls`, `cd`, `grep`, `find`, `awk`, `sed`—tools that become second nature.</li>
                        <li><strong>File Permissions:</strong> Understanding `chmod`, `chown`, and the security implications of misconfigured access.</li>
                        <li><strong>Process Management:</strong> Using `ps`, `top`, `kill`, and `systemctl` to control services.</li>
                        <li><strong>Networking Basics:</strong> Inspecting connections with `netstat`, `ss`, and `ip`.</li>
                    </ul>
                    <p>
                        <strong>OverTheWire Bandit: A Baptism by Fire</strong><br />
                        To test my skills in a structured way, I dove into <a href="https://overthewire.org/wargames/bandit/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OverTheWire's Bandit wargame</a>. It's a series of challenges where each level teaches a new concept by forcing you to solve puzzles using Linux commands.
                    </p>
                    <p>
                        The game starts simple—connecting via SSH, reading files—but quickly escalates into:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Using `grep` to filter large datasets.</li>
                        <li>Exploiting symbolic links and hidden files.</li>
                        <li>Decoding strings with `base64`, `tr`, and `xxd`.</li>
                        <li>Understanding cron jobs and environment variables.</li>
                    </ul>
                    <p>
                        By later levels, I was chaining together complex pipelines and understanding how each command interacts with the filesystem. The "aha!" moments were addictive.
                    </p>
                    <p>
                        <strong>Why This Matters for Healthcare IT</strong><br />
                        Modern healthcare systems are increasingly cloud-based. RIS and PACS vendors are moving to Kubernetes, Docker, and CI/CD pipelines. Knowing how to troubleshoot a container, parse logs with `jq`, or automate deployments with Bash scripts is no longer optional—it's essential.
                    </p>
                    <p>
                        This learning journey isn't just about career progression. It's about staying relevant, solving problems faster, and contributing to the evolution of healthcare technology infrastructure.
                    </p>
                </div>
            )
        }
    ];

    return (
        <div className="page-section w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section className="pb-20 pt-4">
                <h1 className="text-3xl sm:text-4xl tracking-tight mb-6 font-medium text-black">Blog</h1>
                <p className="text-lg text-neutral-500 max-w-xl leading-relaxed mb-12">
                    Thoughts on RIS systems, healthcare IT, emerging technologies—and documenting my personal journey through the evolving world of radiology and technology.
                </p>

                <div className="grid gap-6 mb-16">
                    {blogPosts.map((post) => {
                        const isExpanded = expandedId === post.id;
                        return (
                            <div
                                key={post.id}
                                onClick={() => toggleExpand(post.id)}
                                className={`group block rounded-2xl border transition-all duration-300 cursor-pointer bg-white overflow-hidden
                                    ${isExpanded
                                        ? 'border-blue-200 shadow-xl ring-1 ring-blue-100'
                                        : 'border-neutral-100 hover:border-blue-300 hover:shadow-lg'
                                    }`}
                            >
                                <div className="p-8">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg transition-colors ${isExpanded ? 'bg-blue-50' : 'bg-neutral-50 group-hover:bg-blue-50'}`}>
                                                {post.icon}
                                            </div>
                                            <h2 className={`text-xl font-bold transition-colors ${isExpanded ? 'text-blue-600' : 'text-neutral-800 group-hover:text-blue-600'}`}>
                                                {post.title}
                                            </h2>
                                        </div>
                                        <div className="text-neutral-400">
                                            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                        </div>
                                    </div>

                                    <div className={`text-sm text-neutral-500 leading-relaxed transition-all duration-300 ${isExpanded ? 'mb-6' : ''}`}>
                                        {post.summary}
                                    </div>

                                    {/* Expanded Content */}
                                    <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden">
                                            <div className="pt-4 border-t border-neutral-100">
                                                {post.content}
                                            </div>
                                        </div>
                                    </div>

                                    {!isExpanded && (
                                        <div className="mt-4 text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                            Read Article <ArrowRightIcon className="w-4 h-4" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
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

// Helper icon component since we're not importing ArrowRight from lucide-react in the main block to avoid clutter
const ArrowRightIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

export default Blog;
