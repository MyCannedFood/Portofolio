
const About = () => {
    const devSkills = [
        "PHP", "Laravel", "React", "Next.js", "Tailwind CSS", "MySQL",
        "C", "C++", "Python", "Java", "Kotlin"
    ];

    const arsenalSkills = [
        "Git", "Docker", "Linux", "Nmap", "Burp Suite", "Wireshark", "Metasploit", "Bash"
    ];

    return (
        <section id="skills" className="py-20 px-6 md:px-20 bg-[#0a0e14] text-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Development Skills Terminal */}
                    <div className="bg-[#0d1117] rounded-lg overflow-hidden shadow-2xl border border-cyan-500/30">
                        {/* Terminal Header */}
                        <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-cyan-500/20">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                            <div className="ml-2 text-gray-400 text-xs font-mono">development.sh</div>
                        </div>

                        {/* Terminal Content */}
                        <div className="p-6 font-mono text-sm">
                            {/* Command */}
                            <div className="flex mb-4">
                                <span className="text-cyan-400 mr-2">➜</span>
                                <span className="text-emerald-400 mr-2">~</span>
                                <span className="text-gray-300">cat skills/development.txt</span>
                            </div>

                            {/* Skills Output */}
                            <div className="space-y-2 mb-4">
                                <div className="text-cyan-400 font-semibold mb-3">
                                    === DEVELOPMENT STACK ===
                                </div>
                                {devSkills.map((skill, index) => (
                                    <div key={skill} className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                                        <span className="text-emerald-400">[{String(index + 1).padStart(2, '0')}]</span>
                                        <span className="text-yellow-400">✓</span>
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Cursor */}
                            <div className="flex mt-4">
                                <span className="text-cyan-400 mr-2">➜</span>
                                <span className="text-emerald-400 mr-2">~</span>
                                <span className="cursor-blink w-2 h-5 bg-cyan-400 inline-block"></span>
                            </div>
                        </div>
                    </div>

                    {/* Security Arsenal Terminal */}
                    <div className="bg-[#0d1117] rounded-lg overflow-hidden shadow-2xl border border-emerald-500/30">
                        {/* Terminal Header */}
                        <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-emerald-500/20">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                            <div className="ml-2 text-gray-400 text-xs font-mono">arsenal.sh</div>
                        </div>

                        {/* Terminal Content */}
                        <div className="p-6 font-mono text-sm">
                            {/* Command */}
                            <div className="flex mb-4">
                                <span className="text-emerald-400 mr-2">➜</span>
                                <span className="text-cyan-400 mr-2">~</span>
                                <span className="text-gray-300">ls -la ./tools/</span>
                            </div>

                            {/* Arsenal Output */}
                            <div className="space-y-2 mb-4">
                                <div className="text-emerald-400 font-semibold mb-3">
                                    === SECURITY ARSENAL ===
                                </div>
                                {arsenalSkills.map((skill) => (
                                    <div key={skill} className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors">
                                        <span className="text-emerald-500">-rwxr-xr-x</span>
                                        <span className="text-cyan-400">exec</span>
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Cursor */}
                            <div className="flex mt-4">
                                <span className="text-emerald-400 mr-2">➜</span>
                                <span className="text-cyan-400 mr-2">~</span>
                                <span className="cursor-blink w-2 h-5 bg-emerald-400 inline-block"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
