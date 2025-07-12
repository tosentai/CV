import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-8 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Anton Anpilohov. All rights
                reserved.
            </p>
            <a
                href="#hero"
                className="text-sm text-muted-foreground flex items-center gap-2 hover:text-foreground transition-colors"
            >
                <ArrowUp size={24} />
            </a>
        </footer>
    );
};
