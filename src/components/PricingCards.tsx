import { Download, Crown, Settings, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pricingPlans = [
  {
    icon: Download,
    title: "Markify Free",
    badge: null,
    features: [
      "10 watermarks per day",
      "Text & logo watermarks",
      "Batch processing",
      "Offline use",
    ],
    price: "Free Forever",
    cta: "Download Free (.exe)",
    ctaLink: "#", // PLACEHOLDER
    variant: "outline" as const,
  },
  {
    icon: Crown,
    title: "Markify Pro",
    badge: "Most Popular",
    features: [
      "Unlimited watermarks",
      "All Free features",
      "Priority support",
      "Lifetime updates",
    ],
    price: "₹199 One-Time",
    cta: "Get Pro Version",
    ctaLink: "https://jaydipkamaliya.gumroad.com/l/markify-pro",
    variant: "premium" as const,
  },
  {
    icon: Settings,
    title: "Custom Solution",
    badge: null,
    features: [
      "White-label branding",
      "Custom features",
      "API integration",
      "Enterprise support",
    ],
    price: "Contact for Pricing",
    cta: "Request Custom",
    ctaLink: "mailto:jaydipkamaliya36@gmail.com?subject=Custom%20Markify%20Solution%20Request",
    variant: "outline" as const,
  },
];

const PricingCards = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free or upgrade to unlock unlimited watermarking power
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.title}
              className={`relative transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 animate-fade-in ${
                plan.badge ? "border-2 border-primary shadow-card scale-105" : "border border-border"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1">
                  {plan.badge}
                </Badge>
              )}

              <CardHeader className="text-center space-y-4 pb-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-card">
                  <plan.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{plan.title}</h3>
                <p className="text-3xl font-bold text-primary">{plan.price}</p>
              </CardHeader>

              <CardContent className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Button
                  variant={plan.variant}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href={plan.ctaLink}>{plan.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
