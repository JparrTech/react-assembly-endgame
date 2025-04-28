import React from "react"
import Header from './components/Header.jsx'
import Status from './components/Status.jsx'
import Chip from './components/Chip.jsx'
import Letter from './components/Letter.jsx'
import KeyboardButton from './components/KeyboardButton.jsx'
import { nanoid } from 'nanoid'
import { languages } from '../languages.js'

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = React.useState("react")
  const [guessedLetters, setGuessedLetters] = React.useState([])
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  function handleKeyboardButtonClick(letter) {
    //add to our letter array state, and avoid duplicate entries. 
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter])
    }
  }
  console.log(`${guessedLetters} are in the list`)
  //Keyboard button components. 
  const keyboard = [...alphabet].map(letter => (
    <KeyboardButton
      letter={letter}
      key={nanoid()}
      selectButton={handleKeyboardButtonClick}
      isCorrect={(guessedLetters.includes(letter) && currentWord.toUpperCase().includes(letter))}
      isWrong={(guessedLetters.includes(letter) && !currentWord.toUpperCase().includes(letter))}
    />
  ))

  //Letters in the current Word
  const wordDisplay = [...currentWord].map(letter => {
    //Add logic to show letter in word only when correctly guessed. 
    return (
      <Letter
        letter={letter.toUpperCase()}
        key={nanoid()}
        guessedLetters = {guessedLetters}
      />
    )
  }
  )
  const gameStatus = 'won'
  //Create coding language chips using external json data
  const chips = languages.map(language => (
    <Chip
      name={language.name}
      backgroundColor={language.backgroundColor}
      color={language.color}
      key={language.name}
    />
  ))

  return (
    <main>
      <Header />
      <Status gameStatus={gameStatus} />
      <div className="all-chips">
        {chips}
      </div>
      <section className="letters-display">
        {wordDisplay}
      </section>
      <section className="keyboard">
        {keyboard}
      </section>
      <button className="new-game">New Game</button>
    </main>
  )

}