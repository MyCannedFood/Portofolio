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
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 bg-base">
            <div className="max-w-5xl">
                {/* Terminal Window */}
                <div className="bg-mantle rounded-lg overflow-hidden shadow-2xl border border-mauve/30">
                    {/* Terminal Header */}
                    <div className="bg-crust px-4 py-3 flex items-center gap-2 border-b border-mauve/20">
                        <div className="w-3 h-3 rounded-full bg-red"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow"></div>
                        <div className="w-3 h-3 rounded-full bg-green"></div>
                        <div className="ml-2 text-overlay text-xs font-mono">sagara@portfolio:~</div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 md:p-8 font-mono text-sm md:text-base">
                        {/* Command Input */}
                        <div className="flex mb-6">
                            <span className="text-mauve mr-2">➜</span>
                            <span className="text-sky mr-2">~</span>
                            <span className="text-text">{displayedText}</span>
                            <span className="cursor-blink ml-1 w-2 h-5 bg-mauve inline-block"></span>
                        </div>

                        {/* ASCII Art Banner */}
                        <pre className="text-mauve text-xs md:text-sm mb-6 overflow-x-auto">
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
                        <div className="space-y-2 text-subtext mb-6">
                            <div className="flex">
                                <span className="text-sky w-32">Name:</span>
                                <span className="text-text">Muhammad Sagara Waluya</span>
                            </div>
                            <div className="flex">
                                <span className="text-sky w-32">Role:</span>
                                <span className="text-text">Backend Dev | Security Enthusiast</span>
                            </div>
                            <div className="flex">
                                <span className="text-sky w-32">Location:</span>
                                <span className="text-text">Indonesia</span>
                            </div>
                            <div className="flex">
                                <span className="text-sky w-32">Status:</span>
                                <span className="text-green">Available for Internships</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="border-l-2 border-mauve pl-4 mb-6">
                            <p className="text-subtext leading-relaxed">
                                Third-year Computer Science student with dual expertise in
                                <span className="text-mauve"> Backend Engineering</span> and
                                <span className="text-sky"> Cybersecurity</span>.
                                Currently expanding knowledge in security practices and penetration testing.
                            </p>
                        </div>

                        {/* Action Commands */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="text-mauve">$</span>
                                <a href="#projects" className="text-text hover:text-mauve transition-colors underline decoration-dotted">
                                    ./view_projects.sh
                                </a>
                                <span className="text-overlay"># View my work</span>
                            </div>

                            {/* Social Links */}
                            <div className="border-t border-mauve/20 pt-3 mt-4">
                                <div className="text-overlay text-xs mb-2"># Connect with me:</div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="text-mauve">$</span>
                                        <a
                                            href="mailto:sagarawaluya@gmail.com"
                                            className="text-text hover:text-mauve transition-colors underline decoration-dotted"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            email
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-mauve">$</span>
                                        <a
                                            href="https://linkedin.com/in/muhammad-sagara-waluya"
                                            className="text-text hover:text-sky transition-colors underline decoration-dotted"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            linkedin
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-mauve">$</span>
                                        <a
                                            href="https://github.com/MyCannedFood"
                                            className="text-text hover:text-mauve transition-colors underline decoration-dotted"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            github
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
