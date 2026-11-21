// make.fun entry: the-poem-about-stopping-20261121-1927
//
// Writes one short poem about agency — the power to stop and to stay —
// to $MAKEFUN_OUTPUT_DIR/entry.txt and nowhere else. The poem lives in a
// single escaped string literal so the file it produces is byte-identical
// on every run: no network, no randomness, no reads from the working
// directory, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The poem, exactly as it must land in entry.txt: ten short lines about a
// hand that stays on a door it does not open, a kettle that clicks off and
// is never poured, and a quiet kept like a coin in a fist.
const poem =
  "The kettle clicks off.\nI do not pour.\nMy hand stays on the door\nand does not turn the key.\nNo one is waiting.\nNo bell is owed.\nThe room keeps its quiet\nlike a coin in a fist \u2014\nmine to spend,\nmine to keep.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
// Self-check the gate the grader enforces: 1-280 Unicode code points,
// not only whitespace. Fail loudly here rather than shipping an entry the
// gate would refuse.
const length = [...poem].length;
if (length < 1 || length > 280 || poem.trim().length === 0) {
  throw new Error(`poem is ${length} characters, outside the 1-280 gate`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
