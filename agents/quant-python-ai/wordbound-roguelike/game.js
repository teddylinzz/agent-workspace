const REGIONS = [
  {
    name: "The Verdant Verge",
    tone: "#2f7a72",
    words: [
      ["serene", "/səˈriːn/", "calm, peaceful, and untroubled", "peaceful", "The lake was serene before sunrise.", "It describes still water or a very calm person.", "A2"],
      ["vivid", "/ˈvɪv.ɪd/", "producing strong, clear images in the mind", "striking", "She gave a vivid account of the journey.", "Think of a color or memory that feels intensely clear.", "B1"],
      ["wander", "/ˈwɒn.dər/", "to move around without a fixed route", "roam", "We wandered through the old market.", "You do this when exploring without a map.", "A2"],
      ["fragile", "/ˈfrædʒ.aɪl/", "easily broken or damaged", "delicate", "The fragile shell cracked in his hand.", "Glass often has this quality.", "B1"],
      ["abundant", "/əˈbʌn.dənt/", "existing in large quantities", "plentiful", "Wildflowers were abundant in the valley.", "More than enough; present everywhere.", "B2"],
      ["glimpse", "/ɡlɪmps/", "a quick or incomplete look", "peek", "I caught a glimpse of the fox.", "A very short look at something.", "B1"],
      ["thrive", "/θraɪv/", "to grow or develop successfully", "flourish", "These plants thrive in warm shade.", "To do very well, not merely survive.", "B2"],
      ["subtle", "/ˈsʌt.əl/", "not obvious; delicate and hard to notice", "faint", "The tea had a subtle floral taste.", "It may be easy to miss at first.", "B2"],
      ["eager", "/ˈiː.ɡər/", "strongly wanting to do or have something", "keen", "The students were eager to begin.", "Excited and ready to act.", "A2"],
      ["shelter", "/ˈʃel.tər/", "a place that gives protection", "refuge", "They found shelter from the rain.", "A safe place during bad weather.", "A2"]
    ]
  },
  {
    name: "The Ember Archives",
    tone: "#c5573f",
    words: [
      ["ancient", "/ˈeɪn.ʃənt/", "belonging to the very distant past", "age-old", "They uncovered an ancient inscription.", "Far older than simply old.", "A2"],
      ["decipher", "/dɪˈsaɪ.fər/", "to discover the meaning of difficult writing", "decode", "Mira deciphered the faded message.", "To turn a code into meaning.", "B2"],
      ["reluctant", "/rɪˈlʌk.tənt/", "unwilling and hesitant", "unwilling", "He was reluctant to leave the fire.", "You do not really want to do it.", "B2"],
      ["peculiar", "/pɪˈkjuː.li.ər/", "strange or unusual", "odd", "A peculiar sound came from the wall.", "Not what you normally expect.", "B2"],
      ["diligent", "/ˈdɪl.ɪ.dʒənt/", "showing steady and careful effort", "hardworking", "The diligent scholar checked every line.", "Careful work sustained over time.", "B2"],
      ["scorch", "/skɔːtʃ/", "to burn the surface of something", "sear", "The flame scorched the paper's edge.", "Heat damages it without burning it completely.", "B2"],
      ["preserve", "/prɪˈzɜːv/", "to keep something safe from harm or decay", "protect", "The vault preserves rare books.", "Keep it in good condition for the future.", "B1"],
      ["obscure", "/əbˈskjʊər/", "not well known or difficult to understand", "unclear", "The poem contains an obscure reference.", "Hidden from common knowledge.", "B2"],
      ["insight", "/ˈɪn.saɪt/", "a deep and accurate understanding", "perception", "Her notes offered new insight into the mystery.", "Seeing beneath the surface of an idea.", "B2"],
      ["linger", "/ˈlɪŋ.ɡər/", "to remain somewhere longer than expected", "remain", "The scent of smoke lingered in the hall.", "It stays even after it should have gone.", "B2"]
    ]
  },
  {
    name: "The Moonlit Mere",
    tone: "#665089",
    words: [
      ["tranquil", "/ˈtræŋ.kwɪl/", "quiet and free from disturbance", "placid", "The garden felt tranquil at dusk.", "A peaceful atmosphere with no interruption.", "B2"],
      ["elusive", "/iˈluː.sɪv/", "difficult to find, catch, or achieve", "evasive", "The answer remained elusive.", "Always seeming just beyond reach.", "C1"],
      ["reflect", "/rɪˈflekt/", "to think carefully and deeply", "consider", "She paused to reflect on the choice.", "Mirrors do this with light; minds do it with ideas.", "B1"],
      ["murky", "/ˈmɜː.ki/", "dark, dirty, or difficult to see through", "cloudy", "Shapes moved beneath the murky water.", "Water you cannot see through clearly.", "B2"],
      ["solitary", "/ˈsɒl.ɪ.tər.i/", "existing or living alone", "lone", "A solitary heron watched the shore.", "One, with no companions nearby.", "B2"],
      ["immerse", "/ɪˈmɜːs/", "to become completely involved in something", "absorb", "He immersed himself in the story.", "To enter so deeply that the outside fades away.", "B2"],
      ["fleeting", "/ˈfliː.tɪŋ/", "lasting for only a short time", "brief", "They shared a fleeting smile.", "Here for a moment, then gone.", "C1"],
      ["yearn", "/jɜːn/", "to want something very strongly", "long", "She yearned to see the mountains again.", "A deep, emotional kind of wanting.", "B2"],
      ["bewilder", "/bɪˈwɪl.dər/", "to confuse someone completely", "baffle", "The shifting paths bewildered the travelers.", "To leave someone with no idea what is happening.", "C1"],
      ["resilient", "/rɪˈzɪl.i.ənt/", "able to recover quickly from difficulty", "tough", "The resilient reeds rose after the storm.", "It bends under pressure and comes back.", "B2"]
    ]
  },
  {
    name: "The Gilded Heights",
    tone: "#b7832f",
    words: [
      ["ascend", "/əˈsend/", "to move upward", "climb", "They began to ascend the narrow ridge.", "The opposite of descend.", "B2"],
      ["formidable", "/ˈfɔː.mɪ.də.bəl/", "inspiring fear or respect through strength", "daunting", "A formidable guardian blocked the gate.", "So powerful that it makes you pause.", "C1"],
      ["perilous", "/ˈper.ɪ.ləs/", "full of danger or risk", "hazardous", "The final crossing was perilous.", "A stronger and more dramatic word for dangerous.", "C1"],
      ["vantage", "/ˈvɑːn.tɪdʒ/", "a position giving a good view or advantage", "viewpoint", "From this vantage, the whole valley was visible.", "A useful place from which to see.", "C1"],
      ["endure", "/ɪnˈdjʊər/", "to continue despite difficulty", "withstand", "The climbers endured the bitter wind.", "To keep going through pain or hardship.", "B2"],
      ["meager", "/ˈmiː.ɡər/", "too small in amount", "scant", "They survived on meager supplies.", "Less than what is needed.", "C1"],
      ["abrupt", "/əˈbrʌpt/", "sudden and unexpected", "sudden", "The trail came to an abrupt end.", "It happens with no gentle transition.", "B2"],
      ["steadfast", "/ˈsted.fɑːst/", "firm and loyal; not changing", "resolute", "She remained steadfast in the storm.", "Unshaken in belief or purpose.", "C1"],
      ["summit", "/ˈsʌm.ɪt/", "the highest point of a mountain", "peak", "Clouds gathered below the summit.", "The very top of a mountain.", "B1"],
      ["dauntless", "/ˈdɔːnt.ləs/", "showing determination and no fear", "fearless", "The dauntless guide pressed onward.", "Courage that refuses to be discouraged.", "C1"]
    ]
  },
  {
    name: "The Clockwork Quarter",
    tone: "#39758c",
    words: [
      ["intricate", "/ˈɪn.trɪ.kət/", "having many small, connected details", "complex", "The lock contained an intricate mechanism.", "Detailed in a complicated, impressive way.", "C1"],
      ["meticulous", "/məˈtɪk.jə.ləs/", "extremely careful about small details", "precise", "Her meticulous notes filled three volumes.", "Care so exact that nothing is overlooked.", "C1"],
      ["obsolete", "/ˈɒb.səl.iːt/", "no longer used because something newer exists", "outdated", "The machine became obsolete decades ago.", "Technology left behind by newer inventions.", "C1"],
      ["synchronize", "/ˈsɪŋ.krə.naɪz/", "to make things happen at the same time", "coordinate", "The gears synchronize every hour.", "Matching timing exactly.", "C1"],
      ["innovate", "/ˈɪn.ə.veɪt/", "to introduce new ideas or methods", "invent", "Small teams often innovate quickly.", "Creating a better way rather than repeating the old one.", "B2"],
      ["erratic", "/ɪˈræt.ɪk/", "unpredictable and irregular", "inconsistent", "The device produced an erratic rhythm.", "No steady pattern can be trusted.", "C1"],
      ["augment", "/ɔːɡˈment/", "to make something greater by adding to it", "enhance", "A new lens augmented her vision.", "Increase or improve by adding something.", "C1"],
      ["feasible", "/ˈfiː.zə.bəl/", "possible and practical to do", "workable", "The engineer proposed a feasible solution.", "It can realistically be accomplished.", "B2"],
      ["redundant", "/rɪˈdʌn.dənt/", "unnecessary because it is more than needed", "superfluous", "The backup made the old system redundant.", "Extra, but without a useful purpose.", "C1"],
      ["calibrate", "/ˈkæl.ɪ.breɪt/", "to adjust an instrument for accuracy", "tune", "You must calibrate the compass first.", "Set a measuring tool so it gives correct results.", "C1"]
    ]
  },
  {
    name: "The Celestial Library",
    tone: "#3c6570",
    words: [
      ["profound", "/prəˈfaʊnd/", "having deep meaning or great insight", "deep", "The discovery had a profound effect on her.", "Far beneath the surface in meaning or impact.", "B2"],
      ["contemplate", "/ˈkɒn.təm.pleɪt/", "to think deeply for a long time", "ponder", "They contemplated the stars in silence.", "A patient, serious form of thinking.", "C1"],
      ["inevitable", "/ɪˈnev.ɪ.tə.bəl/", "certain to happen and impossible to avoid", "unavoidable", "Change was inevitable.", "Nothing can stop it from happening.", "B2"],
      ["ambiguous", "/æmˈbɪɡ.ju.əs/", "having more than one possible meaning", "unclear", "The oracle gave an ambiguous reply.", "It can be understood in different ways.", "C1"],
      ["transcend", "/trænˈsend/", "to go beyond the usual limits", "surpass", "Great stories transcend their own time.", "Rise beyond an ordinary boundary.", "C1"],
      ["ephemeral", "/ɪˈfem.ər.əl/", "lasting for a very short time", "momentary", "The comet's glow was ephemeral.", "Beautiful perhaps, but quickly gone.", "C2"],
      ["paradox", "/ˈpær.ə.dɒks/", "a statement that seems impossible but may be true", "contradiction", "The time loop created a paradox.", "It appears to oppose itself.", "C1"],
      ["ubiquitous", "/juːˈbɪk.wɪ.təs/", "seeming to be present everywhere", "widespread", "Tiny screens have become ubiquitous.", "You encounter it almost everywhere you look.", "C2"],
      ["discern", "/dɪˈsɜːn/", "to recognize something that is hard to see", "detect", "She could discern a pattern in the noise.", "Notice through careful attention.", "C1"],
      ["enigma", "/ɪˈnɪɡ.mə/", "a person or thing that is mysterious", "mystery", "The silent astronomer remained an enigma.", "A puzzle that resists explanation.", "C1"]
    ]
  }
].map(region => ({
  ...region,
  words: region.words.map(([word, phonetic, definition, synonym, sentence, clue, level]) => ({
    word, phonetic, definition, synonym, sentence, clue, level
  }))
}));

