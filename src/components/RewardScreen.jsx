import { useMemo } from 'react'

// مۇكاپات بېتى: يۇلتۇز، تەبرىك ۋە confetti.
export default function RewardScreen({ letter, stars, hasNext, onHome, onNext }) {
  // ئاددىي confetti — تەسادىپىي ئورۇن ۋە رەڭدىكى بۆلەكلەر
  const confetti = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.6,
        emoji: ['🎉', '⭐', '🎈', '✨', '🌟'][i % 5],
      })),
    [],
  )

  return (
    <div className="screen reward" style={{ '--card-color': letter.color }}>
      <div className="confetti-layer" aria-hidden="true">
        {confetti.map((c) => (
          <span
            key={c.id}
            className="confetti"
            style={{ left: `${c.left}%`, animationDelay: `${c.delay}s` }}
          >
            {c.emoji}
          </span>
        ))}
      </div>

      <h2 className="reward-title">ئاپىرىن! 🎉</h2>
      <p className="reward-sub">
        «{letter.char}» ھەرىپىنى تاماملىدىڭ!
      </p>

      <div className="reward-stars">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`reward-star${i < stars ? ' on' : ''}`}>
            ⭐
          </span>
        ))}
      </div>

      <div className="reward-actions">
        {hasNext && (
          <button className="big-btn" onClick={onNext}>
            كېيىنكى ھەرىپ ➡️
          </button>
        )}
        <button className="big-btn ghost" onClick={onHome}>
          ئۆيگە قايتىش 🏠
        </button>
      </div>
    </div>
  )
}
