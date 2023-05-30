import { useState } from "react"

export default function FocusableTextInput( { enabled_style, disabled_style, ...props } ) {


    let _enabled_style = {

        ...enabled_style
    }

    let _disabled_style = {
        border: 'none',
        ...disabled_style
    }
    
    const [_style, setStyle] = useState(_disabled_style);


    const handleMouseEnter = () => {
        setStyle(_enabled_style);
    }

    const handleMouseLeave = () => {
        setStyle(_disabled_style);
    }

    return (
        <input 
            type='text'
            style={{
                ..._style
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props} 
        />
    )
}