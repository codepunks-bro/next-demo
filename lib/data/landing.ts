import { cache } from "react";
import type { TravelPersona } from "@/lib/state/travel-profile";

type PersonaHighlight = {
  headline: string;
  supporting: string;
  cta: string;
};

type FeaturedExperience = {
  id: string;
  title: string;
  region: string;
  duration: string;
  accent: string;
  description: string;
};

const PERSONA_HIGHLIGHTS: Record<TravelPersona, PersonaHighlight> = {
  explorer: {
    headline: "Откройте неизведанные направления за 72 часа",
    supporting:
      "Экспериментальные маршруты, альпинистские тропы и локальные гиды уже в готовом чек-листе. Мы обновляем подборку каждые выходные.",
    cta: "Собрать приключение",
  },
  wellness: {
    headline: "Соберите персональный wellness-ретрит за одно касание",
    supporting:
      "Mindful-практики, цифровой детокс и curated-программы восстановления с учётом хронотипа и персональных предпочтений.",
    cta: "Погрузиться в баланс",
  },
  family: {
    headline: "Создайте семейный маршрут, где учтён каждый участник",
    supporting:
      "Мы подбираем безопасные направления, маршрут с остановками по возрастам и интегрируем расписание развлечений.",
    cta: "Подобрать семейный тур",
  },
  luxury: {
    headline: "Эксклюзивные путешествия с приватным продюсером впечатлений",
    supporting:
      "Авторские дегустации, бутик-отели и heli-трансферы — в одном пакете, синхронизированном с вашим календарём.",
    cta: "Построить luxury-маршрут",
  },
};

const FEATURED_EXPERIENCES: Record<TravelPersona, FeaturedExperience[]> = {
  explorer: [
    {
      id: "andes-hike",
      title: "Горные хребты Анд без троп",
      region: "Патагония, Чили",
      duration: "9 дней",
      accent: "Маршрут гида-альпиниста",
      description:
        "Ледники Торрес-дель-Пайне, ночёвка в обсерватории и локальные фермерские хозяйства.",
    },
    {
      id: "arctic-sailing",
      title: "Парусная экспедиция по Арктике",
      region: "Шпицберген",
      duration: "7 дней",
      accent: "Экипаж исследователей",
      description:
        "Фотоохота за северным сиянием, дайвинг в ледяных фьордах и лекции об арктической экосистеме.",
    },
  ],
  wellness: [
    {
      id: "bali-retreat",
      title: "Мультисенсорный ретрит на Бали",
      region: "Убуд, Индонезия",
      duration: "14 дней",
      accent: "Персональный mindfulness-коуч",
      description:
        "Частная вилла, ортотерапия, функциональное питание и интеграция данных сна из wearables.",
    },
    {
      id: "iceland-spa",
      title: "Скандинавский wellness-марафон",
      region: "Исландия",
      duration: "6 дней",
      accent: "Термальные источники и ледяные купания",
      description:
        "Контрастные практики, экскурсии по геотермальным станциям и адаптивное меню от шефа.",
    },
  ],
  family: [
    {
      id: "japan-discovery",
      title: "Семейное знакомство с Токио и Киото",
      region: "Япония",
      duration: "8 дней",
      accent: "Интерактивные мастер-классы",
      description:
        "Кулинарные воркшопы, уроки самурайского фехтования и маршрут по детским музеям.",
    },
    {
      id: "norway-fjord",
      title: "Эко-круиз по норвежским фьордам",
      region: "Норвегия",
      duration: "10 дней",
      accent: "Детская STEM-программа",
      description:
        "Исследование ледников, наблюдение за косатками и мастерская по устойчивому развитию.",
    },
  ],
  luxury: [
    {
      id: "amalfi-private",
      title: "Приватная вилла на Амальфитанском побережье",
      region: "Италия",
      duration: "5 дней",
      accent: "Личный шеф и сомелье",
      description:
        "Яхтинг, гастрономический роуд-шоу и экскурсии по закрытым винодельням.",
    },
    {
      id: "desert-stars",
      title: "Глампинг под звёздами в Сахаре",
      region: "Марокко",
      duration: "4 дня",
      accent: "Астрофотография и спа в дюнах",
      description:
        "Пустынный балет, дегустация марокканской кухни и ночные наблюдения с астрофизиком.",
    },
  ],
};

const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms)).then(() => undefined);

export const getPersonaHighlight = cache(async (persona: TravelPersona) => {
  await wait(650);
  return PERSONA_HIGHLIGHTS[persona];
});

export const getFeaturedExperiences = cache(
  async (persona: TravelPersona): Promise<FeaturedExperience[]> => {
    await wait(1200);
    return FEATURED_EXPERIENCES[persona];
  },
);

export type { PersonaHighlight, FeaturedExperience };
