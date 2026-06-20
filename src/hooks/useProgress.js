import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'ana-til-progress'

// تاماملانغان دەرسلەرنى localStorage دا ساقلايدۇ.
// شەكلى: { [letterId]: { stars: number } }
function readProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function useProgress() {
  const [progress, setProgress] = useState(readProgress)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch {
      // localStorage يوق بولسا جىممىدە ئۆتۈپ كېتىمىز
    }
  }, [progress])

  // بىر ھەرىپ تاماملانغاندا يۇلتۇز ساقلاش (ئەڭ يۇقىرى نەتىجىنى ساقلايمىز)
  const completeLetter = useCallback((letterId, stars) => {
    setProgress((prev) => {
      const existing = prev[letterId]?.stars ?? 0
      return { ...prev, [letterId]: { stars: Math.max(existing, stars) } }
    })
  }, [])

  const getStars = useCallback((letterId) => progress[letterId]?.stars ?? 0, [progress])
  const isCompleted = useCallback((letterId) => Boolean(progress[letterId]), [progress])

  return { progress, completeLetter, getStars, isCompleted }
}
