import fs from "fs";
import path from "path";
import GalleryGrid from "@/components/GalleryGrid";

// Function to get a list of downloaded images from the public/gallery folder
function getGalleryImages() {
  const galleryDir = path.join(process.cwd(), "public/gallery");
  try {
    const files = fs.readdirSync(galleryDir);
    // Filter out transparent placeholders or files under 10kb (which are likely transparent pixels, but we'll just check names for now)
    return files
      .filter((file) => file.endsWith(".jpg") && !file.includes("transparent"))
      .slice(0, 50); // Show up to 50 images in the gallery
  } catch (error) {
    console.error("Error reading gallery directory:", error);
    return [];
  }
}

export const metadata = {
  title: "Gallery | The Roadsides",
  description: "Images from our community drives and environmental initiatives.",
};

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-[var(--paper)]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-[3px] bg-[var(--primary-green)]" />
            <span className="text-[var(--charcoal)] font-semibold text-[14px]">Our Gallery</span>
          </div>
          <h1 className="text-[48px] md:text-[60px] font-bold text-[var(--charcoal)] tracking-tight mb-6 leading-[1.15]">
            Community in Action
          </h1>
          <p className="text-[16px] text-[var(--muted)] leading-[1.65] font-normal">
            Take a look at the real on-ground impact of the &quot;baby steps&quot; approach. From plantation drives to textile waste collection, this is what multiplying a good habit looks like.
          </p>
        </div>

        {/* Client-side Masonry Grid with Lightbox */}
        <GalleryGrid images={images} />
      </div>
    </div>
  );
}