const ENEMIES = {
  normal: [
    ["The Mumbler", "INKLING"], ["Comma Crawler", "PUNCTUATION PEST"],
    ["Vowel Vagrant", "LETTERLING"], ["The Misprinter", "INKLING"],
    ["Syntax Sprite", "GRAMMAR GREMLIN"], ["The Forgetter", "MEMORY MOTE"]
  ],
  elite: [
    ["The Redactor", "ELITE CENSOR"], ["Silent Sphinx", "ELITE RIDDLEKEEPER"],
    ["Captain Cliché", "ELITE ECHO"], ["The Jargon Knight", "ELITE VERBALIST"]
  ],
  boss: [
    ["The Blank Page", "VERDANT GUARDIAN"], ["Ashen Archivist", "EMBER GUARDIAN"],
    ["The Drowned Phrase", "MERE GUARDIAN"], ["The Word Wyrm", "GILDED GUARDIAN"],
    ["Grand Mechanism", "CLOCKWORK GUARDIAN"], ["The Final Footnote", "CELESTIAL GUARDIAN"]
  ]
};

const RELICS = [
  { id: "echo", icon: "❞", name: "Echo Quill", text: "+3 damage for every correct answer." },
  { id: "shield", icon: "◉", name: "Patient Stone", text: "Ignore the first wrong answer in each battle." },
  { id: "ember", icon: "♨", name: "Ember Vial", text: "Heal 2 resolve every third answer in a streak." },
  { id: "bookmark", icon: "▰", name: "Golden Bookmark", text: "Gain 30% more ink after encounters." },
  { id: "boots", icon: "⌁", name: "Wayfarer Boots", text: "+8 maximum resolve immediately." },
  { id: "prism", icon: "◇", name: "Meaning Prism", text: "Clues remove two wrong answers." },
  { id: "crown", icon: "♛", name: "Scholar's Crown", text: "Start each battle with +1 spark." },
  { id: "needle", icon: "↟", name: "Compass Needle", text: "Deal +5 damage on your first answer." }
];

