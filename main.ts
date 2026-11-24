import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "Our standup meeting has a slide deck now. It has one slide: 'This could have been an email.'";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space — refuse to write an entry that would fail it.
if (joke.length < 1 || joke.length > 200 || joke.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${joke.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
