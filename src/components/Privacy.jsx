const Privacy = () => {
  return (
    <section className="py-24 md:py-32 bg-transparent">
      <div className="container mx-auto px-6 lg:px-8 max-w-[720px]">
        <p className="font-mono text-[11px] tracking-[0.18em] text-text-tertiary uppercase">Legal</p>
        <h1 className="mt-3 font-display text-[32px] md:text-[40px] font-[800] tracking-[-0.03em] leading-[0.9]">Privacy Policy</h1>
        <p className="mt-2 text-sm text-text-tertiary">Last updated 12 Sep 2026</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-text-secondary">
          <p>This site is a personal portfolio. It does not sell data or run ads.</p>

          <div className="space-y-3">
            <h2 className="font-semibold text-foreground text-[18px] tracking-tight">What is collected</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Contact form: name, email, subject, message — sent via Web3Forms to the owner inbox.</li>
              <li>Production Impact: reads public Google Sheets summary via Apps Script (no auth, no PII).</li>
              <li>Analytics: Vercel Web Analytics (privacy-friendly, no cookies).</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-semibold text-foreground text-[18px] tracking-tight">How it is used</h2>
            <p>Form data is used only to reply to your inquiry. No marketing, no resale. Production data is displayed as aggregates.</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-semibold text-foreground text-[18px] tracking-tight">Retention</h2>
            <p>Emails stay in the inbox until deleted on request. Cache for production data is 15 minutes in your browser (localStorage).</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-semibold text-foreground text-[18px] tracking-tight">Contact</h2>
            <p>Questions or deletion request: <a href="mailto:mhafizh.maulidan@gmail.com" className="underline decoration-primary/30 underline-offset-4 hover:decoration-primary text-foreground">mhafizh.maulidan@gmail.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
