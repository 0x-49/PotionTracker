import { motion } from "framer-motion";
// Remove or properly declare the 'image' reference
const features = [
  {
    title: "Missed Opportunities",
    description: "Late to promising trades due to slow or unreliable tracking tools",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Missed_Opportunities.png"
  },
  {
    title: "Information Overload",
    description: "Struggling to filter signal from noise in the crypto market",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Information_Overload.png"
  },
  {
    title: "Manual Tracking",
    description: "Wasting time monitoring multiple wallets and platforms manually",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Manual_Tracking.png"
  },
  {
    title: "Delayed Notifications",
    description: "Missing crucial market moves due to slow alert systems",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Delayed_Notifications.png"
  },
  {
    title: "Limited Insights",
    description: "Unable to identify patterns in successful traders' strategies",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Limited_Insights.png"
  },
  {
    title: "Technical Complexity",
    description: "Dealing with complicated and unreliable tracking solutions",
    image: "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Technical_Complexity.png"
  }
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-background/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 rounded-lg bg-card/50 backdrop-blur border border-border/50 hover:border-purple-500/20 transition-all duration-300 h-full flex flex-col">
                <div className="mb-6 relative aspect-square w-full overflow-hidden rounded-lg bg-card/50">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}