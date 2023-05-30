import { ActionTypeEnum } from "const";
import enumToSelectOptions from "util/enumToSelectOptions";
import FocusableSelect from "./FocusableSelect";

export default function ActionSelect({...props}) {
    return (
        <FocusableSelect
            options={enumToSelectOptions(ActionTypeEnum)}
            {...props}
        />
    )
}