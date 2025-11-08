import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is Markify?",
          a: "Markify is a professional desktop watermarking application that allows you to add text and logo watermarks to your images. It works completely offline and processes all images locally on your computer for maximum privacy.",
        },
        {
          q: "Is Markify really free?",
          a: "Yes! Markify Free is completely free forever with 10 watermarks per day. You can upgrade to Markify Pro for unlimited watermarks and additional features for a one-time payment of ₹199.",
        },
        {
          q: "What operating systems does Markify support?",
          a: "Currently, Markify is available for Windows (.exe). Support for macOS and Linux is planned for future releases.",
        },
      ],
    },
    {
      category: "Installation & Setup",
      questions: [
        {
          q: "How do I install Markify?",
          a: "Simply download the .exe file from our website, run it, and follow the installation wizard. No additional software or dependencies are required.",
        },
        {
          q: "Do I need an internet connection to use Markify?",
          a: "No! Markify works completely offline. Once installed, you can use it without an internet connection. Your images never leave your computer.",
        },
        {
          q: "How do I activate Markify Pro?",
          a: "After purchasing Markify Pro through Gumroad, you’ll receive the direct Markify Pro .exe file. Simply download and install it. No separate activation or license key is required. You’ll have instant access to all Pro features right away.",
        },
      ],
    },
    {
      category: "Features & Usage",
      questions: [
        {
          q: "Can I add both text and logo watermarks?",
          a: "No, currently you can only add one type of watermark at a time.",
        },
        {
          q: "How does batch processing work?",
          a: "Simply drag and drop multiple images into Markify. Apply your watermark settings, and all images will be processed at once. You can then download all watermarked images as a zip file or individually.",
        },
        {
          q: "Can I rotate my watermark?",
          a: "Yes! Markify offers full rotation control from -180° to 180°, allowing you to position your watermark at any angle.",
        },
        {
          q: "What is auto color contrast?",
          a: "Auto color contrast automatically adjusts your text watermark color based on the image background, ensuring your watermark is always visible regardless of the underlying image.",
        },
        {
          q: "What image formats are supported?",
          a: "Markify supports all common image formats including JPG, PNG, WEBP, and more.",
        },
      ],
    },
    {
      category: "Free vs Pro",
      questions: [
        {
          q: "What's the difference between Free and Pro?",
          a: "Markify Free allows 10 watermarks per day with all core features. Markify Pro offers unlimited watermarks, priority support, and lifetime updates for a one-time payment of ₹199.",
        },
        {
          q: "Is Markify Pro a subscription?",
          a: "No! Markify Pro is a one-time purchase. Pay once (₹199) and get lifetime access with all future updates included.",
        },
        {
          q: "Can I upgrade from Free to Pro later?",
          a: "Absolutely! You can upgrade to Pro at any time. Your existing watermark presets and settings will be preserved.",
        },
      ],
    },
    {
      category: "Troubleshooting",
      questions: [
        {
          q: "Markify won't open or crashes on startup. What should I do?",
          a: "Try reinstalling Markify. Make sure your Windows is up to date. If the issue persists, contact our support team at jaydipkamaliya36@gmail.com with details about your system.",
        },
        {
          q: "My watermark looks blurry. How can I fix this?",
          a: "Ensure you're using high-resolution source images. For logos, use PNG files with high DPI. You can also adjust the watermark size to find the optimal clarity.",
        },
        {
          q: "I purchased Pro but haven't received my license key.",
          a: "Check your email spam/junk folder. License keys are sent automatically after purchase via Gumroad. If you still don't see it, contact jaydipkamaliya36@gmail.com with your purchase receipt.",
        },
      ],
    },
    {
      category: "Custom Solutions",
      questions: [
        {
          q: "Can I get a custom version of Markify for my business?",
          a: "Yes! We offer white-label solutions with custom branding, API integration, and enterprise features. Contact us at jaydipkamaliya36@gmail.com to discuss your requirements.",
        },
        {
          q: "Do you offer bulk licensing for teams?",
          a: "Yes, we provide discounted bulk licenses for businesses and teams. Email us at jaydipkamaliya36@gmail.com for a custom quote.",
        },
      ],
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          q: "Are my images uploaded to the cloud?",
          a: "No! All image processing happens locally on your computer. Your images never leave your device, ensuring complete privacy and security.",
        },
        {
          q: "Do you collect any data about my images?",
          a: "We do not collect, store, or have access to any of your images. We may collect anonymous usage statistics to improve the app, but no personal or image data is involved.",
        },
      ],
    },
    {
      category: "Support & Contact",
      questions: [
        {
          q: "How do I get support?",
          a: "Free users can use community support resources. Pro users receive priority email support at jaydipkamaliya36@gmail.com. We aim to respond within 48 hours (business days).",
        },
        {
          q: "Do you offer refunds?",
          a: "Yes, we offer a 10-day limited money-back guarantee. If the software doesn’t work as described,you face unresolved technical issues, or you’re dissatisfied within the first 10 days of purchase, you can request a refund by contacting us at jaydipkamaliya36@gmail.com",
        },
        {
          q: "How can I request a new feature?",
          a: "We love hearing from our users! Send your feature requests to jaydipkamaliya36@gmail.com. Pro users' requests are prioritized.",
        },
      ],
    },
  ];

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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about Markify
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
                {section.category}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {section.questions.map((faq, faqIdx) => (
                  <AccordionItem key={faqIdx} value={`${idx}-${faqIdx}`}>
                    <AccordionTrigger className="text-left text-foreground font-medium">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 p-8 bg-gradient-primary rounded-lg text-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-primary-foreground/90 mb-6">
            Can't find what you're looking for? We're here to help!
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <a href="mailto:jaydipkamaliya36@gmail.com">Contact Support</a>
          </Button>
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

export default FAQ;
