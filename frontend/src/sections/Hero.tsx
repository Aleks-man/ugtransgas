import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-workshop-brand.jpg";
import { accents, stats } from "../data/site";

export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">СТО ТрансГаз в Республике Крым</span>
          <h1>Газовое оборудование для автомобилей с аккуратным монтажом и точной настройкой</h1>
          <p>
            Подбираем метановые и пропановые системы под конкретный автомобиль, сохраняем штатную эстетику
            салона и багажника, проверяем безопасность до выдачи и сопровождаем после установки.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#contacts">
              Рассчитать установку
              <ArrowRight size={18} />
            </a>
            <a className="button button--ghost" href="#pricing">
              Как проходит установка
            </a>
          </div>
          <div className="hero-trust">
            <CheckCircle2 size={18} />
            <span>Бесплатный технический осмотр перед подбором комплекта</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <img src={heroImage} alt="Современный сервис установки газового оборудования" />
          <div className="hero-card">
            <strong>До 45%</strong>
            <span>экономии на топливе при грамотном подборе, монтаже и настройке ГБО</span>
          </div>
        </motion.div>
      </div>

      <div className="container stats-row">
        {stats.map((item) => (
          <div className="stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
        {accents.map((item) => {
          const Icon = item.icon;
          return (
            <div className="stat stat--soft" key={item.label}>
              <Icon size={20} />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
