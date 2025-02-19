import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, BarChart3, Trophy } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-background z-0" />

      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] z-1" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 mb-6">
              <Trophy className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400">#1 Choice of Top Solana Traders</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Transform On-Chain Data Into 
              <span className="block mt-2">Massive Trading Profits</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Elite traders use our <span className="text-purple-400 font-semibold">military-grade tracking</span> to spot opportunities before anyone else. Track up to 500 wallets with 
              <span className="text-purple-400 font-semibold"> millisecond precision</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gap-2 bg-purple-600 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20"
              >
                Start Trading Now <ArrowRight className="w-4 h-4" />
              </Button>

              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 hover:border-purple-500 transition-all duration-300 group"
              >
                View Success Stories <BarChart3 className="w-4 h-4 group-hover:text-purple-400" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-16 p-6 bg-card/50 backdrop-blur rounded-lg border border-border/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <motion.h3 
                  className="text-3xl font-bold text-purple-400"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  $20M+
                </motion.h3>
                <p className="text-muted-foreground">Trader Profits in Dec 2024</p>
              </div>
              <div className="text-center">
                <motion.h3 
                  className="text-3xl font-bold text-purple-400"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  100ms
                </motion.h3>
                <p className="text-muted-foreground">Alert Latency</p>
              </div>
              <div className="text-center">
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

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Trusted by professional traders processing millions in daily volume
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}