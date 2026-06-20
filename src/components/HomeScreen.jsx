// باش بەت: بارلىق ھەرىپلەرنى رەڭدار تور شەكلىدە كۆرسىتىدۇ.
// تاماملانغان ھەرىپتە يۇلتۇز كۆرۈنىدۇ.
export default function HomeScreen({ letters, getStars, isCompleted, onSelect }) {
  return (
    <div className="screen home">
      <header className="home-header">
        <h1 className="home-title">ئانا تىل 🌟</h1>
        <p className="home-subtitle">كەل، ھەرىپلەرنى بىللە ئۆگىنەيلى!</p>
      </header>

      <div className="letter-grid">
        {letters.map((letter, index) => {
          const stars = getStars(letter.id)
          const done = isCompleted(letter.id)
          return (
            <button
              key={letter.id}
              className={`letter-card${done ? ' is-done' : ''}`}
              style={{ '--card-color': letter.color }}
              onClick={() => onSelect(index)}
            >
              <span className="letter-card-char">{letter.char}</span>
              <span className="letter-card-name">{letter.name}</span>
              <span className="letter-card-stars">
                {[0, 1, 2].map((i) => (
                  <span key={i} className={i < stars ? 'star on' : 'star'}>
                    ⭐
                  </span>
                ))}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
