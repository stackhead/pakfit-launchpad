import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "4,999",
    period: "month",
    description: "Perfect for getting started",
    features: [
      "Gym access (6 AM - 10 PM)",
      "Basic equipment access",
      "Locker facility",
      "Free WiFi",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "7,999",
    period: "month",
    description: "Most popular choice",
    features: [
      "24/7 gym access",
      "All equipment access",
      "Group classes included",
      "Free WiFi & parking",
      "2 guest passes/month",
      "Nutrition consultation",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "12,999",
    period: "month",
    description: "For serious athletes",
    features: [
      "Everything in Premium",
      "Personal trainer (4 sessions)",
      "Diet plan included",
      "Priority equipment access",
      "Unlimited guest passes",
      "Massage therapy (2 sessions)",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20">
      <div className="container px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Membership Plans</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible plans designed to fit your fitness journey and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-2xl transition-all duration-300 ${
                plan.popular
                  ? "border-primary border-4 scale-105 shadow-xl"
                  : "border-2 hover:scale-105"
              } animate-scale-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold">PKR {plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "hero" : "default"}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
