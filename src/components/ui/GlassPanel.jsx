import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const GlassPanel = ({ children, className, ...props }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(
        "relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl",
        "shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        // Liquid Glass Refraction (Inner shadow and border)
        "after:absolute after:inset-0 after:rounded-[2.5rem] after:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] after:pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
