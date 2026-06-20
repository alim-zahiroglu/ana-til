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
]

// بارلىق سۆزلەرنى بىر تىزىمغا يىغىش (ماسلاشتۇرۇش/خاتا تاللاش ئۈچۈن لازىم بولىدۇ)
export const allWords = letters.flatMap((letter) =>
  letter.words.map((word) => ({ ...word, letterId: letter.id, char: letter.char })),
)
