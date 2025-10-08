import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl mb-8 text-secondary-foreground/90">
            Join hundreds of members who've achieved their fitness goals. Your journey starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" className="group">
              Join Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Schedule Tour
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-secondary-foreground/20">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-primary mb-3" />
              <p className="font-semibold mb-1">Call Us</p>
              <p className="text-secondary-foreground/80">+92 300 1234567</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-primary mb-3" />
              <p className="font-semibold mb-1">Visit Us</p>
              <p className="text-secondary-foreground/80">F-7 Markaz, Islamabad</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-primary mb-3" />
              <p className="font-semibold mb-1">Email Us</p>
              <p className="text-secondary-foreground/80">info@pakistangym.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
