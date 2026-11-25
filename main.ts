import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Laugh-Off
// A single joke that lands on a cold read: ask a smart speaker
// for a joke and it roasts you with IT support's classic line —
// the device turns the oldest tech advice back on its owner.
const ENTRY =
  "I asked my smart speaker for a joke. It said, 'Have you tried turning yourself off and on again?'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
