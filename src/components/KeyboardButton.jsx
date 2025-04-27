export default function Keyboard(props) {

    return (
        <button className = 'keyboard-key' onClick={()=> props.selectButton(props.letter)}>
            <p>{props.letter}</p>
        </button>
    )

}
