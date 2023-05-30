import LinkButton from "../buttons/LinkButton";


const style = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottom: "1px solid black",
    height: "64px",
    paddingRight: '32px'
}

const style_navigation = {
    display: 'flex',
    gap: '16px',
    width: "fit-content",
    marginLeft: 'auto'
}

export default function Header(props) {
    return (
        <header style={ style }>
            <div style={ style_navigation }>
                { props.links.map( link => {
                    return <LinkButton key={link.href} label={link.label} href={link.href}/>
                })}
            </div>
        </header>
    );
}