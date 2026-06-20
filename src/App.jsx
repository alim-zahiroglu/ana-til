import { useState } from 'react'
import { letters } from './data/letters.js'
import { useProgress } from './hooks/useProgress.js'
import HomeScreen from './components/HomeScreen.jsx'
import LessonScreen from './components/LessonScreen.jsx'
import ChooseLetterExercise from './components/ChooseLetterExercise.jsx'
import MatchWordImageExercise from './components/MatchWordImageExercise.jsx'
import RewardScreen from './components/RewardScreen.jsx'

// مەشىق نەتىجىسىگە قاراپ يۇلتۇز ھېسابلاش (1–3)
function starsForMistakes(mistakes) {
  if (mistakes === 0) return 3
  if (mistakes <= 2) return 2
  return 1
}

export default function App() {
  const { completeLetter, getStars, isCompleted } = useProgress()
  const [screen, setScreen] = useState('home') // home | lesson | choose | match | reward
  const [letterIndex, setLetterIndex] = useState(0)
  const [mistakes, setMistakes] = useState(0)

  const currentLetter = letters[letterIndex]

  function openLetter(index) {
    setLetterIndex(index)
    setMistakes(0)
    setScreen('lesson')
  }

  function goHome() {
    setScreen('home')
  }

  function finishLesson() {
    const stars = starsForMistakes(mistakes)
    completeLetter(currentLetter.id, stars)
    setScreen('reward')
  }

  function nextLetter() {
    const next = letterIndex + 1
    if (next < letters.length) {
      openLetter(next)
    } else {
      goHome()
    }
  }

  return (
    <div className="app">
      {screen === 'home' && (
        <HomeScreen
          letters={letters}
          getStars={getStars}
          isCompleted={isCompleted}
          onSelect={openLetter}
        />
      )}

      {screen === 'lesson' && (
        <LessonScreen
          letter={currentLetter}
          onBack={goHome}
          onStart={() => setScreen('choose')}
        />
      )}

      {screen === 'choose' && (
        <ChooseLetterExercise
          letter={currentLetter}
          onMistake={() => setMistakes((m) => m + 1)}
          onDone={() => setScreen('match')}
        />
      )}

      {screen === 'match' && (
        <MatchWordImageExercise
          letter={currentLetter}
          onMistake={() => setMistakes((m) => m + 1)}
          onDone={finishLesson}
        />
      )}

      {screen === 'reward' && (
        <RewardScreen
          letter={currentLetter}
          stars={starsForMistakes(mistakes)}
          hasNext={letterIndex + 1 < letters.length}
          onHome={goHome}
          onNext={nextLetter}
        />
      )}
    </div>
  )
}
