import { motion } from "framer-motion";
import { Zap, Rocket, TrendingUp, Timer } from "lucide-react";

const metrics = [
  {
    title: "$38M+",
    description: "Recent Trader Profits",
    icon: Zap
  },
  {
    title: "500+",
    description: "Wallets Tracked",
    icon: Rocket
  },
  {
    title: "247%",
    description: "Average ROI Increase\nAmong Active Users",
    icon: TrendingUp
  },
  {
    title: "0.1ms",
    description: "Average Response Time",
    icon: Timer
  }
];

export default function Metrics() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <metric.icon className="w-12 h-12 mb-4" />
              <h3 className="text-4xl font-bold mb-2">{metric.title}</h3>
              <p className="text-muted-foreground whitespace-pre-line">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );}
