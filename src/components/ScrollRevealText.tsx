"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
}

export default function ScrollRevealText({ text }: ScrollRevealTextProps) {
  const container = useRef<HTMLDivElement>(null);
  
  // The animation starts when the top of the container hits 85% of the viewport height,
  // and finishes when the bottom of the container hits 60% of the viewport height.
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 85%", "end 60%"],
  });

  const words = text.split(" ");

  return (
    <div 
      ref={container} 
      className="text-[24px] leading-[1.45] font-medium italic text-[var(--primary-green)] text-center max-w-4xl mx-auto flex flex-wrap justify-center mb-16"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </div>
  );
}

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="mr-[0.25em] mt-2">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
