import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import mosheLogo from "@/assets/moshe-logo.jpeg";
import ksdLogo from "@/assets/ksd-red.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHoveringMoshe, setIsHoveringMoshe] = useState(false);
  const [isHoveringHamburger, setIsHoveringHamburger] = useState(false);
  const navigate = useNavigate();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "In Motion", href: "/in-motion" },
    { label: "Music", href: "/music" },
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
      <header className="fixed top-4 right-4 md:right-8 z-50">
        <div className="relative flex flex-col rounded-none backdrop-blur-md bg-foreground/10 border border-foreground/20 overflow-hidden w-[160px] h-[130px] md:w-[200px] md:h-[156px]">
          {/* Top area */}
          <div className="flex items-start justify-between px-4 pt-3">
            <button
              onClick={() => setIsMenuOpen(true)}
              onMouseEnter={() => setIsHoveringHamburger(true)}
              onMouseLeave={() => setIsHoveringHamburger(false)}
              className="p-1 hover:opacity-70 transition-opacity"
              aria-label="Open menu"
            >
              <motion.div
                animate={isHoveringHamburger ? { rotate: 180, scale: 1.1 } : { rotate: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              </motion.div>
            </button>

            <Link 
              to="/" 
              className="block mt-[2px]"
            >
              <div className="flex flex-col items-start">
                <div 
                  className="overflow-hidden h-[22px] md:h-[26px]"
                  onMouseEnter={() => setIsHoveringMoshe(true)}
                  onMouseLeave={() => setIsHoveringMoshe(false)}
                >
                  <motion.span 
                    className="text-base md:text-lg font-light tracking-[0.32em] uppercase text-foreground block"
                    animate={isHoveringMoshe ? { y: [0, -30, 30, 0] } : { y: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut", times: [0, 0.3, 0.3, 1] }}
                  >
                    MOSHE
                  </motion.span>
                </div>
                <img 
                  src={ksdLogo} 
                  alt="KSD" 
                  className="h-5 md:h-6 w-auto mt-0.5"
                />
              </div>
            </Link>
          </div>

          <div className="h-2 md:h-3" aria-hidden="true" />

          {/* Marquee text */}
          <div className="w-full overflow-hidden py-1.5 mt-auto">
            <div className="marquee">
              <span className="text-[10px] md:text-xs font-bold tracking-wider text-foreground whitespace-nowrap px-4">
                IN MOTION OUT NOW ✦ IN MOTION OUT NOW ✦ IN MOTION OUT NOW ✦ IN MOTION OUT NOW ✦
              </span>
              <span
                aria-hidden="true"
                className="text-[10px] md:text-xs font-bold tracking-wider text-foreground whitespace-nowrap px-4"
              >
                IN MOTION OUT NOW ✦ IN MOTION OUT NOW ✦ IN MOTION OUT NOW ✦ IN MOTION OUT NOW ✦
              </span>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] bg-background"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
                <img 
                  src={mosheLogo} 
                  alt="MOSHE" 
                  className="h-24 md:h-32 w-auto"
                />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:opacity-70 transition-opacity"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-8">
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