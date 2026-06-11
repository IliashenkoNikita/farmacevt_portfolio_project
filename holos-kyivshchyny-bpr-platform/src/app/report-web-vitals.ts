export function reportWebVitals(metric: { name: string; value: number }) {
  if (process.env.NODE_ENV === "development")
    console.info("web-vital", metric.name, metric.value);
}
