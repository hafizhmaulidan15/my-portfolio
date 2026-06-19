import { CaretUp } from '@phosphor-icons/react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-background border-t border-white/[0.06] relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <div className="container mx-auto px-6 max-w-[1400px] flex justify-center">
                <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-sm bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center text-xs font-bold text-foreground">
                        H
                    </span>
                    <p className="text-text-tertiary text-sm font-medium tracking-tight">
                        &copy; {currentYear} Muhammad <span className="text-foreground">Hafizh</span> Maulidan
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
