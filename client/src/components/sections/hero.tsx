import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, BarChart3, Trophy, Zap, Timer } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Enhanced animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-background z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      {/* Animated grid overlay with enhanced visibility */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] z-1">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 mb-6 group hover:border-purple-500/40 transition-all duration-300">
              <Trophy className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gap-2 bg-purple-600 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
              >
                Start Trading Now <ArrowRight className="w-4 h-4 animate-pulse" />
              </Button>

              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 hover:border-purple-500 transition-all duration-300 group"
              >
                View Live Demo <BarChart3 className="w-4 h-4 group-hover:text-purple-400" />
              </Button>
            </div>
          </motion.div>

          {/* Enhanced metrics section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16 p-6 bg-card/50 backdrop-blur rounded-lg border border-border/50 hover:border-purple-500/20 transition-colors"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <motion.div 
                  className="inline-flex items-center justify-center mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Zap className="w-6 h-6 text-purple-400" />
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-purple-400"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  $38M+
                </motion.h3>
                <p className="text-muted-foreground">Recent Trader Profits</p>
              </div>
              <div className="text-center group">
                <motion.div 
                  className="inline-flex items-center justify-center mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Timer className="w-6 h-6 text-purple-400" />
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-purple-400"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  100ms
                </motion.h3>
                <p className="text-muted-foreground">Alert Latency</p>
              </div>
              <div className="text-center group">
                <motion.div 
                  className="inline-flex items-center justify-center mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Rocket className="w-6 h-6 text-purple-400" />
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-purple-400"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  36K+
                </motion.h3>
                <p className="text-muted-foreground">Active Traders</p>
              </div>
            </div>
          </motion.div>

          {/* Enhanced trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/5 border border-purple-500/10">
              <p className="text-sm text-muted-foreground">
                Trusted by professional traders processing <span className="text-purple-400 font-semibold">$100M+</span> in daily volume
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}