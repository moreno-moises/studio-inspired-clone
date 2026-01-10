import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import mosheLogo from "@/assets/moshe-logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "In Motion", href: "/in-motion" },
    { label: "Music", href: "/music" },
    { label: "Tour", href: "/tour" },
    { label: "Merch", href: "/merch" },
    { label: "In Motion VST", href: "/vst" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    navigate(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-1 md:px-12 md:py-2">
        <div className="absolute inset-0 backdrop-blur-md bg-background/40 mask-gradient-down" />
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-background/40 to-transparent" />
        <div className="flex items-center justify-between relative z-10">
          <Link to="/" className="block">
            <img 
              src={mosheLogo} 
              alt="MOSHE" 
              className="h-20 md:h-28 w-auto"
            />
          </Link>
          
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
                <img 
                  src={mosheLogo} 
                  alt="MOSHE" 
                  className="h-20 md:h-28 w-auto"
                />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:opacity-70 transition-opacity"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex-1 flex items-center justify-center">
                <ul className="space-y-6 text-center">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={`text-3xl md:text-5xl font-bold hover:text-neon-pink transition-colors ${
                          item.label === "In Motion" || item.label === "In Motion VST" || item.label === "Merch"
                            ? "font-glassure"
                            : "font-display"
                        }`}
                      >
                        {item.label}
                      </button>
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
