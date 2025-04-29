import React from "react"
import Header from './components/Header.jsx'
import Status from './components/Status.jsx'
import Chip from './components/Chip.jsx'
import Letter from './components/Letter.jsx'
import KeyboardButton from './components/KeyboardButton.jsx'
import { nanoid } from 'nanoid'
import { languages } from '../languages.js'

export default function AssemblyEndgame() {
  // State Values
  const [currentWord, setCurrentWord] = React.useState("react")
  const [guessedLetters, setGuessedLetters] = React.useState([])

  //Derived Values
  //Find the num of incorrect guesses
  let wrongGuessCount = 0
  guessedLetters.forEach(letter => {
    if (!currentWord.toUpperCase().includes(letter)) {
      wrongGuessCount++
    }
  });
  console.log(`${wrongGuessCount} wrong guesses`)

  //Static Values
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
    return (
      <Letter
        letter={letter.toUpperCase()}
        key={nanoid()}
        guessedLetters={guessedLetters}
      />
    )
  }
  )
  const gameStatus = 'won'
  //Create coding language chips using external json data, add the isEliminated classname for each wrong guess
  const chips = languages.map((language, index) => {
    let isEliminated = false
    if (wrongGuessCount > index) {
      console.log("Language Destroyed")
      isEliminated = true
    }
    return (

      <Chip
        name={language.name}
        backgroundColor={language.backgroundColor}
        color={language.color}
        key={language.name}
        isEliminated={isEliminated}
      />
    )

  })




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