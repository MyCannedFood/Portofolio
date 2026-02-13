
const Footer = () => {
    return (
        <footer className="bg-mantle text-subtext py-6 border-t border-mauve/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="font-mono text-xs flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                        <span className="text-mauve">sagara</span>
                        <span className="text-overlay">|</span>
                        <span>© {new Date().getFullYear()}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-overlay">exit code:</span>
                        <span className="text-green">0</span>
                        <span className="text-overlay">|</span>
                        <span className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green animate-pulse"></div>
                            <span>system ready</span>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
