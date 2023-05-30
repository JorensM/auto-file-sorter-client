import { flex_row } from "../../style"
import Spacer from "../layout/Spacer"

export default function IconButton({ icon, label, onClick, href, style}) {
    return (
        <button
            style={{...flex_row, ...style }}
            onClick={ onClick }
        >
            {icon &&
                <div>
                    { icon }
                </div>
            }
            {label && icon && <Spacer width='4px'/>}
            {label &&
                <span>
                    { label }
                </span>
            }
        </button>
    )
}