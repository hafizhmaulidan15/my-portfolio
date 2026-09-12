import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <section className="min-h-[70dvh] flex items-center justify-center py-24 md:py-32 bg-transparent">
      <div className="container mx-auto px-6 lg:px-8 max-w-[720px] text-center">
        <div className="w-14 h-14 rounded-full bg-success/10 border border-success/15 flex items-center justify-center mx-auto">
          <i className="bi bi-check-lg text-[24px] text-success"></i>
        </div>
        <h1 className="mt-6 font-display text-[32px] md:text-[40px] font-[800] tracking-[-0.03em] leading-[0.9] text-foreground">Message sent.</h1>
        <p className="mt-4 text-[16px] leading-relaxed text-text-secondary max-w-[42ch] mx-auto text-pretty">
          Thanks for reaching out — I reply within 24 hours. If it is urgent, email me directly at{' '}
          <a href="mailto:mhafizh.maulidan@gmail.com" className="underline decoration-primary/30 underline-offset-4 hover:decoration-primary text-foreground">mhafizh.maulidan@gmail.com</a>.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link to="/" className="px-6 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors">Back to home</Link>
          <Link to="/achievements" className="px-6 py-2.5 rounded-full border border-border text-sm font-medium hover:border-foreground/20 transition-colors">View achievements</Link>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
