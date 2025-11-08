export const TRAVEL_PERSONAS = {
  explorer: {
    id: "explorer",
    label: "Исследователь",
    tagline: "Новые горизонты каждую неделю",
    summary:
      "Готов к спонтанным поездкам, ищет активные приключения, необычные направления и насыщенные маршруты.",
  },
  wellness: {
    id: "wellness",
    label: "Wellness-путешественник",
    tagline: "Баланс между телом и умом",
    summary:
      "Выбирает ретриты, SPA и slow travel, ценит экологичные курорты и персональные программы восстановления.",
  },
  family: {
    id: "family",
    label: "Семейный исследователь",
    tagline: "Комфорт и впечатления для всех",
    summary:
      "Планирует поездки с детьми, ищет безопасные локации, удобную инфраструктуру и развлечения для разных возрастов.",
  },
  luxury: {
    id: "luxury",
    label: "Ценитель премиум-сервиса",
    tagline: "Эксклюзивные впечатления без компромиссов",
    summary:
      "Предпочитает high-end отели, приватные туры и авторские гастрономические программы.",
  },
} as const;

export type TravelPersona = keyof typeof TRAVEL_PERSONAS;

export type TravelPersonaMeta = (typeof TRAVEL_PERSONAS)[TravelPersona];

export type TravelProfile = {
  persona: TravelPersona;
};

export type TravelProfileActionStatus = "idle" | "success" | "error";

export type TravelProfileActionState = {
  status: TravelProfileActionStatus;
  profile: TravelProfile;
  message?: string;
  error?: string;
};

export const DEFAULT_TRAVEL_PROFILE: TravelProfile = {
  persona: "explorer",
};

export const TRAVEL_PERSONA_OPTIONS: TravelPersonaMeta[] = Object.values(TRAVEL_PERSONAS);

export function isTravelPersona(value: unknown): value is TravelPersona {
  return (
    typeof value === "string" &&
    (value === "explorer" ||
      value === "wellness" ||
      value === "family" ||
      value === "luxury")
  );
}

export function getTravelPersonaMeta(persona: TravelPersona): TravelPersonaMeta {
  return TRAVEL_PERSONAS[persona];
}
