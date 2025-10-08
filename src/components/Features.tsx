import { Clock, Shield, Trophy, Wifi } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Train on your schedule with round-the-clock gym access",
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "CCTV monitoring and trained staff for your safety",
  },
  {
    icon: Trophy,
    title: "Expert Trainers",
    description: "Certified professionals with years of experience",
  },
  {
    icon: Wifi,
    title: "Modern Amenities",
    description: "Free WiFi, lockers, showers, and parking",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            We're not just a gym - we're your fitness partner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-secondary-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
