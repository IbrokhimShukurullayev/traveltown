import Image from "next/image";
import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import img1 from "./public/images.jpg";
import img2 from "./public/images (1).jpg";
import img3 from "./public/images3.webp";
import img4 from "./public/360_F_304881889_yJ1S3butl9gVs0kMptYTU2N1EVmEJbz8.jpg";
import img5 from "./public/images.jpg";
import img6 from "./public/images (1).jpg";

export default function DestinationCardsSection() {
  const destinations = [
    {
      id: 1,
      name: "Alpine Lake",
      location: "Switzerland",
      image: img1,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Li River",
      location: "China",
      image: img2,
      rating: 4.5,
    },
    {
      id: 3,
      name: "Fjord Adventure",
      location: "Norway",
      image: img3,
      rating: 4.5,
    },
    {
      id: 4,
      name: "Santorini Island",
      location: "Greece",
      image: img4,
      rating: 4.8,
    },
    {
      id: 5,
      name: "Bali Beaches",
      location: "Indonesia",
      image: img5,
      rating: 4.7,
    },
    {
      id: 6,
      name: "Kyoto Gardens",
      location: "Japan",
      image: img6,
      rating: 4.6,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Popular Destinations
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Explore our most sought-after destinations loved by travelers
            worldwide
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
                <div className="absolute top-4 right-4 flex items-center justify-center rounded-full bg-red-500 p-2 text-white">
                  <MapPin className="h-4 w-4" />
                </div>

                {/* Destination Info */}
                <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{destination.location}</span>
                  </div>
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
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
