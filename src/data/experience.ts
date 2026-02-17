export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string[];
    status: 'active' | 'past';
    type: string;
    website?: string;
}

export const EXPERIENCES: Experience[] = [
    {
        company: "CV. Angkara Cipta (Kersa)",
        role: "Full-Stack Developer",
        period: "Feb 2026 - Present",
        description: [

        ],
        status: 'active',
        type: "Internship",
        website: "kersa.id"
    },
    {
        company: "Ultimagz",
        role: "Full-Stack Developer",
        period: "Dec 2024 - Feb 2026",
        description: [
            "Successfully achieved the delivery of a fully functional multimedia news platform, meeting strict organizational requirements for optimized content delivery through a custom Next.js architecture.",
            "Successfully eliminated 95%+ of automated bot submissions and spam advertisements by integrating Cloudflare CAPTCHA, which achieved a drastic improvement in database integrity and platform security."
        ],
        status: 'past',
        type: "Contract",
        website: "ultimagz.com"
    },
    {
        company: "Lions",
        role: "Full-Stack Developer",
        period: "Nov 2024 - Jan 2025",
        description: [
            "Successfully architected a responsive member management platform using Laravel and Tailwind CSS, achieving a centralized repository for critical organizational data.",
            "Successfully developed a custom admin dashboard that streamlined data entry processes and achieved a 100% mobile-friendly experience for all members, significantly improving accessibility."
        ],
        status: 'past',
        type: "Freelance"
    }
];
