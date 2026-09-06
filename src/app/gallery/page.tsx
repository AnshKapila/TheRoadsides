import Image from "next/image";
import fs from "fs";
import path from "path";

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
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-brand-light">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-brand-primary" />
            <span className="text-brand-dark font-medium text-sm">Our Gallery</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark tracking-tight mb-6">
            Community in Action
          </h1>
          <p className="text-xl text-brand-dark/70 leading-relaxed font-medium">
            Take a look at the real on-ground impact of the "baby steps" approach. From plantation drives to textile waste collection, this is what multiplying a good habit looks like.
          </p>
        </div>

        {/* Gallery Grid (Masonry-like layout using columns) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((img, index) => (
            <div key={index} className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-brand-white border border-brand-dark/5">
              <Image
                src={`/gallery/${img}`}
                alt={`The Roadsides Community Image ${index + 1}`}
                width={600}
                height={800} // This is just an aspect ratio hint for Next.js, actual height will be auto
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized // Since these are scraped directly, avoid Next.js image optimization overhead for now
              />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
        
        {images.length === 0 && (
          <div className="text-center py-24 text-brand-dark/40 font-medium text-lg">
            No images found. Ensure images have been downloaded to the public/gallery directory.
          </div>
        )}
      </div>
    </div>
  );
}
