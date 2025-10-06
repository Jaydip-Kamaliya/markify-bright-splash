import Hero from "@/components/Hero";
import PricingCards from "@/components/PricingCards";
import Features from "@/components/Features";
import ComparisonTable from "@/components/ComparisonTable";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <PricingCards />
      <Features />
      <ComparisonTable />
      <UseCases />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
