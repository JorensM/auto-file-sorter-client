export default function H2(props) {

    let style = {

    }

    if( props.noMargin ) {
        style.marginTop = '0px';
        style.marginBottom = '0px';
    }

    return (
        <h3 style={style}>
            {props.children}
        </h3>
    )
}