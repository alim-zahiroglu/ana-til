// دەرس بېتى: چوڭ ھەرىپ، ئىسمى ۋە مىسال سۆزلەر (emoji بىلەن).
export default function LessonScreen({ letter, onBack, onStart }) {
  return (
    <div className="screen lesson" style={{ '--card-color': letter.color }}>
      <button className="back-btn" onClick={onBack} aria-label="ئارقىغا">
        →
      </button>

      <div className="lesson-letter-box">
        <span className="lesson-letter-char">{letter.char}</span>
        <span className="lesson-letter-name">{letter.name}</span>
      </div>

      <div className="lesson-words">
        {letter.words.map((word) => (
          <div key={word.text} className="lesson-word">
            <span className="lesson-word-emoji">{word.emoji}</span>
            <span className="lesson-word-text">{word.text}</span>
          </div>
        ))}
      </div>

      <button className="big-btn" onClick={onStart}>
        مەشىققە ئۆتۈش 🎮
      </button>
    </div>
  )
}
