export type MainNavItem = {
  label: string;
  description: string;
  href: string;
  badge?: string;
};

export const mainNavigation: MainNavItem[] = [
  {
    label: "Landing",
    description: "PPR, streaming layouts и персонализация лендинга.",
    href: "/",
    badge: "PPR",
  },
  {
    label: "Experiences",
    description: "Каталог направлений на server components + use().",
    href: "/experiences",
    badge: "Server Components",
  },
  {
    label: "AI Concierge",
    description: "Чат-помощник на server actions и edge runtime.",
    href: "/ai-concierge",
    badge: "Actions",
  },
  {
    label: "Admin Suite",
    description: "Управление контентом с optimistic UI и transitions.",
    href: "/admin",
    badge: "Optimistic UI",
  },
  {
    label: "Tech Playground",
    description: "Интерактивные примеры новых API React 19 и Next 16.",
    href: "/tech-playground",
    badge: "Playground",
  },
];

