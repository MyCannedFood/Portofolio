
const Footer = () => {
    return (
        <footer className="bg-[#0d1117] text-gray-400 py-6 border-t border-emerald-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="font-mono text-xs flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                        <span className="text-emerald-400">sagara@portfolio</span>
                        <span className="text-gray-600">|</span>
                        <span>© {new Date().getFullYear()}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-600">exit code:</span>
                        <span className="text-emerald-400">0</span>
                        <span className="text-gray-600">|</span>
                        <span className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span>system ready</span>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
