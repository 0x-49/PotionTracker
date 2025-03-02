import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, BarChart3, Trophy, Zap, Timer } from "lucide-react";
import { Helmet } from "react-helmet";

export default function Hero() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "PotionTracker Pro",
    "description": "Elite crypto trading platform with military-grade tracking and millisecond precision for monitoring up to 500 wallets",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "100"
    }
  };

  return (
    <>
      <Helmet>
        <title>PotionTracker Pro - Transform On-Chain Data Into Life-Changing Profits</title>
        <meta name="description" content="Elite crypto trading platform with military-grade tracking. Monitor up to 500 wallets with millisecond precision for an unfair advantage in Solana trading." />
        <meta name="keywords" content="crypto trading, Solana trading, wallet tracking, crypto analytics, trading profits, blockchain data" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" role="banner" aria-label="Hero Section">
        {/* Enhanced animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-background z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        {/* Animated grid overlay with enhanced visibility */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] z-1" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/0 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Enhanced status badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 mb-6 group hover:border-purple-500/40 transition-all duration-300" role="status">
                <Trophy className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span className="text-sm text-purple-400 font-medium">Trusted by Top 100 Solana Traders</span>
              </div>

              {/* Enhanced headline with gradient and animation */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
                Transform On-Chain Data Into 
                <motion.span 
                  className="block mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Life-Changing Profits
                </motion.span>
              </h1>

              {/* Enhanced subheadline with more compelling triggers */}
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed">
                Elite traders use our <span className="text-purple-400 font-semibold">military-grade tracking</span> to spot opportunities before anyone else. Monitor up to 500 wallets with 
                <span className="text-purple-400 font-semibold"> millisecond precision</span> for an unfair advantage.
              </p>

              {/* Enhanced CTA section */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" role="group" aria-label="Call to Action Buttons">
                <a
                  href="https://whop.com/potiontracker-advanced/?a=digitalartlab"
                  className="w-full sm:w-auto"
                  role="button"
                  aria-label="Start Trading Now"
                >
                  <Button 
                    size="lg" 
                    className="w-full gap-2 bg-purple-600 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
                  >
                    Start Trading Now <ArrowRight className="w-4 h-4 animate-pulse" aria-hidden="true" />
                  </Button>
                </a>

                <a
                  href="https://whop.com/potiontracker-advanced/?a=digitalartlab"
                  className="w-full sm:w-auto"
                  role="button"
                  aria-label="View Live Demo"
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full gap-2 hover:border-purple-500 transition-all duration-300 group"
                  >
                    View Live Demo <BarChart3 className="w-4 h-4 group-hover:text-purple-400" aria-hidden="true" />
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Enhanced metrics section - horizontally aligned */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="max-w-5xl mx-auto mt-8 p-4 bg-card/50 backdrop-blur rounded-lg border border-border/50 hover:border-purple-500/20 transition-colors"
              role="region"
              aria-label="Key Metrics"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-items-center">
                <div className="text-center group w-full max-w-[200px]">
                  <motion.div 
                    className="inline-flex items-center justify-center mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Zap className="w-5 h-5 text-purple-400" aria-hidden="true" />
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-purple-400"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    $38M+
                  </motion.h3>
                  <p className="text-sm text-muted-foreground">Recent Trader Profits</p>
                </div>

                <div className="text-center group w-full max-w-[200px]">
                  <motion.div 
                    className="inline-flex items-center justify-center mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <BarChart3 className="w-5 h-5 text-purple-400" aria-hidden="true" />
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-purple-400"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    247%
                  </motion.h3>
                  <p className="text-sm text-muted-foreground">Average ROI Increase</p>
                  <p className="text-xs text-muted-foreground/70">Among Active Users</p>
                </div>

                <div className="text-center group w-full max-w-[200px]">
                  <motion.div 
                    className="inline-flex items-center justify-center mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Timer className="w-5 h-5 text-purple-400" aria-hidden="true" />
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-purple-400"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    0.1ms
                  </motion.h3>
                  <p className="text-sm text-muted-foreground">Average Response Time</p>
                </div>

                <div className="text-center group w-full max-w-[200px]">
                  <motion.div 
                    className="inline-flex items-center justify-center mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Rocket className="w-5 h-5 text-purple-400" aria-hidden="true" />
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-purple-400"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    500+
                  </motion.h3>
                  <p className="text-sm text-muted-foreground">Wallets Tracked</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}