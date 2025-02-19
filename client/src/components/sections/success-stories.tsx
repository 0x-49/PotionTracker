import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Timer, Wallet } from "lucide-react";

const stories = [
  {
    trader: "Durant",
    profit: "8M+",
    timeframe: "December 2024",
    description: "Leveraging real-time alerts and custom notifications to catch multiple profitable trades",
    icon: TrendingUp
  },
  {
    trader: "Nim",
    profit: "12M+",
    timeframe: "Single Month",
    description: "Combined profits across multiple wallets using advanced tracking features",
    icon: Wallet
  },
  {
    trader: "TTG",
    profit: "18M+",
    timeframe: "Recent Bull Run",
    description: "Maximizing gains through instant notifications and market monitoring",
    icon: Timer
  }
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven Track Record
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join the ranks of successful traders who have transformed their trading with Potion Tracker Advanced
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
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
                    <story.icon className="w-10 h-10 text-purple-400" />
                    <div>
                      <CardTitle className="text-xl">Top Trader: {story.trader}</CardTitle>
                      <p className="text-3xl font-bold text-purple-400 mt-2">${story.profit}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-purple-400/80">{story.timeframe}</p>
                    <p className="text-muted-foreground">{story.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            *Results shown are from verified top traders. Individual results may vary based on market conditions and trading strategy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
