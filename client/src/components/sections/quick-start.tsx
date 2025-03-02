import { motion } from "framer-motion";

const AFFILIATE_URL = "https://whop.com/promoguyplus/?a=digitalartlab";

export default function QuickStart() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Trading in Minutes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to begin your journey to profitable trading
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Create Account",
              description: "Sign up and verify your account in less than 60 seconds"
            },
            {
              step: "2",
              title: "Add Wallets",
              description: "Import your favorite traders' wallets or add your own"
            },
            {
              step: "3",
              title: "Start Tracking",
              description: "Receive real-time alerts and begin making informed trades"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-8 rounded-lg bg-card/50 backdrop-blur border border-border/50 hover:border-purple-500/20 transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href={AFFILIATE_URL}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 font-semibold"
          >
            Start Your Journey Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}