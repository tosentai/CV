import { Code, Brain, Goal } from "lucide-react";

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
                            I'm Anton, a computer science student with primary
                            focus on frontend development. I build interfaces
                            using React, Tailwind, and modern frameworks, and
                            maintain backend skills in C# and ASP.NET to
                            integrate robust full-stack solutions.
                        </p>
                        <p className="text-muted-foreground">
                            I prioritise logical precision, structured code, and
                            critical analysis in all projects, rejecting
                            superficial understanding in favour of deep,
                            system-level knowledge.
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
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Tech Stack
                                    </h4>
                                    <p className="text-muted-foreground">
                                        React, Tailwind CSS, JavaScript, C#,
                                        ASP.NET, Python, HTML, CSS Entity
                                        Framework, MySQL.
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
                                        Strict logic, critical thinking,
                                        rejection of cognitive bias, and pursuit
                                        of precise, maintainable code.
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
                                        Mastery of full-stack development,
                                        rigorous understanding of computer
                                        science, and building systems of lasting
                                        value.
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
