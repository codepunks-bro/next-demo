import { sendToAnalytics } from "@/lib/observability/analytics";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function reportWebVitals(metric: any) {
  sendToAnalytics(metric);
}
