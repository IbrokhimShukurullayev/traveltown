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
import FAQSection from "./faq-section";
import img1 from "./public/bgd.png";
import { useRef } from "react";
import { useState } from "react";
import { useLanguage } from "./contexts/language-context";
import { getTranslation } from "./translations";
import HeroCantact from "./heroCantact";
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
import LanguageSelector from "./components/language-selector";
// import TravelGallerySection from "./travel-gallery-section";
import about from "./public/360_F_304881889_yJ1S3butl9gVs0kMptYTU2N1EVmEJbz8.jpg";
import img2 from "./public/images (1).jpg";
import img3 from "./public/tailnad3.avif";
import img4 from "./public/turkey5.jpg";
import logo from "./public/logo.png";
import img5 from "./public/dubai3.webp";

const BOT_TOKEN = "7599871236:AAHEmAJGbaKfayGP9h6zlVTXgeBqhtQW8jQ ";
const CHAT_ID = "1744099835";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxAkwoaxzTvnCTNGLnhtvyyvYnnjXSOtLGfKup2FJF_px0QCruqikzA5TRAtgSBaqk8aw/exec";

export default function TravelTownLanding() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmits = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(formRef.current),
      });

      if (response.ok) {
        alert("Thank you! Form is submitted");
        window.location.reload();
      } else {
        console.error("Submission failed.");
      }
    } catch (error) {
      console.error("Error!", (error as Error).message);
    }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const text = `
📩 Yangi murojaat\n
👤 Ism: ${formData.firstName} ${formData.lastName}\n
📧 Email: ${formData.email}\n
📝 Mavzu: ${formData.subject}\n
💬 Xabar: ${formData.message}\n
📞 Telefon: ${formData.phone}

    `;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
          }),
        }
      );

      if (res.ok) {
        window.alert("✅ Xabaringiz yuborildi!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
          phone: "",
        });
      } else {
        window.alert("❌ Xatolik yuz berdi");
      }
    } catch (err) {
      window.alert("❗ Internetda muammo bor");
    }
  };

  const { language } = useLanguage();
  const t = getTranslation(language);
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between py-4 px-4  md:px-0">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="w-[150px] h-auto relative">
                <Image
                  src={logo}
                  alt="Tropical destination with overwater bungalows"
                  width={150}
                  height={50}
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
              style={{ fontWeight: "500", fontSize: "18px" }}
            >
              {t.home}
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
              style={{ fontWeight: "500", fontSize: "18px" }}
            >
              {t.about}
            </Link>
            <Link
              href="#packages"
              className="text-sm font-medium transition-colors hover:text-primary"
              style={{ fontWeight: "500", fontSize: "18px" }}
            >
              {t.packages}
            </Link>
            {/* <Link
              href="#gallery"
              className="text-sm font-medium transition-colors hover:text-primary"
              style={{ fontWeight: "500", fontSize: "18px" }}
            >
              {t.gallery}
            </Link> */}
            <Link
              href="#faq"
              className="text-sm font-medium transition-colors hover:text-primary"
              style={{ fontWeight: "500", fontSize: "18px" }}
            >
              {t.faq}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              style={{ fontWeight: "500", fontSize: "18px" }}
            >
              {t.contact}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <Button className="hidden md:flex">{t.bookNow}</Button>
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
                    style={{ fontWeight: "500", fontSize: "18px" }}
                  >
                    {t.home}
                  </Link>
                  <Link
                    href="#about"
                    className="text-sm font-medium transition-colors hover:text-primary"
                    style={{ fontWeight: "500", fontSize: "18px" }}
                  >
                    {t.about}
                  </Link>
                  <Link
                    href="#packages"
                    className="text-sm font-medium transition-colors hover:text-primary"
                    style={{ fontWeight: "500", fontSize: "18px" }}
                  >
                    {t.packages}
                  </Link>
                  <Link
                    href="#faq"
                    className="text-sm font-medium transition-colors hover:text-primary"
                    style={{ fontWeight: "500", fontSize: "18px" }}
                  >
                    {t.faq}
                  </Link>
                  <Link
                    href="#contact"
                    className="text-sm font-medium transition-colors hover:text-primary"
                    style={{ fontWeight: "500", fontSize: "18px" }}
                  >
                    {t.contact}
                  </Link>
                  <Button>Hozir buyurtma bering</Button>
                  <LanguageSelector />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroCantact />
        {/* Destination Cards Section */}
        <DestinationCardsSection />
        {/* Package Types Section */}
        {/* <PackageTypesSection />  */}
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
                  {t.aboutTitle}
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.aboutParagraph1}
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.aboutParagraph2}
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button>{t.ourStory}</Button>
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
                  Bizning sayohat paketlarimiz
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Har bir did va byudjetga mos keladigan, diqqat bilan tanlangan
                  sayohat paketlarimizdan tanlang.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={img5}
                      alt="Beach destination"
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardTitle className="mt-4">Dubai</CardTitle>
                  <CardDescription>
                    Tinchlanish va quyoshni sevuvchilar uchun ideal
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
                  <div className="mt-4 text-2xl font-bold">$380</div>
                  <div className="text-sm text-gray-500">
                    Har bir kishi uchun
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Hozir buyurtma bering</Button>
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
                  <CardTitle className="mt-4">Thailand</CardTitle>
                  <CardDescription>
                    Hayajon izlovchilar va tabiatni sevuvchilar uchun
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
                  <div className="mt-4 text-2xl font-bold">$320</div>
                  <div className="text-sm text-gray-500">
                    Har bir kishi uchun
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Hozir buyurtma bering</Button>
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
                  <CardTitle className="mt-4">Turkey</CardTitle>
                  <CardDescription>
                    Tarix va madaniyatga sho'ng'ish
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
                  <div className="mt-4 text-2xl font-bold">$420</div>
                  <div className="text-sm text-gray-500">
                    Har bir kishi uchun
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Hozir buyurtma bering</Button>
                </CardFooter>
              </Card>
              {/* <Card>
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={img4}
                      alt="City exploration"
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardTitle className="mt-4">Turkey</CardTitle>
                  <CardDescription>
                    Tarix va madaniyatga sho'ng'ish
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
                  <div className="mt-4 text-2xl font-bold">$420</div>
                  <div className="text-sm text-gray-500">
                    Har bir kishi uchun
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Hozir buyurtma bering</Button>
                </CardFooter>
              </Card> */}
            </div>
          </div>
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t.contactTitle}
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.contactSubtitle}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>123 Travel Street, Adventure City, TC 12345</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+998 99 292-11-11</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@travel_town.com</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button
                    size="icon"
                    onClick={() =>
                      window.open("https://t.me/Traveltownuz", "_blank")
                    }
                    variant="outline"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 240 240"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="120" cy="120" r="120" fill="#6c6767" />
                      <path
                        d="M179.7 76.7 158 169.8c-1.5 6.4-5.6 8-11.3 5l-31.2-23.1-15 14.4c-1.7 1.7-3.1 3.1-6.3 3.1l2.2-31.3 56.9-51.4c2.5-2.2-.6-3.5-3.9-1.3L82.5 129.3 52.1 120c-6.2-1.9-6.3-6.2 1.3-9.1l121.4-46.9c5.7-2.1 10.7 1.4 8.9 8.7Z"
                        fill="#fff"
                      />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button
                    size="icon"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/traveltownuz",
                        "_blank"
                      )
                    }
                    variant="outline"
                  >
                    <Instagram className="h-5 w-5" />
                    <a
                      href="https://www.instagram.com/traveltownuz"
                      target="_blank"
                      className="sr-only"
                    >
                      Instagram
                    </a>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold">{t.sendMessage}</h3>
                  <form
                    // ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-4 space-y-4"
                    method="POST"
                    action={
                      "https://script.google.com/macros/s/AKfycbwiltkzWkm-cINpsiuVGqxrKn--DsiHW9uh0INSRKv8evypTFSc4JXiVdgtMFa83az_Wg/exec"
                    }
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Input
                          placeholder={t.firstName}
                          value={formData.firstName}
                          onChange={handleChange}
                          name="firstName"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Input
                          placeholder={t.lastName}
                          value={formData.lastName}
                          onChange={handleChange}
                          name="lastName"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder={t.email}
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        placeholder={t.subject}
                        value={formData.subject}
                        onChange={handleChange}
                        name="subject"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        placeholder="+99899000000"
                        value={formData.phone}
                        onChange={handleChange}
                        name="phone"
                        required
                        type="tel"
                      />
                    </div>
                    <div className="space-y-2">
                      <Textarea
                        placeholder={t.yourMessage}
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[120px]"
                        name="message"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      {t.sendMessage}
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
              <p className="text-gray-400">{t.footerAbout}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{t.quickLinks}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    {t.home}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-white"
                  >
                    {t.about}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#packages"
                    className="text-gray-400 hover:text-white"
                  >
                    {t.packages}
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="#gallery"
                    className="text-gray-400 hover:text-white"
                  >
                    {t.gallery}
                  </Link>
                </li> */}
                <li>
                  <Link href="#faq" className="text-gray-400 hover:text-white">
                    {t.faq}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-400 hover:text-white"
                  >
                    {t.contact}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                {t.popularDestinationsFooter}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Bali, Indonesia
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Phuket, Tailand
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Istanbul, Turkey
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Madinat Jumeirah, Dubai
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{t.newsletter}</h3>
              <p className="text-gray-400">{t.subscribeText}</p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Travel Town. {t.allRightsReserved}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
