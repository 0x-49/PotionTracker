import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, ChartBar, Wallet, Zap, Twitter, Settings } from "lucide-react";

const features = [
  {
    title: "Real-time Wallet Tracking",
    description: "Monitor on-chain activity with minimal latency for up to 500 wallets simultaneously",
    icon: Wallet
  },
  {
    title: "Custom Notifications",
    description: "Set up personalized alerts with custom sounds, colors & tags for different wallets",
    icon: Bell
  },
  {
    title: "PNL Analysis",
    description: "Track profit and loss metrics across wallets and identify best performing trades",
    icon: ChartBar
  },
  {
    title: "CT Tracker Integration",
    description: "Monitor Crypto Twitter in real-time for emerging trends and influencer activity",
    icon: Twitter
  },
  {
    title: "Lightning Fast Alerts",
    description: "Receive instant notifications about important wallet activities and market moves",
    icon: Zap
  },
  {
    title: "Customizable Interface",
    description: "Tailor the tracking experience with advanced filtering and display options",
    icon: Settings
  }
];

export default function Features() {
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
            Advanced Features for Modern Traders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Potion Tracker Advanced combines powerful tracking capabilities with intuitive customization to give you the edge in meme coin trading
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur border-border/50">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-purple-400 mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
