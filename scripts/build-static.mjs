import { copyFileSync, mkdirSync, rmSync } from "node:fs";

const outputDir = new URL("../_site/", import.meta.url);
const files = ["index.html", "style.css", "script.js", "_headers", "_redirects"];

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });

for (const file of files) {
  copyFileSync(new URL(`../${file}`, import.meta.url), new URL(file, outputDir));
}