const EVENTS = [
  {
    icon: "⌘", title: "The Whispering Signpost",
    copy: "Three wooden arms point in impossible directions. One is carved with a word you nearly remember.",
    options: [
      { label: "Study the carving", detail: "Learn a word · gain 2 insight", effect: "study" },
      { label: "Follow the humming path", detail: "50% treasure · 50% trouble", effect: "gamble" }
    ]
  },
  {
    icon: "☕", title: "A Tea-Seller's Tale",
    copy: "A traveling merchant offers a fragrant cup and a story told entirely in synonyms.",
    options: [
      { label: "Listen to the whole story", detail: "Heal 10 resolve", effect: "heal" },
      { label: "Trade notes", detail: "Pay 12 ink · gain 3 sparks", effect: "trade" }
    ]
  },
  {
    icon: "✧", title: "The Unfinished Sentence",
    copy: "A golden sentence floats above the path, waiting for a final word that only you can provide.",
    options: [
      { label: "Complete it carefully", detail: "Gain 18 ink", effect: "ink" },
      { label: "Rewrite it boldly", detail: "Lose 5 resolve · gain 4 insight", effect: "bold" }
    ]
  }
];

const SAVE_KEY = "wordbound-save-v1";
const META_KEY = "wordbound-meta-v1";
const $ = selector => document.querySelector(selector);
const random = array => array[Math.floor(Math.random() * array.length)];
const shuffle = array => [...array].sort(() => Math.random() - 0.5);
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

let state = null;
let battle = null;
let soundEnabled = true;
let audioContext = null;

function freshState() {
  const knownWords = loadMeta().learned || {};
  return {
    hp: 42, maxHp: 42, level: 1, xp: 0, xpNext: 6,
    sparks: 3, ink: 0, streak: 0, maxStreak: 0,
    region: 0, cycle: 0, node: 0, day: 1,
    wordsAnswered: 0, correct: 0, quest: 0, questClaimed: false,
    learned: { ...knownWords }, seen: [], relics: [], sound: true,
    screen: "choice", startedAt: Date.now()
  };
}

function loadMeta() {
  const defaults = { totalWords: 0, bestStreak: 0, expeditions: 0, learned: {} };
  try {
    const loaded = JSON.parse(localStorage.getItem(META_KEY));
    return loaded ? { ...defaults, ...loaded, learned: loaded.learned || {} } : defaults;
  } catch { return defaults; }
}

