import { CaretUp } from '@phosphor-icons/react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 bg-background border-t border-white/5">
            <div className="container mx-auto px-6 max-w-[1400px] flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold">
                        H
                    </span>
                    <p className="text-zinc-500 text-sm font-medium tracking-tight">
                        © {currentYear} MUHAMMAD <span className="text-foreground">HAFIZH</span> MAULIDAN
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <button 
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-accent uppercase tracking-widest transition-colors group"
                    >
                        <span>Back to top</span>
                        <CaretUp size={16} weight="bold" className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
