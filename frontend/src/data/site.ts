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
    title: "Установка ГБО под ключ",
    text: "Подбор комплекта, размещение баллона, монтаж магистралей, подключение электроники и финальная настройка системы.",
    icon: Fuel,
  },
  {
    title: "Диагностика и тонкая настройка",
    text: "Проверяем карту работы, редуктор, форсунки, давление, герметичность и корректность переключения топлива.",
    icon: Gauge,
  },
  {
    title: "Аттестация и безопасность",
    text: "Освидетельствование баллонов, проверка узлов и подготовка системы к безопасной эксплуатации.",
    icon: BadgeCheck,
  },
  {
    title: "Оформление и сервис",
    text: "Помогаем с документами, обслуживаем установленные системы и подбираем комплектующие без лишних замен.",
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
    name: "Практичный",
    price: "33 000 ₽",
    description: "Надёжный комплект для ежедневной эксплуатации и понятной экономии без переплаты.",
    items: ["Подбор под двигатель", "Аккуратный монтаж", "Гарантия 1 год"],
  },
  {
    name: "Оптимальный",
    price: "39 900 ₽",
    description: "Сбалансированный вариант по ресурсу, стабильности работы и стоимости обслуживания.",
    items: ["Компоненты повышенного ресурса", "Точная настройка карты", "Гарантия 2 года"],
    featured: true,
  },
  {
    name: "Премиальный",
    price: "44 000 ₽",
    description: "Комплект для автомобилей, где важны ресурс, аккуратная интеграция и максимальная стабильность.",
    items: ["Премиальные компоненты", "Чистая компоновка", "Расширенная настройка"],
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
  "CADILLAC",
  "CHERY",
  "CHEVROLET",
  "CHRYSLER",
  "DAEWOO",
  "DODGE",
  "FORD",
  "GEELY",
  "HYUNDAI",
  "INFINITI",
  "JAC",
  "KIA",
  "LADA",
  "LEXUS",
  "LIFAN",
  "MAZDA",
  "MERCEDES",
  "MITSUBISHI",
  "NISSAN",
  "PEUGEOT",
  "RENAULT",
  "SKODA",
  "SSANGYONG",
  "SUBARU",
  "TOYOTA",
  "UAZ",
  "VOLKSWAGEN",
];
