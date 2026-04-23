import { motion } from "framer-motion";
import ksdBg from "@/assets/ksd-bg.jpg";

const platforms = [
  { name: "Spotify", url: "https://open.spotify.com/album/6zndaaWa1Mu2NJ8JN5lBHe?referral=labelaffiliate&utm_source=1011lCmdiLNr&utm_medium=Indie_Distrokid&utm_campaign=labelaffiliate" },
  { name: "Apple Music", url: "https://music.apple.com/us/album/in-motion/1892649931" },
  { name: "YouTube", url: "https://youtube.com/playlist?list=PLWrrGjnossrfF4ZBqowfPkOdEHf03nysR&si=aV1lhkeQLdEl0w2V" },
  { name: "Amazon Music", url: "https://music.amazon.com/albums/B0GWRYJ1H6?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_cGMbRLBHNy8duPwe5AcenKrD4" },
  { name: "Tidal", url: "https://tidal.com/album/514879840/u" },
  { name: "Deezer", url: "https://link.deezer.com/s/334nfRqE7YF0c0rAJ2llY" },

const MusicSection = () => {
  return (
    <section 
      id="music" 
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12"
      style={{
        backgroundImage: `url(${ksdBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
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
          className="flex flex-wrap justify-center gap-6"
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
              className="group border border-border p-6 md:p-8 hover:border-neon-pink hover:bg-neon-pink/10 transition-all duration-300 bg-background/50 backdrop-blur-sm flex items-center justify-center w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)]"
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
