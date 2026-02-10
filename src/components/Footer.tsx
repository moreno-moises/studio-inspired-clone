import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ksdLogo from "@/assets/ksd-red.png";

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/hasanraheem" },
  { name: "Twitter", url: "https://twitter.com/hasanraheem" },
  { name: "Spotify", url: "https://open.spotify.com/artist/5krkohEVJweRjKeAXGw6zt" },
  { name: "YouTube", url: "https://www.youtube.com/@HasanRaheemOfficial" },
];

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-1">
              MOSHE
            </h2>
            <Link to="/ksd" className="inline-block -ml-[2px]">
              <img 
                src={ksdLogo} 
                alt="KSD" 
                className="h-8 md:h-10 w-auto mb-1 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,0,0,0.8)] hover:brightness-125"
              />
            </Link>
            <p className="text-muted-foreground -ml-[1px]">
              Stay in motion.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-6 md:justify-end"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-widest uppercase hover-underline hover:text-neon-pink transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Moshe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
