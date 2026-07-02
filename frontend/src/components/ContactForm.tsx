import { Send } from "lucide-react";
import { useMemo, useState } from "react";
import { routes } from "../lib/navigation";
import { AppLink } from "./AppLink";

export function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    car: "",
    message: "",
    privacy: false,
    agreement: false,
  });

  const isFormReady = useMemo(
    () =>
      formValues.name.trim() &&
      formValues.phone.trim() &&
      formValues.car.trim() &&
      formValues.message.trim() &&
      formValues.privacy &&
      formValues.agreement,
    [formValues],
  );

  return (
    <form className="lead-form">
      <label>
        Имя
        <input
          name="name"
          value={formValues.name}
          onChange={(event) => setFormValues((values) => ({ ...values, name: event.target.value }))}
          placeholder="Алексей"
          autoComplete="name"
          required
        />
      </label>
      <label>
        Телефон
        <input
          name="phone"
          value={formValues.phone}
          onChange={(event) => setFormValues((values) => ({ ...values, phone: event.target.value }))}
          placeholder="+7 900 000-00-00"
          autoComplete="tel"
          required
        />
      </label>
      <label>
        Автомобиль
        <input
          name="car"
          value={formValues.car}
          onChange={(event) => setFormValues((values) => ({ ...values, car: event.target.value }))}
          placeholder="Например, Kia Rio 1.6"
          required
        />
      </label>
      <label>
        Что нужно сделать
        <textarea
          name="message"
          value={formValues.message}
          onChange={(event) => setFormValues((values) => ({ ...values, message: event.target.value }))}
          placeholder="Установка ГБО, диагностика, ТО..."
          required
        />
      </label>
      <label className="form-consent">
        <input
          name="privacy"
          type="checkbox"
          checked={formValues.privacy}
          onChange={(event) => setFormValues((values) => ({ ...values, privacy: event.target.checked }))}
          required
        />
        <span>
          Я принимаю условия{" "}
          <AppLink to={routes.privacy}>политики обработки персональных данных</AppLink>
        </span>
      </label>
      <label className="form-consent">
        <input
          name="agreement"
          type="checkbox"
          checked={formValues.agreement}
          onChange={(event) => setFormValues((values) => ({ ...values, agreement: event.target.checked }))}
          required
        />
        <span>
          Я принимаю условия{" "}
          <AppLink to={routes.agreement}>пользовательского соглашения</AppLink>
        </span>
      </label>
      <button className="button button--primary" type="submit" disabled={!isFormReady}>
        <Send size={18} />
        Отправить заявку
      </button>
    </form>
  );
}
