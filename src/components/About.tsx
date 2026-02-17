import { SKILLS } from '../data/skills';

/**
 * About Component
 * Displays technical skills and tools categorized into Development and Security.
 * Uses a side-by-side terminal window layout to maintain the terminal aesthetic.
 */
const About = () => {
    return (
        <section id="skills" className="py-20 px-6 md:px-20 bg-base text-text overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">

                    {/* --- Development Skills Terminal --- */}
                    <div className="bg-mantle rounded-lg overflow-hidden shadow-2xl border border-sky/30">
                        {/* Terminal Chrome */}
                        <div className="bg-crust px-4 py-3 flex items-center gap-2 border-b border-sky/20">
                            <div className="w-3 h-3 rounded-full bg-red"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow"></div>
                            <div className="w-3 h-3 rounded-full bg-sky"></div>
                            <div className="ml-2 text-overlay text-xs font-mono flex-1">development.sh</div>
                        </div>

                        {/* Development Skills Content */}
                        <div className="p-6 font-mono text-sm">
                            {/* Command Execution Simulation */}
                            <div className="flex mb-4">
                                <span className="text-mauve mr-2">➜</span>
                                <span className="text-sky mr-2">~/skills</span>
                                <span className="text-text">cat /etc/skills/development.json | jq</span>
                            </div>

                            {/* Skills Output List */}
                            <div className="space-y-2 mb-4">
                                <div className="text-sky font-semibold mb-3">
                                    === DEVELOPMENT STACK ===
                                </div>
                                {SKILLS.development.map((skill, index) => (
                                    <div key={skill} className="flex items-center gap-3 text-subtext hover:text-sky transition-colors">
                                        <span className="text-green">[{String(index + 1).padStart(2, '0')}]</span>
                                        <span className="text-yellow">✓</span>
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Static Cursor */}
                            <div className="flex mt-4">
                                <span className="text-mauve mr-2">➜</span>
                                <span className="text-sky mr-2">~/skills</span>
                                <span className="cursor-blink w-2 h-5 bg-sky inline-block"></span>
                            </div>
                        </div>
                    </div>

                    {/* --- Security Arsenal Terminal --- */}
                    <div className="bg-mantle rounded-lg overflow-hidden shadow-2xl border border-green/30">
                        {/* Terminal Chrome */}
                        <div className="bg-crust px-4 py-3 flex items-center gap-2 border-b border-green/20">
                            <div className="w-3 h-3 rounded-full bg-red"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow"></div>
                            <div className="w-3 h-3 rounded-full bg-green"></div>
                            <div className="ml-2 text-overlay text-xs font-mono flex-1">arsenal.sh</div>
                        </div>

                        {/* Arsenal Content */}
                        <div className="p-6 font-mono text-sm">
                            {/* Command Execution Simulation */}
                            <div className="flex mb-4">
                                <span className="text-green mr-2">➜</span>
                                <span className="text-sky mr-2">~/arsenal</span>
                                <span className="text-text">tree ./tools/security --charset=ascii</span>
                            </div>

                            {/* Arsenal Output (File-style listing) */}
                            <div className="space-y-2 mb-4">
                                <div className="text-green font-semibold mb-3">
                                    === SECURITY ARSENAL ===
                                </div>
                                {SKILLS.arsenal.map((skill) => (
                                    <div key={skill} className="flex items-center gap-3 text-subtext hover:text-green transition-colors">
                                        <span className="text-green opacity-70">-rwxr-xr-x</span>
                                        <span className="text-sky">exec</span>
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Static Cursor */}
                            <div className="flex mt-4">
                                <span className="text-green mr-2">➜</span>
                                <span className="text-sky mr-2">~/arsenal</span>
                                <span className="cursor-blink w-2 h-5 bg-green inline-block"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

