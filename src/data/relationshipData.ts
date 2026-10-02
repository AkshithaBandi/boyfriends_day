/**
 * =========================================================================
 *  MIDNIGHT ROMANCE — RELATIONSHIP DATA & PERSONALIZATION CONFIGURATION
 *  Dedicated to: Teja & Achii ❤️
 * =========================================================================
 */

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  location?: string;
  quote?: string;
  isSep12Picture?: boolean;
  accentColor?: string;
}

export interface LoveCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category?: string;
}

export interface KeepsakeItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  type: string;
  description: string;
  highlight: string;
}

export interface IfOurLoveWereItem {
  id: string;
  category: string;
  prompt: string;
  answer: string;
  subtext: string;
  iconName: string;
}

export interface OpenWhenMessage {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  themeColor: string;
  message: string;
  advice: string;
  virtualGift: string;
}

export interface InsideJoke {
  id: string;
  title: string;
  teaser: string;
  explanation: string;
  context: string;
  dateOrPlace?: string;
  emoji: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  funFact?: string;
}

export interface ReasonToChoose {
  id: string;
  reason: string;
  highlight?: string;
}

export interface RelationshipConfig {
  boyfriendName: string;
  boyfriendNickname: string;
  myName: string;
  myNickname: string;
  relationshipStartDate: string;
  firstMeetDate: string;
  breakupDate: string;
  patchUpDate: string;
  sep12MeetDate: string;
  isLongDistance: boolean;

  hero: {
    badge: string;
    greeting: string;
    warningNotice: string;
    enterButtonText: string;
    mainHeadline: string;
    mainSubtitle: string;
    scrollIndicatorText: string;
    heroImageCaption: string;
  };

  sep12Gallery: {
    title: string;
    subtitle: string;
    date: string;
    location: string;
    caption: string;
  };

  song: {
    title: string;
    artist: string;
    album: string;
    audioUrl: string;
    durationSeconds: number;
    favoriteLyric: string;
  };

  timeline: TimelineEvent[];
  thingsILove: LoveCard[];
  keepsakes: KeepsakeItem[];
  ifOurLoveWere: IfOurLoveWereItem[];

  loveLetter: {
    letterTitle: string;
    letterDate: string;
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
    postscript?: string;
  };

  openWhenMessages: OpenWhenMessage[];
  insideJokes: InsideJoke[];

  quiz: {
    title: string;
    subtitle: string;
    questions: QuizQuestion[];
    passingScore: number;
    perfectVerdict: string;
    highVerdict: string;
    lowVerdict: string;
  };

  reasonsIChooseYou: ReasonToChoose[];

  videoMemory: {
    isEnabled: boolean;
    title: string;
    subtitle: string;
    videoUrl?: string;
    posterUrl: string;
    caption: string;
    quote: string;
  };

  surprise: {
    buttonLabel: string;
    firstMessage: string;
    secondMessage: string;
    thirdMessage: string;
    finalLoveDeclaration: string;
  };

  finalSection: {
    heading: string;
    paragraphs: string[];
    signature: string;
  };

  secretEasterEgg: {
    triggerClicks: number;
    secretTitle: string;
    secretMessage: string;
    secretPassword?: string;
    secretDate: string;
  };
}

