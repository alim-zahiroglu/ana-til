import { useMemo, useState } from 'react'
import { letters } from '../data/letters.js'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// مەشىق 1: سۆز/رەسىم كۆرسىتىلىدۇ، توغرا باشلانغۇچى ھەرىپنى تاللايدۇ.
export default function ChooseLetterExercise({ letter, onMistake, onDone }) {
  const word = letter.words[0]

  // توغرا ھەرىپ + باشقا ھەرىپلەردىن 2 ئالدامچى، ئارىلاشتۇرۇلغان
  const options = useMemo(() => {
    const others = shuffle(letters.filter((l) => l.id !== letter.id)).slice(0, 2)
    return shuffle([letter, ...others])
  }, [letter])

  const [wrongId, setWrongId] = useState(null)
  const [correct, setCorrect] = useState(false)

  function handlePick(option) {
    if (correct) return
    if (option.id === letter.id) {
      setCorrect(true)
      setWrongId(null)
      setTimeout(onDone, 900)
    } else {
      setWrongId(option.id)
      onMistake()
    }
  }

  return (
    <div className="screen exercise">
      <h2 className="exercise-title">بۇ سۆز قايسى ھەرىپتىن باشلىنىدۇ؟</h2>

      <div className="prompt-card">
        <span className="prompt-emoji">{word.emoji}</span>
        <span className="prompt-word">{word.text}</span>
      </div>

      <div className="options-row">
        {options.map((option) => {
          const isCorrect = correct && option.id === letter.id
          const isWrong = wrongId === option.id
          return (
            <button
              key={option.id}
              className={`option-btn${isCorrect ? ' correct' : ''}${isWrong ? ' wrong' : ''}`}
              onClick={() => handlePick(option)}
              disabled={correct}
            >
              {option.char}
            </button>
          )
        })}
      </div>

      {correct && <div className="feedback-good">ئاپىرىن! ✅</div>}
      {wrongId && !correct && <div className="feedback-try">قايتا سىناڭ 🙂</div>}
    </div>
  )
}
