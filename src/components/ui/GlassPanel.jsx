import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const GlassPanel = ({ children, className, variant = 'primary', overflowVisible = false, noHover = false, ...props }) => {
  const variants = {
    primary: "bg-surface text-foreground p-6 rounded-lg shadow-lifted hover:shadow-[0_0_30px_rgba(17,129,255,0.06)]",
    secondary: "bg-background text-foreground p-4 rounded-md border border-white/[0.06] hover:bg-[#0F0F12]",
    minimal: "bg-transparent text-foreground p-4",
    elevated: "bg-surface text-foreground p-6 rounded-lg shadow-lifted hover:shadow-[0_0_30px_rgba(17,129,255,0.08)] border border-transparent hover:border-primary/20",
    borderless: "bg-surface/60 text-foreground p-6 rounded-lg backdrop-blur-sm hover:bg-surface transition-colors",
    overlap: "bg-surface/70 text-foreground p-6 rounded-lg backdrop-blur-sm shadow-floating hover:shadow-lifted",
  };

  return (
    <motion.div
      whileHover={noHover ? undefined : { y: -4, scale: 1.005 }}
      transition={{ type: "spring", stiffness: 300, damping: 25, duration: 0.2 }}
      className={cn(
        "relative group transition-all duration-300",
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
