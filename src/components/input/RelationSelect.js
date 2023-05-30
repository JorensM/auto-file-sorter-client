import enumToSelectOptions from "util/enumToSelectOptions";
import { ActionRelationEnum } from "const";
import FocusableSelect from "./FocusableSelect";

export default function RelationSelect({...props}) {
    return (
        <FocusableSelect
            options={enumToSelectOptions(ActionRelationEnum)}
            {...props}
        />
    )
}