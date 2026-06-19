import { Link } from 'react-router-dom';
import { House, ArrowLeft } from '@phosphor-icons/react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center py-[72px] px-6 relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/5 blur-[60px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-[1400px] text-center relative z-10">
                <div className="space-y-6">
                    <div className="text-[120px] md:text-[150px] font-bold leading-none tracking-tighter">
                        <span className="text-gradient-cool">404</span>
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-foreground">
                            Page not found
                        </h1>
                        <p className="text-text-secondary max-w-[40ch] mx-auto">
                            The page you're looking for doesn't exist or has been moved.
                        </p>
                    </div>
                    <div className="flex justify-center gap-3 pt-4">
                        <Link 
                            to="/"
                            className="px-6 py-3 bg-primary text-foreground font-body rounded border border-primary shadow-primary-btn flex items-center gap-2 hover:bg-primary-hover hover:shadow-primary-btn-hover transition-all duration-200"
                        >
                            <House size={18} weight="bold" />
                            Back home
                        </Link>
                        <button 
                            onClick={() => window.history.back()}
                            className="px-6 py-3 bg-interactive-button border border-border-light text-foreground font-body rounded shadow-raised flex items-center gap-2 hover:bg-white/[0.08] hover:border-white/[0.25] transition-all duration-200"
                        >
                            <ArrowLeft size={18} weight="bold" />
                            Go back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
