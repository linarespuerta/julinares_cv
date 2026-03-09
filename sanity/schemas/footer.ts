export default {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        {
            name: 'cta',
            title: 'Call to Action',
            type: 'string',
            description: 'The label for the main contact button.',
        },
        {
            name: 'email',
            title: 'Email Address',
            type: 'string',
        },
        {
            name: 'linkedin',
            title: 'LinkedIn URL',
            type: 'url',
        },
    ],
}
