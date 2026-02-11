
const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-400 py-8 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>

            </div>
        </footer>
    );
};

export default Footer;
