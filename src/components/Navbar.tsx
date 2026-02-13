import { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'projects', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <>
            {/* Desktop Sidebar */}
            <nav className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-[#0d1117] border-r border-emerald-500/20 z-50 p-8 gap-20">
                <div>
                    <div className="font-mono">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-emerald-400 text-xl">➜</span>
                            <h1 className="text-xl font-bold text-emerald-400">portfolio</h1>
                        </div>
                        <p className="text-gray-500 text-xs ml-7">sagara@terminal:~</p>
                    </div>
                </div>

                <div className="flex flex-col space-y-4 font-mono text-sm">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`flex items-center gap-3 transition-colors duration-300 py-2 px-3 rounded ${activeSection === item.id
                                    ? 'text-emerald-400 bg-emerald-500/10 border-l-2 border-emerald-500'
                                    : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/30'
                                }`}
                        >
                            <span>{item.label}</span>
                        </a>
                    ))}
                </div>

                {/* System Info */}
                <div className="mt-auto font-mono text-xs text-gray-600 space-y-1">
                    <div>uptime: {new Date().getFullYear()}</div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span>online</span>
                    </div>
                </div>
            </nav>

            {/* Mobile Bottom Bar */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#0d1117]/95 backdrop-blur-lg border-t border-emerald-500/20 z-50 px-6 py-4">
                <div className="flex justify-between items-center font-mono text-xs">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`flex flex-col items-center gap-1 ${activeSection === item.id ? 'text-emerald-400' : 'text-gray-500'
                                }`}
                        >
                            <span>{item.label}</span>
                        </a>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
