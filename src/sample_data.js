function condition(type, statement, value) {
    return {
        type,
        statement,
        value
    }
}


const sample_jobs = [
    {
        id: 0,
        name: "Job #1",
        status: 'active',
        frequency: 10,
        evaluations_max_id: 3,
        evaluations: [
            {
                id: 0,
                relation: '&&',
                condition: {
                    type: 'file_name',
                    statement: '==',
                    value: 'file123.jpg'
                }
            },
            {
                id: 1,
                relation: '||',
                condition: {
                    type: 'date_created',
                    statement: '>',
                    value: 'Jul 5, 2020'
                }
            },
            {
                id: 2,
                relation: '&&',
                condition: {
                    type: 'file_size',
                    statement: '<',
                    value: '10MB'
                }
            },
        ],
        action: {
            type: 'delete',
            target: 'file123.jpg'
        }
    },
    {
        id: 1,
        name: "Job #2",
        status: 'inactive'
    },
    {
        id: 2,
        name: "Job #3",
        status: 'error'
    }
];

export { sample_jobs };