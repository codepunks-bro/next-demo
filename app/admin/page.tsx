import type { Metadata } from "next";
import { AdminDashboard } from "@/components/admin/dashboard";
import { getAdminDashboardState } from "@/app/actions/admin-experiences";
import { FeatureRoadmap, type RoadmapItem } from "@/components/ui/feature-roadmap";

export const metadata: Metadata = {
  title: "Admin Suite · Управление контентом",
  description:
    "Панель администратора с серверными actions, optimistic UI и системой ревалидиации контента.",
};

const roadmap: RoadmapItem[] = [
  {
    title: "Server Actions для CRUD",
    description:
      "Формы создания направлений работают на server actions без дополнительного API.",
    focus: "next",
    status: "completed",
  },
  {
    title: "Optimistic UI с useActionState",
    description:
      "Используем useActionState + useOptimistic для мгновенного отклика при создании и публикации направлений.",
    focus: "react",
    status: "completed",
  },
  {
    title: "Тегированная инвалидация данных",
    description:
      "revalidateTag и revalidatePath обновляют каталог Experiences после каждого действия в админке.",
    focus: "next",
    status: "completed",
  },
  {
    title: "Аудит лог и RBAC",
    description:
      "Следующий шаг — добавить аудит и распределение ролей на уровне middleware.",
    focus: "infra",
    status: "research",
  },
];

export default async function AdminPage() {
  const initialState = await getAdminDashboardState();

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-xs font-semibold tracking-widest text-emerald-600 uppercase dark:text-emerald-300">
          Server Actions · DX
        </p>
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
          Admin Suite
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Управляйте каталогом направлений без ручного бэкенда: создавайте черновики,
          публикуйте и удаляйте записи с оптимистичным интерфейсом и мгновенными
          обновлениями витрины.
        </p>
      </section>

      <AdminDashboard initialState={initialState} />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Дорожная карта фич</h2>
        <FeatureRoadmap items={roadmap} />
      </section>
    </div>
  );
}
