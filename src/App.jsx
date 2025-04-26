import React from "react"
import Header from './components/Header.jsx'
import Status from './components/Status.jsx'
import Chip from './components/Chip.jsx'
import { languages } from '../languages.js'

export default function AssemblyEndgame() {
  const gameStatus = 'won'
  //Create coding language chips using external json data
  const chips = languages.map(language => (

    <Chip
      name={language.name}
      backgroundColor={language.backgroundColor}
      color={language.color}
      key={language.name}
    />

  )
  )

  return (
    <>
      <Header />
      <Status gameStatus={gameStatus} />
      <div className="all-chips">
        {chips}
      </div>
      <main>
      </main>
    </>
  )


}