
const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-20">
            <div className="max-w-4xl">
                <p className="text-purple-400 font-medium mb-6 tracking-wider uppercase text-sm">Introduction</p>
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight">
                    Greatings, <span className="text-gray-500">I'm Muhammad Sagara Waluya</span>
                </h1>

                <div className="grid md:grid-cols-2 gap-12 mt-12">
                    <p className="text-xl text-gray-400 leading-relaxed">
                        I'm a 3rd year student passionate about creating beautiful, functional, and performant web applications. Focusing on clean code and user-centric design.
                    </p>
                    <div className="flex flex-col gap-4 items-start">
                        <a href="#projects" className="group flex items-center gap-2 text-white border-b border-white pb-1 hover:text-purple-400 hover:border-purple-400 transition-colors">
                            View Selected Projects
                            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </a>
                        <a href="#contact" className="group flex items-center gap-2 text-gray-400 border-b border-gray-400 pb-1 hover:text-white hover:border-white transition-colors">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
