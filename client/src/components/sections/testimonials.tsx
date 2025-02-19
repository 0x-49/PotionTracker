import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alex K.",
    role: "Professional Trader",
    content: "Potion Tracker Advanced has completely transformed my trading strategy. The real-time alerts and custom notifications have helped me catch multiple profitable trades.",
    avatar: "AK"
  },
  {
    name: "Sarah M.",
    role: "Crypto Analyst",
    content: "The PNL tracking and analytics features are incredible. I can easily monitor multiple wallets and identify winning patterns.",
    avatar: "SM"
  },
  {
    name: "David R.",
    role: "Investment Manager",
    content: "Best-in-class wallet tracking with lightning-fast alerts. The CT Tracker integration is a game-changer for staying ahead of trends.",
    avatar: "DR"
  }
];

export default function Testimonials() {
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
            Trusted by Top Traders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our community has to say about Potion Tracker Advanced
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur border-border/50">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                  </div>
                  <p className="mb-4 text-muted-foreground">"{testimonial.content}"</p>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
