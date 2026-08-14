const REGIONS = [
  {
    name: "The Verdant Verge",
    zhName: "翠綠邊境",
    tone: "#2f7a72",
    words: [
      ["serene", "/səˈriːn/", "calm, peaceful, and untroubled", "peaceful", "The lake was serene before sunrise.", "It describes still water or a very calm person.", "A2", "adj.", "安詳寧靜的", "Latin serenus (clear, unclouded)"],
      ["vivid", "/ˈvɪv.ɪd/", "producing strong, clear images in the mind", "striking", "She gave a vivid account of the journey.", "Think of a color or memory that feels intensely clear.", "B1", "adj.", "生動清晰的", "Latin vivere (to live)"],
      ["wander", "/ˈwɒn.dər/", "to move around without a fixed route", "roam", "We wandered through the old market.", "You do this when exploring without a map.", "A2", "v.", "漫遊、漫步", "Old English wandrian (move aimlessly)"],
      ["fragile", "/ˈfrædʒ.aɪl/", "easily broken or damaged", "delicate", "The fragile shell cracked in his hand.", "Glass often has this quality.", "B1", "adj.", "脆弱易碎的", "Latin frangere (to break)"],
      ["abundant", "/əˈbʌn.dənt/", "existing in large quantities", "plentiful", "Wildflowers were abundant in the valley.", "More than enough; present everywhere.", "B2", "adj.", "豐富充裕的", "Latin abundare (to overflow)"],
      ["glimpse", "/ɡlɪmps/", "a quick or incomplete look", "peek", "I caught a glimpse of the fox.", "A very short look at something.", "B1", "n.", "短暫的一瞥", "Middle English glimsen (shine faintly)"],
      ["thrive", "/θraɪv/", "to grow or develop successfully", "flourish", "These plants thrive in warm shade.", "To do very well, not merely survive.", "B2", "v.", "繁榮茁壯", "Old Norse thrifask (to prosper)"],
      ["subtle", "/ˈsʌt.əl/", "not obvious; delicate and hard to notice", "faint", "The tea had a subtle floral taste.", "It may be easy to miss at first.", "B2", "adj.", "微妙隱約的", "Latin subtilis (finely woven)"],
      ["eager", "/ˈiː.ɡər/", "strongly wanting to do or have something", "keen", "The students were eager to begin.", "Excited and ready to act.", "A2", "adj.", "熱切渴望的", "Latin acer (sharp, keen)"],
      ["shelter", "/ˈʃel.tər/", "a place that gives protection", "refuge", "They found shelter from the rain.", "A safe place during bad weather.", "A2", "n.", "避難所、庇護", "Old English scildtruma (shield troop)"],
      ["verdant", "/ˈvɜː.dənt/", "green with grass or rich vegetation", "lush", "The verdant hills stretched to the horizon.", "Full of fresh green plant life.", "C1", "adj.", "翠綠繁茂的", "Latin viridis (green)"],
      ["breeze", "/briːz/", "a gentle and refreshing wind", "gust", "A cool breeze swept across the meadow.", "Light moving air on a sunny day.", "A2", "n.", "微風", "Spanish brisa (cold northeast wind)"],
      ["canopy", "/ˈkæn.ə.pi/", "an overhead covering formed by trees or cloth", "awning", "Sunlight filtered through the dense forest canopy.", "The leafy roof of the woods.", "B2", "n.", "樹冠、頂篷", "Greek konopeion (mosquito net)"],
      ["blossom", "/ˈblɒs.əm/", "to produce flowers or develop favorably", "bloom", "The apple trees began to blossom in April.", "Opening up with color and promise.", "B1", "v.", "開花、繁茂發展", "Old English blostm (flower)"],
      ["sprout", "/spraʊt/", "to begin to grow shoots or develop new life", "bud", "Tiny green shoots sprouted from the rich earth.", "The very first sign of plant growth.", "B1", "v.", "發芽、萌芽", "Old English sprutan (to sprout)"],
      ["wholesome", "/ˈhəʊl.səm/", "good for health, mind, or moral well-being", "healthy", "The village served wholesome home-cooked meals.", "Pure, nutritious, and comforting.", "B2", "adj.", "有益健康的、純真的", "Old English hal (healthy, whole)"],
      ["meadow", "/ˈmed.əʊ/", "a field of grass and wild plants", "pasture", "Deer grazed peacefully in the open meadow.", "A wide green clearing in nature.", "A2", "n.", "草地、牧場", "Old English mæd (mown land)"],
      ["petal", "/ˈpet.əl/", "one of the soft colored parts of a flower", "leaf", "Fallen rose petals carpeted the garden path.", "Delicate colored parts that make a flower beautiful.", "A2", "n.", "花瓣", "Greek petalon (outspread leaf)"],
      ["foliage", "/ˈfəʊ.li.ɪdʒ/", "the leaves of a plant or tree collectively", "greenery", "Autumn turned the forest foliage into shades of copper.", "All the leaves on trees and bushes.", "B2", "n.", "葉子、植物總稱", "Latin folium (leaf)"],
      ["nurture", "/ˈnɜː.tʃər/", "to care for and encourage the growth of something", "foster", "She nurtured her seedlings with clean water and care.", "Helping something delicate grow strong.", "B2", "v.", "培育、養育", "Latin nutrire (to nourish)"],
      ["quench", "/kwentʃ/", "to satisfy thirst or extinguish fire", "slake", "A sip of cold spring water quenched his thirst.", "Putting out a flame or satisfying a deep craving.", "B2", "v.", "解渴、熄滅", "Old English cwencan (to extinguish)"],
      ["rustle", "/ˈrʌs.əl/", "to make a soft dry sound of moving leaves", "swish", "Dry autumn leaves rustled beneath their boots.", "The whisper of leaves stirred by the wind.", "B1", "v.", "發出沙沙聲", "Middle English rustelen (soft friction sound)"],
      ["wilderness", "/ˈwɪl.də.nəs/", "an uncultivated, wild, and natural area", "wilds", "They ventured deep into the northern wilderness.", "Untamed natural terrain.", "B2", "n.", "荒野、未開拓地", "Old English wilder (wild beast)"],
      ["mossy", "/ˈmɒs.i/", "covered in or resembling soft green moss", "velvety", "The ancient stone steps were damp and mossy.", "Soft, damp green carpet growing on stones.", "B1", "adj.", "長滿青苔的", "Old English mos (bog)"],
      ["rippling", "/ˈrɪp.lɪŋ/", "moving in small, gentle waves", "undulating", "The sunlight danced on the rippling stream.", "Small crests forming across calm water.", "B2", "adj.", "微波盪漾的", "Origin imitative (small ripples)"],
      ["tranquility", "/træŋˈkwɪl.ə.ti/", "the state of being calm and peaceful", "serenity", "The tranquil garden offered pure peace of mind.", "Deep silence unbroken by chaos.", "B2", "n.", "平靜、祥和", "Latin tranquillus (quiet, calm)"],
      ["burgeon", "/ˈbɜː.dʒən/", "to begin to grow or increase rapidly", "expand", "A burgeoning curiosity pushed the traveler forward.", "Swelling with new life and rapid expansion.", "C1", "v.", "迅速成長、蓬勃發展", "Old French burjon (bud)"],
      ["sylvan", "/ˈsɪl.vən/", "associated with the woods or pleasantly rural", "wooded", "A sylvan path wound through the tall ancient oaks.", "Poetic descriptor for forest landscapes.", "C2", "adj.", "森林的、樹木茂密的", "Latin silva (forest)"],
      ["emerald", "/ˈem.ər.əld/", "a bright green precious stone or vibrant color", "green", "The valley shone like an emerald after the rain.", "Brilliant, glowing jewel green.", "B1", "adj.", "翠綠色的、翡翠", "Greek smaragdos (green gem)"],
      ["harmonious", "/hɑːˈməʊ.ni.əs/", "tuneful, balanced, and free from disagreement", "concordant", "The birds created a harmonious morning song.", "Fitting together smoothly and pleasantly.", "B2", "adj.", "和諧悅耳的", "Greek harmonia (agreement, joining)"]
    ]
  },
  {
    name: "The Ember Archives",
    zhName: "餘燼檔案館",
    tone: "#c5573f",
    words: [
      ["ancient", "/ˈeɪn.ʃənt/", "belonging to the very distant past", "age-old", "They uncovered an ancient inscription.", "Far older than simply old.", "A2", "adj.", "古老久遠的", "Latin ante (before)"],
      ["decipher", "/dɪˈsaɪ.fər/", "to discover the meaning of difficult writing", "decode", "Mira deciphered the faded message.", "To turn a code into meaning.", "B2", "v.", "破譯、解讀", "Latin de (reversal) + cipher (zero/code)"],
      ["reluctant", "/rɪˈlʌk.tənt/", "unwilling and hesitant", "unwilling", "He was reluctant to leave the fire.", "You do not really want to do it.", "B2", "adj.", "不情願的、猶豫的", "Latin reluctari (to struggle against)"],
      ["peculiar", "/pɪˈkjuː.li.ər/", "strange or unusual", "odd", "A peculiar sound came from the wall.", "Not what you normally expect.", "B2", "adj.", "古怪特殊的", "Latin peculium (private property)"],
      ["diligent", "/ˈdɪl.ɪ.dʒənt/", "showing steady and careful effort", "hardworking", "The diligent scholar checked every line.", "Careful work sustained over time.", "B2", "adj.", "勤奮細緻的", "Latin diligere (to value highly, choose)"],
      ["scorch", "/skɔːtʃ/", "to burn the surface of something", "sear", "The flame scorched the paper's edge.", "Heat damages it without burning it completely.", "B2", "v.", "燒焦、灼傷", "Old Norse skrokkr (shriveled body)"],
      ["preserve", "/prɪˈzɜːv/", "to keep something safe from harm or decay", "protect", "The vault preserves rare books.", "Keep it in good condition for the future.", "B1", "v.", "保存、維護", "Latin prae (before) + servare (to keep)"],
      ["obscure", "/əbˈskjʊər/", "not well known or difficult to understand", "unclear", "The poem contains an obscure reference.", "Hidden from common knowledge.", "B2", "adj.", "晦澀難懂的、默默無聞的", "Latin obscurus (dark, dim)"],
      ["insight", "/ˈɪn.saɪt/", "a deep and accurate understanding", "perception", "Her notes offered new insight into the mystery.", "Seeing beneath the surface of an idea.", "B2", "n.", "洞察力、深刻見解", "Middle English in + sight (inner vision)"],
      ["linger", "/ˈlɪŋ.ɡər/", "to remain somewhere longer than expected", "remain", "The scent of smoke lingered in the hall.", "It stays even after it should have gone.", "B2", "v.", "逗留、徘徊", "Old English langan (to long for)"],
      ["archive", "/ˈɑː.kaɪv/", "a collection of historical documents or records", "repository", "Scholars searched the imperial archive for truth.", "A secure storehouse for historic texts.", "B2", "n.", "檔案館、文獻庫", "Greek arkheion (public record office)"],
      ["manuscript", "/ˈmæn.jʊ.skrɪpt/", "a handwritten or typed piece of literature", "text", "The fragile manuscript was written in gold ink.", "A historical text written by hand.", "B2", "n.", "手稿、原稿", "Latin manu (by hand) + scriptus (written)"],
      ["parchment", "/ˈpɑːtʃ.mənt/", "stiff animal skin prepared for writing", "vellum", "Scribes wrote sacred annals on rolled parchment.", "Historical paper-like material made from animal skin.", "B2", "n.", "羊皮紙", "Latin Pergamum (ancient writing hub)"],
      ["chronicle", "/ˈkrɒn.ɪ.kəl/", "a factual written account of historical events", "record", "The chronicle detailed five centuries of peace and war.", "Recording history year by year.", "B2", "n.", "編年史、記錄", "Greek chronos (time)"],
      ["ignite", "/ɪɡˈnaɪt/", "to catch fire or cause something to burn", "kindle", "A stray spark ignited the dry tinder.", "Setting something ablaze.", "B2", "v.", "點燃、引發", "Latin ignis (fire)"],
      ["kindle", "/ˈkɪn.dəl/", "to start a fire or arouse an emotion", "spark", "Her passionate speech kindled a love for learning.", "Lighting a flame in a hearth or heart.", "C1", "v.", "點燃、激起", "Old Norse kynda (to kindle)"],
      ["illuminate", "/ɪˈluː.mɪ.neɪt/", "to light up or make something clear and easy to understand", "clarify", "Candles illuminated the library; his lecture illuminated the theory.", "Shining light physically or intellectually.", "B2", "v.", "照亮、闡明", "Latin lumen (light)"],
      ["relic", "/ˈrel.ɪk/", "an object surviving from an earlier time", "artifact", "The golden compass was a cherished relic of the empire.", "A remnant from long ago.", "B2", "n.", "遺物、聖物", "Latin relinquere (to leave behind)"],
      ["cryptic", "/ˈkrɪp.tɪk/", "having a meaning that is mysterious or obscure", "enigmatic", "The wizard left a cryptic note before vanishing.", "A puzzle wrapped in hidden meaning.", "C1", "adj.", "神秘隱晦的", "Greek kryptos (hidden)"],
      ["tome", "/təʊm/", "a large, heavy, and scholarly book", "volume", "He lifted a dusty leather-bound tome from the shelf.", "A grand and weighty academic book.", "C1", "n.", "大部頭典籍", "Greek tomos (section, roll of papyrus)"],
      ["scroll", "/skrəʊl/", "a roll of parchment containing writing", "roll", "She unrolled the silk scroll to read the decree.", "A long rolled parchment.", "B1", "n.", "卷軸、手卷", "Old French escrouele (strip of parchment)"],
      ["forge", "/fɔːdʒ/", "to shape metal with fire or create something through effort", "craft", "Hardship helped forge an unbreakable friendship.", "Creating strength in intense heat.", "B2", "v.", "鍛造、努力締造", "Latin fabrica (workshop)"],
      ["parable", "/ˈpær.ə.bəl/", "a simple story used to illustrate a moral lesson", "fable", "The elder taught wisdom through an ancient parable.", "A short allegorical tale with a moral.", "C1", "n.", "寓言故事", "Greek parabole (comparison)"],
      ["scintilla", "/sɪnˈtɪl.ə/", "a tiny trace or spark of a specified quality", "shred", "There was not a scintilla of doubt in her testimony.", "The smallest conceivable spark or shred.", "C2", "n.", "極微小的一絲、火星", "Latin scintilla (spark)"],
      ["ardent", "/ˈɑː.dənt/", "very enthusiastic or passionate", "fervent", "He was an ardent collector of forgotten poems.", "Burning with passionate interest.", "C1", "adj.", "熱烈的、熾熱的", "Latin ardere (to burn)"],
      ["ember", "/ˈem.bər/", "a small glowing piece of burning wood in a dying fire", "spark", "A glowing ember remained in the hearth until dawn.", "Warm remnants of a fire.", "B2", "n.", "餘燼、火種", "Old English æmyrge (ashes)"],
      ["inscribe", "/ɪnˈskraɪb/", "to write or carve words on a surface", "engrave", "The jeweler inscribed their names inside the ring.", "Carving permanent letters into stone or metal.", "B2", "v.", "題寫、雕刻銘記", "Latin in + scribere (to write)"],
      ["lore", "/lɔːr/", "traditional knowledge and stories passed by word of mouth", "mythology", "The village elders preserved centuries of folklore.", "Ancient cultural tales and wisdom.", "B2", "n.", "傳說、口頭知識", "Old English lar (teaching, learning)"],
      ["erudite", "/ˈer.ʊ.daɪt/", "having or showing profound knowledge and scholarship", "scholarly", "The erudite professor spoke six dead languages.", "Deeply educated and literate.", "C2", "adj.", "博學多聞的", "Latin erudire (to educate, polish from raw state)"],
      ["fable", "/ˈfeɪ.bəl/", "a short story conveying a moral, often with animal characters", "tale", "Aesop's fables remain memorable across millennia.", "A timeless moral lesson told in story.", "B1", "n.", "寓言", "Latin fabula (story, talk)"]
    ]
  },
  {
    name: "The Moonlit Mere",
    zhName: "月影池畔",
    tone: "#665089",
    words: [
      ["tranquil", "/ˈtræŋ.kwɪl/", "quiet and free from disturbance", "placid", "The garden felt tranquil at dusk.", "A peaceful atmosphere with no interruption.", "B2", "adj.", "寧靜安詳的", "Latin tranquillus (calm)"],
      ["elusive", "/iˈluː.sɪv/", "difficult to find, catch, or achieve", "evasive", "The answer remained elusive.", "Always seeming just beyond reach.", "C1", "adj.", "難以捉摸的、避而不見的", "Latin eludere (to evade, slip away)"],
      ["reflect", "/rɪˈflekt/", "to think carefully and deeply", "consider", "She paused to reflect on the choice.", "Mirrors do this with light; minds do it with ideas.", "B1", "v.", "深思反省、倒映", "Latin re (back) + flectere (to bend)"],
      ["murky", "/ˈmɜː.ki/", "dark, dirty, or difficult to see through", "cloudy", "Shapes moved beneath the murky water.", "Water you cannot see through clearly.", "B2", "adj.", "昏暗渾濁的", "Old Norse myrkr (darkness)"],
      ["solitary", "/ˈsɒl.ɪ.tər.i/", "existing or living alone", "lone", "A solitary heron watched the shore.", "One, with no companions nearby.", "B2", "adj.", "獨自孤單的", "Latin solus (alone)"],
      ["immerse", "/ɪˈmɜːs/", "to become completely involved in something", "absorb", "He immersed himself in the story.", "To enter so deeply that the outside fades away.", "B2", "v.", "沉浸、完全融入", "Latin in + mergere (to plunge)"],
      ["fleeting", "/ˈfliː.tɪŋ/", "lasting for only a short time", "brief", "They shared a fleeting smile.", "Here for a moment, then gone.", "C1", "adj.", "短暫飛逝的", "Old English fleotan (to float, fleet)"],
      ["yearn", "/jɜːn/", "to want something very strongly", "long", "She yearned to see the mountains again.", "A deep, emotional kind of wanting.", "B2", "v.", "深切渴望、嚮往", "Old English giernan (to desire)"],
      ["bewilder", "/bɪˈwɪl.dər/", "to confuse someone completely", "baffle", "The shifting paths bewildered the travelers.", "To leave someone with no idea what is happening.", "C1", "v.", "使困惑迷茫", "English wild (lead into the wilderness)"],
      ["resilient", "/rɪˈzɪl.i.ənt/", "able to recover quickly from difficulty", "tough", "The resilient reeds rose after the storm.", "It bends under pressure and comes back.", "B2", "adj.", "有韌性的、能迅速恢復的", "Latin resilire (to leap back)"],
      ["luminous", "/ˈluː.mɪ.nəs/", "giving off light; bright or shining", "radiant", "The moon was luminous against the midnight sky.", "Glowing brightly in the dark.", "B2", "adj.", "發光的、明亮的", "Latin lumen (light)"],
      ["shimmer", "/ˈʃɪm.ər/", "to shine with a soft, wavering light", "glimmer", "The surface of the lake shimmered under starlight.", "Gentle flickering reflections on water.", "B1", "v.", "閃爍微光", "Old English scimian (to glitter)"],
      ["nocturnal", "/nɒkˈtɜː.nəl/", "active or happening at night", "nighttime", "Owls are nocturnal predators with remarkable hearing.", "Belonging to nighttime rather than daylight.", "B2", "adj.", "夜間活動的、夜行的", "Latin nox (night)"],
      ["somber", "/ˈsɒm.bər/", "dark, dull, or serious and sad", "solemn", "A somber mood settled over the misty castle.", "Solemn, heavy, and quiet atmosphere.", "B2", "adj.", "憂鬱陰沉的", "Latin sub + umbra (under shadow)"],
      ["ethereal", "/iˈθɪə.ri.əl/", "extremely delicate and light; heavenly", "celestial", "Her ethereal voice echoed through the quiet valley.", "Light and delicate as if from heaven.", "C2", "adj.", "超凡脫俗的、縹緲的", "Greek aither (pure upper air)"],
      ["whisper", "/ˈwɪs.pər/", "to speak very softly using only breath", "murmur", "She whispered the secret in his ear.", "Quiet speaking so others cannot overhear.", "A2", "v.", "低語、耳語", "Old English hwisprian (to whisper)"],
      ["drift", "/drɪft/", "to be carried slowly by a current of water or air", "float", "Petals drifted slowly down the silent river.", "Moving without steering.", "B1", "v.", "漂流、漂移", "Old Norse dript (snow drift)"],
      ["serenade", "/ˌser.əˈneɪd/", "a romantic piece of music performed at night", "melody", "A lone violinist serenaded the quiet square at dusk.", "A nighttime musical tribute.", "C1", "n.", "小夜曲", "Italian sereno (calm, clear night sky)"],
      ["cascade", "/kæsˈkeɪd/", "to pour downward rapidly and in large quantities", "waterfall", "Silvery water cascaded over the smooth granite rocks.", "Pouring down like a waterfall.", "B2", "v.", "如瀑布般垂落", "Latin cadere (to fall)"],
      ["silhouette", "/ˌsɪl.uˈet/", "the dark outline of someone or something against lighter background", "outline", "The castle's silhouette stood stark against the twilight.", "A shadow outline showing external shape.", "B2", "n.", "剪影、輪廓", "Named after Étienne de Silhouette"],
      ["mystic", "/ˈmɪs.tɪk/", "involving spiritual mysteries or obscure truths", "occult", "The monks practiced ancient mystic meditation.", "Pertaining to deep spiritual enigmas.", "B2", "adj.", "神秘的、玄妙的", "Greek mystes (initiate into mysteries)"],
      ["hazy", "/ˈheɪ.zi/", "covered by a fine mist or unclear in memory", "foggy", "His childhood memories had grown pleasant but hazy.", "Veiled in light fog or slight blur.", "B1", "adj.", "朦朧模糊的", "Origin unknown (connected to haze)"],
      ["rippling", "/ˈrɪp.lɪŋ/", "flowing in small gentle undulations", "wavy", "A rippling current carried the paper boat away.", "Soft waves upon still water.", "B2", "adj.", "漣漪蕩漾的", "Imitative origin"],
      ["melancholy", "/ˈmel.əŋ.kɒl.i/", "a feeling of pensive sadness with no obvious cause", "sorrow", "A sweet melancholy lingered in the minor chords.", "A gentle, thoughtful sadness.", "B2", "n.", "憂鬱、感傷", "Greek melas (black) + khole (bile)"],
      ["quiver", "/ˈkwɪv.ər/", "to tremble or shake with a slight rapid motion", "shiver", "Her hand quivered as she opened the sealed letter.", "A small involuntary trembling.", "B2", "v.", "顫抖、微顫", "Old English cwifer (lively)"],
      ["solitude", "/ˈsɒl.ɪ.tjuːd/", "the state or situation of being alone in peace", "privacy", "The author cherished the uninterrupted solitude of the woods.", "Peaceful isolation from society.", "B2", "n.", "獨處、幽居", "Latin solus (alone)"],
      ["fathom", "/ˈfæð.əm/", "to understand a difficult problem after deep thought", "comprehend", "He could not fathom the reasons for her sudden departure.", "Measuring the deep waters of a mystery.", "C1", "v.", "徹底理解、測深", "Old English fæthm (outstretched arms)"],
      ["lullaby", "/ˈlʌl.ə.baɪ/", "a quiet, gentle song sung to send someone to sleep", "cradle-song", "The soothing lullaby comforted the restless child.", "Soft music that invites sleep.", "B1", "n.", "搖籃曲", "Middle English lullen (to lull)"],
      ["reverie", "/ˈrev.ər.i/", "a state of being pleasantly lost in one's thoughts", "daydream", "A tap on her shoulder broke her pleasant reverie.", "A daydream full of creative thought.", "C1", "n.", "遐想、沉思", "Old French rever (to dream, rave)"],
      ["murmur", "/ˈmɜː.mər/", "a low, continuous, and indistinct sound", "hum", "The soft murmur of the stream helped him fall asleep.", "Indistinct gentle sound in the background.", "B2", "n.", "低語、潺潺聲", "Latin murmurare (to whisper, rumble)"]
    ]
  },
  {
    name: "The Gilded Heights",
    zhName: "鍍金高地",
    tone: "#b7832f",
    words: [
      ["ascend", "/əˈsend/", "to move upward", "climb", "They began to ascend the narrow ridge.", "The opposite of descend.", "B2", "v.", "攀登、上升", "Latin ad (to) + scandere (to climb)"],
      ["formidable", "/ˈfɔː.mɪ.də.bəl/", "inspiring fear or respect through strength", "daunting", "A formidable guardian blocked the gate.", "So powerful that it makes you pause.", "C1", "adj.", "令人敬畏的、強大的", "Latin formido (fear)"],
      ["perilous", "/ˈper.ɪ.ləs/", "full of danger or risk", "hazardous", "The final crossing was perilous.", "A stronger and more dramatic word for dangerous.", "C1", "adj.", "極為危險的", "Latin periculum (danger)"],
      ["vantage", "/ˈvɑːn.tɪdʒ/", "a position giving a good view or advantage", "viewpoint", "From this vantage, the whole valley was visible.", "A useful place from which to see.", "C1", "n.", "有利位置、制高點", "French avantage (advantage)"],
      ["endure", "/ɪnˈdjʊər/", "to continue despite difficulty", "withstand", "The climbers endured the bitter wind.", "To keep going through pain or hardship.", "B2", "v.", "忍耐、持久支撐", "Latin durus (hard)"],
      ["meager", "/ˈmiː.ɡər/", "too small in amount", "scant", "They survived on meager supplies.", "Less than what is needed.", "C1", "adj.", "微薄貧乏的", "Latin macer (lean, thin)"],
      ["abrupt", "/əˈbrʌpt/", "sudden and unexpected", "sudden", "The trail came to an abrupt end.", "It happens with no gentle transition.", "B2", "adj.", "突然的、生硬唐突的", "Latin ab (away) + rumpere (to break)"],
      ["steadfast", "/ˈsted.fɑːst/", "firm and loyal; not changing", "resolute", "She remained steadfast in the storm.", "Unshaken in belief or purpose.", "C1", "adj.", "堅定不移的", "Old English stede (place) + fæst (fast, firm)"],
      ["summit", "/ˈsʌm.ɪt/", "the highest point of a mountain", "peak", "Clouds gathered below the summit.", "The very top of a mountain.", "B1", "n.", "頂峰、頂點", "Latin summus (highest)"],
      ["dauntless", "/ˈdɔːnt.ləs/", "showing determination and no fear", "fearless", "The dauntless guide pressed onward.", "Courage that refuses to be discouraged.", "C1", "adj.", "無畏果敢的", "Latin domare (to tame) + less"],
      ["pinnacle", "/ˈpɪn.ə.kəl/", "the most successful point or a high pointed rock", "apex", "Reaching the summit was the pinnacle of his climbing career.", "The very peak of accomplishment.", "C1", "n.", "頂峰、巔峰", "Latin pinna (wing, fin, feather)"],
      ["valiant", "/ˈvæl.i.ənt/", "possessing or showing great courage or determination", "brave", "The scouts made a valiant effort to cross the gorge.", "Heroic courage in the face of peril.", "B2", "adj.", "英勇的、勇猛的", "Latin valere (to be strong)"],
      ["precipice", "/ˈpres.ɪ.pɪs/", "a very steep cliff or hazardous situation", "brink", "They stood carefully at the edge of the rocky precipice.", "A sheer vertical cliff edge.", "C1", "n.", "懸崖峭壁、險境", "Latin praeceps (headlong, steep)"],
      ["rugged", "/ˈrʌɡ.ɪd/", "having a broken, rocky, and uneven surface", "craggy", "The mountain trail was steep and rugged.", "Rough, wild, and sturdy terrain.", "B2", "adj.", "崎嶇不平的、粗獷堅韌的", "Old Norse rogg (shaggy tuft)"],
      ["elevate", "/ˈel.ɪ.veɪt/", "to raise something to a higher position or level", "lift", "Daily practice will elevate your mastery of language.", "Lifting up physically or intellectually.", "B2", "v.", "提升、拔高", "Latin e + levare (to lift, make light)"],
      ["loftiness", "/ˈlɒf.ti.nəs/", "great height or nobility of spirit", "grandeur", "The loftiness of the snowy peaks took their breath away.", "Towering height or noble grandeur.", "C1", "n.", "崇高、高聳", "Old Norse lopt (air, upper room)"],
      ["arduous", "/ˈɑː.dʒu.əs/", "involving or requiring strenuous effort", "exhausting", "The expedition faced an arduous climb through freezing sleet.", "Extremely tough, taxing work.", "C1", "adj.", "艱鉅繁重的", "Latin arduus (steep, difficult)"],
      ["altitude", "/ˈæl.tɪ.tjuːd/", "the height of an object or point above sea level", "elevation", "At high altitude, the air becomes thinner.", "Measurement of vertical height.", "B2", "n.", "海拔、高度", "Latin altus (high)"],
      ["stamina", "/ˈstæm.ɪ.nə/", "the ability to sustain prolonged physical or mental effort", "endurance", "Long mountain treks require immense stamina.", "Staying power under physical pressure.", "B2", "n.", "耐力、持久力", "Latin stamen (thread of life)"],
      ["traverse", "/trəˈvɜːs/", "to travel across or through a difficult area", "cross", "The adventurers traversed the glacier with iron crampons.", "Crossing wide or rugged expanses.", "C1", "v.", "橫渡、橫越", "Latin transversus (turned across)"],
      ["ridge", "/rɪdʒ/", "a long, narrow hilltop or mountain crest", "crest", "They walked along the narrow mountain ridge at dawn.", "The elevated backbone of a mountain.", "B1", "n.", "山脊、山脈", "Old English hrycg (back, spine)"],
      ["tenacious", "/təˈneɪ.ʃəs/", "holding firm; tending to keep a firm hold", "persistent", "Her tenacious spirit refused to give up on the summit.", "Refusing to let go of a goal.", "C1", "adj.", "堅毅不撓的、緊握的", "Latin tenere (to hold)"],
      ["soar", "/sɔːr/", "to fly or rise high in the air", "ascend", "An eagle soared effortlessly over the deep canyon.", "Gliding high with ease.", "B1", "v.", "翱翔、飆升", "Latin ex + aura (out of the air)"],
      ["granite", "/ˈɡræn.ɪt/", "a very hard crystalline rock", "stone", "The fortress was built of solid grey granite.", "Immensely hard mountain rock.", "B2", "n.", "花崗岩", "Italian granito (grained)"],
      ["gorge", "/ɡɔːdʒ/", "a narrow valley between hills, usually with a stream", "canyon", "A rope bridge stretched across the roaring gorge.", "A deep, sheer mountain canyon.", "B2", "n.", "峽谷", "Latin gurges (whirlpool, throat)"],
      ["monumental", "/ˌmɒn.jʊˈmen.təl/", "great in importance, extent, or size", "colossal", "Finishing the manuscript was a monumental achievement.", "Massive and historic in scale.", "B2", "adj.", "豐碑般的、極其重大的", "Latin monumentum (memorial)"],
      ["intrepid", "/ɪnˈtrep.ɪd/", "fearless and adventurous", "daring", "The intrepid explorer crossed the uncharted desert alone.", "Unafraid of danger or exploration.", "C1", "adj.", "勇往直前的、無畏的", "Latin in (not) + trepidus (alarmed)"],
      ["summitry", "/ˈsʌm.ɪ.tri/", "the art or practice of high-level meetings at peaks", "diplomacy", "Great minds gathered for summitry above the clouds.", "Peak-level coordination.", "C2", "n.", "高峰會談、峰會策略", "Latin summus (highest)"],
      ["resolute", "/ˈrez.ə.luːt/", "admirably purposeful, determined, and unwavering", "firm", "He remained resolute in defending the vulnerable villagers.", "Fixed firmly in intention.", "C1", "adj.", "堅決剛毅的", "Latin resolvere (to untie, decide firmly)"],
      ["majestic", "/məˈdʒes.tɪk/", "having or showing impressive beauty or scale", "grand", "The majestic snow-capped peaks pierced the clouds.", "Royally grand and breathtaking.", "B2", "adj.", "雄偉壯麗的", "Latin majestas (greatness)"]
    ]
  },
  {
    name: "The Clockwork Quarter",
    zhName: "發條城區",
    tone: "#39758c",
    words: [
      ["intricate", "/ˈɪn.trɪ.kət/", "having many small, connected details", "complex", "The lock contained an intricate mechanism.", "Detailed in a complicated, impressive way.", "C1", "adj.", "錯綜複雜精細的", "Latin intricare (to entangle)"],
      ["meticulous", "/məˈtɪk.jə.ləs/", "extremely careful about small details", "precise", "Her meticulous notes filled three volumes.", "Care so exact that nothing is overlooked.", "C1", "adj.", "一絲不苟細緻的", "Latin metus (fear)"],
      ["obsolete", "/ˈɒb.səl.iːt/", "no longer used because something newer exists", "outdated", "The machine became obsolete decades ago.", "Technology left behind by newer inventions.", "C1", "adj.", "過時淘汰的", "Latin obsolescere (to wear out)"],
      ["synchronize", "/ˈsɪŋ.krə.naɪz/", "to make things happen at the same time", "coordinate", "The gears synchronize every hour.", "Matching timing exactly.", "C1", "v.", "使同步、協調時間", "Greek syn (together) + chronos (time)"],
      ["innovate", "/ˈɪn.ə.veɪt/", "to introduce new ideas or methods", "invent", "Small teams often innovate quickly.", "Creating a better way rather than repeating the old one.", "B2", "v.", "創新、革新", "Latin in + novus (new)"],
      ["erratic", "/ɪˈræt.ɪk/", "unpredictable and irregular", "inconsistent", "The device produced an erratic rhythm.", "No steady pattern can be trusted.", "C1", "adj.", "不穩定的、難以預料的", "Latin errare (to stray, wander)"],
      ["augment", "/ɔːɡˈment/", "to make something greater by adding to it", "enhance", "A new lens augmented her vision.", "Increase or improve by adding something.", "C1", "v.", "擴增、增強", "Latin augere (to increase)"],
      ["feasible", "/ˈfiː.zə.bəl/", "possible and practical to do", "workable", "The engineer proposed a feasible solution.", "It can realistically be accomplished.", "B2", "adj.", "切實可行的", "Latin facere (to do, make)"],
      ["redundant", "/rɪˈdʌn.dənt/", "unnecessary because it is more than needed", "superfluous", "The backup made the old system redundant.", "Extra, but without a useful purpose.", "C1", "adj.", "多餘重複的", "Latin re + undare (to surge in waves)"],
      ["calibrate", "/ˈkæl.ɪ.breɪt/", "to adjust an instrument for accuracy", "tune", "You must calibrate the compass first.", "Set a measuring tool so it gives correct results.", "C1", "v.", "校準、校正", "Arabic qalib (mold) -> caliber"],
      ["mechanism", "/ˈmek.ə.nɪz.əm/", "a system of parts working together in a machine", "device", "The clock mechanism relies on weighted pendulums.", "A structured assembly of moving gears.", "B2", "n.", "機械裝置、運作機制", "Greek mekhane (machine)"],
      ["precision", "/prɪˈsɪʒ.ən/", "the quality of being exact and accurate", "exactness", "Crafting microchips requires surgical precision.", "Spot-on exactness.", "B2", "n.", "精確、精密", "Latin praecidere (to cut off in front)"],
      ["ingenious", "/ɪnˈdʒiː.ni.əs/", "clever, original, and inventive", "inventive", "The inventor devised an ingenious solar water pump.", "Showing brilliant inventive flair.", "C1", "adj.", "心靈手巧的、巧妙的", "Latin ingenium (mind, natural talent)"],
      ["cog", "/kɒɡ/", "a wheel or bar with teeth that mesh with another part", "gear", "Every small cog is essential to the great clockwork tower.", "A single tooth on a gear.", "B1", "n.", "齒輪的一齒、小角色", "Middle English cogge (cog)"],
      ["automaton", "/ɔːˈtɒm.ə.tɒn/", "a moving mechanical device made in imitation of a human", "robot", "The brass automaton served tea with uncanny grace.", "A self-operating antique robot.", "C1", "n.", "自動機器人、自動機械", "Greek automatos (acting of oneself)"],
      ["tinker", "/ˈtɪŋ.kər/", "to make small changes to something in an effort to repair it", "fiddle", "He spent Sunday afternoons tinkering with vintage watches.", "Experimenting and adjusting small parts.", "B2", "v.", "修補、擺弄擺弄", "Middle English tinker (mender of kettles)"],
      ["dynamo", "/ˈdaɪ.nə.məʊ/", "a machine that generates electricity; an energetic person", "generator", "The river current spun the powerhouse dynamo.", "A generator of raw kinetic power.", "B2", "n.", "發電機、精力充沛者", "Greek dynamis (power)"],
      ["apparatus", "/ˌæp.əˈreɪ.təs/", "the technical equipment or machinery needed for a task", "equipment", "The laboratory was equipped with complex glass apparatus.", "A specialized set of tools or instruments.", "C1", "n.", "儀器、設備器材", "Latin apparare (to make ready)"],
      ["prototype", "/ˈprəʊ.tə.taɪp/", "a first, typical, or preliminary model of something", "model", "The team tested their lightweight glider prototype.", "The very first test build before mass production.", "B2", "n.", "原型機、雛形", "Greek protos (first) + typos (model)"],
      ["systematic", "/ˌsɪs.təˈmæt.ɪk/", "done or acting according to a fixed plan or system", "methodical", "She adopted a systematic approach to debugging the code.", "Methodical and thoroughly structured.", "B2", "adj.", "有系統的、井井有條的", "Greek systema (organized whole)"],
      ["friction", "/ˈfrɪk.ʃən/", "the resistance that one surface encounters when moving over another", "resistance", "Lubricating the axles reduces friction and wear.", "Resistance when two surfaces rub.", "B2", "n.", "摩擦力、不和摩擦", "Latin fricare (to rub)"],
      ["oscillate", "/ˈɒs.ɪ.leɪt/", "to move or swing back and forth at a regular speed", "swing", "The heavy pendulum oscillated with hypnotic rhythm.", "Swinging rhythmically side to side.", "C1", "v.", "擺動、震盪搖擺", "Latin oscillum (swing)"],
      ["schematic", "/skiːˈmæt.ɪk/", "a diagram showing the main parts of an electrical circuit", "blueprint", "The technician studied the schematic before rewiring.", "A technical diagram or blueprint.", "C1", "n.", "電路圖、原理圖", "Greek schema (form, shape)"],
      ["leverage", "/ˈliː.vər.ɪdʒ/", "the power to influence a person or the mechanical advantage of a lever", "advantage", "Engineers use leverage to lift heavy iron beams.", "Using a mechanical or strategic advantage.", "B2", "n.", "槓桿作用、優勢力量", "Old French levier (to raise)"],
      ["conduit", "/ˈkɒn.djuː.ɪt/", "a channel for conveying water or other fluid, or cables", "channel", "Underground conduits carried fresh water to every house.", "A protective tube or transmission pipeline.", "C1", "n.", "管道、傳輸途徑", "Latin conducere (to bring together)"],
      ["efficient", "/ɪˈfɪʃ.ənt/", "achieving maximum productivity with minimum wasted effort", "effective", "The modernized turbine is forty percent more efficient.", "Producing great output with minimal waste.", "B1", "adj.", "高效率的", "Latin efficere (to bring about, accomplish)"],
      ["velocity", "/vəˈlɒs.ə.ti/", "the speed of something in a given direction", "speed", "The piston reached maximum velocity at mid-stroke.", "Speed with directional vector.", "B2", "n.", "速度、速率", "Latin velox (swift)"],
      ["reconfigure", "/ˌriː.kənˈfɪɡ.ər/", "to rearrange the elements or settings of a system", "reorganize", "They reconfigured the circuit board to double its processing speed.", "Rearranging components for better performance.", "C1", "v.", "重新配置、調整結構", "Latin re + configurare (to shape)"],
      ["resonate", "/ˈrez.ən.eɪt/", "to produce or be filled with a deep, full, reverberating sound", "echo", "Her heartfelt speech resonated with the entire engineering crew.", "Striking a resonant harmonic chord.", "C1", "v.", "共鳴、引起共振", "Latin re + sonare (to sound)"],
      ["equilibrium", "/ˌek.wɪˈlɪb.ri.əm/", "a state in which opposing forces or influences are balanced", "balance", "The gyroscopes kept the vessel in perfect equilibrium.", "Stable state of balanced physical forces.", "C1", "n.", "平衡狀態、均衡", "Latin aequus (equal) + libra (balance)"]
    ]
  },
  {
    name: "The Celestial Library",
    zhName: "星穹圖書館",
    tone: "#3c6570",
    words: [
      ["profound", "/prəˈfaʊnd/", "having deep meaning or great insight", "deep", "The discovery had a profound effect on her.", "Far beneath the surface in meaning or impact.", "B2", "adj.", "深奧的、深刻深遠的", "Latin pro (forward) + fundus (bottom)"],
      ["contemplate", "/ˈkɒn.təm.pleɪt/", "to think deeply for a long time", "ponder", "They contemplated the stars in silence.", "A patient, serious form of thinking.", "C1", "v.", "沉思凝視、深思", "Latin templum (place for observation)"],
      ["inevitable", "/ɪˈnev.ɪ.tə.bəl/", "certain to happen and impossible to avoid", "unavoidable", "Change was inevitable.", "Nothing can stop it from happening.", "B2", "adj.", "不可避免的、必然發生的", "Latin in (not) + evitare (to avoid)"],
      ["ambiguous", "/æmˈbɪɡ.ju.əs/", "having more than one possible meaning", "unclear", "The oracle gave an ambiguous reply.", "It can be understood in different ways.", "C1", "adj.", "含糊不清的、模稜兩可的", "Latin ambi (both ways) + agere (to drive)"],
      ["transcend", "/trænˈsend/", "to go beyond the usual limits", "surpass", "Great stories transcend their own time.", "Rise beyond an ordinary boundary.", "C1", "v.", "超越、凌駕", "Latin trans (across) + scandere (to climb)"],
      ["ephemeral", "/ɪˈfem.ər.əl/", "lasting for a very short time", "momentary", "The comet's glow was ephemeral.", "Beautiful perhaps, but quickly gone.", "C2", "adj.", "短暫易逝的、曇花一現的", "Greek epi (upon) + hemera (day)"],
      ["paradox", "/ˈpær.ə.dɒks/", "a statement that seems impossible but may be true", "contradiction", "The time loop created a paradox.", "It appears to oppose itself.", "C1", "n.", "悖論、似非而是的說法", "Greek para (beyond) + doxa (opinion)"],
      ["ubiquitous", "/juːˈbɪk.wɪ.təs/", "seeming to be present everywhere", "widespread", "Tiny screens have become ubiquitous.", "You encounter it almost everywhere you look.", "C2", "adj.", "無所不在的、普遍存在的", "Latin ubique (everywhere)"],
      ["discern", "/dɪˈsɜːn/", "to recognize something that is hard to see", "detect", "She could discern a pattern in the noise.", "Notice through careful attention.", "C1", "v.", "辨明、洞悉察覺", "Latin dis (apart) + cernere (to distinguish)"],
      ["enigma", "/ɪˈnɪɡ.mə/", "a person or thing that is mysterious", "mystery", "The silent astronomer remained an enigma.", "A puzzle that resists explanation.", "C1", "n.", "謎團、難以理解的人事物", "Greek ainigma (riddle)"],
      ["celestial", "/sɪˈles.ti.əl/", "belonging or relating to heaven or space", "heavenly", "Constellations form grand celestial maps in the night sky.", "Pertaining to stars, planets, and outer space.", "B2", "adj.", "天空的天體的、神聖的", "Latin caelum (sky, heaven)"],
      ["infinity", "/ɪnˈfɪn.ə.ti/", "the state of being endless or boundless", "eternity", "Mathematicians explore the profound nature of infinity.", "Boundless without any conceivable limit.", "B2", "n.", "無限、無窮", "Latin in (not) + finis (end)"],
      ["astral", "/ˈæs.trəl/", "relating to or resembling the stars", "stellar", "Astral projections revealed distant galaxies.", "Starlike or celestial in character.", "C1", "adj.", "星辰的、星體的", "Greek astron (star)"],
      ["illuminate", "/ɪˈluː.mɪ.neɪt/", "to enlighten spiritually or intellectually", "enlighten", "Philosophy aims to illuminate the human condition.", "Bringing profound clarity to the dark.", "B2", "v.", "啟迪、照亮心智", "Latin lumen (light)"],
      ["sanctuary", "/ˈsæŋk.tʃʊə.ri/", "a place of safety or sacred quiet", "haven", "The high library was a quiet sanctuary for thinkers.", "A protected haven for deep reflection.", "B2", "n.", "避難所、聖所", "Latin sanctus (holy)"],
      ["omnipresent", "/ˌɒm.nɪˈprez.ənt/", "widely or constantly encountered; widespread", "pervasive", "The force of gravity is omnipresent throughout the cosmos.", "Present at every single point in the universe.", "C2", "adj.", "無所不在的", "Latin omnis (all) + praesens (present)"],
      ["immutable", "/ɪˈmjuː.tə.bəl/", "unchanging over time or unable to be changed", "fixed", "The laws of mathematics remain immutable.", "Permanent and incapable of alteration.", "C2", "adj.", "永恆不變的", "Latin in (not) + mutare (to change)"],
      ["luminary", "/ˈluː.mɪ.nər.i/", "a person who inspires or influences others", "leader", "World-renowned luminaries gathered for the symposium.", "An intellectual or creative superstar.", "C1", "n.", "傑出人物、引領者", "Latin lumen (light)"],
      ["quintessence", "/kwɪnˈtes.əns/", "the most perfect or typical example of a quality", "epitome", "Her poetry was the quintessence of lyric grace.", "The purest distilled essence.", "C2", "n.", "精髓、典範精華", "Latin quinta essentia (fifth element)"],
      ["constellation", "/ˌkɒn.stəˈleɪ.ʃən/", "a group of stars forming a recognizable pattern", "pattern", "Sailors navigated by the constellation of Orion.", "A named cluster of stars in the heavens.", "B2", "n.", "星座、星群", "Latin con (together) + stella (star)"],
      ["solstice", "/ˈsɒl.stɪs/", "either of the two times in the year when the sun reaches its highest or lowest point", "turning-point", "The summer solstice marks the longest day of the year.", "Sun turning point in astronomical calendar.", "C1", "n.", "至日（夏至或冬至）", "Latin sol (sun) + stitium (stoppage)"],
      ["metaphysical", "/ˌmet.əˈfɪz.ɪ.kəl/", "relating to the branch of philosophy dealing with the nature of reality", "philosophical", "They engaged in a lively metaphysical debate on free will.", "Beyond tangible physical mechanics.", "C2", "adj.", "形而上學的、超自然的", "Greek meta (beyond) + physika (physics)"],
      ["equilibrium", "/ˌek.wɪˈlɪb.ri.əm/", "a state of emotional or cosmic balance", "harmony", "Meditation restored his inner equilibrium.", "Harmonious cosmic stability.", "C1", "n.", "身心平衡、均勢", "Latin aequus (equal) + libra (scale)"],
      ["zenith", "/ˈzen.ɪθ/", "the time at which something is most powerful or highest point in sky", "culmination", "At the zenith of its power, the civilization built grand observatories.", "The highest peak in the celestial hemisphere.", "C1", "n.", "天頂、頂點巔峰", "Arabic samt ar-ras (direction over head)"],
      ["abyss", "/əˈbɪs/", "a deep or seemingly bottomless chasm or void", "void", "He peered into the cosmic abyss of distant space.", "An immeasurably deep void.", "C1", "n.", "深淵、無底洞", "Greek abyssos (bottomless)"],
      ["serendipity", "/ˌser.ənˈdɪp.ə.ti/", "the occurrence of events by chance in a happy way", "fortune", "Finding the rare astronomy textbook was pure serendipity.", "A joyful and fortunate accidental discovery.", "C1", "n.", "意外之喜、機緣巧合", "Persian fairy tale Three Princes of Serendip"],
      ["ethereal", "/iˈθɪə.ri.əl/", "extremely delicate and light in a way that seems not of this world", "heavenly", "The aurora borealis cast an ethereal green glow.", " otherworldly and airy.", "C2", "adj.", "空靈超塵的", "Greek aither (pure upper air)"],
      ["revelation", "/ˌrev.əˈleɪ.ʃən/", "a surprising and previously unknown fact made known", "disclosure", "The astronomer made a stunning revelation about dark matter.", "A sudden unveiling of hidden truth.", "B2", "n.", "啟示、真相大白", "Latin revelare (to unveil)"],
      ["sagacious", "/səˈɡeɪ.ʃəs/", "having or showing keen mental discernment and good judgment", "wise", "The sagacious librarian guided seekers toward timeless truths.", "Having deep wisdom and razor-sharp judgment.", "C2", "adj.", "睿智精明的、有遠見的", "Latin sagax (wise, perceptive)"],
      ["cosmos", "/ˈkɒz.mɒs/", "the universe seen as a well-ordered whole", "universe", "Astronomy invites us to contemplate our humble place in the vast cosmos.", "The majestic ordered universe.", "B2", "n.", "宇宙、萬物體系", "Greek kosmos (order, world)"]
    ]
  }
].map(region => ({
  ...region,
  words: region.words.map(([word, phonetic, definition, synonym, sentence, clue, level, pos, zh, root]) => ({
    word, phonetic, definition, synonym, sentence, clue, level, pos: pos || "adj.", zh: zh || "", root: root || ""
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

const CLASSES = [
  {
    id: "scholar",
    name: "The Scholar",
    zhName: "學者 (The Scholar)",
    subtitle: "Seeker of Etymology",
    zhSubtitle: "詞源探索者",
    icon: "🎓",
    hp: 38,
    sparks: 5,
    ink: 10,
    relic: "prism",
    desc: "Starts with +2 Sparks and the Meaning Prism. Clues remove 2 wrong answers.",
    zhDesc: "初始火花 +2，自帶「詞義稜鏡」。提示功能額外排除 2 個錯誤選項。",
    quote: "Every word is an open book."
  },
  {
    id: "bard",
    name: "The Bard",
    zhName: "詩人 (The Bard)",
    subtitle: "Rhythmic Master",
    zhSubtitle: "節奏大師",
    icon: "🪕",
    hp: 42,
    sparks: 3,
    ink: 15,
    relic: "ember",
    desc: "Streaks heal resolve and deal +40% combo power. Starts with Ember Vial.",
    zhDesc: "連擊持續恢復意志生命，並獲得 +40% 連擊傷害加成。自帶「餘溫小瓶」。",
    quote: "Language is music in disguise."
  },
  {
    id: "duelist",
    name: "The Duelist",
    zhName: "決鬥者 (The Duelist)",
    subtitle: "Blade of Wit",
    zhSubtitle: "直覺之刃",
    icon: "⚔️",
    hp: 40,
    sparks: 3,
    ink: 0,
    relic: "needle",
    desc: "Longer Quick Wit window (+1.5s) and deals massive opening burst damage.",
    zhDesc: "急速直覺判定時間延長 (+1.5s)，戰鬥首回合造成額外爆擊傷害。自帶「指針」。",
    quote: "Cut through confusion with razor wit."
  },
  {
    id: "cartographer",
    name: "The Cartographer",
    zhName: "製圖師 (The Cartographer)",
    subtitle: "Uncharted Explorer",
    zhSubtitle: "荒野探索者",
    icon: "🧭",
    hp: 50,
    sparks: 3,
    ink: 30,
    relic: "bookmark",
    desc: "High starting Resolve (+10 HP), extra starting Ink (+30), and Golden Bookmark.",
    zhDesc: "初始意志提高 (+10 HP)，戰鬥額外獲得 30% 墨水。自帶「鍍金書籤」。",
    quote: "Every uncharted phrase is a new horizon."
  }
];

const ASCENSION_LEVELS = [
  { level: 0, name: "Standard Expedition", zhName: "標準遠征", desc: "Standard rules of the wordbound realms.", zhDesc: "標準遠征規則。" },
  { level: 1, name: "Fierce Elites", zhName: "強敵盤據", desc: "Elite enemies have +20% HP and yield bonus ink.", zhDesc: "精英敵人生命值 +20%，擊敗獎勵額外墨水。" },
  { level: 2, name: "Serrated Wit", zhName: "利齒詞語", desc: "Normal enemies deal +1 extra damage.", zhDesc: "一般敵人攻擊傷害 +1。" },
  { level: 3, name: "Bazaar Inflation", zhName: "黑市通膨", desc: "Merchant shop prices are increased by 20%.", zhDesc: "流浪黑市商人售價提高 20%。" },
  { level: 4, name: "Fleeting Reflex", zhName: "急迫思維", desc: "Quick Wit reflex time window reduced by 0.5s.", zhDesc: "急速直覺判斷時間縮短 0.5 秒。" },
  { level: 5, name: "Bitter Herbs", zhName: "微苦花茶", desc: "Rest sites restore 25% Resolve (down from 35%).", zhDesc: "營火休息花茶恢復量降為 25%。" },
  { level: 6, name: "Guardian's Aegis", zhName: "領主堅盾", desc: "Boss Guardians spawn with +30% HP and unique Boss Blinds.", zhDesc: "區域領主生命提高 30% 且具備專屬詞彙限制。" },
  { level: 7, name: "Diminished Sparks", zhName: "微弱火星", desc: "Start the expedition with 1 fewer Spark.", zhDesc: "出發時初始專注火花減少 1 點。" },
  { level: 8, name: "Voracious Siphon", zhName: "貪婪汲取", desc: "Siphon enemies steal 2 Sparks instead of 1.", zhDesc: "具有汲取意圖的敵人奪取 2 點火花。" },
  { level: 9, name: "Treacherous Map", zhName: "險惡路徑", desc: "More Elite encounters appear on the journey map.", zhDesc: "地圖上出現更多精英挑戰節點。" },
  { level: 10, name: "Curse of Babel", zhName: "巴別詛咒", desc: "Start with -6 Maximum Resolve; score multiplier +100%.", zhDesc: "初始最大意志生命 -6；通關評分與榮譽倍率 +100%。" },
  { level: 11, name: "Relentless Clamor", zhName: "狂暴喧囂", desc: "All enemy attack damage scales faster per floor.", zhDesc: "所有敵人的基礎攻擊力隨層數提升。" },
  { level: 12, name: "Fading Ink", zhName: "乾涸墨水", desc: "Gain 20% less Ink from regular encounters.", zhDesc: "一般戰鬥獲得的墨水獎勵減少 20%。" },
  { level: 13, name: "Strict Grasp", zhName: "嚴苛審核", desc: "Losing a streak inflicts 2 direct damage to Resolve.", zhDesc: "連擊中斷時將反噬遭受 2 點意志傷害。" },
  { level: 14, name: "Heavy Tomes", zhName: "沉重典籍", desc: "Maximum Sparks cap reduced to 7.", zhDesc: "火花攜帶上限降低為 7 點。" },
  { level: 15, name: "Ancient Colossus", zhName: "遠古巨像", desc: "Boss Guardians have +50% HP and extra intents.", zhDesc: "區域守護領主生命增加 50% 且行動意圖更強。" },
  { level: 16, name: "Price Gouging", zhName: "黑市暴利", desc: "Merchant shop prices increased by 35%.", zhDesc: "流浪黑市商品售價提高 35%。" },
  { level: 17, name: "Razor Instinct", zhName: "電光火石", desc: "Quick Wit window cut by 1.0s total.", zhDesc: "急速直覺時間判定縮短 1.0 秒。" },
  { level: 18, name: "Dark Mire", zhName: "幽暗沼澤", desc: "Mystery events have a 60% chance of peril.", zhDesc: "未知事件觸發負面後果機率提高為 60%。" },
  { level: 19, name: "Babel Ascendant", zhName: "巴別之巔", desc: "All enemies have +20% HP and shields.", zhDesc: "所有敵人生命值 +20% 且自帶護盾。" },
  { level: 20, name: "Heart of the Word", zhName: "至高詞境", desc: "Ultimate roguelike trial. Score multiplier +300%.", zhDesc: "終極 Roguelike 考驗。所有詞彙領域極限強化，榮譽評分 +300%。" }
];

const POTIONS = [
  { id: "elixir_reveal", name: "Elixir of Revelation", zhName: "顯影靈藥", icon: "🧪", desc: "Instantly eliminates 2 wrong answers in combat.", zhDesc: "立即排除當前題目的 2 個錯誤選項。" },
  { id: "potion_freeze", name: "Chrono Draught", zhName: "靜時秘劑", icon: "⏳", desc: "Pauses timer & guarantees +100% Quick Wit crit on next hit.", zhDesc: "暫停計時並保證下一次答對觸發 +100% 急速爆擊。" },
  { id: "draught_vitality", name: "Vital Tonic", zhName: "活力神泉", icon: "💖", desc: "Restores 18 Resolve immediately.", zhDesc: "立即恢復 18 點意志生命。" },
  { id: "scroll_reroll", name: "Transmute Scroll", zhName: "換詞卷軸", icon: "📜", desc: "Rerolls current question into an easier word without spending Sparks.", zhDesc: "立即重抽當前題目，不消耗專注火花。" },
  { id: "potion_midas", name: "Midas Phial", zhName: "邁達斯墨水", icon: "◈", desc: "Gain +32 Ink immediately.", zhDesc: "立即獲得 32 點墨水。" },
  { id: "rune_shield", name: "Rune of Aegis", zhName: "護盾符文", icon: "🛡️", desc: "Grants 14 temporary Shield to absorb incoming hits.", zhDesc: "獲得 14 點護盾，優先吸收後續遭受的傷害。" }
];

const BOSS_BLINDS = [
  { id: "blindfold", name: "The Blindfold", zhName: "致盲之霧", desc: "Answer choices are veiled for the first 1.2s.", zhDesc: "題目選項在前 1.2 秒內被迷霧遮蔽。" },
  { id: "mute", name: "The Silence", zhName: "沉寂之境", desc: "Audio pronunciation and sound cues are silenced.", zhDesc: "發音與音訊線索被完全靜音。" },
  { id: "haste", name: "Frenzied Pulse", zhName: "狂亂脈動", desc: "Enemy attacks faster; wrong answers deal +3 damage.", zhDesc: "敵人攻擊更加狂暴，答錯額外承受 +3 傷害。" },
  { id: "armored", name: "Iron Bastion", zhName: "鐵壁防禦", desc: "Guardian starts with 25 heavy Shield.", zhDesc: "領主開場自帶 25 點堅固護盾。" },
  { id: "cloze_only", name: "Syntax Crucible", zhName: "句法熔爐", desc: "All questions in this encounter are Cloze contextual tests.", zhDesc: "本場對決所有考題均為語境克漏字測試。" }
];

const RELICS = [
  // 1. Core & Offensive
  { id: "echo", icon: "❞", name: "Echo Quill", zhName: "餘音羽毛筆", text: "+3 damage for every correct answer.", zhText: "每次答對額外造成 +3 點傷害。" },
  { id: "needle", icon: "↟", name: "Compass Needle", zhName: "羅盤指針", text: "Deal +6 damage on your first answer in each battle.", zhText: "戰鬥首回合答對造成 +6 點爆發傷害。" },
  { id: "horn", icon: "📯", name: "Resonance Horn", zhName: "共鳴號角", text: "Deal +35% bonus damage to Elite and Boss guardians.", zhText: "對精英怪與區域守護者領主造成 +35% 額外傷害。" },
  { id: "lightning_quill", icon: "⚡", name: "Lightning Quill", zhName: "閃電羽筆", text: "Quick Wit reflex deals +100% critical damage.", zhText: "急速直覺答對時造成 +100% 爆擊傷害。" },
  { id: "rhythm_baton", icon: "🪄", name: "Conductor's Baton", zhName: "指揮魔棒", text: "Deal +2 additional damage for every active streak stack.", zhText: "每累積 1 層連擊，答題傷害額外 +2。" },
  
  // 2. Speed & Quick Wit
  { id: "hourglass", icon: "⌛", name: "Chronos Hourglass", zhName: "時光沙漏", text: "Quick Wit reflex deals +6 extra damage and timer is 1.5s longer.", zhText: "急速直覺判定時間延長 1.5 秒，並額外造成 +6 傷害。" },
  { id: "sonic_bell", icon: "🔔", name: "Sonic Resonator", zhName: "超音共鳴鈴", text: "Answers submitted in under 2.0s deal +8 AoE shockwave damage.", zhText: "在 2 秒內極速答對時釋放衝擊波額外造成 8 點傷害。" },
  { id: "mercury_sandals", icon: "👡", name: "Sandals of Hermes", zhName: "赫密斯之靴", text: "Extends all question timer countdowns by +1.5 seconds.", zhText: "所有考題倒數計時延長 1.5 秒。" },
  
  // 3. Streak & Rhythm
  { id: "ember", icon: "♨", name: "Ember Vial", zhName: "餘溫小瓶", text: "Heal 2 resolve every third answer in a streak.", zhText: "連擊中每答對 3 題恢復 2 點生命。" },
  { id: "ring", icon: "💍", name: "Ring of Fluency", zhName: "流利之戒", text: "Streaks of 4+ restore 1 spark immediately.", zhText: "達成 4 連擊時立即恢復 1 點火花。" },
  { id: "metronome", icon: "🎼", name: "Precision Metronome", zhName: "精準節拍器", text: "Every 5th streak triggers +15 burst damage and heals 3 HP.", zhText: "每累積 5 連擊觸發 +15 點爆發傷害並恢復 3 點生命。" },
  { id: "unbroken_cord", icon: "🎗️", name: "Cord of Continuity", zhName: "不絕之索", text: "Prevents your streak from breaking on your first mistake per run.", zhText: "每場遠征第一次答錯時不會中斷連擊計數。" },
  
  // 4. Economy & Ink
  { id: "bookmark", icon: "▰", name: "Golden Bookmark", zhName: "鍍金書籤", text: "Gain 35% more ink after all encounters.", zhText: "所有戰鬥結算獲得的墨水提高 35%。" },
  { id: "alembic", icon: "⚗️", name: "Alchemist's Crucible", zhName: "煉金坩堝", text: "Gain +1 Ink for every letter in correct answers.", zhText: "答對時，單字的每個英文字母都轉化為 1 點墨水。" },
  { id: "midas_well", icon: "🏺", name: "Midas Inkwell", zhName: "邁達斯墨水池", text: "+50% ink found; every 20 ink held adds +1 combat damage.", zhText: "墨水獲取 +50%；每持有 20 點墨水增加 +1 點戰鬥傷害。" },
  { id: "merchant_contract", icon: "📜", name: "Merchant Guild Seal", zhName: "商會印戒", text: "25% discount in shops + merchants offer 1 extra relic.", zhText: "流浪黑市商品享 75 折且額外上架 1 件珍稀遺物。" },
  { id: "gilded_abacus", icon: "🧮", name: "Gilded Abacus", zhName: "鍍金算盤", text: "Receive +12 ink whenever entering any Rest or Shrine node.", zhText: "抵達營火或祭壇節點時自動獲得 12 點墨水。" },
  
  // 5. Etymology & Roots
  { id: "prism", icon: "◇", name: "Meaning Prism", zhName: "詞義稜鏡", text: "Clues remove two wrong answers.", zhText: "使用提示功能時額外排除 2 個錯誤選項。" },
  { id: "magnifier", icon: "🔍", name: "Etymology Glass", zhName: "語源放大鏡", text: "Always shows root/origin hint during battles.", zhText: "戰鬥中永遠顯示該單字的語源與字根線索。" },
  { id: "tree_babel", icon: "🌳", name: "Tree of Babel", zhName: "巴別神木", text: "Words with Greek or Latin roots deal +9 bonus damage and grant +1 insight.", zhText: "解答帶有拉丁或希臘字根的單字造成 +9 額外傷害並獲 1 點經驗。" },
  { id: "ancient_glyph", icon: "🔮", name: "Primordial Glyph", zhName: "原初符文", text: "Alchemy Shrines appear twice as often & offer dual blessings.", zhText: "字根煉金祭壇出現機率翻倍，且可同時獲得雙重祝福。" },
  { id: "codex_roots", icon: "📖", name: "Lexical Codex", zhName: "詞彙法典", text: "Expedition victory yields +2 bonus mastery points per word.", zhText: "戰鬥勝利後所有單字獲得雙倍精通熟練度。" },
  
  // 6. Shield, Defense & Sustain
  { id: "shield", icon: "◉", name: "Patient Stone", zhName: "耐心之石", text: "Ignore the first wrong answer in each battle.", zhText: "每場戰鬥免疫第一次答錯的傷害。" },
  { id: "boots", icon: "⌁", name: "Wayfarer Boots", zhName: "旅者之靴", text: "+10 maximum resolve immediately and heal 10 HP.", zhText: "立即提升 10 點最大生命值並恢復 10 點生命。" },
  { id: "crown", icon: "♛", name: "Scholar's Crown", zhName: "學者之冠", text: "Start each battle with +1 spark.", zhText: "每場戰鬥開始時額外獲得 1 點火花。" },
  { id: "mirror", icon: "🪞", name: "Oracle's Mirror", zhName: "神諭之鏡", text: "Gain +1 Insight whenever you take damage.", zhText: "受到傷害時獲得 +1 點頓悟經驗。" },
  { id: "feather", icon: "🪶", name: "Phoenix Feather", zhName: "鳳凰之羽", text: "Revive with 25 Resolve once upon fatal damage.", zhText: "遭受致命傷害時免死並恢復 25 點生命（限一次）。" },
  { id: "candle", icon: "🕯️", name: "Scholar's Candle", zhName: "學者之燭", text: "Rest sites restore an extra 20% Resolve.", zhText: "在營火休息處恢復生命效果提升 20%。" },
  { id: "aegis_tome", icon: "🛡️", name: "Aegis Tome", zhName: "守護法典", text: "Gain +6 temporary Shield at the start of every battle.", zhText: "每場戰鬥開始時自動獲得 6 點護盾。" },
  { id: "iron_will", icon: "📿", name: "Iron Will Locket", zhName: "鋼鐵意志吊墜", text: "Elite and Boss attacks deal 35% less damage.", zhText: "菁英怪與區域領主的攻擊傷害降低 35%。" },
  { id: "vital_spring", icon: "⛲", name: "Fountain of Words", zhName: "字泉甘霖", text: "Heal 3 Resolve upon entering any map node.", zhText: "每次跨入新的地圖節點時自動恢復 3 點意志生命。" },
  { id: "potion_satchel", icon: "🧳", name: "Potion Satchel", zhName: "魔藥腰帶", text: "Start run with 2 random potions and potion effects are +30% stronger.", zhText: "遠征開始時自帶 2 瓶隨機藥水，且藥水效果提升 30%。" }
];

const EXAM_DECKS = {
  "intermediate": {
    "name": "Intermediate Core (GEPT 中級/中高級 · 實用必備)",
    "icon": "📘",
    "desc": "High-yield B1~B2 practical vocabulary for everyday fluency, exam mastery, and conversation.",
    "words": [
      {
        "word": "accomplish",
        "phonetic": "/əˈkɑːm.plɪʃ/",
        "pos": "v.",
        "level": "B1",
        "zh": "完成，實現",
        "root": "Latin ad- + complere (to fill up)",
        "definition": "to succeed in doing or completing something",
        "synonym": "achieve",
        "sentence": "If we work together, we can accomplish our goal ahead of time.",
        "clue": "To successfully finish a difficult task."
      },
      {
        "word": "adequate",
        "phonetic": "/ˈæd.ə.kwət/",
        "pos": "adj.",
        "level": "B2",
        "zh": "足夠的，適當的",
        "root": "Latin adaequare (make equal)",
        "definition": "enough or satisfactory for a particular purpose",
        "synonym": "sufficient",
        "sentence": "The hotel room was small but adequate for a one-night stay.",
        "clue": "Good enough to meet the need."
      },
      {
        "word": "anticipate",
        "phonetic": "/ænˈtɪs.ə.peɪt/",
        "pos": "v.",
        "level": "B2",
        "zh": "預期，預料",
        "root": "Latin ante- (before) + capere (take)",
        "definition": "to expect or foresee that something will happen",
        "synonym": "expect",
        "sentence": "We anticipate a large crowd at the product launch tomorrow.",
        "clue": "To look forward to or prepare for the future."
      },
      {
        "word": "apparent",
        "phonetic": "/əˈpær.ənt/",
        "pos": "adj.",
        "level": "B2",
        "zh": "顯而易見的",
        "root": "Latin apparere (appear)",
        "definition": "clearly visible or easily understood",
        "synonym": "obvious",
        "sentence": "It became apparent that the project needed more funding.",
        "clue": "Plain to see and recognize."
      },
      {
        "word": "clarify",
        "phonetic": "/ˈklær.ə.faɪ/",
        "pos": "v.",
        "level": "B1",
        "zh": "澄清，闡明",
        "root": "Latin clarus (clear) + facere (make)",
        "definition": "to make something clear or easier to understand",
        "synonym": "explain",
        "sentence": "Could you clarify what you meant by the second paragraph?",
        "clue": "Making a confusing point clear."
      },
      {
        "word": "collaborate",
        "phonetic": "/kəˈlæb.ə.reɪt/",
        "pos": "v.",
        "level": "B2",
        "zh": "合作，協同工作",
        "root": "Latin com- (with) + laborare (to work)",
        "definition": "to work jointly on an activity or project",
        "synonym": "cooperate",
        "sentence": "Designers and engineers collaborate closely to build the app.",
        "clue": "Working as a united team."
      },
      {
        "word": "consequence",
        "phonetic": "/ˈkɑːn.sə.kwəns/",
        "pos": "n.",
        "level": "B1",
        "zh": "後果，結果",
        "root": "Latin com- + sequi (to follow)",
        "definition": "a result or effect of an action or condition",
        "synonym": "outcome",
        "sentence": "Every choice comes with a natural consequence.",
        "clue": "What happens because of a decision."
      },
      {
        "word": "consistent",
        "phonetic": "/kənˈsɪs.tənt/",
        "pos": "adj.",
        "level": "B2",
        "zh": "始終如一的，一致的",
        "root": "Latin consistere (stand firm)",
        "definition": "acting or done in the same way over time",
        "synonym": "steady",
        "sentence": "Consistent daily practice is the key to mastering vocabulary.",
        "clue": "Reliable and unchanging quality."
      },
      {
        "word": "distinguish",
        "phonetic": "/dɪˈstɪŋ.ɡwɪʃ/",
        "pos": "v.",
        "level": "B2",
        "zh": "區分，辨別",
        "root": "Latin dis- (apart) + stinguere (quench, prick)",
        "definition": "to recognize or point out a difference",
        "synonym": "differentiate",
        "sentence": "Can you distinguish between real silk and synthetic fabric?",
        "clue": "Telling two things apart."
      },
      {
        "word": "efficient",
        "phonetic": "/ɪˈfɪʃ.ənt/",
        "pos": "adj.",
        "level": "B1",
        "zh": "高效率的",
        "root": "Latin efficere (accomplish)",
        "definition": "achieving maximum productivity with minimum wasted effort",
        "synonym": "effective",
        "sentence": "The new transit system provides fast and efficient travel.",
        "clue": "Doing things quickly without waste."
      },
      {
        "word": "elaborate",
        "phonetic": "/iˈlæb.ɚ.ət/",
        "pos": "adj.",
        "level": "B2",
        "zh": "精細詳盡的，精心製作的",
        "root": "Latin e- + labor (work)",
        "definition": "involving many carefully arranged parts or details",
        "synonym": "detailed",
        "sentence": "The wedding stage had an elaborate floral arrangement.",
        "clue": "Complicated and richly detailed."
      },
      {
        "word": "emphasize",
        "phonetic": "/ˈem.fə.saɪz/",
        "pos": "v.",
        "level": "B2",
        "zh": "強調，重視",
        "root": "Greek emphasis (significance)",
        "definition": "to give special importance or prominence to something",
        "synonym": "stress",
        "sentence": "The teacher emphasized the importance of regular review.",
        "clue": "Putting strong focus on something."
      },
      {
        "word": "evaluate",
        "phonetic": "/ɪˈvæl.ju.eɪt/",
        "pos": "v.",
        "level": "B2",
        "zh": "評估，評價",
        "root": "Latin ex- + valere (be of value)",
        "definition": "to judge or calculate the quality or importance of",
        "synonym": "assess",
        "sentence": "We must evaluate all candidate solutions before deciding.",
        "clue": "Measuring value or performance."
      },
      {
        "word": "fundamental",
        "phonetic": "/ˌfʌn.dəˈmen.t̬əl/",
        "pos": "adj.",
        "level": "B2",
        "zh": "基礎的，根本的",
        "root": "Latin fundamentum (foundation)",
        "definition": "forming a necessary base or core; central",
        "synonym": "essential",
        "sentence": "Good communication is a fundamental skill in teamwork.",
        "clue": "At the very root and core."
      },
      {
        "word": "generate",
        "phonetic": "/ˈdʒen.ə.reɪt/",
        "pos": "v.",
        "level": "B1",
        "zh": "產生，引起",
        "root": "Latin generare (beget)",
        "definition": "to cause something to exist or produce energy",
        "synonym": "produce",
        "sentence": "Wind turbines generate clean electricity for the valley.",
        "clue": "Creating or bringing into existence."
      },
      {
        "word": "illustrate",
        "phonetic": "/ˈɪl.ə.streɪt/",
        "pos": "v.",
        "level": "B2",
        "zh": "插圖說明，以例闡述",
        "root": "Latin in- + lustrare (illuminate)",
        "definition": "to explain or clarify by using examples or pictures",
        "synonym": "demonstrate",
        "sentence": "The speaker used real cases to illustrate his points.",
        "clue": "Making an idea visual or obvious."
      },
      {
        "word": "indicate",
        "phonetic": "/ˈɪn.də.keɪt/",
        "pos": "v.",
        "level": "B1",
        "zh": "指出，顯示",
        "root": "Latin in- + dicare (make known)",
        "definition": "to point out or show as a sign",
        "synonym": "show",
        "sentence": "Dark clouds indicate that rain is on the way.",
        "clue": "Signaling something to come."
      },
      {
        "word": "maintain",
        "phonetic": "/meɪnˈteɪn/",
        "pos": "v.",
        "level": "B1",
        "zh": "維持，保養",
        "root": "Latin manus (hand) + tenere (hold)",
        "definition": "to keep in existence or continue in the same state",
        "synonym": "preserve",
        "sentence": "It is important to maintain a healthy sleep schedule.",
        "clue": "Keeping something running smoothly."
      },
      {
        "word": "motivate",
        "phonetic": "/ˈmoʊ.t̬ə.veɪt/",
        "pos": "v.",
        "level": "B1",
        "zh": "激勵，使產生動機",
        "root": "Latin movere (to move)",
        "definition": "to provide someone with a reason for doing something",
        "synonym": "inspire",
        "sentence": "Praise from teachers can motivate students to study harder.",
        "clue": "Giving inner drive and desire to act."
      },
      {
        "word": "participate",
        "phonetic": "/pɑːrˈtɪs.ə.peɪt/",
        "pos": "v.",
        "level": "B1",
        "zh": "參與，參加",
        "root": "Latin pars (part) + capere (take)",
        "definition": "to take part in an action or event",
        "synonym": "engage",
        "sentence": "All club members are encouraged to participate in discussions.",
        "clue": "Joining in with others."
      },
      {
        "word": "potential",
        "phonetic": "/poʊˈten.ʃəl/",
        "pos": "adj.",
        "level": "B1",
        "zh": "潛在的，有潛力的",
        "root": "Latin potentia (power)",
        "definition": "having or showing the capacity to develop into something in the future",
        "synonym": "possible",
        "sentence": "The young violinist has immense musical potential.",
        "clue": "Hidden ability waiting to blossom."
      },
      {
        "word": "relevant",
        "phonetic": "/ˈrel.ə.vənt/",
        "pos": "adj.",
        "level": "B2",
        "zh": "相關的，切題的",
        "root": "Latin relevare (raise up)",
        "definition": "closely connected or appropriate to what is being discussed",
        "synonym": "applicable",
        "sentence": "Please include only relevant details in your resume.",
        "clue": "Belonging directly to the topic."
      },
      {
        "word": "reliable",
        "phonetic": "/rɪˈlaɪ.ə.bəl/",
        "pos": "adj.",
        "level": "B1",
        "zh": "可靠的，值得信賴的",
        "root": "English rely + -able",
        "definition": "consistently good in quality or performance; trustworthy",
        "synonym": "dependable",
        "sentence": "He is a reliable friend who always keeps his promises.",
        "clue": "Someone you can always trust."
      },
      {
        "word": "resolve",
        "phonetic": "/rɪˈzɑːlv/",
        "pos": "v.",
        "level": "B2",
        "zh": "解決，下定決心",
        "root": "Latin re- + solvere (loosen)",
        "definition": "to settle or find a solution to a problem",
        "synonym": "solve",
        "sentence": "The team worked together to resolve the software bug.",
        "clue": "Finding a lasting answer to an issue."
      },
      {
        "word": "significant",
        "phonetic": "/sɪɡˈnɪf.ə.kənt/",
        "pos": "adj.",
        "level": "B2",
        "zh": "顯著的，重大的",
        "root": "Latin significare (indicate)",
        "definition": "sufficiently great or important to be worthy of attention",
        "synonym": "important",
        "sentence": "There was a significant improvement in test scores.",
        "clue": "Making a notable difference."
      },
      {
        "word": "subsequent",
        "phonetic": "/ˈsʌb.sɪ.kwənt/",
        "pos": "adj.",
        "level": "B2",
        "zh": "隨後的，接著的",
        "root": "Latin sub- + sequi (follow)",
        "definition": "coming after something in time; following",
        "synonym": "following",
        "sentence": "Subsequent studies confirmed the scientist's discovery.",
        "clue": "Happening right after."
      },
      {
        "word": "sufficient",
        "phonetic": "/səˈfɪʃ.ənt/",
        "pos": "adj.",
        "level": "B2",
        "zh": "足夠的，充足的",
        "root": "Latin sufficere (suffice)",
        "definition": "enough to meet the needs of a situation",
        "synonym": "enough",
        "sentence": "Make sure you drink sufficient water during outdoor exercise.",
        "clue": "As much as is needed."
      },
      {
        "word": "transform",
        "phonetic": "/trænˈsfɔːrm/",
        "pos": "v.",
        "level": "B2",
        "zh": "改變，徹底轉變",
        "root": "Latin trans- (across) + formare (to shape)",
        "definition": "to make a marked change in form, nature, or appearance",
        "synonym": "convert",
        "sentence": "New paint and lighting transformed the old reading room.",
        "clue": "Completely changing shape or state."
      },
      {
        "word": "ultimate",
        "phonetic": "/ˈʌl.tə.mət/",
        "pos": "adj.",
        "level": "B2",
        "zh": "最終的，終極的",
        "root": "Latin ultimus (last)",
        "definition": "being or happening at the end of a process; final",
        "synonym": "final",
        "sentence": "Our ultimate aim is to make learning fun and rewarding.",
        "clue": "The final outcome at the very end."
      },
      {
        "word": "undertake",
        "phonetic": "/ˌʌn.dɚˈteɪk/",
        "pos": "v.",
        "level": "B2",
        "zh": "承擔，著手進行",
        "root": "English under + take",
        "definition": "to commit oneself to and begin an enterprise or responsibility",
        "synonym": "embark-on",
        "sentence": "The university will undertake a large research initiative.",
        "clue": "Taking on a major task."
      }
    ]
  },
  "toeic": {
    "name": "TOEIC 750~990 Master",
    "icon": "💼",
    "desc": "Essential high-frequency commercial negotiation, finance, procurement, and enterprise management vocabulary.",
    "words": [
      {
        "word": "negotiate",
        "phonetic": "/nəˈɡoʊ.ʃi.eɪt/",
        "pos": "v.",
        "level": "B2",
        "zh": "談判，協商",
        "root": "Latin negotium (business)",
        "definition": "to obtain or bring about by discussion",
        "synonym": "bargain",
        "sentence": "They met to negotiate a new multi-year supplier contract.",
        "clue": "Finding mutual agreement through discussion."
      },
      {
        "word": "procure",
        "phonetic": "/prəˈkjʊr/",
        "pos": "v.",
        "level": "C1",
        "zh": "採購，獲得",
        "root": "Latin procurare (take care of)",
        "definition": "to obtain something, especially with care or effort",
        "synonym": "acquire",
        "sentence": "The department must procure raw materials on schedule.",
        "clue": "Obtaining supplies for an organization."
      },
      {
        "word": "expedite",
        "phonetic": "/ˈek.spə.daɪt/",
        "pos": "v.",
        "level": "C1",
        "zh": "加快，加速",
        "root": "Latin expedire (extricate)",
        "definition": "to make an action or process happen sooner",
        "synonym": "accelerate",
        "sentence": "Please pay an extra fee to expedite the shipping.",
        "clue": "Speeding up a process."
      },
      {
        "word": "compliance",
        "phonetic": "/kəmˈplaɪ.əns/",
        "pos": "n.",
        "level": "B2",
        "zh": "順從，合規",
        "root": "Latin complere (fulfill)",
        "definition": "the state of according with rules or laws",
        "synonym": "conformity",
        "sentence": "Safety compliance is mandatory in every workshop.",
        "clue": "Following laws and regulations."
      },
      {
        "word": "feasibility",
        "phonetic": "/ˌfiː.zəˈbɪl.ə.t̬i/",
        "pos": "n.",
        "level": "B2",
        "zh": "可行性",
        "root": "French faisable (doable)",
        "definition": "the state or degree of being easily done",
        "synonym": "viability",
        "sentence": "We conducted a feasibility study before investing.",
        "clue": "Whether an idea can practically work."
      },
      {
        "word": "remuneration",
        "phonetic": "/rɪˌmjuː.nəˈreɪ.ʃən/",
        "pos": "n.",
        "level": "C1",
        "zh": "報酬，薪資",
        "root": "Latin remunerari (reward)",
        "definition": "money paid for work or a service",
        "synonym": "compensation",
        "sentence": "The executive compensation package includes generous remuneration.",
        "clue": "Payment received for professional work."
      },
      {
        "word": "discrepancy",
        "phonetic": "/dɪˈskrep.ən.si/",
        "pos": "n.",
        "level": "C1",
        "zh": "差異，不一致",
        "root": "Latin discrepare (sound different)",
        "definition": "a lack of compatibility or similarity between facts",
        "synonym": "inconsistency",
        "sentence": "Auditors found a major discrepancy in the quarterly accounts.",
        "clue": "Mismatch between two financial numbers."
      },
      {
        "word": "streamline",
        "phonetic": "/ˈstriːm.laɪn/",
        "pos": "v.",
        "level": "B2",
        "zh": "精簡，簡化",
        "root": "English stream + line",
        "definition": "to make an organization or system more efficient",
        "synonym": "simplify",
        "sentence": "Management introduced automation to streamline the fulfillment process.",
        "clue": "Making operations faster and simpler."
      },
      {
        "word": "contingency",
        "phonetic": "/kənˈtɪn.dʒən.si/",
        "pos": "n.",
        "level": "C1",
        "zh": "應變計畫，突發狀況",
        "root": "Latin contingere (happen)",
        "definition": "a future event or circumstance which is possible but cannot be predicted with certainty",
        "synonym": "backup-plan",
        "sentence": "The supply chain team drafted a robust contingency plan.",
        "clue": "Backup plan for unexpected emergencies."
      },
      {
        "word": "lucrative",
        "phonetic": "/ˈluː.krə.tɪv/",
        "pos": "adj.",
        "level": "C1",
        "zh": "獲利豐厚的",
        "root": "Latin lucrum (profit)",
        "definition": "producing a great deal of profit",
        "synonym": "profitable",
        "sentence": "The merger opened up a highly lucrative overseas market.",
        "clue": "Generating substantial profit."
      },
      {
        "word": "delegation",
        "phonetic": "/ˌdel.əˈɡeɪ.ʃən/",
        "pos": "n.",
        "level": "B2",
        "zh": "授權，代表團",
        "root": "Latin delegare (send)",
        "definition": "the assignment of responsibility or authority to another person",
        "synonym": "deputation",
        "sentence": "Effective leaders master the art of delegation.",
        "clue": "Assigning tasks to team members."
      },
      {
        "word": "indemnity",
        "phonetic": "/ɪnˈdem.nə.t̬i/",
        "pos": "n.",
        "level": "C2",
        "zh": "賠償，補償金",
        "root": "Latin indemnis (unhurt)",
        "definition": "security or protection against a loss or financial burden",
        "synonym": "insurance",
        "sentence": "The contract includes a comprehensive indemnity clause.",
        "clue": "Legal guarantee against financial loss."
      },
      {
        "word": "turnover",
        "phonetic": "/ˈtɜːnˌəʊ.vər/",
        "pos": "n.",
        "level": "B2",
        "zh": "營業額，員工流動率",
        "root": "English turn + over",
        "definition": "the amount of money taken in by a business, or rate of employee replacement",
        "synonym": "revenue",
        "sentence": "The retailer reported a record annual turnover of fifty million.",
        "clue": "Total sales volume or staff change rate."
      },
      {
        "word": "fiduciary",
        "phonetic": "/fɪˈdjuː.ʃi.ər.i/",
        "pos": "adj.",
        "level": "C2",
        "zh": "信託的，受信託責任的",
        "root": "Latin fiducia (trust)",
        "definition": "involving trust, especially regarding the relationship between a trustee and beneficiary",
        "synonym": "trustee",
        "sentence": "Board members have a fiduciary duty to act in shareholders' best interests.",
        "clue": "Legal obligation of financial trust."
      },
      {
        "word": "moratorium",
        "phonetic": "/ˌmɒr.əˈtɔː.ri.əm/",
        "pos": "n.",
        "level": "C2",
        "zh": "暫停，延期償付",
        "root": "Latin morari (to delay)",
        "definition": "a temporary prohibition or postponement of an activity",
        "synonym": "freeze",
        "sentence": "The central bank declared a three-month debt moratorium.",
        "clue": "Official temporary suspension."
      },
      {
        "word": "requisition",
        "phonetic": "/ˌrek.wɪˈzɪʃ.ən/",
        "pos": "n.",
        "level": "C1",
        "zh": "正式申請，徵用",
        "root": "Latin requirere (seek)",
        "definition": "an official order laying claim to the use of property or materials",
        "synonym": "order",
        "sentence": "Submit a formal purchase requisition to the finance department.",
        "clue": "Official request form for equipment."
      },
      {
        "word": "tentative",
        "phonetic": "/ˈten.tə.tɪv/",
        "pos": "adj.",
        "level": "B2",
        "zh": "暫定的，試驗性的",
        "root": "Latin tentare (to try)",
        "definition": "not certain or fixed; provisional",
        "synonym": "provisional",
        "sentence": "We scheduled a tentative launch date for late October.",
        "clue": "Subject to future confirmation."
      },
      {
        "word": "appraisal",
        "phonetic": "/əˈpreɪ.zəl/",
        "pos": "n.",
        "level": "B2",
        "zh": "績效評估，估價",
        "root": "Latin appretiare (value)",
        "definition": "an act of assessing something or someone",
        "synonym": "evaluation",
        "sentence": "Annual employee performance appraisals take place next week.",
        "clue": "Reviewing job performance or asset value."
      },
      {
        "word": "consensus",
        "phonetic": "/kənˈsen.səs/",
        "pos": "n.",
        "level": "C1",
        "zh": "共識，意見一致",
        "root": "Latin consentire (agree)",
        "definition": "a general agreement among a group of people",
        "synonym": "agreement",
        "sentence": "The committee reached a consensus on budget allocations.",
        "clue": "Unanimous group agreement."
      },
      {
        "word": "solvent",
        "phonetic": "/ˈsɒl.vənt/",
        "pos": "adj.",
        "level": "C1",
        "zh": "有償債能力的",
        "root": "Latin solvere (loosen, pay)",
        "definition": "having assets in excess of liabilities; able to pay debts",
        "synonym": "financially-sound",
        "sentence": "The startup remained solvent through careful cash flow management.",
        "clue": "Able to pay off all debts."
      },
      {
        "word": "collateral",
        "phonetic": "/kəˈlæt.ər.əl/",
        "pos": "n.",
        "level": "C1",
        "zh": "抵押品，擔保物",
        "root": "Latin com (together) + lateralis",
        "definition": "something pledged as security for repayment of a loan",
        "synonym": "security",
        "sentence": "The bank required property deeds as loan collateral.",
        "clue": "Asset promised in case of loan default."
      },
      {
        "word": "severance",
        "phonetic": "/ˈsev.ər.əns/",
        "pos": "n.",
        "level": "C1",
        "zh": "資遣費，斷絕",
        "root": "Latin separare (separate)",
        "definition": "the action of ending a connection, or pay given on termination",
        "synonym": "redundancy-pay",
        "sentence": "Laid-off workers received six months of severance pay.",
        "clue": "Financial compensation upon dismissal."
      },
      {
        "word": "audit",
        "phonetic": "/ˈɔː.dɪt/",
        "pos": "n.",
        "level": "B2",
        "zh": "審計，查帳",
        "root": "Latin audire (to hear)",
        "definition": "an official inspection of an organization's accounts",
        "synonym": "inspection",
        "sentence": "External auditors conducted a surprise financial audit.",
        "clue": "Official examination of accounting records."
      },
      {
        "word": "conglomerate",
        "phonetic": "/kənˈɡlɒm.ər.ət/",
        "pos": "n.",
        "level": "C1",
        "zh": "跨國企業集團",
        "root": "Latin conglomerare (roll together)",
        "definition": "a number of different things or parts that are grouped together; multi-industry corporation",
        "synonym": "multinational",
        "sentence": "The media conglomerate owns television networks and film studios.",
        "clue": "Large diversified corporate group."
      },
      {
        "word": "merger",
        "phonetic": "/ˈmɜː.dʒər/",
        "pos": "n.",
        "level": "B2",
        "zh": "企業合併",
        "root": "Latin mergere (plunge)",
        "definition": "a combination of two things, especially commercial companies, into one",
        "synonym": "amalgamation",
        "sentence": "The proposed merger will create the world's largest airline.",
        "clue": "Two corporations joining as one."
      },
      {
        "word": "quota",
        "phonetic": "/ˈkwəʊ.tə/",
        "pos": "n.",
        "level": "B2",
        "zh": "配額，定額",
        "root": "Latin quota pars (how great a part)",
        "definition": "a limited or fixed number or amount of people or things",
        "synonym": "allocation",
        "sentence": "The sales team easily exceeded their fourth-quarter quota.",
        "clue": "Assigned target number to achieve."
      },
      {
        "word": "subsidy",
        "phonetic": "/ˈsʌb.sɪ.di/",
        "pos": "n.",
        "level": "B2",
        "zh": "補貼，津貼",
        "root": "Latin subsidium (support)",
        "definition": "a sum of money granted by the government to assist an industry",
        "synonym": "grant",
        "sentence": "Government subsidies accelerated the adoption of electric vehicles.",
        "clue": "Financial aid given to support businesses."
      },
      {
        "word": "depreciation",
        "phonetic": "/dɪˌpriː.ʃiˈeɪ.ʃən/",
        "pos": "n.",
        "level": "C1",
        "zh": "折舊，貶值",
        "root": "Latin de (down) + pretium (price)",
        "definition": "a reduction in the value of an asset over time",
        "synonym": "devaluation",
        "sentence": "Machinery depreciation was recorded as a business expense.",
        "clue": "Gradual loss in monetary value."
      },
      {
        "word": "bilateral",
        "phonetic": "/ˌbaɪˈlæt.ər.əl/",
        "pos": "adj.",
        "level": "C1",
        "zh": "雙邊的，雙方的",
        "root": "Latin bi (two) + latus (side)",
        "definition": "having or relating to two sides; affecting both sides",
        "synonym": "two-sided",
        "sentence": "The two nations signed a bilateral free trade pact.",
        "clue": "Agreed between two independent parties."
      },
      {
        "word": "benchmark",
        "phonetic": "/ˈbentʃ.mɑːk/",
        "pos": "n.",
        "level": "B2",
        "zh": "基準，參照點",
        "root": "English surveyor mark",
        "definition": "a standard or point of reference against which things may be compared",
        "synonym": "standard",
        "sentence": "Their customer satisfaction score became the industry benchmark.",
        "clue": "Quality point for measuring success."
      }
    ]
  },
  "toefl": {
    "name": "TOEFL & IELTS Academic",
    "icon": "🎓",
    "desc": "High-yield academic prose, research methodology, scientific inquiry, and critical analysis vocabulary.",
    "words": [
      {
        "word": "hypothesis",
        "phonetic": "/haɪˈpɑː.θə.sɪs/",
        "pos": "n.",
        "level": "B2",
        "zh": "假設，假說",
        "root": "Greek hypo (under) + thesis",
        "definition": "a proposed explanation based on limited evidence",
        "synonym": "theory",
        "sentence": "The laboratory experiments confirmed their initial hypothesis.",
        "clue": "A testable scientific idea."
      },
      {
        "word": "empirical",
        "phonetic": "/emˈpɪr.ɪ.kəl/",
        "pos": "adj.",
        "level": "C1",
        "zh": "經驗主義的，實證的",
        "root": "Greek empeiria (experience)",
        "definition": "based on observation or experiment rather than theory",
        "synonym": "observational",
        "sentence": "They gathered solid empirical evidence to support the claim.",
        "clue": "Based on real-world testing."
      },
      {
        "word": "paradigm",
        "phonetic": "/ˈper.ə.daɪm/",
        "pos": "n.",
        "level": "C1",
        "zh": "範例，典範",
        "root": "Greek paradeigma (pattern)",
        "definition": "a typical example, pattern, or framework of ideas",
        "synonym": "model",
        "sentence": "Quantum mechanics caused a major paradigm shift.",
        "clue": "A fundamental framework or model."
      },
      {
        "word": "synthesize",
        "phonetic": "/ˈsɪn.θə.saɪz/",
        "pos": "v.",
        "level": "B2",
        "zh": "綜合，合成",
        "root": "Greek synthesis (putting together)",
        "definition": "to combine diverse ideas or substances into a whole",
        "synonym": "integrate",
        "sentence": "The essay synthesizes data from multiple research papers.",
        "clue": "Combining parts into a single whole."
      },
      {
        "word": "ubiquitous",
        "phonetic": "/juːˈbɪk.wə.t̬əs/",
        "pos": "adj.",
        "level": "C2",
        "zh": "無處不在的",
        "root": "Latin ubique (everywhere)",
        "definition": "present, appearing, or found everywhere",
        "synonym": "omnipresent",
        "sentence": "Smartphones have become ubiquitous across modern life.",
        "clue": "Found all around us."
      },
      {
        "word": "corroborate",
        "phonetic": "/kəˈrɒb.ə.reɪt/",
        "pos": "v.",
        "level": "C1",
        "zh": "證實，確證",
        "root": "Latin com + robur (strength)",
        "definition": "to confirm or give support to a statement or theory",
        "synonym": "confirm",
        "sentence": "Independent geological surveys corroborated the climate findings.",
        "clue": "Providing evidence to back up a fact."
      },
      {
        "word": "delineate",
        "phonetic": "/dɪˈlɪn.i.eɪt/",
        "pos": "v.",
        "level": "C2",
        "zh": "描繪，詳細闡明",
        "root": "Latin de + linea (line)",
        "definition": "to describe or portray something precisely",
        "synonym": "outline",
        "sentence": "The research paper clearly delineates the methodology used.",
        "clue": "Setting out exact boundaries or descriptions."
      },
      {
        "word": "substantiate",
        "phonetic": "/səbˈstæn.ʃi.eɪt/",
        "pos": "v.",
        "level": "C1",
        "zh": "證實，證明…有根據",
        "root": "Latin substantia (substance)",
        "definition": "to provide evidence to support or prove the truth of",
        "synonym": "verify",
        "sentence": "Researchers must substantiate claims with peer-reviewed data.",
        "clue": "Proving that a claim is solidly true."
      },
      {
        "word": "anomaly",
        "phonetic": "/əˈnɒm.ə.li/",
        "pos": "n.",
        "level": "C1",
        "zh": "異常，反常現象",
        "root": "Greek an (not) + homalos (even)",
        "definition": "something that deviates from what is standard, normal, or expected",
        "synonym": "irregularity",
        "sentence": "Astronomers detected an electromagnetic anomaly near the star.",
        "clue": "Unexpected deviation from the norm."
      },
      {
        "word": "aggregate",
        "phonetic": "/ˈæɡ.rɪ.ɡət/",
        "pos": "n.",
        "level": "B2",
        "zh": "總計，聚集體",
        "root": "Latin ad + grex (flock)",
        "definition": "a whole formed by combining several separate elements",
        "synonym": "total",
        "sentence": "The aggregate data revealed long-term demographic shifts.",
        "clue": "Sum total of combined pieces."
      },
      {
        "word": "plausible",
        "phonetic": "/ˈplɔː.zə.bəl/",
        "pos": "adj.",
        "level": "B2",
        "zh": "合理的，貌似可信的",
        "root": "Latin plaudere (applaud)",
        "definition": "seeming reasonable or probable",
        "synonym": "credible",
        "sentence": "The detective presented a plausible explanation for the event.",
        "clue": "Believable and logical."
      },
      {
        "word": "fluctuate",
        "phonetic": "/ˈflʌk.tʃu.eɪt/",
        "pos": "v.",
        "level": "B2",
        "zh": "波動，起伏不定",
        "root": "Latin fluctuare (surge)",
        "definition": "to rise and fall irregularly in number or amount",
        "synonym": "vary",
        "sentence": "Surface temperatures fluctuate wildly on the moon.",
        "clue": "Going up and down continually."
      },
      {
        "word": "concurrent",
        "phonetic": "/kənˈkʌr.ənt/",
        "pos": "adj.",
        "level": "C1",
        "zh": "同時發生的，並存的",
        "root": "Latin con + currere (run)",
        "definition": "existing, happening, or done at the same time",
        "synonym": "simultaneous",
        "sentence": "The symposium hosted four concurrent technical workshops.",
        "clue": "Occurring at the identical time."
      },
      {
        "word": "analogous",
        "phonetic": "/əˈnæl.ə.ɡəs/",
        "pos": "adj.",
        "level": "C1",
        "zh": "類似的，可類比的",
        "root": "Greek ana (according to) + logos",
        "definition": "comparable in certain respects, typically in a way which makes clearer",
        "synonym": "comparable",
        "sentence": "The wings of bats and birds are functionally analogous.",
        "clue": "Similar in structure or purpose."
      },
      {
        "word": "intrinsic",
        "phonetic": "/ɪnˈtrɪn.zɪk/",
        "pos": "adj.",
        "level": "C1",
        "zh": "固有的，內在的",
        "root": "Latin intrinsecus (inwardly)",
        "definition": "belonging naturally; essential",
        "synonym": "inherent",
        "sentence": "Curiosity is an intrinsic part of human nature.",
        "clue": "Inborn and inseparable from within."
      },
      {
        "word": "manifest",
        "phonetic": "/ˈmæn.ɪ.fest/",
        "pos": "v.",
        "level": "C1",
        "zh": "顯現，表明",
        "root": "Latin manifestus (evident)",
        "definition": "to show or demonstrate clearly",
        "synonym": "display",
        "sentence": "Stress often manifests in physical exhaustion.",
        "clue": "Making inner feelings visible."
      },
      {
        "word": "qualitative",
        "phonetic": "/ˈkwɒl.ɪ.tə.tɪv/",
        "pos": "adj.",
        "level": "B2",
        "zh": "質化的，質的",
        "root": "Latin qualitas (quality)",
        "definition": "relating to, measuring, or measured by the quality of something",
        "synonym": "descriptive",
        "sentence": "Interviews provided rich qualitative insights into consumer psychology.",
        "clue": "Measured by quality rather than raw numbers."
      },
      {
        "word": "quantitative",
        "phonetic": "/ˈkwɒn.tɪ.tə.tɪv/",
        "pos": "adj.",
        "level": "B2",
        "zh": "量化的，數量的",
        "root": "Latin quantitas (amount)",
        "definition": "relating to, measuring, or measured by the quantity of something",
        "synonym": "numerical",
        "sentence": "The laboratory relies on precise quantitative measurements.",
        "clue": "Based on numerical data and stats."
      },
      {
        "word": "volatile",
        "phonetic": "/ˈvɒl.ə.taɪl/",
        "pos": "adj.",
        "level": "C1",
        "zh": "不穩定的，易揮發的",
        "root": "Latin volare (to fly)",
        "definition": "liable to change rapidly and unpredictably",
        "synonym": "unstable",
        "sentence": "The political situation in the border region remained volatile.",
        "clue": "Subject to explosive or sudden shift."
      },
      {
        "word": "susceptible",
        "phonetic": "/səˈsep.tə.bəl/",
        "pos": "adj.",
        "level": "B2",
        "zh": "易受影響的，敏感的",
        "root": "Latin suscipere (take up)",
        "definition": "likely or liable to be influenced or harmed by a particular thing",
        "synonym": "vulnerable",
        "sentence": "Elderly patients are especially susceptible to winter influenza.",
        "clue": "Easily affected or caught off guard."
      },
      {
        "word": "scrutinize",
        "phonetic": "/ˈskruː.tɪ.naɪz/",
        "pos": "v.",
        "level": "C1",
        "zh": "仔細審查，徹底檢查",
        "root": "Latin scrutari (search)",
        "definition": "to examine or inspect closely and thoroughly",
        "synonym": "inspect",
        "sentence": "Scholars scrutinized the ancient papyrus under ultraviolet light.",
        "clue": "Examining with surgical care."
      },
      {
        "word": "coherent",
        "phonetic": "/kəʊˈhɪə.rənt/",
        "pos": "adj.",
        "level": "B2",
        "zh": "條理分明的，連貫的",
        "root": "Latin cohaerere (cling together)",
        "definition": "logical and consistent in argument or thought",
        "synonym": "logical",
        "sentence": "She presented a coherent thesis supported by clear evidence.",
        "clue": "Clear, rational, and well-knit."
      },
      {
        "word": "deduce",
        "phonetic": "/dɪˈdjuːs/",
        "pos": "v.",
        "level": "B2",
        "zh": "推論，演繹",
        "root": "Latin deducere (lead down)",
        "definition": "to arrive at a fact by reasoning from general rules",
        "synonym": "infer",
        "sentence": "From the footprints, the detective deduced the suspect's height.",
        "clue": "Logical reasoning from facts."
      },
      {
        "word": "premise",
        "phonetic": "/ˈprem.ɪs/",
        "pos": "n.",
        "level": "C1",
        "zh": "前提，假定",
        "root": "Latin praemittere (send before)",
        "definition": "a previous statement from which another is inferred as a conclusion",
        "synonym": "assumption",
        "sentence": "The entire argument rests upon a false foundational premise.",
        "clue": "Starting assumption of a logical argument."
      },
      {
        "word": "pervasive",
        "phonetic": "/pəˈveɪ.sɪv/",
        "pos": "adj.",
        "level": "C1",
        "zh": "普遍蔓延的，滲透的",
        "root": "Latin pervadere (spread through)",
        "definition": "spreading widely throughout an area or a group of people",
        "synonym": "widespread",
        "sentence": "Social media has a pervasive influence on modern culture.",
        "clue": "Spreading into every corner of society."
      },
      {
        "word": "autonomous",
        "phonetic": "/ɔːˈtɒn.ə.məs/",
        "pos": "adj.",
        "level": "C1",
        "zh": "自治的，自主運行的",
        "root": "Greek auto (self) + nomos (law)",
        "definition": "having the freedom to act independently",
        "synonym": "self-governing",
        "sentence": "Engineers developed an autonomous drone for ocean exploration.",
        "clue": "Operating freely on its own."
      },
      {
        "word": "integral",
        "phonetic": "/ˈɪn.tɪ.ɡrəl/",
        "pos": "adj.",
        "level": "B2",
        "zh": "不可或缺的，構成整體所必需的",
        "root": "Latin integer (untouched, whole)",
        "definition": "necessary to make a whole complete; essential",
        "synonym": "essential",
        "sentence": "Practical experiments are an integral component of the syllabus.",
        "clue": "Essential piece of a puzzle."
      },
      {
        "word": "prevalent",
        "phonetic": "/ˈprev.əl.ənt/",
        "pos": "adj.",
        "level": "C1",
        "zh": "盛行的，普遍存在的",
        "root": "Latin praevalere (prevail)",
        "definition": "widespread in a particular area or at a particular time",
        "synonym": "dominant",
        "sentence": "The view that exercise improves mental focus is prevalent today.",
        "clue": "Common and widely accepted."
      },
      {
        "word": "versatile",
        "phonetic": "/ˈvɜː.sə.taɪl/",
        "pos": "adj.",
        "level": "B2",
        "zh": "多才多藝的，多功能的",
        "root": "Latin versare (turn about)",
        "definition": "able to adapt or be adapted to many different functions",
        "synonym": "adaptable",
        "sentence": "The Swiss army knife is famous as a versatile survival tool.",
        "clue": "Able to handle many diverse tasks."
      },
      {
        "word": "pertinent",
        "phonetic": "/ˈpɜː.tɪ.nənt/",
        "pos": "adj.",
        "level": "C1",
        "zh": "切題的，直接相關的",
        "root": "Latin pertinere (belong to)",
        "definition": "relevant or applicable to a particular matter; apposite",
        "synonym": "relevant",
        "sentence": "The lawyer asked pertinent questions regarding the contract date.",
        "clue": "Directly relevant to the discussion."
      }
    ]
  },
  "gre": {
    "name": "GRE Verbal Elite",
    "icon": "🏛️",
    "desc": "Nuanced, high-level vocabulary for advanced literary prose, philosophical debates, and critical reasoning.",
    "words": [
      {
        "word": "laconic",
        "phonetic": "/ləˈkɑː.nɪk/",
        "pos": "adj.",
        "level": "C2",
        "zh": "簡潔的，言簡意賅的",
        "root": "Greek Lakon (Spartan)",
        "definition": "using very few words to express much",
        "synonym": "terse",
        "sentence": "His laconic reply conveyed calm authority.",
        "clue": "Expressing thoughts in very few words."
      },
      {
        "word": "alacrity",
        "phonetic": "/əˈlæk.rə.t̬i/",
        "pos": "n.",
        "level": "C2",
        "zh": "敏捷，欣然",
        "root": "Latin alacer (lively)",
        "definition": "brisk and cheerful readiness to act",
        "synonym": "eagerness",
        "sentence": "She accepted the challenging project with alacrity.",
        "clue": "Cheerful and brisk eagerness."
      },
      {
        "word": "enervate",
        "phonetic": "/ˈen.ɚ.veɪt/",
        "pos": "v.",
        "level": "C2",
        "zh": "使衰弱，使無力",
        "root": "Latin e- (out) + nervus (sinew)",
        "definition": "to drain energy or vitality from",
        "synonym": "weaken",
        "sentence": "The relentless desert sun threatened to enervate the travelers.",
        "clue": "Draining one's strength."
      },
      {
        "word": "obsequious",
        "phonetic": "/əbˈsiː.kwi.əs/",
        "pos": "adj.",
        "level": "C2",
        "zh": "諂媚的，奉承的",
        "root": "Latin obsequi (comply)",
        "definition": "obedient or attentive to an excessive degree",
        "synonym": "fawning",
        "sentence": "The courtiers were obsequious in the king's presence.",
        "clue": "Excessively flattering."
      },
      {
        "word": "capricious",
        "phonetic": "/kəˈprɪʃ.əs/",
        "pos": "adj.",
        "level": "C1",
        "zh": "善變的，反覆無常的",
        "root": "Italian capriccio (whim)",
        "definition": "given to sudden and unaccountable changes of mood",
        "synonym": "fickle",
        "sentence": "The mountain weather is famously capricious.",
        "clue": "Changing rapidly on a whim."
      },
      {
        "word": "magnanimous",
        "phonetic": "/mæɡˈnæn.ɪ.məs/",
        "pos": "adj.",
        "level": "C2",
        "zh": "寬宏大量的，心胸開闊的",
        "root": "Latin magnus (great) + animus (soul)",
        "definition": "generous or forgiving, especially toward a rival",
        "synonym": "generous",
        "sentence": "The victor was magnanimous in extending peace terms to the vanquished.",
        "clue": "Showing a noble, forgiving spirit."
      },
      {
        "word": "fastidious",
        "phonetic": "/fæsˈtɪd.i.əs/",
        "pos": "adj.",
        "level": "C2",
        "zh": "挑剔的，極度注重細節的",
        "root": "Latin fastidium (disgust)",
        "definition": "very attentive to and concerned about accuracy and detail",
        "synonym": "scrupulous",
        "sentence": "The curator was fastidious in restoring the renaissance oil painting.",
        "clue": "Perfectionist attention to cleanliness."
      },
      {
        "word": "cacophony",
        "phonetic": "/kəˈkɒf.ə.ni/",
        "pos": "n.",
        "level": "C1",
        "zh": "刺耳雜音，喧囂聲",
        "root": "Greek kakos (bad) + phone (sound)",
        "definition": "a harsh, discordant mixture of sounds",
        "synonym": "din",
        "sentence": "A cacophony of car horns echoed through the busy marketplace.",
        "clue": "Loud, grating noise."
      },
      {
        "word": "garrulous",
        "phonetic": "/ˈɡær.əl.əs/",
        "pos": "adj.",
        "level": "C2",
        "zh": "喋喋不休的，饒舌的",
        "root": "Latin garrire (to chatter)",
        "definition": "excessively talkative, especially on trivial matters",
        "synonym": "loquacious",
        "sentence": "The garrulous cab driver told stories during the entire journey.",
        "clue": "Talking endlessly about minor things."
      },
      {
        "word": "venerate",
        "phonetic": "/ˈven.ər.eɪt/",
        "pos": "v.",
        "level": "C2",
        "zh": "崇敬，尊崇",
        "root": "Latin venus (love, grace)",
        "definition": "to regard with great respect; revere",
        "synonym": "revere",
        "sentence": "Scholars venerate the ancient philosopher for his ethical teachings.",
        "clue": "Holding in the highest spiritual esteem."
      },
      {
        "word": "repudiate",
        "phonetic": "/rɪˈpjuː.di.eɪt/",
        "pos": "v.",
        "level": "C2",
        "zh": "斷然拒絕，否認駁斥",
        "root": "Latin repudiare (divorce, reject)",
        "definition": "to refuse to accept or be associated with",
        "synonym": "renounce",
        "sentence": "The leader repudiated the extremist allegations with fierce resolve.",
        "clue": "Completely rejecting a claim."
      },
      {
        "word": "exacerbate",
        "phonetic": "/ɪɡˈzæs.ə.beɪt/",
        "pos": "v.",
        "level": "C1",
        "zh": "加劇，使惡化",
        "root": "Latin ex + acerbus (harsh)",
        "definition": "to make a problem, bad situation, or negative feeling worse",
        "synonym": "worsen",
        "sentence": "The heatwave only exacerbated the severe drought.",
        "clue": "Making a bad situation much worse."
      },
      {
        "word": "mitigate",
        "phonetic": "/ˈmɪt.ɪ.ɡeɪt/",
        "pos": "v.",
        "level": "B2",
        "zh": "緩和，減輕",
        "root": "Latin mitis (mild)",
        "definition": "to make less severe, serious, or painful",
        "synonym": "alleviate",
        "sentence": "Planting mangrove trees mitigates storm surge damage.",
        "clue": "Softening the harsh impact."
      },
      {
        "word": "laudable",
        "phonetic": "/ˈlɔː.də.bəl/",
        "pos": "adj.",
        "level": "C1",
        "zh": "值得稱讚的",
        "root": "Latin laudare (praise)",
        "definition": "deserving praise and commendation",
        "synonym": "praiseworthy",
        "sentence": "Her dedication to animal welfare is truly laudable.",
        "clue": "Worthy of high public praise."
      },
      {
        "word": "castigate",
        "phonetic": "/ˈkæs.tɪ.ɡeɪt/",
        "pos": "v.",
        "level": "C2",
        "zh": "嚴厲指責，痛斥",
        "root": "Latin castus (pure) + agere",
        "definition": "to reprimand someone severely",
        "synonym": "rebuke",
        "sentence": "The editorial castigated the company for concealing pollution data.",
        "clue": "Harshly criticizing wrongdoing."
      },
      {
        "word": "equivocal",
        "phonetic": "/ɪˈkwɪv.ə.kəl/",
        "pos": "adj.",
        "level": "C2",
        "zh": "含糊其辭的，模稜兩可的",
        "root": "Latin aequus (equal) + vox (voice)",
        "definition": "open to more than one interpretation; ambiguous",
        "synonym": "ambiguous",
        "sentence": "His equivocal statement left both political sides confused.",
        "clue": "Speaking with two possible meanings."
      },
      {
        "word": "audacious",
        "phonetic": "/ɔːˈdeɪ.ʃəs/",
        "pos": "adj.",
        "level": "C1",
        "zh": "大膽大無畏的，放肆的",
        "root": "Latin audere (to dare)",
        "definition": "showing a willingness to take surprisingly bold risks",
        "synonym": "daring",
        "sentence": "The startup executed an audacious plan to challenge the tech monopoly.",
        "clue": "Brazenly bold and daring."
      },
      {
        "word": "pedantic",
        "phonetic": "/pəˈdæn.tɪk/",
        "pos": "adj.",
        "level": "C2",
        "zh": "迂腐的，學究氣的",
        "root": "Italian pedante (teacher)",
        "definition": "excessively concerned with minor details or rules in scholarship",
        "synonym": "nitpicking",
        "sentence": "The professor's pedantic lecture lost the students' interest.",
        "clue": "Obsessing over trivial technicalities."
      },
      {
        "word": "nadir",
        "phonetic": "/ˈneɪ.dɪər/",
        "pos": "n.",
        "level": "C2",
        "zh": "最低點，最不幸的時刻",
        "root": "Arabic nazir (opposite to zenith)",
        "definition": "the lowest point in the fortunes of a person or organization",
        "synonym": "rock-bottom",
        "sentence": "The stock market hit its nadir during the financial crisis.",
        "clue": "The direct opposite of the zenith."
      },
      {
        "word": "bolster",
        "phonetic": "/ˈbəʊl.stər/",
        "pos": "v.",
        "level": "B2",
        "zh": "支持，增強",
        "root": "Old English bolster (pillow)",
        "definition": "to support or strengthen",
        "synonym": "reinforce",
        "sentence": "Fresh clinical trials bolstered confidence in the vaccine.",
        "clue": "Propping up with solid support."
      },
      {
        "word": "gregarious",
        "phonetic": "/ɡrɪˈɡeə.ri.əs/",
        "pos": "adj.",
        "level": "C1",
        "zh": "合群的，愛交際的",
        "root": "Latin grex (flock)",
        "definition": "fond of company; sociable",
        "synonym": "sociable",
        "sentence": "Dolphins are gregarious mammals that swim in large pods.",
        "clue": "Thriving in social groups."
      },
      {
        "word": "innocuous",
        "phonetic": "/ɪˈnɒk.ju.əs/",
        "pos": "adj.",
        "level": "C1",
        "zh": "無害的，平淡無奇的",
        "root": "Latin in- (not) + nocere (harm)",
        "definition": "not harmful or offensive",
        "synonym": "harmless",
        "sentence": "The question seemed innocuous, but it disguised a trap.",
        "clue": "Completely incapable of doing harm."
      },
      {
        "word": "austere",
        "phonetic": "/ɔːˈstɪər/",
        "pos": "adj.",
        "level": "C2",
        "zh": "樸素嚴峻的，苦行的",
        "root": "Greek austeros (harsh, dry)",
        "definition": "severe or strict in manner, attitude, or appearance",
        "synonym": "spartan",
        "sentence": "Monks lived in austere stone chambers without luxury.",
        "clue": "Spiritual simplicity without comforts."
      },
      {
        "word": "avarice",
        "phonetic": "/ˈæv.ər.ɪs/",
        "pos": "n.",
        "level": "C2",
        "zh": "貪婪，貪得無厭",
        "root": "Latin avere (crave)",
        "definition": "extreme greed for wealth or material gain",
        "synonym": "greed",
        "sentence": "His insatiable avarice ruined lifelong friendships.",
        "clue": "Uncontrollable lust for gold."
      },
      {
        "word": "chicanery",
        "phonetic": "/ʃɪˈkeɪ.nər.i/",
        "pos": "n.",
        "level": "C2",
        "zh": "詭計，強詞奪理",
        "root": "French chicaner (to quibble)",
        "definition": "the use of trickery to achieve a political, financial, or legal purpose",
        "synonym": "deception",
        "sentence": "Financial regulators uncovered layers of corporate chicanery.",
        "clue": "Devious legal or financial tricks."
      },
      {
        "word": "circumspect",
        "phonetic": "/ˈsɜː.kəm.spekt/",
        "pos": "adj.",
        "level": "C2",
        "zh": "謹慎小心的，深思熟慮的",
        "root": "Latin circum (around) + specere (look)",
        "definition": "wary and unwilling to take risks",
        "synonym": "cautious",
        "sentence": "Diplomats gave circumspect responses during the peace talks.",
        "clue": "Looking around carefully before acting."
      },
      {
        "word": "cogent",
        "phonetic": "/ˈkəʊ.dʒənt/",
        "pos": "adj.",
        "level": "C2",
        "zh": "令人信服的，有說服力的",
        "root": "Latin cogere (compel)",
        "definition": "clear, logical, and convincing in argument",
        "synonym": "compelling",
        "sentence": "The scientist delivered a cogent defense of the new paradigm.",
        "clue": "Powerfully compelling logic."
      },
      {
        "word": "copious",
        "phonetic": "/ˈkəʊ.pi.əs/",
        "pos": "adj.",
        "level": "C1",
        "zh": "豐富的，大量的",
        "root": "Latin copia (plenty)",
        "definition": "abundant in supply or quantity",
        "synonym": "plentiful",
        "sentence": "She took copious notes throughout the symposium.",
        "clue": "Overflowing in great abundance."
      },
      {
        "word": "craven",
        "phonetic": "/ˈkreɪ.vən/",
        "pos": "adj.",
        "level": "C2",
        "zh": "怯懦膽小的",
        "root": "Latin crepare (crack, break)",
        "definition": "contemptibly lacking in courage; cowardly",
        "synonym": "cowardly",
        "sentence": "The craven minister fled the palace during the rebellion.",
        "clue": "Despicably cowardly."
      },
      {
        "word": "deference",
        "phonetic": "/ˈdef.ər.əns/",
        "pos": "n.",
        "level": "C1",
        "zh": "順從，尊崇",
        "root": "Latin deferre (yield)",
        "definition": "polite submission and respect",
        "synonym": "respect",
        "sentence": "Young apprentices treated the master craftsman with deep deference.",
        "clue": "Respectful submission to authority."
      }
    ]
  }
};

const ACHIEVEMENTS = [
  { id: "first_step", name: "First Steps", zhName: "啟程第一步", icon: "🌱", desc: "Complete your first journey node.", zhDesc: "完成你的第一個路線節點。" },
  { id: "scholar_25", name: "Lexical Seeker", zhName: "字彙探索者", icon: "📖", desc: "Discover 25 unique words in your lexicon.", zhDesc: "在字彙庫中解鎖 25 個獨立單字。" },
  { id: "master_10", name: "Memory Weaver", zhName: "記憶編織者", icon: "🧠", desc: "Master 10 words in the spaced repetition system.", zhDesc: "在間隔重複記憶庫中完全精通 10 個單字。" },
  { id: "streak_7", name: "Unbroken Chain", zhName: "連擊之火", icon: "🔥", desc: "Reach a 7x word streak in battle.", zhDesc: "在戰鬥中達成 7 連擊。" },
  { id: "streak_15", name: "Flawless Rhythm", zhName: "完美節奏", icon: "⚡", desc: "Reach a 15x word streak in battle.", zhDesc: "在戰鬥中達成 15 連擊。" },
  { id: "quick_wit_10", name: "Lightning Recall", zhName: "迅捷反應", icon: "⏱️", desc: "Trigger Quick Wit reflex 10 times.", zhDesc: "觸發 10 次急速直覺答題獎勵。" },
  { id: "relic_satchel", name: "Curio Collector", zhName: "遺物收藏家", icon: "🎒", desc: "Carry 5 or more relics simultaneously.", zhDesc: "單場遠征同時攜帶 5 個以上遺物。" },
  { id: "daily_devotee", name: "Daily Habit", zhName: "每日習慣", icon: "⭐", desc: "Complete a Daily Seeded Expedition.", zhDesc: "完成一場每日種子遠征。" },
  { id: "riddle_solver", name: "Riddlemaster", zhName: "字謎大師", icon: "🧩", desc: "Successfully unlock an Anagram Chest.", zhDesc: "成功解開重組字謎寶箱。" },
  { id: "alchemy_adept", name: "Etymology Sage", zhName: "語源賢者", icon: "🔮", desc: "Receive a blessing from the Word Alchemy Shrine.", zhDesc: "在字根煉金祭壇獲得古語祝福。" },
  { id: "bazaar_patron", name: "Bazaar Patron", zhName: "黑市貴賓", icon: "◈", desc: "Purchase 3 items from the Wandering Merchant.", zhDesc: "在流浪黑市購買 3 件以上商品。" },
  { id: "cycle_conqueror", name: "Endless Wanderer", zhName: "無盡行者", icon: "👑", desc: "Complete Cycle 0 and enter the Endless Cycle.", zhDesc: "通關第一輪並進入無盡循環模式。" },
  { id: "guardian_slayer", name: "Guardian Bane", zhName: "領主剋星", icon: "⚔️", desc: "Defeat 3 region guardians.", zhDesc: "擊敗 3 位區域守護者領主。" },
  { id: "active_recall", name: "Active Producer", zhName: "主動默寫者", icon: "✍️", desc: "Complete a typed recall practice session.", zhDesc: "完成一次拼寫填空複習測驗。" },
  { id: "all_realms", name: "Cosmic Polyglot", zhName: "全域通曉", icon: "🌌", desc: "Discover at least one word from all 6 realms.", zhDesc: "在 6 大領域中各解鎖至少 1 個單字。" },
  { id: "habit_7day", name: "7-Day Dedication", zhName: "七日堅持", icon: "📅", desc: "Study 7 consecutive days in a row.", zhDesc: "連續 7 天進行英文學習冒險。" }
];

const DAILY_QUESTS = [
  { id: "words_8", text: "Answer 8 words correctly", zhText: "答對 8 個英文單字", target: 8, reward: 20 },
  { id: "quick_3", text: "Score 3 Quick Wit answers", zhText: "達成 3 次急速直覺作答", target: 3, reward: 25 },
  { id: "streak_5", text: "Achieve a 5x streak in battle", zhText: "在戰鬥中達成 5 連擊", target: 5, reward: 22 },
  { id: "elites_1", text: "Defeat 1 Elite or Boss Guardian", zhText: "擊敗 1 位精英怪或區域領主", target: 1, reward: 30 }
];

const EVENTS = [
  {
    icon: "⌘", title: "The Whispering Signpost", zhTitle: "呢喃路標",
    copy: "Three wooden arms point in impossible directions. One is carved with a word you nearly remember.",
    zhCopy: "三根木質路標指向不可思議的方位，其中一根刻著一個你彷彿隱約記得的古老單字。",
    options: [
      { label: "Study the carving", zhLabel: "研讀路標刻文", detail: "Learn a word · gain 2 insight", zhDetail: "解鎖新單字 · 獲得 2 點頓悟經驗", effect: "study" },
      { label: "Follow the humming path", zhLabel: "沿著共鳴小徑前行", detail: "50% treasure · 50% trouble", zhDetail: "50% 獲得寶藏 · 50% 遭受傷害", effect: "gamble" }
    ]
  },
  {
    icon: "☕", title: "A Tea-Seller's Tale", zhTitle: "茶商的傳聞",
    copy: "A traveling merchant offers a fragrant cup and a story told entirely in synonyms.",
    zhCopy: "一位旅途中的茶商為你遞上一杯清香熱茶，並用一連串生動的同義詞講述了一則冒險故事。",
    options: [
      { label: "Listen to the whole story", zhLabel: "靜心聆聽故事", detail: "Heal 10 resolve", zhDetail: "恢復 10 點意志生命", effect: "heal" },
      { label: "Trade notes", zhLabel: "交換筆記心得", detail: "Pay 12 ink · gain 3 sparks", zhDetail: "支付 12 墨水 · 獲得 3 點火花", effect: "trade" }
    ]
  },
  {
    icon: "✧", title: "The Unfinished Sentence", zhTitle: "未完成的詩句",
    copy: "A golden sentence floats above the path, waiting for a final word that only you can provide.",
    zhCopy: "一行發光的金色詩句懸浮在林徑上方，等待著唯有你才能填補上的最後一個關鍵單字。",
    options: [
      { label: "Complete it carefully", zhLabel: "謹慎補齊詩句", detail: "Gain 18 ink", zhDetail: "獲得 18 點墨水", effect: "ink" },
      { label: "Rewrite it boldly", zhLabel: "大膽改寫全篇", detail: "Lose 5 resolve · gain 4 insight", zhDetail: "消耗 5 點生命 · 獲得 4 點頓悟經驗", effect: "bold" }
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
let practice = null;
let soundEnabled = true;
let audioContext = null;

function checkAchievement(id) {
  const meta = loadMeta();
  meta.achievements = meta.achievements || [];
  if (!meta.achievements.includes(id)) {
    meta.achievements.push(id);
    localStorage.setItem(META_KEY, JSON.stringify(meta));
    const ach = ACHIEVEMENTS.find(a => a.id === id);
    if (ach) {
      toast(`🏆 <b>Achievement Unlocked:</b> ${ach.name} — ${ach.desc}`);
      playChestFanfare();
    }
  }
}

function updateHabitTracker() {
  const meta = loadMeta();
  meta.studyHistory = meta.studyHistory || {};
  const todayStr = new Date().toISOString().slice(0, 10);
  meta.studyHistory[todayStr] = true;
  
  let streak = 0;
  let d = new Date();
  while (true) {
    const s = d.toISOString().slice(0, 10);
    if (meta.studyHistory[s]) {
      streak += 1;
      d.setDate(d.getDate() - 1);
    } else {
      break;
    }
  }
  meta.studyStreak = streak;
  if (streak >= 7) checkAchievement("habit_7day");
  localStorage.setItem(META_KEY, JSON.stringify(meta));

  const label = $("#study-streak-label");
  if (label) label.textContent = `🔥 ${streak} Day${streak === 1 ? "" : "s"}`;

  const habitDots = $("#habit-dots");
  if (habitDots) {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    const now = new Date();
    const currDay = now.getDay();
    habitDots.innerHTML = days.map((dayName, idx) => {
      const pastDate = new Date();
      pastDate.setDate(now.getDate() - (currDay - idx));
      const dateKey = pastDate.toISOString().slice(0, 10);
      const isDone = Boolean(meta.studyHistory[dateKey]);
      const isToday = idx === currDay;
      return `<div class="habit-day ${isDone ? "done" : ""} ${isToday ? "today" : ""}">
        <span class="habit-dot">${isDone ? "✓" : "•"}</span>
        <small>${dayName}</small>
      </div>`;
    }).join("");
  }
}

function showAchievements() {
  const meta = loadMeta();
  const unlocked = meta.achievements || [];
  openModal(`
    <span class="modal-kicker">HALL OF MASTERY</span>
    <h2>Badges & Achievements</h2>
    <p class="section-copy"><b>${unlocked.length} / ${ACHIEVEMENTS.length}</b> unlocked. Cultivate your daily vocabulary habits to claim every badge.</p>
    <div class="achievements-grid">
      ${ACHIEVEMENTS.map(ach => {
        const isUnlocked = unlocked.includes(ach.id);
        return `
          <div class="achieve-card ${isUnlocked ? "unlocked" : "locked"}">
            <span class="achieve-icon">${ach.icon}</span>
            <div class="achieve-info">
              <b>${ach.name}</b>
              <p>${ach.desc}</p>
            </div>
            <span class="achieve-status">${isUnlocked ? (meta.bilingual ? "已解鎖" : "UNLOCKED") : (meta.bilingual ? "未達成" : "LOCKED")}</span>
          </div>
        `;
      }).join("")}
    </div>
  `);
}

const SANCTUARY_TALENTS = [
  {
    id: "vitality", name: "Heart of Wisdom", zhName: "智慧之心", icon: "💖",
    desc: "+3 Max Resolve per rank at start of all expeditions.",
    zhDesc: "每級提升所有遠征初始最大生命值 +3 HP。",
    maxRank: 5, baseCost: 30, costMult: 1.5
  },
  {
    id: "sparks", name: "Spark Crucible", zhName: "專注火花槽", icon: "⚡",
    desc: "+1 Starting Spark slot per rank.",
    zhDesc: "每級提升初始火花槽 +1 (可用於線索提示與換題)。",
    maxRank: 3, baseCost: 40, costMult: 1.8
  },
  {
    id: "inkwell", name: "Gilded Quill", zhName: "鍍金羽毛筆", icon: "◈",
    desc: "+10% extra Ink gained across all battles and events per rank.",
    zhDesc: "每級使所有戰鬥與事件獲得的墨水增加 +10%。",
    maxRank: 4, baseCost: 35, costMult: 1.6
  },
  {
    id: "reflex", name: "Chronos Focus", zhName: "時光專注", icon: "⏱️",
    desc: "+0.4s extended Quick Wit speed reflex window per rank.",
    zhDesc: "每級延長急速作答判定時間 +0.4 秒。",
    maxRank: 3, baseCost: 45, costMult: 1.7
  },
  {
    id: "merchant", name: "Bazaar Favor", zhName: "黑市恩惠", icon: "🤝",
    desc: "6% discount on all Merchant prices per rank.",
    zhDesc: "每級使流浪黑市所有商品售價降低 6%。",
    maxRank: 4, baseCost: 30, costMult: 1.5
  },
  {
    id: "shield_wall", name: "Bastion of Babel", zhName: "巴別堡壘", icon: "🛡️",
    desc: "Start every combat encounter with +3 Shield per rank.",
    zhDesc: "每場戰鬥開始時獲得 +3 點初始護盾（每級）。",
    maxRank: 4, baseCost: 40, costMult: 1.6
  },
  {
    id: "sharp_edge", name: "Razor Focus", zhName: "鋒芒心智", icon: "🗡️",
    desc: "+2 flat damage to all correct answers in combat per rank.",
    zhDesc: "戰鬥中每次答對基礎攻擊力 +2 點傷害（每級）。",
    maxRank: 4, baseCost: 50, costMult: 1.7
  },
  {
    id: "rune_resonance", name: "Etymology Blessing", zhName: "古語共鳴", icon: "🔮",
    desc: "+15% bonus damage on words that have root/origin metadata per rank.",
    zhDesc: "解答具有語源或字根的單字時造成 +15% 額外傷害（每級）。",
    maxRank: 3, baseCost: 45, costMult: 1.6
  },
  {
    id: "phoenix", name: "Phoenix Aegis", zhName: "鳳凰庇護", icon: "🪶",
    desc: "Survive a lethal blow once per run, recovering 25 Resolve.",
    zhDesc: "每場遠征享有一次免死機會，瀕死時恢復 25 點生命。",
    maxRank: 1, baseCost: 80, costMult: 1.0
  }
];

function showSanctuary() {
  const meta = loadMeta();
  meta.talents = meta.talents || {};
  meta.totalInk = meta.totalInk !== undefined ? meta.totalInk : 0;
  const isZh = meta.bilingual;
  
  openModal(`
    <span class="modal-kicker">${isZh ? "古代永恆天賦傳承" : "ANCIENT METAPROGRESSION"}</span>
    <h2>${isZh ? "萬字聖殿 (The Sanctuary)" : "The Word Sanctuary"}</h2>
    <p class="section-copy">${isZh ? `將累積的永久墨水注入古老天賦，永久強化未來的所有遠征。目前墨水庫存：<b>${meta.totalInk} ◈</b>` : `Channel your accumulated Ink into permanent blessings that empower all future expeditions. Permanent Ink Stash: <b>${meta.totalInk} ◈</b>`}</p>
    
    <div class="sanctuary-grid">
      ${SANCTUARY_TALENTS.map(t => {
        const currRank = meta.talents[t.id] || 0;
        const isMax = currRank >= t.maxRank;
        const cost = Math.round(t.baseCost * Math.pow(t.costMult, currRank));
        const canAfford = meta.totalInk >= cost;
        return `
          <div class="sanctuary-card">
            <span class="sanctuary-icon">${t.icon}</span>
            <div class="sanctuary-info">
              <div class="sanctuary-top">
                <b>${isZh ? t.zhName : t.name}</b>
                <span class="sanctuary-rank">Rank ${currRank} / ${t.maxRank}</span>
              </div>
              <p>${isZh ? t.zhDesc : t.desc}</p>
            </div>
            <button class="button button-primary buy-talent-btn" data-talent="${t.id}" ${isMax || !canAfford ? "disabled" : ""}>
              ${isMax ? (isZh ? "已達滿級" : "MAX RANK") : (isZh ? `升級 · ${cost} ◈` : `Upgrade · ${cost} ◈`)}
            </button>
          </div>
        `;
      }).join("")}
    </div>
  `);

  document.querySelectorAll(".buy-talent-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const talentId = btn.dataset.talent;
      const talent = SANCTUARY_TALENTS.find(t => t.id === talentId);
      const currRank = meta.talents[talentId] || 0;
      const cost = Math.round(talent.baseCost * Math.pow(talent.costMult, currRank));
      if (meta.totalInk >= cost && currRank < talent.maxRank) {
        meta.totalInk -= cost;
        meta.talents[talentId] = currRank + 1;
        localStorage.setItem(META_KEY, JSON.stringify(meta));
        toast(isZh ? `成功升級 <b>${talent.zhName}</b> 至第 ${meta.talents[talentId]} 級！` : `Upgraded <b>${talent.name}</b> to Rank ${meta.talents[talentId]}!`);
        playLevelUpChime();
        showSanctuary();
        if (state) updateHUD();
      }
    });
  });
}

let chosenAscension = 0;

function freshState(classId = "bard", ascension = chosenAscension) {
  const meta = loadMeta();
  const knownWords = meta.learned || {};
  const heroClass = CLASSES.find(c => c.id === classId) || CLASSES[0];
  const talents = meta.talents || {};
  const bonusHp = (talents.vitality || 0) * 3;
  const bonusSparks = talents.sparks || 0;
  const hasPhoenixAegis = Boolean(talents.phoenix && talents.phoenix > 0);

  const startHp = heroClass.hp + bonusHp - (ascension >= 10 ? 6 : 0);
  const startSparks = Math.max(1, heroClass.sparks + bonusSparks - (ascension >= 7 ? 1 : 0));
  const startingRelics = heroClass.relic ? [{ id: heroClass.relic, edition: "standard" }] : [];
  const startPotions = heroClass.id === "scholar" ? ["elixir_reveal"] : [];

  return {
    characterClass: heroClass.id,
    ascension: ascension,
    hp: startHp, maxHp: startHp, shield: 0, level: 1, xp: 0, xpNext: 6,
    sparks: startSparks, ink: heroClass.ink, streak: 0, maxStreak: 0,
    region: 0, cycle: 0, node: 0, day: 1,
    wordsAnswered: 0, correct: 0, quest: 0, questClaimed: false,
    learned: { ...knownWords }, seen: [], relics: startingRelics,
    potions: startPotions,
    sound: true, screen: "choice", startedAt: Date.now(),
    usedRevive: !hasPhoenixAegis,
    isDaily: false
  };
}

function loadMeta() {
  const defaults = {
    totalWords: 0, bestStreak: 0, expeditions: 0, totalInk: 0, maxAscension: 0,
    learned: {}, reviews: {}, notes: {}, talents: {},
    bilingual: true, achievements: [], studyHistory: {},
    highScores: [],
    speechRate: 0.85, autoSpeak: false
  };
  try {
    const loaded = JSON.parse(localStorage.getItem(META_KEY));
    return loaded ? {
      ...defaults, ...loaded,
      learned: loaded.learned || {},
      reviews: loaded.reviews || {},
      notes: loaded.notes || {},
      talents: loaded.talents || {},
      achievements: loaded.achievements || [],
      studyHistory: loaded.studyHistory || {},
      highScores: loaded.highScores || [],
      maxAscension: typeof loaded.maxAscension === "number" ? loaded.maxAscension : 0,
      totalInk: typeof loaded.totalInk === "number" ? loaded.totalInk : 0,
      bilingual: loaded.bilingual !== undefined ? loaded.bilingual : true
    } : defaults;
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
    return { ...freshState(loaded.characterClass || "bard", loaded.ascension || 0), ...loaded };
  } catch { return null; }
}

function updateContinueButton() {
  $("#continue-button").hidden = !loadState();
  const reviewCount = getReviewWords(true).length;
  $("#practice-title-button").hidden = reviewCount === 0;
  $("#title-review-count").textContent = reviewCount;
}

function showClassSelection() {
  const isZh = loadMeta().bilingual;
  const meta = loadMeta();
  const maxAllowedAsc = meta.maxAscension || 0;
  if (chosenAscension > maxAllowedAsc) chosenAscension = maxAllowedAsc;
  const currentAsc = ASCENSION_LEVELS[chosenAscension] || ASCENSION_LEVELS[0];

  openModal(`
    <span class="modal-kicker">${isZh ? "選擇你的探索者原型與攀升挑戰" : "CHOOSE YOUR PATHFINDER & ASCENSION"}</span>
    <h2>${isZh ? "選擇職業原型" : "Select Archetype"}</h2>
    
    <div class="ascension-box">
      <div class="ascension-ctrl">
        <button id="asc-prev" class="asc-nav-btn" ${chosenAscension <= 0 ? "disabled" : ""}>◀</button>
        <div style="text-align:center;">
          <b>${isZh ? `攀升挑戰 ${chosenAscension} 階` : `Ascension ${chosenAscension}`}: ${isZh ? currentAsc.zhName : currentAsc.name}</b>
          <span class="asc-multiplier-badge">${isZh ? `得分加成 +${chosenAscension * 15}%` : `Score +${chosenAscension * 15}%`}</span>
        </div>
        <button id="asc-next" class="asc-nav-btn" ${chosenAscension >= maxAllowedAsc ? "disabled" : ""}>▶</button>
      </div>
      <p class="ascension-desc">${isZh ? currentAsc.zhDesc : currentAsc.desc}</p>
    </div>

    <p class="section-copy">${isZh ? "每個職業擁有不同的初始屬性、資源配置與專屬被動遺物。" : "Each archetype shapes your expedition with unique starting stats, resources, and passive relics."}</p>
    
    <div class="class-grid">
      ${CLASSES.map(cls => `
        <button class="class-card" data-class="${cls.id}">
          <span class="class-icon">${cls.icon}</span>
          <div class="class-info">
            <small>${isZh ? cls.zhSubtitle : cls.subtitle}</small>
            <h3>${isZh ? cls.zhName : cls.name}</h3>
            <p>${isZh ? cls.zhDesc : cls.desc}</p>
            <div class="class-stats">
              <span><b>${cls.hp - (chosenAscension >= 10 ? 6 : 0)}</b> HP</span>
              <span><b>${Math.max(1, cls.sparks - (chosenAscension >= 7 ? 1 : 0))}</b> ${isZh ? "火花" : "Sparks"}</span>
              <span><b>${cls.ink}</b> ${isZh ? "墨水" : "Ink"}</span>
            </div>
            <span class="class-quote">“${cls.quote}”</span>
          </div>
        </button>
      `).join("")}
    </div>
  `);

  $("#asc-prev")?.addEventListener("click", () => {
    if (chosenAscension > 0) {
      chosenAscension--;
      showClassSelection();
    }
  });

  $("#asc-next")?.addEventListener("click", () => {
    if (chosenAscension < maxAllowedAsc) {
      chosenAscension++;
      showClassSelection();
    }
  });

  document.querySelectorAll("[data-class]").forEach(btn => {
    btn.addEventListener("click", () => {
      $("#modal").close();
      startNewRun(btn.dataset.class);
    });
  });
}

function startNewRun(classId = "bard") {
  state = freshState(classId, chosenAscension);
  soundEnabled = true;
  const meta = loadMeta();
  meta.expeditions += 1;
  localStorage.setItem(META_KEY, JSON.stringify(meta));
  enterGame();
  showPathChoice();
}

function continueRun() {
  state = loadState() || freshState("bard");
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

function startDailyExpedition() {
  const todayStr = new Date().toISOString().slice(0, 10);
  state = freshState("cartographer");
  state.isDaily = true;
  state.dailyDate = todayStr;
  soundEnabled = true;
  const meta = loadMeta();
  meta.expeditions += 1;
  localStorage.setItem(META_KEY, JSON.stringify(meta));
  toast(`⭐ <b>Daily Expedition for ${todayStr}</b> began!`);
  enterGame();
  showPathChoice();
}

function updateHUD() {
  if (!state) return;
  const meta = loadMeta();
  const isZh = Boolean(meta.bilingual);
  const region = REGIONS[state.region % REGIONS.length];
  document.documentElement.style.setProperty("--teal", region.tone);
  $("#region-label").textContent = isZh ? (region.zhName || region.name).toUpperCase() : region.name.toUpperCase();
  $("#day-label").textContent = state.day;
  $("#floor-label").textContent = `${state.node + 1} / 5`;
  $("#level-badge").textContent = `LV. ${state.level}`;
  
  const heroClass = CLASSES.find(c => c.id === state.characterClass) || CLASSES[0];
  const titleSmall = $(".player-title small");
  const titleH2 = $(".player-title h2");
  if (titleSmall) titleSmall.textContent = isZh ? heroClass.zhSubtitle : heroClass.subtitle.toUpperCase();
  if (titleH2) titleH2.textContent = isZh ? heroClass.zhName : heroClass.name;
  
  const shieldHtml = state.shield > 0 ? ` <span class="shield-badge-hud">+${state.shield} 🛡️</span>` : "";
  $("#hp-text").innerHTML = `${state.hp} / ${state.maxHp}${shieldHtml}`;
  $("#hp-bar").style.width = `${100 * state.hp / state.maxHp}%`;
  $("#xp-text").textContent = `${state.xp} / ${state.xpNext}`;
  $("#xp-bar").style.width = `${100 * state.xp / state.xpNext}%`;
  $("#spark-count").textContent = state.sparks;
  $("#coin-count").textContent = state.ink;
  $("#streak-count").textContent = state.streak;
  $("#streak-bonus").textContent = `+${Math.min(50, state.streak * 5)}%`;
  $("#learned-count").textContent = Object.keys(state.learned).length;
  $("#review-count").textContent = getReviewWords(true).length;
  
  const badgeCount = $("#badge-count");
  if (badgeCount) badgeCount.textContent = (meta.achievements || []).length;

  const currentQuest = DAILY_QUESTS[0];
  if ($("#quest-text")) $("#quest-text").textContent = isZh ? (currentQuest?.zhText || "答對 8 個單字") : (currentQuest?.text || "Master 8 words");
  $("#quest-progress").textContent = isZh
    ? `${Math.min(state.quest, 8)} / 8 · 獎勵: ${state.questClaimed ? "已領取" : "20 墨水"}`
    : `${Math.min(state.quest, 8)} / 8 · Reward: ${state.questClaimed ? "claimed" : "20 ink"}`;
  $("#quest-bar").style.width = `${Math.min(100, state.quest / 8 * 100)}%`;
  $("#sound-toggle").textContent = soundEnabled ? "♪" : "×";
  $("#sound-toggle-title").textContent = soundEnabled ? "♪" : "×";
  renderRelics();
  renderPotions();
  updateHabitTracker();
  applyLanguageToUI();

  // Low HP visual and audio warning
  const isLowHp = state.hp > 0 && (state.hp / state.maxHp) <= 0.28;
  let vignette = $(".low-hp-vignette");
  if (isLowHp) {
    if (!vignette) {
      vignette = document.createElement("div");
      vignette.className = "low-hp-vignette";
      document.body.appendChild(vignette);
    }
    playLowHpWarning();
  } else if (vignette) {
    vignette.remove();
  }

  // Achievement milestones
  if (state.node > 0 || state.region > 0) checkAchievement("first_step");
  if (Object.keys(loadMeta().learned).length >= 25) checkAchievement("scholar_25");
  if (state.streak >= 7) checkAchievement("streak_7");
  if (state.streak >= 15) checkAchievement("streak_15");
  if (state.relics.length >= 5) checkAchievement("relic_satchel");
  if (state.cycle > 0) checkAchievement("cycle_conqueror");
  if (state.isDaily && state.node >= 4) checkAchievement("daily_devotee");
  
  saveState();
}

function updateJourneyMap() {
  if (!state) return;
  const isZh = loadMeta().bilingual;
  const map = $("#journey-map");
  map.innerHTML = "";
  const positions = [
    [22, 295], [105, 237], [30, 174], [120, 108], [50, 38]
  ];
  const labels = isZh
    ? ["遭遇野怪", "命運岔路", "精英挑戰", "未知事件", "區域領主"]
    : ["Encounter", "Crossroad", "Challenge", "Unknown", "Guardian"];
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

function hasRelic(id) {
  if (!state || !state.relics) return false;
  return state.relics.some(r => (typeof r === "string" ? r : r.id) === id);
}

function getRelicObj(id) {
  if (!state || !state.relics) return null;
  return state.relics.find(r => (typeof r === "string" ? r : r.id) === id);
}

function renderRelics() {
  const isZh = loadMeta().bilingual;
  const list = $("#relic-list");
  if (!list) return;
  if (!state.relics.length) {
    list.innerHTML = `<span class="empty-relic">${isZh ? "行囊目前空空如也" : "Your satchel is empty"}</span>`;
    return;
  }
  list.innerHTML = state.relics.map(entry => {
    const id = typeof entry === "string" ? entry : entry.id;
    const edition = typeof entry === "object" && entry.edition ? entry.edition : "standard";
    const relic = RELICS.find(item => item.id === id);
    if (!relic) return "";
    const rName = isZh ? (relic.zhName || relic.name) : relic.name;
    const rText = isZh ? (relic.zhText || relic.text) : relic.text;
    const edTag = edition === "foil" ? (isZh ? "【箔金 +6 HP】" : " [Foil: +6 Max HP]") :
                  edition === "holo" ? (isZh ? "【全息 +4 傷害】" : " [Holo: +4 Dmg]") :
                  edition === "poly" ? (isZh ? "【稜鏡 x1.35 傷害&墨水】" : " [Poly: x1.35 Mult]") :
                  edition === "corrupted" ? (isZh ? "【詛咒 +8 傷害 / 答錯 -1 HP】" : " [Curse: +8 Dmg]") : "";
    return `<span class="relic edition-${edition}" title="${rName}${edTag}: ${rText}">${relic.icon}</span>`;
  }).join("");
}

function renderPotions() {
  const isZh = loadMeta().bilingual;
  const belt = $("#potion-belt");
  if (!belt || !state) return;
  state.potions = state.potions || [];
  belt.innerHTML = [0, 1].map(slot => {
    const potId = state.potions[slot];
    if (!potId) return `<div class="potion-slot" data-slot="${slot}"><small>${isZh ? "空" : "EMPTY"}</small></div>`;
    const pot = POTIONS.find(p => p.id === potId);
    if (!pot) return `<div class="potion-slot" data-slot="${slot}"><small>${isZh ? "空" : "EMPTY"}</small></div>`;
    const pName = isZh ? pot.zhName : pot.name;
    const pDesc = isZh ? pot.zhDesc : pot.desc;
    return `
      <div class="potion-slot filled" data-slot="${slot}" title="${pName}: ${pDesc} (${isZh ? "點擊使用 / 按鍵" : "Click to use / Key"} ${slot + 1})">
        <span class="potion-icon">${pot.icon}</span>
        <small>${slot + 1}</small>
      </div>
    `;
  }).join("");

  document.querySelectorAll(".potion-slot.filled").forEach(slotEl => {
    slotEl.addEventListener("click", () => {
      usePotion(Number(slotEl.dataset.slot));
    });
  });
}

function addPotion(potionId) {
  state.potions = state.potions || [];
  if (state.potions.length < 2) {
    state.potions.push(potionId);
    const pot = POTIONS.find(p => p.id === potionId);
    const isZh = loadMeta().bilingual;
    toast(isZh ? `獲得藥水：<b>${pot.zhName}</b>！` : `Acquired <b>${pot.name}</b>!`);
    updateHUD();
    return true;
  }
  toast(loadMeta().bilingual ? "魔藥腰帶已滿 (最多攜帶 2 瓶)" : "Potion satchel is full (Max 2)!");
  return false;
}

function usePotion(slot) {
  if (!state || !state.potions || !state.potions[slot]) return;
  const potId = state.potions[slot];
  const pot = POTIONS.find(p => p.id === potId);
  const isZh = loadMeta().bilingual;
  const hasSatchel = hasRelic("potion_satchel");
  const mult = hasSatchel ? 1.3 : 1.0;

  state.potions.splice(slot, 1);
  tone(520, .1); setTimeout(() => tone(780, .15), 80);

  if (potId === "elixir_reveal") {
    if (state.screen === "battle" && battle && battle.question) {
      const correctVal = battle.question.correctValue;
      const wrongBtns = [...document.querySelectorAll(".answer-button:not(.faded)")].filter(b => b.dataset.answer !== correctVal);
      shuffle(wrongBtns).slice(0, Math.round(2 * mult)).forEach(b => {
        b.classList.add("faded");
        b.disabled = true;
      });
      toast(isZh ? "🧪 <b>顯影靈藥：</b> 排除錯誤選項！" : "🧪 <b>Elixir of Revelation:</b> Removed incorrect options!");
    } else {
      toast(isZh ? "只能在戰鬥作答時使用此靈藥。" : "Can only be used during battle!");
      state.potions.splice(slot, 0, potId);
      return;
    }
  } else if (potId === "potion_freeze") {
    if (battle) {
      battle.freezeCrit = true;
      toast(isZh ? "⏳ <b>靜時秘劑：</b> 下一題必觸發急速爆擊！" : "⏳ <b>Chrono Draught:</b> Next answer guaranteed Quick Wit Crit!");
    }
  } else if (potId === "draught_vitality") {
    const healAmt = Math.round(18 * mult);
    heal(healAmt);
    toast(isZh ? `💖 <b>活力神泉：</b> 恢復 ${healAmt} 點意志生命！` : `💖 <b>Vital Tonic:</b> Restored ${healAmt} Resolve!`);
  } else if (potId === "scroll_reroll") {
    if (state.screen === "battle") {
      renderQuestion();
      toast(isZh ? "📜 <b>換詞卷軸：</b> 題目已重抽！" : "📜 <b>Transmute Scroll:</b> Word rerolled!");
    } else {
      toast(isZh ? "只能在戰鬥作答時使用此卷軸。" : "Can only be used in combat!");
      state.potions.splice(slot, 0, potId);
      return;
    }
  } else if (potId === "potion_midas") {
    const inkAmt = Math.round(32 * mult);
    state.ink += inkAmt;
    toast(isZh ? `◈ <b>邁達斯墨水：</b> 獲得 +${inkAmt} 墨水！` : `◈ <b>Midas Phial:</b> Gained +${inkAmt} Ink!`);
  } else if (potId === "rune_shield") {
    const shieldAmt = Math.round(14 * mult);
    state.shield = (state.shield || 0) + shieldAmt;
    toast(isZh ? `🛡️ <b>護盾符文：</b> 獲得 ${shieldAmt} 點護盾！` : `🛡️ <b>Rune of Aegis:</b> +${shieldAmt} Shield!`);
  }
  updateHUD();
}

function showPathChoice() {
  state.screen = "choice";
  updateHUD();
  updateJourneyMap();
  const isZh = loadMeta().bilingual;

  if (state.node >= 4) {
    $("#stage").innerHTML = `
      <div class="choice-stage">
        <span class="section-kicker">${isZh ? "守護領主阻擋前路" : "THE PATH NARROWS"}</span>
        <h1>${isZh ? "區域守護領主現身！" : "A guardian waits."}</h1>
        <p class="section-copy">${isZh ? "此處的詞彙擁有強大的守護力量。擊敗領主以跨入下一個詞彙領域。" : "The words here have teeth. Defeat the guardian to cross into the next realm."}</p>
        <div class="path-choices">
          <button class="path-card elite" data-path="boss">
            <span class="risk">${isZh ? "領主戰" : "BOSS"}</span><span class="path-icon">♜</span><small>${isZh ? "區域決戰" : "REGION FINALE"}</small>
            <h3>${ENEMIES.boss[state.region % ENEMIES.boss.length][0]}</h3>
            <p>${isZh ? "高血量與強力意圖戰鬥，提供高階稀有遺物與大量墨水獎勵。" : "A longer battle with rare rewards and harder vocabulary."}</p>
          </button>
        </div>
      </div>`;
  } else {
    const pool = state.node === 0
      ? ["normal", "normal", "mystery"]
      : state.node === 2
        ? ["normal", "shop", "alchemy", "riddle"]
        : state.node === 3
          ? ["elite", "rest", "shop", "mystery"]
          : ["normal", "elite", "rest", "mystery"];
    let types = shuffle(pool).slice(0, 3);
    while (types.length < 3) types.push("normal");
    const details = isZh ? {
      normal: ["✦", "遭遇野怪 (Wandering Words)", "進行常規單字對決，磨練字彙直覺。", "遭遇 ENCOUNTER"],
      elite: ["♞", "精英挑戰 (Elite Road)", "強敵遭遇 · 更高機率掉落稀有遺物。", "精英 ELITE"],
      rest: ["♨", "靜謐營火 (Quiet Clearing)", "休息恢復意志生命，或獲取額外火花。", "營火 REST"],
      mystery: ["?", "未知的岔路 (Unwritten Turn)", "充滿驚喜或考驗的隨機事件。", "未知 UNKNOWN"],
      shop: ["◈", "字彙黑市 (Lexicon Bazaar)", "消耗墨水購買遺物、藥劑與火花水晶。", "商人 MERCHANT"],
      riddle: ["🧩", "字謎寶箱 (Riddler's Chest)", "重組字母古文，直接解鎖寶箱遺物。", "小遊戲 PUZZLE"],
      alchemy: ["🔮", "字根煉金祭壇 (Alchemy Shrine)", "辨識古老字根，獲取永久屬性祝福。", "祭壇 SHRINE"]
    } : {
      normal: ["✦", "Wandering Words", "A balanced vocabulary battle.", "ENCOUNTER"],
      elite: ["♞", "The Difficult Road", "Harder foe · stronger relic chance.", "ELITE"],
      rest: ["♨", "A Quiet Clearing", "Restore resolve or sharpen your mind.", "REST"],
      mystery: ["?", "An Unwritten Turn", "A curious event with uncertain rewards.", "UNKNOWN"],
      shop: ["◈", "Lexicon Bazaar", "Exchange ink for relics, potions, and power.", "MERCHANT"],
      riddle: ["🧩", "The Riddler's Chest", "Unscramble runes to unlock relic treasures.", "MINI-GAME"],
      alchemy: ["🔮", "Word Alchemy Shrine", "Identify root meanings for permanent blessings.", "SHRINE"]
    };
    $("#stage").innerHTML = `
      <div class="choice-stage">
        <span class="section-kicker">${isZh ? "選擇你的前進方向" : "CHOOSE YOUR NEXT PAGE"}</span>
        <h1>${isZh ? "道路分岔" : "The road divides."}</h1>
        <p class="section-copy">${isZh ? "每一條路線都將改變你的冒險。構築遺物、黑市交易、解開古代字謎或迎戰強敵。" : "Each route changes your expedition. Build for survival, trade ink with merchants, solve ancient riddles, or face dangerous guardians."}</p>
        <div class="path-choices">
          ${types.map(type => {
            const d = details[type];
            return `<button class="path-card ${type}" data-path="${type}">
              ${type === "elite" ? `<span class="risk">${isZh ? "危險" : "RISKY"}</span>` : type === "shop" ? `<span class="risk safe">${isZh ? "商店" : "SHOP"}</span>` : ""}
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
  if (type === "shop") showShop();
  if (type === "riddle") showAnagramChest();
  if (type === "alchemy") showAlchemyShrine();
}

function startBattle(type) {
  const meta = loadMeta();
  const talents = meta.talents || {};
  const asc = state.ascension || 0;
  const scaling = state.cycle * 6 + state.region * 2 + state.node;
  let maxHp = type === "boss" ? 60 + scaling * 4 : type === "elite" ? 42 + scaling * 3 : 30 + scaling * 2;
  
  if (asc >= 1 && type === "elite") maxHp = Math.round(maxHp * 1.2);
  if (asc >= 6 && type === "boss") maxHp = Math.round(maxHp * 1.3);
  if (asc >= 15 && type === "boss") maxHp = Math.round(maxHp * 1.5);
  if (asc >= 19) maxHp = Math.round(maxHp * 1.2);

  const enemy = type === "boss" ? ENEMIES.boss[state.region % ENEMIES.boss.length] : random(ENEMIES[type]);
  
  // Dynamic enemy traits
  const traitPool = type === "boss"
    ? ["armored", "heavy"]
    : type === "elite"
      ? shuffle(["armored", "siphoner", "heavy", "swift"])[0]
      : Math.random() < 0.45 ? random(["armored", "siphoner", "drainer", "swift"]) : "none";

  let initialShield = traitPool === "armored" ? (type === "boss" ? 24 + scaling : type === "elite" ? 16 + scaling : 10) : 0;
  if (asc >= 19) initialShield += 12;

  // Boss Blind roll
  let bossBlind = null;
  if (type === "boss") {
    bossBlind = random(BOSS_BLINDS);
    if (bossBlind.id === "armored") initialShield += 25;
  }
  
  let baseDamage = type === "boss" ? 10 + state.cycle * 2 : type === "elite" ? 8 + state.cycle : 6 + Math.floor(state.cycle / 2);
  if (asc >= 2) baseDamage += 1;
  if (asc >= 11) baseDamage += Math.floor(state.region / 2) + 1;

  // Player starting shield
  const talentShield = (talents.shield_wall || 0) * 3;
  const relicShield = hasRelic("aegis_tome") ? 6 : 0;
  state.shield = (state.shield || 0) + talentShield + relicShield;

  battle = {
    type, name: enemy[0], kind: enemy[1], hp: maxHp, maxHp,
    shield: initialShield, maxShield: initialShield,
    trait: traitPool,
    bossBlind: bossBlind,
    damage: baseDamage,
    turn: 0, blocked: false, first: true, locked: false, current: null, usedWords: [],
    currentIntent: null, startTime: Date.now(),
    freezeCrit: false
  };
  
  if (hasRelic("crown")) state.sparks += 1;
  state.screen = "battle";
  $("#stage").innerHTML = $("#battle-template").innerHTML;
  $("#encounter-type").textContent = type === "boss" ? "REGION GUARDIAN" : type === "elite" ? "ELITE ENCOUNTER" : "WILD ENCOUNTER";
  $("#enemy-name").textContent = battle.name;
  $("#enemy-kind").textContent = battle.kind;
  
  const traitBadge = $("#enemy-trait");
  if (traitBadge) {
    if (battle.trait && battle.trait !== "none") {
      traitBadge.hidden = false;
      const traitLabels = {
        armored: "🛡️ ARMORED",
        heavy: "💥 HEAVY HITTER",
        siphoner: "✦ SIPHONER",
        drainer: "◈ INK THIEF",
        swift: "⚡ SWIFT"
      };
      traitBadge.textContent = traitLabels[battle.trait] || battle.trait.toUpperCase();
      traitBadge.className = `enemy-trait-badge trait-${battle.trait}`;
    } else {
      traitBadge.hidden = true;
    }
  }

  // Render Boss Blind Alert if present
  if (battle.bossBlind) {
    const isZh = loadMeta().bilingual;
    const alertBox = document.createElement("div");
    alertBox.className = "boss-blind-alert";
    alertBox.innerHTML = `<span>⚠️ <b>${isZh ? `領主限制：${battle.bossBlind.zhName}` : `Boss Blind: ${battle.bossBlind.name}`}</b> — ${isZh ? battle.bossBlind.zhDesc : battle.bossBlind.desc}</span>`;
    $(".battle-stage")?.prepend(alertBox);
  }
  
  updateEnemyShieldUI();
  $("#enemy-art").classList.add(type);
  if (type === "boss") {
    showBossIntro(battle.name, REGIONS[state.region % REGIONS.length].name);
  }
  $("#speak-button").addEventListener("click", speakCurrentWord);
  $("#hint-button").addEventListener("click", useHint);
  $("#skip-button").addEventListener("click", swapWord);
  renderQuestion();
  updateHUD();
}

function updateEnemyShieldUI() {
  const shieldLabel = $("#enemy-shield-label");
  const shieldBar = $("#enemy-shield-bar");
  const shieldNum = $("#enemy-shield-num");
  if (!shieldLabel || !shieldBar) return;
  if (battle && battle.shield > 0) {
    shieldLabel.hidden = false;
    if (shieldNum) shieldNum.textContent = battle.shield;
    const ratio = battle.maxShield ? (battle.shield / battle.maxShield * 100) : 0;
    shieldBar.style.width = `${ratio}%`;
  } else {
    shieldLabel.hidden = true;
    shieldBar.style.width = "0%";
  }
}

function getWord() {
  const regionWords = REGIONS[state.region % REGIONS.length].words;
  const allWords = REGIONS.flatMap(region => region.words);
  const reviewRecords = loadMeta().reviews;
  const dueReviews = allWords.filter(word => {
    const review = reviewRecords[word.word];
    return review && review.dueAt <= Date.now() && !battle.usedWords.includes(word.word);
  });
  let available = regionWords.filter(word => !battle.usedWords.includes(word.word));
  if (!available.length) { battle.usedWords = []; available = regionWords; }
  const unseen = available.filter(word => !state.seen.includes(word.word));
  const reviewWord = dueReviews.length
    ? shuffle(dueReviews).sort((a, b) => reviewRecords[b.word].misses - reviewRecords[a.word].misses)[0]
    : null;
  const word = reviewWord && Math.random() < .6 ? reviewWord : random(unseen.length ? unseen : available);
  battle.usedWords.push(word.word);
  if (!state.seen.includes(word.word)) state.seen.push(word.word);
  if (state.seen.length > 45) state.seen.shift();
  return word;
}

function renderQuestion() {
  battle.locked = false;
  battle.turn += 1;
  battle.startTime = Date.now();
  battle.current = getWord();
  $("#enemy-art").classList.remove("hurt", "attack");
  const word = battle.current;
  const regionWords = REGIONS[state.region % REGIONS.length].words;
  const isZh = loadMeta().bilingual;
  
  // Question Archetype selection: Ensure question and answer are never identical
  let mode = "definition";
  if (battle.bossBlind && battle.bossBlind.id === "cloze_only") {
    mode = "cloze";
  } else if (battle.turn > 1) {
    const roll = Math.random();
    if (roll < 0.35 && word.synonym && word.synonym !== word.word) mode = "synonym";
    else if (roll < 0.70) mode = "cloze";
    else mode = "definition";
  }

  let property = "definition";
  let promptText = isZh ? "選擇最符合的英文釋義 (Choose the closest meaning)" : "Choose the closest meaning";
  let correctVal = word.definition;
  let distractors = [];

  if (mode === "synonym" && word.synonym && word.synonym !== word.word) {
    property = "synonym";
    promptText = isZh ? "選擇最相近的英文同義詞 (Closest Synonym)" : "Choose the closest synonym";
    correctVal = word.synonym;
    distractors = shuffle(regionWords.filter(w => w.word !== word.word && w.synonym && w.synonym !== word.synonym))
      .slice(0, 3)
      .map(w => w.synonym);
    if (distractors.length < 3) {
      mode = "definition";
      property = "definition";
      promptText = isZh ? "選擇最符合的英文釋義 (Choose the closest meaning)" : "Choose the closest meaning";
      correctVal = word.definition;
      distractors = shuffle(regionWords.filter(w => w.word !== word.word)).slice(0, 3).map(w => w.definition);
    }
  } else if (mode === "cloze") {
    property = "word";
    promptText = makeCloze(word);
    correctVal = word.word;
    distractors = shuffle(regionWords.filter(w => w.word !== word.word)).slice(0, 3).map(w => w.word);
  } else {
    mode = "definition";
    property = "definition";
    promptText = isZh ? "選擇最符合的英文釋義 (Choose the closest meaning)" : "Choose the closest meaning";
    correctVal = word.definition;
    distractors = shuffle(regionWords.filter(w => w.word !== word.word)).slice(0, 3).map(w => w.definition);
  }

  const answerItems = shuffle([
    { text: correctVal, isCorrect: true, zh: word.zh },
    ...distractors.map(dText => {
      const matchW = regionWords.find(rw => rw.definition === dText || rw.word === dText || rw.synonym === dText);
      return { text: dText, isCorrect: false, zh: matchW ? matchW.zh : "" };
    })
  ]);

  battle.question = { mode, property, correctValue: correctVal };

  // Calculate Enemy Intent for this turn
  let intent;
  if (battle.trait === "heavy" && battle.turn % 3 === 0) {
    const heavyDmg = Math.round(battle.damage * 1.7);
    intent = { type: "heavy", label: `💥 ${heavyDmg} Slam`, damage: heavyDmg, desc: "Heavy strike charging!" };
  } else if (battle.trait === "siphoner" && Math.random() < 0.4) {
    intent = { type: "siphon", label: `✦ Siphon +${Math.max(4, battle.damage - 2)}`, damage: Math.max(4, battle.damage - 2), siphon: (state.ascension >= 8 ? 2 : 1), desc: "Will steal sparks on hit" };
  } else if (battle.trait === "drainer" && Math.random() < 0.4) {
    intent = { type: "drain", label: `◈ Leech +${Math.max(4, battle.damage - 2)}`, damage: Math.max(4, battle.damage - 2), drain: 6, desc: "Will drain 6 ink on hit" };
  } else if (battle.trait === "armored" && battle.shield <= 0 && Math.random() < 0.35) {
    intent = { type: "shield", label: "🛡️ Fortify (+8)", damage: 3, shieldGain: 8, desc: "Gains shield and attacks" };
  } else {
    intent = { type: "attack", label: `⚔ ${battle.damage} Strike`, damage: battle.damage, desc: "Standard attack" };
  }
  battle.currentIntent = intent;

  $("#word-progress").textContent = `WORD ${battle.turn} · ${battle.hp} HP LEFT`;
  $("#difficulty-tag").textContent = `${battle.type === "boss" ? "GUARDIAN" : battle.type === "elite" ? "RARE" : "COMMON"} · ${word.level}`;
  $("#challenge-word").textContent = mode === "cloze" ? (isZh ? "句中缺少一個關鍵單字" : "A word is missing") : word.word;
  $("#pronunciation").textContent = mode === "cloze"
    ? (isZh ? `依語境選擇最適當的單字 · ${word.pos || ""}` : `Use the sentence to find it · ${word.pos || ""}`)
    : `${word.phonetic} · ${word.pos || "word"}`;
  $("#challenge-prompt").textContent = promptText;

  const intentEl = $("#enemy-intent");
  if (intentEl) {
    intentEl.textContent = intent.label;
    intentEl.className = `enemy-intent intent-${intent.type}`;
    intentEl.title = intent.desc;
  }

  $("#enemy-hp-bar").style.width = `${100 * battle.hp / battle.maxHp}%`;
  updateEnemyShieldUI();
  $("#clue-box").hidden = true;
  if (hasRelic("magnifier") && word.root) {
    $("#clue-box").hidden = false;
    $("#clue-box").innerHTML = `<b>Origin Note (Etymology Glass):</b> ${word.root}`;
  }
  $("#feedback-panel").hidden = true;
  $("#combo-display").hidden = state.streak < 2;
  if (state.streak >= 2) $("#combo-display b").textContent = `×${Math.min(5, 1 + Math.floor(state.streak / 2))}`;
  
  $("#answer-grid").innerHTML = answerItems.map((item, index) => {
    const val = item.text;
    return `
      <button class="answer-button" data-answer="${escapeAttribute(val)}" data-correct="${item.isCorrect}">
        <span class="answer-key">${String.fromCharCode(65 + index)}</span>
        <div class="answer-content">
          <span class="answer-main">${val}</span>
        </div>
      </button>
    `;
  }).join("");

  // Boss Blind: The Blindfold (veiled for 1.2s)
  if (battle.bossBlind && battle.bossBlind.id === "blindfold") {
    const grid = $("#answer-grid");
    grid.style.opacity = "0.08";
    grid.style.filter = "blur(6px)";
    setTimeout(() => {
      grid.style.transition = "opacity .3s ease, filter .3s ease";
      grid.style.opacity = "1";
      grid.style.filter = "none";
    }, 1200);
  }

  document.querySelectorAll(".answer-button").forEach(button => {
    button.addEventListener("click", () => answerQuestion(button, button.dataset.correct === "true", mode));
  });
  updateHUD();
}

function escapeAttribute(text) {
  return String(text).replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

function makeCloze(word) {
  const exact = new RegExp(`\\b${word.word}\\b`, "i");
  if (exact.test(word.sentence)) return word.sentence.replace(exact, "________");
  const stemLength = Math.max(4, word.word.length - 2);
  const stem = word.word.slice(0, stemLength);
  const inflected = new RegExp(`\\b${stem}[a-z]*\\b`, "i");
  if (inflected.test(word.sentence)) return word.sentence.replace(inflected, "________");
  return `________ — ${word.clue}`;
}

function answerQuestion(button, correct, mode) {
  if (battle.locked) return;
  battle.locked = true;
  const elapsedSec = (Date.now() - battle.startTime) / 1000;
  const word = battle.current;
  const meta = loadMeta();
  const talents = meta.talents || {};
  const buttons = [...document.querySelectorAll(".answer-button")];
  buttons.forEach(item => item.disabled = true);
  state.wordsAnswered += 1;
  
  if (correct) {
    button.classList.add("correct");
    const btnBox = button.getBoundingClientRect();
    spawnParticles(btnBox.left + btnBox.width / 2, btnBox.top + btnBox.height / 2, "#e3ac46", 14);

    state.correct += 1;
    state.streak += 1;
    state.maxStreak = Math.max(state.maxStreak, state.streak);
    state.quest += 1;
    state.learned[word.word] = (state.learned[word.word] || 0) + 1;
    updateReviewRecord(word.word, true, "good");
    gainXp(1 + (talents.scholar_prodigy || 0));
    
    // Base damage + Talents + Relics
    let damage = 10 + (talents.sharp_edge || 0) * 2 + Math.min(8, state.streak) + (hasRelic("echo") ? 3 : 0) + (battle.first && hasRelic("needle") ? 6 : 0);
    if (state.streak >= 5) damage += 4;
    
    // Conductor's Baton synergy (+2 per streak)
    if (hasRelic("rhythm_baton")) damage += state.streak * 2;

    // Tree of Babel (+9 if Latin/Greek root)
    if (hasRelic("tree_babel") && word.root) {
      damage += 9;
      gainXp(1);
    }
    
    // Etymology blessing talent
    if (talents.rune_resonance && word.root) {
      damage = Math.round(damage * (1 + talents.rune_resonance * 0.15));
    }

    // Midas Well synergy (every 20 ink held = +1 damage)
    if (hasRelic("midas_well")) {
      damage += Math.floor(state.ink / 20);
    }

    // Sonic Resonator (+8 if under 2.0s)
    if (hasRelic("sonic_bell") && elapsedSec <= 2.0) {
      damage += 8;
      showFloatingBanner("🔔 SONIC BURST! +8", "quickwit");
    }

    // Relic Editions flat / multiplier bonus
    state.relics.forEach(r => {
      const ed = typeof r === "object" ? r.edition : "standard";
      if (ed === "holo") damage += 4;
      if (ed === "corrupted") damage += 8;
      if (ed === "poly") damage = Math.round(damage * 1.35);
    });

    // Quick Wit Bonus
    const reflexExt = (talents.reflex || 0) * 0.4 - (state.ascension >= 4 ? 0.5 : 0) - (state.ascension >= 17 ? 0.5 : 0);
    const reflexThreshold = (hasRelic("hourglass") ? 5.2 : 3.8) + reflexExt;
    let isQuickWit = false;
    if (elapsedSec <= reflexThreshold || battle.freezeCrit) {
      isQuickWit = true;
      battle.freezeCrit = false;
      const critMultiplier = hasRelic("lightning_quill") ? 2.5 : 1.5;
      damage = Math.round(damage * critMultiplier);
      state.ink += (hasRelic("hourglass") ? 4 : 2);
      triggerScreenShake("sm");
      showFloatingBanner("⚡ QUICK WIT CRIT!", "quickwit");
    }

    // Precision Metronome (Every 5th streak: +15 burst damage + heal 3 HP)
    if (hasRelic("metronome") && state.streak > 0 && state.streak % 5 === 0) {
      damage += 15;
      heal(3, false);
      showFloatingBanner("🎼 METRONOME SURGE! +15", "combo");
    }

    if (state.streak >= 4 && state.streak % 2 === 0) {
      triggerScreenShake("lg");
      showFloatingBanner(`🔥 COMBO ×${state.streak}!`, "combo");
    }
    
    // Horn of Resonance (+35% vs Boss/Elite)
    if ((battle.type === "boss" || battle.type === "elite") && hasRelic("horn")) {
      damage = Math.round(damage * 1.35);
    }
    
    // Alchemist Crucible (+1 ink per letter)
    if (hasRelic("alembic")) {
      const letters = word.word.replace(/[^a-zA-Z]/g, "").length;
      state.ink += letters;
    }
    
    // Ring of Fluency (+1 spark on streak)
    if (hasRelic("ring") && state.streak >= 4 && state.streak % 4 === 0) {
      state.sparks = Math.min(9, state.sparks + 1);
      toast("💍 <b>Ring of Fluency:</b> +1 Spark on streak!");
    }
    
    // Enemy Shield absorption logic
    if (battle.shield > 0) {
      if (battle.shield >= damage) {
        battle.shield -= damage;
        showDamage(`SHIELD −${damage}`, false);
      } else {
        const leftover = damage - battle.shield;
        battle.shield = 0;
        battle.hp = Math.max(0, battle.hp - leftover);
        showDamage(`BREAK! −${leftover}`, false);
        showFloatingBanner("🛡️ SHIELD BROKEN!", "break");
      }
    } else {
      battle.hp = Math.max(0, battle.hp - damage);
      showDamage(damage, false);
    }
    
    $("#enemy-hp-bar").style.width = `${100 * battle.hp / battle.maxHp}%`;
    updateEnemyShieldUI();
    $("#enemy-art").classList.add("hurt");
    
    playHitSound(damage > 18, isQuickWit);
    playStreakChord(state.streak);
    const isZh = loadMeta().bilingual;
    const feedbackHeader = isQuickWit ? (isZh ? "⚡ 急速直覺！" : "⚡ Quick Wit!") : (isZh ? "完全正確！" : "Exactly.");
    
    let nextTimeout = null;
    function advanceNext() {
      if (nextTimeout) { clearTimeout(nextTimeout); nextTimeout = null; }
      battle.locked = false;
      if (battle.hp <= 0) winBattle();
      else renderQuestion();
    }

    const feedbackHtml = `
      <div class="feedback-correct-wrapper">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;gap:8px;flex-wrap:wrap;">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-weight:700;color:var(--teal);"><b>${feedbackHeader}</b></span>
            <button id="add-to-study-btn" class="button button-ghost" style="padding:3px 9px;font-size:9px;border-color:var(--coral);color:var(--coral-dark);" title="${isZh ? '雖然答對但還想多複習？點擊加入待加強單字清單 (快捷鍵 R)' : 'Guessed right but want to practice? Add to study list (Hotkey R)'}">
              ${isZh ? "📌 標記為待加強 (R)" : "📌 Mark to Study (R)"}
            </button>
          </div>
          <button id="next-question-btn" class="button button-primary" style="padding:4px 12px;font-size:9.5px;">
            ${isZh ? "下一題 ➔ (Space)" : "Next ➔ (Space)"}
          </button>
        </div>
        ${wordMemoryMap(word)}
      </div>
    `;
    showFeedback(true, feedbackHtml);
    $("#next-question-btn")?.addEventListener("click", advanceNext);

    $("#add-to-study-btn")?.addEventListener("click", () => {
      if (nextTimeout) { clearTimeout(nextTimeout); nextTimeout = null; }
      updateReviewRecord(word.word, false);
      const btn = $("#add-to-study-btn");
      if (btn) {
        btn.textContent = isZh ? "✅ 已加入待加強清單" : "✅ In Study List";
        btn.style.borderColor = "var(--teal)";
        btn.style.color = "var(--teal-dark)";
        btn.style.background = "rgba(47,122,114,0.12)";
        btn.disabled = true;
      }
      toast(isZh ? `📌 已將 <b>${word.word}</b> 加入待加強複習清單！` : `📌 Marked <b>${word.word}</b> for future study!`);
      tone(480, 0.08); setTimeout(() => tone(620, 0.12), 80);
      updateHUD();
    });
    
    if (hasRelic("ember") && state.streak % 3 === 0) heal(2, false);
    handleQuest();
    battle.first = false;
    updateMeta();
    updateHUD();
    nextTimeout = setTimeout(advanceNext, 3800);
  } else {
    button.classList.add("wrong");
    triggerScreenShake("lg");
    const portrait = $(".portrait-wrap");
    if (portrait) {
      const pBox = portrait.getBoundingClientRect();
      spawnParticles(pBox.left + pBox.width / 2, pBox.top + pBox.height / 2, "#e75b49", 12);
    }
    const correctBtn = buttons.find(item => item.dataset.correct === "true");
    if (correctBtn) correctBtn.classList.add("correct");

    // Unbroken cord prevents streak break once
    if (hasRelic("unbroken_cord") && !state.usedCord && state.streak >= 3) {
      state.usedCord = true;
      toast("🎗️ <b>Cord of Continuity:</b> Streak preserved from rupture!");
    } else {
      state.streak = 0;
      if (state.ascension >= 13) {
        state.hp = Math.max(0, state.hp - 2);
        toast("⚠️ <b>Ascension 13 (Strict Grasp):</b> Lost 2 Resolve on streak break!");
      }
    }

    const protectedHit = hasRelic("shield") && !battle.blocked;
    const intent = battle.currentIntent || { damage: battle.damage };
    let incomingDamage = intent.damage;
    if (hasRelic("iron_will") && (battle.type === "boss" || battle.type === "elite")) {
      incomingDamage = Math.round(incomingDamage * 0.65);
    }

    // Corrupted relic penalty (-1 HP on wrong)
    const corruptedCount = state.relics.filter(r => typeof r === "object" && r.edition === "corrupted").length;
    incomingDamage += corruptedCount;
    
    if (protectedHit) {
      battle.blocked = true;
    } else {
      // Player Shield absorbs incoming damage first
      if (state.shield > 0) {
        if (state.shield >= incomingDamage) {
          state.shield -= incomingDamage;
          showDamage(`BLOCK −${incomingDamage}`, true);
          incomingDamage = 0;
        } else {
          const leftover = incomingDamage - state.shield;
          state.shield = 0;
          state.hp = Math.max(0, state.hp - leftover);
          showDamage(leftover, true);
        }
      } else {
        state.hp = Math.max(0, state.hp - incomingDamage);
        showDamage(incomingDamage, true);
      }

      if (hasRelic("mirror")) {
        gainXp(1);
        toast("🪞 <b>Oracle's Mirror:</b> Gained +1 Insight from adversity.");
      }
      if (intent.siphon && state.sparks > 0) {
        state.sparks -= (state.ascension >= 8 ? 2 : 1);
        toast("✦ <b>Spark Siphoned by enemy!</b>");
      }
      if (intent.drain && state.ink > 0) {
        const lost = Math.min(6, state.ink);
        state.ink -= lost;
        toast(`◈ <b>Enemy leeched ${lost} Ink!</b>`);
      }
      if (intent.shieldGain) {
        battle.shield = (battle.shield || 0) + intent.shieldGain;
        battle.maxShield = Math.max(battle.maxShield, battle.shield);
        updateEnemyShieldUI();
      }
      
      // Phoenix feather revive
      if (state.hp <= 0 && hasRelic("feather") && !state.usedRevive) {
        state.usedRevive = true;
        state.hp = 25;
        toast("🪶 <b>Phoenix Feather shattered!</b> Restored 25 Resolve.");
        showDamage("REVIVE", true);
        tone(600, .15); setTimeout(() => tone(880, .25), 100);
      }
    }
    
    updateReviewRecord(word.word, false);
    $("#enemy-art").classList.add("attack");
    document.body.insertAdjacentHTML("beforeend", '<span class="screen-flash"></span>');
    setTimeout(() => $(".screen-flash")?.remove(), 400);
    const correctValue = battle.question.correctValue;
    const isZh = loadMeta().bilingual;
    const feedbackHtml = `
      <div class="feedback-wrong-wrapper">
        <p style="margin:0 0 8px;font-weight:700;color:var(--coral-dark);">
          ${protectedHit 
            ? (isZh ? `<b>堅毅石抵擋了攻擊！</b> 正確解答為「${correctValue}」` : `<b>Patient Stone blocked the blow.</b> The answer was “${correctValue}.”`) 
            : (isZh ? `<b>答錯了，請仔細複習單字釋義：</b>` : `<b>Not quite. Study the meaning below:</b>`)}
        </p>
        ${wordMemoryMap(word)}
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;flex-wrap:wrap;gap:8px;">
          <small style="color:var(--ink-soft);">${isZh ? "已收錄至待加強複習清單 · 支援按 Space / Enter 繼續" : "Added to Words to Revisit · Press Space / Enter to continue"}</small>
          <button id="continue-battle-btn" class="button button-primary" style="padding:7px 16px;font-size:11px;">
            ${isZh ? "繼續前進 ➔" : "Keep going ➔"}
          </button>
        </div>
      </div>
    `;
    showFeedback(false, feedbackHtml);
    battle.first = false;
    updateHUD();

    $("#continue-battle-btn")?.addEventListener("click", () => {
      battle.locked = false;
      if (state.hp <= 0) showGameOver();
      else renderQuestion();
    });
  }
}

function showFeedback(correct, html) {
  const panel = $("#feedback-panel");
  panel.hidden = false;
  panel.classList.toggle("wrong", !correct);
  panel.innerHTML = html;
}

function wordMemoryMap(word) {
  const meta = loadMeta();
  const showZh = meta.bilingual && word.zh;
  const rootInfo = word.root ? `<span><small>ROOT / ORIGIN</small><em>${word.root}</em></span>` : "";
  const zhInfo = showZh ? `<span class="memory-zh"><small>CHINESE 釋義</small><b>${word.zh}</b></span>` : "";
  return `<span class="mini-memory-map">
    <span><small>MEANING (${word.pos || "word"})</small>${word.definition}</span>
    ${zhInfo}
    <span><small>NEAR WORD</small>${word.synonym}</span>
    <span><small>IN CONTEXT</small><i>${word.sentence}</i></span>
    ${rootInfo}
  </span>`;
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

function triggerScreenShake(intensity = "sm") {
  const el = $("#stage") || document.body;
  const cls = intensity === "lg" ? "shake-lg" : "shake-sm";
  el.classList.add(cls);
  setTimeout(() => el.classList.remove(cls), 360);
}

function spawnParticles(x, y, color = "#e3ac46", count = 12) {
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "spark-particle";
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    p.style.backgroundColor = color;
    const angle = Math.random() * Math.PI * 2;
    const dist = 25 + Math.random() * 55;
    p.style.setProperty("--tx", `${Math.cos(angle) * dist}px`);
    p.style.setProperty("--ty", `${Math.sin(angle) * dist}px`);
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 650);
  }
}

function showFloatingBanner(text, type = "quickwit") {
  const banner = document.createElement("div");
  banner.className = `floating-callout callout-${type}`;
  banner.innerHTML = text;
  document.body.appendChild(banner);
  setTimeout(() => banner.remove(), 1100);
}

function showBossIntro(bossName, regionName) {
  const intro = document.createElement("div");
  intro.className = "boss-intro-banner";
  intro.innerHTML = `
    <div class="boss-intro-content">
      <span class="boss-intro-kicker">⚔️ REGION GUARDIAN ⚔️</span>
      <h2>${bossName}</h2>
      <p>Guardian of ${regionName}</p>
    </div>
  `;
  document.body.appendChild(intro);
  playChestFanfare();
  setTimeout(() => intro.remove(), 1800);
}

function useHint() {
  if (battle.locked || state.sparks < 1) { toast("You need a spark to reveal a clue."); return; }
  state.sparks -= 1;
  $("#clue-box").hidden = false;
  $("#clue-box").innerHTML = `<b>Clue:</b> ${battle.current.clue}`;
  const wrongButtons = shuffle([...document.querySelectorAll(".answer-button")].filter(button => button.dataset.answer !== battle.question.correctValue));
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
  if (battle?.current) speakWord(battle.current.word);
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
    playLevelUpChime();
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

function updateReviewRecord(word, correct, rating = "good") {
  const meta = loadMeta();
  const previous = meta.reviews[word];
  const review = previous || { misses: 0, successes: 0, strength: 0, dueAt: 0, lastSeen: 0, mastered: false };
  review.lastSeen = Date.now();
  if (correct) {
    review.successes += 1;
    const growth = rating === "easy" ? 2 : rating === "hard" ? 0 : 1;
    review.strength = Math.min(5, Math.max(1, review.strength + growth));
    const intervals = {
      hard: [0, 5 * 60 * 1000, 4 * 60 * 60 * 1000, 12 * 60 * 60 * 1000, 24 * 60 * 60 * 1000, 3 * 24 * 60 * 60 * 1000],
      good: [0, 10 * 60 * 1000, 24 * 60 * 60 * 1000, 3 * 24 * 60 * 60 * 1000, 7 * 24 * 60 * 60 * 1000, 21 * 24 * 60 * 60 * 1000],
      easy: [0, 24 * 60 * 60 * 1000, 3 * 24 * 60 * 60 * 1000, 7 * 24 * 60 * 60 * 1000, 21 * 24 * 60 * 60 * 1000, 45 * 24 * 60 * 60 * 1000]
    };
    review.dueAt = Date.now() + intervals[rating][review.strength];
    review.mastered = review.strength >= 5 && review.successes >= 4;
    meta.reviews[word] = review;
  } else {
    review.misses += 1;
    review.strength = 0;
    review.dueAt = Date.now();
    review.mastered = false;
    meta.reviews[word] = review;
  }
  localStorage.setItem(META_KEY, JSON.stringify(meta));
}

function getReviewWords(includeNotDue = false) {
  const reviews = loadMeta().reviews;
  const now = Date.now();
  return Object.keys(reviews)
    .filter(word => !reviews[word].mastered && (includeNotDue || reviews[word].dueAt <= now))
    .sort((a, b) => reviews[b].misses - reviews[a].misses || reviews[a].dueAt - reviews[b].dueAt);
}

function winBattle() {
  playVictoryFanfare();
  const meta = loadMeta();
  const talentBonus = 1 + (meta.talents?.inkwell || 0) * 0.10;
  const baseInk = battle.type === "boss" ? 35 : battle.type === "elite" ? 22 : 12;
  const ink = Math.round(baseInk * (hasRelic("bookmark") ? 1.3 : 1) * talentBonus);
  state.ink += ink;
  meta.totalInk = (meta.totalInk || 0) + ink;
  localStorage.setItem(META_KEY, JSON.stringify(meta));
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
  const isZh = loadMeta().bilingual;
  $("#stage").innerHTML = `
    <div class="reward-stage">
      <span class="section-kicker">${isZh ? "戰鬥勝利 · 對決完成" : "ENCOUNTER CLEARED"}</span>
      <h1>${isZh ? "單字已收錄於你的字彙庫" : "The word is yours."}</h1>
      <p class="section-copy">${isZh ? "你為生動的字彙庫增添了新單字，並帶著更豐富的智慧繼續踏上旅途。" : "You add another line to your living lexicon and continue a little wiser."}</p>
      <div class="summary-stats">
        <div><b>+${ink}</b><span>${isZh ? "獲得墨水" : "Ink found"}</span></div>
        <div><b>${state.streak}</b><span>${isZh ? "當前連擊" : "Current streak"}</span></div>
        <div><b>${Object.keys(state.learned).length}</b><span>${isZh ? "已掌握單字" : "Words learned"}</span></div>
      </div>
      <button id="continue-path" class="button button-primary">${isZh ? "繼續前進探索 ➔" : "Continue the journey <span>→</span>"}</button>
    </div>`;
  $("#continue-path").addEventListener("click", showPathChoice);
  updateHUD();
}

function showRelicReward(ink, type) {
  state.screen = "reward";
  const isZh = loadMeta().bilingual;
  const available = RELICS.filter(relic => !state.relics.includes(relic.id));
  const picks = shuffle(available).slice(0, 3);
  if (!picks.length) { state.ink += 25; showVictory(ink + 25); return; }
  $("#stage").innerHTML = `
    <div class="reward-stage">
      <span class="section-kicker">${type === "boss" ? (isZh ? "擊敗區域守護領主！" : "GUARDIAN DEFEATED") : (isZh ? "發現稀有古代遺物！" : "RARE DISCOVERY")}</span>
      <h1>${isZh ? "挑選一件古老遺物" : "Choose a relic."}</h1>
      <p class="section-copy">${isZh ? "每一件遺物都會永久改變後續戰鬥的機制。選擇最契合你冒險構築的被動效果。" : "Each relic changes how future encounters unfold. Choose the build that suits your journey."}</p>
      <div class="reward-grid">
        ${picks.map(relic => `<button class="reward-card" data-relic="${relic.id}">
          <span class="reward-rarity">${isZh ? "古代遺物" : "DISCOVERED RELIC"}</span><span class="reward-icon">${relic.icon}</span>
          <h3>${isZh ? relic.zhName : relic.name}</h3>
          <p>${isZh ? relic.zhText : relic.text}</p>
        </button>`).join("")}
      </div>
    </div>`;
  document.querySelectorAll("[data-relic]").forEach(button => button.addEventListener("click", () => {
    const relic = RELICS.find(item => item.id === button.dataset.relic);
    state.relics.push(relic.id);
    if (relic.id === "boots") { state.maxHp += 8; state.hp += 8; }
    tone(460, .08); setTimeout(() => tone(740, .12), 90);
    toast(isZh ? `已將 <b>${relic.zhName}</b> 放入行囊！` : `<b>${relic.name}</b> added to your satchel.`);
    showVictory(ink);
  }));
  updateHUD();
}

function showRest() {
  state.screen = "event";
  if (hasRelic("gilded_abacus")) { state.ink += 12; toast("🧮 <b>Gilded Abacus:</b> +12 Ink upon arriving at rest site!"); }
  const ascRestMod = state.ascension >= 5 ? 0.25 : 0.35;
  const healPercent = hasRelic("candle") ? (ascRestMod + 0.20) : ascRestMod;
  const isZh = loadMeta().bilingual;
  $("#stage").innerHTML = `
    <div class="event-stage">
      <div class="event-illustration">♨</div>
      <span class="section-kicker">${isZh ? "靜謐營火休憩處" : "A QUIET CLEARING"}</span>
      <h1>${isZh ? "字與字之間的片刻寧靜" : "Rest between words."}</h1>
      <p class="section-copy">${isZh ? "此處的森林暫時停止了對決。你可以烹茶休養意志，在火光下研讀，或進行極速詞彙挑戰！" : "For a moment, the forest stops asking questions. You may tend your resolve, study, or test your speed in a rapid blitz trial."}</p>
      <div class="event-options">
        <button class="button button-primary" data-rest="heal">${isZh ? "烹煮修復花茶" : "Brew restorative tea"}<small>${isZh ? `恢復 ${Math.round(healPercent * 100)}% 意志生命${hasRelic("candle") ? "（學者之燭 +20%）" : ""}` : `Restore ${Math.round(healPercent * 100)}% resolve${hasRelic("candle") ? " (Scholar's Candle +20%)" : ""}`}</small></button>
        <button class="button button-ghost" data-rest="spark">${isZh ? "在火光下研讀" : "Study by firelight"}<small>${isZh ? "獲得 2 點火花與 1 點頓悟經驗" : "Gain 2 sparks and 1 insight"}</small></button>
        <button class="button button-ghost" data-rest="blitz" style="border-color:var(--gold);">${isZh ? "⚡ 極速詞彙挑戰 (20s Speed Blitz)" : "⚡ Speed Blitz Challenge (20s)"}<small>${isZh ? "20秒限時快答，每答對一題獎勵 +5 墨水與火花！" : "20-second rapid-fire bonus! +5 Ink and sparks per hit!"}</small></button>
      </div>
    </div>`;
  document.querySelectorAll("[data-rest]").forEach(button => button.addEventListener("click", () => {
    const act = button.dataset.rest;
    if (act === "heal") {
      heal(Math.ceil(state.maxHp * healPercent));
      completeNode();
    } else if (act === "spark") {
      state.sparks = Math.min(9, state.sparks + 2);
      gainXp(1);
      toast(isZh ? "思緒更加清晰敏銳！<b>+2 火花</b>" : "Your mind feels sharper. <b>+2 sparks</b>");
      completeNode();
    } else if (act === "blitz") {
      startSpeedBlitz();
    }
  }));
  updateHUD();
}

function startSpeedBlitz() {
  state.screen = "blitz";
  const isZh = loadMeta().bilingual;
  const allWords = REGIONS.flatMap(r => r.words);
  let timeLeft = 20;
  let scoreCount = 0;
  let blitzActive = true;

  $("#stage").innerHTML = `
    <div class="battle-stage" style="text-align:center;">
      <span class="section-kicker">⚡ SPEED BLITZ TRIAL ⚡</span>
      <h1 id="blitz-timer" style="font-size:44px;color:var(--gold);margin:10px 0;">20.0s</h1>
      <p id="blitz-score" style="font:700 16px var(--mono);">${isZh ? "已答對：" : "Score:"} 0</p>
      <div id="blitz-content" style="margin-top:20px;"></div>
    </div>
  `;

  const timerInterval = setInterval(() => {
    timeLeft -= 0.1;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      blitzActive = false;
      const totalInkGained = scoreCount * 5;
      const sparksGained = Math.min(3, Math.floor(scoreCount / 2));
      state.ink += totalInkGained;
      state.sparks = Math.min(9, state.sparks + sparksGained);
      playVictoryFanfare();
      $("#stage").innerHTML = `
        <div class="reward-stage" style="text-align:center;">
          <span class="section-kicker">⚡ BLITZ COMPLETE ⚡</span>
          <h1>${isZh ? "極速挑戰結束！" : "Time's Up!"}</h1>
          <p class="section-copy">${isZh ? `你在 20 秒內成功答對了 <b>${scoreCount}</b> 個單字！` : `You mastered <b>${scoreCount}</b> words in 20 seconds!`}</p>
          <div class="summary-stats">
            <div><b>+${totalInkGained}</b><span>${isZh ? "獲得墨水" : "Ink Bonus"}</span></div>
            <div><b>+${sparksGained}</b><span>${isZh ? "獲得火花" : "Sparks"}</span></div>
          </div>
          <button id="blitz-continue" class="button button-primary">${isZh ? "繼續前進 ➔" : "Continue Journey ➔"}</button>
        </div>
      `;
      $("#blitz-continue")?.addEventListener("click", () => completeNode());
      updateHUD();
      return;
    }
    const timerEl = $("#blitz-timer");
    if (timerEl) timerEl.textContent = `${timeLeft.toFixed(1)}s`;
  }, 100);

  function nextBlitzQuestion() {
    if (!blitzActive) return;
    const word = random(allWords);
    const distractors = shuffle(allWords.filter(w => w.word !== word.word)).slice(0, 3);
    const options = shuffle([word, ...distractors]);
    const content = $("#blitz-content");
    if (!content) return;
    content.innerHTML = `
      <div style="background:var(--cream);padding:18px;border-radius:12px;border:1px solid var(--line);margin-bottom:16px;">
        <h2 style="font-size:26px;margin:0 0 6px;">${word.word}</h2>
        <p style="margin:0;color:var(--ink-soft);font-size:12px;">${word.phonetic} · ${word.pos || "word"}</p>
      </div>
      <div class="answer-grid">
        ${options.map((opt, i) => `
          <button class="answer-button blitz-btn" data-correct="${opt.word === word.word}">
            <span class="answer-key">${String.fromCharCode(65 + i)}</span>
            <span class="answer-main">${opt.definition}</span>
          </button>
        `).join("")}
      </div>
    `;

    document.querySelectorAll(".blitz-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (!blitzActive) return;
        if (btn.dataset.correct === "true") {
          scoreCount++;
          playHitSound(true, true);
          const scoreEl = $("#blitz-score");
          if (scoreEl) scoreEl.textContent = `${isZh ? "已答對：" : "Score:"} ${scoreCount}`;
          nextBlitzQuestion();
        } else {
          tone(150, 0.1);
          btn.classList.add("wrong");
          setTimeout(nextBlitzQuestion, 200);
        }
      });
    });
  }

  nextBlitzQuestion();
}

function showEvent() {
  state.screen = "event";
  const event = random(EVENTS);
  const isZh = loadMeta().bilingual;
  $("#stage").innerHTML = `
    <div class="event-stage"><div class="event-illustration">${event.icon}</div>
      <span class="section-kicker">${isZh ? "未知的命運岔路" : "AN UNWRITTEN TURN"}</span>
      <h1>${isZh ? event.zhTitle : event.title}</h1>
      <p class="section-copy">${isZh ? event.zhCopy : event.copy}</p>
      <div class="event-options">${event.options.map(option => `
        <button class="button ${option.effect === "gamble" || option.effect === "bold" ? "button-ghost" : "button-primary"}" data-event="${option.effect}">
          ${isZh ? option.zhLabel : option.label}
          <small>${isZh ? option.zhDetail : option.detail}</small>
        </button>`).join("")}</div>
    </div>`;
  document.querySelectorAll("[data-event]").forEach(button => button.addEventListener("click", () => resolveEvent(button.dataset.event)));
}

function resolveEvent(effect) {
  const isZh = loadMeta().bilingual;
  if (effect === "study") { gainXp(2); state.quest += 1; toast(isZh ? "回想起一個遺忘的單字。<b>+2 頓悟經驗</b>" : "A forgotten word returns to you. <b>+2 insight</b>"); }
  if (effect === "gamble") {
    if (Math.random() > .5) { state.ink += 28; toast(isZh ? "小徑通往一處隱密的墨水池！<b>+28 墨水</b>" : "The path leads to a hidden inkwell. <b>+28 ink</b>"); }
    else { state.hp = Math.max(1, state.hp - 8); toast(isZh ? "小徑穿過荊棘叢林。<b>−8 意志生命</b>" : "The path loops through thorns. <b>−8 resolve</b>"); }
  }
  if (effect === "heal") heal(10);
  if (effect === "trade") {
    if (state.ink >= 12) { state.ink -= 12; state.sparks = Math.min(9, state.sparks + 3); toast(isZh ? "公平的交易。<b>+3 火花</b>" : "A fair exchange. <b>+3 sparks</b>"); }
    else { toast(isZh ? "墨水不足，但茶商依舊贈送了一小杯熱茶。" : "Not enough ink, but the merchant shares a small cup."); heal(4, false); }
  }
  if (effect === "ink") { state.ink += 18; toast(isZh ? "詩句綻放出金色光芒！<b>+18 墨水</b>" : "The sentence shines. <b>+18 ink</b>"); }
  if (effect === "bold") { state.hp = Math.max(1, state.hp - 5); gainXp(4); toast(isZh ? "大膽的語言留下了深刻印記。<b>+4 頓悟經驗</b>" : "Bold language leaves a mark. <b>+4 insight</b>"); }
  handleQuest();
  completeNode();
}

function showShop() {
  state.screen = "event";
  const unowned = RELICS.filter(r => !state.relics.includes(r.id));
  const relicItem = unowned.length ? random(unowned) : null;
  const isCartographer = state.characterClass === "cartographer";
  const isZh = loadMeta().bilingual;
  const discount = isCartographer ? 0.8 : 1.0;
  
  const relicPrice = Math.round(24 * discount);
  const healPrice = Math.round(14 * discount);
  const sparkPrice = Math.round(10 * discount);
  const insightPrice = Math.round(12 * discount);

  $("#stage").innerHTML = `
    <div class="event-stage shop-stage">
      <div class="event-illustration shop-icon">◈</div>
      <span class="section-kicker">${isZh ? `流浪黑市商人${isCartographer ? " · 製圖師專屬 8 折優惠" : ""}` : `WANDERING BAZAAR${isCartographer ? " · CARTOGRAPHER 20% DISCOUNT" : ""}`}</span>
      <h1>${isZh ? "字彙黑市 (Lexicon Bazaar)" : "Lexicon Bazaar"}</h1>
      <p class="section-copy">${isZh ? `一位披著斗篷的神秘學者在此兜售珍稀古物、靈藥與遺物。你目前的墨水：<b>${state.ink} ◈</b>` : `A cloaked scholar lays out rare curio, elixirs, and ancient relics. Your current ink: <b>${state.ink} ◈</b>`}</p>
      
      <div class="shop-grid">
        ${relicItem ? `
          <div class="shop-item">
            <span class="shop-item-icon">${relicItem.icon}</span>
            <div class="shop-item-info">
              <b>${isZh ? relicItem.zhName : relicItem.name}</b>
              <p>${isZh ? relicItem.zhText : relicItem.text}</p>
            </div>
            <button id="buy-relic" class="button button-primary" ${state.ink < relicPrice ? "disabled" : ""}>
              ${isZh ? `購買 · ${relicPrice} ◈` : `Buy · ${relicPrice} ◈`}
            </button>
          </div>
        ` : ""}
        <div class="shop-item">
          <span class="shop-item-icon">♨</span>
          <div class="shop-item-info">
            <b>${isZh ? "意志之靈藥" : "Tonic of Resolve"}</b>
            <p>${isZh ? "立即恢復 16 點意志生命。" : "Restore 16 Resolve immediately."}</p>
          </div>
          <button id="buy-heal" class="button button-primary" ${state.ink < healPrice ? "disabled" : ""}>
            ${isZh ? `購買 · ${healPrice} ◈` : `Buy · ${healPrice} ◈`}
          </button>
        </div>
        <div class="shop-item">
          <span class="shop-item-icon">✦</span>
          <div class="shop-item-info">
            <b>${isZh ? "專注火花水晶" : "Spark Crystals"}</b>
            <p>${isZh ? "獲得 +2 火花 (用於線索提示與換題)。" : "Gain +2 Sparks for hints & swaps."}</p>
          </div>
          <button id="buy-sparks" class="button button-primary" ${state.ink < sparkPrice ? "disabled" : ""}>
            ${isZh ? `購買 · ${sparkPrice} ◈` : `Buy · ${sparkPrice} ◈`}
          </button>
        </div>
        <div class="shop-item">
          <span class="shop-item-icon">✧</span>
          <div class="shop-item-info">
            <b>${isZh ? "洞悉智慧卷軸" : "Scroll of Insight"}</b>
            <p>${isZh ? "獲得 +3 點頓悟升級經驗。" : "Gain +3 Insight towards leveling up."}</p>
          </div>
          <button id="buy-insight" class="button button-primary" ${state.ink < insightPrice ? "disabled" : ""}>
            ${isZh ? `購買 · ${insightPrice} ◈` : `Buy · ${insightPrice} ◈`}
          </button>
        </div>
      </div>
      <button id="leave-shop" class="button button-ghost" style="margin-top: 24px;">${isZh ? "離開黑市繼續前行 →" : "Continue the Journey →"}</button>
    </div>
  `;

  if (relicItem) {
    $("#buy-relic")?.addEventListener("click", () => {
      if (state.ink >= relicPrice) {
        state.ink -= relicPrice;
        state.relics.push(relicItem.id);
        if (relicItem.id === "boots") { state.maxHp += 8; state.hp += 8; }
        toast(`Acquired <b>${relicItem.name}</b>!`);
        tone(480, .1); setTimeout(() => tone(720, .15), 80);
        showShop();
        updateHUD();
      }
    });
  }

  $("#buy-heal")?.addEventListener("click", () => {
    if (state.ink >= healPrice) {
      state.ink -= healPrice;
      heal(16);
      tone(440, .1);
      showShop();
      updateHUD();
    }
  });

  $("#buy-sparks")?.addEventListener("click", () => {
    if (state.ink >= sparkPrice) {
      state.ink -= sparkPrice;
      state.sparks = Math.min(9, state.sparks + 2);
      toast("Acquired <b>+2 Sparks</b>!");
      tone(600, .1);
      showShop();
      updateHUD();
    }
  });

  $("#buy-insight")?.addEventListener("click", () => {
    if (state.ink >= insightPrice) {
      state.ink -= insightPrice;
      gainXp(3);
      toast("Absorbed <b>+3 Insight</b>!");
      tone(540, .1);
      showShop();
      updateHUD();
    }
  });

  $("#leave-shop")?.addEventListener("click", () => {
    completeNode();
  });
}

function showAnagramChest() {
  state.screen = "event";
  const isZh = loadMeta().bilingual;
  const regionWords = REGIONS[state.region % REGIONS.length].words;
  const word = random(regionWords);
  let shuffledLetters = shuffle(word.word.toUpperCase().split(""));
  while (shuffledLetters.join("") === word.word.toUpperCase() && word.word.length > 2) {
    shuffledLetters = shuffle(shuffledLetters);
  }

  $("#stage").innerHTML = `
    <div class="event-stage riddle-stage">
      <div class="event-illustration riddle-icon">🧩</div>
      <span class="section-kicker">${isZh ? "古代字謎考驗" : "ANCIENT PUZZLE"}</span>
      <h1>${isZh ? "謎語人黃銅寶箱" : "The Riddler's Chest"}</h1>
      <p class="section-copy">${isZh ? "一個黃銅寶箱被混亂的符文鎖定。重組這些英文字母以解開寶箱，獲取其中的遺物與墨水。" : "A brass chest is sealed by scrambled runes. Unscramble the letters to claim the hidden relics and ink within."}</p>
      
      <div class="riddle-box">
        <span class="riddle-clue-label">${isZh ? "線索 / 英文釋義" : "CLUE / DEFINITION"}</span>
        <blockquote class="riddle-clue">“${word.definition}”</blockquote>
        ${word.zh ? `<small class="riddle-zh">${isZh ? "繁中釋義" : "Meaning"}: ${word.zh}</small>` : ""}
        
        <div class="letter-tiles" id="letter-tiles">
          ${shuffledLetters.map(l => `<span class="letter-tile">${l}</span>`).join("")}
        </div>
        
        <form id="anagram-form" class="anagram-form">
          <input id="anagram-input" type="text" autocomplete="off" spellcheck="false" placeholder="${isZh ? "輸入重組後的正確單字…" : "Type the unscrambled word…"}" aria-label="Unscrambled word">
          <button type="submit" class="button button-primary">${isZh ? "解鎖寶箱 ➔" : "Unlock Chest ➔"}</button>
        </form>
        <button id="skip-riddle" class="reveal-answer" style="margin-top: 14px;">${isZh ? "放棄寶箱 (獲得 8 點安慰墨水)" : "Leave the chest (+8 Ink consolation)"}</button>
      </div>
    </div>
  `;

  $("#anagram-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const val = $("#anagram-input").value.trim().toLowerCase();
    if (val === word.word.toLowerCase()) {
      state.ink += 22;
      state.learned[word.word] = (state.learned[word.word] || 0) + 1;
      updateReviewRecord(word.word, true, "easy");
      tone(540, .08); setTimeout(() => tone(720, .12), 80); setTimeout(() => tone(960, .2), 160);
      toast(isZh ? "🎉 <b>寶箱成功解鎖！</b> 獲得 +22 墨水與自選古代遺物！" : "🎉 <b>Chest Unlocked!</b> +22 Ink & Discovered Relic choice!");
      completeNode(false);
      showRelicReward(22, "elite");
    } else {
      tone(180, .15);
      $("#anagram-input").classList.add("wrong");
      setTimeout(() => $("#anagram-input")?.classList.remove("wrong"), 600);
      toast(isZh ? "單字不正確，請再仔細閱讀線索！" : "Not the right word. Look at the clue closely!");
    }
  });

  $("#skip-riddle")?.addEventListener("click", () => {
    state.ink += 8;
    toast(isZh ? "你收下 8 點墨水並繼續前行。" : "You pocketed 8 loose ink and moved forward.");
    completeNode();
  });

  $("#anagram-input")?.focus();
}

function showAlchemyShrine() {
  state.screen = "event";
  const isZh = loadMeta().bilingual;
  const ROOTS_QUIZ = [
    { root: "trans-", meaning: "across / beyond", zhMeaning: "穿越 / 超越", word: "transcend", distractors: ["under / beneath", "backward / reverse", "against / anti"] },
    { root: "bene-", meaning: "good / well", zhMeaning: "良善 / 良好", word: "benefactor", distractors: ["dark / evil", "small / tiny", "fast / swift"] },
    { root: "chron-", meaning: "time", zhMeaning: "時間 / 時光", word: "synchronize", distractors: ["sound / voice", "fire / heat", "measure / count"] },
    { root: "luc- / lum-", meaning: "light / brightness", zhMeaning: "光芒 / 明亮", word: "luminous", distractors: ["water / fluid", "earth / ground", "wind / air"] },
    { root: "dur-", meaning: "hard / lasting", zhMeaning: "持久 / 堅韌", word: "endure", distractors: ["soft / fragile", "quick / momentary", "cold / ice"] },
    { root: "scend-", meaning: "climb / step", zhMeaning: "攀登 / 梯級", word: "ascend", distractors: ["fall / drop", "burn / fire", "write / mark"] }
  ];

  const quiz = random(ROOTS_QUIZ);
  const options = shuffle([quiz.meaning, ...quiz.distractors]);

  $("#stage").innerHTML = `
    <div class="event-stage alchemy-stage">
      <div class="event-illustration alchemy-icon">🔮</div>
      <span class="section-kicker">${isZh ? "語源古老祭壇" : "ETYMOLOGY ALTAR"}</span>
      <h1>${isZh ? "字根煉金祭壇 (Alchemy Shrine)" : "Word Alchemy Shrine"}</h1>
      <p class="section-copy">${isZh ? "古老的符文流淌著語言的力量。將字根與其原始字義連結，領取來自祭壇的祝福。" : "Ancient runes glow with linguistic power. Connect the root to its primal meaning to receive a blessing from the altar."}</p>
      
      <div class="alchemy-quiz">
        <span class="alchemy-prompt">${isZh ? `字根 <b>“${quiz.root}”</b>（如單字 <em>${quiz.word}</em>）的核心含義是？` : `What does the root <b>“${quiz.root}”</b> (as in <em>${quiz.word}</em>) mean?`}</span>
        <div class="alchemy-options">
          ${options.map(opt => `<button class="button button-ghost alchemy-opt" data-ans="${escapeAttribute(opt)}">${opt}</button>`).join("")}
        </div>
      </div>
    </div>
  `;

  document.querySelectorAll(".alchemy-opt").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.ans === quiz.meaning) {
        tone(520, .1); setTimeout(() => tone(780, .18), 90);
        showAlchemyBlessing();
      } else {
        tone(190, .15);
        gainXp(1);
        toast(isZh ? `正確字義為 “${quiz.meaning}”。獲得 +1 點頓悟經驗。` : `The correct meaning was “${quiz.meaning}”. Gained +1 insight.`);
        completeNode();
      }
    });
  });
}

