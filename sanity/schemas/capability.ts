export default {
    name: 'capability',
    title: 'Capabilities',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Icon Slug',
            type: 'string',
            description: 'e.g., stethoscope, brain, globe',
        },
        {
            name: 'image',
            title: 'Background Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'items',
            title: 'Key Points',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
        },
    ],
}
