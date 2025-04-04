"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Language = "en" | "uz" | "ru";

interface FAQTranslations {
  title: string;
  subtitle: string;
  badge: string;
  stillHaveQuestions: string;
  contactUs: string;
  callUs: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export default function FAQSection() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");

  // Get the current language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Subscribe to language change events
  useEffect(() => {
    const handleLanguageChange = (
      event: CustomEvent<{ language: Language }>
    ) => {
      setCurrentLanguage(event.detail.language);
    };

    window.addEventListener(
      "languageChange" as any,
      handleLanguageChange as EventListener
    );
    return () => {
      window.removeEventListener(
        "languageChange" as any,
        handleLanguageChange as EventListener
      );
    };
  }, []);

  const translations: Record<Language, FAQTranslations> = {
    en: {
      title: "Frequently Asked Questions",
      subtitle:
        "Find answers to common questions about our travel packages, booking process, and more",
      badge: "Got Questions?",
      stillHaveQuestions: "Still have questions? We're here to help!",
      contactUs: "Contact Us",
      callUs: "Call Us: +998992921111",
      questions: [
        {
          question: "How do I book a travel package?",
          answer:
            "You can book a travel package through our website by selecting your desired destination, dates, and package type. Follow the booking process, provide the required information, and complete the payment. Alternatively, you can contact our customer service team for assistance with your booking.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and in some destinations, payment in installments. All payments are processed securely through our encrypted payment system.",
        },
        {
          question: "Can I modify or cancel my reservation?",
          answer:
            "Yes, you can modify or cancel your reservation according to our cancellation policy. Changes made 30+ days before departure typically incur minimal or no fees. Cancellations made 15-29 days before departure may be subject to a partial refund, while those made less than 14 days before departure may not be eligible for a refund.",
        },
        {
          question: "What's included in your travel packages?",
          answer:
            "Our travel packages typically include accommodation, selected meals, transportation (including airport transfers), guided tours as specified in the itinerary, and entrance fees to listed attractions. Some packages also include additional activities, special events, or all-inclusive options.",
        },
        {
          question: "Are flights included in the package price?",
          answer:
            "Most of our packages do not include international flights by default, allowing you flexibility in your travel arrangements. However, we can arrange flights for you at an additional cost. Some packages include domestic flights or transfers where necessary for the itinerary.",
        },
        {
          question: "Do I need a visa for my destination?",
          answer:
            "Visa requirements vary depending on your nationality and destination. While we provide general information, we recommend checking with the embassy or consulate of your destination country for the most up-to-date visa requirements. Our team can assist with information and guidance on the visa application process.",
        },
        {
          question: "What travel insurance do you recommend?",
          answer:
            "We strongly recommend comprehensive travel insurance that covers medical emergencies, trip cancellation, lost luggage, and other unexpected events. We can offer travel insurance options during the booking process, or you can arrange your own coverage.",
        },
        {
          question: "Will there be a tour guide during the trip?",
          answer:
            "Most of our packages include professional, English-speaking tour guides (and guides in other languages upon request). For self-guided tours, we provide detailed information and 24/7 emergency contact. The specific details about guides are clearly mentioned in each package description.",
        },
        {
          question: "What happens if I encounter problems during my trip?",
          answer:
            "We provide 24/7 emergency support for all travelers. You'll receive a contact number before your departure that you can call anytime for assistance. Our local representatives are also available to help resolve any issues that may arise during your trip.",
        },
        {
          question: "Do you offer customized travel packages?",
          answer:
            "Yes, we specialize in creating customized travel experiences tailored to your preferences, budget, and schedule. Contact our travel consultants to discuss your requirements, and we'll design a personalized itinerary just for you.",
        },
      ],
    },
    uz: {
      title: "Ko'p so'raladigan savollar",
      subtitle:
        "Sayohat paketlarimiz, bron qilish jarayoni va boshqalar haqida tez-tez so'raladigan savollarga javoblar toping",
      badge: "Savollaringiz bormi?",
      stillHaveQuestions:
        "Hali ham savollaringiz bormi? Biz yordam berishga tayyormiz!",
      contactUs: "Biz bilan bog'laning",
      callUs: "Qo'ng'iroq qiling: +998992921111",
      questions: [
        {
          question: "Sayohat paketini qanday bron qilaman?",
          answer:
            "Siz veb-saytimiz orqali o'zingiz xohlagan yo'nalish, sanalar va paket turini tanlab, sayohat paketini bron qilishingiz mumkin. Bron qilish jarayonini bajaring, kerakli ma'lumotlarni taqdim eting va to'lovni amalga oshiring. Shuningdek, bron qilishda yordam olish uchun mijozlarga xizmat ko'rsatish jamoamiz bilan bog'lanishingiz mumkin.",
        },
        {
          question: "Qanday to'lov usullarini qabul qilasiz?",
          answer:
            "Biz turli xil to'lov usullarini qabul qilamiz, jumladan kredit/debet kartalar (Visa, MasterCard, American Express), PayPal, bank o'tkazmalari va ba'zi yo'nalishlarda bo'lib-bo'lib to'lash imkoniyati. Barcha to'lovlar bizning shifrlangan to'lov tizimimiz orqali xavfsiz ravishda amalga oshiriladi.",
        },
        {
          question:
            "Men o'z bronimni o'zgartirish yoki bekor qilishim mumkinmi?",
          answer:
            "Ha, siz bizning bekor qilish siyosatimizga muvofiq o'z bronlaringizni o'zgartirish yoki bekor qilishingiz mumkin. Jo'nashdan 30+ kun oldin qilingan o'zgartirishlar odatda minimal yoki hech qanday to'lovlarni talab qilmaydi. Jo'nashdan 15-29 kun oldin bekor qilingan bronlar qisman qaytarilishi mumkin, jo'nashdan 14 kundan kam vaqt oldin bekor qilingan bronlar esa qaytarilmasligi mumkin.",
        },
        {
          question: "Sayohat paketlaringizga nimalar kiradi?",
          answer:
            "Bizning sayohat paketlarimizga odatda turar joy, tanlangan ovqatlar, transport (shu jumladan aeroportdan transfer), yo'nalishda ko'rsatilgan sayohatlar va ro'yxatdagi diqqatga sazovor joylarga kirish uchun to'lovlar kiradi. Ba'zi paketlarga qo'shimcha faoliyatlar, maxsus tadbirlar yoki hamma narsa kiritilgan variantlar ham kiradi.",
        },
        {
          question: "Paket narxiga parvozlar kiradimi?",
          answer:
            "Bizning ko'pchilik paketlarimizga xalqaro parvozlar standart bo'yicha kiritilmagan, bu sizga sayohat tartiblaringizda moslashuvchanlik beradi. Biroq, biz sizga qo'shimcha to'lov evaziga parvozlarni tashkil qilib berishimiz mumkin. Ba'zi paketlarga yo'nalish uchun zarur bo'lgan ichki parvozlar yoki transferlar kiradi.",
        },
        {
          question: "Manzilim uchun viza kerakmi?",
          answer:
            "Viza talablari sizning fuqaroligingiz va manzilingizga qarab farq qiladi. Biz umumiy ma'lumot taqdim etsak-da, eng so'nggi viza talablari uchun manzilingiz davlatining elchixonasi yoki konsulligiga murojaat qilishni tavsiya qilamiz. Jamoamiz viza olish jarayoni bo'yicha ma'lumot va yo'l-yo'riq ko'rsatishda yordam berishi mumkin.",
        },
        {
          question: "Qanday sayohat sug'urtasini tavsiya qilasiz?",
          answer:
            "Biz tibbiy favqulodda holatlar, sayohatni bekor qilish, yo'qolgan bagaj va boshqa kutilmagan hodisalarni qoplaydigan keng qamrovli sayohat sug'urtasini qattiq tavsiya qilamiz. Biz bron qilish jarayonida sayohat sug'urtasi variantlarini taklif qilishimiz mumkin yoki siz o'zingizning qamrovingizni tashkil qilishingiz mumkin.",
        },
        {
          question: "Sayohat davomida gid bo'ladimi?",
          answer:
            "Bizning ko'pchilik paketlarimizga professional, ingliz tilida so'zlashuvchi gidlar (va so'rov bo'yicha boshqa tillardagi gidlar) kiradi. O'z-o'zini boshqaradigan sayohatlar uchun biz batafsil ma'lumot va 24/7 favqulodda aloqa taqdim etamiz. Gidlar haqidagi aniq ma'lumotlar har bir paket tavsifida aniq ko'rsatilgan.",
        },
        {
          question: "Sayohatim davomida muammolarga duch kelsam nima bo'ladi?",
          answer:
            "Biz barcha sayohatchilar uchun 24/7 favqulodda yordam ko'rsatamiz. Siz jo'nashdan oldin har qanday vaqtda yordam so'rash uchun qo'ng'iroq qilishingiz mumkin bo'lgan aloqa raqamini olasiz. Bizning mahalliy vakillarimiz ham sayohatingiz davomida yuzaga kelishi mumkin bo'lgan har qanday muammolarni hal qilishda yordam berish uchun mavjud.",
        },
        {
          question: "Siz moslashtirilgan sayohat paketlarini taklif qilasizmi?",
          answer:
            "Ha, biz sizning afzalliklaringiz, byudjetingiz va jadvalingizga moslashtirilgan sayohat tajribalarini yaratishga ixtisoslashganmiz. Talablaringizni muhokama qilish uchun sayohat maslahatchilarimiz bilan bog'laning va biz siz uchun shaxsiy yo'nalish ishlab chiqamiz.",
        },
      ],
    },
    ru: {
      title: "Часто задаваемые вопросы",
      subtitle:
        "Найдите ответы на распространенные вопросы о наших туристических пакетах, процессе бронирования и многом другом",
      badge: "Есть вопросы?",
      stillHaveQuestions: "Остались вопросы? Мы здесь, чтобы помочь!",
      contactUs: "Свяжитесь с нами",
      callUs: "Позвоните нам: +998992921111",
      questions: [
        {
          question: "Как забронировать туристический пакет?",
          answer:
            "Вы можете забронировать туристический пакет через наш веб-сайт, выбрав желаемое направление, даты и тип пакета. Следуйте процессу бронирования, предоставьте необходимую информацию и завершите оплату. Кроме того, вы можете связаться с нашей службой поддержки клиентов для помощи с бронированием.",
        },
        {
          question: "Какие способы оплаты вы принимаете?",
          answer:
            "Мы принимаем различные способы оплаты, включая кредитные/дебетовые карты (Visa, MasterCard, American Express), PayPal, банковские переводы, а в некоторых направлениях возможна оплата в рассрочку. Все платежи обрабатываются безопасно через нашу зашифрованную платежную систему.",
        },
        {
          question: "Могу ли я изменить или отменить мое бронирование?",
          answer:
            "Да, вы можете изменить или отменить бронирование в соответствии с нашей политикой отмены. Изменения, сделанные за 30+ дней до отъезда, обычно влекут за собой минимальные или нулевые сборы. Отмены, сделанные за 15-29 дней до отъезда, могут подлежать частичному возврату, а те, которые сделаны менее чем за 14 дней до отъезда, могут не подлежать возврату.",
        },
        {
          question: "Что включено в ваши туристические пакеты?",
          answer:
            "Наши туристические пакеты обычно включают проживание, выбранные приемы пищи, транспорт (включая трансфер из аэропорта), экскурсии, указанные в маршруте, и входные билеты в перечисленные достопримечательности. Некоторые пакеты также включают дополнительные мероприятия, специальные события или варианты «все включено».",
        },
        {
          question: "Включены ли авиабилеты в стоимость пакета?",
          answer:
            "Большинство наших пакетов по умолчанию не включают международные рейсы, что дает вам гибкость в организации поездки. Однако мы можем организовать для вас рейсы за дополнительную плату. Некоторые пакеты включают внутренние рейсы или трансферы, необходимые для маршрута.",
        },
        {
          question: "Нужна ли мне виза для моего направления?",
          answer:
            "Требования к визе различаются в зависимости от вашего гражданства и направления. Хотя мы предоставляем общую информацию, мы рекомендуем проверить в посольстве или консульстве страны назначения самые актуальные требования к визе. Наша команда может помочь с информацией и руководством по процессу подачи заявления на визу.",
        },
        {
          question: "Какую туристическую страховку вы рекомендуете?",
          answer:
            "Мы настоятельно рекомендуем комплексную туристическую страховку, которая покрывает медицинские чрезвычайные ситуации, отмену поездки, потерю багажа и другие непредвиденные события. Мы можем предложить варианты туристической страховки во время процесса бронирования, или вы можете организовать свое собственное покрытие.",
        },
        {
          question: "Будет ли гид во время поездки?",
          answer:
            "Большинство наших пакетов включают профессиональных, англоговорящих гидов (и гидов на других языках по запросу). Для самостоятельных туров мы предоставляем подробную информацию и круглосуточную экстренную связь. Конкретные детали о гидах четко указаны в описании каждого пакета.",
        },
        {
          question:
            "Что делать, если я столкнусь с проблемами во время поездки?",
          answer:
            "Мы предоставляем круглосуточную экстренную поддержку для всех путешественников. Вы получите контактный номер перед отъездом, по которому можно позвонить в любое время для получения помощи. Наши местные представители также доступны, чтобы помочь решить любые проблемы, которые могут возникнуть во время вашей поездки.",
        },
        {
          question: "Предлагаете ли вы индивидуальные туристические пакеты?",
          answer:
            "Да, мы специализируемся на создании индивидуальных туристических впечатлений, адаптированных к вашим предпочтениям, бюджету и расписанию. Свяжитесь с нашими туристическими консультантами, чтобы обсудить ваши требования, и мы разработаем персонализированный маршрут специально для вас.",
        },
      ],
    },
  };

  const content = translations[currentLanguage];

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-cyan-500 px-3 py-1 text-sm text-white">
            {content.badge}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {content.title}
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
            {content.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {content.questions.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">{content.stillHaveQuestions}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-cyan-600 focus-visible:outline-none focus-visible:ring-1"
            >
              {content.contactUs}
            </a>
            <a
              href="tel:+998992921111"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {content.callUs}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
