import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname !== '/') return;

            const sections = ['home'];
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
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname === '/terminal') {
            setActiveSection('terminal');
        } else if (location.pathname === '/' && !location.hash) {
            setActiveSection('home');
        } else if (location.hash) {
            setActiveSection(location.hash.substring(1));
        }
    }, [location]);

    const navItems = [
        { id: 'home', label: 'Home', path: '/' },
        { id: 'projects', label: 'Projects', path: '/projects' },
        { id: 'terminal', label: 'Terminal', path: '/terminal' },
    ];

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
        if (location.pathname === '/' && item.path.startsWith('/#')) {
            const id = item.id;
            const element = document.getElementById(id);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', item.path);
                setActiveSection(item.id);
            }
        }
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <nav className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-mantle border-r border-mauve/20 z-50 p-8 gap-20">
                <div>
                    <div className="font-mono">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-mauve text-xl">➜</span>
                            <h1 className="text-xl font-bold text-mauve">portfolio</h1>
                        </div>
                        <p className="text-overlay text-xs ml-7">sagara@terminal:~</p>
                    </div>
                </div>

                <div className="flex flex-col space-y-4 font-mono text-sm">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            onClick={(e) => handleClick(e, item)}
                            className={`flex items-center gap-3 transition-colors duration-300 py-2 px-3 rounded ${activeSection === item.id
                                ? 'text-mauve bg-mauve/10 border-l-2 border-mauve'
                                : 'text-subtext hover:text-text hover:bg-overlay/10'
                                }`}
                        >
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </div>

                {/* System Info */}
                <div className="mt-auto font-mono text-xs text-overlay space-y-1">
                    <div>uptime: {new Date().getFullYear()}</div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green animate-pulse"></div>
                        <span>online</span>
                    </div>
                </div>
            </nav>

            {/* Mobile Bottom Bar */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full bg-mantle/95 backdrop-blur-lg border-t border-mauve/20 z-50 px-6 py-4">
                <div className="flex justify-between items-center font-mono text-xs">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            onClick={(e) => handleClick(e, item)}
                            className={`flex flex-col items-center gap-1 ${activeSection === item.id ? 'text-mauve' : 'text-subtext'
                                }`}
                        >
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
