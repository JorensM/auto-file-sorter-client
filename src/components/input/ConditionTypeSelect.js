import { condition_type } from "const"
import FocusableSelect from "./FocusableSelect"

export default function ConditionTypeSelect( { defaultValue, ...props } ) {


    // function renderOption( condition_type ) {
    //     return <option value={condition_type.slug}>{condition_type.name}</option>
    // }

    return (
        <FocusableSelect
            options={
                Object.values(condition_type).map(type => {
                    return {value: type.slug, label: type.name}
                })
            }
            {...props}
        />
    )
}