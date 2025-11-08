export async function registerTracing() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  console.info(
    "[Tracing] OpenTelemetry instrumentation stub активирован. Подключите OTEL SDK в production.",
  );
}
