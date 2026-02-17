import { PROJECTS } from '../data/projects';

/**
 * Projects Component
 * Displays a list of projects styled as a terminal 'ls -la' directory listing.
 * Each project is clickable and links to its respective repository or live demo.
 */
const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 md:px-20 bg-base text-text">
            <div className="max-w-6xl mx-auto">

                {/* --- Terminal Window Simulation --- */}
                <div className="bg-mantle rounded-lg overflow-hidden shadow-2xl border border-mauve/30 mb-8">

                    {/* Terminal Header Bar */}
                    <div className="bg-crust px-4 py-3 flex items-center gap-2 border-b border-mauve/20">
                        {/* Mock window buttons */}
                        <div className="w-3 h-3 rounded-full bg-red"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow"></div>
                        <div className="w-3 h-3 rounded-full bg-green"></div>
                        <div className="ml-2 text-overlay text-xs font-mono flex-1">sagara@portfolio:~/projects</div>
                    </div>

                    {/* Main Terminal Content Area */}
                    <div className="p-6 md:p-8 font-mono text-sm">

                        {/* Mock Command Execution */}
                        <div className="flex mb-6">
                            <span className="text-mauve mr-2">➜</span>
                            <span className="text-sky mr-2">~/projects</span>
                            <span className="text-text">find . -maxdepth 1 -type d -not -path '*/.*'</span>
                        </div>

                        {/* Directory Metadata Info */}
                        <div className="text-overlay mb-4">
                            total {PROJECTS.length} projects
                        </div>

                        {/* --- Rendered Projects List --- */}
                        <div className="space-y-3">
                            {PROJECTS.map((project, index) => (
                                <a
                                    key={index}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block hover:bg-mauve/5 p-3 rounded transition-all border border-transparent hover:border-mauve/30"
                                >
                                    {/* Mock 'ls -l' line style */}
                                    <div className="flex items-start gap-3 mb-2">
                                        <span className="text-mauve">drwxr-xr-x</span>
                                        <span className="text-yellow flex-shrink-0">
                                            {project.date}
                                        </span>
                                        <span className="text-sky font-semibold group-hover:text-mauve transition-colors flex-1">
                                            {project.title}/
                                        </span>
                                    </div>

                                    {/* Project Description (Indented beneath the listing) */}
                                    <div className="ml-[140px] md:ml-[160px] text-subtext text-xs mb-2">
                                        {project.description}
                                    </div>

                                    {/* Tech Tags */}
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

                        {/* Prompt Cursor (Active State) */}
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

