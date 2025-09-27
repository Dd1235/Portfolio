import { ArrowRight, ExternalLink, Github, ImageOff } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Eunoia – Productivity & Wellness App(In Progress)",
        description:
            "A holistic web app integrating study-session tracking, mood/sleep logs, AI-powered meditation audio generator based on your prompt or mood logs, AI chatbot, and to-do management.",
        image: "eunoia_home.png",
        tags: ["React", "TypeScript", "Supabase", "FastAPI", "OpenAI API"],
        demoUrl: "#",
        githubUrl: "https://github.com/Dd1235/Eunoia",
    },
    {
        id: 2,
        title: "Distributed Key-Value Store",
        description:
            "A Go-based distributed store with static sharding and leader–replica replication",
        image: "#",
        tags: ["Go", "BoltDB", "Distributed Systems"],
        demoUrl: "#",
        githubUrl: "https://github.com/Dd1235/Distributed-Key-Value-Database",
    },
    {
        id: 3,
        title: "Anomaly Detection on MVTec-AD",
        description:
            "Explored unsupervised anomaly detection using PatchCore, ResNet embeddings, and autoencoders for industrial defect detection tasks.",
        image: "ad_sample.png",
        tags: ["PyTorch", "Computer Vision", "Anomaly Detection"],
        demoUrl: "#",
        githubUrl: "https://github.com/Dd1235/TinkerWithCV/tree/main/MVTec_AD",
    },
];


export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. More on my GitHub!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >

                            <div className="h-48 overflow-hidden flex items-center justify-center bg-secondary">
                                {project.image !== "#" ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <ImageOff className="h-16 w-16 text-muted-foreground opacity-70" />
                                )}
                            </div>


                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.demoUrl !== "#" && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}

                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/dd1235"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};