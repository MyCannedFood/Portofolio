
const Projects = () => {
    const projects = [
        {
            title: "Lions Website",
            description: "Member management platform with custom admin dashboard.",
            tech: ["Laravel", "MySQL", "Tailwind"],
            link: "https://github.com/Jopras21/UAS_WebPro_LIONS",
            type: "web",
            date: "Nov 2024 - Jan 2025"
        },
        {
            title: "Cinematch",
            description: "Personalized movie recommendation Android app.",
            tech: ["Kotlin", "Firebase", "Jetpack Compose"],
            link: "https://github.com/calvinnnleo/DesainMovieReview",
            type: "mobile",
            date: "Aug 2025 - Dec 2025"
        },
        {
            title: "Task manager",
            description: "High-performance task manager in C++.",
            tech: ["C++"],
            link: "https://github.com/MyCannedFood/MyList",
            type: "system",
            date: "Jan 2025 - Jan 2025"
        },
        {
            title: "Ultimagz.com",
            description: "An independent campus media",
            tech: ["Cloudflare", "Wordpress"],
            link: "https://ultimagz.com/",
            type: "web",
            date: "June 2025 - July 2025"
        },
        {
            title: "Fokus",
            description: "a Sub domain from Ultimagz.com",
            tech: ["Typescript", "React", "Next.js"],
            link: "https://fokus.ultimagz.com/articles/sisi-muram-budaya-digital/",
            type: "web",
            date: "Sep 2025 - Dec 2025"
        },
    ];

    return (
        <section id="projects" className="py-20 px-6 md:px-20 bg-[#0a0e14] text-white">
            <div className="max-w-6xl mx-auto">
                {/* Terminal Window */}
                <div className="bg-[#0d1117] rounded-lg overflow-hidden shadow-2xl border border-emerald-500/30 mb-8">
                    {/* Terminal Header */}
                    <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-emerald-500/20">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                        <div className="ml-2 text-gray-400 text-xs font-mono">sagara@portfolio:~/projects</div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 md:p-8 font-mono text-sm">
                        {/* Command */}
                        <div className="flex mb-6">
                            <span className="text-emerald-400 mr-2">➜</span>
                            <span className="text-cyan-400 mr-2">~/projects</span>
                            <span className="text-gray-300">ls -la --color=auto</span>
                        </div>

                        {/* Directory Info */}
                        <div className="text-gray-400 mb-4">
                            total {projects.length} projects
                        </div>

                        {/* Projects List */}
                        <div className="space-y-3">
                            {projects.map((project, index) => (
                                <a
                                    key={index}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block hover:bg-emerald-500/5 p-3 rounded transition-all border border-transparent hover:border-emerald-500/30"
                                >
                                    {/* File listing line */}
                                    <div className="flex items-start gap-3 mb-2">
                                        <span className="text-emerald-400">drwxr-xr-x</span>
                                        <span className="text-yellow-400 flex-shrink-0">
                                            {project.date}
                                        </span>
                                        <span className="text-cyan-400 font-semibold group-hover:text-emerald-400 transition-colors flex-1">
                                            {project.title}/
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <div className="ml-[140px] md:ml-[160px] text-gray-400 text-xs mb-2">
                                        {project.description}
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="ml-[140px] md:ml-[160px] flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/30"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Cursor */}
                        <div className="flex mt-6">
                            <span className="text-emerald-400 mr-2">➜</span>
                            <span className="text-cyan-400 mr-2">~/projects</span>
                            <span className="cursor-blink w-2 h-5 bg-emerald-400 inline-block"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
