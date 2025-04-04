"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type LanguageCode = "en" | "uz" | "ru";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>("en");

  useEffect(() => {
    // Load saved language on mount
    const savedLanguage = localStorage.getItem("language") as LanguageCode;
    if (savedLanguage && ["en", "uz", "ru"].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (newLanguage: LanguageCode) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);

    // Dispatch a custom event for components that don't use the context
    const event = new CustomEvent("languageChange", {
      detail: { language: newLanguage },
    });
    window.dispatchEvent(event);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
