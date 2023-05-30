
const style = {

}

export default function LinkButton(props) {
    return (
        <a href={props.href}>
            {props.label}
        </a>
    )
}