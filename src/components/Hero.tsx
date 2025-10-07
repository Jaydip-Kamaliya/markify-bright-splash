import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Logo Icon */}
          <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow animate-scale-in">
            <Sparkles className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground max-w-4xl leading-tight">
            Markify – Smart, Simple, Powerful Watermarking
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl">
            Professional watermarking tool for photographers, designers, and creators. Add text and logo watermarks in seconds.
          </p>

          {/* Problem Statement */}
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl">
            Protect your images from unauthorized use while maintaining professional quality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button variant="hero" size="xl" className="min-w-[220px]" asChild>
              <a href="https://github.com/Jaydip-Kamaliya/markify-bright-splash/releases/download/v1.0.0/Markify.Free.Setup.exe" download>
                Download Free Version
              </a>
            </Button>
            <Button variant="outline" size="xl" className="min-w-[220px]" asChild>
              <a href="https://jaydipkamaliya.gumroad.com/l/markify-pro" target="_blank" rel="noopener noreferrer">
                Upgrade to Pro
              </a>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="mt-12 w-full max-w-5xl animate-scale-in">
            <img
              src={heroMockup}
              alt="Markify desktop application interface showing watermarking tools"
              className="w-full h-auto rounded-2xl shadow-elegant border border-border"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
};

export default Hero;
