import { motion } from "framer-motion";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import VideoShowcase from "@/components/sections/video-showcase";
import TechSpecs from "@/components/sections/tech-specs";
import SuccessStories from "@/components/sections/success-stories";
import Analytics from "@/components/sections/analytics";
import Security from "@/components/sections/security";
import Pricing from "@/components/sections/pricing";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import UseCases from "@/components/sections/use-cases";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Hero />
      <Features />
      <VideoShowcase />
      <TechSpecs />
      <UseCases />
      <SuccessStories />
      <Analytics />
      <Security />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </motion.div>
  );
}