import { useState } from "react";
import Select from "./Select";

export default function FocusableSelect({style, ...props}) {

    const common_style = {
        display: 'flex',
        alignItems: 'center',
        border: 'none',
        backgroundColor: 'transparent',
        // cursor: 'pointer'
    }

    const disabled_style = {
        border: 'none',
        // WebkitAppearance: 'none',
        color: 'black',
        opacity: '1',
        ...common_style,
    }

    const enabled_style = {
        ...common_style
    }

    const [disabled, setDisabled] = useState(false);
    const [_style, setStyle] = useState(disabled_style);

    

    const onHoverIn = () => {
        console.log('enabling');
        //setDisabled(false);
        setStyle(enabled_style);
    }

    const onHoverOut = () => {
        //setDisabled(true);
        setStyle(disabled_style);
    }

    return (
        <div
            onMouseEnter={onHoverIn}
            onMouseLeave={onHoverOut}
        >
             <Select
                
                disabled={disabled}
                style={{
                    ..._style,
                    ...style
                }}
                {...props}
            />
        </div>
       
    )
}