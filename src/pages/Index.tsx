import AIHero from "@/components/AIHero";
import AIFeatures from "@/components/AIFeatures";
import ProductDemo from "@/components/ProductDemo";
import AIPricing from "@/components/AIPricing";
import AITestimonials from "@/components/AITestimonials";
import Newsletter from "@/components/Newsletter";
import AIFooter from "@/components/AIFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AIHero />
      <AIFeatures />
      <ProductDemo />
      <AIPricing />
      <AITestimonials />
      <Newsletter />
      <AIFooter />
    </div>
  );
};

export default Index;
