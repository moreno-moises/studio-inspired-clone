import { motion } from "framer-motion";

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
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              MOSHE
            </h2>
            <p className="text-muted-foreground">
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
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
