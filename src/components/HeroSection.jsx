import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">
                            Hi, I'm
                        </span>
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-1">
                            Anton
                        </span>
                        <span className="text-2xl md:text-4xl ml-2 opacity-0 animate-fade-in-delay-2">
                            aka
                        </span>
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-3">
                            tosentai
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        I have experience in creating content through AI tools
                        like ChatGPT, Claude, Midjourney, Sora, and HeyGen. I
                        combine prompt engineering skills with computer science
                        background and full-stack development knowledge to
                        approach AI content generation with technical
                        understanding.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-5 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://docs.google.com/document/d/11z0eA-44fX6GoJphmE-36OJDdVLxlqJfVVTrFmnPckc/edit?usp=sharing"
                            target="_blank"
                            className="cosmic-button"
                        >
                            Check my Prompt examples
                        </a>
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            {/* <div className="absolute inset-0 overflow-hidden">
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-30"></div>
                </div>
            </div> */}

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">
                    Scroll
                </span>
                <ArrowDown className="w-6 h-6 text-primary " />
            </div>
        </section>
    );
};
