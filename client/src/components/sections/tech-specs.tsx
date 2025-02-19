import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Zap, Shield, Clock, Activity, Network } from "lucide-react";

const specs = [
  {
    title: "Lightning-Fast Updates",
    description: "100ms alert latency with real-time blockchain monitoring",
    metric: "<100ms",
    icon: Zap
  },
  {
    title: "Scalable Tracking",
    description: "Monitor up to 500 wallets simultaneously with zero performance impact",
    metric: "500x",
    icon: Network
  },
  {
    title: "Notification Throughput",
    description: "Process up to 1200 notifications per hour in Advanced tier",
    metric: "1200/hr",
    icon: Activity
  },
  {
    title: "System Uptime",
    description: "99.99% uptime with redundant infrastructure",
    metric: "99.99%",
    icon: Clock
  },
  {
    title: "Processing Power",
    description: "Dedicated high-performance servers for instant analysis",
    metric: "24/7",
    icon: Cpu
  },
  {
    title: "Data Security",
    description: "Enterprise-grade encryption and security protocols",
    metric: "256-bit",
    icon: Shield
  }
];

export default function TechSpecs() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Professional Traders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade infrastructure powering your trading success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-purple-500/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <spec.icon className="w-8 h-8 text-purple-400" />
                    <div>
                      <CardTitle>{spec.title}</CardTitle>
                      <p className="text-2xl font-bold text-purple-400 mt-2">
                        {spec.metric}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{spec.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
