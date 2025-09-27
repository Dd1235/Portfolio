import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // 90s
    { name: "NumPy", level: 90, category: "ml" },
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },

    // 80s
    { name: "C", level: 80, category: "languages" },
    { name: "C++", level: 80, category: "languages" },
    { name: "Python", level: 80, category: "languages" },
    { name: "SQL (PostgreSQL)", level: 80, category: "backend" },
    { name: "Pandas", level: 85, category: "ml" },
    { name: "PyTorch", level: 85, category: "ml" },
    { name: "Matplotlib", level: 80, category: "ml" },

    // 70s
    { name: "Supabase", level: 70, category: "backend" },
    { name: "FastAPI", level: 65, category: "backend" },
    { name: "Scikit-learn", level: 75, category: "ml" },
    { name: "Seaborn", level: 75, category: "ml" },
    { name: "Computer Vision", level: 70, category: "ml" },

    // 60s
    { name: "JavaScript/TypeScript", level: 60, category: "languages" },
    { name: "React", level: 60, category: "frontend" },

    // 50s
    { name: "Go", level: 50, category: "backend" },
    { name: "Tailwind CSS", level: 50, category: "frontend" },
    { name: "Node.js", level: 45, category: "backend" },
    { name: "Docker", level: 50, category: "tools" },

    // 40s
    { name: "HTML/CSS", level: 40, category: "frontend" },
    { name: "Java", level: 40, category: "languages" },
    { name: "SFML (C++ Graphics)", level: 40, category: "tools" },
];


const categories = ["all", "ml", "languages", "frontend", "backend", "tools"];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("ml");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-forefround hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};