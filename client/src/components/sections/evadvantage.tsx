import { motion } from "framer-motion";

export default function EVAdvantage() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Edge in the Market
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Maximize your expected value with advanced tracking capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur border border-border/50 hover:border-purple-500/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Real-Time Alpha</h3>
              <p className="text-muted-foreground">Track successful traders' moves as they happen, giving you first-mover advantage on profitable opportunities.</p>
            </div>
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur border border-border/50 hover:border-purple-500/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Pattern Recognition</h3>
              <p className="text-muted-foreground">Identify winning strategies and recurring patterns in top traders' behavior.</p>
            </div>
            <div className="p-6 rounded-lg bg-card/50 backdrop-blur border border-border/50 hover:border-purple-500/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Risk Management</h3>
              <p className="text-muted-foreground">Set precise entry and exit points based on real market data and proven trader behavior.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-lg bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent p-1">
              <div className="w-full h-full rounded-lg bg-card/50 backdrop-blur border border-border/50 p-8 flex items-center justify-center relative">
                <img
                  src="https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/Average_RIO_Increase.png"
                  alt="Average ROI Increase"
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
              
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}