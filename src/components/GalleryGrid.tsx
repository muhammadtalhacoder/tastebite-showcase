import { useState } from "react";

interface GalleryGridProps {
  images: { src: string; alt: string }[];
}

const GalleryGrid = ({ images }: GalleryGridProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
              <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                View
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
          />
          <button
            className="absolute top-4 right-4 text-primary-foreground hover:text-primary text-3xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;
