import {
    Linkedin,
    Mail,
    MapPin,
    Send,
    Github,
    BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Open to opportunities and discussions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:avancha.dedeepya@iiitb.ac.in"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        avancha.dedeepya@iiitb.ac.in
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <p className="text-muted-foreground hover:text-primary transition-colors">
                                        Bangalore, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://github.com/Dd1235"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                >
                                    <Github className="h-6 w-6 hover:text-primary transition-colors" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/dedeepya-avancha-507363217/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
                                </a>
                                <a
                                    href="https://medium.com/@deepya1235"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Medium"
                                >
                                    <BookOpen className="h-6 w-6 hover:text-primary transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mailto Button Instead of Form */}
                    <div className=" p-8 rounded-lg shadow-xs flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <a
                            href="mailto:avancha.dedeepya@iiitb.ac.in?subject=Portfolio%20Contact&body=Hi%20Dedeepya,"
                            className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2"
                            )}
                        >
                            Send Message
                            <Send size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
