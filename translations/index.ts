import type { LanguageCode } from "../contexts/language-context"

export interface Translations {
  // Header
  home: string
  about: string
  packages: string
  gallery: string
  faq: string
  contact: string
  bookNow: string

  // Hero
  heroTitle: string
  heroSubtitle: string

  // Search Form
  yourDestination: string
  whereTo: string
  numberOfPeople: string
  country: string
  phoneNumber: string
  searchPackages: string

  // Destinations
  popularDestinations: string
  exploreDestinations: string
  viewAllDestinations: string

  // Package Types
  explorePackages: string
  perfectTravel: string
  choosePackages: string
  viewAllPackageTypes: string
  explorePackagesButton: string

  // Beach Vacations
  beachVacations: string
  beachDescription: string

  // Mountain Retreats
  mountainRetreats: string
  mountainDescription: string

  // City Explorations
  cityExplorations: string
  cityDescription: string

  // Island Getaways
  islandGetaways: string
  islandDescription: string

  // Safari Adventures
  safariAdventures: string
  safariDescription: string

  // Cruise Journeys
  cruiseJourneys: string
  cruiseDescription: string

  // Popular Destinations
  popularDestinationsTitle: string
  popularDestinationsSubtitle: string

  // About
  aboutTitle: string
  aboutParagraph1: string
  aboutParagraph2: string
  ourStory: string
  meetTeam: string

  // Gallery
  travelInspiration: string
  galleryTitle: string
  gallerySubtitle: string

  // Packages
  travelPackages: string
  travelPackagesSubtitle: string

  // Package Cards
  beachGetaway: string
  beachGetawayDesc: string
  mountainAdventure: string
  mountainAdventureDesc: string
  culturalTour: string
  culturalTourDesc: string
  accommodation: string
  allInclusive: string
  waterActivities: string
  airportTransfers: string
  guidedHiking: string
  equipmentRental: string
  mealsTransportation: string
  boutiqueHotels: string
  expertGuides: string
  museumPasses: string
  dailyBreakfast: string
  perPerson: string

  // Contact
  contactTitle: string
  contactSubtitle: string
  firstName: string
  lastName: string
  email: string
  subject: string
  yourMessage: string
  sendMessage: string

  // Footer
  footerAbout: string
  quickLinks: string
  popularDestinationsFooter: string
  newsletter: string
  subscribeText: string
  yourEmail: string
  subscribe: string
  allRightsReserved: string

  // Common
  days: string
  nights: string
}

