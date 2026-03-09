export default {
    name: 'impactStory',
    title: 'Impact Stories',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Story Title',
            type: 'string',
        },
        {
            name: 'story',
            title: 'The Story',
            type: 'text',
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
        },
    ],
}
