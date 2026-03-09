export default {
    name: 'trajectory',
    title: 'Trajectory',
    type: 'document',
    fields: [
        {
            name: 'period',
            title: 'Period',
            type: 'string',
            description: 'e.g., 2018 - 2022',
        },
        {
            name: 'title',
            title: 'Event Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
        },
    ],
}
