import { Camera, Palette, Video, Briefcase } from "lucide-react";

const useCases = [
  {
    icon: Camera,
    title: "Photographers",
    description: "Protect your portfolio and client work",
  },
  {
    icon: Palette,
    title: "Designers",
    description: "Brand your creative projects",
  },
  {
    icon: Video,
    title: "Content Creators",
    description: "Secure your social media content",
  },
  {
    icon: Briefcase,
    title: "Businesses",
    description: "Watermark product images and marketing materials",
  },
];

const UseCases = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Built For Professionals Like You
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by thousands of creators worldwide
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group p-8 bg-card rounded-xl shadow-card border border-border text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-card">
                <useCase.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
