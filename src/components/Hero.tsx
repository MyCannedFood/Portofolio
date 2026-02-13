import { useState, useEffect } from 'react';

const Hero = () => {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = "cat ~/portfolio/welcome.txt";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-20">
            <div className="max-w-5xl">
                {/* Terminal Window */}
                <div className="bg-[#0d1117] rounded-lg overflow-hidden shadow-2xl border border-emerald-500/30">
                    {/* Terminal Header */}
                    <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-emerald-500/20">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                        <div className="ml-2 text-gray-400 text-xs font-mono">sagara@portfolio:~</div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 md:p-8 font-mono text-sm md:text-base">
                        {/* Command Input */}
                        <div className="flex mb-6">
                            <span className="text-emerald-400 mr-2">➜</span>
                            <span className="text-cyan-400 mr-2">~</span>
                            <span className="text-gray-300">{displayedText}</span>
                            <span className="cursor-blink ml-1 w-2 h-5 bg-emerald-400 inline-block"></span>
                        </div>

                        {/* ASCII Art Banner */}
                        <pre className="text-emerald-400 text-xs md:text-sm mb-6 overflow-x-auto">
                            {`
 ███████╗ █████╗  ██████╗  █████╗ ██████╗  █████╗ 
 ██╔════╝██╔══██╗██╔════╝ ██╔══██╗██╔══██╗██╔══██╗
 ███████╗███████║██║  ███╗███████║██████╔╝███████║
 ╚════██║██╔══██║██║   ██║██╔══██║██╔══██╗██╔══██║
 ███████║██║  ██║╚██████╔╝██║  ██║██║  ██║██║  ██║
 ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
`}
                        </pre>

                        {/* System Info Output */}
                        <div className="space-y-2 text-gray-300 mb-6">
                            <div className="flex">
                                <span className="text-cyan-400 w-32">Name:</span>
                                <span>Muhammad Sagara Waluya</span>
                            </div>
                            <div className="flex">
                                <span className="text-cyan-400 w-32">Role:</span>
                                <span>Backend Dev | Security Enthusiast</span>
                            </div>
                            <div className="flex">
                                <span className="text-cyan-400 w-32">Location:</span>
                                <span>Indonesia</span>
                            </div>
                            <div className="flex">
                                <span className="text-cyan-400 w-32">Status:</span>
                                <span className="text-emerald-400">Available for Internships</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="border-l-2 border-emerald-500 pl-4 mb-6">
                            <p className="text-gray-400 leading-relaxed">
                                Third-year Computer Science student with dual expertise in
                                <span className="text-emerald-400"> Backend Engineering</span> and
                                <span className="text-cyan-400"> Cybersecurity</span>.
                                Currently expanding knowledge in security practices and penetration testing.
                            </p>
                        </div>

                        {/* Action Commands */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="text-emerald-400">$</span>
                                <a href="#projects" className="text-gray-300 hover:text-emerald-400 transition-colors underline decoration-dotted">
                                    ./view_projects.sh
                                </a>
                                <span className="text-gray-600"># View my work</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-emerald-400">$</span>
                                <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors underline decoration-dotted">
                                    ./contact.sh
                                </a>
                                <span className="text-gray-600"># Get in touch</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
