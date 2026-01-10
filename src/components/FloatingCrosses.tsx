import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Cross {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  speed: number;
}

const FloatingCrosses = () => {
  const [crosses, setCrosses] = useState<Cross[]>([]);
  const [sectionBounds, setSectionBounds] = useState({ start: 0, end: 0 });
  const { scrollY } = useScroll();

  useEffect(() => {
    // Generate random crosses
    const generatedCrosses: Cross[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 400 + i * 30,
      size: Math.random() * 20 + 16,
      rotation: Math.random() * 360,
      speed: Math.random() * 0.8 + 0.3,
    }));
    setCrosses(generatedCrosses);

    // Find merch and contact sections
    const findSections = () => {
      const merchSection = document.getElementById('merch');
      const contactSection = document.getElementById('contact');
      
      if (merchSection && contactSection) {
        const merchRect = merchSection.getBoundingClientRect();
        const contactRect = contactSection.getBoundingClientRect();
        setSectionBounds({
          start: window.scrollY + merchRect.top - 200,
          end: window.scrollY + contactRect.top - 100,
        });
      }
    };

    // Delay to ensure sections are rendered
    setTimeout(findSections, 500);
    window.addEventListener('resize', findSections);
    return () => window.removeEventListener('resize', findSections);
  }, []);

  // Container opacity based on scroll position
  const containerOpacity = useTransform(
    scrollY,
    [sectionBounds.start - 200, sectionBounds.start, sectionBounds.end - 200, sectionBounds.end],
    [0, 1, 1, 0]
  );

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
      style={{ opacity: containerOpacity }}
    >
      {crosses.map((cross) => (
        <CrossElement key={cross.id} cross={cross} scrollY={scrollY} />
      ))}
    </motion.div>
  );
};

const CrossElement = ({ cross, scrollY }: { cross: Cross; scrollY: any }) => {
  const y = useTransform(scrollY, [0, 5000], [cross.y, cross.y - 1200 * cross.speed]);
  const rotate = useTransform(scrollY, [0, 5000], [cross.rotation, cross.rotation + 360 * cross.speed]);
  const scale = useTransform(scrollY, [0, 2500, 5000], [1, 1.2, 0.8]);

  return (
    <motion.div
      className="absolute text-accent"
      style={{
        left: `${cross.x}%`,
        y,
        rotate,
        scale,
        opacity: 0.35,
      }}
      animate={{
        x: [0, Math.sin(cross.id) * 20, 0],
      }}
      transition={{
        x: {
          duration: 4 + cross.speed * 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <svg
        width={cross.size}
        height={cross.size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    </motion.div>
  );
};

export default FloatingCrosses;
