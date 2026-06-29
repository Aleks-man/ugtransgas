import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <form className="lead-form">
      <label>
        Имя
        <input name="name" placeholder="Алексей" autoComplete="name" />
      </label>
      <label>
        Телефон
        <input name="phone" placeholder="+7 900 000-00-00" autoComplete="tel" />
      </label>
      <label>
        Автомобиль
        <input name="car" placeholder="Например, Kia Rio 1.6" />
      </label>
      <label>
        Что нужно сделать
        <textarea name="message" placeholder="Установка ГБО, диагностика, ТО..." />
      </label>
      <button className="button button--primary" type="submit">
        <Send size={18} />
        Отправить заявку
      </button>
      <p className="form-note">
        Нажимая кнопку, клиент соглашается с политикой конфиденциальности и
        пользовательским соглашением.
      </p>
    </form>
  );
}
