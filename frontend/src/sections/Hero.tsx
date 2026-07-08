import { ArrowRight, CheckCircle2, Clock3, ShieldCheck, Star, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-workshop-brand.jpg";
import { stats } from "../data/site";

const statIcons = [Clock3, Wrench, ShieldCheck];

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
          <div className="hero-brand-kicker">
            <span>СТО «ТрансГаз»</span>
            <strong>Установка ГБО в Крыму</strong>
          </div>
          <h1>
            Профессиональная установка ГБО с аккуратным монтажом и точной
            настройкой
          </h1>
          <p>
            Подбираем оптимальную систему под ваш автомобиль, выполняем чистый
            монтаж без нарушения штатной компоновки, проводим настройку и
            проверку безопасности перед выдачей. После установки обеспечиваем
            сервисное сопровождение.
          </p>
          <div className="hero-proof">
            <div className="hero-proof__item">
              <Star size={18} />
              <span>4,8 на Яндекс Картах</span>
            </div>
            <div className="hero-proof__item">
              <strong>1000+</strong>
              <span>довольных клиентов и установок</span>
            </div>
          </div>
          <div className="hero-actions">
            <a className="button button--primary" href="/contacts">
              Рассчитать установку
              <ArrowRight size={18} />
            </a>
            <a className="button button--ghost" href="/services">
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
          <img
            src={heroImage}
            alt="Современный сервис установки газового оборудования"
          />
          <div className="hero-card">
            <strong>До 45%</strong>
            <span>
              экономии на топливе при грамотном подборе, монтаже и настройке ГБО
            </span>
          </div>
        </motion.div>
      </div>

      <div className="container stats-row">
        {stats.map((item, index) => {
          const Icon = statIcons[index] ?? CheckCircle2;

          return (
            <div className="stat" key={item.label}>
              <span className="stat__icon" aria-hidden="true">
                <Icon size={20} />
              </span>
              <span className="stat__content">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
