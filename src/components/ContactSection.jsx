import { Mail, Phone, Pin, Send } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTelegram, FaTwitch } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl md:text-4xl font-bold text-center mb-4">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    If you have any questions or inquiries, feel free to reach
                    out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8 flex flex-col justify-center bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">
                                        Email
                                    </h4>
                                    <a
                                        href="mailto:anton.anpilohov@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Click to email me
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">
                                        Phone
                                    </h4>
                                    <a
                                        href="tel:+380965702639"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Click to call me
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Pin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">
                                        Location
                                    </h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Ostroh, Ukraine
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">
                                Connect With Me
                            </h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/tosentai/"
                                    target="_blank"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                                <a href="https://t.me/tosentai" target="_blank">
                                    <FaTelegram size={24} />
                                </a>
                                <a
                                    href="https://www.instagram.com/tosentai_/"
                                    target="_blank"
                                >
                                    <FaInstagram size={24} />
                                </a>
                                <a
                                    href="https://www.twitch.tv/tosentai"
                                    target="_blank"
                                >
                                    <FaTwitch size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            {" "}
                            Send a Message
                        </h3>
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Anton Anpilohov..."
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="anton@example.com"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}
                            >
                                Send Message
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
