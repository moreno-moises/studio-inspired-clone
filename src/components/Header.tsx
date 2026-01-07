import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "Music", href: "#music" },
    { label: "Tour", href: "#tour" },
    { label: "Merch", href: "#merch" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6">
        <div className="flex items-center justify-between">
          <a href="#" className="font-display text-lg md:text-xl font-bold tracking-wider">
            HASAN RAHEEM
          </a>
          
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
                <span className="font-display text-lg md:text-xl font-bold tracking-wider">
                  HASAN RAHEEM
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:opacity-70 transition-opacity"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex-1 flex items-center justify-center">
                <ul className="space-y-8 text-center">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="font-display text-4xl md:text-6xl font-bold hover:text-neon-pink transition-colors"
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
