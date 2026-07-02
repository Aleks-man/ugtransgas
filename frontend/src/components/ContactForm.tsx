import { Send } from "lucide-react";
import { routes } from "../lib/navigation";
import { AppLink } from "./AppLink";

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
      <label className="form-consent">
        <input name="privacy" type="checkbox" required />
        <span>
          Я принимаю условия{" "}
          <AppLink to={routes.privacy}>политики обработки персональных данных</AppLink>
        </span>
      </label>
      <label className="form-consent">
        <input name="agreement" type="checkbox" required />
        <span>
          Я принимаю условия{" "}
          <AppLink to={routes.agreement}>пользовательского соглашения</AppLink>
        </span>
      </label>
      <button className="button button--primary" type="submit">
        <Send size={18} />
        Отправить заявку
      </button>
    </form>
  );
}
