export default function enumToSelectOptions(enum_obj) {
    return Object.values(enum_obj).map(property => {
        return {value: property.slug, label: property.name}
    })
}