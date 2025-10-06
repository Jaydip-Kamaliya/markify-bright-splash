import { Upload, Sliders, Download } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Upload,
    title: "Upload",
    description: "Drag and drop your images or click to browse",
  },
  {
    number: 2,
    icon: Sliders,
    title: "Customize",
    description: "Add text or logo, adjust position, rotation, and style",
  },
  {
    number: 3,
    icon: Download,
    title: "Download",
    description: "Process all images and download with one click",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to watermark your images
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-primary opacity-30" />
              )}

              {/* Step number badge */}
              <div className="relative w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow z-10">
                <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
              </div>

              {/* Step content */}
              <div className="space-y-2">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