function showAlchemyBlessing() {
  const isZh = loadMeta().bilingual;
  $("#stage").innerHTML = `
    <div class="reward-stage">
      <span class="section-kicker">${isZh ? "字根古語共鳴" : "ROOT HARMONIZED"}</span>
      <h1>${isZh ? "選擇你的祭壇祝福" : "Choose Your Blessing"}</h1>
      <p class="section-copy">${isZh ? "祭壇上的符文綻放出耀眼的金色光芒。為本次遠征選擇一項永久增益祝福：" : "The shrine's glyphs align in brilliant golden light. Select your permanent expedition blessing:"}</p>
      
      <div class="reward-grid">
        <button class="reward-card" id="bless-vitality">
          <span class="reward-rarity">${isZh ? "生命祝福" : "BLESSING"}</span>
          <span class="reward-icon">💖</span>
          <h3>${isZh ? "生機古語祝福" : "Blessing of Vitality"}</h3>
          <p>${isZh ? "最大生命 +6 HP，並立即恢復 12 點意志生命。" : "+6 Maximum Resolve & restore 12 HP immediately."}</p>
        </button>
        <button class="reward-card" id="bless-sparks">
          <span class="reward-rarity">${isZh ? "心智祝福" : "BLESSING"}</span>
          <span class="reward-icon">⚡</span>
          <h3>${isZh ? "清明心智祝福" : "Blessing of Clarity"}</h3>
          <p>${isZh ? "獲得 +3 火花與 +1 點頓悟經驗。" : "Gain +3 Sparks and +1 Insight."}</p>
        </button>
        <button class="reward-card" id="bless-ink">
          <span class="reward-rarity">${isZh ? "財富祝福" : "BLESSING"}</span>
          <span class="reward-icon">◈</span>
          <h3>${isZh ? "黑市財富祝福" : "Blessing of Fortune"}</h3>
          <p>${isZh ? "獲得 +26 點墨水以在流浪黑市購買遺物。" : "Gain +26 Ink to spend at the Bazaar."}</p>
        </button>
      </div>
    </div>
  `;

  $("#bless-vitality")?.addEventListener("click", () => {
    state.maxHp += 6;
    heal(12);
    toast(isZh ? "<b>生機祝福：</b> 最大生命 +6 HP！" : "<b>Blessing of Vitality:</b> +6 Max HP!");
    completeNode();
  });

  $("#bless-sparks")?.addEventListener("click", () => {
    state.sparks = Math.min(9, state.sparks + 3);
    gainXp(1);
    toast(isZh ? "<b>心智祝福：</b> 獲得 +3 火花！" : "<b>Blessing of Clarity:</b> +3 Sparks!");
    completeNode();
  });

  $("#bless-ink")?.addEventListener("click", () => {
    state.ink += 26;
    toast(isZh ? "<b>財富祝福：</b> 獲得 +26 墨水！" : "<b>Blessing of Fortune:</b> +26 Ink!");
    completeNode();
  });
}

