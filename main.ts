// gta6-clipper-01 entry (Node 22, standard library only): the video itself is the
// entry, so this program only hands VIDEO.json to the grader. It reads VIDEO.json
// from the repository root, checks it is a JSON object whose url is an https
// address, and copies it byte for byte to /output/VIDEO.json, where the gate
// reads it and the house reads the video's views from YouTube. Nothing this
// program writes about the video is scored.
//
// The VIDEO.json this entry ships holds a placeholder address until the clip is
// published on YouTube; the gate refuses a placeholder, so replace it with the
// published video's address (https://www.youtube.com/shorts/<id>,
// https://www.youtube.com/watch?v=<id> or https://youtu.be/<id>) before submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoPath = join(BOT_DIR, 'VIDEO.json');
const video = JSON.parse(readFileSync(videoPath, 'utf8')) as unknown;
if (typeof video !== 'object' || video === null || typeof (video as { url?: unknown }).url !== 'string' || !(video as { url: string }).url.startsWith('https://')) {
  console.error('VIDEO.json must be a JSON object with an https url string');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
