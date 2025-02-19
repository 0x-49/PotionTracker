import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const featuredVideos = [
  {
    id: "p7HKvqRI_Bo",
    title: "Potion Alpha Tutorial",
    description: "Complete walkthrough of Potion Tracker Advanced features"
  },
  {
    id: "xqyUuZhUqjw",
    title: "Real Trading Success",
    description: "See how top traders use Potion Tracker to maximize profits"
  }
];

export default function VideoShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
      {/* Decorative elements */}
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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch how professional traders use our platform to spot opportunities and maximize profits
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-lg overflow-hidden border border-purple-500/20"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-center p-4">
                  <PlayCircle className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold mb-1">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.youtube.com/@OrangieWEB3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <PlayCircle className="w-4 h-4" />
            <span>View more tutorials on our YouTube channel</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
