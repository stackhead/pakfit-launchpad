import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechFlow",
    content: "NeuraMind transformed how our team collaborates. The AI insights are incredibly accurate and have boosted our productivity by 40%.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Product Manager, Innovate Inc",
    content: "The automated workflows are a game-changer. We've cut down meeting time by half and ship features 2x faster.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Aisha Patel",
    role: "CEO, CreativeHub",
    content: "Security was our top concern. NeuraMind's enterprise-grade protection gives us peace of mind while we scale.",
    rating: 5,
    avatar: "AP",
  },
];

const AITestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background pointer-events-none" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Loved by <span className="gradient-text">Teams</span> Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our users are saying about NeuraMind
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass-card border-2">
                <CardContent className="pt-12 pb-12">
                  <div className="flex justify-center mb-6">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl mb-8 italic text-center leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="glass-card"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="glass-card"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITestimonials;
