import Select from "./Select";

export default function JobFrequencySelect({...props}) {

    const options = [1, 5, 10, 15];

    return (
        <Select
            options={
                options.map(option => {
                    return {
                        value: option,
                        label: `${option} Minutes`
                    }
                })
            }
            {...props}
        />
    )
}