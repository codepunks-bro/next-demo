import fs from "node:fs/promises";
import path from "node:path";

const reportPath = path.join(process.cwd(), ".lighthouse", "report.json");

async function main() {
  try {
    const contents = await fs.readFile(reportPath, "utf8");
    const report = JSON.parse(contents);
    const metrics = report.audits;

    const summary = {
      LCP: metrics["largest-contentful-paint"]?.displayValue,
      INP: metrics["interaction-to-next-paint"]?.displayValue,
      TTFB: metrics["server-response-time"]?.displayValue,
    };

    console.log("Lighthouse summary:", summary);
  } catch (error) {
    console.error("Не удалось прочитать отчет Lighthouse:", error);
    process.exit(1);
  }
}

main();
