export interface Project {
    title: string;
    description: string;
    tech: string[];
    link: string;
    type: 'web' | 'mobile' | 'system' | 'security';
    date: string;
}

export const PROJECTS: Project[] = [
    {
        title: "Cinematch",
        description: "Personalized movie recommendation Android app.",
        tech: ["Kotlin", "Firebase", "Jetpack Compose"],
        link: "https://github.com/calvinnnleo/DesainMovieReview",
        type: "mobile",
        date: "Aug 2025 - Dec 2025"
    },
    {
        title: "Task manager",
        description: "High-performance task manager in C++.",
        tech: ["C++"],
        link: "https://github.com/MyCannedFood/MyList",
        type: "system",
        date: "Jan 2025 - Jan 2025"
    }
];
