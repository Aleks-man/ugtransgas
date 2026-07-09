import {
  ArrowRight,
  Award,
  CheckCircle2,
  Star,
  ThumbsUp,
} from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-workshop-brand.jpg";

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
          <h1>Установка метанового и пропанового ГБО под ключ</h1>
          <p>
            Подбираем оборудование с учетом особенностей автомобиля, выполняем
            аккуратный монтаж, настраиваем систему и проверяем ее работу перед
            выдачей. После установки консультируем по эксплуатации и дальнейшему
            обслуживанию.
          </p>
          <div className="hero-proof">
            <div className="hero-proof__item">
              <Star size={18} />
              <strong>4,8</strong>
              <span>на Яндекс Картах</span>
            </div>
            <div className="hero-proof__item">
              <ThumbsUp size={18} />
              <strong>1000+</strong>
              <span>довольных клиентов и установок</span>
            </div>
            <div className="hero-proof__item">
              <Award size={18} />
              <strong>12+</strong>
              <span>лет опыта</span>
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
    </section>
  );
}
