import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Potion Tracker Advanced?",
    answer: "Potion Tracker Advanced is a sophisticated tool designed for Solana meme coin traders, offering real-time wallet tracking, custom notifications, and advanced analytics to help you make informed trading decisions."
  },
  {
    question: "How many wallets can I track?",
    answer: "Depending on your subscription tier, you can track from 20 up to 500 wallets simultaneously. Our Starter plan supports 20 wallets, Advanced plan supports 250 wallets, and Whale plan supports 500 wallets."
  },
  {
    question: "What is CT Tracker integration?",
    answer: "CT Tracker is a feature that monitors Crypto Twitter in real-time, tracking influential accounts, keywords, and hashtags to help you identify emerging trends and opportunities in the meme coin market."
  },
  {
    question: "Can I customize notifications?",
    answer: "Yes! You can set up custom sounds, colors, and tags for different wallets and create personalized alerts based on specific on-chain activities."
  },
  {
    question: "Is Discord access included?",
    answer: "Discord access is available separately through our Potion Discord Access subscription, which provides educational content and community features."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Potion Tracker Advanced
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}