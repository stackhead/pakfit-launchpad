import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Index;
