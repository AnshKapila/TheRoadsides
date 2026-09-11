"use client";

import { useEffect, useRef, useState } from "react";

export default function MotionBlurReveal({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  delay?: number 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      {
        threshold: 0.3, // 30% entry into viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[800ms] ease-out ${
        isVisible 
          ? "opacity-100 translate-y-0 blur-none" 
          : "opacity-0 translate-y-16 blur-md"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
