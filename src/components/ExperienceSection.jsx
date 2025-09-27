import { Briefcase, Users } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "Machine Learning Intern",
        org: "Tectoro Consulting",
        time: "May 2025 – Jul 2025",
        description:
            "Worked on computer vision projects involving object detection and segmentation from drone capture ortho images.",
        icon: <Briefcase className="h-6 w-6 text-primary" />,
    },
    {
        id: 2,
        role: "Teaching Assistant – Linear Algebra",
        org: "IIIT Bangalore",
        time: "Aug 2025 - Present",
        description:
            "Assisting in conduction tutorials, and grading papers.",
        icon: <Briefcase className="h-6 w-6 text-primary" />,
    },
];

// const clubs = [
//     {
//         id: 1,
//         role: "Core Member – Ideation Team",
//         org: "E-Cell, IIIT Bangalore",
//         time: "Aug 2024- Present",
//         description:
//             "Part of the ideation team.",
//         icon: <Users className="h-6 w-6 text-primary" />,
//     },
//     {
//         id: 2,
//         role: "Core Member",
//         org: "Lean In IIIT Bangalore",
//         time: "Sep 2025 - Present",
//         description:
//             "Part of the core team.",
//         icon: <Users className="h-6 w-6 text-primary" />,
//     },
//     {
//         id: 3,
//         role: "Student Mentor",
//         org: "IIIT Bangalore",
//         time: "Sep 2025 - Present",
//         description:
//             "Mentoring 2 first-year students.",
//         icon: <Users className="h-6 w-6 text-primary" />,
//     },
// ];

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Experience</span>
                </h2>

                {/* Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col gap-4"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">{exp.icon}</div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {exp.org} • {exp.time}
                                    </p>
                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm">{exp.description}</p>
                        </div>
                    ))}
                </div>

                {/* Clubs & Volunteering */}
                {/* <h3 className="text-2xl font-semibold mb-8 text-center">
                    Clubs & <span className="text-primary">Involvement</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {clubs.map((club) => (
                        <div
                            key={club.id}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col gap-4"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">{club.icon}</div>
                                <div className="text-left">
                                    <h3 className="font-semibold text-lg">{club.role}</h3>
                                    <p className="text-sm text-muted-foreground">{club.org} • {club.time}</p>

                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm">{club.description}</p>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
};

