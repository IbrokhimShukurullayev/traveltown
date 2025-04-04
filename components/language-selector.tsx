"use client";

import { useLanguage, type LanguageCode } from "@/contexts/language-context";
import { Check, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type Language = {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
};

export default function LanguageSelector() {
  const languages: Language[] = [
    { code: "uz", name: "Uzbek", nativeName: "O'zbek", flag: "🇺🇿" },
    { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
    { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺" },
  ];

  const { language, setLanguage } = useLanguage();

  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[1];

  const handleLanguageChange = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage.code);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-8 gap-1 px-2 lg:gap-2 lg:px-3"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-block">
            {currentLanguage.nativeName}
          </span>
          <span className="inline-block sm:hidden">{currentLanguage.flag}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className="flex items-center gap-2 px-3 py-2 cursor-pointer"
            onClick={() => handleLanguageChange(lang)}
          >
            <span className="mr-1">{lang.flag}</span>
            <span className="flex-1">{lang.nativeName}</span>
            {currentLanguage.code === lang.code && (
              <Check className="h-4 w-4 text-green-500" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
