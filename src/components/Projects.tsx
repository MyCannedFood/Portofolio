
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
        <section id="projects" className="py-20 px-6 md:px-20 bg-base text-text">
            <div className="max-w-6xl mx-auto">
                {/* Terminal Window */}
                <div className="bg-mantle rounded-lg overflow-hidden shadow-2xl border border-mauve/30 mb-8">
                    {/* Terminal Header */}
                    <div className="bg-crust px-4 py-3 flex items-center gap-2 border-b border-mauve/20">
                        <div className="w-3 h-3 rounded-full bg-red"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow"></div>
                        <div className="w-3 h-3 rounded-full bg-green"></div>
                        <div className="ml-2 text-overlay text-xs font-mono">sagara@portfolio:~/projects</div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 md:p-8 font-mono text-sm">
                        {/* Command */}
                        <div className="flex mb-6">
                            <span className="text-mauve mr-2">➜</span>
                            <span className="text-sky mr-2">~/projects</span>
                            <span className="text-text">ls -la --color=auto</span>
                        </div>

                        {/* Directory Info */}
                        <div className="text-overlay mb-4">
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
                                    className="group block hover:bg-mauve/5 p-3 rounded transition-all border border-transparent hover:border-mauve/30"
                                >
                                    {/* File listing line */}
                                    <div className="flex items-start gap-3 mb-2">
                                        <span className="text-mauve">drwxr-xr-x</span>
                                        <span className="text-yellow flex-shrink-0">
                                            {project.date}
                                        </span>
                                        <span className="text-sky font-semibold group-hover:text-mauve transition-colors flex-1">
                                            {project.title}/
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <div className="ml-[140px] md:ml-[160px] text-subtext text-xs mb-2">
                                        {project.description}
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="ml-[140px] md:ml-[160px] flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2 py-1 bg-green/10 text-green rounded border border-green/30"
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
                            <span className="text-mauve mr-2">➜</span>
                            <span className="text-sky mr-2">~/projects</span>
                            <span className="cursor-blink w-2 h-5 bg-mauve inline-block"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
