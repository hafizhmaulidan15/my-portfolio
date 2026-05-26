import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const GlassPanel = ({ children, className, variant = 'primary', overflowVisible = false, ...props }) => {
  const variants = {
    primary: "bg-surface text-foreground p-6 rounded-lg border border-border shadow-[rgba(255,255,255,0.12)_0px_-10px_50px_-10px_inset] hover:border-border-light hover:shadow-[rgba(255,255,255,0.15)_0px_-10px_50px_-10px_inset]",
    secondary: "bg-background text-foreground p-4 rounded-md border border-white/[0.08] hover:border-border hover:bg-[#0F0F12]",
    minimal: "bg-transparent text-foreground p-4",
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.005 }}
      transition={{ type: "spring", stiffness: 300, damping: 25, duration: 0.2 }}
      className={cn(
        "relative group transition-all duration-200",
        variants[variant],
        overflowVisible ? "overflow-visible" : "overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
