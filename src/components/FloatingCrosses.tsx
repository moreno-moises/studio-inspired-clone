import { useEffect, useState } from "react";
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
  const { scrollY } = useScroll();

  useEffect(() => {
    // Generate random crosses
    const generatedCrosses: Cross[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 300 + i * 25, // Spread across the page
      size: Math.random() * 12 + 8,
      rotation: Math.random() * 45,
      speed: Math.random() * 0.5 + 0.2,
    }));
    setCrosses(generatedCrosses);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {crosses.map((cross) => (
        <CrossElement key={cross.id} cross={cross} scrollY={scrollY} />
      ))}
    </div>
  );
};

const CrossElement = ({ cross, scrollY }: { cross: Cross; scrollY: any }) => {
  const y = useTransform(scrollY, [0, 5000], [cross.y, cross.y - 800 * cross.speed]);
  const rotate = useTransform(scrollY, [0, 5000], [cross.rotation, cross.rotation + 180 * cross.speed]);
  const opacity = useTransform(scrollY, [0, 1000, 4000, 5000], [0.15, 0.25, 0.25, 0.1]);

  return (
    <motion.div
      className="absolute text-accent"
      style={{
        left: `${cross.x}%`,
        y,
        rotate,
        opacity,
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
