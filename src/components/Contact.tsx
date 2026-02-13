import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Portfolio Contact from ${formData.name}`,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'Failed to send message');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Network error. Please try again.');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 px-6 md:px-20 bg-[#0a0e14] text-white border-t border-emerald-500/20">
            <div className="max-w-4xl mx-auto">
                {/* Terminal Window */}
                <div className="bg-[#0d1117] rounded-lg overflow-hidden shadow-2xl border border-emerald-500/30">
                    {/* Terminal Header */}
                    <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-emerald-500/20">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                        <div className="ml-2 text-gray-400 text-xs font-mono">contact.sh</div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 md:p-8 font-mono text-sm">
                        {/* Header */}
                        <div className="mb-6">
                            <div className="flex mb-2">
                                <span className="text-emerald-400 mr-2">➜</span>
                                <span className="text-cyan-400 mr-2">~</span>
                                <span className="text-gray-300">./contact.sh --init</span>
                            </div>
                            <div className="text-emerald-400 mb-4">
                                === CONTACT INTERFACE v1.0 ===
                            </div>
                            <div className="text-gray-400 mb-6">
                                Available for freelance work and internships.<br />
                                Fill out the form below or reach out directly:
                            </div>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="text-cyan-400"> Email:</span>
                                    <a href="mailto:sagarawaluya@gmail.com" className="text-emerald-400 hover:underline">
                                        sagarawaluya@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-cyan-400"> LinkedIn:</span>
                                    <a href="https://linkedin.com/in/muhammad-sagara-waluya" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                                        /muhammad-sagara-waluya
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-cyan-400"> GitHub:</span>
                                    <a href="https://github.com/MyCannedFood" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                                        /MyCannedFood
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        {status === 'idle' || status === 'loading' ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name Input */}
                                <div>
                                    <div className="flex items-center mb-2">
                                        <span className="text-emerald-400 mr-2">$</span>
                                        <span className="text-gray-400">export NAME=</span>
                                    </div>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-2 bg-[#161b22] border border-emerald-500/30 rounded text-emerald-400 focus:border-emerald-500 outline-none transition-colors font-mono"
                                        placeholder="John Doe"
                                        required
                                        disabled={status === 'loading'}
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <div className="flex items-center mb-2">
                                        <span className="text-emerald-400 mr-2">$</span>
                                        <span className="text-gray-400">export EMAIL=</span>
                                    </div>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-2 bg-[#161b22] border border-emerald-500/30 rounded text-emerald-400 focus:border-emerald-500 outline-none transition-colors font-mono"
                                        placeholder="john@example.com"
                                        required
                                        disabled={status === 'loading'}
                                    />
                                </div>

                                {/* Message Input */}
                                <div>
                                    <div className="flex items-center mb-2">
                                        <span className="text-emerald-400 mr-2">$</span>
                                        <span className="text-gray-400">cat &gt; message.txt</span>
                                    </div>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={4}
                                        className="w-full px-4 py-2 bg-[#161b22] border border-emerald-500/30 rounded text-emerald-400 focus:border-emerald-500 outline-none transition-colors font-mono resize-none"
                                        placeholder="Your message here..."
                                        required
                                        disabled={status === 'loading'}
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="flex items-center gap-3 pt-4">
                                    <span className="text-emerald-400">$</span>
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="px-6 py-2 bg-emerald-500 text-black font-semibold rounded hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'loading' ? 'Sending...' : './send_message.sh --execute'}
                                    </button>
                                </div>

                                {/* Loading State */}
                                {status === 'loading' && (
                                    <div className="flex items-center gap-2 text-yellow-400">
                                        <span className="animate-pulse">⟳</span>
                                        <span>Processing request...</span>
                                    </div>
                                )}
                            </form>
                        ) : status === 'success' ? (
                            <div className="space-y-2">
                                <div className="text-emerald-400">
                                    ✓ Message sent successfully!
                                </div>
                                <div className="text-gray-400">
                                    Email delivered to inbox.
                                </div>
                                <div className="text-gray-400">
                                    Process completed with exit code 0
                                </div>
                                <div className="flex mt-4">
                                    <span className="text-emerald-400 mr-2">➜</span>
                                    <span className="text-cyan-400 mr-2">~</span>
                                    <span className="cursor-blink w-2 h-5 bg-emerald-400 inline-block"></span>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <div className="text-red-400">
                                    ✗ Error: Failed to send message
                                </div>
                                <div className="text-gray-400">
                                    {errorMessage}
                                </div>
                                <div className="text-gray-400">
                                    Process exited with code 1
                                </div>
                                <div className="flex mt-4">
                                    <span className="text-red-400 mr-2">➜</span>
                                    <span className="text-cyan-400 mr-2">~</span>
                                    <span className="cursor-blink w-2 h-5 bg-red-400 inline-block"></span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
