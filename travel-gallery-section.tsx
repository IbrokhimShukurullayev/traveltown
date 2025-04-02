"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export default function TravelGallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const travelImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Tropical beach with palm trees",
      location: "Maldives",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=800&width=600",
      alt: "Mountain landscape with snow caps",
      location: "Swiss Alps",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Ancient temple at sunset",
      location: "Thailand",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=800&width=600",
      alt: "Desert safari with camels",
      location: "Dubai",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Colorful city streets",
      location: "Barcelona",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=800&width=600",
      alt: "Serene lake with mountains",
      location: "New Zealand",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Historic architecture",
      location: "Rome",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=800&width=600",
      alt: "Tropical waterfall in jungle",
      location: "Costa Rica",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Northern lights over mountains",
      location: "Iceland",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-cyan-500 px-3 py-1 text-sm text-white">
            Travel Inspiration
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Explore Our Travel Gallery
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Immerse yourself in stunning destinations from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {travelImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] w-full relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white font-medium">{image.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                className="absolute top-4 right-4 bg-white/20 rounded-full p-2 text-white hover:bg-white/40 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative h-full w-full">
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Travel destination"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