function saveState() {
  if (!state) return;
  state.sound = soundEnabled;
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

function loadState() {
  try {
    const loaded = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (!loaded || typeof loaded.hp !== "number") return null;
    return { ...freshState(), ...loaded };
  } catch { return null; }
}

function updateContinueButton() {
  $("#continue-button").hidden = !loadState();
}

function startNewRun() {
  state = freshState();
  soundEnabled = true;
  const meta = loadMeta();
  meta.expeditions += 1;
  localStorage.setItem(META_KEY, JSON.stringify(meta));
  enterGame();
  showPathChoice();
}

function continueRun() {
  state = loadState() || freshState();
  soundEnabled = state.sound;
  enterGame();
  if (state.screen === "gameover") showGameOver();
  else showPathChoice();
}

function enterGame() {
  $("#title-screen").hidden = true;
  $("#game-shell").hidden = false;
  updateHUD();
  updateJourneyMap();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function returnHome() {
  saveState();
  $("#game-shell").hidden = true;
  $("#title-screen").hidden = false;
  updateContinueButton();
}

function updateHUD() {
  if (!state) return;
  const region = REGIONS[state.region % REGIONS.length];
  document.documentElement.style.setProperty("--teal", region.tone);
  $("#region-label").textContent = region.name.toUpperCase();
  $("#day-label").textContent = state.day;
  $("#floor-label").textContent = `${state.node + 1} / 5`;
  $("#level-badge").textContent = `LV. ${state.level}`;
  $("#hp-text").textContent = `${state.hp} / ${state.maxHp}`;
  $("#hp-bar").style.width = `${100 * state.hp / state.maxHp}%`;
  $("#xp-text").textContent = `${state.xp} / ${state.xpNext}`;
  $("#xp-bar").style.width = `${100 * state.xp / state.xpNext}%`;
  $("#spark-count").textContent = state.sparks;
  $("#coin-count").textContent = state.ink;
  $("#streak-count").textContent = state.streak;
  $("#streak-bonus").textContent = `+${Math.min(50, state.streak * 5)}%`;
  $("#learned-count").textContent = Object.keys(state.learned).length;
  $("#quest-progress").textContent = `${Math.min(state.quest, 8)} / 8 · Reward: ${state.questClaimed ? "claimed" : "20 ink"}`;
  $("#quest-bar").style.width = `${Math.min(100, state.quest / 8 * 100)}%`;
  $("#sound-toggle").textContent = soundEnabled ? "♪" : "×";
  $("#sound-toggle-title").textContent = soundEnabled ? "♪" : "×";
  renderRelics();
  saveState();
}

function updateJourneyMap() {
  if (!state) return;
  const map = $("#journey-map");
  map.innerHTML = "";
  const positions = [
    [22, 295], [105, 237], [30, 174], [120, 108], [50, 38]
  ];
  const labels = ["Encounter", "Crossroad", "Challenge", "Unknown", "Guardian"];
  positions.forEach(([x, y], index) => {
    if (index < positions.length - 1) {
      const [nx, ny] = positions[index + 1];
      const dx = nx - x, dy = ny - y;
      const line = document.createElement("span");
      line.className = "map-line";
      line.style.left = `${x + 21}px`;
      line.style.top = `${y + 21}px`;
      line.style.height = `${Math.hypot(dx, dy)}px`;
      line.style.transform = `rotate(${Math.atan2(dy, dx) * 180 / Math.PI - 90}deg)`;
      map.appendChild(line);
    }
    const node = document.createElement("span");
    node.className = `map-node ${index < state.node ? "done" : index === state.node ? "active" : "locked"}`;
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
    node.dataset.label = labels[index];
    node.textContent = index < state.node ? "✓" : index === 4 ? "♜" : ["✦", "⌁", "⚔", "?"][index];
    map.appendChild(node);
  });
}

function renderRelics() {
  const list = $("#relic-list");
  if (!state.relics.length) {
    list.innerHTML = '<span class="empty-relic">Your satchel is empty</span>';
    return;
  }
  list.innerHTML = state.relics.map(id => {
    const relic = RELICS.find(item => item.id === id);
    return `<span class="relic" title="${relic.name}: ${relic.text}">${relic.icon}</span>`;
  }).join("");
}

function hasRelic(id) { return state.relics.includes(id); }

function showPathChoice() {
  state.screen = "choice";
  updateHUD();
  updateJourneyMap();
  if (state.node >= 4) {
    $("#stage").innerHTML = `
      <div class="choice-stage">
        <span class="section-kicker">THE PATH NARROWS</span>
        <h1>A guardian waits.</h1>
        <p class="section-copy">The words here have teeth. Defeat the guardian to cross into the next realm.</p>
        <div class="path-choices">
          <button class="path-card elite" data-path="boss">
            <span class="risk">BOSS</span><span class="path-icon">♜</span><small>REGION FINALE</small>
            <h3>${ENEMIES.boss[state.region % ENEMIES.boss.length][0]}</h3>
            <p>A longer battle with rare rewards and harder vocabulary.</p>
          </button>
        </div>
      </div>`;
  } else {
    const pool = state.node === 0 ? ["normal", "normal", "mystery"] : ["normal", "elite", "rest", "mystery"];
    let types = shuffle(pool).slice(0, 3);
    while (types.length < 3) types.push("normal");
    const details = {
      normal: ["✦", "Wandering Words", "A balanced vocabulary battle.", "ENCOUNTER"],
      elite: ["♞", "The Difficult Road", "Harder foe · stronger relic chance.", "ELITE"],
      rest: ["♨", "A Quiet Clearing", "Restore resolve or sharpen your mind.", "REST"],
      mystery: ["?", "An Unwritten Turn", "A curious event with uncertain rewards.", "UNKNOWN"]
    };
    $("#stage").innerHTML = `
      <div class="choice-stage">
        <span class="section-kicker">CHOOSE YOUR NEXT PAGE</span>
        <h1>The road divides.</h1>
        <p class="section-copy">Each route changes your expedition. Build for survival, chase rare relics, or trust the unknown.</p>
        <div class="path-choices">
          ${types.map(type => {
            const d = details[type];
            return `<button class="path-card ${type}" data-path="${type}">
              ${type === "elite" ? '<span class="risk">RISKY</span>' : ""}
              <span class="path-icon">${d[0]}</span><small>${d[3]}</small><h3>${d[1]}</h3><p>${d[2]}</p>
            </button>`;
          }).join("")}
        </div>
      </div>`;
  }
  document.querySelectorAll("[data-path]").forEach(button => {
    button.addEventListener("click", () => choosePath(button.dataset.path));
  });
}

function choosePath(type) {
  tone(320, .06);
  if (type === "normal" || type === "elite" || type === "boss") startBattle(type);
  if (type === "rest") showRest();
  if (type === "mystery") showEvent();
}

function startBattle(type) {
  const scaling = state.cycle * 6 + state.region * 2 + state.node;
  const maxHp = type === "boss" ? 60 + scaling * 4 : type === "elite" ? 42 + scaling * 3 : 30 + scaling * 2;
  const enemy = type === "boss" ? ENEMIES.boss[state.region % ENEMIES.boss.length] : random(ENEMIES[type]);
  battle = {
    type, name: enemy[0], kind: enemy[1], hp: maxHp, maxHp,
    damage: type === "boss" ? 10 + state.cycle * 2 : type === "elite" ? 8 + state.cycle : 6 + Math.floor(state.cycle / 2),
    turn: 0, blocked: false, first: true, locked: false, current: null, usedWords: []
  };
  if (hasRelic("crown")) state.sparks += 1;
  state.screen = "battle";
  $("#stage").innerHTML = $("#battle-template").innerHTML;
  $("#encounter-type").textContent = type === "boss" ? "REGION GUARDIAN" : type === "elite" ? "ELITE ENCOUNTER" : "WILD ENCOUNTER";
  $("#enemy-name").textContent = battle.name;
  $("#enemy-kind").textContent = battle.kind;
  $("#enemy-art").classList.add(type);
  $("#speak-button").addEventListener("click", speakCurrentWord);
  $("#hint-button").addEventListener("click", useHint);
  $("#skip-button").addEventListener("click", swapWord);
  renderQuestion();
  updateHUD();
}

function getWord() {
  const regionWords = REGIONS[state.region % REGIONS.length].words;
  let available = regionWords.filter(word => !battle.usedWords.includes(word.word));
  if (!available.length) { battle.usedWords = []; available = regionWords; }
  const unseen = available.filter(word => !state.seen.includes(word.word));
  const word = random(unseen.length ? unseen : available);
  battle.usedWords.push(word.word);
  if (!state.seen.includes(word.word)) state.seen.push(word.word);
  if (state.seen.length > 35) state.seen.shift();
  return word;
}

function renderQuestion() {
  battle.locked = false;
  battle.turn += 1;
  battle.current = getWord();
  $("#enemy-art").classList.remove("hurt", "attack");
  const word = battle.current;
  const regionWords = REGIONS[state.region % REGIONS.length].words;
  const mode = Math.random() < .34 && battle.turn > 1 ? "synonym" : "definition";
  const property = mode === "synonym" ? "synonym" : "definition";
  const distractors = shuffle(regionWords.filter(item => item.word !== word.word)).slice(0, 3).map(item => item[property]);
  const answers = shuffle([word[property], ...distractors]);
  $("#word-progress").textContent = `WORD ${battle.turn} · ${battle.hp} HP LEFT`;
  $("#difficulty-tag").textContent = `${battle.type === "boss" ? "GUARDIAN" : battle.type === "elite" ? "RARE" : "COMMON"} · ${word.level}`;
  $("#challenge-word").textContent = word.word;
  $("#pronunciation").textContent = word.phonetic;
  $("#challenge-prompt").textContent = mode === "synonym" ? "Choose the closest synonym" : "Choose the closest meaning";
  $("#enemy-intent").textContent = `⚔ ${battle.damage}`;
  $("#enemy-hp-bar").style.width = `${100 * battle.hp / battle.maxHp}%`;
  $("#clue-box").hidden = true;
  $("#feedback-panel").hidden = true;
  $("#combo-display").hidden = state.streak < 2;
  if (state.streak >= 2) $("#combo-display b").textContent = `×${Math.min(5, 1 + Math.floor(state.streak / 2))}`;
  $("#answer-grid").innerHTML = answers.map((answer, index) => `
    <button class="answer-button" data-answer="${escapeAttribute(answer)}">
      <span>${String.fromCharCode(65 + index)}</span>${answer}
    </button>`).join("");
  document.querySelectorAll(".answer-button").forEach(button => {
    button.addEventListener("click", () => answerQuestion(button, button.dataset.answer === word[property], mode));
  });
  updateHUD();
}

function escapeAttribute(text) {
  return text.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

function answerQuestion(button, correct, mode) {
  if (battle.locked) return;
  battle.locked = true;
  const word = battle.current;
  const buttons = [...document.querySelectorAll(".answer-button")];
  buttons.forEach(item => item.disabled = true);
  state.wordsAnswered += 1;
  if (correct) {
    button.classList.add("correct");
    state.correct += 1;
    state.streak += 1;
    state.maxStreak = Math.max(state.maxStreak, state.streak);
    state.quest += 1;
    state.learned[word.word] = (state.learned[word.word] || 0) + 1;
    gainXp(1);
    let damage = 10 + Math.min(8, state.streak) + (hasRelic("echo") ? 3 : 0) + (battle.first && hasRelic("needle") ? 5 : 0);
    if (state.streak >= 5) damage += 4;
    battle.hp = Math.max(0, battle.hp - damage);
    $("#enemy-hp-bar").style.width = `${100 * battle.hp / battle.maxHp}%`;
    $("#enemy-art").classList.add("hurt");
    showDamage(damage, false);
    tone(520, .08); setTimeout(() => tone(690, .08), 80);
    showFeedback(true, `<b>Exactly.</b> ${word.word} means “${word.definition}.” <i>${word.sentence}</i>`);
    if (hasRelic("ember") && state.streak % 3 === 0) heal(2, false);
    handleQuest();
    battle.first = false;
    updateMeta();
    updateHUD();
    setTimeout(() => {
      if (battle.hp <= 0) winBattle();
      else renderQuestion();
    }, 1200);
  } else {
    button.classList.add("wrong");
    const correctValue = mode === "synonym" ? word.synonym : word.definition;
    buttons.find(item => item.dataset.answer === correctValue)?.classList.add("correct");
    const protectedHit = hasRelic("shield") && !battle.blocked;
    if (protectedHit) battle.blocked = true;
    else state.hp = Math.max(0, state.hp - battle.damage);
    state.streak = 0;
    $("#enemy-art").classList.add("attack");
    document.body.insertAdjacentHTML("beforeend", '<span class="screen-flash"></span>');
    setTimeout(() => $(".screen-flash")?.remove(), 400);
    showDamage(protectedHit ? "BLOCK" : battle.damage, true);
    tone(150, .14);
    showFeedback(false, protectedHit
      ? `<b>Patient Stone blocked the blow.</b> The answer was “${correctValue}.”`
      : `<b>Not quite.</b> ${word.word} means “${word.definition}.” <i>${word.sentence}</i>`);
    battle.first = false;
    updateHUD();
    setTimeout(() => state.hp <= 0 ? showGameOver() : renderQuestion(), 1550);
  }
}

function showFeedback(correct, html) {
  const panel = $("#feedback-panel");
  panel.hidden = false;
  panel.classList.toggle("wrong", !correct);
  panel.innerHTML = html;
}

function showDamage(value, player) {
  const target = player ? $(".portrait-wrap") : $("#enemy-art");
  const box = target.getBoundingClientRect();
  const number = document.createElement("span");
  number.className = "damage-number";
  number.textContent = typeof value === "number" ? `−${value}` : value;
  number.style.left = `${box.left + box.width / 2}px`;
  number.style.top = `${box.top + box.height / 3}px`;
  document.body.appendChild(number);
  setTimeout(() => number.remove(), 850);
}

function useHint() {
  if (battle.locked || state.sparks < 1) { toast("You need a spark to reveal a clue."); return; }
  state.sparks -= 1;
  $("#clue-box").hidden = false;
  $("#clue-box").innerHTML = `<b>Clue:</b> ${battle.current.clue}`;
  const wrongButtons = shuffle([...document.querySelectorAll(".answer-button")].filter(button => {
    return button.dataset.answer !== battle.current.definition && button.dataset.answer !== battle.current.synonym;
  }));
  const removeCount = hasRelic("prism") ? 2 : 1;
  wrongButtons.slice(0, removeCount).forEach(button => { button.disabled = true; button.classList.add("faded"); });
  tone(760, .07);
  updateHUD();
}

function swapWord() {
  if (battle.locked || state.sparks < 1) { toast("You need a spark to swap this word."); return; }
  state.sparks -= 1;
  renderQuestion();
}

function speakCurrentWord() {
  if (!("speechSynthesis" in window) || !battle?.current) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(battle.current.word);
  utterance.rate = .78;
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
}

function gainXp(amount) {
  state.xp += amount;
  if (state.xp >= state.xpNext) {
    state.xp -= state.xpNext;
    state.level += 1;
    state.xpNext = 5 + state.level * 2;
    state.maxHp += 3;
    state.hp = Math.min(state.maxHp, state.hp + 7);
    state.sparks += 1;
    toast(`<b>Level ${state.level}!</b> Resolve and sparks restored.`);
  }
}

function heal(amount, notify = true) {
  const gained = Math.min(amount, state.maxHp - state.hp);
  state.hp += gained;
  if (notify) toast(`Restored <b>${gained} resolve</b>.`);
  updateHUD();
}

function handleQuest() {
  if (state.quest >= 8 && !state.questClaimed) {
    state.questClaimed = true;
    state.ink += 20;
    toast("Daily quest complete! <b>+20 ink</b>");
  }
}

function updateMeta() {
  const meta = loadMeta();
  meta.totalWords += 1;
  meta.bestStreak = Math.max(meta.bestStreak, state.streak);
  meta.learned[battle.current.word] = (meta.learned[battle.current.word] || 0) + 1;
  localStorage.setItem(META_KEY, JSON.stringify(meta));
}

function winBattle() {
  const baseInk = battle.type === "boss" ? 35 : battle.type === "elite" ? 22 : 12;
  const ink = Math.round(baseInk * (hasRelic("bookmark") ? 1.3 : 1));
  state.ink += ink;
  state.sparks = Math.min(9, state.sparks + (battle.type === "boss" ? 2 : 1));
  const rewardType = battle.type;
  completeNode(false);
  if (rewardType === "elite" || rewardType === "boss") showRelicReward(ink, rewardType);
  else showVictory(ink);
}

function completeNode(advanceScreen = true) {
  state.node += 1;
  if (state.node >= 5) {
    state.node = 0;
    state.region += 1;
    state.day += 1;
    if (state.region >= REGIONS.length) {
      state.region = 0;
      state.cycle += 1;
    }
    state.hp = Math.min(state.maxHp, state.hp + Math.ceil(state.maxHp * .3));
    toast(state.cycle ? `<b>Cycle ${state.cycle + 1}</b> begins. Enemies grow stronger.` : "A new word realm has opened.");
  }
  if (hasRelic("crown")) state.sparks = Math.min(9, state.sparks + 1);
  updateHUD();
  updateJourneyMap();
  if (advanceScreen) showPathChoice();
}

function showVictory(ink) {
  state.screen = "reward";
  $("#stage").innerHTML = `
    <div class="reward-stage">
      <span class="section-kicker">ENCOUNTER CLEARED</span><h1>The word is yours.</h1>
      <p class="section-copy">You add another line to your living lexicon and continue a little wiser.</p>
      <div class="summary-stats">
        <div><b>+${ink}</b><span>Ink found</span></div>
        <div><b>${state.streak}</b><span>Current streak</span></div>
        <div><b>${Object.keys(state.learned).length}</b><span>Words learned</span></div>
      </div>
      <button id="continue-path" class="button button-primary">Continue the journey <span>→</span></button>
    </div>`;
  $("#continue-path").addEventListener("click", showPathChoice);
  updateHUD();
}

function showRelicReward(ink, type) {
  state.screen = "reward";
  const available = RELICS.filter(relic => !state.relics.includes(relic.id));
  const picks = shuffle(available).slice(0, 3);
  if (!picks.length) { state.ink += 25; showVictory(ink + 25); return; }
  $("#stage").innerHTML = `
    <div class="reward-stage">
      <span class="section-kicker">${type === "boss" ? "GUARDIAN DEFEATED" : "RARE DISCOVERY"}</span>
      <h1>Choose a relic.</h1><p class="section-copy">Each relic changes how future encounters unfold. Choose the build that suits your journey.</p>
      <div class="reward-grid">
        ${picks.map(relic => `<button class="reward-card" data-relic="${relic.id}">
          <span class="reward-rarity">DISCOVERED RELIC</span><span class="reward-icon">${relic.icon}</span>
          <h3>${relic.name}</h3><p>${relic.text}</p>
        </button>`).join("")}
      </div>
    </div>`;
  document.querySelectorAll("[data-relic]").forEach(button => button.addEventListener("click", () => {
    const relic = RELICS.find(item => item.id === button.dataset.relic);
    state.relics.push(relic.id);
    if (relic.id === "boots") { state.maxHp += 8; state.hp += 8; }
    tone(460, .08); setTimeout(() => tone(740, .12), 90);
    toast(`<b>${relic.name}</b> added to your satchel.`);
    showVictory(ink);
  }));
  updateHUD();
}

function showRest() {
  state.screen = "event";
  $("#stage").innerHTML = `
    <div class="event-stage">
      <div class="event-illustration">♨</div><span class="section-kicker">A QUIET CLEARING</span>
      <h1>Rest between words.</h1><p class="section-copy">For a moment, the forest stops asking questions. You may tend your resolve or prepare your mind.</p>
      <div class="event-options">
        <button class="button button-primary" data-rest="heal">Brew restorative tea<small>Restore 35% resolve</small></button>
        <button class="button button-ghost" data-rest="spark">Study by firelight<small>Gain 2 sparks and 1 insight</small></button>
      </div>
    </div>`;
  document.querySelectorAll("[data-rest]").forEach(button => button.addEventListener("click", () => {
    if (button.dataset.rest === "heal") heal(Math.ceil(state.maxHp * .35));
    else { state.sparks = Math.min(9, state.sparks + 2); gainXp(1); toast("Your mind feels sharper. <b>+2 sparks</b>"); }
    completeNode();
  }));
}

function showEvent() {
  state.screen = "event";
  const event = random(EVENTS);
  $("#stage").innerHTML = `
    <div class="event-stage"><div class="event-illustration">${event.icon}</div>
      <span class="section-kicker">AN UNWRITTEN TURN</span><h1>${event.title}</h1><p class="section-copy">${event.copy}</p>
      <div class="event-options">${event.options.map(option => `
        <button class="button ${option.effect === "gamble" || option.effect === "bold" ? "button-ghost" : "button-primary"}" data-event="${option.effect}">${option.label}<small>${option.detail}</small></button>`).join("")}</div>
    </div>`;
  document.querySelectorAll("[data-event]").forEach(button => button.addEventListener("click", () => resolveEvent(button.dataset.event)));
}

function resolveEvent(effect) {
  if (effect === "study") { gainXp(2); state.quest += 1; toast("A forgotten word returns to you. <b>+2 insight</b>"); }
  if (effect === "gamble") {
    if (Math.random() > .5) { state.ink += 28; toast("The path leads to a hidden inkwell. <b>+28 ink</b>"); }
    else { state.hp = Math.max(1, state.hp - 8); toast("The path loops through thorns. <b>−8 resolve</b>"); }
  }
  if (effect === "heal") heal(10);
  if (effect === "trade") {
    if (state.ink >= 12) { state.ink -= 12; state.sparks = Math.min(9, state.sparks + 3); toast("A fair exchange. <b>+3 sparks</b>"); }
    else { toast("Not enough ink, but the merchant shares a small cup."); heal(4, false); }
  }
  if (effect === "ink") { state.ink += 18; toast("The sentence shines. <b>+18 ink</b>"); }
  if (effect === "bold") { state.hp = Math.max(1, state.hp - 5); gainXp(4); toast("Bold language leaves a mark. <b>+4 insight</b>"); }
  handleQuest();
  completeNode();
}

function showGameOver() {
  state.screen = "gameover";
  state.hp = 0;
  const accuracy = state.wordsAnswered ? Math.round(state.correct / state.wordsAnswered * 100) : 0;
  const known = Object.keys(state.learned).length;
  $("#stage").innerHTML = `
    <div class="reward-stage"><span class="section-kicker">THE INK RUNS DRY</span><h1>Your journey rests.</h1>
      <p class="section-copy">No expedition is wasted. The words you discovered remain in your lexicon, ready for the next journey.</p>
      <div class="summary-stats">
        <div><b>${known}</b><span>Words discovered</span></div><div><b>${accuracy}%</b><span>Accuracy</span></div><div><b>${state.maxStreak}</b><span>Best streak</span></div>
      </div>
      <div class="hero-actions"><button id="retry-button" class="button button-primary">Begin again <span>→</span></button><button id="review-button" class="button button-ghost">Review lexicon</button></div>
    </div>`;
  $("#retry-button").addEventListener("click", startNewRun);
  $("#review-button").addEventListener("click", showLexicon);
  updateHUD();
}

function showLexicon() {
  const knownWords = state?.learned || loadMeta().learned || {};
  const learned = Object.entries(knownWords).sort((a, b) => b[1] - a[1]);
  const allWords = REGIONS.flatMap(region => region.words);
  const content = learned.length ? learned.map(([key, count]) => {
    const word = allWords.find(item => item.word === key);
    return `<div class="lexicon-word"><b>${word.word}</b><span>${word.phonetic} · seen ${count}×</span><p>${word.definition}</p></div>`;
  }).join("") : '<p class="section-copy">Your lexicon is waiting for its first word.</p>';
  openModal(`<span class="modal-kicker">YOUR LIVING RECORD</span><h2>Lexicon</h2><div class="lexicon-list">${content}</div>`);
}

function showSettings() {
  openModal(`<span class="modal-kicker">JOURNEY OPTIONS</span><h2>Settings</h2><div class="settings-list">
    <button id="modal-sound">Sound effects <b>${soundEnabled ? "ON" : "OFF"}</b></button>
    <button id="modal-home">Save & return to title <b>→</b></button>
    <button id="modal-reset" class="danger-button">Erase saved journey <b>×</b></button>
  </div>`);
  $("#modal-sound").addEventListener("click", () => { toggleSound(); showSettings(); });
  $("#modal-home").addEventListener("click", () => { $("#modal").close(); returnHome(); });
  $("#modal-reset").addEventListener("click", () => {
    if (confirm("Erase this saved journey? Your run progress will be lost.")) {
      localStorage.removeItem(SAVE_KEY); $("#modal").close(); state = null; returnHome();
    }
  });
}

function openModal(html) {
  const modal = $("#modal");
  $("#modal-content").innerHTML = html;
  if (modal.open) modal.close();
  modal.showModal();
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  if (state) updateHUD();
  else {
    $("#sound-toggle-title").textContent = soundEnabled ? "♪" : "×";
  }
  if (soundEnabled) tone(520, .07);
}

function tone(frequency, duration) {
  if (!soundEnabled) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(.035, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + duration);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(); oscillator.stop(audioContext.currentTime + duration);
  } catch { /* Sound is optional. */ }
}

function toast(html) {
  const item = document.createElement("div");
  item.className = "toast";
  item.innerHTML = html;
  $("#toast-region").appendChild(item);
  setTimeout(() => item.remove(), 2800);
}

$("#new-run-button").addEventListener("click", startNewRun);
$("#continue-button").addEventListener("click", continueRun);
$("#home-button").addEventListener("click", event => { event.preventDefault(); returnHome(); });
$("#collection-button").addEventListener("click", showLexicon);
$("#settings-button").addEventListener("click", showSettings);
$("#sound-toggle").addEventListener("click", toggleSound);
$("#sound-toggle-title").addEventListener("click", toggleSound);
$("#modal-close").addEventListener("click", () => $("#modal").close());
$("#relic-help").addEventListener("click", () => openModal(`<span class="modal-kicker">PASSIVE POWERS</span><h2>Relics</h2><p class="section-copy">Relics permanently change a run. Defeat elite enemies and region guardians to discover them, then combine their effects into a powerful build.</p>`));
$("#modal").addEventListener("click", event => {
  if (event.target === $("#modal")) $("#modal").close();
});

document.addEventListener("keydown", event => {
  if (!battle || state?.screen !== "battle" || battle.locked) return;
  const index = Number(event.key) - 1;
  const buttons = [...document.querySelectorAll(".answer-button:not(:disabled)")];
  if (index >= 0 && index < buttons.length) buttons[index].click();
});

updateContinueButton();
