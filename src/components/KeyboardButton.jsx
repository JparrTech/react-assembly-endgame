import clsx from "clsx"

export default function KeyboardButton(props) {
    const className = clsx(
        'keyboard-key',
        {
            'correct-guess': props.isCorrect,
            'wrong-guess': props.isWrong
        }
    )
    return (
        <button className = {className} onClick={()=> props.selectButton(props.letter)}>
            <p>{props.letter}</p>
        </button>
    )

}
