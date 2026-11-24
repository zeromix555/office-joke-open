import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "Our standup meeting has a slide deck now. It has one slide: 'This could have been an email.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
