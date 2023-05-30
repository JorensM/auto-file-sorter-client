import { ActionTargetEnum } from "const";
import enumToSelectOptions from "util/enumToSelectOptions";
import FocusableSelect from "./FocusableSelect";

export default function ActionTargetSelect({...props}) {
    return (
        <FocusableSelect
            options={enumToSelectOptions(ActionTargetEnum)}
            {...props}
        />
    )
}