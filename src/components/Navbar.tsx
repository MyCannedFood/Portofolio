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
            <nav className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-gray-950 border-r border-gray-900 z-50 p-8 gap-20">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-2">Portfolio</h1>
                    <p className="text-gray-500 text-sm">Full Stack Developer</p>
                </div>

                <div className="flex flex-col space-y-6">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`text-lg transition-colors duration-300 ${activeSection === item.id ? 'text-white font-medium pl-4 border-l-2 border-purple-500' : 'text-gray-500 hover:text-gray-300'
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Mobile Bottom Bar */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full bg-gray-950/90 backdrop-blur-lg border-t border-gray-800 z-50 px-6 py-4">
                <div className="flex justify-between items-center">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`text-sm ${activeSection === item.id ? 'text-purple-400 font-medium' : 'text-gray-500'
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
