export default function Select( { options, defaultValue, disabled, onMouseEnter, ...props } ) {
    return (
        <select
            defaultValue={defaultValue}
            disabled={disabled}
            {...props}
        >
            {options.map( option => {
                return (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                )
            })}
        </select>
    )
}