import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Ten thousand texts tonight, and this one asks nothing of you. A kettle ticks as it cools. Light moves a finger's width across the wall. The sea keeps its appointment with the shore — older than every name we have, and still going after the last verdict. Rest here a while.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
