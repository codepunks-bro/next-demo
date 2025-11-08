import { registerTracing } from "@/lib/observability/tracing";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await registerTracing();
  }
}
