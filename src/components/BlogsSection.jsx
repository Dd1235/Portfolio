import { ArrowRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const BlogsSection = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchFeed = async () => {
            try {
                // Use rss2json proxy to avoid CORS issues
                const res = await fetch(
                    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@deepya1235"
                );
                const data = await res.json();

                if (data.items) {
                    const topPosts = data.items.slice(0, 6).map((item) => ({
                        title: item.title,
                        link: item.link,
                        // Medium's API returns description as HTML, strip tags
                        snippet: item.description
                            .replace(/<[^>]+>/g, "")
                            .slice(0, 140)
                            .trim() + "...",
                        // thumbnail: item.thumbnail, // rss2json gives a preview image
                        pubDate: new Date(item.pubDate).toLocaleDateString(),
                    }));
                    setPosts(topPosts);
                }
            } catch (err) {
                console.error("Failed to fetch Medium feed:", err);
            }
        };

        fetchFeed();
    }, []);

    return (
        <section id="blogs" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Latest <span className="text-primary">Blogs</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are my blogs from medium!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <div
                            key={i}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            {/* <div className="h-48 overflow-hidden">
                                <img
                                    src={post.thumbnail}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div> */}

                            <div className="p-6 flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {post.snippet}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center mt-auto">
                                    <span className="text-xs text-muted-foreground">
                                        {post.pubDate}
                                    </span>
                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                                    >
                                        Read More <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://medium.com/@deepya1235"
                        rel="noopener noreferrer"
                    >
                        View All Blogs <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
