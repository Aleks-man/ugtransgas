import { ArrowRight, Images, Settings2, MapPinned } from "lucide-react";

const pathItems = [
  {
    icon: Settings2,
    title: "Разобраться в услугах",
    text: "Что входит в установку, диагностику, аттестацию баллонов и сопровождение документов.",
    href: "/services",
  },
  {
    icon: Images,
    title: "Посмотреть работы",
    text: "Реальные фотографии установок, разложенные по маркам автомобилей.",
    href: "/works",
  },
  {
    icon: MapPinned,
    title: "Записаться в сервис",
    text: "Телефон, маршрут, мессенджеры и форма для предварительного расчета.",
    href: "/contacts",
  },
];

export function SitePath() {
  return (
    <section className="site-path-section">
      <div className="container site-path">
        {pathItems.map((item) => {
          const Icon = item.icon;
          return (
            <a className="site-path-card" href={item.href} key={item.title}>
              <Icon size={24} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <ArrowRight size={20} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
