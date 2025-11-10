import { Sparkles } from "lucide-react";
import { useDownloadCounter } from "@/hooks/useDownloadCounter";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const footerLinks: {
  product: FooterLink[];
  legal: FooterLink[];
  about: FooterLink[];
} = {
  product: [
    { label: "Download Free", href: "https://github.com/Jaydip-Kamaliya/markify-bright-splash/releases/download/v1.0.0/Markify.Free.Setup.exe" },
    { label: "Upgrade to Pro", href: "https://jaydipkamaliya.gumroad.com/l/markify-pro", external: true },
    { label: "Request Custom", href: "mailto:jaydipkamaliya36@gmail.com?subject=Custom%20Markify%20Solution%20Request" },
    { label: "Features", href: "#features" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Contact", href: "mailto:jaydipkamaliya36@gmail.com" },
  ],
  about: [
    { label: "About Markify", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "/faq" },
  ],
};

const Footer = () => {
  const { incrementDownload } = useDownloadCounter();

  const handleLinkClick = (label: string) => {
    if (label === "Download Free") {
      incrementDownload();
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Markify</span>
            </div>
            <p className="text-background/70 text-sm">
              Professional Watermarking Made Simple
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                    onClick={() => handleLinkClick(link.label)}
                    {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            © 2025 Markify. All rights reserved.
          </p>
          <p className="text-background/70 text-sm">
            Made by Jaydip Kamaliya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
