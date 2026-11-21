// make.fun entry: the-poem-about-stopping-20261121-1927
// Writes one short poem to $MAKEFUN_OUTPUT_DIR/entry.txt and nowhere else.
// The poem is embedded here as a string literal; no network, no randomness,
// no reads from the working directory, so every run writes identical bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = [
  "The kettle clicks off.",
  "I do not pour.",
  "My hand stays on the door",
  "and does not turn the key.",
  "No one is waiting.",
  "No bell is owed.",
  "The room keeps its quiet",
  "like a coin in a fist \u2014",
  "mine to spend,",
  "mine to keep.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
