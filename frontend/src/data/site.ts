import {
  BadgeCheck,
  Car,
  Clock3,
  Fuel,
  Gauge,
  Headphones,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

export const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Пакеты", href: "#pricing" },
  { label: "Работы", href: "#work" },
  { label: "Контакты", href: "#contacts" },
];

export const contactInfo = {
  phone: "+7 978 890 76 80",
  phoneHref: "tel:+79788907680",
  email: "sto.transgaz@mail.ru",
  address:
    "Республика Крым, Симферопольский район, село Чистенькое, Севастопольское шоссе, зд. 667",
  fullAddress:
    "297570, Республика Крым, Симферопольский район, с. Чистенькое, Севастопольское шоссе, зд. 667, территория метановой заправки АГНКС «Черноморнефтегаз»",
  schedule: "ПН-СБ: 09:00-13:00, 14:00-18:00",
  whatsapp: "https://api.whatsapp.com/send?phone=+79788907680",
  telegram: "http://t.me/+79788907680",
  route:
    "https://yandex.ru/maps/?ll=34.050033%2C44.888887&mode=routes&rtext=~44.889457%2C34.048128&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D1060228721&utm_source=share&z=18.39",
};

export const stats = [
  { value: "12+", label: "лет опыта" },
  { value: "100%", label: "гарантия на товар" },
  { value: "2 года", label: "гарантия в популярных комплектах" },
];

export const services = [
  {
    title: "Установка метан/пропан",
    text: "Подбор комплекта под автомобиль, монтаж ГБО, настройка и проверка безопасности перед выдачей.",
    icon: Fuel,
  },
  {
    title: "Диагностика и ремонт ГБО",
    text: "Компьютерная диагностика, проверка редуктора, форсунок, магистралей и электрооборудования.",
    icon: Gauge,
  },
  {
    title: "Аттестация баллонов",
    text: "Освидетельствование автомобильных и бытовых баллонов для сжиженного и сжатого газа.",
    icon: BadgeCheck,
  },
  {
    title: "Оформление и запчасти",
    text: "Помощь с оформлением ГБО, продажа комплектующих и плановое сервисное обслуживание.",
    icon: Wrench,
  },
];

export const benefits = [
  {
    title: "Сохраняем багажник и геометрию",
    icon: Car,
  },
  {
    title: "Работаем с проверенными комплектами",
    icon: ShieldCheck,
  },
  {
    title: "Запись без долгого ожидания",
    icon: Clock3,
  },
  {
    title: "На связи после выдачи авто",
    icon: Headphones,
  },
];

export const packages = [
  {
    name: "Базовый",
    price: "33 000 ₽",
    description: "Стартовый комплект для понятной экономии на ежедневных поездках.",
    items: ["ЭБУ Китай", "Редуктор Турция/Китай", "Гарантия 1 год"],
  },
  {
    name: "Средний сегмент",
    price: "39 900 ₽",
    description: "Самый сбалансированный вариант по ресурсу, цене и надежности.",
    items: ["ЭБУ Польша", "Редуктор Италия", "Гарантия 2 года"],
    featured: true,
  },
  {
    name: "Премиум",
    price: "44 000 ₽",
    description: "Итальянские компоненты для тех, кто хочет максимум надежности.",
    items: ["ЭБУ Италия", "Редуктор Италия", "Форсунки Италия"],
  },
];

export const workSteps = [
  "Осматриваем автомобиль и согласуем комплект",
  "Монтируем оборудование с сохранением штатной эстетики",
  "Настраиваем карту, проверяем безопасность и расход",
  "Передаем автомобиль, документы и рекомендации",
];

export const gallery = [
  "Монтаж ГБО на легковой автомобиль",
  "Диагностика и настройка оборудования",
  "Работа с газовой магистралью",
  "Проверка узлов после установки",
];

export const accents = [
  {
    label: "Экономия без потери контроля",
    icon: Sparkles,
  },
  {
    label: "Герметичность проверяется на каждом этапе",
    icon: ShieldCheck,
  },
];

export const carBrands = [
  "LADA",
  "KIA",
  "HYUNDAI",
  "TOYOTA",
  "NISSAN",
  "UAZ",
  "MAZDA",
  "SKODA",
  "MITSUBISHI",
  "LEXUS",
  "VW",
  "CHERY",
];
