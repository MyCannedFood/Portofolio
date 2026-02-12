

const Projects = () => {
    const projects = [
        {
            title: "Lions Website",
            description: "Member management platform with custom admin dashboard.",
            tech: ["Laravel", "MySQL", "Tailwind"],
            className: "xl:col-span-2 xl:row-span-1",
            color: "bg-blue-500/10",
            link: "https://github.com/Jopras21/UAS_WebPro_LIONS"
        },
        {
            title: "Cinematch",
            description: "Personalized movie recommendation Android app.",
            tech: ["Kotlin", "Firebase", "Jetpack Compose"],
            className: "xl:col-span-1 xl:row-span-1",
            color: "bg-purple-500/10",
            link: "https://github.com/calvinnnleo/DesainMovieReview"
        },
        {
            title: "Task manager",
            description: "High-performance task manager in C.",
            tech: ["C"],
            className: "xl:col-span-1 xl:row-span-1",
            color: "bg-pink-500/10",
            link: "https://github.com/MyCannedFood/MyList"
        },
        {
            title: "Ultimagz.com",
            description: "An independent campus media",
            tech: ["Cloudflare, Wordpress"],
            className: "xl:col-span-2 xl:row-span-1",
            color: "bg-purple-500/10",
            link: "https://ultimagz.com/"
        },
        {
            title: "Fokus",
            description: "a Sub domain from Ultimagz.com",
            tech: ["Typescript", "React", "Next.js"],
            className: "xl:col-span-2 xl:row-span-1",
            color: "bg-blue-500/10",
            link: "https://fokus.ultimagz.com/articles/sisi-muram-budaya-digital/"
        },
    ];

    return (
        <section id="projects" className="py-20 px-6 md:px-20 bg-gray-950 text-white">
            <div className="mb-16">
                <p className="text-purple-400 font-medium mb-6 tracking-wider uppercase text-sm">Selected Work</p>
                <h2 className="text-4xl md:text-6xl font-bold">Featured Projects</h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 auto-rows-auto">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        className={`group relative p-8 rounded-3xl border border-gray-800 hover:border-gray-600 transition-all overflow-hidden flex flex-col justify-end ${project.className} ${project.color}`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />

                        <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                            <div className="flex gap-2 mb-4">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs font-mono px-2 py-1 rounded-full bg-white/10 text-white/80 backdrop-blur-md">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                            <p className="text-gray-400 group-hover:text-gray-300">{project.description}</p>
                        </div>

                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black p-3 rounded-full">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
