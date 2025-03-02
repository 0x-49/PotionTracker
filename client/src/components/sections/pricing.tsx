import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free Discord + Tracker",
    price: "0",
    period: "lifetime",
    features: [
      "Track up to 5 wallets",
      "20 Notifications per Minute",
      "200 Notifications per Hour",
      "1000 Notifications per Day",
      "Custom sounds and wallet tagging",
      "Community moderator support",
      "Free Discord access"
    ]
  },
  {
    name: "Discord Access (Weekly)",
    price: "60",
    period: "/week",
    features: [
      "Live crypto trading education",
      "Exclusive live streams",
      "Custom bot analysis",
      "Crypto Twitter insights",
      "Lightning-speed updates",
      "Social media analysis",
      "Top holder tracking"
    ]
  },
  {
    name: "Discord Access (Crypto)",
    price: "150",
    period: "/month",
    features: [
      "Live crypto trading education",
      "Exclusive live streams",
      "Custom bot analysis",
      "Crypto Twitter insights",
      "Lightning-speed updates",
      "Social media analysis",
      "Top holder tracking"
    ]
  },
  {
    name: "Tracker Starter",
    price: "40",
    period: "/month",
    features: [
      "Track up to 20 wallets",
      "60 Notifications per Minute",
      "600 Notifications per Hour",
      "4000 Notifications per Day",
      "Custom sounds and wallet tagging",
      "Discord access not included"
    ]
  },
  {
    name: "Tracker Advanced",
    price: "120",
    period: "/month",
    popular: true,
    features: [
      "Track up to 250 wallets",
      "120 Notifications per Minute",
      "1200 Notifications per Hour",
      "20000 Notifications per Day",
      "Custom sounds and wallet tagging",
      "Discord access not included"
    ]
  },
  {
    name: "Tracker Whale",
    price: "200",
    period: "/month",
    features: [
      "Track up to 500 wallets",
      "UNLIMITED Notifications",
      "No rate limits",
      "Premium features access",
      "Custom sounds and wallet tagging",
      "Discord access not included"
    ]
  }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Plan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your trading needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`relative h-full ${plan.popular ? 'border-purple-500' : 'border-border/50'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-purple-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-8"
                    onClick={() => window.open("https://whop.com/potiontracker-advanced/?a=digitalartlab", "_blank")}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
