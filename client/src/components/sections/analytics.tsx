import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ChartBar, LineChart, Workflow, Table2, AlertCircle } from "lucide-react";

const features = [
  {
    title: "Real-time PNL Tracking",
    description: "Monitor profit and loss across all tracked wallets with millisecond precision",
    icon: LineChart,
  },
  {
    title: "Trade Pattern Analysis",
    description: "Identify winning patterns and optimize your strategy with ML-powered insights",
    icon: ChartBar,
  },
  {
    title: "Custom Alert Workflows",
    description: "Create sophisticated alert chains with conditional triggers and filters",
    icon: Workflow,
  },
  {
    title: "Performance Analytics",
    description: "Track your success rate, average gains, and portfolio growth over time",
    icon: Table2,
  }
];

export default function Analytics() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-purple-500/5 to-background/0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced Analytics Engine
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Turn data into actionable insights with our powerful analytics suite
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
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
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
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
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-6"
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-purple-400 mt-1" />
            <div>
              <h4 className="text-lg font-semibold mb-2">Real Example: $200 to $20,000 in 5 Minutes</h4>
              <p className="text-muted-foreground">
                "Using Potion Tracker's AI meta detection and instant alerts, I turned $200 into $20,000 on a single trade. 
                The platform's real-time notifications and pattern recognition were crucial for catching this opportunity early."
                <span className="block mt-2 text-sm">- Verified Trader Story from our Community</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
