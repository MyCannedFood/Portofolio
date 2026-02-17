import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROFILE } from '../data/profile';
import { PROJECTS } from '../data/projects';
import { SKILLS } from '../data/skills';
import { EXPERIENCES } from '../data/experience';

/**
 * Terminal Component
 * Provides an interactive terminal simulation with a mock filesystem,
 * command history, and CRT visual effects.
 */
const Terminal = () => {
    // --- State Management ---
    const [history, setHistory] = useState<string[]>(['Welcome to Sagara terminal!', 'Type "help" to see available commands.']);
    const [input, setInput] = useState('');
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [currentPath, setCurrentPath] = useState('~');

    // --- Refs for DOM Interaction ---
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // --- Mock Data ---
    const projectNames = PROJECTS.map(p => p.title.replace(/\s+/g, '_'));

    /**
     * Filesystem Structure
     * Simulation of a basic directory tree.
     */
    const filesystem: Record<string, any> = {
        '~': ['projects/', 'experience/', 'about.txt', 'skills.sh', 'contact.conf'],
        'projects': projectNames.map(p => p + '/'),
        'experience': EXPERIENCES.map(e => e.company.replace(/\s+/g, '_') + '.log')
    };

    /**
     * Mock File Contents
     * Content returned when 'cat' is used on specific files.
     */
    const fileContent: Record<string, string[]> = {
        'about.txt': [PROFILE.bio],
        'skills.sh': [
            '#!/bin/bash',
            'echo "Loading skills..."',
            'echo "----------------"',
            `echo "Development: ${SKILLS.development.join(', ')}"`,
            `echo "Arsenal: ${SKILLS.arsenal.join(', ')}"`
        ],
        'contact.conf': [
            '[contact_info]',
            ...PROFILE.socials.map(s => `${s.label} = ${s.value}`),
            'active_status = true'
        ],
        ...Object.fromEntries(
            EXPERIENCES.map(exp => [
                exp.company.replace(/\s+/g, '_') + '.log',
                [
                    `Company: ${exp.company}`,
                    `Role: ${exp.role}`,
                    `Period: ${exp.period}`,
                    `Status: ${exp.status}`,
                    ...exp.description
                ]
            ])
        )
    };

    /**
     * Command Implementations
     * Logic for each supported terminal command.
     */
    const commands: Record<string, (args: string[]) => void> = {
        help: () => {
            setHistory(prev => [...prev,
                'Available commands:',
                '  help      - Show this help message',
                '  ls        - List directory contents',
                '  cd        - Change directory',
                '  cat       - Read a file',
                '  experience - Alias for "ls experience"',
                '  date      - Display current date and time',
                '  clear     - Clear terminal history',
                '  exit      - Return to homepage'
            ]);
        },
        ls: (args) => {
            const target = args[0] || (currentPath === '~' ? '~' : currentPath);
            if (target === 'projects' || (currentPath === '~' && target === 'projects/')) {
                setHistory(prev => [...prev, projectNames.join('  ')]);
            } else if (target === 'experience' || (currentPath === '~' && target === 'experience/')) {
                setHistory(prev => [...prev, filesystem['experience'].join('  ')]);
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
            } else if (target === 'experience' || target === 'experience/') {
                setCurrentPath('experience');
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
        experience: () => {
            setHistory(prev => [...prev, ...filesystem['experience']]);
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

    /**
     * Command Parser
     * Splits input into command and arguments, then executes.
     */
    const handleCommand = (cmd: string) => {
        const parts = cmd.trim().split(/\s+/);
        const commandName = parts[0].toLowerCase();
        const args = parts.slice(1);

        // Add the prompt line to history
        setHistory(prev => [...prev, `➜ ${currentPath} ${cmd}`]);

        if (commandName === '') return;

        if (commands[commandName]) {
            commands[commandName](args);
        } else {
            setHistory(prev => [...prev, `bash: command not found: ${commandName}`]);
        }
    };

    /**
     * Form Submission Handler
     */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCommand(input);
        // Save to command history (for arrow key navigation)
        if (input.trim()) setCommandHistory(prev => [input, ...prev]);
        setInput('');
        setHistoryIndex(-1);
    };

    /**
     * Key Down Handler
     * Manages terminal-specific keyboard navigation (Command History Up/Down).
     */
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

    // Auto-scroll to bottom whenever history updates
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    // Initial focus on the terminal input
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="min-h-screen bg-mantle p-6 font-mono text-sm md:text-base relative overflow-hidden flex flex-col pt-20 md:pt-6">
            {/* Terminal Container */}
            <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col overflow-hidden">
                {/* Scrollable Output Area */}
                <div className="flex-1 overflow-y-auto mb-4 custom-scrollbar">
                    <div className="flex flex-col min-h-full">
                        {/* Render Command History */}
                        <div>
                            {history.map((line, i) => (
                                <div key={i} className="mb-1 text-text whitespace-pre-wrap">{line}</div>
                            ))}
                        </div>

                        {/* Interactive Prompt */}
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
                        {/* Anchor for automatic scrolling */}
                        <div ref={bottomRef} className="h-4" />
                    </div>
                </div>
            </div>

            {/* Visual Flair: CRT Overlay Effects */}
            <div className="crt-overlay pointer-events-none fixed inset-0 z-[100]"></div>
            <div className="crt-flicker pointer-events-none fixed inset-0 z-[101]"></div>
        </div>
    );
};

export default Terminal;

