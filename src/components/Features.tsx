import { Upload, Type, RotateCw, Palette, Circle, Layers, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Drag & Drop Interface",
    description: "Simply drag your images to add watermarks instantly",
  },
  {
    icon: Type,
    title: "Multiple Watermark Types",
    description: "Add text, logo, or both to your images",
  },
  {
    icon: RotateCw,
    title: "Rotate & Scale",
    description: "Full control over watermark size, position, and rotation (-180° to 180°)",
  },
  {
    icon: Palette,
    title: "Auto Color Contrast",
    description: "Automatically adjusts text color for perfect visibility",
  },
  {
    icon: Circle,
    title: "Shape Options",
    description: "Choose from circle, square, or rounded corners for logos",
  },
  {
    icon: Layers,
    title: "Batch Processing",
    description: "Watermark multiple images at once and download all together",
  },
  {
    icon: Shield,
    title: "Offline First",
    description: "Works completely offline. Your images never leave your computer",
  },
  {
    icon: Sparkles,
    title: "Professional Quality",
    description: "High-resolution output with customizable opacity and fonts",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need to Protect Your Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for professionals
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-card rounded-xl shadow-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