export const relationshipData: RelationshipConfig = {
  boyfriendName: "Teja",
  boyfriendNickname: "My Teja",
  myName: "Achii",
  myNickname: "Your Achii",

  // Key Milestones
  relationshipStartDate: "2023-06-27T00:00:00", // When Achii proposed to Teja
  firstMeetDate: "2024-03-02T00:00:00",         // First in-person meeting
  breakupDate: "2024-04-15T00:00:00",           // Middle of April 2024 breakup
  patchUpDate: "2026-09-08T00:00:00",           // Miracle patch-up date
  sep12MeetDate: "2026-09-12T00:00:00",         // Met in person & took our pictures!
  isLongDistance: true,

  hero: {
    badge: "Happy Boyfriend’s Day",
    greeting: "Hey, Teja ❤️",
    warningNotice: "Warning: You might smile a lot.",
    enterButtonText: "Open Your Surprise →",
    mainHeadline: "To the boy who became my favorite person...",
    mainSubtitle:
      "Miles apart right now, but you live in every single beat of my heart. A digital space crafted just for you — celebrating our connection, the laughter we share, and the future we're dreaming of together.",
    scrollIndicatorText: "Scroll to explore our world ↓",
    heroImageCaption: "Forever my favorite boy, my safe place, and my greatest love ❤️",
  },

  sep12Gallery: {
    title: "Our September 12, 2026 Pictures",
    subtitle: "The Day We Took So Many Beautiful Pictures Together ❤️",
    date: "September 12, 2026",
    location: "Our Reunion",
    caption:
      "When we reunited on September 12, 2026, we took so many pictures holding each other tight. After all the distance and months apart, every single photo captures our smiles, our tight hugs, and our endless love.",
  },

  song: {
    title: "Perfect",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    audioUrl: "/audio/perfect.mp3",
    durationSeconds: 261,
    favoriteLyric:
      "“'Cause we were just kids when we fell in love, not knowing what it was... I will not give you up this time. Darling, you look perfect to me.”",
  },

  timeline: [
    {
      id: "board-exams",
      date: "2022 Board Exams",
      title: "Where It All Began (The Silent Crush)",
      description:
        "We first laid eyes on each other during the 2022 board exams. Both of us had a mutual crush across the room. Aaroju gurtundha? Nen ninnu pilichi nuv sign cheyyaledhu ani cheppanu — I felt so genuinely happy just talking to you, completely unaware that you had a crush on me too!",
      location: "Board Exam Hall (2022)",
      quote: "“Aaroju ninnu pilichi nuv sign cheyyaledhu ani cheppanu... appude mana story start ayindemo.”",
      accentColor: "from-rose-500/20 to-burgundy-900/20",
    },
    {
      id: "instagram-confession",
      date: "Late 2022 / Early 2023",
      title: "Instagram Chats & Your Confession",
      description:
        "When you sent that follow request on Instagram, I texted you and we grew so close talking late into the night. Then you confessed your feelings. I didn't accept at first... but in my heart, you already took a special place.",
      location: "Instagram DMs",
      quote: "“Nen accept cheyyaledu kani... naa heart lo already nuvvu oka special place teesukunnav.”",
      accentColor: "from-amber-500/20 to-rose-900/20",
    },
    {
      id: "comedk-meet",
      date: "COMEDK Exam Day",
      title: "The 2-Minute Surprise Meet",
      description:
        "You came to see me just for 2 to 5 minutes on the COMEDK exam day! Even though it was so brief, seeing you standing there made me feel so genuinely happy.",
      location: "COMEDK Exam Center",
      quote: "“Just for 2-5 minutes nuvvu nannu chudadaniki vachav... I really felt happy seeing you.”",
      accentColor: "from-teal-500/20 to-emerald-900/20",
    },
    {
      id: "the-proposal",
      date: "June 27, 2023",
      title: "The Day Achii Proposed To Teja ❤️",
      description:
        "June 27, 2023 — aa roju nenu neeku propose chesanu! Ippatiki aa roju naaku chala special, endukante aa roje naak ardhamaindhi nuv entha important and naak entha daggarayya ani.",
      location: "June 27, 2023 — Our Proposal",
      quote: "“Aa roju naak ardhamaindhi nuv entha important and naak entha daggarayya ani.”",
      accentColor: "from-rose-600/20 to-amber-900/20",
    },
    {
      id: "first-meet",
      date: "March 2, 2024",
      title: "Our Very First In-Person Meeting",
      description:
        "March 2, 2024 — mana first meeting! Those 2 days were so special because we met after so many days. Even though there were confusing moments where I convinced myself it would be okay, it was our first time together in the real world.",
      location: "March 2, 2024 Meeting Spot",
      quote: "“Anni rojul tarvatha kalavadam... deep down I just convinced myself it will be okay.”",
      accentColor: "from-indigo-500/20 to-purple-900/20",
    },
    {
      id: "the-breakup",
      date: "Middle of April 2024",
      title: "When Storms Tested Us (The Breakup)",
      description:
        "Mana story always perfect ga undaledu. Chaala sarlu misunderstandings, hurt, and emotions vachayi. Konni memories gurthosthe ippatiki heart heavy aipothundi. Kani somehow... mana story akkade end avvaledu.",
      location: "Miles Apart (Long Distance)",
      quote: "“Maybe konni relationships ki second chance avasaram kaadu... avi first chance lone true ga untayi.”",
      accentColor: "from-zinc-500/20 to-rose-900/20",
    },
    {
      id: "patch-up",
      date: "September 8, 2026",
      title: "September 8, 2026 — Manam Malli Okkatayyamu ❤️",
      description:
        "September 8, 2026 — manam malli okkatayyamu. Life mana love ni konchem test chesindi anthe. Destiny brought us right back into each other's lives stronger than ever.",
      location: "The Rebirth of Teja & Achii",
      quote: "“Manam malli okkatayyamu... life konchem test chestundi anthe.”",
      accentColor: "from-pink-500/20 to-rose-900/20",
    },
    {
      id: "reunion-meet",
      date: "September 12, 2026",
      title: "September 12, 2026 — After Everything, It's Still You ❤️",
      description:
        "Morning road cross chesi ostunnappudu nuv venaka nunchi occhi chey vesina moment is so special. Those 2 days mana iddari madyalo gaali kooda vellakunda antha close unnam! Taking all those pictures, holding your hands, not giving a damn about what others think. After everything, it's still you.",
      location: "Our September 12 Reunion",
      quote: "“Mana iddari madyalo gaali kooda vellakunda antha close unnam... After everything, it's still you.”",
      isSep12Picture: true,
      accentColor: "from-amber-600/20 to-rose-800/20",
    },
    {
      id: "today-ldr",
      date: "Today & Every Day ❤️",
      title: "Long Distance, Stronger Than Any Mile",
      description:
        "Ours is a long distance relationship, but miles mean nothing when two hearts beat as one. Every late-night video call, every shared song, and every count of the days until our next hug makes us unstoppable.",
      location: "Different Cities, One Unbreakable Heart",
      quote: "“Distance only shows how far love can travel. And Teja, I’d cross oceans for you.”",
      accentColor: "from-rose-500/20 to-burgundy-900/20",
    },
  ],

  thingsILove: [
    {
      id: "smile",
      title: "Your Smile From The 2022 Exam Days",
      description:
        "That very same cute smile that gave me butterflies in the exam hall. Seeing you smile on video call or in person still makes my heart skip a beat every single time.",
      iconName: "Smile",
      category: "Butterflies",
    },
    {
      id: "confession",
      title: "The Courage You Had on Instagram",
      description:
        "How you gathered all your courage to confess your feelings to me first. Even when I hesitated, your honesty and sincerity showed me what a genuine, loving boy you are.",
      iconName: "HeartHandshake",
      category: "Bravery",
    },
    {
      id: "hug-sep12",
      title: "The Way You Hugged Me on Sep 12",
      description:
        "That tight, emotional hug on September 12, 2026 when we finally met again and took so many pictures together. It felt like every broken piece of my world fell right back into place.",
      iconName: "Heart",
      category: "Reunion",
    },
    {
      id: "laughter",
      title: "How You Make Me Laugh Through The Screen",
      description:
        "Even when I'm cranky, tired, or crying from missing you, you make that silly voice or tease me until I burst out laughing. Nobody knows how to cheer me up like you do.",
      iconName: "Laugh",
      category: "Humor",
    },
    {
      id: "habits",
      title: "Your Adorable Little Habits",
      description:
        "The way you rub your eyes when you're sleepy on call, how you look at me while I'm rambling, and how you pretend to act tough when you're actually the biggest softie with me.",
      iconName: "Sparkles",
      category: "Adorkable",
    },
    {
      id: "loyalty",
      title: "Coming Back on September 8th",
      description:
        "Through the breakup in mid-April 2024, the pain, the waiting, and the silence — our souls refused to be separated. Thank you for choosing me again on September 8, 2026.",
      iconName: "Compass",
      category: "Unbreakable",
    },
    {
      id: "sunshine",
      title: "Being My Safe Haven",
      description:
        "The world can be overwhelming, but talking to Teja at the end of the day makes everything calm. You are my peace, my home, and my favorite boy forever.",
      iconName: "Sun",
      category: "My Safe Place",
    },
  ],

  // Keepsakes celebrating tangible tokens of our love
  keepsakes: [
    {
      id: "k1",
      title: "The Unsigned Exam Slip",
      subtitle: "The Excuse That Started It All",
      date: "Exam Hall Memory",
      type: "First Spark",
      description: "That unforgettable moment when I called you over saying 'nuv sign cheyyaledhu'. I was pretending to just be helpful, but inside my heart was racing because I finally got to speak to my crush!",
      highlight: "The best excuse I ever made in my life",
    },
    {
      id: "k2",
      title: "The 2-Minute COMEDK Visit",
      subtitle: "Effort Speaks Louder Than Words",
      date: "Surprise Memory",
      type: "Little Gestures",
      description: "Coming all the way just to see me for 2 to 5 minutes on exam day. You proved that true care doesn't need grand speeches — it's shown in simply showing up.",
      highlight: "5 minutes that felt like pure gold",
    },
    {
      id: "k3",
      title: "The 3 AM Overheated Charger",
      subtitle: "LDR Sleep Call Survival Kit",
      date: "Every Single Week",
      type: "LDR Essential",
      description: "Phones burning against our pillows, whispering 'are you asleep?' until 4 AM. Distance couldn't stop us from ending and starting every day together.",
      highlight: "My favorite sound to fall asleep to",
    },
    {
      id: "k4",
      title: "The Road-Crossing Arm Hug",
      subtitle: "September 12th Morning Move",
      date: "Butterfly Feeling",
      type: "Sweetest Move",
      description: "Crossing the road and feeling you appear from behind, throwing your arm over my shoulder. You don't need to do big things to impress me; that tiny gesture melted my heart.",
      highlight: "Little things > everything else",
    },
    {
      id: "k5",
      title: "Our Interlocked Fingers",
      subtitle: "Holding Hands Without A Care",
      date: "Unapologetic Love",
      type: "My Safe Place",
      description: "Walking beside you, holding your hand tight, and not giving a single damn about what anyone else thinks. Mana iddari madyalo gaali kooda vellakunda antha close.",
      highlight: "Zero space between our hearts",
    },
    {
      id: "k6",
      title: "Our Future Boarding Pass",
      subtitle: "One Day No More 'I Miss You' Texts",
      date: "The End Goal",
      type: "Our Promise",
      description: "To marry you, have kids with you, and wake up beside you every single morning. One day this long distance will just be a chapter we smile back at.",
      highlight: "Until our very last breath 💍👶❤️",
    },
  ],

  ifOurLoveWere: [
    {
      id: "movie",
      category: "A Movie",
      prompt: "If our love were a movie...",
      answer: "A romance about two souls who could never forget each other.",
      subtext: "A real love story with quiet yearning, laughter, storms, and the sweetest plot twist of finding each other again.",
      iconName: "Film",
    },
    {
      id: "song",
      category: "A Song",
      prompt: "If our love were a song...",
      answer: "“Perfect” by Ed Sheeran.",
      subtext: "“'Cause we were just kids when we fell in love... I will not give you up this time.”",
      iconName: "Music",
    },
    {
      id: "place",
      category: "A Place",
      prompt: "If our love were a place...",
      answer: "Right beside you with our fingers intertwined.",
      subtext: "Where the whole noisy world completely fades away and there is only peace.",
      iconName: "MapPin",
    },
    {
      id: "food",
      category: "Food",
      prompt: "If our love were food...",
      answer: "Midnight snacks shared across video calls.",
      subtext: "Holding food up to the screen and pretending to feed each other across the miles.",
      iconName: "Utensils",
    },
    {
      id: "color",
      category: "A Color",
      prompt: "If our love were a color...",
      answer: "Deep Burgundy & Warm Starlight Amber.",
      subtext: "Passionate, resilient, and glowing through the longest and darkest distance.",
      iconName: "Palette",
    },
    {
      id: "season",
      category: "A Season",
      prompt: "If our love were a season...",
      answer: "Late Autumn — the season of coming home.",
      subtext: "Crisp cool air, wrapped up in your arms, knowing the hardest waiting is behind us.",
      iconName: "CloudSun",
    },
  ],

  loveLetter: {
    letterTitle: "A Letter I Want You To Keep, Teja",
    letterDate: "Boyfriend’s Day 💌",
    salutation: "Teja ❤️,",
    paragraphs: [
      "Mana story gurinchi alochisthe, honestly... konni stories plan chesukoni start avvavu. Avi ala ala mana life lo jaruguthu untayi, manaki teliyakundane oka beautiful story aipothayi. Mana story kuda alantide.",
      "2022 lo board exams time lo first time ninnu choosanu. Appudu maniddariki okariki okaram crush undedhi... kani matladukoledu. aaroju gurtundha nen ninnu pilichi nuv sign cheyyaledhu ani cheppanu aaroju i really felt happy because nen neetoh matladanu and i honestly didnt know neeku kooda naa meedha crush undhani. Enta funny ga undho kada? Appude mana story start ayindemo, kani manaki appudu teliyaledu.",
      "Tarvatha Instagram lo nuv follow request pettinappudu i just couldnt realize that is you ani and i was happy and texted you. Slowly, nuvvu naaku close ayyav. Oka roju nuvvu nee feelings naatho cheppav. Appudu nenu accept cheyyaledu... kani naa heart lo already nuvvu oka special place teesukunnav.",
      "And tarvatha u came to see me just for 2-5 minutes comedk exam roju i really felt happy seeing you.",
      "And then June 27, 2023.\n\nAa roju nenu neeku propose chesanu. ❤️\n\nIppatiki aa roju naaku chala special. Endukante aa roju naak ardhamaindhi nuv entha important and naak entha daggarayya ani.",
      "March 2, 2024... mana first meeting.\n\nThose 2 days are really special to me manam ala anni rojul tarvatha kalavadam and u literally missed the exam to meet me mana iddaram ala sccoty meedha tiragadam and the way i hugged you it's so special ..",
      "Kani mana story always perfect ga undaledu.\n\nManaki chaala sarlu breakup ayyindhi. Chala things jarigayi. Chala misunderstandings, hurt, emotions... konni memories happy ga unnayi, konni memories gurthosthe ippatiki heart heavy aipothundi.",
      "Kani somehow... mana story akkade end avvaledu.\n\nSeptember 8, 2026.\n\nManam malli okkatayyamu.\n\ni really thought it's over ani but devudu kalapali anukunnad emo neeku september 8 call cheyyagane even i changed my decision.",
      "September 12, 2026... malli ninnu kalisanu.\n\nI'm telling you aa roju morning nen road cross chesi ostunnappudu nuv ala na venaka nunchi occhi na meedha chey vesi i didnt expect aa moment is really special u dont need to do big things to impress me it's always the little things and those 2 days omg i really felt special, loved , and also 2 days mana iddari madyalo gaali kooda vellakunda antha close unnam i always wanted that , i want you to hold my hands, and not give a damn about what others will think.",
      "Aa moment lo naaku okkate anipinchindi...\n\n“After everything, it's still you.”",
      "Ippudu mana long distance relationship.\n\nNuvvu ikkada levu. Nenu akkada lenu. Mana madhya miles unnayi. Kani somehow, nuvvu naa day lo part ayipoyav.\n\n• Morning nee message kosam choodadam.\n• Night nee tho matladakunda nidra raakapotam.\n• Random ga edaina jarigithe first neetho share cheyyalanipinchadam.\n• Nuvvu happy ga unte nenu happy avvadam.\n• Nuvvu bad day lo unte ninnu hug cheskopoyina, nee pakkana undalani anipinchadam.\n\nIvi anni distance unna kuda mana madhya unna connection ni naaku gurthu chestayi.",
      "Teja, nenu perfect girlfriend kaakapovachu.\nNenu konni sarlu stubborn ga undochu.\nKonni sarlu overthink chestanu.\nKonni sarlu ninnu irritate kuda chestanu. 😂\n\nKani oka vishayam matram true...\n\nNenu ninnu genuinely love chestunnanu.\n\nMana past ni erase cheyyalani nenu korukonu. Endukante mana good memories tho paatu mana difficult moments kuda manalni ippudu unna manalaga chesayi.",
      "I want to create many more memories with you:\n\n• Inka chala dates.\n• Inka chala random conversations.\n• Inka chala fights... and obviously, patch-ups. 😂\n• Inka chala hugs.\n• Inka chala places together explore cheyyali.\n• Inka chala birthdays, festivals, ordinary days kuda kalisi celebrate cheyyali.\n\nOne day, ee long distance anedi just oka chapter laga migilipovali.\n\nAppudu \"I miss you\" ani text cheyyakunda, direct ga nee pakkana kurchoni ninnu chusi cheppali.",
      "Teja, naa life lo nuvvu just boyfriend kaadu.\n\nNuvvu naa best friend.\nNaa comfort person.\nNaa favorite notification.\nNaa happy place.\nAnd sometimes... naa biggest headache too. 😂❤️",
      "2022 lo silent crush ga start aina mana story...\n2023 lo love ga maarindi...\n2024 lo memories ichindi...\n2026 lo second chance ichindi...",
      "And my end goal is..\n\n💍 To Marry you\n👶 Have kids with you\n❤️ chivari breath varaku neetoh undali",
      "Happy Boyfriend's Day, Teja. ❤️\n\nMiles entha unna...\nNuvvu naa heart ki always close ga untav.\n\nI love you.",
    ],
    closing: "Forever your,",
    signature: "Achii. ❤️",
  },

  openWhenMessages: [
    {
      id: "missing-ldr",
      title: "Open when you're missing me across the miles 🥺",
      subtitle: "When the distance feels a little too heavy",
      emoji: "🥺",
      themeColor: "rose",
      message: `Teja ❤️,

Nuvvu ee letter open chestunnav ante... nannu miss avtunnav kada? 🥺

First of all, ikkada oka virtual hug undi. 🤗❤️

Nenu ippudu nee pakkana unte, first ninnu hug chesi, "enti ra, inta miss avtunnava nannu?" ani tease chestha.

Kani distance mana choice kaadu kada.

Mana madhya miles dooram undhi, different places lo unnam, busy days unnayi... kani mana hearts madhya distance undakudadani nenu korukuntunnanu.

Nuvvu nannu miss ayinappudu, mana first meeting gurthu techuko.

March 2, 2024.

And then September 12, 2026.

Manam kalisina aa moments gurthu techuko.

Because if we could survive all those days without being together, we can definitely survive a few more days until our next meeting.

Nuvvu nannu miss ayinappudu mana chats chaduvu.
Mana photos chudu.
Mana silly conversations gurthu techuko.

And most importantly...

Remember that somewhere, at the same time you're missing me, I'm probably missing you too.

Oka roju ee "I miss you" texts anni "I'm coming home to you" ani maarali.

Until then...

Naa heart lo oka small place already nee kosam permanently booked. ❤️

So don't be too sad, okay?

Close your eyes.
Imagine me sitting next to you.
And imagine me saying...

"Hey Teja... I'm still here. Distance only keeps us apart physically. It can't take me away from you."

I miss you too. 🥺❤️

Love you,
Your Achii.`,
      advice: "Send me a voice note right now telling me what you're thinking about.",
      virtualGift: "🫂 The tightest virtual bear hug, delivered straight to your chest.",
    },
    {
      id: "happy",
      title: "Open when you're happy ☀️",
      subtitle: "Let me celebrate your wins with you",
      emoji: "☀️",
      themeColor: "amber",
      message: `Teja ❤️,

Nuvvu ee letter happy ga unnappudu open chestunnav ante... first thing:

I'M SO HAPPY THAT YOU'RE HAPPY. 🥹❤️

Nee face meeda smile imagine cheskunte naaku kuda smile vastundi.

Nuvvu happy ga unnappudu, please aa moment ni fully enjoy cheyyi.

Don't overthink.
Don't worry about tomorrow.
Just enjoy today.

And if something really good happened...

I want to hear everything.

Every tiny detail.
Every stupid reason.
Every little thing that made you smile.

Because nee happiness lo nenu kuda part avvalani korukuntanu.

And Teja...

I hope you always remember that you deserve these happy moments.

Life always perfect ga undadu. Konni days difficult ga untayi.

So whenever life gives you a beautiful day...

Hold onto it.

And if possible, take a screenshot of that happiness in your mind.

Maybe one day manam old memories gurthu techukunnappudu, ee days anni kalisi navvukundam.

Until then...

Keep smiling.

Because honestly...

Nee smile naaku chala istam. ❤️

And yes...

Nuvvu happy ga unnappudu nannu miss avvakapothe kuda okay.

But at least oka tiny thought:

"Achii would be happy seeing me like this."

That's enough. 🥹❤️

Love you,
Achii.`,
      advice: "Take a screenshot of this happiness in your mind and tell me all the tiny details!",
      virtualGift: "🌟 A million virtual high-fives and kisses celebrating your happiness.",
    },
    {
      id: "badday",
      title: "Open when you're having a bad day 🌧️",
      subtitle: "You never have to fight your battles alone",
      emoji: "🌧️",
      themeColor: "blue",
      message: `Teja ❤️,

Okay.

Today is a bad day.

And I know sometimes "everything will be okay" ani cheppadam easy... but when you're actually having a terrible day, those words don't always help.

So I'm not going to tell you to immediately be okay.

You don't have to.

If you're tired, rest.

If you're angry, be angry.

If you're sad, cry.

If you need silence, take some time.

You don't have to pretend to be strong every single day.

But please remember...

One bad day doesn't mean you have a bad life.

One failure doesn't define you.

One mistake doesn't define you.

One difficult moment doesn't define who you are.

And if today feels too heavy...

Share it with me.

Nenu solution ivvalekapoyina parledhu.

Nenu just vintanu.

Nuvvu rant cheyyali ante rant cheyyi.
Nannu blame cheyyali ante adi kuda okay. 😂
Just don't keep everything inside.

Nenu physically nee pakkana undalekapovachu...

But emotionally, I'm here.

Imagine me sitting beside you right now.

No advice.

No lectures.

Just me holding your hand and u leaning on my shoulder

And tomorrow may not magically become perfect.

But we'll deal with tomorrow when it comes.

For today...

Take a breath.

Drink some water.

Eat something.

Rest.

And remember...

Someone out there loves you more than you probably realize.

That someone is me. ❤️

Bad day ayina...

Nuvvu alone kaadu.

Love you always,
Achii. ❤️`,
      advice: "Take a deep breath, drink some water, and remember you never have to be alone.",
      virtualGift: "☕ An unlimited listening ear, tight warm hugs, and zero judgment.",
    },
    {
      id: "cant-sleep",
      title: "Open when you can't sleep 🌙",
      subtitle: "Late-night thoughts across the distance",
      emoji: "🌙",
      themeColor: "indigo",
      message: `Teja 🌙❤️,

Still awake?

Of course. 😂

I wish I could just call you right now, tell you to put your phone away, close your eyes and sleep.

But since I'm not physically there...

This letter will have to do.

First, stop thinking about everything at once.

Tomorrow's problems can wait until tomorrow.

Right now, it's just you, me, and this moment.

Imagine we're lying next to each other, talking about absolutely random things at 2 AM.

One topic becomes another.

Then another.

And suddenly it's 4 AM and we're still talking.

Maybe we'll laugh about something stupid.

Maybe I'll irritate you.

Maybe you'll tell me to sleep.

And maybe I'll say "five more minutes."

You know those nights?

I want more of those with you.

But for now...

Close your eyes.

Take a deep breath.

And imagine my voice saying:

"Good night, Teja."

Imagine me giving you a forehead kiss.

And saying:

"Don't worry about tomorrow. I'll still be here when you wake up."

Because I will.

So put your phone down after reading this.

Yes, I'm telling you to stop scrolling. 😂

Sleep well, my favorite person.

Good night, Teja.

Sweet dreams.

And if I appear in your dream...

You better take me on a date. 😂❤️

Good night,
Your Achii 🌙`,
      advice: "Put your phone away, stop scrolling, and take a deep, slow breath.",
      virtualGift: "✨ A soft forehead kiss, sweet dreams, and a peaceful night.",
    },
    {
      id: "need-motivation",
      title: "Open when you need motivation 💪",
      subtitle: "A reminder of who you are",
      emoji: "💪",
      themeColor: "orange",
      message: `Teja ❤️,

Listen to me carefully.

Whatever you're going through right now...

Don't give up on yourself.

I know sometimes things don't happen the way we want.

Sometimes you work hard and still don't get the result.

Sometimes you compare yourself with everyone around you.

Sometimes you start thinking:

"Am I actually good enough?"

If you're thinking that right now...

YES.

You are.

You don't have to have everything figured out today.

You just have to take the next step.

One step.

Then another.

And another.

Don't look at how far you still have to go.

Look at how far you've already come.

You've survived days you thought you couldn't.

You've handled things that once felt impossible.

You've grown.

You've changed.

And you still have so much ahead of you.

and i'm tellign you i'm proud of you whatever you are doing right now 

So whatever your goal is...

Go for it.

I'll be cheering for you from wherever I am.

And when you succeed, I'm going to be the annoying girlfriend saying:

"I TOLD YOU YOU COULD DO IT." 😂❤️

And when you fail...

I'll still be here.

Because I don't love you only when you're winning.

I love you when you're figuring things out too.

So get up.

Try again.

Take your time.

But don't give up.

Your Achii believes in you. ❤️

Now go make me proud.

Love you,
Achii.`,
      advice: "Take one step at a time. I am so proud of you and cheering for you always!",
      virtualGift: "⚡ A 100% boost of unstoppable confidence and unwavering belief from your #1 fan.",
    },
    {
      id: "remind-loved",
      title: "Open when you need a reminder you're loved ❤️",
      subtitle: "Just in case you ever forget",
      emoji: "❤️",
      themeColor: "rose",
      message: `Teja babu❤️,

If you're opening this because you need a reminder that you're loved...

Here it is.

YOU ARE LOVED.

Very, very much.

Maybe sometimes I don't say it perfectly.

Maybe sometimes we fight.

Maybe sometimes I get angry.

Maybe sometimes distance makes everything harder than it should be.

But none of those things change how much you mean to me.

I love you on the days when you're happy.

I love you on the days when you're frustrated.

I love you when you're confident.

I love you when you doubt yourself.

I love your good days.

And I love you through your bad ones too.

I love the way you make me laugh.

I love our random conversations.

I love our stupid jokes.

I love our memories.

I love the fact that somewhere between two people who had a crush during board exams and two people who didn't even talk back then...

We somehow became us.

2022 lo just oka crush...

2023 lo love...

2024 lo memories...

2026 lo malli manam okatavvadam...

And now...

Us.

❤️

If you ever wonder whether you're important to me...

Remember this:

Out of all the people in this huge world...

You're the person I call mine.

You're the person I want to tell my random thoughts to.

You're the person whose messages can change my mood.

You're the person I miss when you're far away.

You're the person I want beside me when something good happens.

And you're the person I want to hold when something goes wrong.

So whenever you need a reminder...

Read this again.

And again.

And again.

You are loved.

You are wanted.

You are important.

And you are my Teja Babu. ❤️

Always.

Forever your Achii.`,
      advice: "Read this whenever you doubt it: You are wanted, you are important, and you are my Teja Babu.",
      virtualGift: "💌 An unbreakable, infinite promise that my heart is permanently yours.",
    },
  ],

  insideJokes: [
    {
      id: "board-exam-stare",
      title: "The 2022 Board Exam Sign Reminder",
      teaser: "Click if you know 👀",
      explanation:
        "Nen ninnu pilichi 'nuv sign cheyyaledhu' ani cheppadam! Pretending to just be helpful while secretly feeling so happy because I finally got to speak to you, without knowing you had a crush on me too!",
      context: "Board Exam Hall 2022",
      dateOrPlace: "Exam Hall",
      emoji: "📝",
    },
    {
      id: "insta-rejection",
      title: "The 'I don't accept your confession' Paradox",
      teaser: "Click if you know 👀",
      explanation:
        "You gathered all your guts to confess your feelings first on Instagram, and I acted all nonchalant and rejected it at first... only for me to turn around on June 27, 2023 and propose to you myself! 😂",
      context: "Instagram DMs & June 27, 2023",
      dateOrPlace: "Instagram to June 27",
      emoji: "💌",
    },
    {
      id: "sep-countdown",
      title: "The 4-Day Countdown (Sep 8 to Sep 12)",
      teaser: "Click if you know 👀",
      explanation:
        "Patching up on September 8th and then spending the next 96 hours literally counting every single minute until September 12th so we could finally hug and take all our pictures together!",
      context: "The fastest 4-day sprint to each other's arms",
      dateOrPlace: "September 8 – 12, 2026",
      emoji: "⏳",
    },
    {
      id: "ldr-screen-sleep",
      title: "The 'Are You Asleep?' LDR Video Calls",
      teaser: "Click if you know 👀",
      explanation:
        "Falling asleep on video call with our phones overheating on our pillows, waking up at 3 AM to whispered 'Teja, are you sleeping?' and mumbling back 'No, just resting my eyes...'",
      context: "Every single week of Long Distance",
      dateOrPlace: "Phone Screen to Phone Screen",
      emoji: "📱",
    },
  ],

  quiz: {
    title: "Okay Teja, Let's See How Well You Know Us...",
    subtitle: "A special test about Teja & Achii's real habits, little moments, and funny truths 😉",
    passingScore: 4,
    perfectVerdict: "6/6 ❤️ Perfect score! Teja knows our little dynamics inside out. You truly are my soulmate.",
    highVerdict: "Pretty solid score! You definitely earned unlimited video call kisses tonight.",
    lowVerdict: "Hmm... looks like someone needs extra cuddle lessons! Good thing Achii loves you anyway.",
    questions: [
      {
        id: "q1",
        question: "Which colour dress was I wearing on the first day of our board exams?",
        options: [
          "Navy Blue",
          "Emerald Green",
          "Dusty Rose",
          "Sunflower Yellow",
        ],
        correctIndex: 2,
        explanation: "Dusty Rose! That was the exact dress I wore on day one when our eyes first crossed paths.",
        funFact: "If you remembered this, you are officially the most attentive boyfriend in the entire world! ❤️",
      },
      {
        id: "q2",
        question: "When you came to see Achii on COMEDK exam day, how long did you stay?",
        options: [
          "A whole afternoon",
          "Just for 2 to 5 minutes",
          "An entire weekend",
          "Only 15 seconds",
        ],
        correctIndex: 1,
        explanation: "Just 2-5 minutes! Even though it was so quick, seeing you there made me feel so genuinely happy.",
        funFact: "You proved that true care doesn't need hours; it just needs showing up.",
      },
      {
        id: "q3",
        question: "On September 12th morning, what little surprise from you gave Achii the biggest butterflies?",
        options: [
          "Giving a huge speech in public",
          "Buying 10 giant teddy bears",
          "Singing out loud on the street",
          "Coming from behind while crossing the road and throwing your arm over her shoulder",
        ],
        correctIndex: 3,
        explanation: "Crossing the road and having you pull me close from behind. You don't need big things to impress me; it's always the little things.",
        funFact: "Mana iddari madyalo gaali kooda vellakunda antha close unnam!",
      },
      {
        id: "q4",
        question: "According to Achii's love letter, what is her official role in your life?",
        options: [
          "A quiet angel who never annoys you",
          "Your strict manager",
          "Best friend, comfort person, favorite notification, and biggest headache too",
          "Food delivery inspector",
        ],
        correctIndex: 2,
        explanation: "Best friend, comfort person, happy place... and sometimes your biggest headache too!",
        funFact: "You're stuck with this headache forever though!",
      },
      {
        id: "q5",
        question: "If Achii appears in your dreams tonight, what is the mandatory rule?",
        options: [
          "Ignore her and keep sleeping",
          "You better take her on a date",
          "Wake up and do 50 pushups",
          "Send a formal email",
        ],
        correctIndex: 1,
        explanation: "From our late-night letter: 'And if I appear in your dream... you better take me on a date!' 😉",
        funFact: "And dessert is strictly mandatory!",
      },
      {
        id: "q6",
        question: "What is Achii's ultimate dream and end goal with Teja?",
        options: [
          "To win one argument",
          "To steal all your sweatshirts",
          "To travel to Mars",
          "To marry you, have kids with you, and love you until her very last breath",
        ],
        correctIndex: 3,
        explanation: "To marry you, have kids with you, and stay by your side until my very last breath. 'After everything, it's still you.'",
        funFact: "Forever and always your Achii ❤️",
      },
    ],
  },

  reasonsIChooseYou: [
    { id: "r1", reason: "Because hearing your voice at the end of a hard day is my instant peace." },
    { id: "r2", reason: "Because you hold my hand tight without giving a single damn about what anyone thinks." },
    { id: "r3", reason: "Because even with miles between us, you make me feel like the most loved girl in the world." },
    { id: "r4", reason: "Because you are my best friend, my safe haven, and my favorite notification all in one." },
    { id: "r5", reason: "Because our connection survived silence, storms, and distance, proving we are meant to be." },
    { id: "r6", reason: "Because after everything we've lived through... it has always been you, Teja." },
  ],

  videoMemory: {
    isEnabled: false,
    title: "",
    subtitle: "",
    posterUrl: "",
    caption: "",
    quote: "",
  },

  surprise: {
    buttonLabel: "One Last Thing...",
    firstMessage: "You're stuck with me forever, Teja. ❤️",
    secondMessage: "Happy Boyfriend's Day, Teja.",
    thirdMessage: "I love you more than all the miles between us.",
    finalLoveDeclaration: "From 2022 board exams to June 27, 2023, March 2, 2024, and our September 12 pictures — always yours, Achii.",
  },

  finalSection: {
    heading: "Thank you for being my Teja.",
    paragraphs: [
      "Thank you for looking at me in that 2022 exam hall.",
      "Thank you for confessing first on Instagram.",
      "Thank you for saying yes when I proposed on June 27, 2023.",
      "Thank you for that nervous first smile on March 2, 2024.",
      "Thank you for coming back to me on September 8, 2026.",
      "And thank you for that unforgettable hug on September 12th when we took all our pictures together.",
    ],
    signature: "Happy Boyfriend’s Day ❤️ — Your Achii",
  },

  secretEasterEgg: {
    triggerClicks: 5,
    secretTitle: "Okay Teja... you found the secret 🤫",
    secretMessage:
      "You clicked 5 times! You are so curious, Teja. Here is a secret I never told you: back during our 2022 board exams, I couldn't focus on studying for the last 15 minutes because I was trying to figure out how to talk to you. And now, seeing all our September 12 pictures with you as my boyfriend, I am the luckiest girl on this planet.",
    secretDate: "Written with all my heart for Teja ❤️",
  },
};
