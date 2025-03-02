import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Hero from "../components/sections/hero";
import PainPoints from "../components/sections/pain-points";
import EVAdvantage from "../components/sections/evadvantage";
import Features from "../components/sections/features";
import VideoShowcase from "../components/sections/video-showcase";
import QuickStart from "../components/sections/quick-start";
import DeepDive from "../components/sections/deepdive";
import UseCases from "../components/sections/use-cases";
import SuccessStories from "../components/sections/success-stories";
import Analytics from "../components/sections/analytics";
import Pricing from "../components/sections/pricing";
import Testimonials from "../components/sections/testimonials";
import FAQ from "../components/sections/faq";
import { PlayCircle } from "lucide-react";

const AFFILIATE_URL = "https://whop.com/potiontracker-advanced/?a=digitalartlab";

// Hero Section CTA
const HeroSectionCTA = () => (
  <section className="responsive-container relative py-20" role="complementary" aria-label="Hero Call to Action">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Ready to track top traders? Sign up for Potion Tracker and elevate your crypto knowledge!
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
        role="button"
        aria-label="Start tracking with Potion Tracker"
      >
        Start Tracking Now
      </a>
    </div>
  </section>
);

// Features Section CTA
const FeaturesSectionCTA = () => (
  <section className="responsive-container relative py-20" role="complementary" aria-label="Features Call to Action">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Unlock your crypto trading potential today. Dive into comprehensive tools and bots designed to help you thrive in memecoin trading.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
        role="button"
        aria-label="Access trading tools"
      >
        Access Our Tools
      </a>
    </div>
  </section>
);

// Pricing Section CTA
const PricingSectionCTA = () => (
  <section className="responsive-container relative py-20" role="complementary" aria-label="Pricing Call to Action">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Join Potion Tracker and get unlimited notifications, customizable tags, and personalized tracking. No more missed opportunities!
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
        role="button"
        aria-label="Customize your notifications"
      >
        Customize Notifications
      </a>
    </div>
  </section>
);

// Success Stories Section CTA
const SuccessStoriesSectionCTA = () => (
  <section className="responsive-container relative py-20" role="complementary" aria-label="Success Stories Call to Action">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Track multiple wallets with ease and get instant PNL (Profit and Loss) insights and best trades from our advanced tools.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
        role="button"
        aria-label="Start tracking with confidence"
      >
        Track with Confidence
      </a>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="responsive-container relative py-20" role="complementary" aria-label="Final Call to Action">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        It's time to scale your earnings. Join Potion Tracker to harness real‑time automation and insider alerts that keep you ahead.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
        role="button"
        aria-label="Scale your trading profits"
      >
        Scale Your Profits Now
      </a>
    </div>
  </section>
);

// EVAdvantage Section CTA
const EVAdvantageCTA = () => (
  <section className="responsive-container relative py-20" role="complementary" aria-label="EV Advantage Call to Action">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Master the art of on-chain analysis with real-time wallet tracking and advanced market insights. Start your journey to crypto mastery!
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
        role="button"
        aria-label="Unlock market insights"
      >
        Unlock Market Insights
      </a>
    </div>
  </section>
);

// DeepDive Section CTA
const DeepDiveCTA = () => (
  <section className="responsive-container relative py-20" role="complementary" aria-label="Deep Dive Call to Action">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Dive deep into advanced trading strategies with our comprehensive analytics suite. Get the edge you need in volatile markets.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
        role="button"
        aria-label="Master advanced analytics"
      >
        Master Advanced Analytics
      </a>
    </div>
  </section>
);

// UseCases Section CTA
const UseCasesCTA = () => (
  <section className="responsive-container relative py-20" role="complementary" aria-label="Use Cases Call to Action">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        From DeFi to NFTs, our tools adapt to your trading style. Join thousands of successful traders who trust Potion Tracker.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
        role="button"
        aria-label="Explore trading tools"
      >
        Explore Trading Tools
      </a>
    </div>
  </section>
);

// SuccessStories Section CTA
const SuccessStoriesExtraCTA = () => (
  <section className="responsive-container relative py-20" role="complementary" aria-label="Success Stories Extra Call to Action">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Join our community of successful traders who've transformed their crypto journey with Potion Tracker's advanced features.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
        role="button"
        aria-label="Join success stories"
      >
        Join Success Stories
      </a>
    </div>
  </section>
);

// Analytics Section CTA
const AnalyticsCTA = () => (
  <section className="responsive-container relative py-20" role="complementary" aria-label="Analytics Call to Action">
    <div className="text-center">
      <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
        Harness the power of real-time analytics and predictive insights. Make data-driven decisions that maximize your profits.
      </p>
      <a
        href={AFFILIATE_URL}
        className="inline-block px-10 py-5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
        role="button"
        aria-label="Power up your analysis"
      >
        Power Up Your Analysis
      </a>
    </div>
  </section>
);

const Home = () => {
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "PotionTracker Pro - Advanced Crypto Trading Analytics",
    "description": "Transform on-chain data into profits with PotionTracker Pro. Military-grade tracking, real-time analytics, and advanced trading tools for crypto traders.",
    "publisher": {
      "@type": "Organization",
      "name": "PotionTracker Pro"
    },
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "PotionTracker Pro",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web-based",
      "offers": {
        "@type": "Offer",
        "category": "Subscription"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>PotionTracker Pro - Advanced Crypto Trading Analytics Platform</title>
        <meta name="description" content="Transform on-chain data into profits with PotionTracker Pro. Military-grade tracking, real-time analytics, and advanced trading tools for serious crypto traders." />
        <meta name="keywords" content="crypto trading, blockchain analytics, wallet tracking, trading automation, crypto profits, real-time alerts, trading tools" />
        <meta property="og:title" content="PotionTracker Pro - Advanced Crypto Trading Analytics" />
        <meta property="og:description" content="Elite crypto trading platform with military-grade tracking and millisecond precision for monitoring up to 500 wallets." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PotionTracker Pro - Transform On-Chain Data Into Profits" />
        <meta name="twitter:description" content="Elite crypto trading platform with military-grade tracking and real-time analytics." />
        <script type="application/ld+json">
          {JSON.stringify(pageStructuredData)}
        </script>
      </Helmet>
      <main className="min-h-screen bg-background text-foreground" role="main">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <PainPoints />
          <HeroSectionCTA />
          <EVAdvantage />
          <EVAdvantageCTA />
          <Features />
          <FeaturesSectionCTA />
          <VideoShowcase />
          <QuickStart />
          <DeepDive />
          <DeepDiveCTA />
          <UseCases />
          <UseCasesCTA />
          <SuccessStories />
          <SuccessStoriesExtraCTA />
          <Analytics />
          <AnalyticsCTA />
          <Pricing />
          <PricingSectionCTA />
          <Testimonials />
          <SuccessStoriesSectionCTA />
          <FAQ />
          <FinalCTA />
        </motion.div>
      </main>
    </>
  );
};

export default Home;
