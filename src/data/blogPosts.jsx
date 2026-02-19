import React from 'react';
import { Cloud, Activity, Hash, ExternalLink, Briefcase } from 'lucide-react';

export const blogPosts = [
    {
        id: 5,
        slug: "transition-to-pm",
        title: "Bridging Tech and Strategy: My Transition into Product Management",
        date: "February 19, 2026",
        icon: <Briefcase className="w-6 h-6 text-blue-600" />,
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
        summary: "Reflecting on the pivot from Radiology IT to Product Management. Discussing the misconceptions of the role, the challenge of stakeholder alignment, and leveraging domain expertise to build innovative healthcare products.",
        content: (
            <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                    In January, I embarked on a journey that marks a significant pivot in my career: stepping into the role of <strong>Product Management</strong>.
                </p>
                <p>
                    To be completely honest, when I was first approached for the role, I was somewhat clueless about what a Product Manager actually was. My immediate assumption was that "Manager" implied managing people or a team. As someone who has always preferred the technical and collaborative side of work over direct people management, that prospect didn't exactly excite me.
                </p>
                <p>
                    I've since discovered that most people outside of tech (and many within it!) don't really know what a PM does. It turns out, I’m not "managing" people in the traditional hierarchical sense. Instead, I’m coordinating, collaborating, and aligning different colleagues and teams toward a shared vision. It’s about managing the <em>product's</em> success, not the people’s timesheets.
                </p>
                <p>
                    After over eight years deep in the trenches of Radiology IT—managing RIS/PACS, navigating HL7 integrations, and optimizing technical infrastructure—this transition feels both exhilarating and profoundly different.
                </p>
                <p>
                    <strong>A Different Kind of Management</strong><br />
                    Coming from a technical background, I was used to managing systems, databases, and deployments. Product management, however, is a different beast entirely. It’s less about "How do we build the pipe?" and more about "Why are we building this specific pipe in the first place, and who benefits most?"
                </p>
                <p>
                    The shift to the "management side" of things has been a steep learning curve. In these first two months, I’ve had to get accustomed to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Stakeholder Alignment:</strong> Balancing the needs of clinical teams, executive leadership, and technical developers. It’s about finding the "sweet spot" where business value meets user needs.</li>
                    <li><strong>Product Discovery:</strong> Moving beyond solving immediate technical bugs to identifying broader market opportunities.</li>
                    <li><strong>Prioritization:</strong> In technical support, you try to solve everything. In PM, you have to ruthlessly prioritize the features that move the needle most.</li>
                </ul>
                <p>
                    <strong>Leveraging the "Radiology IT" Edge</strong><br />
                    While the responsibilities are new, my primary weapon remains my 8+ years of domain expertise. Having seen exactly where clinical workflows break down—from the radiographer’s console to the radiologist’s reporting station—I can see the "invisible friction" that users often can't articulate.
                </p>
                <p>
                    My goal is to leverage this technical foundation to create a truly <strong>innovative radiology IT product</strong>. Specifically, I want to bridge the gap between the clinical reality and modern DevOps/SRE practices, bringing reliability and scalability to systems that have traditionally been "black boxes."
                </p>
                <p>
                    The first couple of months have been about listening, learning, and shifting my mindset from <em>Solution Architect</em> to <em>Product Strategist</em>. It’s a challenge I’m relishing.
                </p>
            </div>
        )
    },
    {
        id: 1,
        slug: "ris-in-the-cloud",
        title: "RIS in the Cloud: The SaaS Transformation",
        date: "November 12, 2025",
        icon: <Cloud className="w-6 h-6 text-blue-600" />,
        image: "/images/blog/ris-cloud.png",
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
        slug: "ai-in-radiology",
        title: "AI in Radiology: Transforming IT Workflows",
        date: "November 28, 2025",
        icon: <Activity className="w-6 h-6 text-blue-600" />,
        image: "/images/blog/ai-radiology.png",
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
        slug: "from-pipes-to-apis",
        title: "From Pipes to APIs: The FHIR Revolution",
        date: "December 5, 2025",
        icon: <Hash className="w-6 h-6 text-blue-600" />,
        image: "/images/blog/fhir-api.png",
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
        slug: "breaking-into-devops",
        title: "Breaking into DevOps: My Linux & Cloud Learning Journey",
        date: "December 15, 2025",
        icon: <Hash className="w-6 h-6 text-blue-600" />,
        image: "/images/blog/devops-linux.png",
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
