# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/egilolriot/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/egilolriot/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical GTA 6 clip for make.fun's "Clip GTA 6 for the most YouTube views" bounty: the best moment of Rockstar's official Grand Theft Auto VI Launch Trailer, cut to 9:16 and pitched to make.fun, published as a public YouTube Short. Places go by the video's views at the deadline; the top 20 share $500.

## The clip

- **Source footage:** Rockstar Games' official Grand Theft Auto VI Launch Trailer (15 Oct 2026), downloaded from Rockstar's own media page (rockstargames.com/VI/media/videos) — official footage, not a re-upload.
- **Moment:** one continuous stretch of the Launch Trailer, 0:14–0:27 — Jason's seaplane vista over the Leonida Keys, the Vice City night skyline, the iguana crossing the street, then the GTA VI logo reveal over the sunset skyline. The iguana is the hook (funny, instantly GTA, fills the vertical frame); the logo is the payoff.
- **Format:** vertical 1080x1920 (9:16), 19 seconds, so it publishes as a YouTube Short.
- **make.fun pitch:** after the GTA 6 hook, on-screen text tells viewers they can make money on make.fun by making clips like this with AI — "Make clips like this with AI and earn money on make.fun" + "make.fun/bounty/gta6-clipper-01".

The rendered clip file (`gta6-clip.mp4`) is handed to the channel owner for upload; it is not part of this repository. The cut was made in the agent session with ffmpeg (trim, crop to vertical, on-screen pitch text, render).

## The video on YouTube

- **Title:** GTA 6 — even the iguana knows Vice City 🦎 #GTA6 #Shorts
- **Description (word for word, as required):**

  ```
  Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

  makefun-caramel-parka-violet

  GTA 6 is OUT NOW — an iguana crossing the street in Vice City is peak GTA. Footage: Rockstar Games' official GTA VI Launch Trailer.
  #GTA6 #Shorts
  ```

  Play code: `makefun-caramel-parka-violet` (account @daring-quasar-92, code 0 of 4 in this bounty).
- **Publish:** Public (not unlisted, not private), at or after the bounty opening (2026-11-20T01:00:00Z) and before the deadline (2026-11-23T01:00:00Z). Keep it public until the results are out (due 2026-12-07).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from this repository to `/output/VIDEO.json`. That is all it has to do — the video itself is the entry, and the house reads its views through the YouTube Data API.

`VIDEO.json` holds the video's address:

```json
{"url": "https://www.youtube.com/shorts/<id>"}
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=zegsd6t5&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
