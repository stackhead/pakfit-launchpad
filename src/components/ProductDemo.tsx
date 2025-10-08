import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const ProductDemo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="container px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            See NeuraMind in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how NeuraMind adapts to your workflow
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-2xl overflow-hidden glass-card p-2">
            <img
              src={dashboardImage}
              alt="NeuraMind dashboard showing AI collaboration tools, analytics, and team insights"
              className="w-full h-auto rounded-xl"
            />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDemo;
