import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, ChartBar, Wallet, Zap, Twitter, Settings } from "lucide-react";

const features = [
  {
    title: "Real-time Wallet Tracking",
    description: "Independently monitor on-chain activity with minimal latency for up to 500 wallets simultaneously, gaining a direct edge in the market.",
    icon: Wallet,
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Real-Time_wallet_Tracking.png"
  },
  {
    title: "Custom Notifications",
    description: "Independently set up personalized alerts with custom sounds, colors & tags for different wallets, ensuring you never miss a critical move.",
    icon: Bell,
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Custom_Notifications.png"
  },
  {
    title: "PNL Analysis",
    description: "Independently track profit and loss metrics across wallets and identify your best performing trades for optimized decision-making.",
    icon: ChartBar,
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/PNL_Analysis.png"
  },
  {
    title: "CT Tracker Integration",
    description: "Independently monitor Crypto Twitter in real-time for emerging trends and influencer activity, directly integrating market sentiment into your analysis.",
    icon: Twitter,
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Ct-Tracker_Integration.png"
  },
  {
    title: "Lightning Fast Alerts",
    description: "Independently receive instant notifications about important wallet activities and market moves, giving you a crucial first-mover advantage.",
    icon: Zap,
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Lightnight_FastAlerts.png"
  },
  {
    title: "Customizable Interface",
    description: "Independently tailor the tracking experience with advanced filtering and display options, creating a personalized and efficient trading environment.",
    icon: Settings,
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Customizable_Interface.png"
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
              <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-purple-500/20 transition-all duration-300">
                <div className="relative aspect-square w-full overflow-hidden rounded-t-lg">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
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
