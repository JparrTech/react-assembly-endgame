import { clsx } from "clsx"
export default function Chip(props) {
    const className = clsx(
        'chip',
        {
            'lost': props.isEliminated
        }
    )
    const styleObj = {
        backgroundColor: props.backgroundColor,
        color: props.color
    }
    return (
        <p style={styleObj} className={className}>
            {props.name}
        </p>
    )


}