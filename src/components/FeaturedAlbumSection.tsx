import { motion } from "framer-motion";
import inmotionCover from "@/assets/inmotion-cover.jpg";

const streamingPlatforms = [
  { name: "Spotify", url: "https://open.spotify.com/album/6zndaaWa1Mu2NJ8JN5lBHe?referral=labelaffiliate&utm_source=1011lCmdiLNr&utm_medium=Indie_Distrokid&utm_campaign=labelaffiliate" },
  { name: "Apple Music", url: "https://music.apple.com/us/album/in-motion/1892649931" },
  { name: "YouTube", url: "https://www.youtube.com/playlist?list=PLWrrGjnossrfF4ZBqowfPkOdEHf03nysR" },
  { name: "Amazon Music", url: "https://music.amazon.com/albums/B0GWRYJ1H6?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_cGMbRLBHNy8duPwe5AcenKrD4" },
  { name: "Tidal", url: "https://tidal.com/browse/album/514879840" },
  { name: "Deezer", url: "https://link.deezer.com/s/334nfRqE7YF0c0rAJ2llY" },
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
            <div className="aspect-square transition-shadow duration-500 group-hover:shadow-[0_0_80px_15px_hsl(var(--neon-pink)/0.55)]">
              <img
                src={inmotionCover}
                alt="In Motion EP Cover"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
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
