import { Mail, Phone, MapPin, Factory } from "lucide-react";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Explore",
      links: [
        { label: "About", href: "/about" },
        { label: "Skills", href: "/skills" },
        { label: "Experience", href: "/experience" },
        { label: "Projects", href: "/projects" },
      ],
    },
    {
      title: "Operations",
      links: [
        { label: "Impact", href: "/impact" },
        { label: "Contact", href: "/contact" },
        { label: "Achievements", href: "/experience#leadership-journal", pulse: true },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={16} className="text-[#3ca2fa]" />,
      text: "mhafizh.maulidan@gmail.com",
      href: "mailto:mhafizh.maulidan@gmail.com",
    },
    {
      icon: <Phone size={16} className="text-[#3ca2fa]" />,
      text: "+62 896-0381-8819",
      href: "tel:+6289603818819",
    },
    {
      icon: <MapPin size={16} className="text-[#3ca2fa]" />,
      text: "Tasikmalaya / Bogor, Indonesia",
    },
  ];

  const socialLinks = [
    { icon: <GithubLogo size={18} weight="fill" />, label: "GitHub", href: "https://github.com/hafizhmaulidan15" },
    { icon: <LinkedinLogo size={18} weight="fill" />, label: "LinkedIn", href: "https://www.linkedin.com/in/hafizhmaulidan/" },
  ];

  return (
    <footer className="bg-background relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-12 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white">
                <Factory size={18} weight="bold" />
              </span>
              <span className="text-foreground text-xl font-bold tracking-tight">Hafizh</span>
              <span className="text-text-tertiary text-sm">• Dairy Ops</span>
            </div>
            <p className="text-sm leading-relaxed text-text-secondary max-w-[28ch] text-pretty">
              Head of Unit — Rumah Susu Indonesia. Scaling dairy production from intake to cold chain with data-driven SOPs and lean team execution.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-foreground text-sm font-semibold tracking-wide uppercase mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a href={link.href} className="text-sm text-text-secondary hover:text-[#3ca2fa] transition-colors">
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-0 -right-3 w-2 h-2 rounded-full bg-[#3ca2fa] animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-foreground text-sm font-semibold tracking-wide uppercase mb-6">Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a href={item.href} className="text-sm text-text-secondary hover:text-[#3ca2fa] transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm text-text-secondary">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-border my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          <div className="flex space-x-4 text-text-tertiary">
            {socialLinks.map(({ icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center hover:text-[#3ca2fa] hover:border-[#3ca2fa]/30 transition-colors">
                {icon}
              </a>
            ))}
          </div>
          <p className="text-center md:text-left font-mono text-xs tracking-wide text-text-tertiary">
            &copy; {currentYear} Muhammad Hafizh Maulidan — Ops • Dairy Manufacturing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
