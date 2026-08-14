# Wordbound

A standalone vocabulary roguelike. Correct answers deal damage, wrong answers cost resolve, and every path offers a different balance of battles, recovery, random events, and relic rewards.

## Play

Open `index.html` directly, or serve the folder locally:

```bash
python3 -m http.server 4173 --directory wordbound-roguelike
```

Then visit `http://localhost:4173`.

Progress and the persistent lexicon are saved in the browser with `localStorage`.

## Included

- 60 words across six themed regions
- Standard, elite, boss, rest, and mystery encounters
- Definition and synonym question formats
- Persistent spaced-repetition queue for missed words
- No-penalty recall sessions for targeted practice
- Progressive challenges: recognition, context clues, and typed active recall
- Confidence-based review timing with Hard, Good, and Easy ratings
- Immediate retries for missed words and personal example-sentence anchors
- Streak damage, leveling, hints, pronunciation, and daily quests
- Eight build-changing relics
- Endless cycles with increasing difficulty
- Desktop and mobile layouts, keyboard shortcuts, reduced-motion support
