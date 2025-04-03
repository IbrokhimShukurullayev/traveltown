import type { Metadata } from "next";
import "./globals.css";
// import { I18nextProvider } from "react-i18next";
// import i18next from "i18next";
import global_ru from "../components/locales/rus/common.json";
import global_uz from "../components/locales/uz/common.json";
import global_en from "../components/locales/en/common.json";

// I18next konfiguratsiyasi
// i18next.init({
//   interpolation: { escapeValue: false },
//   lng: "uz", // Boshlang'ich til o'zbek
//   resources: {
//     uz: {
//       global: global_uz,
//     },
//     ru: {
//       global: global_ru,
//     },
//     en: {
//       global: global_ru,
//     },
//   },
// });

export const metadata: Metadata = {
  title: "Travel town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <I18nextProvider i18n={i18next}> */}
      <body>{children}</body>
      {/* </I18nextProvider> */}
    </html>
  );
}
