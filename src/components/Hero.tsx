import { useState, useEffect } from 'react';
import { PROFILE } from '../data/profile';
import { HERO_LOGO } from '../data/ascii';

/**
 * Hero Component
 * The landing section of the portfolio. Features a typewriter animation
 * simulating a terminal command execution and displays a welcome banner.
 */
const Hero = () => {
    // --- Typewriter Animation Logic ---
    const [displayedText, setDisplayedText] = useState('');
    const fullText = "cat ~/portfolio/welcome.txt";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                // Slice the string up to the current index to simulate typing
                setDisplayedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 50); // Speed of typing in ms
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 bg-base">
            <div className="max-w-5xl">
                {/* --- Terminal Window Simulation --- */}
                <div className="bg-mantle rounded-lg overflow-hidden shadow-2xl border border-mauve/30">

                    {/* Terminal Window Header (Chrome) */}
                    <div className="bg-crust px-4 py-3 flex items-center gap-2 border-b border-mauve/20">
                        {/* Mock window controls */}
                        <div className="w-3 h-3 rounded-full bg-red"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow"></div>
                        <div className="w-3 h-3 rounded-full bg-green"></div>
                        <div className="ml-2 text-overlay text-xs font-mono">sagara@portfolio:~</div>
                    </div>

                    {/* Main Terminal Content Area */}
                    <div className="p-6 md:p-8 font-mono text-sm md:text-base">

                        {/* Mock Command Prompt with Animated Input */}
                        <div className="flex mb-6">
                            <span className="text-mauve mr-2">➜</span>
                            <span className="text-sky mr-2">~</span>
                            <span className="text-text">{displayedText}</span>
                        </div>

                        {/* Large ASCII Art Branding */}
                        <pre className="text-mauve text-xs md:text-sm mb-6 overflow-x-auto">
                            {HERO_LOGO}
                        </pre>

                        {/* Quick Personal Info (Key-Value style) */}
                        <div className="space-y-2 text-subtext mb-6">
                            <div className="flex">
                                <span className="text-sky w-32">Name:</span>
                                <span className="text-text">{PROFILE.name}</span>
                            </div>
                            <div className="flex">
                                <span className="text-sky w-32">Role:</span>
                                <span className="text-text">{PROFILE.role}</span>
                            </div>
                            <div className="flex">
                                <span className="text-sky w-32">Location:</span>
                                <span className="text-text">{PROFILE.location}</span>
                            </div>
                            <div className="flex">
                                <span className="text-sky w-32">Status:</span>
                                <span className="text-green">{PROFILE.status}</span>
                            </div>
                        </div>

                        {/* Brief Intro Paragraph */}
                        <div className="border-l-2 border-mauve pl-4 mb-6">
                            <p className="text-subtext leading-relaxed">
                                {PROFILE.bio.split(/(Backend Engineering|Cybersecurity)/).map((part, i) => {
                                    if (part === " Backend Engineering") return <span key={i} className="text-mauve">{part}</span>;
                                    if (part === " Cybersecurity") return <span key={i} className="text-sky">{part}</span>;
                                    return part;
                                })}
                            </p>
                        </div>

                        {/* Call-to-Action / Social Links Section */}
                        <div className="space-y-3">
                            <div className="border-t border-mauve/20 pt-3 mt-4">
                                <div className="text-overlay text-xs mb-2"># Connect with me:</div>
                                <div className="space-y-2">
                                    {PROFILE.socials.map((social) => (
                                        <div key={social.label} className="flex items-center gap-3">
                                            <span className="text-mauve">$</span>
                                            <a
                                                href={social.url}
                                                className={`text-text hover:text-${social.color} transition-colors underline decoration-dotted`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {social.label}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Prompt Cursor (Active State) */}
                        <div className="flex mt-6">
                            <span className="text-mauve mr-2">➜</span>
                            <span className="text-sky mr-2">~</span>
                            <span className="cursor-blink w-2 h-5 bg-mauve inline-block"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

