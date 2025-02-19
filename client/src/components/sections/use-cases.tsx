import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const useCases = [
  {
    title: "Whale Wallet Tracking",
    description: "Monitor top Solana traders and replicate their successful strategies in real-time",
    benefits: [
      "Instant notifications of large trades",
      "Historical pattern analysis",
      "Performance metrics tracking"
    ],
    metric: "$2.3M",
    metricLabel: "Avg. Monthly Profit"
  },
  {
    title: "Arbitrage Detection",
    description: "Capitalize on price differences across DEXs with millisecond-precision alerts",
    benefits: [
      "Cross-DEX price monitoring",
      "Automated opportunity detection",
      "Profit calculation included"
    ],
    metric: "0.5s",
    metricLabel: "Average Response Time"
  },
  {
    title: "Token Launches",
    description: "Be first to spot and trade new token listings with our advanced detection system",
    benefits: [
      "Instant launch notifications",
      "Smart contract analysis",
      "Risk assessment metrics"
    ],
    metric: "100%",
    metricLabel: "Launch Detection Rate"
  },
  {
    title: "NFT Trading",
    description: "Track top NFT traders and spot collection momentum before the crowd",
    benefits: [
      "Collection performance tracking",
      "Whale wallet monitoring",
      "Rarity-based alerts"
    ],
    metric: "15min",
    metricLabel: "Average Lead Time"
  },
  {
    title: "DeFi Yield Farming",
    description: "Optimize your yield farming strategy with real-time APY tracking",
    benefits: [
      "Automated APY calculations",
      "Risk assessment tools",
      "Protocol health monitoring"
    ],
    metric: "32%",
    metricLabel: "Avg. APY Improvement"
  },
  {
    title: "Smart Money Tracking",
    description: "Follow institutional traders and smart money movements in real-time",
    benefits: [
      "Institutional wallet tracking",
      "Pattern recognition",
      "Risk management alerts"
    ],
    metric: "$5M+",
    metricLabel: "Daily Trading Volume"
  },
  {
    title: "MEV Protection",
    description: "Shield your trades from MEV bots and front-running attacks",
    benefits: [
      "Transaction route optimization",
      "Slippage protection",
      "Anti-sandwich defense"
    ],
    metric: "98%",
    metricLabel: "Protection Rate"
  },
  {
    title: "Protocol Analytics",
    description: "Deep insights into DeFi protocol performance and security metrics",
    benefits: [
      "TVL monitoring",
      "Smart contract analysis",
      "Risk scoring system"
    ],
    metric: "24/7",
    metricLabel: "Monitoring Coverage"
  },
  {
    title: "Trading Automation",
    description: "Set up sophisticated trading rules with conditional triggers",
    benefits: [
      "Custom strategy builder",
      "Multi-condition triggers",
      "Performance analytics"
    ],
    metric: "100x",
    metricLabel: "Strategy Execution Speed"
  },
  {
    title: "Portfolio Management",
    description: "Track and optimize your entire crypto portfolio in one place",
    benefits: [
      "Real-time PnL tracking",
      "Risk exposure analysis",
      "Performance benchmarking"
    ],
    metric: "$10M+",
    metricLabel: "Portfolio Size Support"
  },
  {
    title: "Market Sentiment",
    description: "Gauge market sentiment with AI-powered social media analysis",
    benefits: [
      "Social media monitoring",
      "Sentiment analysis",
      "Trend prediction"
    ],
    metric: "93%",
    metricLabel: "Prediction Accuracy"
  },
  {
    title: "Security Monitoring",
    description: "Protect your assets with advanced security monitoring",
    benefits: [
      "Suspicious activity alerts",
      "Smart contract auditing",
      "Real-time threat detection"
    ],
    metric: "100%",
    metricLabel: "Threat Detection Rate"
  }
];

export default function UseCases() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-gradient-to-b from-background/95 to-background relative overflow-hidden">
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
            Powerful Use Cases
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how traders use Potion Tracker to gain an edge in every market condition
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-purple-500/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                        <p className="text-muted-foreground mb-4">{useCase.description}</p>
                        <div className="space-y-2">
                          {useCase.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-purple-400 mt-1" />
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-purple-400">{useCase.metric}</p>
                          <p className="text-sm text-muted-foreground">{useCase.metricLabel}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur border border-border hover:border-purple-500 transition-colors ${
              !prevBtnEnabled && "opacity-50 cursor-not-allowed"
            }`}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur border border-border hover:border-purple-500 transition-colors ${
              !nextBtnEnabled && "opacity-50 cursor-not-allowed"
            }`}
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {useCases.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === selectedIndex ? "bg-purple-400" : "bg-border"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}