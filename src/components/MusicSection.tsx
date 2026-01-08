import { motion } from "framer-motion";

const platforms = [
  { name: "Spotify", url: "https://open.spotify.com/artist/moshe" },
  { name: "Apple Music", url: "https://music.apple.com/artist/moshe" },
  { name: "YouTube", url: "https://www.youtube.com/@Moshe" },
  { name: "Amazon Music", url: "https://music.amazon.com/artists/moshe" },
  { name: "Tidal", url: "https://tidal.com/artist/moshe" },
  { name: "Deezer", url: "https://www.deezer.com/artist/moshe" },
];

const MusicSection = () => {
  return (
    <section id="music" className="py-24 md:py-32 px-6 md:px-12 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Listen Everywhere
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
            Stream My Music
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group border border-border p-6 md:p-8 hover:border-neon-pink hover:bg-neon-pink/10 transition-all duration-300"
            >
              <span className="font-display text-lg md:text-xl font-bold group-hover:text-neon-pink transition-colors">
                {platform.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MusicSection;