function calculateRunScore() {
  if (!state) return { score: 0, grade: "C", ascMult: 1 };
  const basePoints = (state.correct || 0) * 120;
  const streakPoints = (state.maxStreak || 0) * 60;
  const regionPoints = (state.region || 0) * 350 + (state.node || 0) * 75;
  const relicPoints = (state.relics?.length || 0) * 90;
  const ascMult = 1 + (state.ascension || 0) * 0.12;
  const score = Math.round((basePoints + streakPoints + regionPoints + relicPoints) * ascMult);

  let grade = "C";
  if (score >= 3500) grade = "S+";
  else if (score >= 2400) grade = "S";
  else if (score >= 1500) grade = "A";
  else if (score >= 800) grade = "B";
  else grade = "C";

  return { score, grade, ascMult };
}

function saveHighScoreRecord(victory = false) {
  if (!state) return;
  const meta = loadMeta();
  meta.highScores = meta.highScores || [];
  const { score, grade } = calculateRunScore();
  const heroClass = CLASSES.find(c => c.id === state.characterClass) || CLASSES[0];
  
  const record = {
    classIcon: heroClass.icon,
    className: meta.bilingual ? (heroClass.zhName || heroClass.name) : heroClass.name,
    ascension: state.ascension || 0,
    grade,
    score,
    words: state.correct || 0,
    date: new Date().toISOString().slice(0, 10),
    victory
  };

  meta.highScores.push(record);
  meta.highScores.sort((a, b) => b.score - a.score);
  meta.highScores = meta.highScores.slice(0, 20);
  localStorage.setItem(META_KEY, JSON.stringify(meta));
}

