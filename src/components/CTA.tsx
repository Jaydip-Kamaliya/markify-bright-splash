import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-24 bg-gradient-primary overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
            Start Protecting Your Images Today
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of creators who trust Markify
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              variant="outline"
              size="xl"
              className="min-w-[240px] bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:text-primary border-primary-foreground"
            >
              Download Free Version
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="min-w-[240px] bg-transparent text-primary-foreground border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="https://jaydipkamaliya.gumroad.com/l/markify-pro" target="_blank" rel="noopener noreferrer">
                Get Pro for ₹199
              </a>
            </Button>
          </div>

          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20">
            <Star className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
            <span className="text-primary-foreground font-medium">
              One-time payment • Lifetime access
            </span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
    </section>
  );
};

export default CTA;
