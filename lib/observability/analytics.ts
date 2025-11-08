type WebVitalMetric = {
  name: string;
  value: number;
  rating?: string;
  id: string;
};

export function sendToAnalytics(metric: WebVitalMetric) {
  if (process.env.NODE_ENV !== "production") {
    console.info("[WebVitals]", metric.name, metric.value, metric.rating);
  }
  // Здесь можно интегрировать RUM/анализ: отправить в Snowplow, Datadog и т.д.
}