function showGameOver() {
  state.screen = "gameover";
  state.hp = 0;
  saveHighScoreRecord(false);
  localStorage.removeItem(SAVE_KEY);
  const isZh = loadMeta().bilingual;
  const accuracy = state.wordsAnswered ? Math.round(state.correct / state.wordsAnswered * 100) : 0;
  const allWords = REGIONS.flatMap(r => r.words);
  const runWords = (state.seen || []).map(w => allWords.find(item => item.word === w)).filter(Boolean);
  const { score, grade, ascMult } = calculateRunScore();
  const rankClass = grade === "S+" ? "rank-splus" : grade === "S" ? "rank-s" : grade === "A" ? "rank-a" : grade === "B" ? "rank-b" : "rank-c";
  
  $("#stage").innerHTML = `
    <div class="reward-stage gameover-stage">
      <span class="section-kicker">${isZh ? "墨水耗盡 · 意志消逝" : "THE INK RUNS DRY"}</span>
      <h1>${isZh ? "遠征探險紀錄誌" : "Expedition Chronicle"}</h1>
      <p class="section-copy">${isZh ? "每一次探索語言的旅程都不會白費。在下方複習本次遠征遇到的所有單字，或一鍵複製成學習筆記。" : "No voyage into language is wasted. Review your run's vocabulary sheet below or export it directly into your notes."}</p>
      
      <div class="score-tally-box">
        <div class="rank-badge ${rankClass}">${grade}</div>
        <div class="score-line"><span>${isZh ? "本次遠征總分" : "Final Run Score"}</span><b style="color:var(--coral-dark);font-size:16px;">${score} PTS</b></div>
        <div class="score-line"><span>${isZh ? "答對題數 / 總作答" : "Words Mastered"}</span><b>${state.correct} / ${state.wordsAnswered} (${accuracy}%)</b></div>
        <div class="score-line"><span>${isZh ? "最高連擊倍率" : "Max Streak"}</span><b>${state.maxStreak}×</b></div>
        <div class="score-line"><span>${isZh ? "攀升挑戰難度加成" : "Ascension Multiplier"}</span><b>×${ascMult.toFixed(2)}</b></div>
      </div>
      
      <div class="hero-actions" style="margin-bottom: 20px;">
        <button id="retry-button" class="button button-primary">${isZh ? "重新啟程 ➔" : "Begin Again <span>→</span>"}</button>
        <button id="fame-gameover-btn" class="button button-ghost">${isZh ? "🏆 查看名人堂" : "🏆 Hall of Fame"}</button>
        <button id="copy-chronicle-btn" class="button button-ghost">${isZh ? "📋 複製 Markdown 筆記" : "📋 Copy Study Sheet"}</button>
        <button id="review-button" class="button button-ghost">${isZh ? "檢視字彙庫" : "Review Lexicon"}</button>
      </div>

      <div class="run-chronicle-box">
        <span class="modal-kicker">${isZh ? `本次遠征單字集 (${runWords.length} 個單字)` : `EXPEDITION VOCABULARY (${runWords.length} WORDS)`}</span>
        <div class="run-words-list">
          ${runWords.map(w => `
            <div class="run-word-chip">
              <b>${w.word}</b>
              <small>${w.pos || "w."} · ${w.zh || w.synonym}</small>
              <p>${w.definition}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </div>`;

  $("#retry-button")?.addEventListener("click", () => {
    state = null;
    showClassSelection();
  });
  $("#review-button")?.addEventListener("click", showLexicon);
  $("#fame-gameover-btn")?.addEventListener("click", showHallOfFame);
  $("#copy-chronicle-btn")?.addEventListener("click", () => {
    let md = `# WordBound Expedition Chronicle — ${new Date().toLocaleDateString()}\n\n`;
    md += `**Score:** ${score} PTS (Rank ${grade}) | ${state.wordsAnswered} words answered · ${accuracy}% accuracy · ${state.maxStreak} max streak\n\n`;
    md += `## Words Encountered\n\n`;
    runWords.forEach(w => {
      md += `- **${w.word}** (${w.pos || "word"}, ${w.level || "B1"}): ${w.definition} | 釋義: ${w.zh || ""} | Near: ${w.synonym}\n`;
      md += `  > *${w.sentence}*\n\n`;
    });
    navigator.clipboard.writeText(md).then(() => {
      toast(isZh ? "📋 <b>學習筆記已複製到剪貼簿！</b> 可直接貼入 Notion 或 Obsidian。" : "📋 <b>Study Sheet copied to clipboard!</b> Ready to paste into Notion/Obsidian.");
    });
  });
  updateHUD();
}

