import { Sparkles } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Download Free", href: "#" },
    { label: "Upgrade to Pro", href: "#" },
    { label: "Request Custom", href: "#" },
    { label: "Features", href: "#features" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" }, // PLACEHOLDER
    { label: "Terms of Service", href: "#" }, // PLACEHOLDER
    { label: "Contact", href: "#" }, // PLACEHOLDER
  ],
  about: [
    { label: "About Markify", href: "#" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#" },
  ],
};

const Footer = () => {
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
