import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const GlassPanel = ({ children, className, variant = 'primary', overflowVisible = false, noHover = false, ...props }) => {
  const variants = {
    primary: "bg-surface text-foreground p-6 rounded-lg border border-border shadow-[rgba(255,255,255,0.12)_0px_-10px_50px_-10px_inset] hover:border-border-light hover:shadow-[rgba(255,255,255,0.15)_0px_-10px_50px_-10px_inset]",
    secondary: "bg-background text-foreground p-4 rounded-md border border-white/[0.08] hover:border-border hover:bg-[#0F0F12]",
    minimal: "bg-transparent text-foreground p-4",
    elevated: "bg-surface text-foreground p-6 rounded-lg shadow-lifted hover:shadow-[0_0_30px_rgba(20,71,230,0.08)] border border-transparent hover:border-primary/20",
    borderless: "bg-surface text-foreground p-6 rounded-lg hover:bg-surface-hover transition-colors",
    overlap: "bg-surface/80 text-foreground p-6 rounded-lg backdrop-blur-sm border border-border shadow-floating hover:shadow-lifted",
  };

  return (
    <motion.div
      whileHover={noHover ? undefined : { y: -4, scale: 1.005 }}
      transition={{ type: "spring", stiffness: 300, damping: 25, duration: 0.2 }}
      className={cn(
        "relative group transition-all duration-200",
        variants[variant] || variants.primary,
        overflowVisible ? "overflow-visible" : "overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
