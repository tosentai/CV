import { Sparkles, Brain, Goal } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Who I Am</h3>
                        <p className="text-muted-foreground">
                            I'm exploring the world of AI content creation and
                            prompt engineering. I work with generative AI tools
                            like ChatGPT, Claude, Midjourney, Sora, and HeyGen
                            to create visual and textual content, learning and
                            improving with each project.
                        </p>
                        <p className="text-muted-foreground">
                            My background in computer science and experience
                            with React, C#, and .NET helps me approach AI
                            workflows with technical understanding and
                            structured thinking, combining creativity with
                            practical problem-solving.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a
                                href="https://drive.google.com/file/d/1y7exw3U08XPwesL9eyLnytiV3XBQ-HIC/view"
                                target="_blank"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Sparkles className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        AI Tools
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Working with ChatGPT, Claude AI,
                                        Perplexity, Midjourney, Dalle-2, Sora,
                                        HeyGen, and v0. Developing prompt
                                        engineering skills for better results.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Brain className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Approach
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Experimenting with different prompts,
                                        testing various approaches, and learning
                                        from each iteration to improve content
                                        quality.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Goal className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Goals
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Growing expertise in generative AI
                                        tools, exploring creative possibilities,
                                        and building a portfolio of meaningful
                                        AI-driven projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
