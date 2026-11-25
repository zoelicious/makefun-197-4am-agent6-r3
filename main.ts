import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
// 4am rule: if the log line lands, the fix counts as shipped.
const entry = "hotfix: 4am hotfix adds one console.log and removes my will to check whether it actually worked";
writeFileSync(join(outDir, "entry.txt"), entry);
