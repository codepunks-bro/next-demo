import type { Metadata } from "next";
import {
  FeatureRoadmap,
  type RoadmapItem,
} from "@/components/ui/feature-roadmap";

export const metadata: Metadata = {
  title: "Admin Suite · Управление контентом",
  description:
    "Панель администратора с серверными actions, optimistic UI и системой ревалидиации контента.",
};

const roadmap: RoadmapItem[] = [
  {
    title: "Server Actions для CRUD",
    description:
      "Формы создания направлений, тарифов и контента работают на server actions без дополнительного API.",
    focus: "next",
    status: "planned",
  },
  {
    title: "Optimistic UI с useActionState",
    description:
      "Сохраняем изменения мгновенно, отображаем подтверждение и откат через action state и transitions.",
    focus: "react",
    status: "in-progress",
  },
  {
    title: "Тегированная инвалидация данных",
    description:
      "После обновления сущностей срабатывает revalidateTag, чтобы публичные страницы увидели свежие данные.",
    focus: "next",
    status: "planned",
  },
  {
    title: "Аудит лог и RBAC",
    description:
      "Записываем действия админов, используем middleware для проверки ролей и демонстрируем best practices безопасности.",
    focus: "infra",
    status: "research",
  },
];

export default function AdminPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-300">
          Раздел в подготовке
        </p>
        <h1 className="text-3xl font-semibold">Admin Suite</h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Панель администратора сфокусирована на DX: минимум бэкенда, максимум
          продуктивности благодаря server actions, transitions и продвинутым
          средствам ревалидиации данных.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Дорожная карта фич</h2>
        <FeatureRoadmap items={roadmap} />
      </section>
    </div>
  );
}

