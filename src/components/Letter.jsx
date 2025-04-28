
export default function Letter({ letter, guessedLetters }) {
    const displayLetter = guessedLetters.includes(letter)
    return (
        <span className="letter-background">
            {displayLetter? <p className='letter'>{letter}</p>: null}
        </span>
    )
}