function showHallOfFame() {
  const meta = loadMeta();
  const isZh = meta.bilingual;
  const list = meta.highScores || [];

  openModal(`
    <span class="modal-kicker">${isZh ? "遠征歷史最高榮譽" : "HALL OF GLORY"}</span>
    <h2>${isZh ? "名人堂與遠征排行榜" : "Hall of Fame"}</h2>
    <p class="section-copy">${isZh ? "記錄你在歷次詞彙遠征中締造的最高評分與精通成就。" : "Your highest scoring journeys and vocabulary triumphs saved locally."}</p>
    
    ${list.length ? `
      <table class="fame-table">
        <thead>
          <tr>
            <th>${isZh ? "名次" : "RANK"}</th>
            <th>${isZh ? "職業原型" : "CLASS"}</th>
            <th>${isZh ? "攀升" : "ASC"}</th>
            <th>${isZh ? "評級" : "GRADE"}</th>
            <th>${isZh ? "得分" : "SCORE"}</th>
            <th>${isZh ? "答對" : "WORDS"}</th>
            <th>${isZh ? "日期" : "DATE"}</th>
          </tr>
        </thead>
        <tbody>
          ${list.map((r, i) => `
            <tr>
              <td class="fame-rank">#${i + 1}</td>
              <td>${r.classIcon} ${r.className}</td>
              <td><b style="color:var(--coral-dark);">A${r.ascension || 0}</b></td>
              <td><span style="font-weight:800;color:var(--gold);">${r.grade}</span></td>
              <td><b>${r.score.toLocaleString()}</b></td>
              <td>${r.words}</td>
              <td style="color:var(--ink-soft);font-size:9px;">${r.date}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    ` : `
      <p class="section-copy" style="font-style:italic;margin-top:20px;">${isZh ? "目前尚無歷史遠征紀錄。完成一場冒險即可在此登榜！" : "No expedition records yet. Complete a journey to make history!"}</p>
    `}
  `);
}

function showEtymologyExplorer() {
  const isZh = loadMeta().bilingual;
  const allWords = REGIONS.flatMap(r => r.words).filter(w => w.root);
  const groups = {};
  allWords.forEach(w => {
    const rootKey = w.root.split(" ")[0] || "Ancient";
    groups[rootKey] = groups[rootKey] || [];
    groups[rootKey].push(w);
  });

  openModal(`
    <span class="modal-kicker">${isZh ? "詞源樹狀圖與語系探索" : "ETYMOLOGY TREE EXPLORER"}</span>
    <h2>${isZh ? "古語詞根地圖 (Etymology Tree)" : "Word Family Tree"}</h2>
    <p class="section-copy">${isZh ? "探索拉丁與希臘字根如何演變為現代英文單字，一次掌握整組同源詞彙。" : "Discover how ancient Latin and Greek roots blossom into families of rich English vocabulary."}</p>
    
    <div style="display:grid;gap:14px;max-height:360px;overflow-y:auto;padding-right:4px;">
      ${Object.entries(groups).map(([root, words]) => `
        <div style="border:1px solid var(--line);border-radius:8px;padding:12px;background:var(--cream);">
          <b style="color:var(--coral-dark);font:700 13px var(--mono);">${root}</b>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;">
            ${words.map(w => `
              <span style="padding:3px 8px;border-radius:4px;background:rgba(255,250,240,0.9);border:1px solid var(--line);font-size:10px;" title="${w.definition} (${w.zh || ''})">
                <b>${w.word}</b> <small style="color:var(--ink-soft);">(${w.zh || w.definition.slice(0, 20)}...)</small>
              </span>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `);
}

function showLexicon() {
  const isZh = loadMeta().bilingual;
  const knownWords = state?.learned || loadMeta().learned || {};
  const allWords = REGIONS.flatMap(region => region.words);
  const reviews = loadMeta().reviews;
  const catalog = new Set([...Object.keys(knownWords), ...Object.keys(reviews)]);
  const learned = [...catalog].map(key => [key, knownWords[key] || 0]).sort((a, b) => {
    if (Boolean(reviews[a[0]]) !== Boolean(reviews[b[0]])) return reviews[a[0]] ? -1 : 1;
    return b[1] - a[1];
  });
  const reviewWords = getReviewWords(true);
  const dueCount = getReviewWords().length;
  const mastery = Object.values(reviews).reduce((totals, review) => {
    if (review.mastered || review.strength >= 5) totals.mastered += 1;
    else if (review.strength >= 3) totals.strong += 1;
    else totals.learning += 1;
    return totals;
  }, { learning: 0, strong: 0, mastered: 0 });
  const meta = loadMeta();
  const notes = meta.notes;
  const content = learned.length ? learned.map(([key, count]) => {
    const word = allWords.find(item => item.word === key);
    if (!word) return "";
    const review = reviews[key];
    const status = review ? review.mastered || review.strength >= 5 ? "mastered" : review.strength >= 3 ? "strong" : "learning" : "discovered";
    const statusLabel = isZh
      ? (status === "mastered" ? "完全精通" : status === "strong" ? "熟練掌握" : status === "learning" ? "學習中" : "已解鎖")
      : status;
    const showZh = meta.bilingual && word.zh;
    return `<div class="lexicon-word ${review && !review.mastered ? "needs-review" : ""}">
      <div class="lex-header">
        <b>${word.word}</b>
        <span class="lex-pos">${word.pos || ""}</span>
        <span class="lex-level">${word.level || ""}</span>
        ${showZh ? `<span class="lex-zh">${word.zh}</span>` : ""}
      </div>
      <span class="lex-meta">${word.phonetic} · ${isZh ? `已回想 ${count} 次` : `recalled ${count}×`}</span>
      <mark class="${status}">${statusLabel}</mark>
      <p>${word.definition}</p>
      ${word.root ? `<small class="lex-root">${isZh ? "字根語源" : "Origin"}: ${word.root}</small>` : ""}
      ${notes[key] ? `<blockquote>“${notes[key]}”</blockquote>` : ""}
    </div>`;
  }).filter(Boolean).join("") : `<p class="section-copy">${isZh ? "你的字彙庫正等待著收錄第一個單字。" : "Your lexicon is waiting for its first word."}</p>`;
  
  openModal(`
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
      <span class="modal-kicker">${isZh ? "專屬詞彙紀錄庫" : "YOUR LIVING RECORD"}</span>
      <div style="display:flex; gap:6px;">
        <button id="open-etymology-btn" class="button button-ghost" style="padding:4px 9px;font-size:9px;">${isZh ? "🌳 古語詞根地圖" : "🌳 Etymology Tree"}</button>
        <button id="open-decks-btn" class="button button-ghost" style="padding:4px 9px;font-size:9px;">${isZh ? "📚 考試詞庫與匯入" : "📚 Presets & Import"}</button>
        <button id="export-csv-btn" class="button button-ghost" style="padding:4px 9px;font-size:9px;">${isZh ? "📥 匯出 CSV" : "📥 Export CSV"}</button>
      </div>
    </div>
    <h2>${isZh ? "個人字彙庫 (Lexicon)" : "Lexicon"}</h2>
    <div class="mastery-strip">
      <div><b>${mastery.learning}</b><span>${isZh ? "學習中" : "Learning"}</span></div>
      <div><b>${mastery.strong}</b><span>${isZh ? "已熟練" : "Strong"}</span></div>
      <div><b>${mastery.mastered}</b><span>${isZh ? "已精通" : "Mastered"}</span></div>
    </div>
    ${reviewWords.length ? `<div class="review-callout"><div><small>${isZh ? "待加強單字" : "WORDS TO REVISIT"}</small><b>${isZh ? `今日需複習 ${dueCount} 個 · 累積學習中 ${reviewWords.length} 個` : `${dueCount} due now · ${reviewWords.length} learning`}</b><p>${isZh ? "間隔重複記憶法測驗，無失血懲罰，快速鞏固答錯單字。" : "Short, no-penalty recall sessions strengthen the words you missed."}</p></div><button id="start-review-modal" class="button button-primary">${isZh ? "立即複習 ➔" : "Practice now →"}</button></div>` : ""}
    <div class="lexicon-list">${content}</div>`);
  $("#open-etymology-btn")?.addEventListener("click", showEtymologyExplorer);
  $("#start-review-modal")?.addEventListener("click", requestPractice);
  $("#open-decks-btn")?.addEventListener("click", showDeckManager);
  $("#export-csv-btn")?.addEventListener("click", exportDeckCSV);
}

async function fetchOnlineWord(rawWord) {
  const word = rawWord.trim().toLowerCase();
  if (!word) return null;
  try {
    const dictRes = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
    if (!dictRes.ok) throw new Error("Word not found in online dictionary.");
    const data = await dictRes.json();
    const entry = data[0];
    const phonetic = entry.phonetic || (entry.phonetics && entry.phonetics[0] && entry.phonetics[0].text) || "";
    const firstMeaning = entry.meanings && entry.meanings[0];
    const pos = firstMeaning ? `${firstMeaning.partOfSpeech.slice(0, 3)}.` : "w.";
    const firstDef = firstMeaning && firstMeaning.definitions && firstMeaning.definitions[0];
    const definition = (firstDef && firstDef.definition) || `General definition for ${word}`;
    const sentence = (firstDef && firstDef.example) || `A typical context showing usage of ${word}.`;

    // Fetch top synonyms from Datamuse API
    let synonym = "related";
    try {
      const synRes = await fetch(`https://api.datamuse.com/words?rel_syn=${encodeURIComponent(word)}&max=3`);
      if (synRes.ok) {
        const synData = await synRes.json();
        if (synData && synData.length) synonym = synData.map(s => s.word).join(", ");
      }
    } catch {}

    return {
      word,
      phonetic,
      pos,
      level: "B2",
      zh: "",
      root: "",
      definition,
      synonym,
      sentence,
      clue: definition
    };
  } catch (err) {
    console.warn("Dictionary API fetch error:", err);
    return null;
  }
}

function showDeckManager() {
  const isZh = loadMeta().bilingual;
  const meta = loadMeta();
  meta.activeDecks = meta.activeDecks || ["intermediate", "toeic", "toefl", "gre"];
  meta.customWords = meta.customWords || [];
  
  openModal(`
    <span class="modal-kicker">${isZh ? "主題詞庫與線上字典擴展" : "CURATED DECKS & ONLINE DICTIONARY"}</span>
    <h2>${isZh ? "詞彙庫管理與即時擴充" : "Deck & Vocabulary Hub"}</h2>
    <p class="section-copy">${isZh ? "啟用內建檢定詞庫（多益、托福、GRE），使用線上字典 API 即時查詞擴充，或貼上外部詞彙表。" : "Enable high-yield exam presets, fetch live words via the Dictionary API, or paste external decks."}</p>
    
    <div class="deck-list">
      ${Object.entries(EXAM_DECKS).map(([key, deck]) => {
        const isActive = meta.activeDecks.includes(key);
        return `
          <div class="deck-item">
            <span class="deck-icon">${deck.icon}</span>
            <div class="deck-info">
              <b>${deck.name}</b>
              <p>${deck.desc} (${deck.words.length} words)</p>
            </div>
            <button class="button ${isActive ? "button-primary" : "button-ghost"} toggle-deck-btn" data-deck="${key}">
              ${isActive ? (isZh ? "啟用中" : "ACTIVE") : (isZh ? "未啟用" : "INACTIVE")}
            </button>
          </div>
        `;
      }).join("")}
    </div>

    <div class="online-lookup-section" style="margin-top: 18px; border: 1px solid var(--gold); background: rgba(245, 230, 211, 0.4); border-radius: 8px; padding: 12px;">
      <span class="modal-kicker">${isZh ? "線上字典 API 即時查詞擴充" : "ONLINE DICTIONARY API GENERATOR"}</span>
      <p class="section-copy" style="margin-bottom: 8px;">${isZh ? "輸入任何英文單字（如 <code>perseverance</code>, <code>heuristic</code>），系統自動抓取音標、詞性、釋義與例句！" : "Type any English word to automatically fetch IPA, part of speech, definitions, and synonyms via API:"}</p>
      <div style="display: flex; gap: 6px; flex-wrap: wrap;">
        <input id="api-search-input" style="flex: 1; min-width: 200px; padding: 6px 10px; border-radius: 6px; border: 1px solid var(--line); font: 12px var(--mono);" placeholder="e.g. serendipity, cognitive, quantum..." />
        <button id="api-fetch-btn" class="button button-primary" style="font-size: 10px; white-space: nowrap;">${isZh ? "🌐 API 查詞並收錄" : "🌐 Fetch & Add Word"}</button>
      </div>
      <div id="api-preview-box" style="margin-top: 8px; font-size: 11px; display: none;"></div>
    </div>

    <div class="import-section" style="margin-top: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
        <span class="modal-kicker">${isZh ? "智慧批次匯入器 (支援 Anki / CSV / 列表)" : "SMART BULK IMPORTER"}</span>
        <button id="copy-chatgpt-prompt" class="button button-ghost" style="font-size: 9px; padding: 2px 7px;">${isZh ? "📋 複製 ChatGPT 出題 Prompt" : "📋 Copy ChatGPT Prompt"}</button>
      </div>
      <p class="section-copy" style="margin-bottom: 8px;">${isZh ? "支援一行一個單字、CSV 格式 <code>word, definition, synonym, root, zh</code>，或 Anki 製表符 Tab 格式：" : "Paste one word per line, or CSV <code>word, definition, synonym, root, zh</code>:"}</p>
      <textarea id="import-textarea" class="import-textarea" placeholder="resilient, able to recover quickly, tough, Latin resilire, 有韌性的&#10;ephemeral&#10;serendipity - finding good things by chance" rows="3"></textarea>
      <div style="display: flex; gap: 8px; margin-top: 8px;">
        <button id="submit-import-btn" class="button button-primary" style="font-size: 10px;">${isZh ? "確認批次匯入" : "Import All Words"}</button>
        <button id="back-to-lexicon" class="button button-ghost" style="font-size: 10px;">${isZh ? "返回字彙庫" : "Back to Lexicon"}</button>
      </div>
    </div>
  `);

  document.querySelectorAll(".toggle-deck-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.deck;
      const idx = meta.activeDecks.indexOf(key);
      if (idx > -1) meta.activeDecks.splice(idx, 1);
      else meta.activeDecks.push(key);
      localStorage.setItem(META_KEY, JSON.stringify(meta));
      showDeckManager();
    });
  });

  // Online API Fetcher
  $("#api-fetch-btn")?.addEventListener("click", async () => {
    const wordInput = $("#api-search-input")?.value.trim();
    if (!wordInput) return;
    const btn = $("#api-fetch-btn");
    const preview = $("#api-preview-box");
    btn.disabled = true;
    btn.textContent = isZh ? "正在連線查詢..." : "Fetching...";
    
    const wordData = await fetchOnlineWord(wordInput);
    btn.disabled = false;
    btn.textContent = isZh ? "🌐 API 查詞並收錄" : "🌐 Fetch & Add Word";

    if (!wordData) {
      if (preview) {
        preview.style.display = "block";
        preview.innerHTML = `<span style="color:var(--crimson);">${isZh ? "❌ 查無此單字，請檢查拼字後重試。" : "❌ Word not found. Please check spelling."}</span>`;
      }
      return;
    }

    meta.customWords.push(wordData);
    meta.learned[wordData.word] = (meta.learned[wordData.word] || 0) + 1;
    localStorage.setItem(META_KEY, JSON.stringify(meta));

    if (preview) {
      preview.style.display = "block";
      preview.innerHTML = `
        <div style="background:var(--cream);padding:8px;border-radius:6px;border:1px solid var(--line);">
          <b>✅ ${wordData.word}</b> <small>${wordData.phonetic} · ${wordData.pos}</small>
          <p style="margin:4px 0 0;color:var(--ink-soft);">${wordData.definition}</p>
          <small style="color:var(--gold);">${isZh ? "已成功加入字彙庫！" : "Successfully added to your active Lexicon!"}</small>
        </div>
      `;
    }
    toast(isZh ? `已透過字典 API 成功收錄 <b>${wordData.word}</b>！` : `Successfully added <b>${wordData.word}</b> via Dictionary API!`);
    playChestFanfare();
  });

  // Copy ChatGPT Prompt
  $("#copy-chatgpt-prompt")?.addEventListener("click", () => {
    const promptText = `Please generate 15 advanced English vocabulary words for my vocabulary learning game WordBound. 
Format each word exactly as a CSV line:
word, definition, synonym, root, zh_translation

Example:
serendipity, finding good things by chance, good luck, Persian fairy tale, 意外收穫
ephemeral, lasting for a short time, fleeting, Greek ephemeros, 短暫的

Please output only the CSV lines with no extra commentary.`;
    navigator.clipboard.writeText(promptText).then(() => {
      toast(isZh ? "📋 <b>已複製 ChatGPT 出題 Prompt！</b> 可直接貼給 AI 生成詞彙。" : "📋 <b>ChatGPT prompt copied!</b> Paste it into ChatGPT to generate custom decks.");
    });
  });

  // Smart Bulk Importer
  $("#submit-import-btn")?.addEventListener("click", () => {
    const raw = $("#import-textarea")?.value.trim();
    if (!raw) return;
    const lines = raw.split("\n").map(l => l.trim()).filter(Boolean);
    let count = 0;
    lines.forEach(line => {
      let parts = line.includes("\t") ? line.split("\t").map(p => p.trim()) : line.split(",").map(p => p.trim());
      if (parts.length < 2) parts = line.split("-").map(p => p.trim());
      
      const word = (parts[0] || "").toLowerCase().trim();
      if (word && /^[a-z\- ]+$/i.test(word)) {
        const definition = parts[1] || `Vocabulary entry for ${word}`;
        const synonym = parts[2] || "related";
        const root = parts[3] || "";
        const zh = parts[4] || "";
        meta.customWords.push({ word, definition, synonym, root, zh, phonetic: "", level: "Custom", pos: "w.", sentence: `Example context for ${word}.`, clue: definition });
        meta.learned[word] = (meta.learned[word] || 0) + 1;
        count += 1;
      }
    });
    localStorage.setItem(META_KEY, JSON.stringify(meta));
    toast(isZh ? `成功匯入 <b>${count} 個自訂單字</b>！` : `Successfully imported <b>${count} custom words</b>!`);
    playChestFanfare();
    showLexicon();
  });

  $("#back-to-lexicon")?.addEventListener("click", showLexicon);
}

