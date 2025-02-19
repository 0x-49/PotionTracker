import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Zap, Shield, Clock, Activity, Network, CheckCircle } from "lucide-react";

const specs = [
  {
    title: "Lightning-Fast Updates",
    description: "Industry-leading 100ms alert latency with real-time blockchain monitoring. Be the first to know about profitable opportunities.",
    metric: "<100ms",
    icon: Zap,
    features: ["Zero missed opportunities", "Instant notifications", "Real-time data"]
  },
  {
    title: "Scalable Tracking",
    description: "Monitor up to 500 wallets simultaneously with zero performance impact. Perfect for professional trading operations.",
    metric: "500x",
    icon: Network,
    features: ["Unlimited concurrent tracking", "Zero latency impact", "Custom filtering"]
  },
  {
    title: "Notification Throughput",
    description: "Process up to 1200 notifications per hour in Advanced tier. Never miss a trading signal with our enterprise infrastructure.",
    metric: "1200/hr",
    icon: Activity,
    features: ["Multi-channel alerts", "Custom webhooks", "Priority processing"]
  },
  {
    title: "System Uptime",
    description: "99.99% uptime with redundant infrastructure across multiple regions. Your trading never stops, neither do we.",
    metric: "99.99%",
    icon: Clock,
    features: ["24/7 monitoring", "Automatic failover", "Zero downtime updates"]
  },
  {
    title: "Processing Power",
    description: "Dedicated high-performance servers with real-time data processing. Making split-second decisions has never been easier.",
    metric: "24/7",
    icon: Cpu,
    features: ["Advanced algorithms", "ML-powered analysis", "Instant computations"]
  },
  {
    title: "Data Security",
    description: "Military-grade encryption and security protocols protect your valuable trading strategies and wallet data.",
    metric: "256-bit",
    icon: Shield,
    features: ["End-to-end encryption", "Secure API access", "Regular security audits"]
  }
];

export default function TechSpecs() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/95 relative">
      {/* Enhanced background with subtle pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-background/0 to-purple-500/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Enterprise-Grade Infrastructure
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for professional traders who demand nothing but the best. Our infrastructure powers millions in daily trading volume.
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
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-purple-500/10">
                      <spec.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{spec.title}</CardTitle>
                      <p className="text-2xl font-bold text-purple-400 mt-2">
                        {spec.metric}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{spec.description}</p>
                  <ul className="space-y-2">
                    {spec.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-purple-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Added social proof element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block border border-purple-500/20 rounded-lg px-6 py-4 bg-card/30 backdrop-blur">
            <p className="text-purple-400 font-semibold">
              "The fastest and most reliable trading infrastructure I've ever used" - Top 10 Solana Trader
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}