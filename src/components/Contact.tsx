import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        alert('Message sent! (Simulation)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 px-6 md:px-20 bg-gray-950 text-white border-t border-gray-900">
            <div className="max-w-4xl">
                <p className="text-purple-400 font-medium mb-6 tracking-wider uppercase text-sm">Get In Touch</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Let's work together.</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            I'm currently available for freelance work and Internships. If you have a project that needs some creative love, I'd love to hear about it.
                        </p>
                        <div className="space-y-4">
                            <a href="mailto:sagarawaluya@gmail.com" className="block text-xl font-medium hover:text-purple-400 transition-colors">sagarawaluya@gmail.com</a>
                            <div className="flex gap-6 pt-4">
                                <a href="https://linkedin.com/in/muhammad-sagara-waluya" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                                <a href="https://github.com/MyCannedFood" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-0 py-3 bg-transparent border-b border-gray-700 focus:border-purple-500 outline-none transition-colors text-white placeholder-gray-600"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-0 py-3 bg-transparent border-b border-gray-700 focus:border-purple-500 outline-none transition-colors text-white placeholder-gray-600"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={3}
                                className="w-full px-0 py-3 bg-transparent border-b border-gray-700 focus:border-purple-500 outline-none transition-colors text-white placeholder-gray-600 resize-none"
                                placeholder="Message"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-4 px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