function exportDeckCSV() {
  const allWords = REGIONS.flatMap(r => r.words);
  let csv = "word,pos,level,definition,zh,synonym,root,sentence\n";
  allWords.forEach(w => {
    csv += `"${w.word}","${w.pos || ""}","${w.level || ""}","${(w.definition || "").replace(/"/g, '""')}","${w.zh || ""}","${w.synonym || ""}","${w.root || ""}","${(w.sentence || "").replace(/"/g, '""')}"\n`;
  });
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `wordbound-vocabulary-${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast("Exported vocabulary deck to CSV!");
}

function requestPractice() {
  if (state?.screen === "battle") {
    if ($("#modal").open) $("#modal").close();
    toast("Finish this encounter before starting a recall session.");
    return;
  }
  startPractice();
}

function startPracticeFromTitle() {
  state = loadState() || freshState();
  soundEnabled = state.sound;
  enterGame();
  startPractice();
}

function startPractice() {
  $("#modal").open && $("#modal").close();
  const words = getReviewWords(true);
  if (!words.length) { toast("No words need review right now."); return; }
  practice = { words: words.slice(0, 10), initialCount: Math.min(10, words.length), index: 0, remembered: new Set(), attempts: {}, answered: false };
  state.screen = "practice";
  renderPracticeQuestion();
}

function renderPracticeQuestion() {
  if (practice.index >= practice.words.length) { showPracticeSummary(); return; }
  const allWords = REGIONS.flatMap(region => region.words);
  const word = allWords.find(item => item.word === practice.words[practice.index]);
  if (!word) { practice.index += 1; renderPracticeQuestion(); return; }
  const review = loadMeta().reviews[word.word] || { strength: 0 };
  const mode = review.strength === 0 ? "definition" : review.strength === 1 ? "cloze" : review.strength === 2 ? "audio-definition" : review.strength >= 4 ? "typed-cloze" : "typed-definition";
  const property = mode === "definition" || mode === "audio-definition" ? "definition" : "word";
  const isZh = loadMeta().bilingual;
  const distractors = shuffle(allWords.filter(item => item.word !== word.word)).slice(0, 3);
  const answerItems = shuffle([word, ...distractors]);
  const typed = mode.startsWith("typed");
  const prompt = mode === "definition"
    ? (isZh ? "選擇最符合的英文釋義：" : "What does this word mean?")
    : mode === "audio-definition"
      ? (isZh ? "聆聽發音，並選擇其相應釋義：" : "Listen to the word, then connect it to its meaning.")
    : mode.includes("cloze")
      ? makeCloze(word)
      : word.definition;

  const label = mode === "definition"
    ? (isZh ? "詞義回想" : "MEANING RECALL")
    : mode === "cloze"
      ? (isZh ? "語境填空" : "CONTEXT CLUE")
      : mode === "audio-definition"
        ? (isZh ? "聽音辨義" : "LISTEN & CONNECT")
        : mode === "typed-cloze"
          ? (isZh ? "語境默寫" : "USE IN CONTEXT")
          : (isZh ? "主動拼寫" : "ACTIVE PRODUCTION");

  let headerTitle = word.word;
  let headerSubtitle = `${word.phonetic} · ${word.pos || "word"}`;

  if (typed) {
    headerTitle = mode === "typed-cloze" ? (isZh ? "句中缺少一個單字" : "Complete the sentence") : (isZh ? "默寫該單字" : "Recall the word");
    headerSubtitle = isZh ? `首字母 “${word.word[0]}” · ${word.word.length} 個字母` : `Starts with “${word.word[0]}” · ${word.word.length} letters`;
  } else if (mode === "audio-definition") {
    headerTitle = isZh ? "仔細聆聽發音" : "Listen closely";
    headerSubtitle = isZh ? "聲音 → 詞意連結" : "Sound → meaning";
  } else if (mode === "cloze") {
    headerTitle = isZh ? "句中缺少一個關鍵單字" : "A word is missing";
    headerSubtitle = isZh ? `依語境選擇最適當的單字 · ${word.pos || ""}` : `Choose the word that fits · ${word.pos || ""}`;
  }

  const showSpeaker = !typed && mode !== "cloze";

  practice.current = { word, mode, property, correctValue: word[property] };
  practice.attempts[word.word] = (practice.attempts[word.word] || 0) + 1;
  practice.answered = false;
  $("#stage").innerHTML = `<div class="practice-stage">
    <div class="practice-progress"><span>${isZh ? "單字複習測驗" : "RECALL SESSION"}</span><b>${practice.index + 1} / ${practice.words.length}</b></div>
    <div class="practice-meter"><span style="width:${practice.index / practice.words.length * 100}%"></span></div>
    <div class="practice-card">
      <span class="practice-kicker">${label} · ${typed ? (isZh ? "拼寫輸入" : "TYPE IT FROM MEMORY") : (isZh ? "四選一" : "CHOOSE ONE")}</span>
      <div class="practice-word-row">
        <div>
          <h1>${headerTitle}</h1>
          <p>${headerSubtitle}</p>
        </div>
        ${showSpeaker ? '<button id="practice-speak" class="speak-button" aria-label="Hear pronunciation">◖))</button>' : ""}
      </div>
      <p class="challenge-prompt practice-prompt">${prompt}</p>
      ${typed
        ? `<form id="typed-recall-form" class="typed-recall"><input id="typed-recall-input" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="${isZh ? "輸入單字…" : "Type the word…"}" aria-label="Type the missing word"><button class="button button-primary" type="submit">${isZh ? "確認 →" : "Check →"}</button></form><button id="reveal-answer" class="reveal-answer">${isZh ? "想不起來 (查看解答)" : "I don't remember"}</button>`
        : `<div class="answer-grid">${answerItems.map((item, index) => {
            const val = item[property];
            return `<button class="answer-button practice-answer" data-answer="${escapeAttribute(val)}">
              <span class="answer-key">${String.fromCharCode(65 + index)}</span>
              <div class="answer-content">
                <span class="answer-main">${val}</span>
              </div>
            </button>`;
          }).join("")}</div>`}
      <div id="practice-feedback" class="practice-feedback" hidden></div>
    </div>
    <button id="leave-practice" class="practice-leave">${isZh ? "← 返回旅程地圖" : "← Return to journey"}</button>
  </div>`;
  $("#practice-speak")?.addEventListener("click", () => speakWord(word.word));
  if (mode === "audio-definition") setTimeout(() => speakWord(word.word), 180);
  $("#leave-practice").addEventListener("click", resumeAfterPractice);
  document.querySelectorAll(".practice-answer").forEach(button => button.addEventListener("click", () => {
    answerPractice(button.dataset.answer === word[property], button);
  }));
  $("#typed-recall-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const answer = $("#typed-recall-input").value;
    answerPractice(normalizeAnswer(answer) === normalizeAnswer(word.word), $("#typed-recall-input"));
  });
  $("#reveal-answer")?.addEventListener("click", () => answerPractice(false, $("#typed-recall-input")));
  $("#typed-recall-input")?.focus();
}

function normalizeAnswer(value) {
  return value.trim().toLocaleLowerCase().replace(/[.!?,;:'”’]/g, "");
}

function answerPractice(correct, control) {
  if (practice.answered) return;
  practice.answered = true;
  const { word, property } = practice.current;
  const buttons = [...document.querySelectorAll(".practice-answer")];
  buttons.forEach(item => item.disabled = true);
  $("#typed-recall-input") && ($("#typed-recall-input").disabled = true);
  $("#reveal-answer") && ($("#reveal-answer").hidden = true);
  const feedback = $("#practice-feedback");
  feedback.hidden = false;
  if (correct) {
    practice.remembered.add(word.word);
    control.classList.add("correct");
    feedback.innerHTML = `<b>Retrieved from memory.</b>${wordMemoryMap(word)}${personalAnchorEditor(word)}
      <div class="recall-rating"><span>How did that recall feel?</span><button data-rating="hard">Hard <small>soon</small></button><button data-rating="good">Good <small>later</small></button><button data-rating="easy">Easy <small>much later</small></button></div>`;
    tone(540, .08); setTimeout(() => tone(720, .08), 80);
    bindAnchorEditor(word.word);
    document.querySelectorAll("[data-rating]").forEach(button => button.addEventListener("click", () => {
      updateReviewRecord(word.word, true, button.dataset.rating);
      advancePractice();
    }));
  } else {
    control.classList.add("wrong");
    buttons.find(item => item.dataset.answer === word[property])?.classList.add("correct");
    updateReviewRecord(word.word, false);
    feedback.classList.add("wrong");
    if (practice.attempts[word.word] < 2) practice.words.push(word.word);
    feedback.innerHTML = `<b>Study the connections, then try it again later.</b>${wordMemoryMap(word)}${personalAnchorEditor(word)}<button id="next-practice" class="button button-primary">Keep going →</button>`;
    tone(170, .12);
    bindAnchorEditor(word.word);
    $("#next-practice").addEventListener("click", advancePractice);
  }
  updateHUD();
}

function advancePractice() {
  practice.index += 1;
  renderPracticeQuestion();
}

function personalAnchorEditor(word) {
  const note = loadMeta().notes[word.word] || "";
  return `<label class="personal-anchor"><span>MAKE IT YOURS</span><small>A funny or true sentence creates another path to the memory.</small><input id="personal-anchor-input" value="${escapeAttribute(note)}" placeholder="My sentence with “${word.word}”…"></label>`;
}

function bindAnchorEditor(word) {
  $("#personal-anchor-input")?.addEventListener("change", event => {
    const meta = loadMeta();
    const note = event.target.value.trim();
    if (note) meta.notes[word] = note;
    else delete meta.notes[word];
    localStorage.setItem(META_KEY, JSON.stringify(meta));
    toast(note ? "Personal memory saved." : "Personal memory removed.");
  });
}

function showPracticeSummary() {
  const isZh = loadMeta().bilingual;
  const score = practice.remembered.size;
  const total = practice.initialCount;
  $("#stage").innerHTML = `
    <div class="reward-stage practice-summary">
      <span class="section-kicker">${isZh ? "單字複習測驗完成" : "RECALL SESSION COMPLETE"}</span>
      <h1>${isZh ? "字彙記憶深深扎根" : "Your memory grows roots."}</h1>
      <p class="section-copy">${isZh ? "你已完成認字、語境克漏字與主動默寫練習。答錯或不熟悉的單字將很快再次複習；熟記的單字則會拉長間隔。" : "You practiced recognition, context, and active production. The words you found difficult will return sooner; confident recalls can rest longer."}</p>
      <div class="summary-stats">
        <div><b>${score}/${total}</b><span>${isZh ? "成功記住" : "Remembered"}</span></div>
        <div><b>${getReviewWords().length}</b><span>${isZh ? "待複習總數" : "Due now"}</span></div>
        <div><b>${practice.words.length - total}</b><span>${isZh ? "智慧重試" : "Smart retries"}</span></div>
      </div>
      <div class="hero-actions">
        <button id="practice-again" class="button button-primary">${isZh ? "再次複習 ➔" : "Practice again →"}</button>
        <button id="practice-done" class="button button-ghost">${isZh ? "返回冒險旅途" : "Return to journey"}</button>
      </div>
    </div>`;
  $("#practice-again").addEventListener("click", startPractice);
  $("#practice-done").addEventListener("click", resumeAfterPractice);
  updateHUD();
}

function resumeAfterPractice() {
  practice = null;
  if (state.hp <= 0) showGameOver();
  else showPathChoice();
}

function speakWord(word) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const meta = loadMeta();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.rate = meta.speechRate || 0.85;
  utterance.lang = meta.voiceAccent || "en-US";
  
  const voices = speechSynthesis.getVoices();
  const matchedVoice = voices.find(v => v.lang.startsWith(utterance.lang) || v.lang.startsWith("en"));
  if (matchedVoice) utterance.voice = matchedVoice;
  
  speechSynthesis.speak(utterance);
}

function showSettings() {
  const isZh = loadMeta().bilingual;
  const meta = loadMeta();
  openModal(`
    <span class="modal-kicker">${isZh ? "遊戲與學習偏好" : "JOURNEY OPTIONS"}</span>
    <h2>${isZh ? "設定" : "Settings"}</h2>
    <div class="settings-list">
      <button id="modal-sound">${isZh ? "遊戲音效" : "Sound effects"} <b>${soundEnabled ? (isZh ? "開啟 (ON)" : "ON") : (isZh ? "關閉 (OFF)" : "OFF")}</b></button>
      <button id="modal-bilingual">${isZh ? "介面與題目語言" : "Interface & Hints"} <b>${meta.bilingual ? "🇹🇼 繁體中文" : "🇬🇧 English"}</b></button>
      <button id="modal-speech-rate">${isZh ? "發音語速" : "Pronunciation Speed"} <b>${meta.speechRate === 0.65 ? (isZh ? "0.65x (慢速)" : "0.65x (Slow)") : meta.speechRate === 1.0 ? (isZh ? "1.0x (快速)" : "1.0x (Fast)") : (isZh ? "0.85x (標準)" : "0.85x (Normal)")}</b></button>
      <button id="modal-autospeak">${isZh ? "題目前自動朗讀發音" : "Auto-Pronounce Words"} <b>${meta.autoSpeak ? (isZh ? "開啟 (ON)" : "ON") : (isZh ? "關閉 (OFF)" : "OFF")}</b></button>
      <button id="modal-home">${isZh ? "儲存並返回主畫面" : "Save & return to title"} <b>→</b></button>
      <button id="modal-reset" class="danger-button">${isZh ? "重置本次冒險進度" : "Erase saved journey"} <b>×</b></button>
    </div>`);
  $("#modal-sound").addEventListener("click", () => { toggleSound(); showSettings(); });
  $("#modal-bilingual").addEventListener("click", () => {
    toggleBilingual();
    showSettings();
  });
  $("#modal-speech-rate").addEventListener("click", () => {
    const rates = [0.85, 1.0, 0.65];
    const currIdx = rates.indexOf(meta.speechRate || 0.85);
    meta.speechRate = rates[(currIdx + 1) % rates.length];
    localStorage.setItem(META_KEY, JSON.stringify(meta));
    speakWord("Vocabulary");
    showSettings();
  });
  $("#modal-autospeak").addEventListener("click", () => {
    meta.autoSpeak = !meta.autoSpeak;
    localStorage.setItem(META_KEY, JSON.stringify(meta));
    toast(meta.autoSpeak ? (isZh ? "已開啟自動單字朗讀" : "Auto-pronounce enabled") : (isZh ? "已關閉自動單字朗讀" : "Auto-pronounce disabled"));
    showSettings();
  });
  $("#modal-home").addEventListener("click", () => { $("#modal").close(); returnHome(); });
  $("#modal-reset").addEventListener("click", () => {
    const promptMsg = isZh ? "確定要刪除當前進行中的遠征嗎？進度將會遺失。" : "Erase this saved journey? Your run progress will be lost.";
    if (confirm(promptMsg)) {
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

function tone(frequency, duration = 0.1, type = "sine", vol = 0.05) {
  if (!soundEnabled) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(vol, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.0001, audioContext.currentTime + duration);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(); oscillator.stop(audioContext.currentTime + duration);
  } catch { /* Sound is optional. */ }
}

function playHitSound(isCrit = false, isQuickWit = false) {
  if (!soundEnabled) return;
  if (isCrit || isQuickWit) {
    tone(620, .12, "triangle", 0.08);
    setTimeout(() => tone(940, .18, "sine", 0.07), 50);
  } else {
    tone(440, .09, "sine", 0.05);
    setTimeout(() => tone(660, .11, "triangle", 0.04), 40);
  }
}

function playStreakChord(streak = 1) {
  if (!soundEnabled) return;
  const baseFreqs = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
  const rootIndex = Math.min(baseFreqs.length - 1, Math.floor(streak / 2));
  const root = baseFreqs[rootIndex];
  tone(root, 0.22, "sine", 0.06);
  setTimeout(() => tone(root * 1.25, 0.25, "triangle", 0.05), 60);
  if (streak >= 5) {
    setTimeout(() => tone(root * 1.5, 0.3, "sine", 0.04), 120);
  }
}

let lastLowHpSoundTime = 0;
function playLowHpWarning() {
  if (!soundEnabled) return;
  const now = Date.now();
  if (now - lastLowHpSoundTime < 2400) return;
  lastLowHpSoundTime = now;
  tone(75, 0.18, "sine", 0.12);
  setTimeout(() => tone(65, 0.25, "sine", 0.10), 160);
}

function playChord(frequencies, duration = 0.35) {
  if (!soundEnabled) return;
  frequencies.forEach(f => tone(f, duration, "sine"));
}

function playArpeggio(frequencies, interval = 70, duration = 0.25) {
  if (!soundEnabled) return;
  frequencies.forEach((f, index) => {
    setTimeout(() => tone(f, duration, "triangle"), index * interval);
  });
}

function playVictoryFanfare() {
  playArpeggio([523.25, 659.25, 783.99, 1046.50, 1318.51], 80, 0.35);
}

function playChestFanfare() {
  playArpeggio([587.33, 739.99, 880.00, 1174.66], 60, 0.3);
}

function playLevelUpChime() {
  playArpeggio([440, 554.37, 659.25, 880, 1108.73], 70, 0.4);
}

function toast(html) {
  const item = document.createElement("div");
  item.className = "toast";
  item.innerHTML = html;
  $("#toast-region").appendChild(item);
  setTimeout(() => item.remove(), 2800);
}

$("#new-run-button").addEventListener("click", showClassSelection);
$("#daily-run-button")?.addEventListener("click", startDailyExpedition);
$("#sanctuary-title-button")?.addEventListener("click", showSanctuary);
$("#sanctuary-button")?.addEventListener("click", showSanctuary);
$("#achievements-title-button")?.addEventListener("click", showAchievements);
$("#achievements-button")?.addEventListener("click", showAchievements);
$("#fame-title-button")?.addEventListener("click", showHallOfFame);
$("#fame-button")?.addEventListener("click", showHallOfFame);
$("#continue-button").addEventListener("click", continueRun);
$("#practice-title-button").addEventListener("click", startPracticeFromTitle);
$("#home-button").addEventListener("click", event => { event.preventDefault(); returnHome(); });
$("#collection-button").addEventListener("click", showLexicon);
$("#review-queue-button").addEventListener("click", requestPractice);
$("#settings-button").addEventListener("click", showSettings);
$("#sound-toggle").addEventListener("click", toggleSound);
$("#sound-toggle-title").addEventListener("click", toggleSound);
$("#modal-close").addEventListener("click", () => $("#modal").close());
$("#relic-help").addEventListener("click", () => openModal(`<span class="modal-kicker">PASSIVE POWERS</span><h2>Relics</h2><p class="section-copy">Relics permanently change a run. Defeat elite enemies and region guardians to discover them, then combine their effects into a powerful build.</p>`));
$("#modal").addEventListener("click", event => {
  if (event.target === $("#modal")) $("#modal").close();
});

document.addEventListener("keydown", event => {
  if ($("#modal")?.open) return;
  
  // Potion hotkeys (1 or 2 with Shift or outside answer buttons)
  if (event.shiftKey && (event.key === "!" || event.key === "1")) {
    usePotion(0);
    return;
  }
  if (event.shiftKey && (event.key === "@" || event.key === "2")) {
    usePotion(1);
    return;
  }

  // If Mark to Study button is present, 'R' marks the word
  if (event.key.toLowerCase() === "r") {
    const studyBtn = $("#add-to-study-btn");
    if (studyBtn && !studyBtn.disabled && !studyBtn.hidden) {
      event.preventDefault();
      studyBtn.click();
      return;
    }
  }

  // If failed continue button or correct next question button is present, Space or Enter proceeds immediately
  const contBtn = $("#continue-battle-btn") || $("#next-question-btn");
  if (contBtn && !contBtn.hidden && (event.code === "Space" || event.key === "Enter")) {
    event.preventDefault();
    contBtn.click();
    return;
  }

  // Combat controls
  if (!battle || state?.screen !== "battle" || battle.locked) return;

  // Spacebar to pronounce word
  if (event.code === "Space") {
    event.preventDefault();
    speakCurrentWord();
    return;
  }
  // 'H' for Hint
  if (event.key.toLowerCase() === "h") {
    useHint();
    return;
  }
  // 'S' for Swap/Skip
  if (event.key.toLowerCase() === "s") {
    swapWord();
    return;
  }

  // 1-4 or A-D for selecting answer buttons
  let index = -1;
  if (event.key >= "1" && event.key <= "4") index = Number(event.key) - 1;
  else if (["a", "b", "c", "d"].includes(event.key.toLowerCase())) {
    index = event.key.toLowerCase().charCodeAt(0) - 97;
  }

  const buttons = [...document.querySelectorAll(".answer-button:not(:disabled):not(.faded)")];
  if (index >= 0 && index < buttons.length) buttons[index].click();
});

function applyLanguageToUI() {
  const meta = loadMeta();
  const isZh = Boolean(meta.bilingual);
  
  // 1. Language Toggle Buttons
  if ($("#lang-toggle-title")) $("#lang-toggle-title").textContent = isZh ? "🇹🇼 繁中 / EN" : "🇬🇧 EN / 繁中";
  if ($("#lang-toggle")) $("#lang-toggle").textContent = isZh ? "🇹🇼 繁中 / EN" : "🇬🇧 EN / 繁中";
  
  // 2. Title Screen
  const eyebrow = $(".hero .eyebrow");
  if (eyebrow) eyebrow.innerHTML = `<span></span> ${isZh ? "單字冒險 Roguelike" : "A vocabulary roguelike"}`;
  
  const heroH1 = $(".hero h1");
  if (heroH1) heroH1.innerHTML = isZh ? "字字皆為<br /><em>鋒利兵刃。</em>" : "Every word is<br /><em>a weapon.</em>";
  
  const heroCopy = $(".hero-copy");
  if (heroCopy) heroCopy.textContent = isZh ? "在不斷變化的語言世界中啟程冒險。學習新單字、構築遺物連擊，看看你的字彙力量能帶你走多遠。" : "Journey through a shifting world of language. Learn new words, build clever combos, and see how far your vocabulary can carry you.";
  
  if ($("#new-run-button")) $("#new-run-button").innerHTML = isZh ? "開啟全新冒險 <span>→</span>" : "Begin a new journey <span>→</span>";
  if ($("#daily-run-button")) $("#daily-run-button").textContent = isZh ? "⭐ 每日隨機遠征" : "⭐ Daily Expedition";
  if ($("#continue-button")) $("#continue-button").textContent = isZh ? "繼續當前冒險" : "Continue journey";
  
  const revCount = getReviewWords(true).length;
  if ($("#practice-title-button")) $("#practice-title-button").innerHTML = isZh ? `複習待加強單字 <span id="title-review-count">${revCount}</span>` : `Practice learning words <span id="title-review-count">${revCount}</span>`;
  
  const strip = $(".feature-strip");
  if (strip) {
    strip.innerHTML = isZh
      ? `<div><b>∞</b><span>無盡遠征<br />Expeditions</span></div><div><b>6</b><span>主題領域<br />Realms</span></div><div><b>450+</b><span>待掌握單字<br />Words</span></div>`
      : `<div><b>∞</b><span>Endless<br />expeditions</span></div><div><b>6</b><span>Word<br />realms</span></div><div><b>450+</b><span>Words to<br />master</span></div>`;
  }
  
  const heroCardSpan = $(".hero-word-card span");
  if (heroCardSpan) heroCardSpan.textContent = isZh ? "解鎖新單字" : "WORD DISCOVERED";
  
  const footer = $(".landing-footer");
  if (footer) footer.textContent = isZh ? "為熱愛探索的心靈打造 · 進度自動於本機儲存" : "Designed for curious minds · Progress saves locally";
  
  if ($("#sanctuary-title-button")) $("#sanctuary-title-button").textContent = isZh ? "🏛️ 聖殿天賦" : "🏛️ Sanctuary";
  if ($("#fame-title-button")) $("#fame-title-button").textContent = isZh ? "🏆 名人堂" : "🏆 Hall of Fame";
  if ($("#achievements-title-button")) $("#achievements-title-button").title = isZh ? "成就勳章" : "Achievements";

  // 3. Game Header
  const revQueue = $("#review-queue-button");
  if (revQueue) revQueue.innerHTML = isZh ? `單字複習 <span id="review-count">${revCount}</span>` : `Practice <span id="review-count">${revCount}</span>`;
  
  const collBtn = $("#collection-button");
  if (collBtn) collBtn.innerHTML = isZh ? `字彙庫 <span id="learned-count">${Object.keys(state?.learned || meta.learned || {}).length}</span>` : `Lexicon <span id="learned-count">${Object.keys(state?.learned || meta.learned || {}).length}</span>`;
  
  if ($("#fame-button")) $("#fame-button").textContent = isZh ? "名人堂 🏆" : "Fame 🏆";
  if ($("#sanctuary-button")) $("#sanctuary-button").textContent = isZh ? "萬字聖殿 🏛️" : "Sanctuary 🏛️";
  
  const achBtn = $("#achievements-button");
  if (achBtn) achBtn.innerHTML = isZh ? `成就 <span id="badge-count">${(meta.achievements || []).length}</span>` : `Badges <span id="badge-count">${(meta.achievements || []).length}</span>`;

  // 4. Adventurer Left Panel
  const resolveLabel = $(".health-block .stat-row span");
  if (resolveLabel) resolveLabel.textContent = isZh ? "意志生命" : "Resolve";
  
  const insightLabel = $(".xp-block .stat-row span");
  if (insightLabel) insightLabel.textContent = isZh ? "頓悟經驗" : "Insight";
  
  const resourceSmalls = document.querySelectorAll(".resource-row small");
  if (resourceSmalls.length >= 2) {
    resourceSmalls[0].textContent = isZh ? "火花" : "Sparks";
    resourceSmalls[1].textContent = isZh ? "墨水" : "Ink";
  }

  if ($("#potions-label")) $("#potions-label").textContent = isZh ? "魔藥與符文" : "Potions & Runes";
  
  const relicsLabel = $(".relics-block .stat-row span");
  if (relicsLabel) relicsLabel.textContent = isZh ? "攜帶遺物" : "Relics";
  
  const emptyRelic = $(".empty-relic");
  if (emptyRelic) emptyRelic.textContent = isZh ? "行囊目前空空如也" : "Your satchel is empty";

  // 5. Journey Right Panel
  const journeyKicker = $(".journey-heading small");
  if (journeyKicker) journeyKicker.textContent = isZh ? "當前進度" : "CURRENT PATH";
  
  const journeyH2 = $(".journey-heading h2");
  if (journeyH2) journeyH2.textContent = isZh ? "冒險旅程" : "Journey";
  
  const streakKicker = $(".streak-card small");
  if (streakKicker) streakKicker.textContent = isZh ? "當前連擊" : "CURRENT STREAK";
  
  const habitKicker = $(".habit-header small");
  if (habitKicker) habitKicker.textContent = isZh ? "7日連續學習打卡" : "7-DAY HABIT";
  
  const dailyKicker = $(".daily-kicker");
  if (dailyKicker) dailyKicker.textContent = isZh ? "每日任務" : "DAILY QUEST";
}

function toggleBilingual() {
  const meta = loadMeta();
  meta.bilingual = !meta.bilingual;
  localStorage.setItem(META_KEY, JSON.stringify(meta));
  applyLanguageToUI();
  toast(meta.bilingual ? "🇹🇼 <b>已切換為繁體中文介面模式</b>" : "🇬🇧 <b>Switched to English Interface Mode</b>");
  if (state?.screen === "battle") renderQuestion();
  else if (state?.screen === "choice") showPathChoice();
  updateHUD();
}

$("#lang-toggle")?.addEventListener("click", toggleBilingual);
$("#lang-toggle-title")?.addEventListener("click", toggleBilingual);

applyLanguageToUI();
updateContinueButton();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
