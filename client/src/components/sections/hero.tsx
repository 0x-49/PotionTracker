import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-background z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              The Fastest Solana Wallet Tracker
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Real-time tracking, custom notifications, and advanced analytics for Solana meme coin traders
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
              
              <Button size="lg" variant="outline" className="gap-2">
                Watch Demo <Zap className="w-4 h-4" />
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
                <h3 className="text-3xl font-bold text-purple-400">500+</h3>
                <p className="text-muted-foreground">Wallets Tracked</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-400">24/7</h3>
                <p className="text-muted-foreground">Real-time Monitoring</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-400">100ms</h3>
                <p className="text-muted-foreground">Alert Latency</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
