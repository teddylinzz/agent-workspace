const REGIONS = [
  {
    name: "The Verdant Verge",
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
    subtitle: "Seeker of Etymology",
    icon: "🎓",
    hp: 38,
    sparks: 5,
    ink: 10,
    relic: "prism",
    desc: "Starts with +2 Sparks and the Meaning Prism. Clues remove 2 wrong answers.",
    quote: "Every word is an open book."
  },
  {
    id: "bard",
    name: "The Bard",
    subtitle: "Rhythmic Master",
    icon: "🪕",
    hp: 42,
    sparks: 3,
    ink: 15,
    relic: "ember",
    desc: "Streaks heal resolve and deal +40% combo power. Starts with Ember Vial.",
    quote: "Language is music in disguise."
  },
  {
    id: "duelist",
    name: "The Duelist",
    subtitle: "Blade of Wit",
    icon: "⚔️",
    hp: 40,
    sparks: 3,
    ink: 0,
    relic: "needle",
    desc: "Longer Quick Wit window (+1.5s) and deals massive opening burst damage.",
    quote: "Cut through confusion with razor wit."
  },
  {
    id: "cartographer",
    name: "The Cartographer",
    subtitle: "Uncharted Explorer",
    icon: "🧭",
    hp: 50,
    sparks: 3,
    ink: 30,
    relic: "bookmark",
    desc: "High starting Resolve (+10 HP), extra starting Ink (+30), and Golden Bookmark.",
    quote: "Every uncharted phrase is a new horizon."
  }
];

const RELICS = [
  { id: "echo", icon: "❞", name: "Echo Quill", text: "+3 damage for every correct answer." },
  { id: "shield", icon: "◉", name: "Patient Stone", text: "Ignore the first wrong answer in each battle." },
  { id: "ember", icon: "♨", name: "Ember Vial", text: "Heal 2 resolve every third answer in a streak." },
  { id: "bookmark", icon: "▰", name: "Golden Bookmark", text: "Gain 30% more ink after encounters." },
  { id: "boots", icon: "⌁", name: "Wayfarer Boots", text: "+8 maximum resolve immediately." },
  { id: "prism", icon: "◇", name: "Meaning Prism", text: "Clues remove two wrong answers." },
  { id: "crown", icon: "♛", name: "Scholar's Crown", text: "Start each battle with +1 spark." },
  { id: "needle", icon: "↟", name: "Compass Needle", text: "Deal +5 damage on your first answer." },
  { id: "hourglass", icon: "⌛", name: "Chronos Hourglass", text: "Quick Wit reflex deals +6 extra damage and timer is 1.5s longer." },
  { id: "alembic", icon: "⚗️", name: "Alchemist's Crucible", text: "Gain +1 Ink for every letter in correct answers." },
  { id: "mirror", icon: "🪞", name: "Oracle's Mirror", text: "Gain +1 Insight whenever you take damage." },
  { id: "feather", icon: "🪶", name: "Phoenix Feather", text: "Revive with 20 Resolve once upon fatal damage." },
  { id: "magnifier", icon: "🔍", name: "Etymology Glass", text: "Always shows root/origin hint during battles." },
  { id: "ring", icon: "💍", name: "Ring of Fluency", text: "Streaks of 4+ restore 1 spark." },
  { id: "horn", icon: "📯", name: "Resonance Horn", text: "Deal +30% bonus damage to Elite and Boss guardians." },
  { id: "candle", icon: "🕯️", name: "Scholar's Candle", text: "Rest sites restore an extra 20% Resolve." }
];

const ACHIEVEMENTS = [
  { id: "first_step", name: "First Steps", icon: "🌱", desc: "Complete your first journey node." },
  { id: "scholar_25", name: "Lexical Seeker", icon: "📖", desc: "Discover 25 unique words in your lexicon." },
  { id: "master_10", name: "Memory Weaver", icon: "🧠", desc: "Master 10 words in the spaced repetition system." },
  { id: "streak_7", name: "Unbroken Chain", icon: "🔥", desc: "Reach a 7x word streak in battle." },
  { id: "streak_15", name: "Flawless Rhythm", icon: "⚡", desc: "Reach a 15x word streak in battle." },
  { id: "quick_wit_10", name: "Lightning Recall", icon: "⏱️", desc: "Trigger Quick Wit reflex 10 times." },
  { id: "relic_satchel", name: "Curio Collector", icon: "🎒", desc: "Carry 5 or more relics simultaneously." },
  { id: "daily_devotee", name: "Daily Habit", icon: "⭐", desc: "Complete a Daily Seeded Expedition." },
  { id: "riddle_solver", name: "Riddlemaster", icon: "🧩", desc: "Successfully unlock an Anagram Chest." },
  { id: "alchemy_adept", name: "Etymology Sage", icon: "🔮", desc: "Receive a blessing from the Word Alchemy Shrine." },
  { id: "bazaar_patron", name: "Bazaar Patron", icon: "◈", desc: "Purchase 3 items from the Wandering Merchant." },
  { id: "cycle_conqueror", name: "Endless Wanderer", icon: "👑", desc: "Complete Cycle 0 and enter the Endless Cycle." },
  { id: "guardian_slayer", name: "Guardian Bane", icon: "⚔️", desc: "Defeat 3 region guardians." },
  { id: "active_recall", name: "Active Producer", icon: "✍️", desc: "Complete a typed recall practice session." },
  { id: "all_realms", name: "Cosmic Polyglot", icon: "🌌", desc: "Discover at least one word from all 6 realms." },
  { id: "habit_7day", name: "7-Day Dedication", icon: "📅", desc: "Study 7 consecutive days in a row." }
];

