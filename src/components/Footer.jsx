import { CaretUp } from '@phosphor-icons/react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-background border-t border-border relative">
            <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center text-xs font-bold text-foreground">
                        H
                    </span>
                    <p className="text-text-tertiary text-sm font-medium tracking-tight">
                        &copy; {currentYear} Muhammad <span className="text-foreground">Hafizh</span> Maulidan
                    </p>
                </div>
                <div className="flex items-center gap-4 text-[13px] font-mono text-text-tertiary">
                    <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                    <span className="text-white/10">·</span>
                    <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
