"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryGrid({ images }: { images: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowLeft") prevImage(e as any);
      if (e.key === "ArrowRight") nextImage(e as any);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = (e: React.MouseEvent | KeyboardEvent) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent | KeyboardEvent) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-[24px] space-y-[24px]">
        {images.map((img, index) => (
          <div 
            key={index} 
            onClick={() => openLightbox(index)}
            className="break-inside-avoid group relative rounded-[3px] overflow-hidden bg-[var(--paper)] border border-[var(--line)] cursor-pointer"
          >
            <Image
              src={`/gallery/${img}`}
              alt={`The Roadsides Community Image ${index + 1}`}
              width={600}
              height={800}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
              unoptimized
            />
            <div className="absolute inset-0 bg-[var(--charcoal)]/0 group-hover:bg-[var(--charcoal)]/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="text-center py-[64px] text-[var(--muted)] font-medium text-[16px]">
          No images found. Ensure images have been downloaded to the public/gallery directory.
        </div>
      )}

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-[var(--charcoal)]/95 flex items-center justify-center backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-[24px] right-[24px] text-[var(--paper)] hover:text-[var(--primary-green)] transition-colors p-2 z-[110]"
            onClick={closeLightbox}
            aria-label="Close Lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev button */}
          <button 
            className="absolute left-[24px] text-[var(--paper)] hover:text-[var(--primary-green)] transition-colors p-2 z-[110] hidden md:block"
            onClick={prevImage}
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          {/* Image Container */}
          <div className="relative w-full md:w-[80vw] h-[80vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={`/gallery/${images[currentIndex]}`}
              alt={`The Roadsides Lightbox Image ${currentIndex + 1}`}
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Next button */}
          <button 
            className="absolute right-[24px] text-[var(--paper)] hover:text-[var(--primary-green)] transition-colors p-2 z-[110] hidden md:block"
            onClick={nextImage}
            aria-label="Next Image"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
          
          {/* Mobile Swipe Areas (invisible) */}
          <div className="absolute top-0 bottom-0 left-0 w-1/3 z-[105] md:hidden" onClick={prevImage} />
          <div className="absolute top-0 bottom-0 right-0 w-1/3 z-[105] md:hidden" onClick={nextImage} />
          
          {/* Counter */}
          <div className="absolute bottom-[24px] text-[var(--paper)] font-medium tracking-wide">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
