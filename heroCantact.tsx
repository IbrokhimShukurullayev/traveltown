import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import img1 from "./public/bgd.png";
import { useLanguage } from "./contexts/language-context";
import { getTranslation } from "./translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BOT_TOKEN = "7599871236:AAHEmAJGbaKfayGP9h6zlVTXgeBqhtQW8jQ";
const CHAT_ID = "-1002685767568";

const HeroCantact = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const [form, setForm] = useState({
    destination: "",
    people: "1",
    country: "maldives",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const message = `
🌍 Yangi sayohat so'rovi:\n
📍 Yo'nalish: ${form.destination}\n
👥 Odam soni: ${form.people}\n
🗺️ Mamlakat: ${form.country}\n
📞 Telefon: ${form.phone}
    `;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
          }),
        }
      );

      if (res.ok) {
        window.alert("✅ So‘rovingiz muvaffaqiyatli yuborildi!");
        setForm({
          destination: "",
          people: "1",
          country: "maldives",
          phone: "",
        });
      } else {
        window.alert("❌ Xatolik yuz berdi. Qaytadan urinib ko‘ring.");
      }
    } catch (error) {
      window.alert("📡 Internet aloqasida muammo bor.");
    }
  };
  return (
    <section className="w-full relative">
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
        <div
          className="banner flex flex-col  items-start space-y-4 pt-[70px] pb-[110px] text-white max-w-3xl  md:pt-[160px] md:pb-[300px]"
          // style={{ padding: "70px 0 110px 0" }}
        >
          <div className="space-y-2">
            <div className="inline-block bg-cyan-500 px-4 py-2 text-2xl font-bold rounded-md">
              Travel Town
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="max-w-[700px] text-lg md:text-xl">{t.heroSubtitle}</p>
          </div>
        </div>

        {/* Search form overlay */}
        <div className="relative bottom-12 left-0 right-0 mx-auto w-full max-w-6xl bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg z-20  md:absolute">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">
                {t.yourDestination}
              </label>
              <Input
                placeholder={t.yourDestination}
                value={form.destination}
                name="destination"
                onChange={handleChange}
                className="w-full"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                {t.numberOfPeople}
              </label>
              <select
                value={form.people}
                name="people"
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                {t.country}
              </label>
              <select
                value={form.country}
                onChange={handleChange}
                name="country"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="maldives">Dubay</option>
                <option value="thailand">Thailand</option>
                <option value="bali">Bali, Indonesia</option>
                <option value="turkey">Turkey</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                {t.phoneNumber}
              </label>
              <Input
                value={form.phone}
                name="phone"
                onChange={handleChange}
                type="tel"
                placeholder="+99899000000"
                className="w-full"
                required
              />
            </div>
            <div className="flex items-end">
              <Button
                onClick={handleSubmit}
                className="w-full bg-cyan-500 mx-auto text-center  h-10"
              >
                {t.searchPackages}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCantact;
