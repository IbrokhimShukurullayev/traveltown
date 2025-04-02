import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import img1 from "./public/images.jpg";
import img2 from "./public/images (1).jpg";
import img3 from "./public/images3.webp";
import img4 from "./public/360_F_304881889_yJ1S3butl9gVs0kMptYTU2N1EVmEJbz8.jpg";
import img5 from "./public/images.jpg";
import img6 from "./public/images (1).jpg";

export default function PackageTypesSection() {
  const packageTypes = [
    {
      id: 1,
      title: "Beach Vacations",
      description: "Relax on pristine beaches with crystal clear waters",
      image: img1,
      destinations: ["Maldives", "Bali", "Cancun", "Phuket"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 2,
      title: "Mountain Retreats",
      description: "Discover breathtaking views and adventure in the mountains",
      image: img2,
      destinations: ["Swiss Alps", "Himalayas", "Rocky Mountains", "Andes"],
      color: "from-emerald-500 to-green-500",
    },
    {
      id: 3,
      title: "City Explorations",
      description: "Immerse yourself in culture, history and urban experiences",
      image: img3,
      destinations: ["Paris", "Tokyo", "New York", "Rome"],
      color: "from-amber-500 to-orange-500",
    },
    {
      id: 4,
      title: "Island Getaways",
      description: "Escape to paradise islands for unforgettable experiences",
      image: img4,
      destinations: ["Santorini", "Bora Bora", "Fiji", "Seychelles"],
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 5,
      title: "Safari Adventures",
      description: "Encounter wildlife and experience nature at its finest",
      image: img5,
      destinations: ["Kenya", "Tanzania", "South Africa", "Botswana"],
      color: "from-yellow-500 to-amber-500",
    },
    {
      id: 6,
      title: "Cruise Journeys",
      description: "Sail across beautiful waters with luxury and comfort",
      image: img6,
      destinations: ["Caribbean", "Mediterranean", "Alaska", "Scandinavia"],
      color: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-cyan-500 px-3 py-1 text-sm text-white">
            Explore Our Packages
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Find Your Perfect Travel Experience
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Choose from our wide range of carefully curated travel packages
            designed for every type of traveler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packageTypes.map((packageType) => (
            <div
              key={packageType.id}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={packageType.image || "/placeholder.svg"}
                  alt={packageType.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${packageType.color} opacity-60`}
                ></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold">{packageType.title}</h3>
                  <p className="mt-2 text-sm md:text-base opacity-90">
                    {packageType.description}
                  </p>
                </div>
              </div>
              <div className="bg-white p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase">
                    Mashhur manzillar
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {packageType.destinations.map((destination, index) => (
                      <span
                        key={index}
                        className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs"
                      >
                        {destination}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-cyan-500 hover:text-cyan-600"
                >
                  Explore Packages
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-cyan-600 focus-visible:outline-none focus-visible:ring-1"
          >
            View All Package Types
          </Link>
        </div>
      </div>
    </section>
  );
}
