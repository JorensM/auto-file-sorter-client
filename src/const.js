export const condition_type = {
    file_name: {
        slug: 'file_name',
        name: 'File name'
    },
    date_created: {
        slug: 'date_created',
        name: 'Date created'
    },
    file_size: {
        slug: 'file_size',
        name: 'File size'
    }
}

export const condition_statement = {
    equals: {
        slug: '==',
        name: 'Equals'
    },
    is_less_than: {
        slug: '<',
        name: 'Is less than'
    },
    is_greater_than: {
        slug: '>',
        name: 'Is greater than'
    }
}

export const ActionTypeEnum = {
    delete: {
        slug: 'delete',
        name: 'Delete'
    },
    create: {
        slug: 'create',
        name: 'Create'
    },
    move: {
        slug: 'move',
        name: 'Move'
    },
    copy: {
        slug: 'copy',
        name: 'Copy'
    }
}

export const ActionRelationEnum = {
    and: {
        slug: '&&',
        name: 'And'
    },
    or: {
        slug: '||',
        name: 'Or'
    }
}

export const ActionTargetEnum = {
    this_file: {
        slug: 'this_file',
        name: 'This file'
    },
    other_file: {
        slug: 'other_file',
        name: 'Other file'
    }
}