import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Menu,
} from "lucide-react";

import img1 from "./public/bgd.png";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import PackageTypesSection from "./package-types-section";
import DestinationCardsSection from "./destination-cards-section";
// import TravelGallerySection from "./travel-gallery-section";
import about from "./public/360_F_304881889_yJ1S3butl9gVs0kMptYTU2N1EVmEJbz8.jpg";
import img2 from "./public/images (1).jpg";
import img3 from "./public/images.jpg";
import img4 from "./public/images3.webp";
import logo from "./public/logo.png";

export default function TravelTownLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="w-[150px] h-auto relative">
                <Image
                  src={logo}
                  alt="Tropical destination with overwater bungalows"
                  width={150}
                  height={50} // Balandlikni o‘zingizga mos ravishda o‘zgartiring
                  className="object-contain"
                  priority
                />
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#packages"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Packages
            </Link>
            {/* <Link
              href="#gallery"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Gallery
            </Link> */}
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex">Book Now</Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    href="#"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Home
                  </Link>
                  <Link
                    href="#about"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    About
                  </Link>
                  <Link
                    href="#packages"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Packages
                  </Link>
                  <Link
                    href="#gallery"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Gallery
                  </Link>
                  <Link
                    href="#contact"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Contact
                  </Link>
                  <Button>Book Now</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full h-screen relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={img1}
              alt="Tropical destination with overwater bungalows"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto relative z-10 h-full flex flex-col justify-center px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4 text-white max-w-3xl">
              <div className="space-y-2">
                <div className="inline-block bg-cyan-500 px-4 py-2 text-2xl font-bold rounded-md">
                  Travel Town
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Discover Your Perfect Getaway!
                </h1>
                <p className="max-w-[700px] text-lg md:text-xl">
                  Experience comfort, luxury, and unforgettable adventures with
                  our premium travel packages.
                </p>
              </div>
            </div>

            {/* Search form overlay */}
            <div className="absolute bottom-12 left-0 right-0 mx-auto w-full max-w-6xl bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg z-20">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">
                    Your Destination
                  </label>
                  <Input
                    placeholder="Where do you want to go?"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Number of People
                  </label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="maldives">Maldives</option>
                    <option value="thailand">Thailand</option>
                    <option value="bali">Bali, Indonesia</option>
                    <option value="greece">Greece</option>
                    <option value="turkey">Turkey</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full"
                  />
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-cyan-500 mx-auto text-center  h-10">
                    Search Packages
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Destination Cards Section */}
        <DestinationCardsSection />
        {/* Package Types Section */}
        <PackageTypesSection />
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <Image
                  src={about}
                  alt="About Travel Town"
                  width={800}
                  height={600}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Travel Town
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Travel Town was founded in 2010 with a simple mission: to make
                  travel accessible, enjoyable, and memorable for everyone. Our
                  team of experienced travel enthusiasts is dedicated to
                  crafting the perfect getaway for you.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether you're looking for a relaxing beach vacation, an
                  adventurous trek through mountains, or a cultural immersion in
                  a historic city, we have the expertise and resources to make
                  it happen.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button>Our Story</Button>
                  <Button variant="outline">Meet Our Team</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Travel Gallery Section
        <section id="gallery">
          <TravelGallerySection />
        </section> */}
        <section id="packages" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Travel Packages
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from our carefully curated travel packages designed to
                  suit every preference and budget.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={img2}
                      alt="Beach destination"
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardTitle className="mt-4">Beach Getaway</CardTitle>
                  <CardDescription>
                    Perfect for relaxation and sun lovers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>Aviachiptalar</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>Tibbiy sug'urta</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>Shinam otel</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>Nonushta</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>Tayyor programma</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>24/7 aloqa</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-2xl font-bold">$350</div>
                  <div className="text-sm text-gray-500">per person</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Book Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={img3}
                      alt="Mountain adventure"
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardTitle className="mt-4">Mountain Adventure</CardTitle>
                  <CardDescription>
                    For thrill-seekers and nature enthusiasts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>Aviachiptalar</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>Tibbiy sug'urta</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>Shinam otel</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>Nonushta</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>Tayyor programma</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>24/7 aloqa</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-2xl font-bold">$300</div>
                  <div className="text-sm text-gray-500">per person</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Book Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={img4}
                      alt="City exploration"
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardTitle className="mt-4">Cultural City Tour</CardTitle>
                  <CardDescription>
                    Immerse yourself in history and culture
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>Aviachiptalar</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>Tibbiy sug'urta</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>Shinam otel</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>Nonushta</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>Tayyor programma</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>24/7 aloqa</span>
                    </li>
                  </ul>
                  <div className="mt-4 text-2xl font-bold">$340</div>
                  <div className="text-sm text-gray-500">per person</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Book Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Contact Us
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or ready to plan your next adventure? Get in
                  touch with our travel experts.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>123 Travel Street, Adventure City, TC 12345</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>(123) 456-7890</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@traveltown.com</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button size="icon" variant="outline">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button size="icon" variant="outline">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button size="icon" variant="outline">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Send Us a Message</h3>
                  <form className="mt-4 space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Input placeholder="First Name" />
                      </div>
                      <div className="space-y-2">
                        <Input placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div className="space-y-2">
                      <Input placeholder="Subject" />
                    </div>
                    <div className="space-y-2">
                      <Textarea
                        placeholder="Your Message"
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Travel Town</h3>
              <p className="text-gray-400">
                Making your travel dreams come true since 2010. Your journey
                begins with us.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#packages"
                    className="text-gray-400 hover:text-white"
                  >
                    Packages
                  </Link>
                </li>
                <li>
                  <Link
                    href="#gallery"
                    className="text-gray-400 hover:text-white"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Popular Destinations</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Bali, Indonesia
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Paris, France
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Santorini, Greece
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Tokyo, Japan
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="text-gray-400">
                Subscribe to get special offers and travel tips.
              </p>
              <form className="flex gap-2">
                <Input
                  placeholder="Your Email"
                  className="bg-gray-800 border-gray-700"
                />
                <Button type="submit" className="shrink-0">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Travel Town. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
