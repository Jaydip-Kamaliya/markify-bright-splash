import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const TermsOfService = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: November 2025</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-foreground/80 leading-relaxed">
              By downloading, installing, or using Markify, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, do not use the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. License Grant</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">2.1 Markify Free</h3>
            <p className="text-foreground/80 leading-relaxed mb-3">
              We grant you a limited, non-exclusive, non-transferable license to use Markify Free for personal 
              or commercial purposes, subject to the following limitations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>10 watermarks per day</li>
              <li>All features available in the free version</li>
              <li>May not redistribute or resell the software</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">2.2 Markify Pro</h3>
            <p className="text-foreground/80 leading-relaxed mb-3">
              Upon purchase of Markify Pro, you receive a lifetime license for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Unlimited watermarks</li>
              <li>All current and future Pro features</li>
              <li>Lifetime updates</li>
              <li>Priority support</li>
              <li>Valid for use on up to 1 device per license</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Acceptable Use</h2>
            <p className="text-foreground/80 leading-relaxed mb-3">You agree to use Markify only for lawful purposes. You may not:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Reverse engineer, decompile, or disassemble the application</li>
              <li>Remove or alter any copyright, trademark, or proprietary notices</li>
              <li>Use the software to watermark content you do not own or have rights to</li>
              <li>Share your Pro license key with others</li>
              <li>Use the software to create illegal or harmful content</li>
              <li>Attempt to circumvent usage limitations in the Free version</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment and Refund Policy</h2>
            <p className="text-foreground/80 leading-relaxed mb-3">
              Markify Pro is a one-time purchase processed securely through Gumroad.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-3">
              We offer a 10-day limited money-back guarantee under the following conditions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>The software does not function as described</li>
              <li>You encounter technical issues that we are unable to resolve</li>
              <li>You are dissatisfied with the product within the first 10 days of purchase</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-3">
              <strong>Refund Amount:</strong> Refunds will be issued after deducting Gumroad’s processing fees and commissions from the original purchase amount. For example, if the product price is ₹199, you will receive the remaining amount after Gumroad’s deductions — typically around 40–50% of the purchase price.
            </p>
            <p className="text-foreground/80 leading-relaxed mt-3">
              <strong>How to Request a Refund:</strong> To request a refund, please contact us at{" "}
              <a href="mailto:jaydipkamaliya36@gmail.com" className="text-primary hover:underline">
                jaydipkamaliya36@gmail.com
              </a>{" "}
              within 10 days of your purchase. Once verified, we will process your eligible refund promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
            <p className="text-foreground/80 leading-relaxed">
              Markify and all associated intellectual property rights are owned by Jaydip Kamaliya. Your images 
              and watermarks remain your property. We claim no ownership over content you create using Markify.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-foreground/80 leading-relaxed">
              Markify is provided "AS IS" without warranties of any kind, either express or implied, including 
              but not limited to warranties of merchantability, fitness for a particular purpose, or 
              non-infringement. We do not guarantee that the software will be error-free or uninterrupted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
            <p className="text-foreground/80 leading-relaxed">
              In no event shall Markify or its developers be liable for any indirect, incidental, special, 
              consequential, or punitive damages, including loss of profits, data, or use, arising out of or 
              related to your use of the software, even if advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Updates and Modifications</h2>
            <p className="text-foreground/80 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue Markify at any time. Pro users will 
              continue to receive updates as long as the software is maintained. We may update these Terms 
              of Service periodically, and continued use constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Support</h2>
            <p className="text-foreground/80 leading-relaxed">
              Free version users receive community support. Pro users receive priority email support. We aim 
              to respond to all support requests within 48 hours (business days).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Termination</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may terminate or suspend your license if you violate these terms. Upon termination, you must 
              cease all use of the software and destroy all copies in your possession.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Governing Law</h2>
            <p className="text-foreground/80 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of India, without 
              regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              For questions about these Terms of Service, please contact:
            </p>
            <p className="text-foreground/80 leading-relaxed mt-3">
              Email:{" "}
              <a href="mailto:jaydipkamaliya36@gmail.com" className="text-primary hover:underline">
                jaydipkamaliya36@gmail.com
              </a>
            </p>
          </section>

          <section className="bg-muted/30 p-6 rounded-lg border border-border">
            <p className="text-foreground/80 leading-relaxed">
              <strong>By using Markify, you acknowledge that you have read, understood, and agree to be bound 
              by these Terms of Service.</strong>
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

export default TermsOfService;
