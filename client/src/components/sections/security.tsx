import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Server, Bug, Clock, RefreshCcw } from "lucide-react";

const securityFeatures = [
  {
    title: "Enterprise-Grade Security",
    description: "Military-grade encryption for all data transmission and storage",
    icon: Shield
  },
  {
    title: "Privacy First",
    description: "Zero data collection beyond what's necessary for core functionality",
    icon: Lock
  },
  {
    title: "Redundant Infrastructure",
    description: "Multiple server locations ensuring 99.99% uptime guarantee",
    icon: Server
  },
  {
    title: "Regular Security Audits",
    description: "Continuous security testing and vulnerability assessments",
    icon: Bug
  },
  {
    title: "24/7 Monitoring",
    description: "Round-the-clock system monitoring and instant incident response",
    icon: Clock
  },
  {
    title: "Auto-Recovery Systems",
    description: "Self-healing infrastructure with automatic failover capabilities",
    icon: RefreshCcw
  }
];

export default function Security() {
  return (
    <section className="py-20 bg-gradient-to-b from-background/95 to-background relative overflow-hidden">
      {/* Decorative elements */}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enterprise-Level Security & Reliability
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your success depends on our reliability. We take that responsibility seriously.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-purple-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <feature.icon className="w-8 h-8 text-purple-400" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block border border-purple-500/20 rounded-lg px-6 py-4 bg-card/30 backdrop-blur">
            <p className="text-purple-400 font-semibold">
              Trusted by Professional Traders Processing Millions in Daily Volume
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
