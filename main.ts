// "I Ate Tuesday" — The Dog Ate My Homework: Funniest Excuse
// Competition: u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c
// Program v1: writes one excuse to $OUTPUT_DIR/entry.txt (1-200 chars, UTF-8).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LEAD =
  "Page 4 was my vet appointment, Tuesday 9 a.m. I ate Tuesday.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

function main() {
  const chars = [...LEAD].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${chars}`,
    );
  }
  if (LEAD.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }

  const outputDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), LEAD + "\n", "utf8");
}

main();
