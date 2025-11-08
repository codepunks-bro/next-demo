import { cache } from "react";

type BuildMetric = {
  name: string;
  before: number;
  after: number;
  unit: "ms" | "KB";
};

type TransitionSnippet = {
  id: string;
  title: string;
  description: string;
};

const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms)).then(() => undefined);

export const getBuildMetrics = cache(async (): Promise<BuildMetric[]> => {
  await wait(400);
  return [
    { name: "Turbopack dev hot reload", before: 1450, after: 620, unit: "ms" },
    { name: "Prod rebuild (cache warm)", before: 2100, after: 950, unit: "ms" },
    { name: "Shared bundle size", before: 210, after: 156, unit: "KB" },
  ];
});

export const getTransitionSnippets = cache(async (): Promise<TransitionSnippet[]> => {
  await wait(300);
  return [
    {
      id: "view",
      title: "document.startViewTransition()",
      description: "Анимация переключения темы на уровне документа без layout-shift.",
    },
    {
      id: "route",
      title: "router.navigate + startTransition",
      description: "Мгновенная навигация между параллельными маршрутами без спиннера.",
    },
    {
      id: "data",
      title: "Server Actions streaming",
      description: "Ответ чата приходит chunk'ами, а UI остаётся отзывчивым.",
    },
  ];
});
