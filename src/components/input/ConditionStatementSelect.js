import { condition_statement } from "const"
import FocusableSelect from "./FocusableSelect"

export default function ConditionStatementSelect( { ...props } ) {
    return(
        <FocusableSelect
            options={
                Object.values(condition_statement).map(statement => { 
                    return {value: statement.slug, label: statement.name}
                })
            }
            {...props}
        />
    )
}