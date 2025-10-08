import { Dumbbell, Heart, Users, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build muscle and increase power with our state-of-the-art equipment and personalized programs.",
  },
  {
    icon: Heart,
    title: "Cardio Fitness",
    description: "Improve endurance and heart health with modern cardio machines and group classes.",
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "Join energizing group sessions including yoga, HIIT, spinning, and martial arts.",
  },
  {
    icon: Zap,
    title: "Personal Training",
    description: "Get one-on-one attention from certified trainers to achieve your specific goals faster.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to reach your fitness goals under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
