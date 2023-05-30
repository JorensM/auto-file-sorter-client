export default function H2(props) {

    let style = {
        borderBottom: '1px solid gray'
    }

    if( props.noMargin ) {
        style.marginTop = '0px';
        style.marginBottom = '0px';
    }

    return (
        <h2 style={style}>
            {props.children}
        </h2>
    )
}