const DAILY_QUESTS = [
  { id: "words_8", text: "Answer 8 words correctly", target: 8, reward: 20 },
  { id: "quick_3", text: "Score 3 Quick Wit answers", target: 3, reward: 25 },
  { id: "streak_5", text: "Achieve a 5x streak in battle", target: 5, reward: 22 },
  { id: "elites_1", text: "Defeat 1 Elite or Boss Guardian", target: 1, reward: 30 }
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
            <span class="achieve-status">${isUnlocked ? "UNLOCKED" : "LOCKED"}</span>
          </div>
        `;
      }).join("")}
    </div>
  `);
}

const SANCTUARY_TALENTS = [
  {
    id: "vitality", name: "Heart of Wisdom", icon: "💖",
    desc: "+3 Max Resolve per rank at start of all expeditions.",
    maxRank: 5, baseCost: 30, costMult: 1.5
  },
  {
    id: "sparks", name: "Spark Crucible", icon: "⚡",
    desc: "+1 Starting Spark slot per rank.",
    maxRank: 3, baseCost: 40, costMult: 1.8
  },
  {
    id: "inkwell", name: "Gilded Quill", icon: "◈",
    desc: "+10% extra Ink gained across all battles and events per rank.",
    maxRank: 4, baseCost: 35, costMult: 1.6
  },
  {
    id: "reflex", name: "Chronos Focus", icon: "⏱️",
    desc: "+0.4s extended Quick Wit speed reflex window per rank.",
    maxRank: 3, baseCost: 45, costMult: 1.7
  },
  {
    id: "merchant", name: "Bazaar Favor", icon: "🤝",
    desc: "6% discount on all Merchant prices per rank.",
    maxRank: 4, baseCost: 30, costMult: 1.5
  },
  {
    id: "phoenix", name: "Phoenix Aegis", icon: "🪶",
    desc: "Survive a lethal blow once per run, recovering 20 Resolve.",
    maxRank: 1, baseCost: 80, costMult: 1.0
  }
];

