export default {
    name: 'philosophy',
    title: 'Philosophy',
    type: 'document',
    fields: [
        {
            name: 'quote',
            title: 'Quote',
            type: 'text',
            description: 'The core philosophical message.',
        },
        {
            name: 'author',
            title: 'Author/Signature',
            type: 'string',
        },
    ],
}
