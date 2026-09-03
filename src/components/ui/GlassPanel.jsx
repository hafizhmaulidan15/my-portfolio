import { cn } from '../../lib/utils';

export const GlassPanel = ({ children, className, variant = 'primary', overflowVisible = false, noHover = true, ...props }) => {
  const isInteractive = !noHover || props.onClick || props.to || props.href;
  const variants = {
    // true glass  only for featured/hero
    elevated: "bg-surface text-foreground p-6 rounded-lg shadow-lifted border border-border backdrop-blur-[6px] hover:border-primary/20",
    // plain  default, no blur, no lift
    plain: "bg-surface text-foreground p-6 rounded-lg border border-border",
    // legacy aliases -> plain (keeps old calls working but without slop)
    primary: "bg-surface text-foreground p-6 rounded-lg border border-border",
    secondary: "bg-background text-foreground p-4 rounded-md border border-border",
    minimal: "bg-transparent text-foreground p-4",
    borderless: "bg-surface text-foreground p-6 rounded-lg border border-border",
    overlap: "bg-surface text-foreground p-6 rounded-lg border border-border",
  };

  return (
    <div
      className={cn(
        "relative group transition-colors duration-200",
        isInteractive ? "hover:border-border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background" : "",
        variants[variant] || variants.plain,
        overflowVisible ? "overflow-visible" : "overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