function showSanctuary() {
  const meta = loadMeta();
  meta.talents = meta.talents || {};
  meta.totalInk = meta.totalInk !== undefined ? meta.totalInk : 0;
  
  openModal(`
    <span class="modal-kicker">ANCIENT METAPROGRESSION</span>
    <h2>The Word Sanctuary</h2>
    <p class="section-copy">Channel your accumulated Ink into permanent blessings that empower all future expeditions. Permanent Ink Stash: <b>${meta.totalInk} ◈</b></p>
    
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
                <b>${t.name}</b>
                <span class="sanctuary-rank">Rank ${currRank} / ${t.maxRank}</span>
              </div>
              <p>${t.desc}</p>
            </div>
            <button class="button button-primary buy-talent-btn" data-talent="${t.id}" ${isMax || !canAfford ? "disabled" : ""}>
              ${isMax ? "MAX RANK" : `Upgrade · ${cost} ◈`}
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
        toast(`Upgraded <b>${talent.name}</b> to Rank ${meta.talents[talentId]}!`);
        playLevelUpChime();
        showSanctuary();
        if (state) updateHUD();
      }
    });
  });
}

function freshState(classId = "bard") {
  const meta = loadMeta();
  const knownWords = meta.learned || {};
  const heroClass = CLASSES.find(c => c.id === classId) || CLASSES[0];
  const talents = meta.talents || {};
  const bonusHp = (talents.vitality || 0) * 3;
  const bonusSparks = talents.sparks || 0;
  const hasPhoenixAegis = Boolean(talents.phoenix && talents.phoenix > 0);

  return {
    characterClass: heroClass.id,
    hp: heroClass.hp + bonusHp, maxHp: heroClass.hp + bonusHp, level: 1, xp: 0, xpNext: 6,
    sparks: heroClass.sparks + bonusSparks, ink: heroClass.ink, streak: 0, maxStreak: 0,
    region: 0, cycle: 0, node: 0, day: 1,
    wordsAnswered: 0, correct: 0, quest: 0, questClaimed: false,
    learned: { ...knownWords }, seen: [], relics: heroClass.relic ? [heroClass.relic] : [],
    sound: true, screen: "choice", startedAt: Date.now(),
    usedRevive: !hasPhoenixAegis,
    isDaily: false
  };
}

function loadMeta() {
  const defaults = {
    totalWords: 0, bestStreak: 0, expeditions: 0, totalInk: 0,
    learned: {}, reviews: {}, notes: {}, talents: {},
    bilingual: true, achievements: [], studyHistory: {},
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
    return { ...freshState(loaded.characterClass || "bard"), ...loaded };
  } catch { return null; }
}

function updateContinueButton() {
  $("#continue-button").hidden = !loadState();
  const reviewCount = getReviewWords(true).length;
  $("#practice-title-button").hidden = reviewCount === 0;
  $("#title-review-count").textContent = reviewCount;
}

function showClassSelection() {
  openModal(`
    <span class="modal-kicker">CHOOSE YOUR PATHFINDER</span>
    <h2>Select Archetype</h2>
    <p class="section-copy">Each archetype shapes your expedition with unique starting stats, resources, and passive relics.</p>
    <div class="class-grid">
      ${CLASSES.map(cls => `
        <button class="class-card" data-class="${cls.id}">
          <span class="class-icon">${cls.icon}</span>
          <div class="class-info">
            <small>${cls.subtitle}</small>
            <h3>${cls.name}</h3>
            <p>${cls.desc}</p>
            <div class="class-stats">
              <span><b>${cls.hp}</b> HP</span>
              <span><b>${cls.sparks}</b> Sparks</span>
              <span><b>${cls.ink}</b> Ink</span>
            </div>
            <span class="class-quote">“${cls.quote}”</span>
          </div>
        </button>
      `).join("")}
    </div>
  `);
  document.querySelectorAll("[data-class]").forEach(btn => {
    btn.addEventListener("click", () => {
      $("#modal").close();
      startNewRun(btn.dataset.class);
    });
  });
}

function startNewRun(classId = "bard") {
  state = freshState(classId);
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
  const region = REGIONS[state.region % REGIONS.length];
  document.documentElement.style.setProperty("--teal", region.tone);
  $("#region-label").textContent = region.name.toUpperCase();
  $("#day-label").textContent = state.day;
  $("#floor-label").textContent = `${state.node + 1} / 5`;
  $("#level-badge").textContent = `LV. ${state.level}`;
  
  const heroClass = CLASSES.find(c => c.id === state.characterClass) || CLASSES[0];
  const titleSmall = $(".player-title small");
  const titleH2 = $(".player-title h2");
  if (titleSmall) titleSmall.textContent = `${heroClass.subtitle.toUpperCase()}`;
  if (titleH2) titleH2.textContent = heroClass.name;
  
  $("#hp-text").textContent = `${state.hp} / ${state.maxHp}`;
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
  if (badgeCount) badgeCount.textContent = (loadMeta().achievements || []).length;

  $("#quest-progress").textContent = `${Math.min(state.quest, 8)} / 8 · Reward: ${state.questClaimed ? "claimed" : "20 ink"}`;
  $("#quest-bar").style.width = `${Math.min(100, state.quest / 8 * 100)}%`;
  $("#sound-toggle").textContent = soundEnabled ? "♪" : "×";
  $("#sound-toggle-title").textContent = soundEnabled ? "♪" : "×";
  renderRelics();
  updateHabitTracker();

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
    const pool = state.node === 0
      ? ["normal", "normal", "mystery"]
      : state.node === 2
        ? ["normal", "shop", "alchemy", "riddle"]
        : state.node === 3
          ? ["elite", "rest", "shop", "mystery"]
          : ["normal", "elite", "rest", "mystery"];
    let types = shuffle(pool).slice(0, 3);
    while (types.length < 3) types.push("normal");
    const details = {
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
        <span class="section-kicker">CHOOSE YOUR NEXT PAGE</span>
        <h1>The road divides.</h1>
        <p class="section-copy">Each route changes your expedition. Build for survival, trade ink with merchants, solve ancient riddles, or face dangerous guardians.</p>
        <div class="path-choices">
          ${types.map(type => {
            const d = details[type];
            return `<button class="path-card ${type}" data-path="${type}">
              ${type === "elite" ? '<span class="risk">RISKY</span>' : type === "shop" ? '<span class="risk safe">SHOP</span>' : ""}
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
  const scaling = state.cycle * 6 + state.region * 2 + state.node;
  const maxHp = type === "boss" ? 60 + scaling * 4 : type === "elite" ? 42 + scaling * 3 : 30 + scaling * 2;
  const enemy = type === "boss" ? ENEMIES.boss[state.region % ENEMIES.boss.length] : random(ENEMIES[type]);
  
  // Dynamic enemy traits
  const traitPool = type === "boss"
    ? ["armored", "heavy"]
    : type === "elite"
      ? shuffle(["armored", "siphoner", "heavy", "swift"])[0]
      : Math.random() < 0.45 ? random(["armored", "siphoner", "drainer", "swift"]) : "none";

  const initialShield = traitPool === "armored" ? (type === "boss" ? 24 + scaling : type === "elite" ? 16 + scaling : 10) : 0;
  
  battle = {
    type, name: enemy[0], kind: enemy[1], hp: maxHp, maxHp,
    shield: initialShield, maxShield: initialShield,
    trait: traitPool,
    damage: type === "boss" ? 10 + state.cycle * 2 : type === "elite" ? 8 + state.cycle : 6 + Math.floor(state.cycle / 2),
    turn: 0, blocked: false, first: true, locked: false, current: null, usedWords: [],
    currentIntent: null, startTime: Date.now()
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
  
  updateEnemyShieldUI();
  $("#enemy-art").classList.add(type);
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
  if (battle.shield > 0) {
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
  const roll = Math.random();
  const mode = battle.turn > 1 && roll < .25 ? "synonym" : battle.turn > 1 && roll < .5 ? "cloze" : "definition";
  const property = mode === "synonym" ? "synonym" : mode === "cloze" ? "word" : "definition";
  const distractors = shuffle(regionWords.filter(item => item.word !== word.word)).slice(0, 3).map(item => item[property]);
  const answers = shuffle([word[property], ...distractors]);
  battle.question = { mode, property, correctValue: word[property] };

  // Calculate Enemy Intent for this turn
  let intent;
  if (battle.trait === "heavy" && battle.turn % 3 === 0) {
    const heavyDmg = Math.round(battle.damage * 1.7);
    intent = { type: "heavy", label: `💥 ${heavyDmg} Slam`, damage: heavyDmg, desc: "Heavy strike charging!" };
  } else if (battle.trait === "siphoner" && Math.random() < 0.4) {
    intent = { type: "siphon", label: `✦ Siphon +${Math.max(4, battle.damage - 2)}`, damage: Math.max(4, battle.damage - 2), siphon: 1, desc: "Will steal 1 spark on hit" };
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
  $("#challenge-word").textContent = mode === "cloze" ? "A word is missing" : word.word;
  $("#pronunciation").textContent = mode === "cloze" ? "Use the sentence to find it" : word.phonetic;
  $("#challenge-prompt").textContent = mode === "synonym"
    ? "Choose the closest synonym"
    : mode === "cloze"
      ? makeCloze(word)
      : "Choose the closest meaning";

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
  $("#answer-grid").innerHTML = answers.map((answer, index) => `
    <button class="answer-button" data-answer="${escapeAttribute(answer)}">
      <span>${String.fromCharCode(65 + index)}</span>${answer}
    </button>`).join("");
  document.querySelectorAll(".answer-button").forEach(button => {
    button.addEventListener("click", () => answerQuestion(button, button.dataset.answer === battle.question.correctValue, mode));
  });
  updateHUD();
}

function escapeAttribute(text) {
  return text.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
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
    updateReviewRecord(word.word, true, "good");
    gainXp(1);
    
    let damage = 10 + Math.min(8, state.streak) + (hasRelic("echo") ? 3 : 0) + (battle.first && hasRelic("needle") ? 5 : 0);
    if (state.streak >= 5) damage += 4;
    
    // Quick Wit Bonus with Chronos Hourglass synergy
    const reflexThreshold = hasRelic("hourglass") ? 5.2 : 3.8;
    let isQuickWit = false;
    if (elapsedSec <= reflexThreshold) {
      isQuickWit = true;
      const bonusDmg = hasRelic("hourglass") ? 9 : 4;
      damage += bonusDmg;
      state.ink += (hasRelic("hourglass") ? 4 : 2);
    }
    
    // Horn of Resonance (+30% vs Boss/Elite)
    if ((battle.type === "boss" || battle.type === "elite") && hasRelic("horn")) {
      damage = Math.round(damage * 1.3);
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
    
    // Shield absorption logic
    if (battle.shield > 0) {
      if (battle.shield >= damage) {
        battle.shield -= damage;
        showDamage(`SHIELD −${damage}`, false);
      } else {
        const leftover = damage - battle.shield;
        battle.shield = 0;
        battle.hp = Math.max(0, battle.hp - leftover);
        showDamage(`BREAK! −${leftover}`, false);
      }
    } else {
      battle.hp = Math.max(0, battle.hp - damage);
      showDamage(damage, false);
    }
    
    $("#enemy-hp-bar").style.width = `${100 * battle.hp / battle.maxHp}%`;
    updateEnemyShieldUI();
    $("#enemy-art").classList.add("hurt");
    
    tone(520, .08); setTimeout(() => tone(690, .08), 80);
    const feedbackHeader = isQuickWit ? "<b>⚡ Quick Wit!</b> " : "<b>Exactly.</b> ";
    showFeedback(true, `${feedbackHeader}${wordMemoryMap(word)}`);
    
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
    const correctValue = battle.question.correctValue;
    buttons.find(item => item.dataset.answer === correctValue)?.classList.add("correct");
    const protectedHit = hasRelic("shield") && !battle.blocked;
    
    const intent = battle.currentIntent || { damage: battle.damage };
    
    if (protectedHit) {
      battle.blocked = true;
    } else {
      state.hp = Math.max(0, state.hp - intent.damage);
      if (hasRelic("mirror")) {
        gainXp(1);
        toast("🪞 <b>Oracle's Mirror:</b> Gained +1 Insight from adversity.");
      }
      if (intent.siphon && state.sparks > 0) {
        state.sparks -= 1;
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
        state.hp = 20;
        toast("🪶 <b>Phoenix Feather shattered!</b> Restored 20 Resolve.");
        showDamage("REVIVE", true);
        tone(600, .15); setTimeout(() => tone(880, .25), 100);
      }
    }
    
    state.streak = 0;
    updateReviewRecord(word.word, false);
    $("#enemy-art").classList.add("attack");
    document.body.insertAdjacentHTML("beforeend", '<span class="screen-flash"></span>');
    setTimeout(() => $(".screen-flash")?.remove(), 400);
    showDamage(protectedHit ? "BLOCK" : intent.damage, true);
    tone(150, .14);
    
    showFeedback(false, protectedHit
      ? `<b>Patient Stone blocked the blow.</b> The answer was “${correctValue}.” ${wordMemoryMap(word)}`
      : `<b>Not quite.</b> ${wordMemoryMap(word)}<small>Added to Words to Revisit. It will return later.</small>`);
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
  const healPercent = hasRelic("candle") ? 0.50 : 0.35;
  $("#stage").innerHTML = `
    <div class="event-stage">
      <div class="event-illustration">♨</div><span class="section-kicker">A QUIET CLEARING</span>
      <h1>Rest between words.</h1><p class="section-copy">For a moment, the forest stops asking questions. You may tend your resolve or prepare your mind.</p>
      <div class="event-options">
        <button class="button button-primary" data-rest="heal">Brew restorative tea<small>Restore ${Math.round(healPercent * 100)}% resolve${hasRelic("candle") ? " (Scholar's Candle +15%)" : ""}</small></button>
        <button class="button button-ghost" data-rest="spark">Study by firelight<small>Gain 2 sparks and 1 insight</small></button>
      </div>
    </div>`;
  document.querySelectorAll("[data-rest]").forEach(button => button.addEventListener("click", () => {
    if (button.dataset.rest === "heal") heal(Math.ceil(state.maxHp * healPercent));
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

function showShop() {
  state.screen = "event";
  const unowned = RELICS.filter(r => !state.relics.includes(r.id));
  const relicItem = unowned.length ? random(unowned) : null;
  const isCartographer = state.characterClass === "cartographer";
  const discount = isCartographer ? 0.8 : 1.0;
  
  const relicPrice = Math.round(24 * discount);
  const healPrice = Math.round(14 * discount);
  const sparkPrice = Math.round(10 * discount);
  const insightPrice = Math.round(12 * discount);

  $("#stage").innerHTML = `
    <div class="event-stage shop-stage">
      <div class="event-illustration shop-icon">◈</div>
      <span class="section-kicker">WANDERING BAZAAR${isCartographer ? " · CARTOGRAPHER 20% DISCOUNT" : ""}</span>
      <h1>Lexicon Bazaar</h1>
      <p class="section-copy">A cloaked scholar lays out rare curio, elixirs, and ancient relics. Your current ink: <b>${state.ink} ◈</b></p>
      
      <div class="shop-grid">
        ${relicItem ? `
          <div class="shop-item">
            <span class="shop-item-icon">${relicItem.icon}</span>
            <div class="shop-item-info">
              <b>${relicItem.name}</b>
              <p>${relicItem.text}</p>
            </div>
            <button id="buy-relic" class="button button-primary" ${state.ink < relicPrice ? "disabled" : ""}>
              Buy · ${relicPrice} ◈
            </button>
          </div>
        ` : ""}
        <div class="shop-item">
          <span class="shop-item-icon">♨</span>
          <div class="shop-item-info">
            <b>Tonic of Resolve</b>
            <p>Restore 16 Resolve immediately.</p>
          </div>
          <button id="buy-heal" class="button button-primary" ${state.ink < healPrice ? "disabled" : ""}>
            Buy · ${healPrice} ◈
          </button>
        </div>
        <div class="shop-item">
          <span class="shop-item-icon">✦</span>
          <div class="shop-item-info">
            <b>Spark Crystals</b>
            <p>Gain +2 Sparks for hints & swaps.</p>
          </div>
          <button id="buy-sparks" class="button button-primary" ${state.ink < sparkPrice ? "disabled" : ""}>
            Buy · ${sparkPrice} ◈
          </button>
        </div>
        <div class="shop-item">
          <span class="shop-item-icon">✧</span>
          <div class="shop-item-info">
            <b>Scroll of Insight</b>
            <p>Gain +3 Insight towards leveling up.</p>
          </div>
          <button id="buy-insight" class="button button-primary" ${state.ink < insightPrice ? "disabled" : ""}>
            Buy · ${insightPrice} ◈
          </button>
        </div>
      </div>
      <button id="leave-shop" class="button button-ghost" style="margin-top: 24px;">Continue the Journey →</button>
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
  const regionWords = REGIONS[state.region % REGIONS.length].words;
  const word = random(regionWords);
  let shuffledLetters = shuffle(word.word.toUpperCase().split(""));
  while (shuffledLetters.join("") === word.word.toUpperCase() && word.word.length > 2) {
    shuffledLetters = shuffle(shuffledLetters);
  }

  $("#stage").innerHTML = `
    <div class="event-stage riddle-stage">
      <div class="event-illustration riddle-icon">🧩</div>
      <span class="section-kicker">ANCIENT PUZZLE</span>
      <h1>The Riddler's Chest</h1>
      <p class="section-copy">A brass chest is sealed by scrambled runes. Unscramble the letters to claim the hidden relics and ink within.</p>
      
      <div class="riddle-box">
        <span class="riddle-clue-label">CLUE / DEFINITION</span>
        <blockquote class="riddle-clue">“${word.definition}”</blockquote>
        ${word.zh ? `<small class="riddle-zh">釋義: ${word.zh}</small>` : ""}
        
        <div class="letter-tiles" id="letter-tiles">
          ${shuffledLetters.map(l => `<span class="letter-tile">${l}</span>`).join("")}
        </div>
        
        <form id="anagram-form" class="anagram-form">
          <input id="anagram-input" type="text" autocomplete="off" spellcheck="false" placeholder="Type the unscrambled word…" aria-label="Unscrambled word">
          <button type="submit" class="button button-primary">Unlock Chest ➔</button>
        </form>
        <button id="skip-riddle" class="reveal-answer" style="margin-top: 14px;">Leave the chest (+8 Ink consolation)</button>
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
      toast("🎉 <b>Chest Unlocked!</b> +22 Ink & Discovered Relic choice!");
      completeNode(false);
      showRelicReward(22, "elite");
    } else {
      tone(180, .15);
      $("#anagram-input").classList.add("wrong");
      setTimeout(() => $("#anagram-input")?.classList.remove("wrong"), 600);
      toast("Not the right word. Look at the clue closely!");
    }
  });

  $("#skip-riddle")?.addEventListener("click", () => {
    state.ink += 8;
    toast("You pocketed 8 loose ink and moved forward.");
    completeNode();
  });

  $("#anagram-input")?.focus();
}

function showAlchemyShrine() {
  state.screen = "event";
  const ROOTS_QUIZ = [
    { root: "trans-", meaning: "across / beyond", word: "transcend", distractors: ["under / beneath", "backward / reverse", "against / anti"] },
    { root: "bene-", meaning: "good / well", word: "benefactor", distractors: ["dark / evil", "small / tiny", "fast / swift"] },
    { root: "chron-", meaning: "time", word: "synchronize", distractors: ["sound / voice", "fire / heat", "measure / count"] },
    { root: "luc- / lum-", meaning: "light / brightness", word: "luminous", distractors: ["water / fluid", "earth / ground", "wind / air"] },
    { root: "dur-", meaning: "hard / lasting", word: "endure", distractors: ["soft / fragile", "quick / momentary", "cold / ice"] },
    { root: "scend-", meaning: "climb / step", word: "ascend", distractors: ["fall / drop", "burn / fire", "write / mark"] }
  ];

  const quiz = random(ROOTS_QUIZ);
  const options = shuffle([quiz.meaning, ...quiz.distractors]);

  $("#stage").innerHTML = `
    <div class="event-stage alchemy-stage">
      <div class="event-illustration alchemy-icon">🔮</div>
      <span class="section-kicker">ETYMOLOGY ALTAR</span>
      <h1>Word Alchemy Shrine</h1>
      <p class="section-copy">Ancient runes glow with linguistic power. Connect the root to its primal meaning to receive a blessing from the altar.</p>
      
      <div class="alchemy-quiz">
        <span class="alchemy-prompt">What does the root <b>“${quiz.root}”</b> (as in <em>${quiz.word}</em>) mean?</span>
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
        toast(`The correct meaning was “${quiz.meaning}”. Gained +1 insight.`);
        completeNode();
      }
    });
  });
}

function showAlchemyBlessing() {
  $("#stage").innerHTML = `
    <div class="reward-stage">
      <span class="section-kicker">ROOT HARMONIZED</span>
      <h1>Choose Your Blessing</h1>
      <p class="section-copy">The shrine's glyphs align in brilliant golden light. Select your permanent expedition blessing:</p>
      
      <div class="reward-grid">
        <button class="reward-card" id="bless-vitality">
          <span class="reward-rarity">BLESSING</span>
          <span class="reward-icon">💖</span>
          <h3>Blessing of Vitality</h3>
          <p>+6 Maximum Resolve & restore 12 HP immediately.</p>
        </button>
        <button class="reward-card" id="bless-sparks">
          <span class="reward-rarity">BLESSING</span>
          <span class="reward-icon">⚡</span>
          <h3>Blessing of Clarity</h3>
          <p>Gain +3 Sparks and +1 Insight.</p>
        </button>
        <button class="reward-card" id="bless-ink">
          <span class="reward-rarity">BLESSING</span>
          <span class="reward-icon">◈</span>
          <h3>Blessing of Fortune</h3>
          <p>Gain +26 Ink to spend at the Bazaar.</p>
        </button>
      </div>
    </div>
  `;

  $("#bless-vitality")?.addEventListener("click", () => {
    state.maxHp += 6;
    heal(12);
    toast("<b>Blessing of Vitality:</b> +6 Max HP!");
    completeNode();
  });

  $("#bless-sparks")?.addEventListener("click", () => {
    state.sparks = Math.min(9, state.sparks + 3);
    gainXp(1);
    toast("<b>Blessing of Clarity:</b> +3 Sparks!");
    completeNode();
  });

  $("#bless-ink")?.addEventListener("click", () => {
    state.ink += 26;
    toast("<b>Blessing of Fortune:</b> +26 Ink!");
    completeNode();
  });
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
    const showZh = meta.bilingual && word.zh;
    return `<div class="lexicon-word ${review && !review.mastered ? "needs-review" : ""}">
      <div class="lex-header">
        <b>${word.word}</b>
        <span class="lex-pos">${word.pos || ""}</span>
        <span class="lex-level">${word.level || ""}</span>
        ${showZh ? `<span class="lex-zh">${word.zh}</span>` : ""}
      </div>
      <span class="lex-meta">${word.phonetic} · recalled ${count}×</span>
      <mark class="${status}">${status}</mark>
      <p>${word.definition}</p>
      ${word.root ? `<small class="lex-root">Origin: ${word.root}</small>` : ""}
      ${notes[key] ? `<blockquote>“${notes[key]}”</blockquote>` : ""}
    </div>`;
  }).filter(Boolean).join("") : '<p class="section-copy">Your lexicon is waiting for its first word.</p>';
  openModal(`<span class="modal-kicker">YOUR LIVING RECORD</span><h2>Lexicon</h2>
    <div class="mastery-strip"><div><b>${mastery.learning}</b><span>Learning</span></div><div><b>${mastery.strong}</b><span>Strong</span></div><div><b>${mastery.mastered}</b><span>Mastered</span></div></div>
    ${reviewWords.length ? `<div class="review-callout"><div><small>WORDS TO REVISIT</small><b>${dueCount} due now · ${reviewWords.length} learning</b><p>Short, no-penalty recall sessions strengthen the words you missed.</p></div><button id="start-review-modal" class="button button-primary">Practice now →</button></div>` : ""}
    <div class="lexicon-list">${content}</div>`);
  $("#start-review-modal")?.addEventListener("click", requestPractice);
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
  const distractors = shuffle(allWords.filter(item => item.word !== word.word)).slice(0, 3).map(item => item[property]);
  const answers = shuffle([word[property], ...distractors]);
  const typed = mode.startsWith("typed");
  const prompt = mode === "definition"
    ? "What does this word mean?"
    : mode === "audio-definition"
      ? "Listen to the word, then connect it to its meaning."
    : mode.includes("cloze")
      ? makeCloze(word)
      : word.definition;
  const label = mode === "definition" ? "MEANING RECALL" : mode === "cloze" ? "CONTEXT CLUE" : mode === "audio-definition" ? "LISTEN & CONNECT" : mode === "typed-cloze" ? "USE IN CONTEXT" : "ACTIVE PRODUCTION";
  practice.current = { word, mode, property, correctValue: word[property] };
  practice.attempts[word.word] = (practice.attempts[word.word] || 0) + 1;
  practice.answered = false;
  $("#stage").innerHTML = `<div class="practice-stage">
    <div class="practice-progress"><span>RECALL SESSION</span><b>${practice.index + 1} / ${practice.words.length}</b></div>
    <div class="practice-meter"><span style="width:${practice.index / practice.words.length * 100}%"></span></div>
    <div class="practice-card">
      <span class="practice-kicker">${label} · ${typed ? "TYPE IT FROM MEMORY" : "CHOOSE ONE"}</span>
      <div class="practice-word-row"><div><h1>${typed ? "Recall the word" : mode === "audio-definition" ? "Listen closely" : word.word}</h1><p>${typed ? `Starts with “${word.word[0]}” · ${word.word.length} letters` : mode === "audio-definition" ? "Sound → meaning" : word.phonetic}</p></div>${typed ? "" : '<button id="practice-speak" class="speak-button" aria-label="Hear pronunciation">◖))</button>'}</div>
      <p class="challenge-prompt practice-prompt">${prompt}</p>
      ${typed
        ? `<form id="typed-recall-form" class="typed-recall"><input id="typed-recall-input" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="Type the word…" aria-label="Type the missing word"><button class="button button-primary" type="submit">Check →</button></form><button id="reveal-answer" class="reveal-answer">I don't remember</button>`
        : `<div class="answer-grid">${answers.map((answer, index) => `<button class="answer-button practice-answer" data-answer="${escapeAttribute(answer)}"><span>${String.fromCharCode(65 + index)}</span>${answer}</button>`).join("")}</div>`}
      <div id="practice-feedback" class="practice-feedback" hidden></div>
    </div>
    <button id="leave-practice" class="practice-leave">← Return to journey</button>
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
  const score = practice.remembered.size;
  const total = practice.initialCount;
  $("#stage").innerHTML = `<div class="reward-stage practice-summary"><span class="section-kicker">RECALL SESSION COMPLETE</span><h1>Your memory grows roots.</h1><p class="section-copy">You practiced recognition, context, and active production. The words you found difficult will return sooner; confident recalls can rest longer.</p><div class="summary-stats"><div><b>${score}/${total}</b><span>Remembered</span></div><div><b>${getReviewWords().length}</b><span>Due now</span></div><div><b>${practice.words.length - total}</b><span>Smart retries</span></div></div><div class="hero-actions"><button id="practice-again" class="button button-primary">Practice again →</button><button id="practice-done" class="button button-ghost">Return to journey</button></div></div>`;
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
  const meta = loadMeta();
  openModal(`<span class="modal-kicker">JOURNEY OPTIONS</span><h2>Settings</h2><div class="settings-list">
    <button id="modal-sound">Sound effects <b>${soundEnabled ? "ON" : "OFF"}</b></button>
    <button id="modal-bilingual">Bilingual Hints (EN + 中文) <b>${meta.bilingual ? "ON" : "OFF"}</b></button>
    <button id="modal-speech-rate">Pronunciation Speed <b>${meta.speechRate === 0.65 ? "0.65x (Slow)" : meta.speechRate === 1.0 ? "1.0x (Fast)" : "0.85x (Normal)"}</b></button>
    <button id="modal-autospeak">Auto-Pronounce Words <b>${meta.autoSpeak ? "ON" : "OFF"}</b></button>
    <button id="modal-home">Save & return to title <b>→</b></button>
    <button id="modal-reset" class="danger-button">Erase saved journey <b>×</b></button>
  </div>`);
  $("#modal-sound").addEventListener("click", () => { toggleSound(); showSettings(); });
  $("#modal-bilingual").addEventListener("click", () => {
    meta.bilingual = !meta.bilingual;
    localStorage.setItem(META_KEY, JSON.stringify(meta));
    toast(meta.bilingual ? "Bilingual hints enabled (EN + 中文)" : "English-only mode enabled");
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
    toast(meta.autoSpeak ? "Auto-pronounce enabled" : "Auto-pronounce disabled");
    showSettings();
  });
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

function tone(frequency, duration = 0.1, type = "sine") {
  if (!soundEnabled) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(.04, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + duration);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(); oscillator.stop(audioContext.currentTime + duration);
  } catch { /* Sound is optional. */ }
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
  if (!battle || state?.screen !== "battle" || battle.locked) return;
  const index = Number(event.key) - 1;
  const buttons = [...document.querySelectorAll(".answer-button:not(:disabled)")];
  if (index >= 0 && index < buttons.length) buttons[index].click();
});

updateContinueButton();
