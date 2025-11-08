import { unstable_cache } from "next/cache";
import type { TravelPersona } from "@/lib/state/travel-profile";

export type ExperienceFilter = {
  id: string;
  label: string;
  options: { id: string; label: string; count: number }[];
};

export type ExperienceCard = {
  id: string;
  title: string;
  location: string;
  priceFrom: number;
  rating: number;
  reviews: number;
  tags: string[];
  summary: string;
};

type PersonaDataset = {
  filters: ExperienceFilter[];
  experiences: ExperienceCard[];
};

const DATASET: Record<TravelPersona, PersonaDataset> = {
  explorer: {
    filters: [
      {
        id: "terrain",
        label: "Тип маршрута",
        options: [
          { id: "mountain", label: "Горные тропы", count: 12 },
          { id: "ocean", label: "Морские экспедиции", count: 5 },
          { id: "desert", label: "Пустынные переходы", count: 4 },
        ],
      },
      {
        id: "intensity",
        label: "Интенсивность",
        options: [
          { id: "hard", label: "Экстремально", count: 7 },
          { id: "medium", label: "Динамично", count: 9 },
          { id: "light", label: "Лёгкий треккинг", count: 3 },
        ],
      },
    ],
    experiences: [
      {
        id: "peru-expedition",
        title: "Инка-трейл и Анды вне туристических маршрутов",
        location: "Перу",
        priceFrom: 3200,
        rating: 4.9,
        reviews: 187,
        tags: ["Треккинг", "Высокогорье", "Локальные гиды"],
        summary:
          "9 дней в горах с ночёвками в эко-лоджах, лекции по этноботанике и горячие источники в долине Куско.",
      },
      {
        id: "faroe-kayak",
        title: "Каякинг вдоль скал Фарерских островов",
        location: "Дания",
        priceFrom: 2400,
        rating: 4.8,
        reviews: 96,
        tags: ["Море", "Альпинизм", "Дикая природа"],
        summary:
          "Экспедиция с биологом-орнитологом, ночёвка в маяке и мастер-класс по фотосъёмке бурных волн.",
      },
      {
        id: "mongolia-trek",
        title: "По следам кочевников в горах Алтая",
        location: "Монголия",
        priceFrom: 2800,
        rating: 4.7,
        reviews: 74,
        tags: ["Культура", "Экспедиция", "Конные переходы"],
        summary:
          "Конные переходы, мастер-классы по горловому пению и наблюдение за звёздным небом с астрономом.",
      },
    ],
  },
  wellness: {
    filters: [
      {
        id: "practice",
        label: "Фокус программы",
        options: [
          { id: "mindfulness", label: "Mindfulness & Breathwork", count: 8 },
          { id: "spa", label: "SPA & Recovery", count: 5 },
          { id: "ayurveda", label: "Аюрведа", count: 3 },
        ],
      },
      {
        id: "duration",
        label: "Продолжительность",
        options: [
          { id: "weekend", label: "3-4 дня", count: 4 },
          { id: "week", label: "7-9 дней", count: 9 },
          { id: "extended", label: "10+ дней", count: 6 },
        ],
      },
    ],
    experiences: [
      {
        id: "amalfi-detox",
        title: "Детокс-ретрит на побережье Амальфи",
        location: "Италия",
        priceFrom: 4100,
        rating: 4.9,
        reviews: 132,
        tags: ["SPA", "Mедитация", "Нутрициология"],
        summary:
          "Гиперперсонализированное меню, биохакинг-консультации и сеансы терапии звуком в пещерах.",
      },
      {
        id: "kyoto-tea",
        title: "Чайная церемония и slow travel в Киото",
        location: "Япония",
        priceFrom: 3700,
        rating: 4.8,
        reviews: 88,
        tags: ["Slow", "Mindfulness", "Культура"],
        summary:
          "Ритуалы дзен-садов, дзадзен по утрам и индивидуальные консультации с мастером чайной церемонии.",
      },
      {
        id: "iceland-reset",
        title: "Перезагрузка в термальных источниках Исландии",
        location: "Исландия",
        priceFrom: 2900,
        rating: 4.9,
        reviews: 201,
        tags: ["Контраст-терапия", "Rituals", "Физиотерапия"],
        summary:
          "Контрастные ванны, йога на кальдере и консультации по восстановлению сна с сомнологом.",
      },
    ],
  },
  family: {
    filters: [
      {
        id: "focus",
        label: "Формат",
        options: [
          { id: "education", label: "Образовательный", count: 6 },
          { id: "adventure", label: "Активный отдых", count: 5 },
          { id: "relax", label: "Релакс + экскурсии", count: 4 },
        ],
      },
      {
        id: "age",
        label: "Возраст детей",
        options: [
          { id: "toddlers", label: "3-6 лет", count: 3 },
          { id: "kids", label: "7-12 лет", count: 7 },
          { id: "teens", label: "13-17 лет", count: 5 },
        ],
      },
    ],
    experiences: [
      {
        id: "singapore-stem",
        title: "STEM-лагерь и городской сафари в Сингапуре",
        location: "Сингапур",
        priceFrom: 3300,
        rating: 4.9,
        reviews: 158,
        tags: ["STEM", "Город", "Гид-эксперт"],
        summary:
          "Инженерные воркшопы, лаборатории робототехники и экскурсии по заповеднику Sungei Buloh.",
      },
      {
        id: "dolomites-chalet",
        title: "Семейный chalet-ретрит в Доломитах",
        location: "Италия",
        priceFrom: 3600,
        rating: 4.8,
        reviews: 111,
        tags: ["Горы", "Инфраструктура", "SPA"],
        summary:
          "Программы для подростков, семейные кукинг-классы и ски-пассы с персональным инструктором.",
      },
      {
        id: "cape-town-ocean",
        title: "Океанологическая экспедиция в Кейптауне",
        location: "ЮАР",
        priceFrom: 3400,
        rating: 4.7,
        reviews: 73,
        tags: ["Экология", "Safari", "Обучение"],
        summary:
          "Наблюдение за китами, мастер-классы по морской биологии и экскурсии в центр спасения пингвинов.",
      },
    ],
  },
  luxury: {
    filters: [
      {
        id: "style",
        label: "Стиль путешествия",
        options: [
          { id: "hidden", label: "Hidden Gems", count: 5 },
          { id: "gastronomy", label: "Gastronomy", count: 4 },
          { id: "wellness", label: "Wellness Luxury", count: 3 },
        ],
      },
      {
        id: "extras",
        label: "Эксклюзивы",
        options: [
          { id: "private", label: "Private Jets", count: 6 },
          { id: "art", label: "Art & Culture", count: 4 },
          { id: "yachting", label: "Yachting", count: 5 },
        ],
      },
    ],
    experiences: [
      {
        id: "bhutan-heritage",
        title: "Бутик-ретрит в монастырях Бутана",
        location: "Бутан",
        priceFrom: 6200,
        rating: 5.0,
        reviews: 64,
        tags: ["Mindful", "Бутик", "Культура"],
        summary:
          "Приватная медитация с ламами, авторский маршрут c искусствоведом и вертолётные трансферы.",
      },
      {
        id: "patagonia-lodge",
        title: "Эксклюзивный lodge в Патагонии",
        location: "Чили",
        priceFrom: 5800,
        rating: 4.9,
        reviews: 102,
        tags: ["Heli", "Гастрономия", "Природа"],
        summary:
          "Heli-skiing, ужины от шеф-повара с тремя звёздами Michelin и закрытые дегустации вин.",
      },
      {
        id: "santorini-villa",
        title: "Приватная вилла на Санторини с арт-программой",
        location: "Греция",
        priceFrom: 5400,
        rating: 4.8,
        reviews: 145,
        tags: ["Art", "Вилла", "Фото-тур"],
        summary:
          "Мастер-классы с художниками, private yachting и ночные фотосессии на вулкане.",
      },
    ],
  },
};

const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms)).then(() => undefined);

export const getExperienceFilters = async (persona: TravelPersona) =>
  unstable_cache(
    async () => {
      await wait(500);
      return DATASET[persona].filters;
    },
    ["experience-filters", persona],
    { tags: [`experience-filters:${persona}`], revalidate: 120 },
  )();

export const getExperienceCatalog = async (persona: TravelPersona) =>
  unstable_cache(
    async () => {
      await wait(1100);
      return DATASET[persona].experiences;
    },
    ["experience-catalog", persona],
    { tags: [`experience-catalog:${persona}`], revalidate: 120 },
  )();
