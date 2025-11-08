import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: November 2025</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-foreground/80 leading-relaxed">
              Welcome to Markify. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you use our 
              desktop watermarking application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-foreground/80 leading-relaxed mb-3">
              Markify is designed with privacy in mind. We collect minimal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li><strong>Local Processing:</strong> All image processing happens locally on your computer. Your images never leave your device.</li>
              <li><strong>Usage Data:</strong> We may collect anonymous usage statistics to improve the application (e.g., feature usage, crash reports).</li>
              <li><strong>Payment Information:</strong> When you purchase Markify Pro, payment processing is handled securely by Gumroad. We do not store your payment details.</li>
              <li><strong>Email Address:</strong> Only collected if you contact us for support or subscribe to updates.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Provide and maintain the Markify application</li>
              <li>Process your purchases and deliver license keys</li>
              <li>Send you updates, security alerts, and support messages</li>
              <li>Improve our application based on usage patterns</li>
              <li>Respond to your inquiries and provide customer support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
            <p className="text-foreground/80 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your data. 
              Since Markify processes images locally on your device, your images are never uploaded to our 
              servers. Any data we do collect is encrypted and stored securely.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Services</h2>
            <p className="text-foreground/80 leading-relaxed mb-3">
              Markify integrates with the following third-party services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li><strong>Gumroad:</strong> For payment processing and license delivery. Review <a href="https://gumroad.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Gumroad's Privacy Policy</a>.</li>
              <li><strong>Analytics:</strong> We may use privacy-focused analytics to understand how users interact with our application.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies and Tracking</h2>
            <p className="text-foreground/80 leading-relaxed">
              Our website may use cookies to enhance your browsing experience. Cookies are small files stored 
              on your device that help us remember your preferences. You can disable cookies in your browser 
              settings, though some features may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
            <p className="text-foreground/80 leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-3">
              To exercise these rights, please contact us at{" "}
              <a href="mailto:jaydipkamaliya36@gmail.com" className="text-primary hover:underline">
                jaydipkamaliya36@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
            <p className="text-foreground/80 leading-relaxed">
              Markify is not intended for use by children under the age of 13. We do not knowingly collect 
              personal information from children. If you believe we have collected data from a child, please 
              contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Policy</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by 
              posting the new policy on this page and updating the "Last updated" date. We encourage you 
              to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed">
              If you have any questions about this privacy policy or our practices, please contact us at:
            </p>
            <p className="text-foreground/80 leading-relaxed mt-3">
              Email:{" "}
              <a href="mailto:jaydipkamaliya36@gmail.com" className="text-primary hover:underline">
                jaydipkamaliya36@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/">
            <Button variant="default" size="lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
