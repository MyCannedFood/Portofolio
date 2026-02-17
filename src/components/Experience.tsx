import { EXPERIENCES } from '../data/experience';

/**
 * Experience Component
 * Displays work history with a unique terminal-inspired 'systemctl' style.
 * Each entry is presented as a 'system service' log.
 */
const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6 md:px-20 bg-base text-text">
            <div className="max-w-6xl mx-auto">
                <div className="bg-mantle rounded-lg overflow-hidden shadow-2xl border border-green/30">
                    {/* Terminal Header Bar */}
                    <div className="bg-crust px-4 py-3 flex items-center gap-2 border-b border-green/20">
                        <div className="w-3 h-3 rounded-full bg-red"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow"></div>
                        <div className="w-3 h-3 rounded-full bg-green"></div>
                        <div className="ml-2 text-overlay text-xs font-mono flex-1">sagara@portfolio:~/experience</div>
                    </div>

                    {/* Main Content Area */}
                    <div className="p-6 md:p-8 font-mono text-sm leading-relaxed">

                        {/* Mock Command Execution */}
                        <div className="flex mb-6 text-text">
                            <span className="text-mauve mr-2">➜</span>
                            <span className="text-sky mr-2">~</span>
                            <span>journalctl -u work.service --no-pager</span>
                        </div>

                        {/* Experience Entries */}
                        <div className="space-y-8">
                            {EXPERIENCES.map((exp, index) => (
                                <div key={index} className="border-l-2 border-green/20 pl-6 relative">
                                    {/* Service Status Indicator Dot */}
                                    <div className={`absolute -left-[5px] top-1 w-2 h-2 rounded-full ${exp.status === 'active' ? 'bg-green animate-pulse' : 'bg-overlay'}`}></div>

                                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                                        <span className="text-overlay text-xs">
                                            [{new Date().toISOString().split('T')[0]} {new Date().toLocaleTimeString([], { hour12: false })}]
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-green font-bold">● {exp.company}</span>
                                            {exp.website && (
                                                <a
                                                    href={`https://${exp.website}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[10px] text-sky hover:underline decoration-dotted opacity-70 hover:opacity-100 transition-opacity"
                                                >
                                                    [{exp.website}]
                                                </a>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-yellow">[{exp.role}]</span>
                                            <span className="text-mauve text-xs font-semibold">({exp.type})</span>
                                        </div>
                                    </div>

                                    <div className="text-sky mb-2">{exp.period}</div>

                                    <div className="space-y-1">
                                        {exp.description.map((line, i) => (
                                            <div key={i} className="flex gap-3">
                                                <span className="text-overlay">INFO:</span>
                                                <span className="text-subtext">{line}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {exp.status === 'active' && (
                                        <div className="mt-2 text-green text-xs font-bold">
                                            Active service: Running...
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Static Cursor */}
                        <div className="flex mt-8">
                            <span className="text-mauve mr-2">➜</span>
                            <span className="text-sky mr-2">~/experience</span>
                            <span className="cursor-blink w-2 h-5 bg-green inline-block"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
