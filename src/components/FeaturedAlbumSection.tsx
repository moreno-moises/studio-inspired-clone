import { motion } from "framer-motion";
import inmotionCover from "@/assets/inmotion-cover.jpg";

const streamingPlatforms = [
  { name: "Spotify", icon: "spotify", url: "https://open.spotify.com" },
  { name: "YouTube", icon: "youtube", url: "https://www.youtube.com" },
  { name: "Apple Music", icon: "apple", url: "https://music.apple.com" },
];

const FeaturedAlbumSection = () => {
  return (
    <section id="ep" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Featured
          </p>
          <h2 className="font-glassure text-4xl md:text-5xl lg:text-6xl font-bold">
            Debut EP
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Album Cover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={inmotionCover}
                alt="In Motion EP Cover"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Neon glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 shadow-[0_0_60px_10px_hsl(var(--neon-pink)/0.3)]" />
            </div>
          </motion.div>

          {/* Album Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h3 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
              In Motion
            </h3>
            
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-6">
              Listen on:
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              {streamingPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-sm tracking-wider"
                >
                  {platform.name}
                </a>
              ))}
            </div>

            <a
              href="#about"
              className="inline-block text-sm tracking-widest uppercase hover-underline"
            >
              Learn more
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAlbumSection;
