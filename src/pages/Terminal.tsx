import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Terminal = () => {
    const [history, setHistory] = useState<string[]>(['Welcome to Sagara terminal!', 'Type "help" to see available commands.']);
    const [input, setInput] = useState('');
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [currentPath, setCurrentPath] = useState('~');
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const projects = [
        "Lions_Website",
        "Cinematch",
        "Task_manager",
        "Ultimagz.com",
        "Fokus"
    ];

    const filesystem: Record<string, any> = {
        '~': ['projects/', 'about.txt', 'skills.sh', 'contact.conf'],
        'projects': projects.map(p => p + '/')
    };

    const fileContent: Record<string, string[]> = {
        'about.txt': ['Third-year Computer Science student specializing in Backend and Cybersecurity.'],
        'skills.sh': [
            '#!/bin/bash',
            'echo "Loading skills..."',
            'echo "----------------"',
            'echo "Development: PHP, Laravel, React, Next.js, Tailwind CSS, MySQL, C, C++, Python, Java, Kotlin"',
            'echo "Arsenal: Git, Docker, Linux, Nmap, Burp Suite, Wireshark, Metasploit, Bash"'
        ],
        'contact.conf': [
            '[contact_info]',
            'email = sagarawaluya@gmail.com',
            'linkedin = muhammad-sagara-waluya',
            'github = MyCannedFood',
            'active_status = true'
        ]
    };

    const commands: Record<string, (args: string[]) => void> = {
        help: () => {
            setHistory(prev => [...prev,
                'Available commands:',
                '  help      - Show this help message',
                '  ls        - List directory contents',
                '  cd        - Change directory',
                '  cat       - Read a file',
                '  date      - Display current date and time',
                '  clear     - Clear terminal history',
                '  exit      - Return to homepage'
            ]);
        },
        ls: (args) => {
            const target = args[0] || (currentPath === '~' ? '~' : 'projects');
            if (target === 'projects' || (currentPath === '~' && target === 'projects/')) {
                setHistory(prev => [...prev, projects.join('  ')]);
            } else if (target === '~' || target === '.') {
                setHistory(prev => [...prev, filesystem['~'].join('  ')]);
            } else {
                setHistory(prev => [...prev, `ls: cannot access '${target}': No such file or directory`]);
            }
        },
        cd: (args) => {
            const target = args[0];
            if (!target || target === '~' || target === '..') {
                setCurrentPath('~');
            } else if (target === 'projects' || target === 'projects/') {
                setCurrentPath('projects');
            } else {
                setHistory(prev => [...prev, `cd: no such directory: ${target}`]);
            }
        },
        cat: (args) => {
            const fileName = args[0];
            if (!fileName) {
                setHistory(prev => [...prev, 'usage: cat <filename>']);
                return;
            }
            if (fileContent[fileName]) {
                setHistory(prev => [...prev, ...fileContent[fileName]]);
            } else if (fileName.includes('/')) {
                setHistory(prev => [...prev, `cat: ${fileName}: Permission denied or is a directory`]);
            } else {
                setHistory(prev => [...prev, `cat: ${fileName}: No such file or directory`]);
            }
        },
        date: () => {
            setHistory(prev => [...prev, new Date().toLocaleString()]);
        },
        clear: () => {
            setHistory([]);
        },
        exit: () => {
            navigate('/');
        }
    };

    const handleCommand = (cmd: string) => {
        const parts = cmd.trim().split(/\s+/);
        const commandName = parts[0].toLowerCase();
        const args = parts.slice(1);

        setHistory(prev => [...prev, `➜ ${currentPath} ${cmd}`]);

        if (commandName === '') return;

        if (commands[commandName]) {
            commands[commandName](args);
        } else {
            setHistory(prev => [...prev, `bash: command not found: ${commandName}`]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCommand(input);
        if (input.trim()) setCommandHistory(prev => [input, ...prev]);
        setInput('');
        setHistoryIndex(-1);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            } else {
                setHistoryIndex(-1);
                setInput('');
            }
        }
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="min-h-screen bg-mantle p-6 font-mono text-sm md:text-base relative overflow-hidden flex flex-col pt-20 md:pt-6">
            <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto mb-4 custom-scrollbar">
                    <div className="flex flex-col min-h-full">
                        <div>
                            {history.map((line, i) => (
                                <div key={i} className="mb-1 text-text whitespace-pre-wrap">{line}</div>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
                            <span className="text-mauve flex-shrink-0">➜</span>
                            <span className="text-sky flex-shrink-0">{currentPath}</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="bg-transparent border-none outline-none text-text w-full p-0"
                                autoFocus
                            />
                        </form>
                        <div ref={bottomRef} className="h-4" />
                    </div>
                </div>
            </div>

            {/* CRT Overlay Effects */}
            <div className="crt-overlay pointer-events-none fixed inset-0 z-[100]"></div>
            <div className="crt-flicker pointer-events-none fixed inset-0 z-[101]"></div>
        </div>
    );
};

export default Terminal;
