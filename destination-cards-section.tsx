import Image from "next/image";
import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import img1 from "./public/images.jpg";
import img2 from "./public/tailnad.jpg";
import img3 from "./public/bali.jpg";
import img4 from "./public/turkey.jpg";
import img5 from "./public/duba2.jpg";
import img6 from "./public/tailda2.jpg";
import img7 from "./public/dubai1.webp";

import { useLanguage } from "./contexts/language-context";
import { getTranslation } from "./translations";

export default function DestinationCardsSection() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const destinations = [
    {
      id: 1,
      name: "Palm Jumeirah",
      location: "Dubai",
      image: img7,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Phuket",
      location: "Thailand",
      image: img2,
      rating: 4.5,
    },
    {
      id: 3,
      name: "Bali",
      location: "Indonesia",
      image: img3,
      rating: 4.5,
    },
    {
      id: 4,
      name: "Istanbul",
      location: "Turkey",
      image: img4,
      rating: 4.8,
    },
    {
      id: 5,
      name: "Madinat Jumeirah",
      location: "Dubai",
      image: img5,
      rating: 4.7,
    },
    {
      id: 6,
      name: "Bangkok",
      location: "Thailand",
      image: img6,
      rating: 4.6,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t.popularDestinationsFooter}
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
            {t.exploreDestinations}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href="#"
              className="group relative overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>

                {/* Rating */}
                <div className="absolute top-4 left-4 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-sm font-medium">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{destination.rating}</span>
                </div>

                {/* Location Pin */}
                <div
                  className="absolute top-4 right-4 flex items-center gap-1 justify-center rounded-full  p-2 text-white"
                  style={{ backgroundColor: "rgba(242, 242, 247, 0.4)" }}
                >
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{destination.location}</span>
                </div>

                {/* Destination Info */}
                <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-cyan-600 focus-visible:outline-none focus-visible:ring-1"
          >
            {t.viewAllDestinations}
          </Link>
        </div>
      </div>
    </section>
  );
}
