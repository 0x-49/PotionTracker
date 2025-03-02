import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const AFFILIATE_URL = "https://whop.com/potiontracker-advanced/?a=digitalartlab";

const videos = [
    {
        id: "gi-qv-Q19d8?si=z-zhMKeTUe8cYNhN",
        title: "Find INSIDER Wallets: 100x Solana MEMECOIN Profits",
        description: "Unlock the secret to finding insider bundle wallets & traders. Learn how to track them and gain an unfair advantage for massive profits. Discover red flags for scams and how to sell before they rug!",
        ctaText: "Discover Insider Wallets",
        ctaLink: AFFILIATE_URL
    },
    {
        id: "Tjd_PUhjKOQ?si=a7CWbug9UJW6g4A5",
        title: "Potion Alpha Honest Review: $10K+/Week Strategy REVEALED",
        description: "Is Potion Alpha worth it? Honest review after 2 months. See how this user made $10K+/week, tools they use (CT Tracker!), community benefits, & if a paid group is your key to memecoin riches.",
        ctaText: "See Potion Alpha Review",
        ctaLink: AFFILIATE_URL
    },
    {
        id: "E7MkrwIrsDI?si=BwRvgv_Q31JGDDmA",
        title: "Memecoin Millionaire: Get RICH in 2025 (Step-by-Step Guide)",
        description: "Unlock the millionaire roadmap! Learn the strategies, tools (Bullex, Nova, Wallet Trackers), and mindset that turned $2k into $500k IN MINUTES. Become a memecoin millionaire in 2025!",
        ctaText: "Become a Memecoin Millionaire",
        ctaLink: AFFILIATE_URL
    },
    {
        id: "CNx4I-ySEp4?si=O0X-4SatbXrZx71q",
        title: "How To Get Rich With Memecoins In 2025",
        description: "Don't miss the 2025 memecoin wave! Expert Orangie reveals how to identify 100x gems, track whales, use CT Trackers, and build a tribe for maximum profits. Crypto's gold rush is ON.",
        ctaText: "Join the 2025 Gold Rush",
        ctaLink: AFFILIATE_URL
    },
    {
        id: "_BkUQAurW48?si=qJsKhPDQEdranBC_",
        title: "THE SECRET to Memecoin Riches!? (Potion Alpha Review)",
        description: "Is Potion Alpha the secret weapon? See a real user's journey, watch live trading examples, and discover the tools & community that are driving memecoin fortunes. Is it time to join an Alpha Group?",
        ctaText: "Unlock the Secret Weapon",
        ctaLink: AFFILIATE_URL
    },
    {
        id: "OglsvEFeazc?si=P_Nec1fbcx_X9O7n",
        title: "Wallet Tracking FULL GUIDE: The #1 Memecoin Tool",
        description: "Wallet Tracking MASTERCLASS: Learn from a pro how to find & track INSIDER wallets, top traders, and whales. Uncover the strategies, tools, and secrets to MILLION dollar memecoin trades.",
        ctaText: "Master Wallet Tracking",
        ctaLink: AFFILIATE_URL
    },
    {
        id: "JK40ddsb5hM?si=GWq9YnErmJ5VM_a6",
        title: "Make $2,000/Day Copying Memecoin Millionaires (LIVE)",
        description: "LIVE Trading Session: Watch Orangie turn 15 SOL into 175 SOL! Learn his step-by-step strategy, wallet tracking secrets, and real-time trading decisions that lead to daily $2k+ profits. See it LIVE.",
        ctaText: "Watch Live Trading Magic",
        ctaLink: AFFILIATE_URL
    },
    {
        id: "D8YHKc50HgQ?si=dCE9m4tuIB_n4Q-d",
        title: "Kid Makes $6000/Day Trading Meme Coins [Step-by-Step]",
        description: "19-Year-Old MEMECOIN WHIZKID: Discover the simple checklist & tools a teenager uses to make $6000 EVERY DAY. Step-by-step breakdown of his strategy, secret tools, and journey to memecoin success.",
        ctaText: "Meet the Whizkid Trader",
        ctaLink: AFFILIATE_URL
    }
];

export default function VideoShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-background/0 to-purple-500/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Potion Tracker in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Unlock the power of Potion Tracker Advanced. Watch professional traders demonstrate how our platform gives you a real-world trading edge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-8"> {/* Responsive grid layout */}
          {videos.slice(0, 6).map((video, index) => ( /* First 6 videos in responsive grid */
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-purple-500/20 mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=0&rel=0&modestbranding=1&showinfo=0&enablejsapi=1&controls=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full rounded-xl"
                />
              </div>
              <div className="flex-1 p-6 bg-card/50 backdrop-blur rounded-xl border border-border/50 hover:border-purple-500/20 transition-all duration-300 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 text-purple-400">{video.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{video.description}</p>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-lg"
                  onClick={() => window.open(video.ctaLink, '_blank')}
                >
                  {video.ctaText}
                </Button>
              </div>
            </motion.div>
          ))}
          {videos.slice(6).map((video, index) => ( /* Last 2 videos side by side */
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 6) * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col h-full sm:col-span-1" // Changed to single column on larger screens
            >
              <div className="relative aspect-video rounded-xl overflow-hidden border border-purple-500/20 mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=0&rel=0&modestbranding=1&showinfo=0&enablejsapi=1&controls=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full rounded-xl"
                />
              </div>
              <div className="flex-1 p-6 bg-card/50 backdrop-blur rounded-xl border border-border/50 hover:border-purple-500/20 transition-all duration-300 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 text-purple-400">{video.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{video.description}</p>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-lg"
                  onClick={() => window.open(video.ctaLink, '_blank')}
                >
                  {video.ctaText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
