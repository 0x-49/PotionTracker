import { motion } from "framer-motion";

const insightCards = [
  {
    title: "Wallet Analysis",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Wallet_Analysis.png",
    points: [
      "Track historical performance metrics",
      "Analyze trading patterns and frequencies",
      "Monitor portfolio composition changes"
    ]
  },
  {
    title: "Market Intelligence",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Market_Intelligence.png",
    points: [
      "Identify emerging market trends",
      "Track token accumulation patterns",
      "Monitor whale wallet movements"
    ]
  },
  {
    title: "Strategy Optimization",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Strategy_Optimisation.png",
    points: [
      "Backtest trading strategies",
      "Optimize entry and exit points",
      "Analyze risk-reward ratios"
    ]
  },
  {
    title: "Network Analysis",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Network_Analysis.png",
    points: [
      "Map trader relationships",
      "Track fund flows between wallets",
      "Identify influential traders"
    ]
  }
];

export default function DeepDive() {
  return (
    <section className="py-20 bg-gradient-to-b from-background/95 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced Trading Insights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Unlock deeper understanding of market movements and trader behavior
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {insightCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-6 rounded-lg bg-card/50 backdrop-blur border border-border/50 hover:border-purple-500/20 transition-all duration-300">
                <div className="mb-4 relative aspect-square **w-5/10** mx-auto overflow-hidden rounded-lg"> {/* Changed w-full to w-7/10 and added mx-auto */}
                  <img
                    src={card.image}
                    alt={`${card.title} illustration`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">{card.title}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {card.points.map((point, pointIndex) => (
                    <li key={pointIndex}>• {point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
