// ئۇيغۇر ئەرەب يېزىقىدىكى ھەرىپلەر ۋە مىسال سۆزلەر.
// ھەربىر سۆز شۇ ھەرىپتىن باشلىنىدۇ. رەسىم ئورنىدا emoji ئىشلىتىلىدۇ.
// كېيىن ئاۋاز قوشۇلسا، ھەر سۆزگە `audio` بۆلىكى قوشۇشقا بولىدۇ.

export const letters = [
  {
    id: 'alif',
    char: 'ئا',
    name: 'ئەلىپ',
    color: '#FF8A5C',
    words: [
      { text: 'ئالما', emoji: '🍎' },
      { text: 'ئات', emoji: '🐴' },
    ],
  },
  {
    id: 'be',
    char: 'ب',
    name: 'بە',
    color: '#5CC8FF',
    words: [
      { text: 'بال', emoji: '🍯' },
      { text: 'بېلىق', emoji: '🐟' },
    ],
  },
  {
    id: 'te',
    char: 'ت',
    name: 'تە',
    color: '#7BD389',
    words: [
      { text: 'تاش', emoji: '🪨' },
      { text: 'توشقان', emoji: '🐰' },
    ],
  },
  {
    id: 'dal',
    char: 'د',
    name: 'دال',
    color: '#C99CF2',
    words: [
      { text: 'دەرەخ', emoji: '🌳' },
      { text: 'دېڭىز', emoji: '🌊' },
    ],
  },
  {
    id: 'kap',
    char: 'ك',
    name: 'كاپ',
    color: '#FFC94D',
    words: [
      { text: 'كىتاب', emoji: '📖' },
      { text: 'كۆل', emoji: '🏞️' },
    ],
  },
  {
    id: 'mim',
    char: 'م',
    name: 'مىم',
    color: '#FF9EC4',
    words: [
      { text: 'مۇشۇك', emoji: '🐱' },
      { text: 'ماشىنا', emoji: '🚗' },
    ],
  },
  {
    id: 'nun',
    char: 'ن',
    name: 'نۇن',
    color: '#6FE0C8',
    words: [
      { text: 'نان', emoji: '🍞' },
      { text: 'نەي', emoji: '🎶' },
    ],
  },
  {
    id: 'gap',
    char: 'گ',
    name: 'گاپ',
    color: '#9AD0FF',
    words: [
      { text: 'گۈل', emoji: '🌷' },
      { text: 'گىلاس', emoji: '🍒' },
    ],
  },
  {
    id: 'e',
    char: 'ئە',
    name: 'ئە',
    color: '#FF6B6B',
    words: [
      { text: 'ئەينەك', emoji: '👓' },
      { text: 'ئەسەل', emoji: '🍯' },
    ],
  },
  {
    id: 'o',
    char: 'ئو',
    name: 'ئو',
    color: '#48BEFF',
    words: [
      { text: 'ئوتتۇز', emoji: '🔢' },
      { text: 'ئوقۇتقۇچى', emoji: '👩‍🏫' },
    ],
  },
  {
    id: 're',
    char: 'ر',
    name: 'رە',
    color: '#F7A072',
    words: [
      { text: 'رەسىم', emoji: '🖼️' },
      { text: 'رەڭ', emoji: '🎨' },
    ],
  },
  {
    id: 'sin',
    char: 'س',
    name: 'سىن',
    color: '#A78BFA',
    words: [
      { text: 'سۇ', emoji: '💧' },
      { text: 'سائەت', emoji: '⏰' },
    ],
  },
  {
    id: 'lam',
    char: 'ل',
    name: 'لام',
    color: '#34D399',
    words: [
      { text: 'لالە', emoji: '🌹' },
      { text: 'لامپا', emoji: '💡' },
    ],
  },
]

// بارلىق سۆزلەرنى بىر تىزىمغا يىغىش (ماسلاشتۇرۇش/خاتا تاللاش ئۈچۈن لازىم بولىدۇ)
export const allWords = letters.flatMap((letter) =>
  letter.words.map((word) => ({ ...word, letterId: letter.id, char: letter.char })),
)
