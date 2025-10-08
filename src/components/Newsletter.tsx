import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been added to the beta waitlist.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background pointer-events-none" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Join the <span className="gradient-text">Beta</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Be among the first to experience the future of AI-powered collaboration. Get early access and exclusive updates.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 glass-card text-lg"
              required
            />
            <Button type="submit" size="lg" className="h-12 px-8 text-lg">
              Join the Beta
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