export const translations: Record<LanguageCode, Translations> = {
  en: {
    // Header
    home: "Home",
    about: "About",
    packages: "Packages",
    gallery: "Gallery",
    faq: "FAQ",
    contact: "Contact",
    bookNow: "Book Now",

    // Hero
    heroTitle: "Discover Your Perfect Getaway!",
    heroSubtitle: "Experience comfort, luxury, and unforgettable adventures with our premium travel packages.",

    // Search Form
    yourDestination: "Your name",
    whereTo: "Enter your name",
    numberOfPeople: "Number of People",
    country: "Country",
    phoneNumber: "Phone Number",
    searchPackages: "Search Packages",

    // Destinations
    popularDestinations: "Popular Destinations",
    exploreDestinations: "Explore our most sought-after destinations loved by travelers worldwide",
    viewAllDestinations: "View All Destinations",

    // Package Types
    explorePackages: "Explore Our Packages",
    perfectTravel: "Find Your Perfect Travel Experience",
    choosePackages:
      "Choose from our wide range of carefully curated travel packages designed for every type of traveler",
    viewAllPackageTypes: "View All Package Types",
    explorePackagesButton: "Explore Packages",

    // Beach Vacations
    beachVacations: "Beach Vacations",
    beachDescription: "Relax on pristine beaches with crystal clear waters",

    // Mountain Retreats
    mountainRetreats: "Mountain Retreats",
    mountainDescription: "Discover breathtaking views and adventure in the mountains",

    // City Explorations
    cityExplorations: "City Explorations",
    cityDescription: "Immerse yourself in culture, history and urban experiences",

    // Island Getaways
    islandGetaways: "Island Getaways",
    islandDescription: "Escape to paradise islands for unforgettable experiences",

    // Safari Adventures
    safariAdventures: "Safari Adventures",
    safariDescription: "Encounter wildlife and experience nature at its finest",

    // Cruise Journeys
    cruiseJourneys: "Cruise Journeys",
    cruiseDescription: "Sail across beautiful waters with luxury and comfort",

    // Popular Destinations
    popularDestinationsTitle: "Popular Destinations",
    popularDestinationsSubtitle: "Explore our most sought-after destinations loved by travelers worldwide",

    // About
    aboutTitle: "About Travel Town",
    aboutParagraph1:
      "Travel Town was founded in 2025 with a simple mission: to make travel accessible, enjoyable, and memorable for everyone. Our team of experienced travel enthusiasts is dedicated to crafting the perfect getaway for you.",
    aboutParagraph2:
      "Whether you're looking for a relaxing beach vacation, an adventurous trek through mountains, or a cultural immersion in a historic city, we have the expertise and resources to make it happen.",
    ourStory: "Our Story",
    meetTeam: "Meet Our Team",

    // Gallery
    travelInspiration: "Travel Inspiration",
    galleryTitle: "Explore Our Travel Gallery",
    gallerySubtitle: "Immerse yourself in stunning destinations from around the world",

    // Packages
    travelPackages: "Our Travel Packages",
    travelPackagesSubtitle:
      "Choose from our carefully curated travel packages designed to suit every preference and budget.",

    // Package Cards
    beachGetaway: "Beach Getaway",
    beachGetawayDesc: "Perfect for relaxation and sun lovers",
    mountainAdventure: "Mountain Adventure",
    mountainAdventureDesc: "For thrill-seekers and nature enthusiasts",
    culturalTour: "Cultural City Tour",
    culturalTourDesc: "Immerse yourself in history and culture",
    accommodation: "7 days / 6 nights accommodation",
    allInclusive: "All-inclusive meals and drinks",
    waterActivities: "Water activities included",
    airportTransfers: "Airport transfers",
    guidedHiking: "Guided hiking tours",
    equipmentRental: "Equipment rental included",
    mealsTransportation: "Meals and transportation",
    boutiqueHotels: "6 days / 5 nights in boutique hotels",
    expertGuides: "Expert local guides",
    museumPasses: "Museum and attraction passes",
    dailyBreakfast: "Daily breakfast and select meals",
    perPerson: "per person",

    // Contact
    contactTitle: "Contact Us",
    contactSubtitle: "Have questions or ready to plan your next adventure? Get in touch with our travel experts.",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    subject: "Subject",
    yourMessage: "Your Message",
    sendMessage: "Send Message",

    // Footer
    footerAbout: "Making your travel dreams come true since 2025. Your journey begins with us.",
    quickLinks: "Quick Links",
    popularDestinationsFooter: "Popular Destinations",
    newsletter: "Newsletter",
    subscribeText: "Subscribe to get special offers and travel tips.",
    yourEmail: "Your Email",
    subscribe: "Subscribe",
    allRightsReserved: "All rights reserved.",

    // Common
    days: "days",
    nights: "nights",
  },

  uz: {
    // Header
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    packages: "Paketlar",
    gallery: "Galereya",
    faq: "Savollar",
    contact: "Aloqa",
    bookNow: "Hozir band qiling",

    // Hero
    heroTitle: "Yaxshi dam olish joyingizni kashf qiling!",
    heroSubtitle:
      "Qulaylik, hashamat va unutilmas sarguzashtlarni bizning premium sayohat paketlarimiz bilan his eting.",

    // Search Form
    yourDestination: "Ismingiz",
    whereTo: "Ismingizni kiriting",
    numberOfPeople: "Odamlar soni",
    country: "Mamlakat",
    phoneNumber: "Telefon raqami",
    searchPackages: "Paketlarni qidirish",

    // Destinations
    popularDestinations: "Mashhur manzillar",
    exploreDestinations: "Butun dunyo sayohatchilari sevadigan eng ko'p so'raladigan manzillarimizni o'rganing",
    viewAllDestinations: "Barcha manzillarni ko'rish",

    // Package Types
    explorePackages: "Paketlarimizni o'rganing",
    perfectTravel: "O'zingizning mukammal sayohat tajribangizni toping",
    choosePackages:
      "Har bir sayohatchi uchun mo'ljallangan diqqat bilan tanlangan keng ko'lamli sayohat paketlarimizdan tanlang",
    viewAllPackageTypes: "Barcha paket turlarini ko'rish",
    explorePackagesButton: "Paketlarni o'rganing",

    // Beach Vacations
    beachVacations: "Plaj ta'tillari",
    beachDescription: "Tiniq suvli sof plyajlarda dam oling",

    // Mountain Retreats
    mountainRetreats: "Tog' dam olish joylari",
    mountainDescription: "Tog'larda ajoyib manzaralar va sarguzashtlarni kashf eting",

    // City Explorations
    cityExplorations: "Shahar tadqiqotlari",
    cityDescription: "Madaniyat, tarix va shahar tajribalariga sho'ng'ing",

    // Island Getaways
    islandGetaways: "Orol sayohatlari",
    islandDescription: "Unutilmas tajribalar uchun jannat orollariga qoching",

    // Safari Adventures
    safariAdventures: "Safari sarguzashtlari",
    safariDescription: "Yovvoyi tabiat bilan uchrashing va tabiatni eng yaxshi holatda his eting",

    // Cruise Journeys
    cruiseJourneys: "Kruiz sayohatlari",
    cruiseDescription: "Hashamat va qulaylik bilan chiroyli suvlar bo'ylab suzib boring",

    // Popular Destinations
    popularDestinationsTitle: "Mashhur manzillar",
    popularDestinationsSubtitle: "Butun dunyo sayohatchilari sevadigan eng ko'p so'raladigan manzillarimizni o'rganing",

    // About
    aboutTitle: "Travel Town haqida",
    aboutParagraph1:
      "Travel Town 2025 yilda oddiy missiya bilan tashkil etilgan: sayohatni hamma uchun qulay, quvonchli va esda qolarli qilish. Tajribali sayohat ishqibozlaridan iborat jamoamiz siz uchun mukammal sayohatni yaratishga bag'ishlangan.",
    aboutParagraph2:
      "Siz dam olish uchun plaj ta'tilini, tog'lar bo'ylab sarguzashtli sayohatni yoki tarixiy shaharda madaniy immersiyani izlayotgan bo'lsangiz, bizda buni amalga oshirish uchun tajriba va resurslar mavjud.",
    ourStory: "Bizning hikoyamiz",
    meetTeam: "Jamoamiz bilan tanishing",

    // Gallery
    travelInspiration: "Sayohat ilhomi",
    galleryTitle: "Sayohat galereyamizni o'rganing",
    gallerySubtitle: "Butun dunyodagi ajoyib manzillarga sho'ng'ing",

    // Packages
    travelPackages: "Bizning sayohat paketlarimiz",
    travelPackagesSubtitle:
      "Har qanday afzallik va byudjetga mos keladigan diqqat bilan tanlangan sayohat paketlarimizdan tanlang.",

    // Package Cards
    beachGetaway: "Plaj sayohati",
    beachGetawayDesc: "Dam olish va quyosh sevuvchilar uchun ideal",
    mountainAdventure: "Tog' sarguzashti",
    mountainAdventureDesc: "Hayajon izlovchilar va tabiat ishqibozlari uchun",
    culturalTour: "Madaniy shahar sayohati",
    culturalTourDesc: "Tarix va madaniyatga sho'ng'ing",
    accommodation: "7 kun / 6 kecha yashash joyi",
    allInclusive: "Barcha ovqatlar va ichimliklar kiritilgan",
    waterActivities: "Suv faoliyatlari kiritilgan",
    airportTransfers: "Aeroport transferlari",
    guidedHiking: "Yo'l-yo'riq ko'rsatuvchi piyoda sayohatlar",
    equipmentRental: "Uskunalar ijarasi kiritilgan",
    mealsTransportation: "Ovqatlar va transport",
    boutiqueHotels: "6 kun / 5 kecha butik mehmonxonalarda",
    expertGuides: "Ekspert mahalliy yo'l ko'rsatuvchilar",
    museumPasses: "Muzey va attraksion chiptalar",
    dailyBreakfast: "Kunlik nonushta va tanlangan ovqatlar",
    perPerson: "har bir kishi uchun",

    // Contact
    contactTitle: "Biz bilan bog'laning",
    contactSubtitle:
      "Savollaringiz bormi yoki keyingi sarguzashtingizni rejalashtirmoqchimisiz? Sayohat ekspertlarimiz bilan bog'laning.",
    firstName: "Ism",
    lastName: "Familiya",
    email: "Elektron pochta",
    subject: "Mavzu",
    yourMessage: "Sizning xabaringiz",
    sendMessage: "Xabar yuborish",

    // Footer
    footerAbout:
      "2025 yildan beri sizning sayohat orzularingizni ro'yobga chiqarmoqdamiz. Sizning sayohatingiz biz bilan boshlanadi.",
    quickLinks: "Tezkor havolalar",
    popularDestinationsFooter: "Mashhur manzillar",
    newsletter: "Yangiliklar",
    subscribeText: "Maxsus takliflar va sayohat maslahatlarini olish uchun obuna bo'ling.",
    yourEmail: "Elektron pochtangiz",
    subscribe: "Obuna bo'lish",
    allRightsReserved: "Barcha huquqlar himoyalangan.",

    // Common
    days: "kun",
    nights: "kecha",
  },

  ru: {
    // Header
    home: "Главная",
    about: "О нас",
    packages: "Пакеты",
    gallery: "Галерея",
    faq: "Вопросы",
    contact: "Контакты",
    bookNow: "Забронировать",

    // Hero
    heroTitle: "Откройте для себя идеальный отдых!",
    heroSubtitle:
      "Испытайте комфорт, роскошь и незабываемые приключения с нашими премиальными туристическими пакетами.",

    // Search Form
    yourDestination: "Ваше имя",
    whereTo: "Введите ваше имя",
    numberOfPeople: "Количество людей",
    country: "Страна",
    phoneNumber: "Номер телефона",
    searchPackages: "Искать пакеты",

    // Destinations
    popularDestinations: "Популярные направления",
    exploreDestinations: "Исследуйте наши самые востребованные направления, любимые путешественниками по всему миру",
    viewAllDestinations: "Посмотреть все направления",

    // Package Types
    explorePackages: "Изучите наши пакеты",
    perfectTravel: "Найдите свой идеальный туристический опыт",
    choosePackages:
      "Выбирайте из нашего широкого спектра тщательно подобранных туристических пакетов, разработанных для каждого типа путешественника",
    viewAllPackageTypes: "Посмотреть все типы пакетов",
    explorePackagesButton: "Изучить пакеты",

    // Beach Vacations
    beachVacations: "Пляжный отдых",
    beachDescription: "Расслабьтесь на нетронутых пляжах с кристально чистой водой",

    // Mountain Retreats
    mountainRetreats: "Горные убежища",
    mountainDescription: "Откройте для себя захватывающие виды и приключения в горах",

    // City Explorations
    cityExplorations: "Городские исследования",
    cityDescription: "Погрузитесь в культуру, историю и городской опыт",

    // Island Getaways
    islandGetaways: "Островные убежища",
    islandDescription: "Сбегите на райские острова для незабываемых впечатлений",

    // Safari Adventures
    safariAdventures: "Сафари-приключения",
    safariDescription: "Встретьтесь с дикой природой и испытайте природу в ее лучшем виде",

    // Cruise Journeys
    cruiseJourneys: "Круизные путешествия",
    cruiseDescription: "Плавайте по прекрасным водам с роскошью и комфортом",

    // Popular Destinations
    popularDestinationsTitle: "Популярные направления",
    popularDestinationsSubtitle:
      "Исследуйте наши самые востребованные направления, любимые путешественниками по всему миру",

    // About
    aboutTitle: "О Travel Town",
    aboutParagraph1:
      "Travel Town был основан в 2025 году с простой миссией: сделать путешествия доступными, приятными и запоминающимися для всех. Наша команда опытных энтузиастов путешествий посвящена созданию идеального отдыха для вас.",
    aboutParagraph2:
      "Ищете ли вы расслабляющий пляжный отдых, приключенческий поход по горам или культурное погружение в исторический город, у нас есть опыт и ресурсы, чтобы сделать это возможным.",
    ourStory: "Наша история",
    meetTeam: "Познакомьтесь с нашей командой",

    // Gallery
    travelInspiration: "Вдохновение для путешествий",
    galleryTitle: "Исследуйте нашу галерею путешествий",
    gallerySubtitle: "Погрузитесь в потрясающие направления со всего мира",

    // Packages
    travelPackages: "Наши туристические пакеты",
    travelPackagesSubtitle:
      "Выбирайте из наших тщательно подобранных туристических пакетов, разработанных для любых предпочтений и бюджета.",

    // Package Cards
    beachGetaway: "Пляжный отдых",
    beachGetawayDesc: "Идеально для релаксации и любителей солнца",
    mountainAdventure: "Горное приключение",
    mountainAdventureDesc: "Для искателей острых ощущений и любителей природы",
    culturalTour: "Культурный городской тур",
    culturalTourDesc: "Погрузитесь в историю и культуру",
    accommodation: "7 дней / 6 ночей проживания",
    allInclusive: "Все включено: питание и напитки",
    waterActivities: "Водные развлечения включены",
    airportTransfers: "Трансферы из аэропорта",
    guidedHiking: "Пешие экскурсии с гидом",
    equipmentRental: "Аренда снаряжения включена",
    mealsTransportation: "Питание и транспорт",
    boutiqueHotels: "6 дней / 5 ночей в бутик-отелях",
    expertGuides: "Опытные местные гиды",
    museumPasses: "Билеты в музеи и достопримечательности",
    dailyBreakfast: "Ежедневный завтрак и избранные блюда",
    perPerson: "на человека",

    // Contact
    contactTitle: "Свяжитесь с нами",
    contactSubtitle:
      "Есть вопросы или готовы планировать свое следующее приключение? Свяжитесь с нашими экспертами по путешествиям.",
    firstName: "Имя",
    lastName: "Фамилия",
    email: "Электронная почта",
    subject: "Тема",
    yourMessage: "Ваше сообщение",
    sendMessage: "Отправить сообщение",

    // Footer
    footerAbout: "Воплощаем ваши мечты о путешествиях в реальность с 2025 года. Ваше путешествие начинается с нас.",
    quickLinks: "Быстрые ссылки",
    popularDestinationsFooter: "Популярные направления",
    newsletter: "Рассылка",
    subscribeText: "Подпишитесь, чтобы получать специальные предложения и советы по путешествиям.",
    yourEmail: "Ваш email",
    subscribe: "Подписаться",
    allRightsReserved: "Все права защищены.",

    // Common
    days: "дней",
    nights: "ночей",
  },
}

export function getTranslation(language: LanguageCode) {
  return translations[language]
}

