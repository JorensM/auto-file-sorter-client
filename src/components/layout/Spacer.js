export default function Spacer({height, width}) {

    const style = {
        height: height || '0px',
        width: width || '0px'
    }

    return (
        <div style={style}>

        </div>
    )
}