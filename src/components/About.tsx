
const About = () => {
    const devSkills = [
        "PHP", "Laravel", "React", "Next.js", "Tailwind CSS", "MySQL",
        "C", "C++", "Python", "Java", "Kotlin"
    ];

    const arsenalSkills = [
        "Git", "Docker", "Linux", "Nmap", "Burp Suite", "Wireshark", "Metasploit", "Bash"
    ];

    return (
        <section id="skills" className="py-20 px-6 md:px-20 bg-gray-950 text-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <p className="text-purple-400 font-medium mb-6 tracking-wider uppercase text-sm">Expertise</p>
                    <h2 className="text-4xl md:text-5xl font-bold">Technical Skills</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Development Skills */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
                            Development
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {devSkills.map((skill) => (
                                <div key={skill} className="p-4 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-purple-500/30 hover:bg-gray-900/60 transition-all duration-300 group">
                                    <p className="font-medium text-gray-300 group-hover:text-purple-400 transition-colors">{skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* The Arsenal (Terminal Theme) */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-green-500 rounded-full"></span>
                            The Arsenal
                        </h3>
                        <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-gray-800 font-mono text-sm">
                            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <div className="ml-2 text-gray-400 text-xs">garas-terminal — -zsh</div>
                            </div>
                            <div className="p-6 text-gray-300 space-y-4">
                                <div className="flex">
                                    <span className="text-green-400 mr-2">➜</span>
                                    <span className="text-blue-400 mr-2">~</span>
                                    <span className="text-gray-400">ls ./tools</span>
                                </div>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 pl-4">
                                    {arsenalSkills.map(skill => (
                                        <div key={skill} className="flex items-center gap-2">
                                            <span className="text-green-500 opacity-75">exec</span>
                                            <span className="text-gray-100">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex animate-pulse">
                                    <span className="text-green-400 mr-2">➜</span>
                                    <span className="text-blue-400 mr-2">~</span>
                                    <span className="w-2 h-5 bg-gray-400"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
