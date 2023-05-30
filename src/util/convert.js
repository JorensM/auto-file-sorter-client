export function convertRelation(relation) {
    return relation == '&&' ? 'AND' : relation == '||' ? 'OR' : 'unknown';
}

export function convertConditionType( condition_type ) {
    const condition_type_name_map = {
        file_name: 'File name',
        date_created: 'Date created',
        file_size: 'File size'
    }

    return condition_type_name_map[ condition_type ];
}

export function convertStatement( statement ) {
    return statement == '==' ? 'EQUALS' : 
        statement == '<' ? 'IS LESS THAN' : 
        statement == '>' ? 'IS GREATER THAN' : 
        'unknown';
}