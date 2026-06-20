import { useMemo, useState } from 'react'
import { allWords } from '../data/letters.js'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// مەشىق 2: سۆزنى توغرا رەسىمگە (emoji) ماسلاشتۇرۇش.
// بالا ئالدى بىلەن سۆزنى چېكىدۇ، ئاندىن توغرا رەسىمنى چېكىدۇ.
export default function MatchWordImageExercise({ letter, onMistake, onDone }) {
  // دەرسنىڭ سۆزى + باشقا سۆزلەردىن تولدۇرۇپ 3 جۈپ ھاسىل قىلىمىز
  const pairs = useMemo(() => {
    const base = [letter.words[0]]
    const fillers = shuffle(allWords.filter((w) => w.letterId !== letter.id)).slice(0, 2)
    return shuffle([...base, ...fillers]).map((w, i) => ({ id: `${w.text}-${i}`, ...w }))
  }, [letter])

  const wordCol = useMemo(() => shuffle(pairs), [pairs])
  const emojiCol = useMemo(() => shuffle(pairs), [pairs])

  const [selectedWord, setSelectedWord] = useState(null)
  const [matched, setMatched] = useState([]) // id لىرى
  const [wrongEmoji, setWrongEmoji] = useState(null)

  function pickWord(id) {
    if (matched.includes(id)) return
    setSelectedWord(id)
    setWrongEmoji(null)
  }

  function pickEmoji(id) {
    if (!selectedWord || matched.includes(id)) return
    if (id === selectedWord) {
      const next = [...matched, id]
      setMatched(next)
      setSelectedWord(null)
      if (next.length === pairs.length) {
        setTimeout(onDone, 900)
      }
    } else {
      setWrongEmoji(id)
      onMistake()
      setTimeout(() => setWrongEmoji(null), 600)
    }
  }

  const allMatched = matched.length === pairs.length

  return (
    <div className="screen exercise">
      <h2 className="exercise-title">سۆزنى رەسىمگە ماسلاشتۇر</h2>

      <div className="match-board">
        <div className="match-col">
          {wordCol.map((p) => (
            <button
              key={p.id}
              className={`match-word${selectedWord === p.id ? ' selected' : ''}${
                matched.includes(p.id) ? ' matched' : ''
              }`}
              onClick={() => pickWord(p.id)}
              disabled={matched.includes(p.id)}
            >
              {p.text}
            </button>
          ))}
        </div>

        <div className="match-col">
          {emojiCol.map((p) => (
            <button
              key={p.id}
              className={`match-emoji${matched.includes(p.id) ? ' matched' : ''}${
                wrongEmoji === p.id ? ' wrong' : ''
              }`}
              onClick={() => pickEmoji(p.id)}
              disabled={matched.includes(p.id)}
            >
              {p.emoji}
            </button>
          ))}
        </div>
      </div>

      {allMatched && <div className="feedback-good">ناھايىتى ياخشى! 🎉</div>}
    </div>
  )
}
