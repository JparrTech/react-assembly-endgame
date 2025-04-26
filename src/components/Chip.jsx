
export default function Chip(props) {
    const styleObj = {
        backgroundColor: props.backgroundColor,
        color: props.color
    }
    return (
        <p style={styleObj}>
            {props.name}
        </p>
    )


}