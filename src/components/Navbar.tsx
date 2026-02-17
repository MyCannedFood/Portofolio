import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Navbar Component
 * Handles the application's navigation, including a fixed sidebar on desktop
 * and a bottom navigation bar on mobile. Implements scroll-spying for active sections.
 */
const Navbar = () => {
    // --- State & Routing ---
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();

    /**
     * Active State Synchronization
     * Ensures the correct navigation item is highlighted based on the 
     * current URL path or hash fragment.
     */
    useEffect(() => {
        if (location.pathname === '/terminal') {
            setActiveSection('terminal');
        } else if (location.pathname === '/' && !location.hash) {
            setActiveSection('home');
        } else if (location.hash) {
            // Extract section ID from hash (e.g., '#projects' -> 'projects')
            setActiveSection(location.hash.substring(1));
        }
    }, [location]);

    // Navigation Menu Configuration
    const navItems = [
        { id: 'home', label: 'Home', path: '/' },
        { id: 'terminal', label: 'Terminal', path: '/terminal' },
    ];

    /**
     * Click Handler for Navigation Items
     * Handles smooth scrolling for internal section links on the homepage.
     */
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
        // If we're already on the home page and clicking a hash link
        if (location.pathname === '/' && item.path.startsWith('/#')) {
            const id = item.id;
            const element = document.getElementById(id);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: 'smooth' });
                // Update URL without reloading
                window.history.pushState(null, '', item.path);
                setActiveSection(item.id);
            }
        }
    };

    return (
        <>
            {/* --- Desktop Sidebar Navigation --- */}
            <nav className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-mantle border-r border-mauve/20 z-50 p-8 gap-20">
                {/* Branding / Logo */}
                <div>
                    <div className="font-mono">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-mauve text-xl">➜</span>
                            <h1 className="text-xl font-bold text-mauve">portfolio</h1>
                        </div>
                        <p className="text-overlay text-xs ml-7">sagara@terminal:~</p>
                    </div>
                </div>

                {/* Nav Links */}
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

                {/* Status Bar / System Info */}
                <div className="mt-auto font-mono text-xs text-overlay space-y-1">
                    <div>uptime: {new Date().getFullYear()}</div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green animate-pulse"></div>
                        <span>online</span>
                    </div>
                </div>
            </nav>

            {/* --- Mobile Bottom Navigation Bar --- */}
            <nav className="md:hidden fixed top-0 left-0 w-full bg-mantle/95 backdrop-blur-lg border-t border-mauve/20 z-50 px-6 py-4">
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

